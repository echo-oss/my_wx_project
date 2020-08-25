//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner:[
      {
        src:"images/banner/house.jpeg"
      },
      {
        src:"images/banner/house.jpg"
      },
      {
        src:"images/banner/house1.jpeg"
      }
    ],
    grid:[
      {
        src:"images/grid/house.jpeg",
        name:"在售楼盘"
      },
      {
        src:"images/grid/house.jpeg",
        name:"即将开盘"
      },
      {
        src:"images/grid/house.jpeg",
        name:"推荐楼盘"
      }
    ],
    house:[
      {
        src:"images/grid/house.jpeg",
        name:"融创",
        price:16500,
        tag:[
          "住宅","项目在建","装修"
        ],
        subTitle:[
          "地区","地区","建面"
        ]
      }
    ]
  },
  //事件处理函数

  onLoad: function () {
    
  },
  onTap(e){
    wx.navigateTo({
      url: `/pages/subpackages/detail/index/index`,
    })
  },
})
