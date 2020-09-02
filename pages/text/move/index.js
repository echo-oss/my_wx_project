// pages/text/move/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log("#item1")
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
  onMove(e){
    console.log(this.data.flag)
    if(!this.data.flag){
      this.animate('#item1', [
        { opacity: 1.0, translateX:0 },
        { opacity: 0, translateX: 94},
        { opacity: 1.0, translateX:188},
        ], 500, function () {
          this.clearAnimation('#item1', { opacity: true, rotate: true }, function () {
            console.log("清除了#container上的opacity和rotate属性")
          })
      }.bind(this))

      this.animate('#item2', [
        { opacity: 1.0, translateX:0 },
        { opacity: 0, translateX: -94},
        { opacity: 1.0, translateX:-188},
        ], 500, function () {
          this.clearAnimation('#item2', { opacity: true, rotate: true }, function () {
            console.log("清除了#container上的opacity和rotate属性")
          })
      }.bind(this))
      this.data.flag=true
      return
    }
    
  if(this.data.flag){
    this.animate('#item1', [
      { opacity: 1.0, translateX:188},
      { opacity: 0, translateX: 94},
      { opacity: 1.0, translateX:0},
      ], 500, function () {
        this.clearAnimation('#item1', { opacity: true, rotate: true }, function () {
          console.log("清除了#container上的opacity和rotate属性")
        })
    }.bind(this))
    this.animate('#item2', [
      { opacity: 1.0, translateX:-188 },
      { opacity: 0, translateX: -94},
      { opacity: 1.0, translateX:0},
      ], 500, function () {
        this.clearAnimation('#item1', { opacity: true, rotate: true }, function () {
          console.log("清除了#container上的opacity和rotate属性")
        })
    }.bind(this))
    this.data.flag=false
    return
  }

  


  
}
  


})