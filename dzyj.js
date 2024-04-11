/******************************
⚠️如果放远程，请把dzyj.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:地震预警
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/mobile-new\.chinaeew\.cn\/v1\/order\/apple\/vip|https?:\/\/api\.map\.baidu\.com\/sdkcs\/verify.*? url script-response-body dzyj.js


[mitm]
hostname = mobile-new.chinaeew.cn,api.map.baidu.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"endTime\":\d+/g,'"endTime":10075386447000');
body = body.replace(/"user_permission\":-1/g,'"user_permission":1');
body = body.replace(/"ak_permission\":-1/g,'"ak_permission":1');
$done(body);
