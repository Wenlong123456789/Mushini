/******************************
⚠️如果放远程，请把still.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:神通驾考
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/app\.czjkxitong\.cn\/user\/getUserInfoByUid|https?:\/\/app\.czjkxitong\.cn\/getConfig.*? url script-response-body still.js


[mitm]
hostname = app.czjkxitong.cn,app.czjkxitong.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"ispay\":\d/g,'"ispay":1');
body = body.replace(/"k1\":\d/g,'"k1":1');
body = body.replace(/"k2\":\d/g,'"k2":1');
body = body.replace(/"k3\":\d/g,'"k3":1');
body = body.replace(/"k4\":\d/g,'"k4":1');
body = body.replace(/"endtime\":".*?"/g,'"endtime":"2289-07-26"');
body = body.replace(/"wxIosPay\":"\d"/g,'"wxIosPay":"1"');
body = body.replace(/"mpshareImage\":".*?"/g,'"mpshareImage":""');
$done(body);
