import {config} from "../config/config";
class Http{
  static async request(url,data,method="post",TerminalType=1){
    const date= new Date()
    const CreationTime=date.toUTCString()
    wx.request({
      url: `${config.apiBaseUrl}${url}`,
      data,
      method,
      header:{
        SystemUserID:"",
        SystemIP:"",
        TerminalType,
        CreationTime,
        AreaDisplayName:"",
        AreaName:"",
      }
    })
  }   
}