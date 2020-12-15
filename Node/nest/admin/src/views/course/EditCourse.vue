<template>
  <div>
    <h3>{{ isNew ? "新增" : "编辑" }}</h3>
    <ele-form
      v-model="data.formData"
      :form-desc="data.descData"
      :request-fn="handleSubmit"
      :rules="data.rules"
    >
    </ele-form>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class EditCourse extends Vue {
  @Prop(String) id!: string;

  data = {
    formData: {},
    descData: {
      name: {
        type: "input",
        label: "课程名称",
      },
      cover: {
        type: "input",
        label: "课程封面",
      },
    },
    rules: {
      name: { required: true, type: "string", message: "必须填写课程名称" },
      cover: { required: true, message: "必须填写课程封面" },
    },
  };

  //相当于计算属性
  get isNew() {
    return !this.id;
  }

  async handleSubmit(subData) {
    const reqUrl = this.isNew ? "courses" : `courses/${this.id}`;
    const method = this.isNew ? "post" : "put";
    const res = await this.$http[method](reqUrl, subData);
    this.$message.success("保存成功！");
    this.$router.go(-1);
    this.data.formData = {};
  }

  async fetch() {
    if (!this.isNew) {
      const res = await this.$http.get(`courses/${this.id}`);
      this.data.formData = res.data;
    }
  }

  created() {
    this.fetch();
  }
}
</script>
<style lang='scss' scoped>
</style>