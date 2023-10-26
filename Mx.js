/******************************
⚠️如果放远程，请把hx.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:幻休
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/api\.shaolinzen\.com\/user\/v1\/info.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/Mx.js


[mitm]
hostname = api.shaolinzen.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"vipExpireTime\":\w+/g,'"vipExpireTime":10092474395');
body = body.replace(/"vipActive\":\w+/g,'"vipActive":true');
body = body.replace(/"sipExpireTime\":\w+/g,'"sipExpireTime":10092474395');
body = body.replace(/"sipActive\":\w+/g,'"sipActive":true');
body = body.replace(/"registerChannelCode\":\w+/g,'"registerChannelCode":10092474395');
$done(body);
