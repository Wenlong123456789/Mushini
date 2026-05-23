/******************************
⚠️如果放远程，请把swdt.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:思维导图
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/mindline\.cn\/userSync.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/SWDT.js


[mitm]
hostname = mindline.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"vipPeriod\":\d+/g,'"vipPeriod":3767315344');
body = body.replace(/"paid\":\w+/g,'"paid":true');
body = body.replace(/"purchasedDate\":\d+/g,'"purchasedDate":1779164945');
$done(body);
