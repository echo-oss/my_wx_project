// pages/subPackages/index/pages/show/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list1=[{name:"营业执照",src:"/pages/subPackages/index/images/timg-9.jpeg"},{name:"数字承诺书",src:"/pages/subPackages/index/images/timg-9.jpeg"},{name:"征信授权书",src:"/pages/subPackages/index/images/timg-10.jpeg"}]

    let list2=[{name:"网签协议",src:"/pages/subPackages/index/images/timg-9.jpeg"},{name:"上传发票",src:"/pages/subPackages/index/images/timg-9.jpeg"}]
    if(options.id==="0"){
      this.setData({
      list:list1,
      name:"纸质邮寄"
    })}
    if(options.id==="1"){
      this.setData({
      list:list2,
      name:"登陆网银"
    })}
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
  onShow(e){
    console.log(e)
    const list=this.data.list
    const src=e.currentTarget.dataset.src
    const srclist=[]
    list.forEach(Element=>{
      srclist.push(Element.src)
    })
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: srclist, // 需要预览的图片http链接列表
      success: function(res) {console.log(res)},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onBack(){
    wx.navigateBack({
      delta: 1,
    })
  }
  
})