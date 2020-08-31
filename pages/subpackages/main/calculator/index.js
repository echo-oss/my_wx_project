// pages/subpackages/main//calculator/index.js
import {Calculator} from "./calculator";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    modalName:null,
    count:0,
    list1:[
      "10%","20%","30%","40%"
    ],
    index1:0,
    listContent1:"暂无"
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
  formSubmit(e) {
    let end = Calculator.getCommercialLoan(this.data.count,this.data.index1)
    console.log(end)
    wx.navigateTo({
      url: `/pages/subpackages/main/calculatorEnd/index?count=${end}`,
    })
    
  },
  onList1(e){
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  submit(e){
    this.setData({
      listContent1:this.data.list1[this.data.index1],
      modalName: null
    })
  },
  choose(e){
    console.log(e)
    this.setData({
     index1:e.currentTarget.dataset.index
    })
  },
  calculator(e){
    this.setData({
      count:e.detail.value,
    })
    let count = this.data.count;
    console.log(count)
    let index = this.data.index1;
    let end = Math.ceil(Calculator.getCommercialLoan(count,index))

    this.setData({
      end,
    })
  }
})