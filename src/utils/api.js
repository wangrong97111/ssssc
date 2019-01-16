import { wxRequest } from '@/utils/wxRequest';

// const host = 'https://www.yjwsch.com/';http://192.168.1.177:8080/
const host = 'http://www.sscunion.com/sscuion/';
// const host = 'http://39.107.70.80:8080/sscuion/';
// const host = 'http://192.168.1.100:8080/';
// const host = 'http://192.168.1.177:8080/';
// const host = 'http://192.168.1.119:8080/';
const uploadFileUrl = 'http://jiaoyuvideo.oss-cn-beijing.aliyuncs.com/';

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
// 登录
const adminLogin = (params) => wxRequest(params, host + 'login/adminLogin');
//订单查询
const selectOrder = (params) => wxRequest(params, host + 'superAdmin/selectOrder');
//订单详情
const selectOneOrder = (params) => wxRequest(params, host + 'superAdmin/selectOneOrder');
//订单地址详情
const selectAddressOrder = (params) => wxRequest(params, host + 'superAdmin/selectAddressOrder');
//终审
//订单审核___显示待审核订单
const orderListEnd = (params) => wxRequest(params, host + 'weChat/orderList');
//订单审核___通过
const passEnd = (params) => wxRequest(params, host + 'weChat/pass');
//订单审核___驳回
const noPassEnd = (params) => wxRequest(params, host + 'weChat/noPass');
//管理员
//订单审核___显示待审核订单
const orderList = (params) => wxRequest(params, host + 'admin/orderList');
//订单审核___通过
const pass = (params) => wxRequest(params, host + 'admin/pass');
//订单审核___驳回
const noPass = (params) => wxRequest(params, host + 'admin/noPass');
//订单审核___申诉
const shenSuYuanYin = (params) => wxRequest(params, host + 'admin/shenSuYuanYin');
//订单审核___申诉备注
const reasonList = (params) => wxRequest(params, host + 'admin/reasonList');

//终审
//账单审核——运费审核
//账单审核___显示待审核
const carriageListEnd = (params) => wxRequest(params, host + 'weChat/carriageList');
//账单审核___通过
const submitCarriageListEnd = (params) => wxRequest(params, host + 'weChat/submitCarriageList');
//账单审核__驳回
const rejectEnd = (params) => wxRequest(params, host + 'weChat/reject');
//账单审核___申诉备注
const yuanYinList = (params) => wxRequest(params, host + 'weChat/yuanYinList');
//终审
//账单审核——承运费审核
//账单审核___显示待审核
const carriageAcceptEnd = (params) => wxRequest(params, host + 'weChat/carriageAccept');
//账单审核___通过
const submitCarriageAcceptEnd = (params) => wxRequest(params, host + 'weChat/submitCarriageAccept');
//账单审核__驳回
const rejectAcceptEnd = (params) => wxRequest(params, host + 'weChat/rejectAccept');
//账单审核___申诉备注
// const yuanYinListC = (params) => wxRequest(params, host + 'weChat/yuanYinList');

//管理员
//账单审核——承运费审核
//账单审核___显示待审核
const carriageListAccept = (params) => wxRequest(params, host + 'admin/carriageListAccept');
//账单审核___通过
const submitCarriageAccept = (params) => wxRequest(params, host + 'admin/submitCarriageAccept');
//账单审核__驳回
const rejectAccept = (params) => wxRequest(params, host + 'admin/rejectAccept');
//账单审核__申诉
const complainAccept = (params) => wxRequest(params, host + 'admin/complainAccept');

//管理员
//账单审核——运费审核
//账单审核___显示待审核
const carriageList = (params) => wxRequest(params, host + 'admin/carriageList');
//账单审核___通过
const submitCarriageList = (params) => wxRequest(params, host + 'admin/submitCarriageList');
//账单审核__驳回
const reject = (params) => wxRequest(params, host + 'admin/reject');
//账单审核__申诉
const complain = (params) => wxRequest(params, host + 'admin/complain');

//终审——依据订单编号查看添加的订单列表           //运费//承运费(账单编号)
const selectOverOrderList = (params) => wxRequest(params, host + 'operation/selectOverOrderList');
//依据订单编号查看额外费用
const outMoney = (params) => wxRequest(params, host + 'admin/outMoney');

//终审and管理员
//报销___显示
const selectBaoXiaoListKe = (params) => wxRequest(params, host + 'kefu/selectBaoXiaoList');
//报销费用详情
const baoXiao = (params) => wxRequest(params, host + 'kefu/baoXiao');
//报销___通过
const passBaoXiaoKe = (params) => wxRequest(params, host + 'kefu/passBaoXiao');
//报销___拒绝
const reasonListKe = (params) => wxRequest(params, host + 'kefu/reasonList');

//线上订单
//终审___显示未审核
const upOrderListOnline = (params) => wxRequest(params, host + 'operation/upOrderList');
//通过
const passOnline = (params) => wxRequest(params, host + 'admin/pass');
//驳回
const noPassOnline = (params) => wxRequest(params, host + 'admin/noPass');

//全部查询接口————管理员、终审
//订单查询
const selectOrderListAll = (params) => wxRequest(params, host + 'weChat/selectOrderList');
//报销查询
const selectReimbursementListAll = (params) => wxRequest(params, host + 'weChat/selectReimbursementList');
//运费账单查询
const selectBillListAll = (params) => wxRequest(params, host + 'weChat/selectBillList');
//承运费查询
const selectAcceptListAll = (params) => wxRequest(params, host + 'weChat/selectAcceptList');

export default {
  uploadFileUrl,
  adminLogin,
  selectOrder,
  selectOneOrder,
  selectAddressOrder,
  //订单审核
  orderListEnd,       //终审
  passEnd,
  noPassEnd,
  orderList,       //管理员
  pass,
  noPass,
  shenSuYuanYin,
  reasonList,
  //账单————运费
  carriageListEnd,      //终审
  submitCarriageListEnd,
  rejectEnd,
  yuanYinList,
  //账单————承运费
  carriageAcceptEnd,      //终审
  submitCarriageAcceptEnd,
  rejectAcceptEnd,
  // yuanYinListC,
  //账单————承运费
  carriageListAccept,     //管理员
  submitCarriageAccept,
  rejectAccept,
  complainAccept,
  //账单————运费
  carriageList,
  submitCarriageList,
  reject,
  complain,
  selectOverOrderList,
  //额外费用
  outMoney,
  //报销
  selectBaoXiaoListKe,    //终审
  baoXiao,
  passBaoXiaoKe,
  reasonListKe,
  //线上订单
  upOrderListOnline,      //终审
  passOnline,
  noPassOnline,
  //查询————管理员、终审
  selectOrderListAll,
  selectReimbursementListAll,
  selectBillListAll,
  selectAcceptListAll,


};
