// pages/components/view/pages/steps/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 5,
    steps: [{
        time: "完成时间:2020/07/05",
        type: "show",
        id: 0,
        title: "审核纸质材料",
        state: 1,
        isSub: true,
        discription: "手机号为13048007099的用户纸质材料已经签收",
        onStyle: "审核",
        isCheck: false,

      },
      {
        time: "完成时间:2020/07/06",
        type: "reject",
        title: "审核电子版PDF材料",
        state: 1,
        isSub: false,
        id: 0,
        discription: "手机号为13048007099的用户已经上传电子版PDF材料",
        onStyle: "审核资料"
      },
      {
        time: "完成时间:2020/07/07",
        type: "reject",
        title: "银行上传电子材料入系统等待审核",
        state: 2,
        isSub: false,
        discription: "正在上传资料入系统",
        onStyle: "上传资料",
        id: 1,
      },
      {
        time: "完成时间:2020/07/12",
        type: "show",
        title: "登录网银",
        state: 1,
        isSub: true,
        id: 0,
        discription: "请您使用招商银行为您开通的两个网银U盾登录招商银行网银网站，进行网签协议和上传发票",
        onStyle: "已完成"
      },
      {
        time: "完成时间:2020/07/16",
        type: "show",
        title: "中铁十八局审核发票中",
        state: 1,
        isSub: false,
        discription: "请您耐心等待，中铁十八局正在审核发票真伪",
        onStyle: "已处理",
        id: 2,
      },
      {
        time: "完成时间:2020/07/18",
        type: "show",
        title: "招商银行审贷部审核",
        state: 3,
        isSub: false,
        discription: "请您耐心等待，招商银行审贷部正在处理上传资料",
        onStyle: "查看原因",
        id: 3,
      },
      {
        time: "完成时间:2020/07/23",
        type: "show",
        title: "融资申请",
        state: 0,
        isSub: false,
        discription: "请您登陆网银进行融资申请操作",
        onStyle: "待处理",
        id: 2,
      },
      {
        time: "完成时间:2020/07/25",
        type: "show",
        title: "放贷中心审核",
        state: 0,
        isSub: false,
        discription: "请您耐心等待，招商银行审贷部正在处理上传资料",
        onStyle: "待处理",
        id: 4,
      },
      {
        time: "完成时间:2020/07/28",
        title: "审核完成放款",
        state: 0,
        isSub: false,
      }
    ]
    //   steps: [{
    //     type:"show",
    //     id:0,
    //     title: "纸质材料准备",
    //     state: 1,
    //     isSub: true,
    //     discription:"手机号为13048007099的用户纸质材料已经签收" ,
    //     onStyle:"审核",
    //     isCheck:false,

    //   },
    //   { type:"reject",
    //     title: "上传电子版PDF材料",
    //     state: 1,
    //     isSub: false,
    //     id:0,
    //     discription:"手机号为13048007099的用户已经上传电子版PDF材料" ,
    //     onStyle:"审核资料"
    //   },
    //   {
    //     type:"reject",
    //     title: "银行上传电子材料入系统等待审核",
    //     state: 2,
    //     isSub: false,
    //     discription:"银行已经您上传的电子材料录入系统，请您耐心等待审核结果，审核期为：1-3个工作日" ,
    //     onStyle:"查看原因",
    //     id:1,
    //   },
    //   { type:"show",
    //     title: "登录网银",
    //     state: 1,
    //     isSub: true,
    //     id:0,
    //     discription:"请您使用招商银行为您开通的两个网银U盾登录招商银行网银网站，进行网签协议和上传发票" ,
    //     onStyle:"已完成"
    //   },
    //   { type:"reject",
    //     title: "中铁十八局审核发票中",
    //     state: 1,
    //     isSub: false,
    //     discription:"请您耐心等待，中铁十八局正在审核发票真伪" ,
    //     onStyle:"已处理",
    //     id:2,
    //   },
    //   { type:"reject",
    //     title: "招商银行审贷部审核",
    //     state: 3,
    //     isSub: false,
    //     discription:"请您耐心等待，招商银行审贷部正在处理上传资料" ,
    //     onStyle:"查看原因",
    //     id:3,
    //   },
    //   { type:"show",
    //     title: "融资申请",
    //     state: 0,
    //     isSub: false,
    //     discription:"请您登陆网银进行融资申请操作" ,
    //     onStyle:"待处理",
    //     id:2,
    //   },
    //   {type:"reject",
    //     title: "放贷中心审核",
    //     state: 0,
    //     isSub: false,
    //     discription:"请您耐心等待，招商银行审贷部正在处理上传资料" ,
    //     onStyle:"待处理",
    //     id:4,
    //   },
    //   {
    //     title: "审核完成放款",
    //     state: 0,
    //     isSub: false,
    //   }
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let phone = options.phone
    let string = `手机号为${phone}的用户纸质材料已经签收`
    let steps = this.data.steps
    steps[0].discription = string
    this.setData({
      steps,
    })
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
  onCheck(e) {
    console.log(e)
    const type = e.currentTarget.dataset.type
    const id = e.currentTarget.dataset.id
    const index = e.currentTarget.dataset.index
    const list = this.data.steps
    if (type === "reject") {
      wx.navigateTo({
        url: `/pages/subPackages/pageOne/pages/${type}/index?id=${id}`,
      })
    } else {
      list[index].isCheck = true
      this.setData({
        steps: list,
      })
    }
  },
  onNav() {
    wx.navigateTo({
      url: '/pages/subPackages/pageOne/pages/detail/index',
    })
  }
});