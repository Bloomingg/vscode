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
        <el-input placeholder="请输入内容" v-model="input" clearable style="width: 100%;"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="danger" style="width: 100%;">搜索</el-button>
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
    <el-table :data="tableData.item" border style="width: 100%">
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column prop="title" label="标题" width="750"></el-table-column>
      <el-table-column prop="categoryId" label="类型" width="130"></el-table-column>
      <el-table-column prop="createDate" label="日期" width="237"></el-table-column>
      <el-table-column prop="user" label="管理员" width="115"></el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="danger" size="mini" class="hiden-button" @click="del">删除</el-button>
          <el-button type="success" size="mini" class="hiden-button" @click="dialogStatus=true">编辑</el-button>
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
          :total="1000"
        ></el-pagination>
      </el-col>
    </el-row>

    <!-- 弹窗 -->
    <DialogInfo :flag="dialogStatus" @close="close" :categoryList="options.category" />
  </div>
</template>

<script>
import { GetCategory, GetList } from "@/api/news";
import DialogInfo from "./dialog/info";
import { reactive, ref, onMounted } from "@vue/composition-api";
import { global } from "@/utils/globalV3.0";
export default {
  components: {
    DialogInfo,
  },
  setup(props, { root }) {
    const tableData = reactive({
      item: [],
    });
    const options = reactive({
      category: [],
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
    const searchkey = ref("id");
    const categoryValue = ref("");
    const dataValue = ref("");
    const input = ref("");
    const { str, confirm } = global();

    const handleSizeChange = () => {};
    const handleCurrentChange = () => {};
    const close = () => {
      dialogStatus.value = false;
    };
    const del = () => {
      confirm({
        content: "确认删除当前信息，删除后无法恢复！",
      });
    };
    const delAll = () => {
      confirm({
        content: "确认当前选中信息，删除后无法恢复！",
      });
    };
    const getList = () => {
      let req = {
        categoryId: "",
        startTiem: "",
        endTime: "",
        title: "",
        id: "",
        pageNumber: 1,
        pageSize: 10,
      };
      GetList(req)
        .then((res) => {
          let data = res.data.data;
          console.log(res);
          tableData.item = data.data;
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
      input,
      handleSizeChange,
      handleCurrentChange,
      dialogStatus,
      close,
      del,
      delAll,
      getCategory,
      getList,
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