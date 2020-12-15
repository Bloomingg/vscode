<template>
  <div>
    <avue-crud
      :data="data.formData"
      :option="data.formOption"
      @row-save="rowSave"
      @row-update="rowUpdate"
      @row-del="rowDel"
      @refresh-change="refreshChange"
      @search-change="searchChange"
      @search-reset="searchChange"
      @rowEdit="rowEdit2"
      @rowUpdate="rowUpdate2"
    >
    </avue-crud>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ResourceCrud extends Vue {
  @Prop(String) resource!: string;
  data = {
    formData: [],
    formOption: {},
  };

  async fetch() {
    const res = await this.$http.get(`${this.resource}`);
    this.data.formData = res.data.data;
  }

  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.data.formOption = res.data;
  }

  async rowSave(row, done, loading) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success("新增成功！");
    this.fetch();
    done();
  }
  async rowUpdate(row, index, done, loading) {
    delete row.$index;
    await this.$http.put(`${this.resource}/${row._id}`, row);
    this.$message.success("修改成功！");
    this.fetch();
    done();
  }

  async rowDel(row) {
    try {
      await this.$confirm("是否确定删除？");
    } catch (error) {
      return;
    }
    await this.$http.delete(`${this.resource}/${row._id}`);
    this.$message.success("删除成功！");
    this.fetch();
  }

  async refreshChange() {
    this.fetch();
    this.$message.success("刷新成功！");
  }

  async rowEdit2(row, index) {
    console.log(row);
    console.log(1111);
  }

  rowUpdate2() {
    console.log(111);
  }

  async searchChange(params, done) {
    // console.log(params);
    // if (done) done();
    // this.params = params;
    // this.page.currentPage = 1;
    // this.getList();
    // this.$message.success('搜索成功')
  }

  created() {
    this.fetch();
    this.fetchOption();
  }
  mounted() {}
}
</script>
<style lang='scss' scoped>
</style>