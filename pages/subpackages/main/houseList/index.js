// pages/subpackages//main/houseList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      {
        src:"/images/other/200x150m-2.jpg",
        name:"美的旭辉翰悦府",
        price:"20500元/平方米",
        tag:[
          "住宅","在售",
        ],
        subTitle:[
           "高绿化率","大型社区","全朝南"
        ]
      },
      {
        src:"/images/other/200x150m-3.jpg",
        name:"和融广场·悦湾河畔",
        price:28000,
        tag:[
          "商住"," 在售"
        ],
        subTitle:[
          "装修交付","车位充足","在建"
        ]
      },
      {
        src:"/images/other/200x150m-4.jpg",
        name:"未来城",
        price:21000,
        tag:[
          "住宅","在售",
        ],
        subTitle:[
          "低容积","高绿化率","全朝南"
        ]
      },
      {
        src:"/images/other/200x150m-5.jpg",
        name:"金融街·西青金悦府",
        price:19000,
        tag:[
          "住宅","在售",
        ],
        subTitle:[
          "高绿化率","南北通透","大户型"
        ]
      },
    ]
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
  onTap(e){
    wx.navigateTo({
      url: `/pages/subpackages/detail/index/index`,
    })
  }
})