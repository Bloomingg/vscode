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
      let oldProduct = context.state.cartList.find(item=>item.iid===payload.iid)
      if(oldProduct){
        oldProduct.count+=1
      }else{
        payload.count=1
        payload.ckecked = true
        context.state.cartList.push(payload)
        
      }
      
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
