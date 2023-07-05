/******************************
⚠️如果放远程，请把swdt.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:思维引导
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^http?:\/\/mindline\.cn\/userSync.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/swdt.js


[mitm]
hostname = mindline.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"vipPeriod\":\d+/g,'"vipPeriod":1');
body = body.replace(/"paid\":\w+/g,'"paid":true');
body = body.replace(/"purchasedDate\":\d+/g,'"purchasedDate":10082679308');
body = body.replace(/"syncCnt\":1/g,'"syncCnt":2,"syncUpdated":true');
$done(body);
