import {MessageBox} from 'element-ui'
import { ref } from '@vue/composition-api';
export function global(){
    const str = ref('')
    const confirm=(params)=>{
      MessageBox.confirm(params.content, "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
      center: true,
    })
    .then(() => {
      root.$message({
        type: "success",
        message: "删除成功!",
      });
    })
    .catch(() => {
      root.$message({
        type: "info",
        message: "已取消删除",
      });
    });
  }
  return{
    str,
    confirm
  }
}
