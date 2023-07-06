{
  "rules" : [
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "\"timeExpire\":\"2289-07-06 17:30:02\"",
      "matchValue" : "\"timeExpire\":\"\"",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "\"timeStart\":\"2023-07-06 17:30:02\"",
      "matchValue" : "\"timeStart\":\"\"",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "\"isR\":true",
      "matchValue" : "\"isR\":\\w+",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "\"isSubscribe\":true",
      "matchValue" : "\"isSubscribe\":\\w+",
      "destiontion" : "response",
      "isRegex" : true
    }
  ],
  "enabled" : true,
  "name" : "音频剪辑破解",
  "description" : "",
  "locations" : [
    {
      "method" : "",
      "scheme" : "",
      "enabled" : true,
      "port" : 0,
      "query" : "",
      "host" : "pay.camoryapps.com",
      "path" : "\/appPay\/api\/user\/info\/tokenLogin"
    }
  ]
}
