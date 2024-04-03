/******************************
⚠️如果放远程，请把bbbb.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:百度贴吧
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/tieba\.baidu\.com\/mo\/q\/member\/memberRecharge|https?:\/\/mbd\.baidu\.com\/userx\/v1\/info\/get.*? url script-response-body bbbb.js


[mitm]
hostname = tieba.baidu.com,mbd.baidu.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"user_type\":\d/g,'"user_type":2');
body = body.replace(/"props_id\":\d/g,'"props_id":2');
body = body.replace(/"end_time\":"\d+"/g,'"end_time":"10084791664"');
body = body.replace(/"is_charge\":\d/g,'"is_charge":2');
body = body.replace(/"is_block\":\d/g,'"is_block":1');
body = body.replace(/"is_ban\":\d/g,'"is_ban":1');
body = body.replace(/"vip_status\":\d/g,'"vip_status":1');
body = body.replace(/"is_auto_sign\":\w+/g,'"is_auto_sign":true');
body = body.replace(/"default\":\d/g,'"default":2');
body = body.replace(/"islay\":"\d"/g,'"islay":"1"');
body = body.replace(/"pop_type\":"\d"/g,'"pop_type":"3"');
$done(body);
