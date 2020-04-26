<template>
  <div class="box">
    <div class="index">
      <div class="tit">
        <span>{{nameBu}}任务大屏</span>
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
                <span>进行中({{this.Running.length}})</span>
              </div>
              <div class="row-con">
                <!-- Swiper -->
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(val,inx) in RunningLeng" v-bind:key="inx">
                      <div
                        class="cal"
                        v-for="(item,index) in Running"
<<<<<<< HEAD
                        v-if="index < (inx + 1) * 5 && index >= inx * 5"
=======
                        v-if="index < (inx + 1) * 6 && index >= inx * 6"
>>>>>>> 174d847d3469f11d4a3ff84c074a7de5821ffe0f
                        v-bind:key="index"
                        :class="asdasdasd(item.plan_end_time) === 2 ? 'Red' :  
															 asdasdasd(item.plan_end_time) === 3 ? 'Blue' :
															 asdasdasd(item.plan_end_time) === 4 ? 'Yellow' : 'Blue'"
                      >
                        <img src="../assets/run.png" alt />
                        <div class="info">
<<<<<<< HEAD
                          <div class="name">{{item.task}}</div>
                          <div class="name-t">{{item.project}}</div>
=======
                          <div class="name">{{item.project}}</div>
                          <div class="name-t">{{item.task}}</div>
>>>>>>> 174d847d3469f11d4a3ff84c074a7de5821ffe0f
                          <div class="but-task">
                            <div class="time">{{item.plan_start_time}} 至 {{item.plan_end_time}}</div>
                            <div class="pro-per">{{nameBu}} {{item.user_name}}</div>
                          </div>
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
<<<<<<< HEAD
                        v-if="index < (inx + 1) * 5 && index >= inx * 5"
=======
                        v-if="index < (inx + 1) * 6 && index >= inx * 6"
>>>>>>> 174d847d3469f11d4a3ff84c074a7de5821ffe0f
                        v-bind:key="index"
                        :class="asdasdasd(item.plan_end_time) === 2 ? 'Red' :  
															 asdasdasd(item.plan_end_time) === 3 ? 'Blue' :
															 asdasdasd(item.plan_end_time) === 4 ? 'Yellow' : 'Blue'"
                      >
                        <img src="../assets/norun.png" alt />
                        <div class="info">
<<<<<<< HEAD
                          <div class="name">{{item.task}}</div>
                          <div class="name-t">{{item.project}}</div>
=======
                          <div class="name">{{item.project}}</div>
                          <div class="name-t">{{item.task}}</div>
>>>>>>> 174d847d3469f11d4a3ff84c074a7de5821ffe0f
                          <div class="but-task">
                            <div class="time">{{item.plan_start_time}} 至 {{item.plan_end_time}}</div>
                            <div class="pro-per">{{nameBu}} {{item.user_name}}</div>
                          </div>
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
<<<<<<< HEAD
                        v-if="index < (inx + 1) * 5 && index >= inx * 5"
=======
                        v-if="index < (inx + 1) * 6 && index >= inx * 6"
>>>>>>> 174d847d3469f11d4a3ff84c074a7de5821ffe0f
                        v-bind:key="index"
                      >
                        <img src="../assets/success.png" alt />
                        <div class="info">
<<<<<<< HEAD
                          <div class="name">{{item.task}}</div>
                          <div class="name-t">{{item.project}}</div>
=======
                          <div class="name">{{item.project}}</div>
                          <div class="name-t">{{item.task}}</div>
>>>>>>> 174d847d3469f11d4a3ff84c074a7de5821ffe0f
                          <div class="but-task">
                            <div class="time">{{item.plan_start_time}} 至 {{item.plan_end_time}}</div>
                            <div class="pro-per">{{nameBu}} {{item.user_name}}</div>
                          </div>
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
      nameBu: ""
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
      const wsuri = `wss://www.kongfushidai.cn/wx/role/${
        this.$route.query.id
          ? this.$route.query.id
          : sessionStorage.getItem("role")
      }/?${
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
    this.nameBu =
      this.$route.query.id == 1
        ? "运营部"
        : this.$route.query.id == 2
        ? "产品部"
        : this.$route.query.id == 3
        ? "项目部"
        : this.$route.query.id == 4
        ? "研发中心"
        : this.$route.query.id == 5
        ? "市场销售"
        : "";
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
          `${
            this.$route.query.id
              ? this.$route.query.id
              : sessionStorage.getItem("role")
          }`
      )
      .then(res => {
        this.yesDayList = res.data.results;
        console.log(this.yesDayList);
      })
      .catch(err => {});

    //进行中
    this.$http
      .get(
        this.$conf.env.getTaskRun +
          `${
            this.$route.query.id
              ? this.$route.query.id
              : sessionStorage.getItem("role")
          }`
      )
      .then(res => {
        this.Running = res.data.results;
        console.log(this.Running);
      })
      .catch(err => {});

    //待进行
    this.$http
      .get(
        this.$conf.env.getTaskNoR +
          `${
            this.$route.query.id
              ? this.$route.query.id
              : sessionStorage.getItem("role")
          }`
      )
      .then(res => {
        this.NoRunning = res.data.results;
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
<<<<<<< HEAD
        if ((this.Running.length / 5) % 1 === 0) {
          return this.Running.length / 5;
        } else {
          return Math.floor(this.Running.length / 5) + 1;
=======
        if ((this.Running.length / 6) % 1 === 0) {
          return this.Running.length / 6;
        } else {
          return Math.floor(this.Running.length / 6) + 1;
>>>>>>> 174d847d3469f11d4a3ff84c074a7de5821ffe0f
        }
      }
    },
    YerListLeng() {
      if (this.yesDayList.length) {
<<<<<<< HEAD
        if ((this.yesDayList.length / 5) % 1 === 0) {
          return this.yesDayList.length / 5;
        } else {
          return Math.floor(this.yesDayList.length / 5) + 1;
=======
        if ((this.yesDayList.length / 6) % 1 === 0) {
          return this.yesDayList.length / 6;
        } else {
          return Math.floor(this.yesDayList.length / 6) + 1;
>>>>>>> 174d847d3469f11d4a3ff84c074a7de5821ffe0f
        }
      }
    },
    NorunList() {
      if (this.NoRunning.length) {
<<<<<<< HEAD
        if ((this.NoRunning.length / 5) % 1 === 0) {
          return this.NoRunning.length / 5;
        } else {
          return Math.floor(this.NoRunning.length / 5) + 1;
=======
        if ((this.NoRunning.length / 6) % 1 === 0) {
          return this.NoRunning.length / 6;
        } else {
          return Math.floor(this.NoRunning.length / 6) + 1;
>>>>>>> 174d847d3469f11d4a3ff84c074a7de5821ffe0f
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
      if (news == 5) {
        this.reload();
      }
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
    background: url("../assets/indextit.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    span {
      font-size: 0.34rem;
      color: rgba(18, 151, 236, 1);
      line-height: 0.56rem;
      color: #00ffba;
      display: block;
      text-align: center;
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
<<<<<<< HEAD
                height: 1.4rem;
=======
                height: 1.2rem;
>>>>>>> 174d847d3469f11d4a3ff84c074a7de5821ffe0f
                background: linear-gradient(
                  90deg,
                  rgba(65, 161, 247, 1) 0%,
                  rgba(100, 210, 241, 1) 100%
                );
                box-shadow: 0px 0.06rem 0.13rem 0.01rem rgba(23, 106, 180, 0.2);
                border-radius: 0.2rem;
                margin-bottom: 0.16rem;
                padding: 0.11rem 0.17rem;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
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
<<<<<<< HEAD
                    font-size: 0.24rem;
                    font-weight: bold;
                    color: rgba(234, 248, 248, 1);
                    line-height: 0.34rem;
                  }
                  .name-t {
                    font-size: 0.2rem;
                    color: rgba(234, 248, 248, 1);
                    line-height: 0.5rem;
                  }
                  .but-task {
                    display: flex;
                    font-size: 0.2rem;
=======
                    font-size: 0.22rem;
                    font-weight: bold;
                    color: rgba(234, 248, 248, 1);
                    line-height: 0.32rem;
                  }
                  .name-t {
                    font-size: 0.18rem;
                    color: rgba(234, 248, 248, 1);
                    line-height: 0.34rem;
                  }
                  .but-task {
                    display: flex;
                    font-size: 0.18rem;
>>>>>>> 174d847d3469f11d4a3ff84c074a7de5821ffe0f
                    color: rgba(234, 248, 248, 1);
                    line-height: 0.3rem;
                    justify-content: space-between;
                    align-items: center;
                  }
                }
                &.Green {
                  background: linear-gradient(
                    90deg,
                    rgba(34, 177, 214, 1) 0%,
                    rgba(63, 225, 174, 1) 100%
                  );
                  box-shadow: 0px 2px 14px 0px rgba(34, 177, 214, 0.57);
                }
                &.Red {
                  background: linear-gradient(
                    90deg,
                    rgba(231, 11, 52, 1) 0%,
                    rgba(242, 101, 137, 1) 100%
                  );
                  box-shadow: 0upx 6px 13px 1px rgba(23, 106, 180, 0.2);
                }
                &.Yellow {
                  background: linear-gradient(
                    -90deg,
                    rgba(250, 218, 0, 1) 0%,
                    rgba(241, 103, 43, 1) 100%
                  );
                  box-shadow: 0px 6px 13px 1px rgba(23, 106, 180, 0.2);
                }
                &.Blue {
                  background: linear-gradient(
                    90deg,
                    rgba(65, 161, 247, 1) 0%,
                    rgba(100, 210, 241, 1) 100%
                  );
                  box-shadow: 0px 6px 13px 1px rgba(23, 106, 180, 0.2);
                }
              }
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