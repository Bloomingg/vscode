<template>
  <div>
    <el-table ref="multipleTable" :data="data.tableData" tooltip-effect="dark" style="width: 100%">
      <el-table-column v-if="data.tableConfig.isSelection" type="selection" width="55"></el-table-column>
      <template v-for="item in data.tableConfig.tHead">
        <el-table-column
          :min-width="item.min_width"
          :prop="item.prop"
          :label="item.label"
          :key="item.prop"
          v-if="item.columnType === 'slot'"
        >
          <template slot-scope="scope">
            <slot :name="item.slotName" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <!-- 文本数据 -->
        <el-table-column
          :min-width="item.min_width"
          :prop="item.prop"
          :label="item.label"
          :key="item.prop"
          v-else
        ></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import { reactive, onBeforeMount } from "@vue/composition-api";
export default {
  props: {
    configTable: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { root }) {
    const data = reactive({
      tableConfig: {
        isSelection: true,
        tHead: [],
      },
      tableData: [
        {
          email: "1293499952@qq.com",
          name: "王小虎",
          phone: 1233211234,
          address: "上海市普陀区金沙江路 1518 弄",
          role: "管理员",
        },
        {
          email: "1293499952@qq.com",
          name: "王小虎",
          phone: 1233211234,
          address: "上海市普陀区金沙江路 1519 弄",
          role: "管理员",
        },
      ],
    });
    onBeforeMount(() => {
      let temp = props.configTable;
      let keys = Object.keys(data.tableConfig);
      for (let key in temp) {
        if (keys.includes(key)) {
          data.tableConfig[key] = temp[key];
        }
      }
      // data.tableConfig.tHead = props.configTable.tHead;
    });
    return {
      data,
    };
  },
};
</script>
<style lang='scss' scoped>
</style>