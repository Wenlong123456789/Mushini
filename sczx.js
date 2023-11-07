/******************************
⚠️如果放远程，请把sczx.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:天天素材
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/api\.ttsc\.juxiao123\.cn\/frontend\/account|https?:\/\/api\.ttsc\.juxiao123\.cn\/frontend\/vip\/packages\/all.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/sczx.js


[mitm]
hostname = api.ttsc.juxiao123.cn,api.ttsc.juxiao123.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"vip_expired_at\":\w+/g,'"vip_expired_at":"2289-11-07 23:59:50"');
body = body.replace(/"vip\":\w+/g,'"vip":true');
body = body.replace(/"vip_level\":".*?"/g,'"vip_level":"is_vip"');
body = body.replace(/"perpetual_vip\":\d/g,'"perpetual_vip":1');
body = body.replace(/"price\":\d+/g,'"price":""');
body = body.replace(/"perpetual\":\d/g,'"perpetual":1');
body = body.replace(/"recommend\":\w+/g,'"recommend":true');
body = body.replace(/"type\":\d/g,'"type":1');
body = body.replace(/"subscription_cycle\":\d/g,'"subscription_cycle":1');
body = body.replace(/"status\":\d/g,'"status":2');
$done(body);
