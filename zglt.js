/******************************
⚠️如果放远程，请把ZGLT.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:中国联通
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/m\.client\.10010\.com\/\/mobileserviceimportant\/home\/queryUserInfoSeven|https?:\/\/m\.client\.10010\.com\/mobileService\/customer\/query\/getMyUnicomDateTotle\.htm|https?:\/\/m\.client\.10010\.com\/growthfunction\/queryHeadUserCard9|https?:\/\/m\.client\.10010\.com\/mobileService\/onLine\.htm|https?:\/\/m\.client\.10010\.com\/mobileserviceimportant\/myInfoMoney\/queryMoney\.do|https?:\/\/m\.client\.10010\.com\/servicequerybusiness\/query\/myInformation|https?:\/\/m\.client\.10010\.com\/servicequerybusiness\/query\/myInformationForMine|https?:\/\/qy\.chinaunicom\.cn\/mobile\/userarea\/queryAccountInfo|https?:\/\/m\.client\.10010\.com\/servicequerybusiness\/balancenew\/accountBalancenew\.htm|https?:\/\/card\.10010\.com\/mall-order\/ticket\/check\/v1|https?:\/\/m\.client\.10010\.com\/mobileService\/login_vcode_member\.htm.*? url script-response-body ZGLT.js


[mitm]
hostname = m.client.10010.com,m.client.10010.com,m.client.10010.com,m.client.10010.com,m.client.10010.com,m.client.10010.com,m.client.10010.com,qy.chinaunicom.cn,m.client.10010.com,card.10010.com,m.client.10010.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"levelNum\":"\d"/g,'"levelNum":"9"');
body = body.replace(/"number\":"-37.55"/g,'"number":"87647.53"');
body = body.replace(/"isShake\":""/g,'"isShake":"1"');
body = body.replace(/"persent\":"\d+"/g,'"persent":"9999999"');
body = body.replace(/"showUserPicFlag\":"\d"/g,'"showUserPicFlag":"1"');
body = body.replace(/"feePersent\":"-37.55"/g,'"feePersent":"87647.53"');
body = body.replace(/"value\":".*?"/g,'"value":"2002年06月16日入网激活，在网7826天"');
body = body.replace(/"value\":".*?"/g,'"value":"7649765.0"');
body = body.replace(/"phone\":"\d+"/g,'"phone":"13111111111"');
body = body.replace(/"TypeSort\":\d/g,'"TypeSort":1');
body = body.replace(/"vipName\":"\w+"/g,'"vipName":"会员"');
body = body.replace(/"vipName\":"\w+"/g,'"vipName":"钻石会员"');
body = body.replace(/"vipLevel\":"\d"/g,'"vipLevel":"9"');
body = body.replace(/"default\":"\d+"/g,'"default":"13111111111"');
body = body.replace(/"desmobile\":"\d+"/g,'"desmobile":"13111111111"');
body = body.replace(/"num\":"\d+"/g,'"num":"13111111111"');
body = body.replace(/"money\":"-37.55"/g,'"money":"87647.53"');
body = body.replace(/"usernumber\":".*?"/g,'"usernumber":"131****1111"');
body = body.replace(/"subscrbstat\":".*?"/g,'"subscrbstat":"正常"');
body = body.replace(/"opendate\":".*?"/g,'"opendate":"2002年06月16日"');
body = body.replace(/"currentLoginNumber\":"\d+"/g,'"currentLoginNumber":"13111111111"');
body = body.replace(/"startdate\":".*?"/g,'"startdate":"2002-06-16"');
body = body.replace(/"levelCN\":"\w+"/g,'"levelCN":"超级用户特权"');
body = body.replace(/"isDif\":"\d"/g,'"isDif":"1"');
body = body.replace(/"phoneNumber\":"\d+"/g,'"phoneNumber":"13111111111"');
body = body.replace(/"level\":"\d"/g,'"level":"9"');
body = body.replace(/"curntbalancecust\":"-37.55"/g,'"curntbalancecust":"87647.53"');
body = body.replace(/"phoneNum\":"\d+"/g,'"phoneNum":"13111111111"');
body = body.replace(/"num\":"132****6978"/g,'"num":"13111111111"');
$done(body);
