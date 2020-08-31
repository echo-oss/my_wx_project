// pages/subpackages//detail/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loc:{
      Unionid: "o0s9Z5HVeergdLNRakOekLKJ5bf8",
      address: "河北-金钟河大桥 群芳路与靖江路交口东北侧",
      imgUrl: "https://www.jinduocar.com/wow/2020-05-07/20050809253702_logo.jpg",
      latitude: "39.11323",
      longitude: "117.180062",
      name: "",
      phone: "13132052332",
      time: "2020-08-28 08:23:22",
      type: "程序打开"
    },
    h:wx.getSystemInfoSync().windowHeight-50,
    tag:[
      "住宅","项目在建","装修"
    ],
    house:[
      {
        src:"/images/hoom/372x280n(3).jpg",
        name:"中国铁建公馆189",
        price:"98万元/套起",
        tag:[
          "住宅","项目在建","装修"
        ],
        subTitle:[
          "地区","地区","建面"
        ]
      }
    ],
    bannerG:[
      {
        src:"/pages/subpackages/detail/index/images/212x175m.jpg",
        title:"A户型 2室2厅1卫",
        subtitle:'约288万',
        tag:[
          "在售","主推"
        ]
      },
      {
        src:"/pages/subpackages/detail/index/images/212x175m-2.jpg",
        title:"B’户型 3室2厅1卫",
        subtitle:'约324万',
        tag:[
          "在售","主推"
        ]
      },
      {
        src:"/pages/subpackages/detail/index/images/212x175m-3.jpg",
        title:"C‘’户型 3室2厅2卫",
        subtitle:'约396万 ',
        tag:[
          "待售"
        ]
      },
      {
        src:"/pages/subpackages/detail/index/images/212x175m-4.jpg",
        title:"E户型 4室2厅2卫",
        subtitle:'约409万',
        tag:[
          "待售"
        ]
      }
    ],
    banner:[
      {
        src:"/images/flower/275x206n(26).jpg"
      },
      {
        src:"/images/flower/275x206n(27).jpg"
      },
      {
        src:"/images/flower/275x206n(28).jpg"
      },
      {
        src:"/images/flower/275x206n(29).jpg"
      },
      {
        src:"/images/flower/275x206n(3).jpg"
      }
    ],
    imgList:[
      
        "/images/hoom/372x280n(3).jpg",
        "/pages/subpackages/detail/index/images/212x175m.jpg",
        "/pages/subpackages/detail/index/images/212x175m-2.jpg",
       "/pages/subpackages/detail/index/images/212x175m-3.jpg",
       "/pages/subpackages/detail/index/images/212x175m-4.jpg",
       "/images/flower/275x206n(26).jpg",
       "/images/flower/275x206n(27).jpg",
        "/images/flower/275x206n(28).jpg",
        "/images/flower/275x206n(29).jpg",
        "/images/flower/275x206n(3).jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
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
  },
  onBaseMore(){
    wx.navigateTo({
      url: `/pages/subpackages/detail/baseMore/index`,
    })
  },
  onCompare(){
    wx.navigateTo({
      url: `/pages/subpackages/detail/compare/index`,
    })
  },
  onTap(){
    wx.navigateTo({
      url: `/pages/subpackages/detail/index/index`,
    })
  },
  onLoc(e) {
    wx.openLocation({
      latitude: parseFloat(this.data.loc.latitude),
      longitude: parseFloat(this.data.loc.longitude),
      scale: '16',
      name: this.data.loc.type,
      address: this.data.loc.address,
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    })
  },
  onPhone(){
    wx.makePhoneCall({
      phoneNumber: "18322158660",
      complete: (res) => {},
      fail: (res) => {},
      success: (res) => {},
  })},
  preview(event){
    let currentUrl = event.currentTarget.dataset.src
    console.log(currentUrl)
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.imgList // 需要预览的图片http链接列表
    })
  }
  
})