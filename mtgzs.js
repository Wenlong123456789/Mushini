/******************************
⚠️如果放远程，请把mtgzs.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:美图工作室
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/api\.posters\.meitu\.com\/center\/user_info\.json|https?:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info_by_group\.json|https?:\/\/api\.account\.meitu\.com\/users\/show_current\.json|https?:\/\/webapi-pc\.meitu\.com\/v1\/ai_pic_text\/membership.*? url script-response-body https://raw.githubusercontent.com/Wenlong123456789/Mushini/main/mtgzs.js


[mitm]
hostname = api.posters.meitu.com,api-sub.meitu.com,api.account.meitu.com,webapi-pc.meitu.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"is_vip\":\w+/g,'"is_vip":true');
body = body.replace(/"use_vip\":\w+/g,'"use_vip":true');
body = body.replace(/"have_valid_contract\":\w+/g,'"have_valid_contract":true');
body = body.replace(/"show_renew_flag\":\w+/g,'"show_renew_flag":true');
body = body.replace(/"in_trial_period\":\w+/g,'"in_trial_period":true');
body = body.replace(/"is_vip\":\w+/g,'"is_vip":true');
body = body.replace(/"vip_end_time\":\d+/g,'"vip_end_time":10092441365');
body = body.replace(/"account_type\":\d/g,'"account_type":1');
body = body.replace(/"has_assoc_phone\":\w+/g,'"has_assoc_phone":true');
body = body.replace(/"has_recharge\":\w+/g,'"has_recharge":true');
body = body.replace(/"has_income\":\w+/g,'"has_income":true');
body = body.replace(/"idcard_status\":\d/g,'"idcard_status":1');
body = body.replace(/"blue_v_status\":\d/g,'"blue_v_status":1');
body = body.replace(/"red_v_status\":\d/g,'"red_v_status":1');
body = body.replace(/"assoc_phone_cc\":\d/g,'"assoc_phone_cc":1');
body = body.replace(/"remain\":\d+/g,'"remain":99999');
body = body.replace(/"total\":\d+/g,'"total":999999');
body = body.replace(/"limit_type\":0/g,'"limit_type":1,"valid_time":"10092441365000","invalid_time":"10092441365000"');
body = body.replace(/"in_trial_period\":false/g,'"in_trial_period":true,"trial_period_invalid_time":"10092441365000","current_order_invalid_time":"10092441365000","derive_type":2,"derive_type_name":"普通会员","membership":{"id":"18","display_name":"设计室APP会员","level":2,"level_name":"高级会员"}');
body = body.replace(/"show_renew_flag\":false/g,'"show_renew_flag":true,"sub_type":2,"sub_type_name":"续期","active_product_id":"0","active_order_id":"7122969770265695040","active_sub_order_id":"7122969770450244418","active_sub_type":2,"active_sub_type_name":"续期","active_promotion_status":2,"active_promotion_status_list":[2]');
$done(body);
