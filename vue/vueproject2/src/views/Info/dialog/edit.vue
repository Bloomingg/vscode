<template>
  <el-dialog
    width="580px"
    title="编辑"
    :visible.sync="editInfoStatus"
    :append-to-body="true"
    @close="close"
    @opened="getAddCategory"
  >
    <el-form :model="form">
      <el-form-item label="类别" :label-width="formLabelWidth">
        <el-select v-model="form.category" placeholder="请选择活动区域">
          <el-option
            v-for="item in categoryOptions.item"
            :key="item.id"
            :label="item.category_name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" :label-width="formLabelWidth">
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="概况" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.content" placeholder="请输入概况"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="editInfoStatus = false">取 消</el-button>
      <el-button type="primary" @click="submit" :loading="submitLoading">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { AddInfo, GetList, EdidInfo } from "@/api/news";
import { ref, reactive, watchEffect } from "@vue/composition-api";
export default {
  setup(props, { emit, root }) {
    const submitLoading = ref(false);
    const editInfoStatus = ref(false);
    const formLabelWidth = ref("70px");
    const categoryOptions = reactive({
      item: [],
    });
    const form = reactive({
      category: "",
      title: "",
      content: "",
    });
    watchEffect(() => {
      editInfoStatus.value = props.flag;
    });
    const close = () => {
      emit("close");
    };
    const getAddCategory = () => {
      categoryOptions.item = props.categoryList;
      console.log(props.id);
      getInfo();
    };
    const getInfo = () => {
      let reqData = {
        pageNumber: 1,
        pageSize: 1,
        id: props.id,
      };
      GetList(reqData).then((res) => {
        let data = res.data.data.data[0];
        // console.log(data);
        (form.category = data.categoryId),
          (form.title = data.title),
          (form.content = data.content);
      });
    };
    const resetForm = () => {
      form.categoryId = "";
      form.title = "";
      form.imgUrl = "";
      form.createDate = "";
      form.status = "";
      form.content = "";
    };
    const submit = () => {
      let reqData = {
        id: props.id,
        categoryId: form.category,
        title: form.title,
        imgUrl: "",
        createDate: "",
        status: "",
        content: form.content,
      };
      submitLoading.value = true;
      // console.log(reqData);
      EdidInfo(reqData)
        .then((res) => {
          let data = res.data;
          console.log(data);
          root.$message({
            message: data.message,
            type: "success",
          });
          submitLoading.value = false;
          emit("getList");
          resetForm();
          // console.log(res.data);
        })
        .catch((err) => {
          submitLoading.value = false;
        });
    };

    return {
      editInfoStatus,
      formLabelWidth,
      form,
      close,
      getAddCategory,
      categoryOptions,
      submit,
      submitLoading,
      resetForm,
      getInfo,
    };
  },
  props: {
    flag: {
      type: Boolean,
      default: false,
    },
    categoryList: {
      type: Array,
      default: () => [],
    },
    id: {
      type: String,
      default: "",
    },
  },
  // watch: {
  //   flag: {
  //     handler(newValue, oldValue) {
  //       this.editInfoStatus = newValue;
  //     },
  //   },
  // },
};
</script>
<style lang='scss' scoped>
@import "../../../styles/main.scss";
</style>