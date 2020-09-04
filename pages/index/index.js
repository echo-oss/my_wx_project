// pages/components/view/pages/steps/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    steps: [{
        type:"show",
        id:0,
        title: "纸质邮寄(营业执照、数字承诺函、征信授权书)",
        state: 0,
        isSub: true
      },
      { type:"submit",
        title: "上传电子版材料(合同材料、结算单、发票、付款说明) 使用邮箱上传",
        state: 0,
        isSub: false,
        id:3,
      },
      {
        title: "银行录入系统",
        state: 0,
        isSub: false
      },
      { type:"show",
        title: "登录网银",
        state: 0,
        isSub: true,
        id:1,
      },
      {
        title: "18局审核发票",
        state: 0,
        isSub: false
      },
      {
        title: "分行审贷部门审核相关材料",
        state: 0,
        isSub: false
      },
      {
        title: "登陆网银点击融资申请",
        state: 0,
        isSub: false
      },
      {
        title: "银行发送材料到放款中心审核",
        state: 0,
        isSub: false
      },
      {
        title: "审核完成放款",
        state: 0,
        isSub: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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
  onNext() {
    if (this.data.activeIndex < 2) {
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          this.setData({
            activeIndex: this.data.activeIndex + 1
          });
        }, 2000 * (i + 1))

      }
    } else {
      wx.lin.showToast({
        title: '已经到最后一步了哦'
      });
    }
  },

  onPrevious() {
    if (this.data.activeIndex > 0) {
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          this.setData({
            activeIndex: this.data.activeIndex - 1
          });
        }, 2000 * (i + 1))

      }
    } else {
      wx.lin.showToast({
        title: '已经到第一步了哦'
      });
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
  onOpen() {
    console.log(111)
    wx.downloadFile({
      // 示例 url，并非真实存在
      url: 'http://tmp/wx200073a739242ad4.o6zAJsxH05UMraix7V4eki5LuwwU.fBMMVOzgAozle0b90325ccd46e9c5d60fef41b71380a.pdf',
      success: function (res) {
        console.log(res)
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  onCheck(e){
    console.log(e)
    const type=e.currentTarget.dataset.type
    const id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/subPackages/index/pages/${type}/index?id=${id}`,
    })
  }
});