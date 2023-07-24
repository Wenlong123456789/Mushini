/******************************
⚠️如果放远程，请把wmap.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:万眸视频
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/www\.wanmouvideo\.com.*?.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/wmsp.js


[mitm]
hostname = www.wanmouvideo.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"vip\":\w+/g,'"vip":true');
body = body.replace(/"term_day\":"\d+"/g,'"term_day":"99"');
body = body.replace(/"vip_free_see\":"\d"/g,'"vip_free_see":"1"');
body = body.replace(/"svip\":\w+/g,'"svip":true');
body = body.replace(/"svip_course\":\w+/g,'"svip_course":true');
body = body.replace(/"good_vip_buy\":"\d"/g,'"good_vip_buy":"1"');
body = body.replace(/"day\":"\d"/g,'"day":"9999"');
body = body.replace(/"try_time\":"\d+"/g,'"try_time":"99999"');
$done(body);
