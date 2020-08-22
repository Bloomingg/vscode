<template>
  <div>
    <el-row :gutter="14">
      <el-col :span="4">
        <div class="label-wrap category">
          <label for>分类：</label>
          <div class="warp-content">
            <el-select v-model="categoryValue" placeholder="请选择" style="width: 100%;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
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
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column prop="title" label="标题" width="750"></el-table-column>
      <el-table-column prop="categoryId" label="类型" width="130"></el-table-column>
      <el-table-column prop="createDate" label="日期" width="237"></el-table-column>
      <el-table-column prop="user" label="管理员" width="115"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" class="hiden-button">删除</el-button>
          <el-button type="success" size="mini" class="hiden-button">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="black-space-30"></div>
    <el-row>
      <el-col :span="12">
        <el-button size="medium">批量删除</el-button>
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
    <DialogInfo :flag="dialogStatus" @close="close" />
  </div>
</template>

<script>
import DialogInfo from "./dialog/info";
import { reactive, ref } from "@vue/composition-api";
export default {
  components: {
    DialogInfo,
  },
  setup(props) {
    const tableData = reactive([
      {
        createDate: "2016-05-02",
        user: "王小虎",
        title: "上海市普陀区金沙江路 1518 弄",
        selection: "",
        categoryId: "国内信息",
      },
      {
        createDate: "2016-05-02",
        user: "王小虎",
        title: "上海市普陀区金沙江路 1518 弄",
        selection: "",
        categoryId: "国内信息",
      },
      {
        createDate: "2016-05-02",
        user: "王小虎",
        title: "上海市普陀区金沙江路 1518 弄",
        selection: "",
        categoryId: "国内信息",
      },
      {
        createDate: "2016-05-02",
        user: "王小虎",
        title: "上海市普陀区金沙江路 1518 弄",
        selection: "",
        categoryId: "国内信息",
      },
    ]);
    const options = reactive([
      {
        value: 1,
        label: "国际信息",
      },
      {
        value: 2,
        label: "国内信息",
      },
      {
        value: 3,
        label: "行业信息",
      },
    ]);
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

    const handleSizeChange = () => {};
    const handleCurrentChange = () => {};
    const close = () => {
      dialogStatus.value = false;
    };
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