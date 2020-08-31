Page({
  data: {
    PageIndex: 1,
    loading: false,
    dataArray: [
      {name:"王峰",
        phone:"17600249566",
        src:"/images/tabbar/team-select.png",
      },
      {name:"刘湖",
        phone:"18600249555",
        src:"/images/tabbar/team-select.png",
      },
      {name:"张柳云",
        phone:"13600249866",
        src:"/images/tabbar/team-select.png",
      }
    ],
    hasMore: true
  },
  onLoad: function (options) {
  },
  onTap(){
    wx.navigateTo({
      url: `/pages/subpackages/my/myDetail/index`,
    })
  }
})