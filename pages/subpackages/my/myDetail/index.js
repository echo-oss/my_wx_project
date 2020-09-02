import F2 from '../../../../f2-canvas/lib/f2.js';
let chart = null;
let chart1 = null;
Page({
  data: {
    NavCur: 0,
    TabCur: 0,
    scrollLeft: 0,
    posting: false,
    time: '09:01',
    date: '选择日期',
    tabData: [{
        name: '近三天',
        state: '1'
      },
      {
        name: '一周内',
        state: '2'
      },
      {
        name: '半月内',
        state: '3'
      },
    ],
    day: '',
    time: '',
    dataForCount: [],
    datForDay: [],
    dataCustomer1:{
      carTypeName: "中国铁建花语津郡",
      price: "29700元/㎡起"
    },
    dataCustomer: [{
        carTypeName: "中国铁建花语津郡",
        price: 29700,
        time: "2020/8/28 8:23:52"
      },
      {
        carTypeName: "中国铁建公馆189",
        price: 6000,
        time: "2020/8/27 17:55:28"
      }
    ],
    data3: [],
    msgJson: [{
        type: 1,
        name: "中国铁建花语津郡",
        price: "29700元/平方米",
        mode: "全款",
        precent: "50%",
        firstPrice: "14850元/平方米",
        space: "河北-金钟河大街-群芳路与靖江北路交口东北侧",
      },
      {
        type: 2,
        name: "中国铁建公馆189",
        price: "98万元",
        mode: "组合贷",
        precent: "30%",
        firstPrice: "29.4万元",
        space: "河北-金钟河大街-红波路",
      }
    ],
    History: [{
        Unionid: "o0s9Z5HVeergdLNRakOekLKJ5bf8",
        address: "天津市和平区卫津路43号",
        imgUrl: "https://www.jinduocar.com/wow/2020-05-07/20050809253702_logo.jpg",
        latitude: "39.11323",
        longitude: "117.180062",
        name: "",
        phone: "13132052332",
        time: "2020-08-28 08:23:22",
        type: "程序打开"
      }, {
        Unionid: "o0s9Z5HVeergdLNRakOekLKJ5bf8",
        address: "天津市南开区南丰路",
        imgUrl: "https://www.jinduocar.com/wow/2020-05-07/20050809253702_logo.jpg",
        latitude: "39.109695",
        longitude: "117.164793",
        name: "",
        phone: "13132052332",
        time: "2020-08-27 21:17:19",
        type: "店铺查询"
      },
      {
        Unionid: "o0s9Z5HVeergdLNRakOekLKJ5bf8",
        address: "天津市南开区南丰路",
        imgUrl: "https://www.jinduocar.com/wow/2020-05-07/20050809253702_logo.jpg",
        latitude: "39.113241",
        longitude: "117.163789",
        name: "",
        phone: "13132052332",
        time: "2020-08-27 21:16:19",
        type: "程序打开"
      }
    ],
    list: [
        {time:"2020/8/27 17:55:40",
        json:[
          "中国铁建花语津郡","中国铁建公馆189"
        ],
        count:1
        }   
       ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadChart2(this.data.dataCustomer);
  },

  _loadStatistics(time, day) {

    var Unionid = this.data.Unionid

    crmModel.getUserCarOffer(Unionid, day).then(res => {

      this.setData({
        dataCustomer: res.msgJson
      })
      this._loadChart2(this.data.dataCustomer);
      return crmModel.getShopUserVehiceStatistics(time, Unionid)
    }, err => {
      this.setData({
        dataCustomer: []
      })
    }).then(res => {

      this.setData({
        dataForCount: res.msgJson.date,
        datForDay: res.msgJson.code
      })

      // if(this.data.dataForCount.length>0){
      this._loadChart1(this.data.datForDay);
      // }

    }, err => {
      this.setData({
        dataForCount: [],
        datForDay: []

      })
    })

    // crmModel.getShopUserVehiceStatistics(time, Unionid).then(res => {

    //     this.setData({
    //       dataForCount: res.msgJson.date,
    //       datForDay: res.msgJson.code
    //     })

    //     // if(this.data.dataForCount.length>0){
    //       this._loadChart1(this.data.datForDay);
    //     // }

    // }, err => {
    //   this.setData({
    //     dataForCount: [],
    //     datForDay: []

    //   })
    // })




  },
  _loadData(e) {

    //近期报价
    quotationModel.getMyOffer(this.data.Unionid).then(res => {
      this.setData({
        msgJson: res.msgJson
      })
    })
    //评价
    crmModel.getMyDescription(this.data.Unionid).then(res => {
      this.setData({
        DescriptionModel: res.msgJson
      })
    })
    //离店记录
    crmModel.GetMyCustomerLeaveTime(this.data.Unionid).then(res => {
      this.setData({
        LeaveTime: res.msgJson
      })
    })
    //浏览轨迹
    statisticsModel.getConsumerLocationStatistics(this.data.Unionid).then(res => {
      this.setData({
        History: res.msgJson
      })
    })
    //配置对比
    carsModel.getMyCompare(this.data.Unionid).then(res => {
      var msgJson = res.msgJson
      this.setData({
        list: msgJson
      })

    })
    //价格对比
    carsModel.getMyOfferCompare(this.data.Unionid).then(res => {
      var msgJson = res.msgJson
      this.setData({
        OfferComparelist: msgJson
      })

    })
  },
  onPrice(e) {
    let item = e.currentTarget.dataset.item
    console.log(item)
    var Unionid = wx.getStorageSync('loginInfo').unionId;
    var id = item.id;
    var offerId = item.offerId;
    var theList = item.theList;
    wx.navigateTo({
      url: '/pages/subpackages/cars/pages/auto-contrast-record-details/index?pagePath=record' + '&id=' + id + '&offerId=' + offerId + '&theList=' + theList + '&Unionid=' + Unionid,
    })
  },
  onCar(e) {
    let item = e.currentTarget.dataset.item
    console.log(e)

    var carTypeId = item.carTypeID;
    var list = item.list;

    wx.navigateTo({
      url: '/pages/subpackages/cars/pages/cars-contrast-details/index?carTypeId=' + carTypeId + '&list=' + list,
    })


  },
  onhistory(e) {
    console.log(e)
    let item = e.currentTarget.dataset.item

    wx.openLocation({
      latitude: parseFloat(item.latitude),
      longitude: parseFloat(item.longitude),
      scale: '16',
      name: item.type,
      address: item.address,
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    })

  },
  getNowTime(now) {

    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    if (month < 10) {
      month = '0' + month;
    };
    if (day < 10) {
      day = '0' + day;
    };
    var formatDate = year + '-' + month + '-' + day;
    return formatDate;
  },


  onFakePost() {
    this.setData({
      posting: true
    })
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var value = e.detail.value.input
    crmModel.addMyDescription(this.data.Unionid, value).then(res => {
      this._loadData()
      this.setData({
        posting: false
      })
    })
  },
  onCancel() {
    this.setData({
      posting: false
    })
  },
  AddMyCustomerLeaveTime() {
    this.setData({
      modalName: "DialogModal1"
    })
  },

  //更多报价
  moreOffer() {
    // var customerPhone = this.data.customerPhone
    // wx.navigateTo({
    //   url: "../customer-quotation-more/index?customerPhone=" + customerPhone,
    // })
    var Unionid = this.data.Unionid
    wx.navigateTo({
      url: "/pages/subpackages/calculator/pages/myOffer/index?Unionid=" + Unionid,
    })
  },
  morePrice() {
    // wx.showModal({
    //   title: '提示',
    //   content: '即将开放，尽情期待',
    // })
  },
  onDetail(e) {
    var index = e.currentTarget.dataset.index;
    var msgJson = this.data.msgJson;
    var sellCode = msgJson[index].sellCode;
    wx.navigateTo({
      url: '/pages/subpackages/cars/pages/cars-quotation-details/index?sellCode=' + sellCode + '&pagePath=manage',
    })
  },



  tabSelect(e) {

    console.log(e);

    var navIndex = this.data.NavCur;

    var index = e.currentTarget.dataset.index;

    this.setData({
      TabCur: index,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60,

    })

    if (navIndex == 2) {

    } else {
      var now = new Date();




      if (index == 0) {
        now.setTime(now.getTime() - 72 * 60 * 60 * 1000)
        this.setData({
          day: 3
        })
      } else if (index == 1) {
        now.setTime(now.getTime() - 168 * 60 * 60 * 1000)
        this.setData({
          day: 7
        })
      } else {
        now.setTime(now.getTime() - 360 * 60 * 60 * 1000)
        this.setData({
          day: 15
        })
      }
      var time = this.getNowTime(now);

      this.setData({
        time: time
      })

      this._loadStatistics(time, this.data.day);
    }



  },
  navSelect(e) {
    console.log(e);
    var index = e.currentTarget.dataset.id;
    this.setData({
      NavCur: index,
    })
    if (index == 2) {
      this.setData({
        tabData: [{
            name: '客户描述',
            state: '1'
          },
          {
            name: '离店确认',
            state: '2'
          }
        ],
        TabCur: 0
      })
    } else {
      this.setData({
        tabData: [{
            name: '近三天',
            state: '1'
          },
          {
            name: '一周内',
            state: '2'
          },
          {
            name: '半月内',
            state: '3'
          },
        ],
        TabCur: 0
      })
    }
  },
  changeForm(e) {
    var date = e.detail.value.date;
    var time = e.detail.value.time;
    // var id = this.data.id
    if (!date) {
      this._show('请选择日期');
      return;
    }
    if (!time) {
      this._show('请选择时间');
      return;
    }
    var Time = `${date} ${time}`;
    console.log(Time);
    Time = Time.replace(/-/g, "/");
    // console.log(Time);
    // var agreeTime = new Date(Time);
    // console.log(agreeTime);
    crmModel.AddMyCustomerLeaveTime(this.data.Unionid, Time).then(res => {

      this._loadData()
      this.hideModal()
    })


  },
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  _show(message) {
    wx.showToast({
      title: message,
      icon: 'none',
      duration: 2000
    })
  },
  onCat(e) {
    wx.navigateTo({
      url: '../customer-attention/index',
    })
  },



  _loadChart1(data) {
    var that = this;
    var data = data;
    that.chartComponent = that.selectComponent("#multi-bar-dom1")
    that.chartComponent.init((canvas, width, height) => {
      chart1 = new F2.Chart({
        el: canvas,
        width,
        height
      });
      chart1.source(data);
      chart1.axis('time', {
        line: F2.Global._defaultAxis.line,
        grid: null
      });
      chart1.axis('number', {
        line: null,
        grid: F2.Global._defaultAxis.grid,
      });
      chart1.tooltip({
        custom: true, // 自定义 tooltip 内容框
        onChange(obj) {
          console.log('点击', obj.items)
          that.setData({
            // modalName: 'Modal',
            items: obj.items
          })
          const legend = chart1.get('legendController').legends.top[0];
          const tooltipItems = obj.items;
          const legendItems = legend.items;
          const map = {};
          legendItems.map(item => {
            map[item.name] = Object.assign({}, item);
          });
          tooltipItems.map(item => {
            const {
              name,
              value
            } = item;
            if (map[name]) {
              map[name].value = (value);
            }
          });
          legend.setItems(Object.values(map));
        },
        onHide() {
          console.log("消失")
          const legend = chart1.get('legendController').legends.top[0];
          legend.setItems(chart1.getLegendItems().country);
        }
      });
      chart1.interval().position('time*number').color('name').adjust('stack');
      chart1.render();

    })
  },
  modelChoose(e) {
    var Unionid = this.data.Unionid;
    var item = e.currentTarget.dataset.item;
    var carTypeCode = item.origin.carTypeCode;
    console.log('123456-------', item)
    wx.navigateTo({
      url: '../customer-detail/index?Unionid=' + Unionid + '&carTypeCode=' + carTypeCode,
    })
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
      // chart.source(data,{
      //   time: {
      //     type: 'timeCat',
      //     range: [0, 1],
      //     tickCount: 5,
      //     mask: 'MM-DD'
      //   },
      //   price: {
      //     tickCount: 5,
      //     min: 0
      //   },
      // });

      chart.source(data, {
        price: {
          tickCount: 5
        }
      });
      chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          that.setData({
            origin: ev.items[0].origin
          })
          const items = ev.items;
          items[0].name = null;
          items[0].name = items[0].title;
          items[0].value = '¥ ' + items[0].value;
        }
      });
      chart.interval().position('carTypeName*price');
      chart.render();
      // chart.tooltip({
      //   showCrosshairs: true,
      //   showItemMarker: false,
      //   onShow(ev) {
      //     console.log(ev)
      //     that.setData({
      //       origin: ev.items[0].origin
      //     })
      //     var items = ev.items;
      //     items[0].name = null;
      //     items[0].value = '¥ ' + items[0].value;
      //   }
      // })
      // chart.line().position('time*price');
      // chart.point().position('time*price').style({
      //   stroke: '#fff',
      //   lineWidth: 1
      // });

      // chart.render();

    })
  },

  priceChoose(e) {
    wx.navigateTo({
      url: '/pages/subpackages/my/lookDetail/index',
    })
  }
})