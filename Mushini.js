# Mushini
私人订阅
/*******************************
  公众号:Mushini
关注了解更多新科技！！！
巧影破解订阅
脚本名称:巧影破解订阅
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/api-account.kinemasters.com\/v2\/user\/subscribe.+$ url script-response-body Mushini.js
[mitm] 
hostname = *.kinemasters.*
*******************************
Surge

[Script]
^http[s]?:\/\/api-account.kinemasters.com\/v2\/user\/subscribe.+$ requires-body=1,max-size=0,script-path=Mushini.js

[MITM]
hostname = *.kinemasters.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.isSubscribed= true;
    $done({body: JSON.stringify(obj)});
