/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://appid.vipyyds.xyz/YanZhen/YanZhen.php`;
const method = `POST`;
const headers = {
'Content-Type' : `application/json;UTF-8`,
'Connection' : `close`,
'Host' : `appid.vipyyds.xyz`,
'User-Agent' : `cpp-httplib/0.12.2`,
'Accept' : `*/*`
};
const body = `RiXmbvLRKvNeI+bRGzmdngkZ/gZw6K+GQMHCmRvVqUkvOqw7ly3u3RsWQkbnzzwNWbEG3wP65nhGQhwsPni4J1IfXdzbt9GThGxqh4urEx82GxCRv+uAkj8Li548dkns09pk1f4KVztHvZbsZuJ6v6Wk9CKKoEtg/oOlQ+I5+cJE29KEjXvYYNBNznLMRtnakVJi6odteKjm6RyeZfbfzkNT9AWIOX2n2qPulzntk2wy9MyY9zabRoGNGMMLkZb+52Vbrc2disJlHYVFzHXzSJmSkzgZuFaFpDrw9+8RtlJZemWPAOm/7rEGfEcmBkwIqzDY31CRQHa4oUFaAONP22smRAbGsiMNnbHsP48tFKKFB6cSzCRBRxsJftfGIefaTZDgKo47g+12NUqBSqTiSASXcPk67SZV`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
