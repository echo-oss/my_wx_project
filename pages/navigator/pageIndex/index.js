// pages/navigator/pageIndex/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {"phone":"13048007099","steps":"邮寄纸质材料","time":"09-08/9:47"},
      {"phone":"13847005089","steps":"上传纸质材料","time":"09-09/11:40"},
      {"phone":"13848005089","steps":"审贷部审核","time":"09-10/8:37"},
      {"phone":"13802545089","steps":"已完成","time":"09-11/6:26"},
      {"phone":"13803645089","steps":"审贷驳回","time":"09-12/7:44"},
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onCheck(e){
    console.log(e)
    let phone = e.currentTarget.dataset.phone
    wx.navigateTo({
      url: `/pages/navigator/pageOne/index?phone=${phone}`,
    })
  }
})