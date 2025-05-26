// 波点音乐 Quantumult X 解锁配置
// 更新时间：2023-12-10
// 支持版本：v3.0.0+
// 使用说明：复制本地址，在QX重写配置中远程引用

[rewrite_local]
# 用户信息修改
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/35772808 url response-body (\s*)"isVip":\d response-body $1"isVip":1
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/35772808 url response-body (\s*)"vipType":\d response-body $1"vipType":1
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/35772808 url response-body (\s*)"isVipBoolean":\w+ response-body $1"isVipBoolean":true
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/35772808 url response-body (\s*)"payVipType":\d response-body $1"payVipType":2
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/35772808 url response-body (\s*)"isPayVipBoolean":\w+ response-body $1"isPayVipBoolean":true

# 有效期修改 (10079207147000 = 2286年)
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/35772808 url response-body (\s*)"expireDate":\d+ response-body $1"expireDate":10079207147000
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/35772808 url response-body (\s*)"bigExpireDate":\d+ response-body $1"bigExpireDate":10079207147000
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/35772808 url response-body (\s*)"payExpireDate":\d+ response-body $1"payExpireDate":10079207147000

# 界面功能解锁
^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/advert\/config url response-body (\s*)"fristVipListBtn":\d+ response-body $1"fristVipListBtn":1
^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/advert\/config url response-body (\s*)"fristVipPlayBtn":\d+ response-body $1"fristVipPlayBtn":1
^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/global\/config\/vipEnter url response-body (\s*)"ipCity":"\w+" response-body $1"ipCity":"火星"

# 特殊字段修改
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/35772808 url response-body (\s*)"nickname":".*?" response-body $1"nickname":"🦋"
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/35772808 url response-body (\s*)"redFlower":\d response-body $1"redFlower":99999

[mitm]
hostname = bd-api.kuwo.cn, 49.7.250.27
