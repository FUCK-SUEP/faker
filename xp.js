/**
 * @fileoverview 小鹏
 *
 * @supported FUCK-SUEP
 */

var body = $response.body;
var url = $request.url;
if (url.indexOf("charge/private-pile/query") !== -1) {
    obj = JSON.parse(body);
    obj.data.piles[0].active4g = 1;
    obj.data.piles[0].netWorkSign = 1;;
    obj.data.piles[0].versionType = 1;
    $done(JSON.stringify(obj));
}

$done(body);
