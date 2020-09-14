<template>
  <div class="box-boss">
    <div class="index-boss">
      <div class="tit">
        <span>{{nameBu}}任务大屏</span>
        <p
          v-show="nowTimes"
        >{{nowTimes.year}}年{{nowTimes.yy}}月{{nowTimes.dd}}日 &nbsp;&nbsp;&nbsp;&nbsp; 星期{{nowTimes.week}} &nbsp;&nbsp;&nbsp; {{nowTimes.hou}}:{{nowTimes.min}}:{{nowTimes.sec}}</p>
      </div>
      <div class="menu">
        <div class="menu-pad">
          <!-- 18.8rem -->
          <div class="nemu-tit">
            <!-- Swiper -->
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in allRole" :key="index">
                  <div
                    :key="inx"
                    v-for="(val,inx) in item"
                    class="bu-fa"
                    :class="inx == 0 ? 'yunying' : inx == 1 ? 'xiaoshou': inx == 2 ? 'xiangmu' : inx == 3 ? 'chanpin' : inx == 4 ? 'yanfa' :'bangdan'"
                  >
                    <div class="bu-tit">
                      <span></span>
                      <p>{{val.name}}</p>
                    </div>
                    <div class="bu-cont">
                      <div class="bu-left">
                        <div class="num">{{val.count}}</div>
                        <div class="img">
                          <img
                            :src="inx == 0 ? YYimg : inx == 1 ? XSmg: inx == 2 ? XMimg : inx == 3 ? CPimg : inx == 4 ? YFmg :''"
                            alt
                          />
                        </div>
                        <div class="name">每月新增任务</div>
                      </div>
                      <div class="bu-right">
                        <div class="num">{{val.percent}}</div>
                        <div class="img">
                          <img
                            :src="inx == 0 ? YYimg : inx == 1 ? XSmg: inx == 2 ? XMimg : inx == 3 ? CPimg : inx == 4 ? YFmg :''"
                            alt
                          />
                        </div>
                        <div class="name">任务完成率</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bu-fa bangdan">
              <div class="bu-tit">
                <span></span>
                <p>光荣榜</p>
              </div>
              <div class="bu-cont">
                <div class="bu-left" v-if="Bangdan.best">
                  <div class="b-tit-name">每月最佳</div>
                  <div class="b-user-header">
                    <img class="use-head" :src="Bangdan.best.head" alt />
                    <img class="b-logo" src="../assets/best.png" alt />
                  </div>
                  <div class="b-user-name">{{Bangdan.best.name}}</div>
                </div>
                <div class="bu-right" v-if="Bangdan.worst">
                  <div class="b-tit-name">尚需努力</div>
                  <div class="b-user-header">
                    <img class="use-head" :src="Bangdan.worst.head" alt />
                    <img class="b-logo" src="../assets/worst.png" alt />
                  </div>
                  <div class="b-user-name">{{Bangdan.worst.name}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="cont">
            <div class="row">
              <div class="row-tit">
                <img src="../assets/running.png" alt />

                <span>每日工作({{this.runlength}})</span>
              </div>
              <div class="row-con row-menu">
                <!-- Swiper -->
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(val,inx) in Running" v-bind:key="inx">
                      <div
                        class="cal"
                        v-for="(item,index) in val"
                        v-bind:key="index"
                        :class="
                              item.stat == 3 ? 'Green' :
                               asdasdasd(item.plan_end_time) === 2 ? 'Red' :  
															 asdasdasd(item.plan_end_time) === 3 ? 'Blue' :
															 asdasdasd(item.plan_end_time) === 4 ? 'Yellow' : 'Blue'"
                      >
                        <img
                          :src="item.stat == 2 ? RunningImg :
                           item.stat == 3 ? SucImg :''"
                          alt
                        />
                        <div class="info">
                          <div class="name">{{item.task}}</div>
                          <div class="name-t">{{item.project}}</div>
                          <div class="but-task">
                            <div class="time">{{item.plan_start_time}} 至 {{item.plan_end_time}}</div>
                            <!-- <div class="pro-per">{{item.role}} {{item.user_name}}</div> -->
                          </div>
                          <div class="address">
                            <div class="address-info">
                              <img src="../assets/address.png" alt />
                              {{item.address}}
                            </div>
                            <div class="pro-per">{{item.role}} {{item.user_name}}</div>
                          </div>
                        </div>
                        <div class="header-img" v-show="item.head">
                          <img :src="item.head" alt />
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
                <span>待进行({{this.norun}})</span>
              </div>
              <div class="row-con row-menu">
                <!-- Swiper -->
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(val,inx) in NoRunning" v-bind:key="inx">
                      <div
                        class="cal"
                        v-for="(item,index) in val"
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
                            <!-- <div class="pro-per">{{item.role}} {{item.user_name}}</div> -->
                          </div>
                          <div class="address">
                            <div class="address-info">
                              <img src="../assets/address.png" alt />
                              {{item.address}}
                            </div>
                            <div class="pro-per">{{item.role}} {{item.user_name}}</div>
                          </div>
                        </div>
                        <div class="header-img" v-show="item.head">
                          <img :src="item.head" alt />
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
                <img src="../assets/notask.png" alt />
                <span>超时未完成({{this.yeslength}})</span>
              </div>
              <div class="row-con row-menu">
                <!-- Swiper -->
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(val,inx) in yesDayList" v-bind:key="inx">
                      <div class="cal" v-for="(item,index) in val" v-bind:key="index">
                        <img
                          :src="item.stat == 2 ? RunningImg :
                           item.stat == 1 ? NORunningImg :''"
                          alt
                        />
                        <div class="info">
                          <div class="name">{{item.task}}</div>
                          <div class="name-t">{{item.project}}</div>
                          <div class="but-task">
                            <div class="time">{{item.plan_start_time}} 至 {{item.plan_end_time}}</div>
                            <!-- <div class="pro-per">{{item.role}} {{item.user_name}}</div> -->
                          </div>
                          <div class="address">
                            <div class="address-info">
                              <img src="../assets/address.png" alt />
                              {{item.address}}
                            </div>
                            <div class="pro-per">{{item.role}} {{item.user_name}}</div>
                          </div>
                        </div>
                        <div class="header-img" v-show="item.head">
                          <img :src="item.head" alt />
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
      yesDayList: [], //昨日完成
      Running: [], //进行中
      NoRunning: [], //待进行
      runlength: 0,
      yeslength: 0,
      norun: 0,
      timer: null,
      nowTimes: {
        year: 1937,
        yy: 0,
        dd: "00",
        hou: "00",
        min: "00",
        sec: "00",
        week: "5",
      },
      nameBu: "",
      allRole: [],
      contNum: 0, //记录十分钟之后刷新
      RunningImg: require("../assets/run.png"),
      NORunningImg: require("../assets/norun.png"),
      SucImg: require("../assets/success.png"),
      Bangdan: {},

      YYimg: require("../assets/yuny.png"),
      XSmg: require("../assets/shopp.png"),
      XMimg: require("../assets/project.png"),
      CPimg: require("../assets/chan.png"),
      YFmg: require("../assets/yanfa.png"),
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
        timers = null;
        return 2;
      } else if (timers > 2) {
        timers = null;
        return 3;
        //正常
      } else {
        timers = null;
        return 4;
        //警告
      }
    },
    setNowTimes() {
      let myDate = new Date();
      this.contNum++;
      if (this.contNum > 600) {
        this.contNum = 0;
        clearInterval(this.timer);
        this.$nextTick(() => {
          this.reload();
        });
      }
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
    },
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
        : "控福";

    this.timer = setInterval(() => {
      this.setNowTimes();
    }, 1000);

    //各部门状态
    this.$http
      .get(this.$conf.env.AllRoleStatus)
      .then((res) => {
        console.log(res.data);
        var arr = [];
        var num = 0;
         for (var i in res.data) {
          if (num === 4) {
            this.allRole.push(arr);
            arr = [];
            arr.push(res.data[i]);
            num = 1;
          } else {
            num++;
            arr.push(res.data[i]);
          }
        }
        this.allRole.push(arr);
        //榜单
        this.$http
          .get(this.$conf.env.getBossBoard)
          .then((res) => {
            this.Bangdan = res.data;
            //进行中
            this.$http
              .get(this.$conf.env.getBossSeeTaskRun)
              .then((res) => {
                var arr = [];
                var num = 0;
                this.runlength = res.data.length;
                for (var i in res.data) {
                  if (num === 4) {
                    this.Running.push(arr);
                    arr = [];
                    arr.push(res.data[i]);
                    num = 1;
                  } else {
                    num++;
                    arr.push(res.data[i]);
                  }
                }
                this.Running.push(arr);
                this.$http
                  .get(this.$conf.env.getBossSeeTaskYes)
                  .then((res) => {
                    var arr = [];
                    var num = 0;
                    this.yeslength = res.data.length;
                    for (var i in res.data) {
                      if (num === 4) {
                        this.yesDayList.push(arr);
                        arr = [];
                        arr.push(res.data[i]);
                        num = 1;
                      } else {
                        num++;
                        arr.push(res.data[i]);
                      }
                    }
                    this.yesDayList.push(arr);

                    //待进行
                    this.$http
                      .get(this.$conf.env.getBossSeeTaskNo)
                      .then((res) => {
                        var arr = [];
                        var num = 0;
                        this.norun = res.data.length;
                        for (var i in res.data) {
                          if (num === 4) {
                            this.NoRunning.push(arr);
                            arr = [];
                            arr.push(res.data[i]);
                            num = 1;
                          } else {
                            num++;
                            arr.push(res.data[i]);
                          }
                        }
                        this.NoRunning.push(arr);
                        this.$nextTick(() => {
                          var swiper = new Swiper(".swiper-container", {
                            pagination: ".swiper-pagination",
                            autoplayDisableOnInteraction: false,
                            autoplay: 10000,
                            observer: true, //修改swiper自己或子元素时，自动初始化swiper
                            observeParents: true, //修改swiper的父元素时，自动初始化swiper
                          });
                        });
                      })
                      .catch((err) => {});
                  })
                  .catch((err) => {});
              })
              .catch((err) => {});
          })
          .catch((err) => {
            console.log(err.response);
            if (err.response.status === 401) {
              this.$message.error({
                message: "身份验证失败,请重新登录",
                duration: 3000,
              });
              this.$router.push({
                name: "login",
              });
            } else {
              this.$message.error({
                message: "服务器请求失败",
                duration: 3000,
              });
            }
          });
      })
      .catch((err) => {});
  },
  destroyed() {
    console.log("销毁");
  },
};
</script>

<style lang="scss">
@import url("../../static/font/font.css");
$width: 19.2rem;
$height: 10.8rem;
.box-boss {
  width: 100%;
  height: 100%;
  background: #081029;
}
.index-boss {
  width: $width;
  height: $height;
  background: #081029;
  padding-top: 0.1rem;
  box-sizing: border-box;
  margin: 0 auto;
  .tit {
    width: calc(100% - 0.4rem);
    height: 0.7rem;
    background: url("../assets/indextit.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    margin: 0 auto;
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
      padding: 0 0.2rem;
      box-sizing: border-box;
      .nemu-tit {
        width: 100%;
        height: 2rem;
        margin: 0.08rem 0;
        display: flex;
        justify-content: space-between;
        .bangdan {
          color: #dfdfdf;
          margin: 0 !important;
          span {
            background: #e50b0b;
          }
          .bu-cont {
            margin-top: 0.18rem !important;
            padding: 0 0.32rem;
          }
          .b-tit-name {
            font-size: 0.16rem;
            color: #eaf8f8;
            text-align: center;
            font-family: yishu;
          }
          .b-user-header {
            width: 0.57rem;
            height: 0.57rem;
            border-radius: 50%;
            margin: 0.14rem auto 0.25rem;
            position: relative;
            .use-head {
              display: block;
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
            .b-logo {
              position: absolute;
              width: 0.3rem;
              height: 0.3rem;
              top: 0.34rem;
              left: 0.39rem;
            }
          }
          .b-user-name {
            font-size: 0.16rem;
            color: rgba(234, 248, 248, 1);
            text-align: center;
            font-family: yishu;
          }
        }
        .bu-fa {
          width: 3.56rem;
          height: 2rem;
          background: linear-gradient(
            -45deg,
            rgba(28, 37, 88, 1) 0%,
            rgba(16, 22, 56, 1) 100%
          );
          border-radius: 0.01rem;
          padding: 0.1rem 0.14rem;
          box-sizing: border-box;
          margin-right: .26rem;
          .bu-tit {
            width: 100%;
            display: flex;
            height: 0.22rem;
            align-items: center;
            span {
              width: 0.16rem;
              height: 0.16rem;
              border-radius: 50%;
            }
            p {
              font-size: 0.22rem;
              font-family: yishu;
              color: rgba(223, 223, 223, 1);
              margin-left: 0.1rem;
            }
          }
          .bu-cont {
            display: flex;
            justify-content: space-between;
            margin-top: 0.3rem;
            box-sizing: border-box;
            > div {
              text-align: center;
              .num {
                font-size: 0.56rem;
                font-family: yishu;
                line-height: 0.56rem;
              }
              img {
                display: block;
                width: 100%;
                height: 0.52rem;
              }
              .name {
                font-size: 0.22rem;
                font-family: yishu;
                line-height: 0.22rem;
              }
            }
          }
          &:last-child{
            margin: 0;
          }
        }
        .swiper-container {
          width: calc(100% - 3.3rem);
          height: 100%;
          overflow: hidden;
        }
        .swiper-wrapper {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          width: 100% !important;
          height: 100%;
          display: flex;
          overflow: hidden;
          .yunying {
            color: rgba(254, 96, 174, 1);
            span {
              background: rgba(254, 96, 174, 1);
            }
          }
          .xiaoshou {
            color: rgba(253, 162, 63, 1);
            span {
              background: rgba(253, 162, 63, 1);
            }
          }
          .xiangmu {
            color: rgba(154, 86, 255, 1);
            span {
              background: rgba(154, 86, 255, 1);
            }
          }
          .chanpin {
            color: rgba(96, 245, 254, 1);
            span {
              background: rgba(96, 245, 254, 1);
            }
          }
          .yanfa {
            color: rgba(0, 255, 204, 1);
            span {
              background: rgba(0, 255, 204, 1);
            }
          }
          .bangdan {
            color: #dfdfdf;
            span {
              background: #e50b0b;
            }
            .bu-cont {
              margin-top: 0.18rem !important;
              padding: 0 0.32rem;
            }
            .b-tit-name {
              font-size: 0.16rem;
              color: #eaf8f8;
              text-align: center;
              font-family: yishu;
            }
            .b-user-header {
              width: 0.57rem;
              height: 0.57rem;
              border-radius: 50%;
              margin: 0.14rem auto 0.25rem;
              position: relative;
              .use-head {
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
              .b-logo {
                position: absolute;
                width: 0.3rem;
                height: 0.3rem;
                top: 0.34rem;
                left: 0.39rem;
              }
            }
            .b-user-name {
              font-size: 0.16rem;
              color: rgba(234, 248, 248, 1);
              text-align: center;
              font-family: yishu;
            }
          }
        }
      }
      .cont {
        width: 100%;
        height: 7.6rem;
        display: flex;
        justify-content: space-between;
        .row {
          width: 6.16rem;
          height: 7.6rem;
          background: linear-gradient(
            -45deg,
            rgba(16, 22, 56, 1) 0%,
            rgba(29, 37, 88, 1) 100%
          );
          border-radius: 0.02rem;
          padding: 0 0.16rem;
          box-sizing: border-box;
          .row-tit {
            height: 0.6rem;
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
          .row-menu {
            .swiper-pagination-fraction,
            .swiper-pagination-custom,
            .swiper-container-horizontal > .swiper-pagination-bullets {
              bottom: -0.18rem;
              left: 0;
              width: 100%;
            }
          }
          .row-con {
            width: 100%;
            height: calc(100% - 0.6rem);
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
                background: #e70e36;
                border-radius: 0.2rem;
                margin: 0 auto 0.16rem;
                padding: 0.11rem 0.17rem;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                color: #ffffff;
                position: relative;
                border-bottom-left-radius: 0.3rem;
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
                    line-height: 0.34rem;
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  }
                  .name-t {
                    font-size: 0.2rem;
                    line-height: 0.3rem;
                    // line-height: 0.5rem;
                  }
                  .but-task {
                    display: flex;
                    font-size: 0.2rem;
                    line-height: 0.4rem;
                    justify-content: space-between;
                    align-items: center;
                  }
                  .address {
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 0.18rem;
                    line-height: 0.3rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    img {
                      width: 0.22rem;
                      height: 0.25rem;
                      margin: 0;
                      vertical-align: middle;
                    }
                    .address-info {
                      width: 3.2rem;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                  }
                }
                .header-img {
                  position: absolute;
                  right: 0.42rem;
                  bottom: 0.46rem;
                  width: 0.58rem;
                  height: 0.58rem;
                  box-sizing: border-box;
                  border: 0.02rem solid #101638;
                  border-radius: 50%;
                  img {
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
                  background: #00d13b;
                }
                &.Red {
                  // background: linear-gradient(
                  //   90deg,
                  //   rgba(231, 11, 52, 1) 0%,
                  //   rgba(242, 101, 137, 1) 100%
                  // );
                  // box-shadow: 0upx 6px 13px 1px rgba(23, 106, 180, 0.2);
                  background: #e70e36;
                }
                &.Yellow {
                  // background: linear-gradient(
                  //   -90deg,
                  //   rgba(250, 218, 0, 1) 0%,
                  //   rgba(241, 103, 43, 1) 100%
                  // );
                  // box-shadow: 0px 6px 13px 1px rgba(23, 106, 180, 0.2);
                  background: #f16c29;
                }
                &.Blue {
                  // background: linear-gradient(
                  //   90deg,
                  //   rgba(65, 161, 247, 1) 0%,
                  //   rgba(100, 210, 241, 1) 100%
                  // );
                  // box-shadow: 0px 6px 13px 1px rgba(23, 106, 180, 0.2);
                  background: #0084ff;
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