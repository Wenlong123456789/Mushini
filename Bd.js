/******************************
⚠️修复版：正则表达式精确匹配优化
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
🫧脚本名称:波点音乐VIP解锁修复版
*******************************/

[rewrite_local]
# 用户信息接口
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/(pub\/35772808|login) url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/refs/heads/main/Bd.js
# 广告及VIP配置接口
^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/(advert\/config|global\/config\/vipEnter) url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/refs/heads/main/Bd.js

[mitm]
hostname = bd-api.kuwo.cn, 49.7.250.27
*******************************/

var body = $response.body;

// ================= 关键修复点说明 =================
// 1. 所有正则增加 \s* 适配JSON中可能的空格
// 2. 数值类字段改用 \d+ 确保匹配多位数
// 3. 对字符串型字段显式匹配引号
// 4. 添加调试日志输出

// ================= VIP状态强制激活 =================
body = body.replace(/"isVip"\s*:\s*\d+/g, '"isVip":1');  // 原错误：未处理空格
body = body.replace(/"vipType"\s*:\s*\d+/g, '"vipType":1');
body = body.replace(/"isVipBoolean"\s*:\s*\w+/g, '"isVipBoolean":true');

// ================= 付费VIP类型修正 =================
body = body.replace(/"payVipType"\s*:\s*\d+/g, '"payVipType":2');

// ================= 签到状态伪装 =================
body = body.replace(/"isSigned"\s*:\s*\d+/g, '"isSigned":1');
body = body.replace(/"isSignedBoolean"\s*:\s*\w+/g, '"isSignedBoolean":true');

// ================= 全类型VIP标识 =================
const vipBooleanFields = [
  "isBigVipBoolean", "isCtVipBoolean", 
  "isActVipBoolean", "isPayVipBoolean"
];
vipBooleanFields.forEach(field => {
  body = body.replace(
    new RegExp(`"${field}"\\s*:\\s*\\w+`, "g"),
    `"${field}":true`
  );
});

// ================= 时间戳统一处理 =================
const expireTimestamp = 10079207147000;  // 2289-10-17
const dateFields = [
  "expireDate", "bigExpireDate", "payExpireDate",
  "ctExpireDate", "actExpireDate", "end", "expireAt"
];
dateFields.forEach(field => {
  // 同时匹配数值型和字符串型时间戳（如 "expireDate":"1630000000"）
  body = body.replace(
    new RegExp(`"${field}"\\s*:\\s*("?)\\d+("?)`, "g"),
    `"$field":$1${expireTimestamp}$2`
  );
});

// ================= 资源数值修正 =================
body = body.replace(/"redFlower"\s*:\s*\d+/g, '"redFlower":99999');  // 原错误：仅匹配单数字
body = body.replace(/"vipExpireTipDay"\s*:\s*\d+/g, '"vipExpireTipDay":999999999');

// ================= 界面元素控制 =================
const buttonRules = [
  { field: "fristVipListBtn", val: 1 },
  { field: "fristVipPlayBtn", val: 1 },
  { field: "fristVipSingleBtn", val: 1 }
];
buttonRules.forEach(rule => {
  body = body.replace(
    new RegExp(`"${rule.field}"\\s*:\\s*\\d+`, "g"),
    `"${rule.field}":${rule.val}`
  );
});
body = body.replace(/"fristVipBtnText"\s*:\s*".*?"/g, '"fristVipBtnText":""');

// ================= 账户信息伪装 =================
body = body.replace(/"status"\s*:\s*\d+/g, '"status":1');
body = body.replace(/"nickname"\s*:\s*".*?"/g, '"nickname":"🦋"');
body = body.replace(/"ipCity"\s*:\s*"\w+"/g, '"ipCity":"火星"');
body = body.replace(/"actVipType"\s*:\s*\d+/g, '"actVipType":2');

// ================= 调试日志 =================
// 取消注释以下代码以查看替换结果
// console.log("Modified Body: " + body);

$done(body);
