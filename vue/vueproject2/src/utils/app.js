import cookie from 'cookie_js'

export function getToken(){
  return cookie.get('admin-token')
}

export function setToken(token){
  return cookie.set('admin-token',token)
}

export function removeToken(){
  return cookie.remove('admin-token')
}

export function setUserName(value){
  return cookie.set('username',value)
}

export function getUserName(){
  return cookie.get('username')
}

export function removeUserName(){
  return cookie.remove('username')
}
