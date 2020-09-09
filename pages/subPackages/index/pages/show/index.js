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
    console.log(options)
    let list1 = [{
      name: "营业执照",
      src: "/pages/subPackages/index/pages/show/images/timg1.png",
      discription: "请您准备好您的营业执照副本复印件并盖上公章"
    }, {
      name: "数字承诺书",
      src: "/pages/subPackages/index/pages/show/images/timg3.png",
      discription: "请您准备好数字证书使用承诺函（纸质）"
    }, {
      name: "征信授权书",
      src: "/pages/subPackages/index/pages/show/images/timg2.png",
      discription: "请您准备好授权书（纸质）"
    }]

    let list2 = [{
      name: "网签协议",
      src: "/images/u231.png",
      discription: "请您根据下述操作进行网签协议"
    }, {
      name: "上传发票",
      src: "/images/u226.png",
      discription: "请您根据下述操作进行上传发票"
    }]
    let list3 = [{
      name: "融资申请",
      src: "/images/timg1.png",
      discription: "请您根据下述操作进行融资申请"
    }]
    if (options.id === "0") {
      this.setData({
        list: list1,
        style: "已知晓并邮寄",
        name: "纸质材料准备",
        tip: "说明：请您将以下纸质材料发送到：天津市XX区XXX街道XXX招商银行XX支行，收件人：XXX，电话：XXXX，如果您不清楚寄送什么材料，请联系为您办理业务的客户经理索取材料。",
      })
    }
    if (options.id === "1") {
      this.setData({
        list: list2,
        style: "已完成",
        name: "登陆网银",
        tip: "说明：请您登录网银按照如下操作进行网签协议的签署和上传发票",
      })
    }
    if (options.id === "2") {
      this.setData({
        list: list3,
        style: "已完成",
        name: "融资申请",
        tip: "说明：请您登录网银按照如下操作进行融资申请",
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
  onShow(e) {
    console.log(e)
    const list = this.data.list
    const src = e.currentTarget.dataset.src
    const srclist = []
    list.forEach(Element => {
      srclist.push(Element.src)
    })
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: srclist, // 需要预览的图片http链接列表
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {},
      complete: function (res) {},
    })
  },
  onBack() {
    wx.navigateBack({
      delta: 1,
    })
  }

})