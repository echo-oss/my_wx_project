// pages/subPackages/index/pages/reject/index.js

// pages/subPackages/index/pages/show/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    index:null,
    select: false,
    grades: ['通过', '未通过', '资料不全', ],
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list1 = [{
      name: "合同材料",
      src:"/pages/subPackages/pageOne/pages/reject/images/u129.svg",
      discription: "请您审核用户与中铁十八局的合同PDF版本",
      disabled:false,
    }, {
      name: "结算单",
      src:"/pages/subPackages/pageOne/pages/reject/images/u129.svg",
      discription: "请您审核用户与中铁十八局的结算单PDF版本",
      disabled:false,
    }, {
      name: "发票",
      src:"/pages/subPackages/pageOne/pages/reject/images/u129.svg",
      discription: "请您审核用户与中铁十八局的发票PDF版本",
      disabled:false,
    }, {
      name: "付款说明",
      src:"/pages/subPackages/pageOne/pages/reject/images/u129.svg",
      discription: "请您审核用户与中铁十八局的付款说明PDF版本",
      disabled:false,
    }]
    if (options.id === "0") {
      this.setData({
        list: list1,
        tip: "说明：请您将合同、结算单、发票、付款说明等文件进行审核，并且在操作栏中选择通过、不通过以及资料不全。选择不通过或者资料不全需要手动输入不通过原因。点击审核完毕可跳转至首页",
        name: "审核电子版PDF资料"
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
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index : e.detail.value
    })
  },
})