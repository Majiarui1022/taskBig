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


    //boss  老大大屏 
    getBossSeeTaskYes : winchaingroupApi + 'p/v2/wx/all_overtime/',      //所有昨日完成
    getBossSeeTaskRun : winchaingroupApi + 'p/v2/wx/all_ing/',          //所有进行中
    getBossSeeTaskNo : winchaingroupApi + 'p/v2/wx/all_wait/',        //待进行
    AllRoleStatus : winchaingroupApi + 'p/v2/wx/role_status/',        //大屏部门状态
    getBossBoard : winchaingroupApi + 'p/v2/wx/board/',               //大屏榜单
};















