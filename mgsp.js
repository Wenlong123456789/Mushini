/******************************
⚠️如果放远程，请把mgsp.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:芒果会员〈魔术师〉
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/me\.bz\.mgtv\.com\/v3\/module\/list|https?:\/\/nuc\.api\.mgtv\.com\/GetUserInfo|https?:\/\/vip\.bz\.mgtv\.com\/client\/dynamic_entry|https?:\/\/homepage\.bz\.mgtv\.com\/v3\/user\/userInfo|https?:\/\/vipact3\.api\.mgtv\.com\/api\/v1\/app\/vip\/center\/user\/info|https?:\/\/vipact3\.api\.mgtv\.com\/api\/v1\/app\/vip\/center\/vip\/info|https?:\/\/credits\.bz\.mgtv\.com\/credits\/toast|https?:\/\/layer\.bz\.mgtv\.com\/layer\/conf|https?:\/\/vipact3\.api\.mgtv\.com\/api\/v1\/app\/vip\/center\/theme\/card|https?:\/\/vipact3\.api\.mgtv\.com\/api\/v1\/act\/vipcenter\/themecard\/set|https?:\/\/vip\.bz\.mgtv\.com\/client\/dynamic_entry|https?:\/\/mobile\.api\.mgtv\.com\/v8\/video\/getSource|https?:\/\/mobile\.api\.mgtv\.com\/v10\/video\/info.*? url script-response-body mgsp.js


[mitm]
hostname = me.bz.mgtv.com,nuc.api.mgtv.com,vip.bz.mgtv.com,homepage.bz.mgtv.com,vipact3.api.mgtv.com,vipact3.api.mgtv.com,credits.bz.mgtv.com,layer.bz.mgtv.com,vipact3.api.mgtv.com,vipact3.api.mgtv.com,vip.bz.mgtv.com,mobile.api.mgtv.com,mobile.api.mgtv.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/"subTitle\":".*?"/g,'"subTitle":"有效期：2289-10-23"');
body = body.replace(/"font_color\":".*?"/g,'"font_color":"#FF4500"');
body = body.replace(/"expire\": \d+/g,'"expire": 9999999');
body = body.replace(/"isVip\": \d/g,'"isVip": 1');
body = body.replace(/"vipExpiretime\": \d+/g,'"vipExpiretime": 10092147209');
body = body.replace(/"isvip\": \d/g,'"isvip": 1');
body = body.replace(/"vip_end_time\": \d/g,'"vip_end_time": "2289-10-23 23:59:59"');
body = body.replace(/"type\": "\d"/g,'"type": "1"');
body = body.replace(/"vipdetail\": \w+/g,'"vipdetail": [{"vip_id": "1", "vip_end_time": "2289-10-23 23:59:59", "bind_can_use": false, "isbind": false, "iscurrent": true, "type": "2"}]');
body = body.replace(/"score\": \d/g,'"score": 9999999');
body = body.replace(/"level\": \d/g,'"level": 9');
body = body.replace(/"isFollowed\":\d/g,'"isFollowed":1');
body = body.replace(/"vip_center_type\":\d/g,'"vip_center_type":3');
body = body.replace(/"vip_id\":"\d"/g,'"vip_id":"1"');
body = body.replace(/"vip_end_time\":\d+/g,'"vip_end_time":"2289-10-23 23:59:59"');
body = body.replace(/"type\":"\d"/g,'"type":"3"');
body = body.replace(/"score\":\d+/g,'"score":99999999');
body = body.replace(/"level\":\d/g,'"level":9');
body = body.replace(/"image\":".*?"/g,'"image":"https://vipcdn.mgtv.com/act_ugc/billing/20211018/tmp/773df5002ffb11eca84300163e307e53.png"');
body = body.replace(/"vip_end_time_pc\":\w+/g,'"vip_end_time_pc":"2289-10-23 23:59:59"');
body = body.replace(/"bigscreen_vip_end_date\":""/g,'"bigscreen_vip_end_date":"10092259481"');
body = body.replace(/"music_vip\":\d/g,'"music_vip":1');
body = body.replace(/"vip_id\":\d/g,'"vip_id":1');
body = body.replace(/"renew_state\":\d/g,'"renew_state":1');
body = body.replace(/"status\": \d/g,'"status": 1');
body = body.replace(/"layer_type\":\d/g,'"layer_type":1');
body = body.replace(/"wechat_type\": \d/g,'"wechat_type": 1');
body = body.replace(/"assetId\": \d/g,'"assetId": 1');
body = body.replace(/"frameType\": \d/g,'"frameType": 1');
body = body.replace(/"goodsId\": \d/g,'"goodsId": 1');
body = body.replace(/"allFollowNum\":\d/g,'"allFollowNum":1');
body = body.replace(/"assetNum\":\d/g,'"assetNum":1');
body = body.replace(/"isFollowed\":\d/g,'"isFollowed":1');
body = body.replace(/"isCreator\":\w+/g,'"isCreator":true');
body = body.replace(/"btn_text\": ".*?"/g,'"btn_text": " "');
body = body.replace(/"right_prom\": ".*?"/g,'"right_prom": " "');
body = body.replace(/"avatarFrameType\": \d/g,'"avatarFrameType": 1');
body = body.replace(/"bind_can_use\": \w+/g,'"bind_can_use": true');
body = body.replace(/"isbind\": \w+/g,'"isbind": true');
body = body.replace(/"pos\":"\d"/g,'"pos":"2"');
body = body.replace(/"default_card_key\":"\d"/g,'"default_card_key":"1"');
body = body.replace(/"card_style\":\d/g,'"card_style":1');
body = body.replace(/"badge\":.+/g,'"badge":{"img":"https:\/\/vipcdn.mgtv.com\/act\/assets\/badge\/badge\/vip\/V9.png","url":"https:\/\/club.mgtv.com\/act\/vip_growth\/index.html?ftype=5&pagename=ACT_D&source=vipgrowth_2019041814_appandroid_vipcenter_sjmj&platform=3&actid=vipgrowth_2019041814_appandroid_vipcenter_sjmj&source=2xunzhang&platform=3"}}}');
body = body.replace(/"vip_end_time_desc\":".*?"/g,'"vip_end_time_desc":" "');
body = body.replace(/"user_type_name\":".*?"/g,'"user_type_name":""');
body = body.replace(/"user_type\":\d/g,'"user_type":3');
body = body.replace(/"first_recharge_time\":\w+/g,'"first_recharge_time":"2289-10-23 23:59:59"');
body = body.replace(/"expire\":\d+/g,'"expire":10092259481');
body = body.replace(/"duration\":\d/g,'"duration":1');
body = body.replace(/"reg_time\": \d+/g,'"reg_time": 10092259481');
body = body.replace(/"errno\": \d/g,'"errno": 0');
body = body.replace(/"ret\": \d+/g,'"ret": 0');
body = body.replace(/"right_tip\": ".*?"/g,'"right_tip": "立即续费"');
body = body.replace(/"tip\": ".*?"/g,'"tip": "立即续费"');
body = body.replace(/"btn_text\": ".*?"/g,'"btn_text": "立即续费"');
body = body.replace(/"right_prom\": ".*?"/g,'"right_prom": "立即续费"');
body = body.replace(/"creativity_id\": \d+/g,'"creativity_id": 109452');
body = body.replace(/"plan_id\": \d+/g,'"plan_id": 3273');
body = body.replace(/"freeTryTips\":\w+/g,'"freeTryTips":{ }');
body = body.replace(/"starPointFlag\":"\d"/g,'"starPointFlag":"1"');
body = body.replace(/"flag\":\d/g,'"flag":1');
body = body.replace(/"tips\":".*?"/g,'"tips":" "');
body = body.replace(/"defLevel\":\d/g,'"defLevel":9');
body = body.replace(/"layout\":\d/g,'"layout":1');
body = body.replace(/"audioFormat\":"AAC"/g,'"audioFormat":"AAC","seek":"/vod.do?pm=A4XXDdd0kddWO~Am9k~nUt71wrLduJgc3zmRQ1082qhUeFw1kK36pBMN6OotJmzv_n49~m4hc4NFhYnwITIfk4dTG3qbTs7_g8UuYSp_lGEoJrcee2PfloQF5u8bu7mvJF9rxCO4i7qR0XJ089RNvENBkmJOCZR8W6NJzwTYoB3XK2C6pX8oZ7QLh2Pz5~NcN6DPn4L5LSxmQgV0SJjmjiN8wz_RGfWoiz~OtWVtQBmNBt9kLrWeTXdSfw64jOfuefaVLQ0vM93dRJ4k9qwkYTM42GXPUoN1klxjYNtQdpPqEinsoFhhHKL20~MYjW4P7YmwJr1c6YF63FWq0lkhgCzx1qnM1xbWY_M4fIaMsQfbFx5mmo8M2o0oFgZfuXN3hGViIbRE_FY1rz0XArACfgQD7eCFgyFf00p1m26werQ-&fid=F5CBD7A4FDAF5A3F8A0ECD73305B2C12&gsid=0d71f0ff75234d1dab9f4c9fa12330a1"');
body = body.replace(/"terminalCode\":".*?"/g,'"terminalCode":"1"');
body = body.replace(/"needPay\":\d/g,'"needPay":1');
body = body.replace(/"fileFormat\":".*?"/g,'"fileFormat":"HLS-FMP4"');
body = body.replace(/"info\":\w+/g,'"info":""');
body = body.replace(/"middle\":\w+/g,'"middle":[ ]');
body = body.replace(/"auth_info\":.+/g,'"auth_info":{"interests_info":{"play_tips":{"report":"https://vip.log.mgtv.com/dynamic_entry.html?source=vod_play&invoker=mobile-ios&version=7.5.5&did=d9458b14527224b4c16ad27ddee778c1ba15ca8e&uuid=327309cda0c65b63903a1e7befde0059&vid=19918237&cid=523079&chnid=&plid=&plan_id=1052&exp=&user_type=0&ir_params=&creativity_id=1052&type=show","icon":"","text":"尊敬的V9会员,您正在观看VIP尊享内容"},"def_tips":{"suites":[{"entry_text":"尊敬的V9会员,正在为您切换VIP专享#def#画质","def":-1,"report":"https://vip.log.mgtv.com/dynamic_entry.html?source=vod_vip_defs&invoker=mobile-ios&version=7.5.5&did=d9458b14527224b4c16ad27ddee778c1ba15ca8e&uuid=327309cda0c65b63903a1e7befde0059&vid=19918237&cid=523079&chnid=&plid=&plan_id=1051&exp=&user_type=0&ir_params=&creativity_id=1051&type=show","icon":"","finish_text":"尊敬的V9会员,已为您切换VIP专享#def#画质"},{"entry_text":"尊敬的V9会员,正在为您切换VIP专享#def#音质","def":5,"report":"https://vip.log.mgtv.com/dynamic_entry.html?source=vod_vip_defs&invoker=mobile-ios&version=7.5.5&did=d9458b14527224b4c16ad27ddee778c1ba15ca8e&uuid=327309cda0c65b63903a1e7befde0059&vid=19918237&cid=523079&chnid=&plid=&plan_id=1051&exp=&user_type=0&ir_params=&creativity_id=1051&type=show","icon":"","finish_text":"尊敬的V9会员,已为您切换VIP专享#def#音质"}]}}},"audioSources":[{"ftime":"7282","cornerLabelStyle":{},"fileSize":"116964749","needPay":0,"name":"","fileHash":"E6E4927303FEB8368105A5A246446075","definition":"0","filebitrate":"89","audioFormat":"AAC","fileFormat":"HLS-FMP4","url":"/vod.do?pm=e97Cahg8WfUJBVRMm9Y0IH2S72LAAp5dPYGNGBAOFGKZPF6N2A7QynApEnidqDkb~C2ZTltynMN0636CCqH8sC8ZLMCvlXfsAnYp59qw1d8Wd3FMMccNaI~uGEnLcttIX8GxNoNIj4om7Z4P1i1r0sraMoaNhOAekR~~LrDytFdqQ7_eS_TkcT6RkqGWC8RhjBZgmY56ginimDdXCN9XMfUCiUph5GWZlZRjkTkrMYErqch9Yr8fRXWf1g0kcIG7gjYcUrP5Xme4cDE4fFcRw7EsbDpgC2bBtzQG1Nd~EZAU66T5c31nlzuk3Y96rZfhF~4JT4ehIZEDE9pcihguZAlkWQQ8TC~olXvwXcVTdazcAEuMJBu9ImaES4LzzvruKd1NQYOopbjvR_4ENruMb7LGK2NzUZ9EGYPTnVY98~2Dhm11lANsDXPf~vvgtcBXEbiS~M6brDJNKkrt&fid=9730E295608DBA271C6D4F2149408AC9&gsid=a69685f821c942cd8622ccb7fb566172"}],"mangZhenEntry":{"img":"https://vipcdn.mgtv.com/act_op/20230412/91fe51f6c61a48c7a9e3751be61a14ef.png","display":1,"url":"https://d.mgtv.com/zb-mJb"},"qualityEnhanceFilter":"1","videoDomains":["http://disp.titan.mgtv.com","http://disp1.titan.mgtv.com","http://123.59.23.220"],"fileTag":"1","videoImage":"https://1img.hitv.com/preview/sp_images/2023/10/17/202310172307225578272.jpg","time":7282,"reviewState":0,"user":{"tstatus":1},"config":{"title":{"displayable":0},"speed":[{"cornerLabelStyle":{},"needPay":0,"name":"0.5X","value":"0.5","tips":""},{"cornerLabelStyle":{},"needPay":0,"name":"正常","value":"1","tips":""},{"cornerLabelStyle":{},"needPay":0,"name":"1.25X","value":"1.25","tips":""},{"cornerLabelStyle":{},"needPay":0,"name":"1.5X","value":"1.5","tips":""},{"cornerLabelStyle":{},"needPay":0,"name":"2X","value":"2","tips":""},{"cornerLabelStyle":{},"needPay":0,"name":"3X","value":"3","tips":""}]}},"code":200,"msg":"","err_code":200,"err_msg":""}');
body = body.replace(/"tag\":\d+/g,'"tag":9000');
$done(body);
