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
body = body.replace(/"is_alone_sale\":"\d"/g,'"is_alone_sale":"0"');
body = body.replace(/"price_type\":"\d"/g,'"price_type":"1"');
body = body.replace(/"price\":"\d+.\d+"/g,'"price":""');
body = body.replace(/"line_price\":\w+/g,'"line_price":1');
body = body.replace(/"term_type\":"\d+"/g,'"term_type":"1"');
body = body.replace(/"is_try\":"\d"/g,'"is_try":"1"');
body = body.replace(/"vip_free_see\":"\d"/g,'"vip_free_see":"1"');
body = body.replace(/"is_user_like\":\w+/g,'"is_user_like":true');
body = body.replace(/"is_collect\":\w+/g,'"is_collect":true');
body = body.replace(/"svip\":\w+/g,'"svip":true');
body = body.replace(/"svip_course\":\w+/g,'"svip_course":true');
$done(body);
