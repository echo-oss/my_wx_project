// pages/subPackages/index/pages/reject/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id === "0") {
      this.setData({
        name: "上传电子版PDF材料",
        tip: "说明：招商银行将会对您邮寄的和上传的资料进行审核",
        reason:["请您上传正确的发票PDF文件","请您上传正确的付款说明PDF文件"]
      })
    }
    if (options.id === "1") {
      this.setData({
        name: "上传电子版PDF材料",
        tip: "说明：中铁十八局将会对您上传的发票进行审核",
        reason:["您上传的发票不清楚，请重新上传"]
      })
    }
    if (options.id === "2") {
      this.setData({
        name: "上传电子版PDF材料",
        tip: "说明：招商银行将会对您邮寄的和上传的资料进行审核",
        reason:["请您上传正确的发票PDF文件","请您上传正确的付款说明PDF文件"]
      })
    }
    if (options.id === "3") {
      this.setData({
        name: "上传电子版PDF材料",
        tip: "说明：放贷中心将会对您邮寄的和上传的资料进行审核",
        reason:["请您上传正确的发票PDF文件","请您上传正确的付款说明PDF文件"]
      })
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
  onBack() {
    wx.navigateBack({
      delta: 1,
    })
  }
})