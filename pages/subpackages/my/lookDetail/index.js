Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    model:[
      {date: "中国铁建花语津郡",
      time: "2020/8/28 8:23:49",
      type: "楼盘名称"},
      {date: "河北-金钟河大街-群芳路与靖江北路交口东北侧",
      time: "2020/8/28 8:23:52",
      type: "位置"}
    ],
    msgJson:[
     {
       name:"天津市和平区卫津路43号",
      content:[
        {date: "中国铁建花语津郡",
        time: "2020/8/28 8:23:49",
        type: "楼盘名称"},
      ]
     },
     {
      name:"天津市和平区电子大厦",
     content:[
      {date: "中国铁建公馆189",
      time: "2020/8/28 8:23:49",
      type: "楼盘名称"},
      {date: "中国铁建花语津郡",
      time: "2020/8/28 8:23:49",
      type: "楼盘名称"},
     ]
    }
    ],
    msgJson1:[
      {
        name:"天津市和平区卫津路43号",
       content:[
         {date: "首付比率:100,期数:0",
         time: "2020/8/28 8:23:49",
         type: "金融方案"}
       ]
      },
      {
       name:"天津市和平区电子大厦",
      content:[
        {date: "首付比率:90,期数:0",
        time: "2020/8/28 8:23:49",
        type: "金融方案"},
      ]
     }
     ],
     msgJson2:[
       [
        {date: "中国铁建花语津郡",
      time: "2020/8/28 8:23:49",
      type: "楼盘名称"},
      {date: "河北-金钟河大街-群芳路与靖江北路交口东北侧",
      time: "2020/8/28 8:23:52",
      type: "位置"}
       ]
     ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
_loadData(item){
  //报价数据浏览详情
 
  //车型点击数据总量

  //查看车型点击数据总量（按浏览类型分组）
},
getModel(model) {
  for (var i in model){
    if (model[i].type == '报价'){
      let date = model[i].date
      date = JSON.parse(date)
      console.log(date)
      let loansStatisticalData = date.loansStatisticalData ? date.loansStatisticalData:'未选择金融方案'
      let exclusiveStatisticalData = date.exclusiveStatisticalData ? date.exclusiveStatisticalData : '选装:未选择选装'
      let retailPriceStatisticalData = date.retailPriceStatisticalData ? date.retailPriceStatisticalData : '暂无'
      let oldReplace = date.oldReplace ? date.oldReplace : '暂无相关意向'
      model[i].date = loansStatisticalData + "\n" + exclusiveStatisticalData + "\n 意向价格:" + retailPriceStatisticalData + "\n 旧车置换意向："+ oldReplace

    }
  };
  return model
},
  getList(model) {
    for (let i in model) {

      for (let j in model[i].list) {
        for (let k in model[i].list[j]) {

          if (model[i].list[j][k].type == '报价') {
            let date = model[i].list[j][k].date
            date = JSON.parse(date)
            let loansStatisticalData = date.loansStatisticalData ? date.loansStatisticalData : '未选择金融方案'
            let exclusiveStatisticalData = date.exclusiveStatisticalData ? date.exclusiveStatisticalData : '选装:未选择选装'
            let retailPriceStatisticalData = date.retailPriceStatisticalData ? date.retailPriceStatisticalData : '暂无'
            let oldReplace = date.oldReplace ? date.oldReplace : '暂无相关意向'
            model[i].list[j][k].date = loansStatisticalData + "\n" + exclusiveStatisticalData + "\n 意向价格：" + retailPriceStatisticalData + "\n 旧车置换意向 " + oldReplace

          }
        }
      }
    }
    return model 
  },


getListModel(model){
  for (let i in model){
    for(let j in model[i]){
      if (model[i][j].type == '报价') {
        let date = model[i][j].date
        date = JSON.parse(date)
        let loansStatisticalData = date.loansStatisticalData ? date.loansStatisticalData : '未选择金融方案'
        let exclusiveStatisticalData = date.exclusiveStatisticalData ? date.exclusiveStatisticalData : '选装:未选择选装'
        let retailPriceStatisticalData = date.retailPriceStatisticalData ? date.retailPriceStatisticalData : '暂无'
        let oldReplace = date.oldReplace ? date.oldReplace : '暂无相关意向'
        model[i][j].date = loansStatisticalData + "\n" + exclusiveStatisticalData + "\n 意向价格：" + retailPriceStatisticalData + "\n 旧车置换意向 " + oldReplace

      }

    }
  }

  return model
}
})