import { Login } from "@/api/login";
import {setToken,setUserName,getUserName,removeToken,removeUserName} from '@/utils/app'

const login = {
  state: {  
    token:'',
    username:getUserName()||''
  },
  getters:{

  },
  mutations: {
    SET_TOKEN(state,value){
      state.token=value
    },
    SET_USERNAME(state,value){
      state.username=value
    }
  },
  actions: {
    login(content,requestData){
      return new Promise((resolve,reject) =>{
        Login(requestData).then(response =>{
          // console.log(response);
          let data = response.data.data
          content.commit('SET_TOKEN',data.token)
          content.commit('SET_USERNAME',data.username)
          setToken(data.token)
          setUserName(data.username)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    exit(content){
      return new Promise((resolve,reject) =>{
          removeToken()
          removeUserName()
          content.commit('SET_TOKEN','')
          content.commit('SET_USERNAME','')
          resolve()      
      })
    }
  }
}

export default login