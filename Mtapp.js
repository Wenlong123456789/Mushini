/******************************
⚠️如果放远程，请把myapp.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:美团APP
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/web-vip\.meituan\.com\/new-growth.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/Mtapp.js


[mitm]
hostname = web-vip.meituan.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"reachScore\":\d+/g,'"reachScore":987897');
body = body.replace(/"preScore\":\d+/g,'"preScore":987897');
body = body.replace(/"name\":"白银V4"/g,'"name":"黑金V9"');
body = body.replace(/"currentNodeKey\":"silver4"/g,'"currentNodeKey":"gold9"');
body = body.replace(/"icon\": "http://p0.meituan.net/medal/69c66dd4471a6e93416ca1d86e8a420215485.png"/g,'"icon": "http://p1.meituan.net/medal/021b9f6b04a16194280caf828748956e33739.png"');
body = body.replace(/"nodeKey\":"big-node-1000"/g,'"nodeKey":"growth-node-10000"');
body = body.replace(/"level\":\d/g,'"level":3');
body = body.replace(/"name\":"\w+"/g,'"name":"黑金"');
body = body.replace(/"icon\":".*?"/g,'"icon":"http://p1.meituan.net/medal/021b9f6b04a16194280caf828748956e33739.png"');
body = body.replace(/"total\":\d+/g,'"total":999999');
body = body.replace(/"cur\":\d+/g,'"cur":999999');
body = body.replace(/"startName\":"\w+"/g,'"startName":"黑金V9"');
body = body.replace(/"endName\":"\w+"/g,'"endName":"已到最高等级"');
body = body.replace(/"content\":".*?"/g,'"content":"还差999999分升至皇冠"');
$done(body);
