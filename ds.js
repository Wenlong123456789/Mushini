/******************************
⚠️如果放远程，请把ds.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:蝉妈妈
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/api-service\.chanmama\.com\/v1\/user\/info|https?:\/\/api-service\.chanmama\.com\/v1\/vip\/order\/getRestPriceTrans|https?:\/\/api-service\.chanmama\.com\/v1\/douyin\/aweme\/topic\/freeCount|https?:\/\/api-service\.chanmama\.com.*?.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/ds.js


[mitm]
hostname = api-service.chanmama.com,api-service.chanmama.com,api-service.chanmama.com,api-service.chanmama.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"group_id\":\d/g,'"group_id":5');
body = body.replace(/"group_name\":"\w+"/g,'"group_name":"旗舰用户"');
body = body.replace(/"is_agent_mvip_or_pvip_user\":\w+/g,'"is_agent_mvip_or_pvip_user":true');
body = body.replace(/"is_agent_user\":\w+/g,'"is_agent_user":true');
body = body.replace(/"is_channel\":\w+/g,'"is_channel":true');
body = body.replace(/"is_present\":\w+/g,'"is_present":true');
body = body.replace(/"is_sub\":\w+/g,'"is_sub":true');
body = body.replace(/"is_value_white\":\w+/g,'"is_value_white":true');
body = body.replace(/"vip_overdue_time\":\d+/g,'"vip_overdue_time":10083200931000');
body = body.replace(/"rest_price\":\d+/g,'"rest_price":9999');
body = body.replace(/"rest_day\":\d+/g,'"rest_day":9999');
body = body.replace(/"vip_type\":\d/g,'"vip_type":5');
body = body.replace(/"blur_on\":\w+/g,'"blur_on":true');
body = body.replace(/"is_main_account\":\w+/g,'"is_main_account":true');
body = body.replace(/"deliver_vip\":\d/g,'"deliver_vip":1');
body = body.replace(/"errCode\":52000/g,'"errCode":0');
body = body.replace(/"use_single\":"\d"/g,'"use_single":"5"');
body = body.replace(/"by_used_times\":\d+/g,'"by_used_times":10083200931000');
body = body.replace(/"group_name\":"普通会员"/g,'"group_name":"旗舰会员"');
body = body.replace(/"by_can_use_times\":\d+/g,'"by_can_use_times":10083200931000');
body = body.replace(/"by_total_times\":\d+/g,'"by_total_times":10083200931000');
body = body.replace(/"status\":\d/g,'"status":1');
body = body.replace(/"total_count\":\d+/g,'"total_count":99999');
body = body.replace(/"rest_count\":\d+/g,'"rest_count":99999');
body = body.replace(/"errCode\":55000/g,'"errCode":0');
$done(body);
