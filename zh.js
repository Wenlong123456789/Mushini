/******************************
⚠️如果放远程，请把zh.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:知乎
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/103\.41\.167\.235.*?.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/zh.js


[mitm]
hostname = 103.41.167.235
%¥
*******************************/
var body=$response.body;
body = body.replace(/"vip_type\":"\w+"/g,'"vip_type":"svip"');
body = body.replace(/"expire_text\":".*?"/g,'"expire_text":"盐选会员 2289-08-09到期"');
body = body.replace(/"vip_icon\":null,'"vip_icon": {"day_url": "https://pic3.zhimg.com/v2-5b7012c8c22fd520f5677305e1e551bf.png","night_url": "https://pic3.zhimg.com/v2-e51e3252d7a2cb016a70879defd5da0b.png"');
body = body.replace(/"is_renewal\":\w+/g,'"is_renewal":true');
body = body.replace(/"text\":"\w+"/g,'"text":""');
body = body.replace(/"payment_channel\":".*?"/g,'"payment_channel":"IAP"');
body = body.replace(/"type\":"\w+"/g,'"type":"buy"');
body = body.replace(/"tip\":".*?"/g,'"tip":""');
body = body.replace(/"title\":"连续包月"/g,'"title":"已是超级会员"');
body = body.replace(/"duration\":\d+/g,'"duration":0');
body = body.replace(/"type\":"\w+"/g,'"type":"upgrade"');
body = body.replace(/"text\":".*?"/g,'"text": "升级全部时长"');
body = body.replace(/"style\":"\w+"/g,'"style":"red"');
body = body.replace(/"quantity\":\d+/g,'"quantity":32');
body = body.replace(/"tip\":".*?"/g,'"tip":"您已是知乎永久会员"');
body = body.replace(/"button_text\":"\w+"/g,'"button_text":"无需继续支付"');
body = body.replace(/"text\":"超值推荐"/g,'"text":"升级剩余所有时长"');
body = body.replace(/"payment_channel\":"IAP_SUBSCRIPTION"/g,'"payment_channel":"ZHPAY_COIN _ IOS"');
$done(body);
