/**
 * @fileoverview 塔读阅读VIP权限
 *
 * @supported FUCK-SUEP
 */


var body = $response.body;
var url = $request.url;
body.replace('"isMember":0','"isMember":1')
body.replace('"isMember":2','"isMember":1')


$done(body);
