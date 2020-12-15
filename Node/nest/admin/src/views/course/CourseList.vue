<template>
  <div>
    <el-button
      type="primary"
      size="small"
      @click="$router.push(`/courses/create`)"
      >添加</el-button
    >

    <el-table :data="data.data" border stripe>
      <el-table-column
        v-for="col in data.columns"
        :prop="col.prop"
        :key="col.prop"
        :label="col.label"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="success"
            size="small"
            @click="$router.push(`/courses/edit/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button type="danger" size="small" @click="remove(scope.row._id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CourseList extends Vue {
  data = {
    data: [],
    columns: [
      {
        label: "id",
        prop: "_id",
        width: "220",
      },
      {
        label: "课程名称",
        prop: "name",
        width: "200",
      },
      {
        label: "封面图",
        prop: "cover",
        width: "200",
      },
    ],
  };

  async fetch() {
    const res = await this.$http.get("courses");
    this.data.data = res.data.data;
  }

  async remove(id: Number) {
    try {
      await this.$confirm("是否确认删除");
    } catch (error) {
      return;
    }
    const res = await this.$http.delete(`courses/${id}`);
    this.$message.success("删除成功");
    this.fetch();
  }

  created() {
    this.fetch();
    console.log(this.data);
  }
}
</script>
<style lang='scss' scoped>
</style>