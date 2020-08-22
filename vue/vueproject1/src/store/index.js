import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
   
  },
  actions: {
    addCart(context,payload){
      return new Promise((resolve,reject)=>{
        let oldProduct = context.state.cartList.find(item=>item.iid===payload.iid)
      if(oldProduct){
        oldProduct.count+=1
        resolve('当前商品数量+1')
      }else{
        payload.count=1
        payload.ckecked = true
        context.state.cartList.push(payload)
        resolve('商品添加成功')
      }
      })
      
    }
  },
  modules: {
  },
  getters:{
    cartLength(state){
      let counter = 0;
      for(let i in state.cartList){
        counter += state.cartList[i].count
      }
      return counter
    },
    cartList(state){
      return state.cartList
    }
  }
})
