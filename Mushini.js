/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
公考雷达
脚本名称:公考雷达
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/api.gongkaoleida.com\/api\/v5_3_7\/user\/getInfo.+$ url script-response-body gongkaoleida.js
[mitm] 
hostname = *.gongkaoleida.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.gongkaoleida.com\/api\/v5_3_7\/user\/getInfo.+$ requires-body=1,max-size=0,script-path=gongkaoleida.js

[MITM]
hostname = *.gongkaoleida.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.isVip= 1;
obj.data.vipExpire= 10068396434000;
obj.data.vipGrade= 2;
obj.data.remainDays= 36500;
obj.data.vipGrade= 2;
obj.data.greetingMsg= "尊贵的星钻VIP";
obj.data.btnText= "你已专享破解永久特权";
obj.data.status= 1;
    $done({body: JSON.stringify(obj)});
