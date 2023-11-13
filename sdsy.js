/******************************
⚠️如果放远程，请把Addy.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:闪电水印
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/watershandiana\.yunxiaoguo\.cn\/user\/info|https?:\/\/watershandiana\.yunxiaoguo\.cn\/waterVipGoods\/page.*? url script-response-body Addy.js


[mitm]
hostname = watershandiana.yunxiaoguo.cn,watershandiana.yunxiaoguo.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"balance\":\d+.\d+/g,'"balance":9999.99');
body = body.replace(/"balanceStr\":"\d+.\d+"/g,'"balanceStr":"989999.00"');
body = body.replace(/"openid\":""/g,'"openid":"zs.vip.com"');
body = body.replace(/"isPurchasedSubscribe\":\d/g,'"isPurchasedSubscribe":1');
body = body.replace(/"waterVipInfo\":\w+/g,'"waterVipInfo":{"beginTime":"2023-11-13 09:25:20","createTime":"2023-11-13 09:25:19","expireTime":"2289-11-21 09:25:20","firstOpenTime":"2023-11-13 09:25:20","remainDays":36135,"sign":"ooDB6rHIM1E","typeName":"终身会员","userSign":"HQQbET3z9RE"}');
body = body.replace(/"buyQuantityMax\":-1/g,'"buyQuantityMax":1');
body = body.replace(/"empty\":\w+/g,'"empty":true');
body = body.replace(/"sign\":"\w+"/g,'"sign":"ooDB6rHIM1E"');
$done(body);
