/******************************
⚠️如果放远程，请把Wbpp.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:问真排盘
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com.*?.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/wzpp.js


[mitm]
hostname = bzpp2.iwzbz.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"vipLevel\": \d/g,'"vipLevel": 9');
body = body.replace(/"expires\": ".*?"/g,'"expires": "2289-01-01 00:00:00"');
body = body.replace(/"isSuccess\": \w+/g,'"isSuccess": true');
body = body.replace(/"code\": -1/g,'"code": 0');
body = body.replace(/"message\": ""/g,'"message": "你无敌啦"');
$done(body);
