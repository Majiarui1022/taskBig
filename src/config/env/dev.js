// 开发环境配置
const winchaingroupApi = "https://www.kongfushidai.cn/";

      //线上   https://www.kongfushidai.cn/
      //线下   http://192.168.0.22:8002/
module.exports = {
  //logo
    logoGet : winchaingroupApi + 'u/v1/wx/role/',   //获取部门
    userLogin : winchaingroupApi + 'u/v1/wx/rolelogin/',  //用户登录
    getTaskYesTo : winchaingroupApi + 'p/v1/wx/yesterday/?taskuser__user__role=', //昨日完成
    getTaskRun : winchaingroupApi + 'p/v1/wx/ing/?user__role=',    //进行中
    getTaskNoR : winchaingroupApi + 'p/v1/wx/wait/?user__role=',    //待进行
    
};















