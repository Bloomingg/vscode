<template>
  <div>
    <table-vue :configTable="data.configTable">
      <template v-slot:status="slotData">
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </template>
      <template v-slot:operation="slotData">
        <el-button size="small" type="success" @click="operationEdit(slotData.data)">编辑</el-button>
        <el-button size="small" type="danger" @click="operationDel(slotData.data)">删除</el-button>
      </template>
    </table-vue>
  </div>
</template>

<script>
import TableVue from "@/components/Table/TableVue";
import { reactive, ref } from "@vue/composition-api";
export default {
  components: {
    TableVue,
  },
  setup(props) {
    const data = reactive({
      configTable: {
        isSelection: true,
        tHead: [
          {
            label: "邮箱",
            prop: "email",
          },
          {
            label: "真实姓名",
            prop: "name",
            min_width: "50",
          },
          {
            label: "手机号",
            prop: "phone",
          },
          {
            label: "地区",
            prop: "address",
          },
          {
            label: "角色",
            prop: "role",
            min_width: "50",
          },
          {
            label: "禁用状态",
            prop: "status",
            min_width: "50",
            columnType: "slot",
            slotName: "status",
          },
          {
            label: "操作",
            prop: "operation",
            columnType: "slot",
            slotName: "operation",
          },
        ],
      },
    });
    const value = ref("");
    const operationEdit = (value) => {
      console.log(value);
    };
    const operationDel = (value) => {
      console.log(value);
    };
    return {
      data,
      value,
      operationEdit,
      operationDel,
    };
  },
};
</script>
<style lang='scss' scoped>
</style>