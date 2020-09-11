// pages/text/love/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    index:0,
    time: 0,
    list1:[{name:"运动",show:true},{name:"美食",show:true},{name:"家居",show:true}],
    content:"请点击按钮",
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorage({
      key:"list",
      data:[]
    })
  },
  onShareAppMessage() {
    return {
      title: 'picker-view',
      path: 'page/component/pages/picker-view/picker-view'
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   this.setData({
     list:wx.getStorageSync('list')
   })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onTip(){
    wx.navigateTo({
      url: '../love2/index',
    })
  },
  onPlay(){
    let i = this._randomNum(0,this.data.list.length-1)
    let j = this._randomNum(0,20)
    this.setData({
      content:this.data.list[i],
      content1:j
    })
    console.log(i)
    console.log(this.data.content)
  },
  _randomNum(minNum,maxNum){ 
  switch(arguments.length){ 
      case 1: 
          return parseInt(Math.random()*minNum+1,10); 
      break; 
      case 2: 
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      break; 
          default: 
              return 0; 
          break; 
  } 
},
onRemove(e){

  this.data.list1[e.currentTarget.dataset.id].show = false
  this.setData({
    list1:this.data.list1
  })
},
bindPickerChange: function(e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  let index = e.detail.value
  let array = this.data.array
  let time = array[index] * 60
  this.setData({
    index,
    time
  })
},
turn(){
  let flag = this.data.flag
  this.setData({
    flag:!flag
  })
},
getUserInfo(res){
  console.log(res)
},
// onLoad(){
//   wx.getSetting({
//     success:res=>{
//       if (res.authSetting['scope.userLocation'] === undefined) {
//         wx.getLocation({
//           success:res=>{console.log(res)}
//         })
//         // 用户没有请求过的授权，不需要我们主动弹窗，微信会提供弹
//       }
//     }
//   })
// },
})