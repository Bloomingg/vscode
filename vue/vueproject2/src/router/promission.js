import router from './index';
import {getToken,removeToken,removeUserName} from '@/utils/app';

const whiteRouter = ['/login'];

router.beforeEach((to,from,next)=>{
  if(getToken()){
    console.log('存在');
    if(to.path === '/login'){
      removeToken()
      removeUserName()
      next()
    }else{
      next()
    }
  }else{
    if(whiteRouter.indexOf(to.path)!==-1){
      next()
    }else{
      next('/login')
    }
  }
})