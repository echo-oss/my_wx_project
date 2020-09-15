class Pageing{
  limit;
  page;
  locker;
  req;
  terminalType;
  moreData=true;


  constructor(req,page,limit,terminalType){
      this.req=req;
      this.page=page;
      this.limit=limit;
      this.terminalType=terminalType 
  }
  async getMoreData(){
    if(!this.moreData){
      return
    }
    if(this.locker===true){
      return
    }
    this._getLocker()
    const data = await this._actualGetData();
    return data
  }
  //加载数据的方法
  async _actualGetData(){
    const req = this._getCurrentReq();
    const page = await Http.request(req);
    if(!page){
      return null
    }
    if(paging.TotalCount === 0){
      return {
        items:[],
        moreData:false,
        empty:true,
        accumulator:[]
      }
    }
    this.moreData = this._isMoreData(paging.TotalPage, paging.Page);
    if(this.moreData){
      this.page+=1
    }
    let items = paging.Data
    let ShowResourcesUrl = paging.ShowResourcesUrl;
    if (ShowResourcesUrl){
      for(let index in items){
        items[index].baseUrl=ShowResourcesUrl;
      }
    }
    this._accumulate(items);//累加
    return {
      empty: false,
      items: items, //当前request返回的数据
      moreData: this.moreData, //后续是否有数据
      accumulator: this.accumulator,//总数据
      baseUrl:ShowResourcesUrl
    }


  }
  //重置req的方法
  _getCurrentReq(){
    this.req.data.Page = this.page;
    this.req.data.Limit = this.limit;
    this.req.TerminalType = this.TerminalType;
    return this.req;
  }
  //上锁方法
  _getLocker(){
    this.locker=true
  }
}