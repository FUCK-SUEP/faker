/**
 * @fileoverview 塔读阅读VIP权限
 *
 * @supported FUCK-SUEP
 */


var body = $response.body;
var url = $request.url;
let obj = JSON.parse(body);
obj.data.isMember = 1;


$done(JSON.stringify(obj));
