// pages/subpackages/detail//compare/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    h:wx.getSystemInfoSync().windowHeight-50,
    house:[
      {
        src:"/images/flower/275x206n(3).jpg",
        name:"花语津郡",
        price:"29700元/平方米",
        tag:[
          "住宅","在售","vr看房"
        ],
        subTitle:[
          "医院","商业街","高绿化率"
        ]
      },
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
      },
      {
        src:"/images/other/200x150m.jpg",
        name:"中国铁建西派国印･禧阙",
        price:"34000元/平方米",
        tag:[
          "住宅","在售","vr看房"
        ],
        subTitle:[
          "市内六区","大户型","商业街"
        ]
      },
    ],
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
  onSelectedTap(e) {
    var index = e.currentTarget.dataset.index;
    var house = this.data.house;
    var selected = house[index].selected;
    house[index].selected = !selected;
    this.setData({
      house:house
    })
  }, 
  onCompare(e) {
    wx.navigateTo({
      url: '/pages/subpackages/detail/compareEnd/index'
    })
  },
})