/******************************
🧚♂️脚本名称:波点音乐VIP破解
⚠️功能说明：解锁会员/修改信息/隐藏广告
*******************************/

[rewrite_local]
^https?:\/\/bd-api\.kuwo\.cn\/api\/(ucenter\/users\/(pub\/35772808|login)|service\/(advert\/config|global\/config\/vipEnter)) url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/refs/heads/main/Bd.js

[mitm]
hostname = bd-api.kuwo.cn
*******************************/

var body = $response.body;

// VIP核心状态修改
body = body.replace(/"isVip":\d/g, '"isVip":1')
          .replace(/"vipType":\d/g, '"vipType":1')
          .replace(/"payVipType":\d/g, '"payVipType":2');

// 布尔型VIP标识
const vipFlags = [
  'isVipBoolean', 'isPayVipBoolean', 'isBigVipBoolean',
  'isCtVipBoolean', 'isActVipBoolean'
];
vipFlags.forEach(flag => {
  body = body.replace(new RegExp(`"${flag}":\\w+`), `"${flag}":true`);
});

// 签到状态
body = body.replace(/"isSigned":\d/g, '"isSigned":1')
          .replace(/"isSignedBoolean":\\w+/g, '"isSignedBoolean":true');

// 时间戳修改(2038年)
const expireTimestamp = 10079207147000;
const expireFields = [
  'expireDate', 'bigExpireDate', 'payExpireDate',
  'ctExpireDate', 'actExpireDate', 'end', 'expireAt'
];
expireFields.forEach(field => {
  body = body.replace(new RegExp(`"${field}":\\d+`), `"${field}":${expireTimestamp}`);
});

// 账户数值修改
body = body.replace(/"redFlower":\d+/g, '"redFlower":99999')
          .replace(/"vipExpireTipDay":\d+/g, '"vipExpireTipDay":999999999');

// 界面元素控制
body = body.replace(/"fristVipListBtn":\d+/g, '"fristVipListBtn":1')
          .replace(/"fristVipPlayBtn":\d+/g, '"fristVipPlayBtn":1')
          .replace(/"fristVipSingleBtn":\d+/g, '"fristVipSingleBtn":1')
          .replace(/"fristVipBtnText":".*?"/g, '"fristVipBtnText":""');

// 个性化信息
body = body.replace(/"nickname":".*?"/g, '"nickname":"🦋"')
          .replace(/"ipCity":"\\w+"/g, '"ipCity":"火星"')
          .replace(/"status":\\d/g, '"status":1')
          .replace(/"actVipType":\\d/g, '"actVipType":2');

$done(body);
