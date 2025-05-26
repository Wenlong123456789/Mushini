/*****************************
🧚🏻‍♂️ 作者：Wenlong123456789
🆔 适配版本：波点音乐 v3.3.0+
🛠️ 最后更新：2024-02-20
⚠️ 需要配合 MITM 证书使用
*****************************/

const url = $request.url;
const isTargetAPI = /\/api\/(ucenter\/users\/pub\/\d+|service\/(advert\/config|global\/config\/vipEnter))/.test(url);

if (!isTargetAPI) {
  console.log(`[跳过] 非目标接口：${url}`);
  $done({});
}

let body = $response.body;

console.log(`原始响应：${body}`); // 调试输出

// ====== VIP 核心状态 ======
body = body
  .replace(/"isVip":\d/g, '"isVip":1')
  .replace(/"vipType":\d/g, '"vipType":1')
  .replace(/"isVipBoolean":\w+/g, '"isVipBoolean":true');

// ====== 全功能解锁 ======
body = body
  .replace(/"payVipType":\d/g, '"payVipType":2')
  .replace(/"isPayVipBoolean":\w+/g, '"isPayVipBoolean":true')
  .replace(/"isBigVipBoolean":\w+/g, '"isBigVipBoolean":true');

// ====== 永久有效期 ======
const eternalTimestamp = "1893456000000"; // 2486-01-01
body = body
  .replace(/"expireDate":\d+/g, `"expireDate":${eternalTimestamp}`)
  .replace(/"bigExpireDate":\d+/g, `"bigExpireDate":${eternalTimestamp}`)
  .replace(/"payExpireDate":\d+/g, `"payExpireDate":${eternalTimestamp}`);

// ====== 界面优化 ======
body = body
  .replace(/"fristVipListBtn":\d+/g, '"fristVipListBtn":1')
  .replace(/"fristVipPlayBtn":\d+/g, '"fristVipPlayBtn":1')
  .replace(/"ipCity":"[^"]+"/g, '"ipCity":"🌌三体星系"');

// ====== 个性化设置 ======
body = body
  .replace(/"nickname":"[^"]+"/g, '"nickname":"🦋魔法用户"')
  .replace(/"redFlower":\d+/g, '"redFlower":999999');

console.log(`修改后：${body}`); // 调试输出

$done({ body });
