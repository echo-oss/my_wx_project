// pages/subpackages/main/calculatorEnd/index.js
const app = getApp();
import F2 from '../../../../f2-canvas/lib/f2.js';
let chart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    end:[
      {name: "首付",
      ratio: "45.00%",
      value: 2
    },
     {name: "贷款总额",
      ratio: "45.00%",
      value: 2
    },
    {name: "利息总计",
    ratio: "10.00%",
    value: 2
  }
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadChart2(this.data.end)
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
  _loadChart2(data) {
    var that = this;
    var data = data;
    that.chartComponent = that.selectComponent("#custom-dom")
    that.chartComponent.init((canvas, width, height) => {
      chart = new F2.Chart({
        el: canvas,
        width,
        height,
        animate: false
      });

      chart.source(data);
      chart.coord('polar', {
        transposed: true,
        radius: 0.9,
        innerRadius: 0.5
      });
      chart.legend(false);
      chart.axis(false);
      chart.tooltip(false);

      // 添加饼图文本
      chart.pieLabel({
        sidePadding: 40,
        label1: function label1(data, color) {
          let ratio = data.ratio ? data.ratio : 0
          return {
            text: `${data.value} (${ratio})`,
            fill: color
          };
        },
        label2: function label2(data) {
          let text = data.name;
          // app.util.getLength(data.name) < 15 ? data.name : app.util.cutstr(data.name, 14)
          return {
            text: text,
            fill: '#999'
          };
        },
      });

      chart.interval()
        .position('*value')
        .color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864'])
        .adjust('stack');
      chart.render();
    })
  }
})