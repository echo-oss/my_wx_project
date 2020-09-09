// pages/subPackages/index/pages/show/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list1 = [{
      name: "合同材料",
      src: "/pages/subPackages/index/pages/submit/images/u129.svg",
      discription: "请您将与中铁十八局的合同转为PDF版本进行上传",
      disabled: false,
    }, {
      name: "结算单",
      src: "/pages/subPackages/index/pages/submit/images/u129.svg",
      discription: "请您将与中铁十八局的结算单转为PDF版本进行上传",
      disabled: false,
    }, {
      name: "发票",
      src: "/pages/subPackages/index/pages/submit/images/u129.svg",
      discription: "请您将与中铁十八局的发票转为PDF版本进行上传",
      disabled: false,
    }, {
      name: "付款说明",
      src: "/pages/subPackages/index/pages/submit/images/u129.svg",
      discription: "请您将与中铁十八局的付款说明转为PDF版本进行上传",
      disabled: false,
    }]
    if (options.id === "3") {
      this.setData({
        list: list1,
        tip: "说明：请您将合同、结算单、发票、付款说明等文件转为PDF格式进行上传，请您先将PDF文件发送至微信中，点击上传后从微信对话框中选择文件",
        name: "上传电子版PDF资料"
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
  onSub(e) {
    const index = e.currentTarget.dataset.index
    if (this.data.list[index].disabled == false) {
      wx.lin.showToast({
        title: '上传成功~',
        icon: 'success',
        success: (res) => {
          console.log(res)
        },
        complete: (res) => {
          console.log(res)
        }
      })
    }
    const list = this.data.list
    list[index].disabled = true
    this.setData({
      list,
    })
  }
})