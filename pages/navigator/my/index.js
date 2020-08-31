
const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    modulecArr: [
      { img: '/images/static/bar1.png', name: '我的积分', url: '' },
      { img: '/images/static/bar2.png', name: '我的订单', url: '' },
      { img: '/images/static/bar3.png', name: '我的预约', url: '' },
      { img: '/images/static/bar4.png', name: '我的活动', url: '' },
    ],
    listArr: [
      { name: '完善信息', url: '' }, 
      { name: '我的客户', url: '/pages/subpackages/my/myClient/index' },
      { name: '积分排行', url: '' }, 
      { name: '我的订单', url: '' }, 
      { name: '优惠券', url: '' }
    ],
  },

  
  // 点击列表
  click_list(e) {
     const bean = e.currentTarget.dataset.bean
      if (bean.name == "我的客户"){
        wx.navigateTo({
          url: bean.url,
        })
      }
    }
})