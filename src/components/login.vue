<template>
  <div class="log-box">
    <div class="login">
      <div class="login-fat">
        <div class="tit">
          <p>
            HI~
            <br />欢迎登录
          </p>
        </div>

        <el-tabs @tab-click="handleClick" v-model="activeName" :stretch="true">
          <el-tab-pane
            v-for="(item,index) in tabList"
            :key="index"
            :label="item.label"
            :name="item.value"
          ></el-tab-pane>
        </el-tabs>

        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="row">
            <el-form-item label prop="input">
              <el-input v-model="ruleForm.input" placeholder="用户名"></el-input>
            </el-form-item>
          </div>

          <div class="row">
            <el-form-item label prop="pas">
              <el-input v-model="ruleForm.pas" show-password placeholder="密码"></el-input>
            </el-form-item>
          </div>

          <div class="row">
            <el-form-item label prop="value">
              <el-select
                v-model="ruleForm.value"
                multiple
                collapse-tags
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-form>

        <el-button :loading="ButLoading" @click="useLogin" type="primary">登陆</el-button>
      </div>
      <div class="bot-fat">
        <p>
          <a href="http://www.beian.miit.gov.cn">沪ICP备18031142号-13</a>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeName: "task",
      ButLoading: false,
      options: [],
      ruleForm: {
        input: "",
        pas: "",
        value: [],
      },
      allbm: [],
      rules: {
        input: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pas: [{ required: true, message: "请输入密码", trigger: "blur" }],
        value: [
          { required: true, message: "请选择需要展示的部门", trigger: "change" },
        ],
      },
      tabList: [
        {
          label: "部门大屏",
          value: "task",
        },
        {
          label: "任务总屏",
          value: "boss",
        },
      ],
    };
  },
  methods: {
    useLogin() {
      if (
        this.ruleForm.input == "" ||
        this.ruleForm.pas == "" ||
        this.ruleForm.value == []
      )return;
      this.ButLoading = true;
      let obj = {
        username: this.ruleForm.input,
        password: this.ruleForm.pas,
        role: this.ruleForm.value[0] == 999 ? [] : this.ruleForm.value,
      };
      this.$http
        .post(this.$conf.env.userLogin, obj)
        .then((res) => {
          console.log(res);
          if (res.data.id) {
            console.log(res);
            this.ButLoading = false;
            this.SaveInfo(res);
          } else {
            this.ButLoading = false;
            this.$message.error({
              message: res.data.msg,
              duration: 3000,
            });
          }
        })
        .catch((err) => {
          console.log(err.response);
          this.ButLoading = false;
          this.$message.error({
            message: err.response.data.msg,
            duration: 3000,
          });
        });
    },
    SaveInfo(res) {
      sessionStorage.setItem("role", res.data.role);
      localStorage.setItem("jp_token", res.data.token);
      if (this.ruleForm.value[0] == 999) {
        this.$router.push({
          name: "boss",
        });
        return;
      }
      this.$router.push({
        name: "index",
      });
    },
    handleClick(tab, event) {
      console.log('click')
      this.ruleForm.value = [];
      if (this.activeName == "boss") {
        this.options = [
          {
            id: 999,
            name: "控福任务大屏",
          },
        ];
      } else {
        this.options = this.allbm;
      }
    },
  },
  mounted() {
    sessionStorage.clear();
    localStorage.clear();
    this.$http
      .get(this.$conf.env.logoGet)
      .then((res) => {
        this.options = this.allbm = res.data;
      })
      .catch((err) => {});
  },
};
</script>

<style lang="scss" scope>
.el-message__icon {
  font-size: 0.24rem;
}
$width: 19.2rem;
$height: 10.8rem;
.log-box {
  width: 100%;
  height: 100%;
  background: #4470c9;
}
.login {
  width: $width;
  height: $height;
  background: url("../assets/bj.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
  .login-fat {
    width: 6.1rem;
    height: 7.9rem;
    border-radius: 0.08rem;
    background: #ffffff;
    position: absolute;
    top: 1.44rem;
    right: 0.77rem;
    padding: 0.7rem 0.54rem;
    box-sizing: border-box;
    .tit {
      p {
        font-size: 0.41rem;
        color: rgba(0, 0, 0, 1);
        line-height: 0.55rem;
        margin-bottom: 0.3rem;
      }
    }
    .el-tabs {
      width: 100%;
      margin-bottom: 0.63rem;
      .el-tabs__header {
        margin: 0;
      }
      .el-tabs__item {
        width: 50%;
        height: 0.53rem;
        font-size: 0.24rem;
        line-height: 0.53rem;
        color: #999999;
        &.is-active {
          color: #3743d6;
        }
        &:hover {
          color: #3743d6;
        }
      }
      .el-tabs__active-bar {
        width: 50% !important;
        background: #3743d6;
      }
    }
    .row {
      display: block;
      margin-bottom: 0.39rem;
      .el-input,
      .el-select {
        display: block;
        .el-select__tags{
          padding: 0 .26rem;
          box-sizing: border-box;
        }
        input {
          width: 4.88rem;
          height: 0.61rem;
          border-radius: 0.28rem;
          display: block;
          padding:0 .26rem;
        }
      }
      .el-input__suffix{
        right: .26rem;
        i{
          font-size: .24rem;
        }
      }
      .el-form-item__content {
        margin-left: 0 !important;
      }
    }
    .el-button {
      width: 4.81rem;
      height: 0.62rem;
      background: rgba(55, 67, 214, 1);
      border-radius: 0.29rem;
      font-size: 0.2rem;
      font-family: Microsoft YaHei;
      color: rgba(255, 255, 255, 1);
      padding: 0;
    }
  }
  .bot-fat {
    position: fixed;
    bottom: 0.3rem;
    padding: 0 5px;
    border-right: 1px solid #fff;
    line-height: 14px;
    font-size: 14px;
    width: 100%;
    display: inline-block;
    p {
      text-align: center;
    }
    a {
      color: #fff;
    }
  }
}
</style>