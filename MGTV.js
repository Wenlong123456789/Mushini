/******************************
⚠️如果放远程，请把MGTV.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:芒果🥭
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/nuc\.api\.mgtv\.com\/GetUserInfo|https?:\/\/me\.bz\.mgtv\.com\/v3\/module\/list|https?:\/\/homepage\.bz\.mgtv\.com\/v3\/user\/userInfo.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/MGTV.js


[mitm]
hostname = nuc.api.mgtv.com,me.bz.mgtv.com,homepage.bz.mgtv.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"avatarFrameType\":\d/g,'"avatarFrameType":1');
body = body.replace(/"isVip\":\d/g,'"isVip":1');
body = body.replace(/"vipExpiretime\":\d+/g,'"vipExpiretime":10091917698');
body = body.replace(/"isvip\":\d/g,'"isvip":1');
body = body.replace(/"vip_end_time\":\d+/g,'"vip_end_time":10091917698');
body = body.replace(/"type\":"\d"/g,'"type":"1"');
body = body.replace(/"vipdetail\":\w+/g,'"vipdetail":黑钻');
body = body.replace(/"score\":\d+/g,'"score":9999');
body = body.replace(/"level\":\d/g,'"level":9');
body = body.replace(/"assetId\":\d/g,'"assetId":1');
body = body.replace(/"frameType\":\d/g,'"frameType":1');
body = body.replace(/"goodsId\":\d/g,'"goodsId":1');
body = body.replace(/"accountCategory\":\d/g,'"accountCategory":3');
body = body.replace(/"subTitle\":"得15天会员"/g,'"subTitle":"黑心贷"');
body = body.replace(/"title\":"激活钱包"/g,'"title":"黑心贷"');
body = body.replace(/"subTitle\":"\w+"/g,'"subTitle":"点击续费会员"');
body = body.replace(/"assetNum\":\d/g,'"assetNum":1');
body = body.replace(/"creatorType\":\d/g,'"creatorType":1');
body = body.replace(/"ugcLevel\":\d/g,'"ugcLevel":8');
body = body.replace(/"isCreator\":\w+/g,'"isCreator":true');
body = body.replace(/"area\":"\w+"/g,'"area":"你心里"');
$done(body);
