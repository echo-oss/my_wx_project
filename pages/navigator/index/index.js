// pages/components/view/pages/steps/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 2,
    steps: [{
        type:"show",
        id:0,
        title: "纸质材料准备",
        state: 1,
        isSub: true,
        discription:"请您准备纸质材料邮寄到\nXXXXXXXXXXX\n联系人:xxx。联系电话:\n139XXXX8276" ,
        onStyle:"查看"
      },
      { type:"submit",
        title: "上传电子版PDF材料",
        state: 1,
        isSub: false,
        id:3,
        discription:"请您将合同、结算单、发票、付款说明等PDF文件发送到微信中，然后根据提示进行上传" ,
        onStyle:"上传资料"
      },
      {
        type:"reject",
        title: "银行上传电子材料入系统等待审核",
        state: 2,
        isSub: false,
        discription:"银行已经将您上传的电子材料录入系统，请您耐心等待审核结果，审核期为：1-3个工作日" ,
        onStyle:"查看原因",
        id:0,
      },
      { type:"show",
        title: "登录网银",
        state: 1,
        isSub: true,
        id:1,
        discription:"请您使用招商银行为您开通的两个网银U盾登录招商银行网银网站，进行网签协议和上传发票" ,
        onStyle:"已完成"
      },
      { type:"reject",
        title: "中铁十八局审核发票中",
        state: 1,
        isSub: false,
        discription:"请您耐心等待，中铁十八局正在审核发票真伪" ,
        onStyle:"已处理",
        id:1,
      },
      { type:"reject",
        title: "招商银行审贷部审核",
        state: 3,
        isSub: false,
        discription:"请您耐心等待，招商银行审贷部正在处理上传资料" ,
        onStyle:"查看原因",
        id:2,
      },
      { type:"show",
        title: "融资申请",
        state: 0,
        isSub: false,
        discription:"请您登陆网银进行融资申请操作" ,
        onStyle:"待处理",
        id:2,
      },
      {type:"reject",
        title: "放贷中心审核",
        state: 0,
        isSub: false,
        discription:"请您耐心等待，招商银行审贷部正在处理上传资料" ,
        onStyle:"待处理",
        id:3,
      },
      {
        title: "审核完成放款",
        state: 0,
        isSub: false,
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },
  // onSub() {
  //   const that = this
  //   wx.chooseMessageFile({
  //     count: 10,
  //     state: 'all',
  //     success(res) {
  //       console.log(res)
  //       const pdf = res.tempFiles[0].path
  //       that.setData({
  //         pdf,
  //       })
  //       // tempFilePath可以作为img标签的src属性显示图片
  //       const tempFilePaths = res.tempFiles
  //     }
  //   })
  // },
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
  // onOpen() {
  //   console.log(111)
  //   wx.downloadFile({
  //     // 示例 url，并非真实存在
  //     url: 'http://tmp/wx200073a739242ad4.o6zAJsxH05UMraix7V4eki5LuwwU.fBMMVOzgAozle0b90325ccd46e9c5d60fef41b71380a.pdf',
  //     success: function (res) {
  //       console.log(res)
  //       const filePath = res.tempFilePath
  //       wx.openDocument({
  //         filePath: filePath,
  //         success: function (res) {
  //           console.log('打开文档成功')
  //         }
  //       })
  //     },
  //     fail: function (res) {
  //       console.log(res)
  //     }
  //   })
  // },
  onCheck(e){
    console.log(e)
    const type=e.currentTarget.dataset.type
    const id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/subPackages/index/pages/${type}/index?id=${id}`,
    })
  },
});