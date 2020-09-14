<template>
  <div class="box">
    <div class="index">
      <div class="tit">
        <div class="center-tit">
          <img src="../assets/left.png" alt="">
          <div class="center-name">
            <div class="top"></div>
            <div class="info">{{nameBu}}任务大屏</div>
            <div class="bottom"></div>
          </div>
          <img src="../assets/right.png" alt="">
        </div>
        <p
          v-if="nowTimes"
        >{{nowTimes.year}}年{{nowTimes.yy}}月{{nowTimes.dd}}日 &nbsp;&nbsp;&nbsp;&nbsp; 星期{{nowTimes.week}} &nbsp;&nbsp;&nbsp; {{nowTimes.hou}}:{{nowTimes.min}}:{{nowTimes.sec}}</p>
      </div>
      <div class="menu">
        <div class="menu-pad">
          <div class="cont">
            <div class="row">
              <div class="row-tit">
                <img src="../assets/running.png" alt />
                <span>每日工作({{this.Running.length}})</span>
              </div>
              <div class="row-con">
                <!-- Swiper -->
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(val,inx) in RunningLeng" v-bind:key="inx">
                      <div
                        class="cal"
                        v-for="(item,index) in Running"
                        v-if="index < (inx + 1) * 5 && index >= inx * 5"
                        v-bind:key="index"
                        :class="
                              item.stat == 3 ? 'Green' :
                               asdasdasd(item.plan_end_time) === 2 ? 'Red' :  
															 asdasdasd(item.plan_end_time) === 3 ? 'Blue' :
															 asdasdasd(item.plan_end_time) === 4 ? 'Yellow' : 'Blue'"
                      >
                        <img :src="item.stat == 2 ? RunningImg :
                           item.stat == 3 ? SucImg :''" alt />
                        <div class="info">
                          <div class="name">{{item.task}}</div>
                          <div class="name-t">{{item.project}}</div>
                          <div class="but-task">
                            <div class="time">{{item.plan_start_time}} 至 {{item.plan_end_time}}</div>
                             <!-- <div class="pro-per">{{nameBu}} {{item.user_name}}</div> -->
                          </div>
                          <div class="address">
                            <div class="address-info">
                              <img src="../assets/address.png" alt=""> 
                              {{item.address}}
                            </div>
                            <div class="pro-per">{{item.role}} {{item.user_name}}</div>
                          </div>
                        </div>
                        <div class="header-img" v-if="item.head">
                          <img :src="item.head" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Add Pagination -->
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="row-tit">
                <img src="../assets/clarun.png" alt />
                <span>待进行({{this.NoRunning.length}})</span>
              </div>
              <div class="row-con">
                <!-- Swiper -->
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(val,inx) in NorunList" v-bind:key="inx">
                      <div
                        class="cal"
                        v-for="(item,index) in NoRunning"
                        v-if="index < (inx + 1) * 5 && index >= inx * 5"
                        v-bind:key="index"
                        :class="asdasdasd(item.plan_end_time) === 2 ? 'Red' :  
															 asdasdasd(item.plan_end_time) === 3 ? 'Blue' :
															 asdasdasd(item.plan_end_time) === 4 ? 'Yellow' : 'Blue'"
                      >
                        <img src="../assets/norun.png" alt />
                        <div class="info">
                          <div class="name">{{item.task}}</div>
                          <div class="name-t">{{item.project}}</div>
                          <div class="but-task">
                            <div class="time">{{item.plan_start_time}} 至 {{item.plan_end_time}}</div>
                            <!-- <div class="pro-per">{{nameBu}} {{item.user_name}}</div> -->
                          </div>
                          <div class="address">
                            <div class="address-info">
                              <img src="../assets/address.png" alt=""> 
                              {{item.address}}
                            </div>
                            <div class="pro-per">{{item.role}} {{item.user_name}}</div>
                          </div>
                        </div>
                         <div class="header-img" v-if="item.head">
                          <img :src="item.head" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Add Pagination -->
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="row-tit">
                <img src="../assets/suctsk.png" alt />
                <span>昨日完成({{this.yesDayList.length}})</span>
              </div>
              <div class="row-con">
                <!-- Swiper -->
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(val,inx) in YerListLeng" v-bind:key="inx">
                      <div
                        class="cal"
                        v-for="(item,index) in yesDayList"
                        v-if="index < (inx + 1) * 5 && index >= inx * 5"
                        v-bind:key="index"
                      >
                        <img src="../assets/success.png" alt />
                        <div class="info">
                          <div class="name">{{item.task}}</div>
                          <div class="name-t">{{item.project}}</div>
                          <div class="but-task">
                            <div class="time">{{item.plan_start_time}} 至 {{item.plan_end_time}}</div>
                            <!-- <div class="pro-per">{{nameBu}} {{item.user_name}}</div> -->
                          </div>
                          <div class="address">
                            <div class="address-info">
                              <img src="../assets/address.png" alt=""> 
                              {{item.address}}
                            </div>
                            <div class="pro-per">{{item.role}} {{item.user_name}}</div>
                          </div>
                        </div>
                         <div class="header-img" v-if="item.head">
                          <img :src="item.head" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Add Pagination -->
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Swiper from "swiper";
export default {
  inject: ["reload"],
  data() {
    return {
      yesDayList: {}, //昨日完成
      Running: {}, //进行中
      NoRunning: {}, //待进行
      tiemr: null,
      nowTimes: {
        year: 1937,
        yy: 0,
        dd: "00",
        hou: "00",
        min: "00",
        sec: "00",
        week: "5"
      },
      nameBu: "",
      //  
      RunningImg : require('../assets/run.png'),
      SucImg : require('../assets/success.png')
    };
  },
  methods: {
    asdasdasd(val) {
      var timers = parseInt(
        new Date(val).getTime() / (1000 * 60 * 60 * 24) -
          new Date().getTime() / (1000 * 60 * 60 * 24)
      );
      if (timers < 0) {
        //逾期
        return 2;
      } else if (timers > 2) {
        return 3;
        //正常
      } else {
        return 4;
        //警告
      }
    },
    async setNowTimes() {
      let myDate = new Date();
      // console.log(myDate.toLocaleDateString()) //获取当前日期)
      // console.log(myDate.toLocaleTimeString()); //获取当前时间
      this.nowTimes.year = myDate.getFullYear(); //获取完整的年份(4位)
      this.nowTimes.week =
        myDate.getDay() === 0
          ? "天"
          : myDate.getDay() === 1
          ? "一"
          : myDate.getDay() === 2
          ? "二"
          : myDate.getDay() === 3
          ? "三"
          : myDate.getDay() === 4
          ? "四"
          : myDate.getDay() === 5
          ? "五"
          : myDate.getDay() === 6
          ? "六"
          : "";

      this.nowTimes.yy = myDate.getMonth() + 1;
      this.nowTimes.dd = String(
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      );
      this.nowTimes.hou = String(
        myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      );
      this.nowTimes.min = String(
        myDate.getMinutes() < 10
          ? "0" + myDate.getMinutes()
          : myDate.getMinutes()
      );
      this.nowTimes.sec = String(
        myDate.getSeconds() < 10
          ? "0" + myDate.getSeconds()
          : myDate.getSeconds()
      );
      // clearInterval(this.tiemr)
    },

    initWebSocket() {
       var str = ''
      var arr = sessionStorage.getItem("role").split(',')
      for(var i in arr){
        if(i == arr.length-1){
          str = str + arr[i]
        }else{
          str = str + arr[i] + 'A'
        }
      }
      console.log(str)
      const wsuri = `ws://192.168.0.27:8003/wx/role/${str}/?${
        localStorage.getItem("jp_token") ? localStorage.getItem("jp_token") : ""
      }`;
      this.websock = new WebSocket(wsuri); //这里面的this都指向vue
      this.websock.onopen = this.websocketopen;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
      this.websock.onerror = this.websocketerror;
    },
    websocketopen() {
      //打开
      console.log("WebSocket连接成功");
    },
    websocketonmessage(e) {
      //数据接收
      let ObjData = JSON.parse(e.data);
      console.log(ObjData);
      console.log("收到");
      if (ObjData.text == "update") {
        this.websock.close();
        this.reload();
      }
    },
    websocketclose() {
      //关闭
      console.log("WebSocket关闭");
    },
    websocketerror() {
      //失败
      console.log("WebSocket连接失败");
    }
  },
  mounted() {
    var str = ''
    var str2 = ''
    var arr = sessionStorage.getItem("role").split(',')
    for(var i in arr){
      if(i == arr.length-1){
        str = str + 'taskuser__user__role=' + arr[i];
        str2 = str2 + 'user__role=' + arr[i];
      }else{
        str = str + 'taskuser__user__role=' + arr[i] + '&'
        str2 = str2 + 'user__role=' + arr[i] + '&'
      }
    }
     this.$http
      .get(this.$conf.env.logoGet)
      .then((res) => {
        this.options = this.allbm = res.data;
        for(var i in res.data){
          for(var j in arr){
            if(res.data[i].id == arr[j]){
               this.nameBu += res.data[i].name + '&'
            }
          }
        }
        this.nameBu=this.nameBu.slice(0,this.nameBu.length-1)
      })
      .catch((err) => {});
    this.setNowTimes();
    this.$nextTick(() => {
      var swiper = new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        autoplayDisableOnInteraction: false,
        autoplay: 10000,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      });
    });

    this.$http
      .get(
        this.$conf.env.getTaskYesTo +
          `${str}`
      )
      .then(res => {
        this.yesDayList = res.data;
        console.log(this.yesDayList);
      })
      .catch(err => {});

    //进行中
    this.$http
      .get(
        this.$conf.env.getTaskRun +
          `${str2}`
      )
      .then(res => {
        this.Running = res.data;
        console.log(this.Running);
      })
      .catch(err => {});

    //待进行
    this.$http
      .get(
        this.$conf.env.getTaskNoR +
          `${str2}`
      )
      .then(res => {
        this.NoRunning = res.data;
        console.log(this.NoRunning);
      })
      .catch(err => {});
    // console.log(this.websock)
    // if(!this.websock){
    //     this.initWebSocket();
    // }
  },
  computed: {
    //计算进行中页数
    RunningLeng() {
      if (this.Running.length) {
        if ((this.Running.length / 5) % 1 === 0) {
          return this.Running.length / 5;
        } else {
          return Math.floor(this.Running.length / 5) + 1;
        }
      }
    },
    YerListLeng() {
      if (this.yesDayList.length) {
        if ((this.yesDayList.length / 5) % 1 === 0) {
          return this.yesDayList.length / 5;
        } else {
          return Math.floor(this.yesDayList.length / 5) + 1;
        }
      }
    },
    NorunList() {
      if (this.NoRunning.length) {
        if ((this.NoRunning.length / 5) % 1 === 0) {
          return this.NoRunning.length / 5;
        } else {
          return Math.floor(this.NoRunning.length / 5) + 1;
        }
      }
    },
    GetTimeData() {
      return new Date();
    },
    RouterName() {
      return this.$route.query.id;
    },
    ToadyTimer() {
      return this.nowTimes.hou;
    },
    TodayMins() {
      return this.nowTimes.min;
    }
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
     clearInterval(this.tiemr);
  },

  watch: {
    NorunList(news, olds) {
      console.log(this.NoRunning.length);
      console.log(this.$route.query.id);
    },
    YerListLeng() {},
    RunningLeng() {},
    GetTimeData(news, olds) {
      console.log(news);
    },
    RouterName(news, olds) {
      console.log(news);
    },
    TodayMins() {
      this.$nextTick(() => {
        console.log("修改了");
        if (this.websock) {
          this.websock.close();
          this.websock = undefined;
          this.$nextTick(() => {
            this.initWebSocket();
          });
        } else {
          this.initWebSocket();
        }
      });
    },
    ToadyTimer(news, old) {
      clearInterval(this.tiemr);
      this.tiemr = setInterval(() => {
        this.setNowTimes();
        // console.log("清空");
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
$width: 19.2rem;
$height: 10.8rem;
.box {
  width: 100%;
  height: 100%;
  background: #081029;
}
.index {
  width: $width;
  height: $height;
  background: #081029;
  padding-top: 0.1rem;
  box-sizing: border-box;
  margin: 0 auto;
  .tit {
    width: 100%;
    height: 0.7rem;
    background-size: 100% 100%;
    position: relative;
    background: #101638;
    display: flex;
    align-items: center;
    // span {
    //   font-size: 0.34rem;
    //   color: rgba(18, 151, 236, 1);
    //   line-height: 0.56rem;
    //   color: #00ffba;
    //   display: block;
    //   text-align: center;
    // }
    .center-tit{
      display: flex;
      height: .54rem;
      margin: 0 auto;
      .center-name{
        font-size: 0.34rem;
        color: #00ffba;
        .info{
          line-height: .48rem;
          margin: 0 .3rem
        }
      }
      .top{
        height: 2px;
        background-image: linear-gradient(#0C96DA,#12DF9E);
      }
      .bottom{
        height: 2px;
        background-image: linear-gradient(#171FBB,#27CEE7);
      }
    }
    p {
      position: absolute;
      right: 0.5rem;
      top: 0.34rem;
      font-size: 0.18rem;
      color: #00ffba;
    }
  }
  .menu {
    width: 100%;
    height: 100%;
    .menu-pad {
      width: 100%;
      height: 100%;
      padding: 0.16rem 0.2rem;
      box-sizing: border-box;
      .cont {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .row {
          width: 6.16rem;
          height: 9.69rem;
          background: linear-gradient(
            -45deg,
            rgba(16, 22, 56, 1) 0%,
            rgba(29, 37, 88, 1) 100%
          );
          border-radius: 0.02rem;
          padding: 0 0.16rem;
          box-sizing: border-box;
          .row-tit {
            height: 0.74rem;
            width: 100%;
            display: flex;
            align-items: center;
            img {
              width: 0.3rem;
              height: 0.3rem;
              margin-right: 0.08rem;
            }
            span {
              font-size: 0.22rem;
              color: rgba(0, 255, 186, 1);
            }
          }
          .row-con {
            width: 100%;
            height: calc(100% - 1rem);
            margin-top: 0.26rem;
            // .swiper-container{
            //   width: 100%;
            //   height: 100%;
            // }
            .swiper-container {
              width: 100%;
              height: 100%;
              .cal {
                width: 5.82rem;
                height: 1.56rem;
                background: #0084FF;
                border-radius: 0.2rem;
                // margin-bottom: 0.16rem;
                margin: 0 auto 0.16rem;
                padding: 0.11rem 0.17rem;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                color: #FFFFFF;
                position: relative;
                img {
                  width: 0.4rem;
                  height: 0.4rem;
                  border-radius: 50%;
                  margin-right: 0.17rem;
                }
                .info {
                  width: calc(100% - 0.57rem);
                  height: 100%;
                  .name {
                    font-size: 0.24rem;
                    font-weight: bold;
                    line-height: 0.4rem;
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  }
                  .name-t {
                    font-size: 0.2rem;
                    line-height: 0.3rem;
                  }
                  .but-task {
                    display: flex;
                    font-size: 0.2rem;
                    line-height: 0.4rem;
                    justify-content: space-between;
                    align-items: center;
                  }
                  .address{
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size:.18rem;
                    line-height:.3rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    img{
                      width:.22rem;
                      height:.25rem;
                      margin: 0;
                      vertical-align: middle;
                    }
                    .address-info{
                      width: 3.2rem;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                  }
                }
                .header-img{
                  position: absolute;
                  right: .42rem;
                  bottom:.46rem;
                  width: .58rem;
                  height: .58rem;
                  box-sizing: border-box;
                  border: .02rem solid #101638;
                  border-radius: 50%;
                  img{
                    width: 100%;
                    height: 100%;
                    display: block;
                    border-radius: 50%;
                    margin: 0 auto;
                  }
                }
                &.Green {
                  // background: linear-gradient(
                  //   90deg,
                  //   rgba(34, 177, 214, 1) 0%,
                  //   rgba(63, 225, 174, 1) 100%
                  // );
                  // box-shadow: 0px 2px 14px 0px rgba(34, 177, 214, 0.57);
                  background: #18ae49;
                }
                &.Red {
                  // background: linear-gradient(
                  //   90deg,
                  //   rgba(231, 11, 52, 1) 0%,
                  //   rgba(242, 101, 137, 1) 100%
                  // );
                  // box-shadow: 0upx 6px 13px 1px rgba(23, 106, 180, 0.2);
                  background: #E70E36;
                }
                &.Yellow {
                  // background: linear-gradient(
                  //   -90deg,
                  //   rgba(250, 218, 0, 1) 0%,
                  //   rgba(241, 103, 43, 1) 100%
                  // );
                  // box-shadow: 0px 6px 13px 1px rgba(23, 106, 180, 0.2);
                  background: #F16C29;
                }
                &.Blue {
                  // background: linear-gradient(
                  //   90deg,
                  //   rgba(65, 161, 247, 1) 0%,
                  //   rgba(100, 210, 241, 1) 100%
                  // );
                  // box-shadow: 0px 6px 13px 1px rgba(23, 106, 180, 0.2);
                  background: #0084FF;
                }
              }
            }
            .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
              bottom: -.2rem;
            }
            .swiper-slide {
              background-position: center;
              background-size: cover;
              width: 100% !important;
            }
            .swiper-pagination-bullet {
              background: #707bb6;
              width: 0.04rem;
              height: 0.04rem;
              border-radius: 50%;
            }
            .swiper-pagination-bullet-active {
              width: 0.24rem;
              height: 0.04rem;
              border-radius: 0.02rem;
            }
          }
        }
      }
    }
  }
}
</style>