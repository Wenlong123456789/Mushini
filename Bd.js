/*****************************
⚠️远程引用时需完整保留本注释头
🧚🏻‍♂️作者：Wenlong123456789
🫧脚本名称：波点音乐VIP终极解锁
******************************

^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/(ucenter\/users\/pub\/\d+|service\/(advert\/config|global\/config\/vipEnter)) url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/Bd.js

[mitm]
hostname = bd-api.kuwo.cn, 49.7.250.27
*****************************/

const body = $response.body;

// ====== VIP核心状态 ======
let modifiedBody = body
  .replace(/"isVip":\d/g, '"isVip":1')
  .replace(/"vipType":\d/g, '"vipType":1')
  .replace(/"isVipBoolean":\w+/g, '"isVipBoolean":true');

// ====== 全功能解锁 ======
modifiedBody = modifiedBody
  .replace(/"payVipType":\d/g, '"payVipType":2')
  .replace(/"isPayVipBoolean":\w+/g, '"isPayVipBoolean":true')
  .replace(/"isBigVipBoolean":\w+/g, '"isBigVipBoolean":true');

// ====== 永久有效期 ======
const eternalDate = "1893456000000"; // 2486-01-01
modifiedBody = modifiedBody
  .replace(/"expireDate":\d+/g, `"expireDate":${eternalDate}`)
  .replace(/"bigExpireDate":\d+/g, `"bigExpireDate":${eternalDate}`)
  .replace(/"payExpireDate":\d+/g, `"payExpireDate":${eternalDate}`);

// ====== 界面优化 ======
modifiedBody = modifiedBody
  .replace(/"fristVipListBtn":\d+/g, '"fristVipListBtn":1')
  .replace(/"fristVipPlayBtn":\d+/g, '"fristVipPlayBtn":1')
  .replace(/"ipCity":"[^"]+"/g, '"ipCity":"🌌银河中心"');

// ====== 个性化设置 ======
modifiedBody = modifiedBody
  .replace(/"nickname":"[^"]+"/g, '"nickname":"🦋魔法用户"')
  .replace(/"redFlower":\d+/g, '"redFlower":999999');

$done({ body: modifiedBody });
