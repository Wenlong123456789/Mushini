/******************************
🧚♂️脚本名称:波点音乐VIP破解 v2.0
⚠️修复内容：多层嵌套/类型转换/编码处理
*******************************/

[rewrite_local]
^https?:\/\/bd-api\.kuwo\.cn\/api\/(ucenter\/users\/(pub\/\d+|login)|service\/(advert\/config|global\/config\/vipEnter)) url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/Bd.js?ts=20230825

[mitm]
hostname = bd-api.kuwo.cn
*******************************/

var body = $response.body;

// 调试模式：输出前500字符到通知栏（测试后注释）
// $notify("原始响应", "", body.substring(0,500));

// 深度修改函数
function deepModify(obj) {
  if(obj && typeof obj === 'object'){
    // VIP核心字段
    const vipMap = {
      isVip: "1", 
      vipType: "1",
      payVipType: "2",
      isSigned: "1",
      status: "1",
      actVipType: "2"
    };
    
    // 布尔型字段
    const boolFields = [
      'isVipBoolean', 'isPayVipBoolean', 'isBigVipBoolean',
      'isCtVipBoolean', 'isActVipBoolean', 'isSignedBoolean'
    ];
    
    // 时间戳字段
    const expireTimestamp = "10079207147000";
    const timeFields = [
      'expireDate', 'bigExpireDate', 'payExpireDate',
      'ctExpireDate', 'actExpireDate', 'end', 'expireAt'
    ];

    // 递归修改
    for(let key in obj){
      if(vipMap[key] !== undefined){
        obj[key] = vipMap[key];
      }else if(boolFields.includes(key)){
        obj[key] = true;
      }else if(timeFields.includes(key)){
        obj[key] = expireTimestamp;
      }else if(typeof obj[key] === 'object'){
        deepModify(obj[key]);
      }
    }
  }
}

// 执行修改
try {
  let obj = JSON.parse(body);
  deepModify(obj);
  
  // 特殊字段处理
  obj.redFlower = "99999";
  obj.vipExpireTipDay = "999999999";
  obj.nickname = "🦋"; 
  obj.ipCity = "火星";
  
  // 按钮控制
  obj.fristVipListBtn = "1";
  obj.fristVipPlayBtn = "1";
  obj.fristVipSingleBtn = "1";
  obj.fristVipBtnText = "";
  
  body = JSON.stringify(obj);
} catch(e) {
  console.log("JSON解析失败：" + e);
}

$done(body);
