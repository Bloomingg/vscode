<template>
  <div>
    <avue-crud
      :data="data.formData"
      :option="data.formOption"
      :page="data.page"
      @row-save="rowSave"
      @row-update="rowUpdate"
      @row-del="rowDel"
      @refresh-change="refreshChange"
      @search-change="searchChange"
      @search-reset="searchChange"
      @on-load="onLoad"
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
    page: {
      total: 0,
      currentPage: 1,
      pageSize: 2,
      pageSizes: [2, 5, 10],
    },
    query: {
      limit: 2,
      page: 1,
      where: {},
    },
  };

  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: {
        query: this.data.query,
      },
    });
    this.data.formData = res.data.data;
    this.data.page.total = res.data.total;
    this.data.page.currentPage = res.data.page;
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

  async onLoad({ currentPage, pageSize }) {
    this.data.query.limit = pageSize;
    this.data.query.page = currentPage;
    this.fetch();
  }

  // async currentChange(page) {
  //   // console.log(page);
  //   this.data.query.limit = this.data.page.pageSize;
  //   this.data.query.page = page;
  //   this.fetch();
  // }

  // async sizeChange(size) {
  //   // console.log(size);
  //   this.data.page.pageSize = size;
  // }

  async searchChange(params, done) {
    // console.log(params);
    // if (done) done();
    // this.params = params;
    for (let k in params) {
      const field = this.data.formOption.column.find((v) => v.prop === k);
      if (field.regex) {
        params[k] = { $regex: params[k] };
      }
    }
    this.data.query.page = 1;
    this.data.query.where = params;
    this.fetch();
    done();
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