[rewrite_local]
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/(api\/ucenter\/users\/pub\/35772808|api\/service\/advert\/config|api\/ucenter\/users\/login|api\/service\/global\/config\/vipEnter) url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/refs/heads/main/Bd.js

[mitm]
hostname = bd-api.kuwo.cn, 49.7.250.27
var body = $response.body;

// VIP基础权限激活
body = body.replace(/"isVip\":\d/g, '"isVip":1');  // 普通VIP
body = body.replace(/"vipType\":\d/g, '"vipType":1');
body = body.replace(/"payVipType\":\d/g, '"payVipType":2'); // 付费VIP
body = body.replace(/"actVipType\":\d/g, '"actVipType":2'); // 活动VIP

// Boolean型权限开关
const vipBools = ["isVipBoolean","isPayVipBoolean","isBigVipBoolean","isCtVipBoolean","isActVipBoolean"];
vipBools.forEach(field => {
  body = body.replace(new RegExp(`"${field}\":\\w+`, 'g'), `"${field}":true`);
});

// 有效期设置（2289年到期）
const expireFields = ["expireDate","bigExpireDate","payExpireDate","ctExpireDate","actExpireDate","end","expireAt"];
expireFields.forEach(field => {
  body = body.replace(new RegExp(`"${field}\":\\d+`, 'g'), '"${field}":10079207147000');
});

// 功能解锁
body = body.replace(/"status\":\d/g, '"status":1'); // 账户状态
body = body.replace(/"redFlower\":\d/g, '"redFlower":99999'); // 虚拟货币
body = body.replace(/"vipExpireTipDay\":\d+/g, '"vipExpireTipDay":999999999'); // 过期提醒

// 界面定制
body = body.replace(/"nickname\":\".*?\"/g, '"nickname":"🦋"'); // 修改昵称
body = body.replace(/"ipCity\":\"\\w+\"/g, '"ipCity":"火星"');  // 伪造地理位置
body = body.replace(/"fristVipBtnText\":\".*?\"/g, '"fristVipBtnText":""'); // 隐藏按钮文字

// 首播特权
const fristBtns = ["ListBtn","PlayBtn","SingleBtn"];
fristBtns.forEach(btn => {
  body = body.replace(new RegExp(`"fristVip${btn}\":\\d+`, 'g'), `"fristVip${btn}":1`);
});

$done(body);
