/******************************
⚠️如果放远程，请把bday.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:百度翻译
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/fanyi-app\.baidu\.com\/transapp\/vipcenter\/user\/info|https?:\/\/fanyi-app\.baidu\.com\/transapp\/comment\/my.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/bdfy.js


[mitm]
hostname = fanyi-app.baidu.com,fanyi-app.baidu.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"vipStatus\":\d/g,'"vipStatus":1');
body = body.replace(/"appVipStatus\":\d/g,'"appVipStatus":1');
body = body.replace(/"svipStatus\":\d/g,'"svipStatus":1');
$done(body);
