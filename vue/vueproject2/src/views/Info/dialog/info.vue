<template>
  <el-dialog
    width="580px"
    title="收货地址"
    :visible.sync="dialogStatusFlag"
    :append-to-body="true"
    @close="close"
  >
    <el-form :model="form">
      <el-form-item label="标题" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="类型" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="概况" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { ref, reactive, watchEffect } from "@vue/composition-api";
export default {
  setup(props, { emit }) {
    const dialogStatusFlag = ref(false);
    const formLabelWidth = ref("70px");
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });
    watchEffect(() => {
      dialogStatusFlag.value = props.flag;
    });
    const close = () => {
      emit("close");
    };
    return {
      dialogStatusFlag,
      formLabelWidth,
      form,
      close,
    };
  },
  props: {
    flag: {
      type: Boolean,
      default: false,
    },
  },
  // watch: {
  //   flag: {
  //     handler(newValue, oldValue) {
  //       this.dialogStatusFlag = newValue;
  //     },
  //   },
  // },
};
</script>
<style lang='scss' scoped>
</style>