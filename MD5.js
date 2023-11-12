/******************************
⚠️如果放远程，请把MD.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:MD5修改
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/api-tools\.milkidc\.com\/plugin\.php.*? url script-response-body MD.js


[mitm]
hostname = api-tools.milkidc.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"status\":\d/g,'"status":1');
body = body.replace(/"groupexpiry\":\d+/g,'"groupexpiry":10093996541');
body = body.replace(/"isvip\":\d/g,'"isvip":1');
body = body.replace(/"count\":\d+/g,'"count":999');
body = body.replace(/"update\":\w+/g,'"update":true');
body = body.replace(/"openviptabale\":\d/g,'"openviptabale":1');
body = body.replace(/"limited\":\d+/g,'"limited":99');
body = body.replace(/"shenstatus\":\w+/g,'"shenstatus":true');
$done(body);
