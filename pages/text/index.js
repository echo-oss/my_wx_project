// pages/text/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year:0,
    month:0,
    weekList:["日","一","二","三","四","五","六"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    this.dateInit();
    this.setData({
      year,
      month,
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
  dateInit(setYear, setMonth){
    let dateArr = [];
    let obj = {};
    let nextYear = 0;
    let arrLen = 0;
    let now = setYear?new Date(setYear,setMonth):new Date();
    let year = setYear || now.getFullYear();
    let month = setMonth || now.getMonth();
    let nextMonth = (month+1) > 11 ? 1 : (month+1);
    let startWeek = new Date(year,month,1).getDay();
    console.log("我在这里",startWeek)
    let dayNums = new Date(year,nextMonth,0).getDate();
    if(month + 1 >11){
      nextYear = year + 1;
      dayNums = new Date(nextYear, nextMonth, 0).getDate();
    } 
    arrLen = startWeek + dayNums;
    for (let i = 0; i < arrLen; i++) {
      if (i >= startWeek) {
        let num = i - startWeek + 1;
        obj = {
          isToday: false,
          dateNum: num,
          weight: 5
        }
      } else {
        obj = {};
      }
      dateArr[i] = obj;
    }
    this.setData({
      dateArr: dateArr
    })
  },
  lastMonth: function () {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
    let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },
  /**
   * 下月切换
   */
  nextMonth: function () {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
    let month = this.data.month > 11 ? 0 : this.data.month;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },
  onDay(e){
     let index = e.currentTarget.dataset.index;
     let dateArr = this.data.dateArr;
     dateArr[index].isday = !dateArr[index].isday;
     this.setData({
       dateArr,
     })
  },
  onBack(){
    wx.navigateTo({
      url: '/pages/love/index',
    })
  }
})