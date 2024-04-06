/******************************
⚠️如果放远程，请把hd.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:Grow破解
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/user\.hundun\.cn\/dhy\/index.*? url script-response-body hd.js


[mitm]
hostname = user.hundun.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"pay_money\":\d+/g,'"pay_money":9999999');
body = body.replace(/"origin_price\":\d+/g,'"origin_price":999999');
body = body.replace(/"pay_money\":\d+/g,'"pay_money":999999');
$done(body);
