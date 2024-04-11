/******************************
⚠️如果放远程，请把FFF.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:亿图图示破解
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/userapi\.edrawsoft\.cn.*?|https?:\/\/maxapi\.edrawsoft\.cn\/api\/oss\/*\/obj\/openrecord.*? url script-response-body FFF.js


[mitm]
hostname = userapi.edrawsoft.cn,maxapi.edrawsoft.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"data\":\w+/g,'"data": {"user_id":35002501,"exp":10075383597636,"mobile_exp":10075383597636,"online_exp":10075383597636,"win_exp":10075383597636,"mac_exp":10075383597636,"linux_exp":10075383597636,"group":true,"is_sub_vip":true,"version":1,"fuser":true,"platform_fuser":true,"now":1712812663000}');
body = body.replace(/"msg\":\w+/g,'"msg":10');
body = body.replace(/"max_storage\":\d+/g,'"max_storage":1073741824');
body = body.replace(/"master_vip\":\d+/g,'"master_vip":734489662000');
body = body.replace(/"master_new_guide\":\d+/g,'"master_new_guide":734489662000');
body = body.replace(/"master_imgzip\":\d+/g,'"master_imgzip":734489662000');
body = body.replace(/"master_node_limit_open\":\d+/g,'"master_node_limit_open":734489662000');
body = body.replace(/"master_node_limit2_open\":\d+/g,'"master_node_limit2_open":734489662000');
body = body.replace(/"mobile_buy_pv\":\d+/g,'"mobile_buy_pv":734489662000');
body = body.replace(/"is_auto_renew\":\d/g,'"is_auto_renew":1');
body = body.replace(/"price\":"\d+.\d+"/g,'"price":"0"');
body = body.replace(/"exp\":\d+/g,'"exp":734489662000');
body = body.replace(/"used_storage\":\d+/g,'"used_storage":22986');
body = body.replace(/"max_storage\":\d+/g,'"max_storage":1073741824');
$done(body);
