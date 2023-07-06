/******************************
⚠️如果放远程，请把Yinping.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:音频剪辑破解
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/pay\.camoryapps\.com\/appPay\/api\/user\/info\/tokenLogin.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/Yinping.js


[mitm]
hostname = pay.camoryapps.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"timeExpire\":""/g,'"timeExpire":"2289-07-06 17:30:02"');
body = body.replace(/"timeStart\":""/g,'"timeStart":"2023-07-06 17:30:02"');
body = body.replace(/"isR\":\w+/g,'"isR":true');
body = body.replace(/"isSubscribe\":\w+/g,'"isSubscribe":true');
$done(body);
