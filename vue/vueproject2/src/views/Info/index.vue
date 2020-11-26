<template>
  <div>
    <el-row :gutter="14">
      <el-col :span="4">
        <div class="label-wrap category">
          <label for>分类：</label>
          <div class="warp-content">
            <el-select v-model="categoryValue" placeholder="请选择" style="width: 100%;">
              <el-option
                v-for="item in options.category"
                :key="item.id"
                :label="item.category_name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="label-wrap date">
          <label for>日期：&nbsp;&nbsp;</label>
          <div class="warp-content">
            <el-date-picker
              style="width: 100%;"
              v-model="dataValue"
              type="datetimerange"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']"
            ></el-date-picker>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="label-wrap key-work">
          <label for>关键字：&nbsp;&nbsp;</label>
          <div class="warp-content">
            <el-select v-model="searchkey" clearable placeholder="请选择" style="width: 100%;">
              <el-option
                v-for="item in searchOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <el-input placeholder="请输入内容" v-model="search_keyWork" clearable style="width: 100%;"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="danger" style="width: 100%;" @click="search">搜索</el-button>
      </el-col>
      <el-col :span="2" :offset="3">
        <el-button
          type="danger"
          class="pull-right"
          style="width: 100%;"
          @click="dialogStatus=true"
        >新增</el-button>
      </el-col>
    </el-row>

    <div class="black-space-30"></div>
    <!-- 表格 -->
    <el-table
      :data="tableData.item"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column prop="title" label="标题" width="750"></el-table-column>
      <el-table-column prop="categoryId" label="类型" width="130" :formatter="toCategory"></el-table-column>
      <el-table-column prop="createDate" label="日期" width="237" :formatter="formatter"></el-table-column>
      <el-table-column prop="user" label="管理员" width="115"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" class="hiden-button" @click="del(scope.row.id)">删除</el-button>
          <el-button
            type="success"
            size="mini"
            class="hiden-button"
            @click="editInfo(scope.row.id)"
          >编辑</el-button>
            <el-button type="success" size="mini" @click="detailed(scope.row)" v-btnPerm="'info:detailed'" class="hiden-button">编辑详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="black-space-30"></div>
    <el-row>
      <el-col :span="12">
        <el-button size="medium" @click="delAll">批量删除</el-button>
      </el-col>
      <el-col :span="12">
        <el-pagination
          class="pull-right"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          background
          :page-sizes="[5,10,20,30]"
          layout="total,sizes,prev,pager,next,jumper"
          :total="total"
        ></el-pagination>
      </el-col>
    </el-row>

    <!-- 弹窗 -->
    <DialogInfo :flag="dialogStatus" @close="close" :categoryList="options.category" />
    <DialogEditInfo
      @getList="getList"
      :flag="editInfoStatus"
      @close="close"
      :categoryList="options.category"
      :id="infoId"
    />
  </div>
</template>

<script>
import { timestampToTime } from "@/utils/common";
import { GetCategory, GetList, DeleteInfo } from "@/api/news";
import DialogInfo from "./dialog/info";
import DialogEditInfo from "./dialog/edit";
import { reactive, ref, onMounted } from "@vue/composition-api";
import { global } from "@/utils/globalV3.0";
export default {
  components: {
    DialogInfo,
    DialogEditInfo,
  },
  setup(props, { root }) {
    const tableData = reactive({
      item: [],
    });
    const options = reactive({
      category: [],
    });
    const time = reactive({
      startTime: "",
      endTime: "",
    });
    const page = reactive({
      pageNumber: 1,
      pageSize: 10,
    });
    const searchOptions = reactive([
      {
        value: "id",
        label: "ID",
      },
      {
        value: "title",
        label: "标题",
      },
    ]);
    const dialogStatus = ref(false);
    const editInfoStatus = ref(false);
    const searchkey = ref("id");
    const categoryValue = ref("");
    const dataValue = ref("");
    const search_keyWork = ref("");
    const { str, confirm } = global();
    const total = ref(0);
    const deleteInfoId = ref("");
    const infoId = ref("");

    const handleSizeChange = (val) => {
      page.pageSize = val;
    };
    const handleCurrentChange = (val) => {
      page.pageNumber = val;
      getList();
    };
    const close = () => {
      dialogStatus.value = false;
      editInfoStatus.value = false;
    };
    const handleSelectionChange = (val) => {
      // console.log(val);
      let id = val.map((item) => item.id);
      deleteInfoId.value = id;
    };
    const search = () => {
      let req = searchData();
      console.log(req);
      getList();
    };
    const searchData = () => {
      let req = {
        pageNumber: page.pageNumber,
        pageSize: page.pageSize,
      };
      if (categoryValue.value) {
        req.categoryId = categoryValue.value;
      }
      if (dataValue.value.length > 0) {
        req.startTime = dataValue.value[0];
        req.endTime = dataValue.value[1];
      }
      if (search_keyWork.value) {
        req[searchkey.value] = search_keyWork.value;
      }
      return req;
    };
    const del = (id) => {
      console.log(id);
      deleteInfoId.value = [id];
      confirm({
        content: "确认删除当前信息，确认后将无法恢复！！",
        tip: "警告",
        fn: confirmDelete,
      });
    };
    const editInfo = (id) => {
      // console.log(id);
      infoId.value = id;
      editInfoStatus.value = true;
    };
    const delAll = () => {
      if (!deleteInfoId.value || deleteInfoId.value.length == 0) {
        root.$message({
          message: "请选择要删除的数据！！",
          type: "error",
        });
        return false;
      }
      confirm({
        content: "确认删除选择的数据，确认后将无法恢复！",
        tip: "警告",
        fn: confirmDelete,
      });
    };
    const confirmDelete = (value) => {
      DeleteInfo({ id: deleteInfoId.value }).then((response) => {
        deleteInfoId.value = "";
        getList();
      });
    };
    const formatter = (row) => {
      return timestampToTime(row.createDate);
    };
    const toCategory = (row) => {
      // 调用一个函数，返回一个新的值，替换原始值
      let categoryId = row.categoryId;
      let categoryData = options.category.filter(
        (item) => item.id == categoryId
      )[0];
      if (!categoryData) {
        return false;
      }
      return categoryData.category_name;
    };
    const getList = () => {
      let req = searchData();
      GetList(req)
        .then((res) => {
          let data = res.data.data;
          console.log(res);
          tableData.item = data.data;
          total.value = data.total;
        })
        .catch((err) => {});
    };
    const getCategory = () => {
      GetCategory({})
        .then((res) => {
          let data = res.data.data.data;
          options.category = data;
          console.log(data);
        })
        .catch((err) => {});
    };

    onMounted(() => {
      getCategory();
      getList();
    });
    return {
      options,
      searchOptions,
      categoryValue,
      dataValue,
      searchkey,
      tableData,
      search_keyWork,
      handleSizeChange,
      handleCurrentChange,
      dialogStatus,
      close,
      del,
      delAll,
      getCategory,
      getList,
      total,
      formatter,
      toCategory,
      handleSelectionChange,
      search,
      editInfoStatus,
      editInfo,
      infoId,
    };
  },
};
</script>
<style lang='scss' scoped>
@import "../../styles/config.scss";
.label-wrap {
  &.category {
    @include labelDom(left, 60, 40);
  }
  &.date {
    @include labelDom(right, 93, 40);
  }
  &.key-work {
    @include labelDom(right, 99, 40);
  }
}

button.show-button {
  display: inline-block;
}
</style>