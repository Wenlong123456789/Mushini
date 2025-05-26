/************************************
* 名称：波点音乐VIP终极修正版
* 作者：Wenlong123456789
* 更新时间：2024-03-15
* 支持：Quantumult X v1.4.5+
************************************/

// [核心重写规则]
const rule = {
  url: /^https?:\/\/(bd-api\.kuwo\.cn|49\.7\.250\.27)\/api\/(ucenter\/users\/pub\/\d+|service\/(advert\/config|global\/config\/vipEnter))/,
  handler: response => {
    let body = response.body;
    
    // ====== 调试模式 ======
    const debug = false; // 设为true查看日志
    if (debug) console.log(`原始响应：${body}`);

    // ====== VIP核心字段 ======
    const replacements = [
      { pattern: /"isVip":\d/, replace: '"isVip":1' },
      { pattern: /"vipType":\d/, replace: '"vipType":1' },
      { pattern: /"isVipBoolean":\w+/, replace: '"isVipBoolean":true' },
      
      // ====== 支付状态 ======
      { pattern: /"payVipType":\d/, replace: '"payVipType":2' },
      { pattern: /"isPayVipBoolean":\w+/, replace: '"isPayVipBoolean":true' },
      { pattern: /"isBigVipBoolean":\w+/, replace: '"isBigVipBoolean":true' },
      
      // ====== 有效期设置 ======
      { pattern: /"expireDate":\d+/g, replace: '"expireDate":1893456000000' },
      { pattern: /"bigExpireDate":\d+/g, replace: '"bigExpireDate":1893456000000' },
      { pattern: /"payExpireDate":\d+/g, replace: '"payExpireDate":1893456000000' },
      
      // ====== 界面优化 ======
      { pattern: /"fristVipListBtn":\d+/, replace: '"fristVipListBtn":1' },
      { pattern: /"fristVipPlayBtn":\d+/, replace: '"fristVipPlayBtn":1' },
      { pattern: /"ipCity":"[^"]+"/, replace: '"ipCity":"🌌宇宙中心"' },
      
      // ====== 特殊字段 ======
      { pattern: /"nickname":"[^"]+"/, replace: '"nickname":"🦋魔法用户"' },
      { pattern: /"redFlower":\d+/, replace: '"redFlower":999999' }
    ];

    replacements.forEach(({ pattern, replace }) => {
      body = body.replace(pattern, replace);
    });

    if (debug) console.log(`修改后：${body}`);
    return { body };
  }
};

// [模块导出]
const config = {
  rewrite: [rule],
  mitm: {
    hostnames: ['bd-api.kuwo.cn', '49.7.250.27']
  }
};

typeof $done === 'function' ? $done(config) : config;
