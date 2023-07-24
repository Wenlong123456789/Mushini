/******************************
⚠️如果放远程，请把kk.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:KK号码助手
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/kkyun\.com\/api\/numbers\/user.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/kk.js


[mitm]
hostname = kkyun.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"has_login\":\w+/g,'"has_login":true');
body = body.replace(/"vip_status\":\d/g,'"vip_status":2');
body = body.replace(/"times\":"\d+"/g,'"times":"999999999"');
body = body.replace(/"title\":".*?"/g,'"title":"高级VIP会员"');
$done(body);
