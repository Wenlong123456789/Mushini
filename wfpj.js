/******************************
⚠️如果放远程，请把wfhy.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:威锋破解
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/api\.wfdata\.club\/v1\/user\/homePageInfo|https?:\/\/fengapp6\.wfdata\.club\/vip\/vip-dark\/vip-icon\.svg.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/wfpj.js


[mitm]
hostname = api.wfdata.club,fengapp6.wfdata.club
%¥
*******************************/
var body=$response.body;
body = body.replace(/"level\":\d+/g,'"level":99');
body = body.replace(/"levelTitle\":"\w+"/g,'"levelTitle":"钛合金苹果"');
body = body.replace(/"isUgcUser\":\w+/g,'"isUgcUser":true');
body = body.replace(/"userTitle\":""/g,'"userTitle":"威锋CEO"');
body = body.replace(/"vipExpiryDate\":""/g,'"vipExpiryDate":"9999-10-16 23:59:59"');
body = body.replace(/"isVip\":\w+/g,'"isVip":true');
body = body.replace(/"autoDeduction\":\w+/g,'"autoDeduction":true');
body = body.replace(/"eventEndTime\":".*?"/g,'"eventEndTime":"9999-10-16 23:59:59"');
body = body.replace(/"开通会员"/g,'"永久会员"');
$done(body);
