/**
 * @fileoverview 塔读阅读VIP权限
 *
 * @supported FUCK-SUEP
 */

var body = $response.body;
var url = $request.url;
if (url.indexOf("getChapterTdz") !== -1) {
    obj = JSON.parse(body);
    obj.data.chapterInfo["isCleanAd"] = "1";
    obj.data.chapterInfo["isMember"] = 1;
    obj.data.chapterInfo["freeType"] = 1;
    obj.data.bookInfo["canRead"] = 1;
    $done(JSON.stringify(obj));
} else if (url.indexOf("userInfo") !== -1) {
    obj = JSON.parse(body);
    obj.data["isMember"] = 1;
    obj.data["nickName"] = "塔读阅读VIP用户";
    obj.data["freeMemberHours"] = 9999;
    obj.data["discount"] = 0;
    obj.data["isPurchased"] = 1;
    obj.data["userHadVoteCount"] = 999;
    obj.data["goldenTicketNum"] = 999;
    obj.data["remainPrestige"] = 999;
    obj.data["userLevel"] = "Lv.999";
    obj.data["userLevelImage"] = "";
    obj.data["myCommentsUrl"] = "";
    obj.data["userLevelUrl"] = "";
    obj.data["myCollect"] = "";
    obj.data["inviteFriendUrl"] = "";
    obj.data["userVoteUrl"] = "";
    obj.data["messageUrl"] = "";
    obj.data["memberOpenUrl"] = "";
    obj.data["memberCenterUrl"] = "";
    obj.data["kaquanUrl"] = "";
    obj.data["userPrestigeUrl"] = "";
    obj.data["accountUrl"] = "";
    obj.data["goldenTicketUrl"] = "";
    obj.data["emojiPrivilege"] = 1;
    obj.data["imagePrivilege"] = 1;
    obj.data["expiredDateStr"] = "塔读阅读VIP免广告破解成功~";
    $done(JSON.stringify(obj));
}

$done(body);
