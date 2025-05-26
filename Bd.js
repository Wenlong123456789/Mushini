// 波点音乐 Quantumult X 解锁配置 (修正版)
// 更新时间：2024-01-20
// GitHub：https://github.com/Wenlong123456789/Mushini

[rewrite_local]
# ======== 用户核心信息 ========
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/\d+ url response-body "isVip":\d,? response-body "isVip":1,
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/\d+ url response-body "vipType":\d,? response-body "vipType":1,
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/\d+ url response-body "isVipBoolean":\w+ response-body "isVipBoolean":true

# ======== 全类型VIP解锁 ========
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/\d+ url response-body "payVipType":\d response-body "payVipType":2
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/\d+ url response-body "isPayVipBoolean":\w+ response-body "isPayVipBoolean":true
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/\d+ url response-body "isBigVipBoolean":\w+ response-body "isBigVipBoolean":true

# ======== 永久有效期 ========
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/\d+ url response-body "expireDate":\d+ response-body "expireDate":1893456000000
^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/ucenter\/users\/pub\/\d+ url response-body "bigExpireDate":\d+ response-body "bigExpireDate":1893456000000

# ======== 界面优化 ========
^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/advert\/config url response-body "fristVipListBtn":\d+ response-body "fristVipListBtn":1
^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/global\/config\/vipEnter url response-body "ipCity":"[^"]+" response-body "ipCity":"🪐银河系中心"

[mitm]
hostname = bd-api.kuwo.cn, 49.7.250.27
