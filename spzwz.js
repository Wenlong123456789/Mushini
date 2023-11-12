/******************************
⚠️如果放远程，请把spzwz.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:视频转文字破解
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/paperwork\.szshht\.cn\/api\/User\/getVipInfo|https?:\/\/paperwork\.szshht\.cn\/api\/System\/getVipPrice|https?:\/\/paperwork\.szshht\.cn\/api\/User\/getUserInfo.*? url script-response-body spzwz.js


[mitm]
hostname = paperwork.szshht.cn,paperwork.szshht.cn,paperwork.szshht.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"is_vip\":\d/g,'"is_vip":1');
body = body.replace(/"enddate\":""/g,'"enddate":"2289-11-12 22:14:51"');
body = body.replace(/"is_renew\":\d/g,'"is_renew":1');
body = body.replace(/"status\":\d/g,'"status":2');
$done(body);
