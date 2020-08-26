// pages/subpackages//main/houseList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    house:[
      {
        src:"images/grid/house.jpeg",
        name:"融创",
        price:16500,
        tag:[
          "住宅","项目在建","装修"
        ],
        subTitle:[
          "地区","地区","建面"
        ]
      }
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
  onTap(e){
    wx.navigateTo({
      url: `/pages/subpackages/detail/index/index`,
    })
  }
})