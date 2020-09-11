Page({

  data: {
    demo:[{
      image: '../image.png',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
    },{
      image: '../image.png',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。气温可连接二环喀什东路哈宽宏大量喀什',
      count: '888',
      delCount: '666'
    },{
      image: '../image.png',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
    }]
  },

  onLoad(options) {
    wx.lin.renderWaterFlow(this.data.demo, false ,()=>{
      console.log('渲染成功')
    })
  }
})  