/******************************
⚠️如果放远程，请把FF.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:亿图图示破解
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/userapi\.edrawsoft\.cn.*?.*? url script-response-body FF.js


[mitm]
hostname = userapi.edrawsoft.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"data\":\w+/g,'"data":{"user_id":35002501,"exp":734489662000,"mobile_exp":734489662000,"online_exp":734489662000,"win_exp":734489662000,"mac_exp":734489662000,"linux_exp":734489662000,"group":true,"is_sub_vip":true,"version":1,"fuser":true,"platform_fuser":true,"now":1712795793000}');
body = body.replace(/"msg\":\w+/g,'"msg":10');
body = body.replace(/"max_storage\":\d+/g,'"max_storage":1073741824');
body = body.replace(/"master_vip\":\d+/g,'"master_vip":734489662000');
body = body.replace(/"master_new_guide\":\d+/g,'"master_new_guide":734489662000');
body = body.replace(/"master_imgzip\":\d+/g,'"master_imgzip":734489662000');
body = body.replace(/"master_node_limit_open\":\d+/g,'"master_node_limit_open":734489662000');
body = body.replace(/"master_node_limit2_open\":\d+/g,'"master_node_limit2_open":734489662000');
body = body.replace(/"mobile_buy_pv\":\d+/g,'"mobile_buy_pv":734489662000');
$done(body);
