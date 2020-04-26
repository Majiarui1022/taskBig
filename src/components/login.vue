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

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="row">
          <el-form-item label="" prop="input">
            <el-input v-model="ruleForm.input" placeholder="用户名"></el-input>
          </el-form-item>
        </div>

        <div class="row">
          <el-form-item label="" prop="pas">
            <el-input v-model="ruleForm.pas" show-password placeholder="密码"></el-input>
          </el-form-item>
        </div>

        <div class="row">
          <el-form-item label="" prop="value">
            <el-select v-model="ruleForm.value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
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
      ButLoading: false,
      options: [],
      ruleForm : {
        input : 'kf0007',
        pas: "asd123456",
        value: "",
      },
      rules:{
         input: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          pas: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          value: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
      }
    };
  },
  methods: {
    useLogin() {
      if (this.ruleForm.input == "" || this.ruleForm.pas == "" || this.ruleForm.value == "") return;
      this.ButLoading =  true
      let obj = {
        username: this.ruleForm.input,
        password: this.ruleForm.pas,
        role: this.ruleForm.value
      };
      this.$http
        .post(this.$conf.env.userLogin, obj)
        .then(res => {
          console.log(res);
          this.ButLoading = false;
          this.SaveInfo(res)
        })
        .catch(err => {
          this.ButLoading = false
          this.$message.error({
            message : err.response.data.msg,
            duration : 3000
          });
        });
    },
    SaveInfo(res){
      sessionStorage.setItem('role',res.data.role)
      localStorage.setItem('jp_token',res.data.token)
      console.log(res.data.role)
      // return;
      this.$router.push({
        name:'index',
        query :{
          id:res.data.role
        }
      })


    }
  },
  mounted() {
    this.$http
      .get(this.$conf.env.logoGet)
      .then(res => {
        console.log(res.data);
        this.options = res.data;
      })
      .catch(err => {});
  }
};
</script>

<style lang="scss">

.el-message__icon{
  font-size: .24rem;
}
$width: 19.2rem;
$height: 10.8rem;
.log-box{
  width: 100%;
  height: 100%;
  background: #4470C9;
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
        margin-bottom: 0.55rem;
      }
    }
    .row {
      display: block;
      margin-bottom: 0.39rem;
      .el-input,
      .el-select {
        display: block;
        input {
          width: 4.88remx;
          height: 0.61rem;
          border-radius: 0.28rem;
          display: block ;
        }
      }
      .el-form-item__content{
        margin-left:0 !important; 
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
  .bot-fat{
    position: fixed;
    bottom: .3rem;
    padding: 0 5px;
    border-right: 1px solid #fff;
    line-height: 14px;
    font-size: 14px;
    width: 100%;
    display: inline-block;
    p{
      text-align: center;
    }
    a{
      color: #fff;
    }
  }
}
</style>