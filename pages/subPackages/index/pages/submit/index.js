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
    let list1=[{name:"合同材料"},{name:"结算单"},{name:"发票"}]
    if(options.id==="3"){
      this.setData({
      list:list1,
      name:"上传电子版资料"
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
  onSub() {
    const that = this
    wx.chooseMessageFile({
      count: 10,
      state: 'all',
      success(res) {
        console.log(res)
        const pdf = res.tempFiles[0].path
        that.setData({
          pdf,
        })
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFiles
      }
    })
  },
})