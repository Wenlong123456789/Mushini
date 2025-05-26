/******************************
⚠️请将脚本托管到GitHub后远程引用
  🧚🏻‍♂️作者：Wenlong123456789
🫧脚本名称: 波点音乐VIP解锁
*******************************/

[rewrite_local]
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/(ucenter\/users\/pub\/\d+|service\/(advert\/config|global\/config\/vipEnter)) url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/Bd.js

[mitm]
hostname = bd-api.kuwo.cn, 49.7.250.27

*******************************/

var body = $response.body;

// ======== 核心VIP状态 ========
body = body.replace(/"isVip":\d/g, '"isVip":1');
body = body.replace(/"vipType":\d/g, '"vipType":1');
body = body.replace(/"isVipBoolean":\w+/g, '"isVipBoolean":true');

// ======== 支付相关VIP ========
body = body.replace(/"payVipType":\d/g, '"payVipType":2');
body = body.replace(/"isPayVipBoolean":\w+/g, '"isPayVipBoolean":true');
body = body.replace(/"isBigVipBoolean":\w+/g, '"isBigVipBoolean":true');

// ======== 有效期设置 ========
const timestamp = "1893456000000"; // 2486-01-01
body = body.replace(/"expireDate":\d+/g, `"expireDate":${timestamp}`);
body = body.replace(/"bigExpireDate":\d+/g, `"bigExpireDate":${timestamp}`);
body = body.replace(/"payExpireDate":\d+/g, `"payExpireDate":${timestamp}`);

// ======== 界面显示优化 ========
body = body.replace(/"fristVipListBtn":\d+/g, '"fristVipListBtn":1');
body = body.replace(/"fristVipPlayBtn":\d+/g, '"fristVipPlayBtn":1');
body = body.replace(/"ipCity":"[^"]+"/g, '"ipCity":"🪐三体星系"');

// ======== 特殊字段修改 ========
body = body.replace(/"nickname":"[^"]+"/g, '"nickname":"🦋魔法用户"');
body = body.replace(/"redFlower":\d+/g, '"redFlower":999999');

$done({body});
