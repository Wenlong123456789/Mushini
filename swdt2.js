var body = $response.body;
body = body.replace(/"vipPeriod":\d+/g, '"vipPeriod":3767315344');
body = body.replace(/"purchasedDate":\d+/g, '"purchasedDate":1779164945');
body = body.replace(/"paid":\w+/g, '"paid":true');
$done({body});
