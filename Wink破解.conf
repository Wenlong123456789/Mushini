/******************************
⚠️如果放远程，请把Wink破解.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:Wink破解
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info_by_group\.json|https?:\/\/api-sub\.meitu\.com\/v2\/entrance\/products_by_biz_code\.json|https?:\/\/h5api-winkcut\.meitu\.com\/activity\/ai_cartoon_task_query\.json|https?:\/\/h5api-winkcut\.meitu\.com\/activity\/ai_cartoon\.json.*? url script-response-body Wink破解.js


[mitm]
hostname = api-sub.meitu.com,api-sub.meitu.com,h5api-winkcut.meitu.com,h5api-winkcut.meitu.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"is_vip\":\w+/g,'"is_vip":true');
body = body.replace(/"use_vip\":\w+/g,'"use_vip":true');
body = body.replace(/"limit_type\":\d/g,'"limit_type":1');
body = body.replace(/"limit_type\":.+/g,'"limit_type":1,"valid_time":"10075912718000","invalid_time":"10075912718000","have_valid_contract":true,"show_renew_flag": true,"sub_type":1,"sub_type_name":"续期","active_product_id":"7052496247529425294","active_order_id":"7052496247529425294","active_sub_order_id":"7052496247722363280","active_sub_type":1,"active_sub_type_name":"续期","active_promotion_status":1,"active_promotion_status_list":[1],"in_trial_period":true,"trial_period_invalid_time":"10075912718000","current_order_invalid_time":"10075912718000","derive_type":1,"derive_type_name":"超级会员","membership":{"id":"1","display_name":"","level":9,"level_name":"超级会员"}},"request_id":"dd629db310e74ab49edf9e58c0659570","success":true}');
body = body.replace(/protocol_type\":\d/g,'protocol_type":1');
body = body.replace(/"main_explain\":"立即购买 ￥6"/g,'"main_explain":"续费购买"');
body = body.replace(/"product_buy_flag\":\d/g,'"product_buy_flag":1');
body = body.replace(/"status\":\d/g,'"status":1');
body = body.replace(/"is_vip\":\d/g,'"is_vip":1');
body = body.replace(/"vip_mode\":\d/g,'"vip_mode":2');
$done(body);
