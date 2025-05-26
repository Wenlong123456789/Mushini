/******************************
⚠️若需远程使用，请替换MD.js为远程链接
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:波点音乐VIP解锁
🫧建议配合Quantumult X使用
*******************************/

[rewrite_local]
# 用户信息相关接口
^https?:\/\/bd-api\.kuwo\.cn\/api\/ucenter\/users\/(pub\/35772808|login) url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/refs/heads/main/Bd.js
# 广告配置接口
^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/advert\/config url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/refs/heads/main/Bd.js
# VIP入口配置
^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/global\/config\/vipEnter url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/refs/heads/main/Bd.js

[mitm]
hostname = bd-api.kuwo.cn, 49.7.250.27
*******************************/

var body = $response.body;

// ================= VIP状态修改 =================
body = body.replace(/"isVip\":\d/g, '"isVip":1');  // 强制VIP标识
body = body.replace(/"vipType\":\d/g, '"vipType":1');  // VIP类型
body = body.replace(/"isVipBoolean\":\w+/g, '"isVipBoolean":true');  // 布尔型VIP状态

// ================= 付费VIP相关 =================
body = body.replace(/"payVipType\":\d/g, '"payVipType":2');  // 付费VIP类型
body = body.replace(/"isPayVipBoolean\":\w+/g, '"isPayVipBoolean":true');

// ================= 签到状态篡改 =================
body = body.replace(/"isSigned\":\d/g, '"isSigned":1');  // 伪装已签到
body = body.replace(/"isSignedBoolean\":\w+/g, '"isSignedBoolean":true');

// ================= 各类VIP标识增强 =================
body = body.replace(/"isBigVipBoolean\":\w+/g, '"isBigVipBoolean":true');  // 大会员
body = body.replace(/"isCtVipBoolean\":\w+/g, '"isCtVipBoolean":true');    // CT会员
body = body.replace(/"isActVipBoolean\":\w+/g, '"isActVipBoolean":true');  // 活动VIP

// ================= 有效期修改（2289年）=================
const expireDate = 10079207147000;  // 时间戳对应2289-10-17
body = body.replace(/"expireDate\":\d+/g, `"expireDate":${expireDate}`);
body = body.replace(/"bigExpireDate\":\d+/g, `"bigExpireDate":${expireDate}`);
body = body.replace(/"payExpireDate\":\d+/g, `"payExpireDate":${expireDate}`);
body = body.replace(/"ctExpireDate\":\d+/g, `"ctExpireDate":${expireDate}`);
body = body.replace(/"actExpireDate\":\d+/g, `"actExpireDate":${expireDate}`);
body = body.replace(/"end\":\d+/g, `"end":${expireDate}`);
body = body.replace(/"expireAt\":\d+/g, `"expireAt":${expireDate}`);

// ================= 资源数值修改 =================
body = body.replace(/"redFlower\":\d+/g, '"redFlower":99999');  // 红花数量
body = body.replace(/"vipExpireTipDay\":\d+/g, '"vipExpireTipDay":999999999');  // 过期提示天数

// ================= 界面显示控制 =================
body = body.replace(/"fristVipListBtn\":\d+/g, '"fristVipListBtn":1');  // VIP列表按钮
body = body.replace(/"fristVipPlayBtn\":\d+/g, '"fristVipPlayBtn":1');  // 播放按钮
body = body.replace(/"fristVipSingleBtn\":\d+/g, '"fristVipSingleBtn":1');  // 单曲按钮
body = body.replace(/"fristVipBtnText\":\".*?\"/g, '"fristVipBtnText":""');  // 清空按钮文字

// ================= 账户基础信息 =================
body = body.replace(/"status\":\d/g, '"status":1');  // 账户状态激活
body = body.replace(/"nickname\":\".*?\"/g, '"nickname":"🦋"');  // 昵称修改
body = body.replace(/"ipCity\":\"\\w+\"/g, '"ipCity":"火星"');  // IP归属地伪装
body = body.replace(/"actVipType\":\d/g, '"actVipType":2');  // 活动VIP类型

$done(body);
