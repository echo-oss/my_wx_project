// pages/subpackages/main//calculator/index.js
import {Calculator} from "./calculator";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    rateList:[
      "最新基准利率（4.90%）","9.5折（4.66%）","9.5折（4.66%）","9折（4.41%）","8.5折（4.16%）"
    ],
    rateList1:[
      "最新基准利率（4.90%）","9.5折（4.66%）","9.5折（4.66%）","9折（4.41%）","8.5折（4.16%）"
    ],
    number:0,
    comNumber:0,
    listLeft:["0"],
    listRight:["年限30年","年限29年","年限28年","年限27年","年限26年"],
    comLeft:["0"],
    comRight:["年限30年","年限29年","年限28年","年限27年","年限26年"],
    modalName:null,
    end:0,
    count:0,
    list1:[
      "10%","20%","30%","40%"
    ],
    index1:0,
    listContent1:"暂无"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      content:this.data.listRight[0],
      comContent:this.data.comRight[0]
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
  formSubmit(e) {
    let end1 = (this.data.count-this.data.end)*10000
    let index = this.data.listRight.indexOf(this.data.content)
    console.log(index)
    end1=Calculator.getCommercial(end1,index)
    end1= Math.ceil(end1)
    console.log(end1)
    wx.navigateTo({
      url: `/pages/subpackages/main/calculatorEnd/index?count=${end1}`,
    })
    
  },
  onList1(e){
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  submit(e){
    this.setData({
      listContent1:this.data.list1[this.data.index1],
      modalName: null
    })
  },
  choose(e){
    console.log(e)
    this.setData({
     index1:e.currentTarget.dataset.index
    })
  },
  calculator(e){
    this.setData({
      count:e.detail.value,
    })
    let count = this.data.count;
    let index = this.data.index1;
    let end = Math.ceil(Calculator.getCommercialLoan(count,index))
    this.setData({
      end
    })
    let end1 = this.data.end; 
    let listLeft = []
    let comLeft = []
    for(let i = 0;i<5;i++){
      listLeft.push(count-end1-i)
      comLeft.push(i)
    }
    this.setData({
      listLeft,
      comLeft,
      number:listLeft[0],
      comNumber:comLeft[0]
    })
  },
  scroll(e){
    let top = e.detail.scrollTop
    let number = 0 
    for(let i in this.data.listLeft){
      if(top>=i*30&&top<(i+1)*30){
        number=this.data.listLeft[i]
      }
    }
    this.setData({
      number,
    })
  },
  scroll1(e){
    let top = e.detail.scrollTop
    let content = this.data.listRight[0]
    for(let i in this.data.listRight){
      if(top>=i*28&&top<(i+1)*30){
        content=this.data.listRight[i]
      }
    }
    this.setData({
      content,
    })
  },
  scroll2(e){
    let top = e.detail.scrollTop
    let rateContent = this.data.rateList[0]
    for(let i in this.data.rateList){
      if(top>=i*28&&top<(i+1)*30){
        rateContent=this.data.rateList[i]
      }
    }
    this.setData({
      rateContent,
    })
  },

  scroll3(e){
    let top = e.detail.scrollTop
    let comNumber = 0
    for(let i in this.data.comLeft){
      if(top>=i*30&&top<(i+1)*30){
        comNumber=this.data.comLeft[i]
      }
    }
    this.setData({
      comNumber,
    })
  },
  scroll4(e){
    let top = e.detail.scrollTop
    let comContent = this.data.comRight[0]
    for(let i in this.data.comRight){
      if(top>=i*28&&top<(i+1)*30){
        comContent=this.data.comRight[i]
      }
    }
    this.setData({
      comContent,
    })
  },

  scroll5(e){
    let top = e.detail.scrollTop
    let rateContent1 = this.data.rateList1[0]
    for(let i in this.data.rateList1){
      if(top>=i*28&&top<(i+1)*30){
        rateContent1=this.data.rateList1[i]
      }
    }
    this.setData({
      rateContent1,
    })
  },
})