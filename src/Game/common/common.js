/**
 * Created by Admin on 8/2/2016.
 */


var version_res = 1;
GameSlot = {
    KhoBau:"khobau"
}

GameSlot = {
    KhoBau: "khobau",
    NuDiepVien: "nudiepvien",
    Avenger: "sieuanhhung"
}

var sendSK = 300000;


var isWebMobile = false;
var HOST = "http://rum.club";
var BASE_URL = "http://apiportal.zumclub.org/api?";
var isHttps = false;
var API_PORTAL = "http://zum.club/bootstrap_client.html";
var HREF = window.location ? window.location.protocol : "http:";

var isHttps = false;
if(!cc.sys.isNative)
{
    if (CURRENT_MODE == MODE_DEPLOY.LIVE) {
        if (HREF == "http:") {
            HOST = "http://zum.club";
            BASE_URL = "http://apiportal.zumclub.org/api?";
        } else {
            isHttps = true;
            HOST = "https://zum.club";
            BASE_URL = "https://api.zum.club/api?";
        }
        API_PORTAL = "http://zum.club/bootstrap_client.html";
    }
    if (CURRENT_MODE == MODE_DEPLOY.LOCAL) {
        BASE_URL = "http://192.168.0.192:8081/api?";
        HOST = "http://192.168.0.168:81";
        HOST = "http://192.168.0.112";
        API_PORTAL = "http://zum.club/bootstrap_client.html";
    }

    if (CURRENT_MODE == MODE_DEPLOY.TEST) {

        if (HREF == "http:") {
            HOST = "http://35.201.171.109";
            BASE_URL = "http://35.201.171.109:8081/api?";
        } else {
            isHttps = true;
            HOST = "https://35.201.171.109";
            BASE_URL = "http://35.201.171.109:8081/api?";
        }
        API_PORTAL = "http://35.201.171.109/config_api.html";
    }
    if (CURRENT_MODE == MODE_DEPLOY.LOCAL) {
        BASE_URL = "http://192.168.0.112:8081/api?";
//        BASE_URL = "http://192.168.0.192:8081/api?";
    }
}



var res_login_scene = "res/LoginScene/";
var res_MenuSetting = "res/MenuSetting/";
var res_SignUp = "res/SignUp/";
var res_ListGame = "res/ListGame/";
var res_TableGui = "res/TableGui/";
var res_HoSo = "res/HoSo/";
var res_Avatar = "res/Avatar/";

var DON_VI_TIEN = "Zik";
var TEN_GAME = "ZIK";
var Type_Web = browserName();

var sendRequest = function (url, params, isPost, callback, errorcallback, callbackHead) {
    // cc.log(url);
    if (url == null || url == '')
        return;
    var xhr = cc.loader.getXMLHttpRequest();
    if (isPost) {
        xhr.open("POST", url);
    } else {
        xhr.open("GET", url);
    }
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;
            var responseHeader = xhr.getAllResponseHeaders();
            if (callback)
                callback(response);
            if (callbackHead)
                callbackHead(responseHeader);
        } else if (xhr.readyState == 4 && xhr.status != 200) {
            var response = xhr.responseText;
            if (errorcallback)
                errorcallback(response);
        }
    };

    if (params == null || params == "") {
        xhr.send();
    } else {
        xhr.send(params);
    }
    // xhr.open('HEAD', document.location, true);
    //xhr.send(null);
};
function updateMoney(moneyzo, moneyxu) {
    if(userInfo != null){
        if(moneyzo != null && moneyzo != undefined){
            if(hallscene != null)
                hallscene.lb_money_zo.setString(formatMoney(0,3,moneyzo));
        }

        if(moneyxu != null && moneyxu != undefined){
            if(hallscene != null)
                hallscene.lb_money_xu.setString(formatMoney(0,3,moneyxu));
        }
    }
}


function decode_base64(s) {
    var e = {}, i, k, v = [], r = '', w = String.fromCharCode;
    var n = [[65, 91], [97, 123], [48, 58], [43, 44], [47, 48]];

    for (z in n) {
        for (i = n[z][0]; i < n[z][1]; i++) {
            v.push(w(i));
        }
    }
    for (i = 0; i < 64; i++) {
        e[v[i]] = i;
    }

    for (i = 0; i < s.length; i += 72) {
        var b = 0, c, x, l = 0, o = s.substring(i, i + 72);
        for (x = 0; x < o.length; x++) {
            c = e[o.charAt(x)];
            b = (b << 6) + c;
            l += 6;
            while (l >= 8) {
                r += w((b >>> (l -= 8)) % 256);
            }
        }
    }
    return r;
}
function Jacob__Codec__Base64__decode(input) {
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = [],
        chr1, chr2, chr3,
        enc1, enc2, enc3, enc4,
        i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output.push(String.fromCharCode(chr1));

        if (enc3 != 64) {
            output.push(String.fromCharCode(chr2));
        }
        if (enc4 != 64) {
            output.push(String.fromCharCode(chr3));
        }
    }

    output = output.join('');

    return output;
}
//
//function b64DecodeUnicode(str) {
//    return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
//        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//    }).join(''));
//}
function formatMoney1(n, x, number) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    //if(isNumeric())
    return number.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&.');
}
function formatMoney(n, x1, num) {
    if (!isNumeric(num)) {
        return num;
    } else {
        if (num == 0) {
            return num;
        }
        var p = parseFloat(num).toFixed(n).split(".");
        //var p = parseFloat(num.split("."));
        var chars = p[0].split("").reverse();
        var newstr = '';
        var count = 0;
        for (x in chars) {
            count++;
            if (count % x1 == 1 && count != 1) {
                newstr = chars[x] + '.' + newstr;
            } else {
                newstr = chars[x] + newstr;
            }
        }
        return newstr;
    }


}

function formatMoneyTaiXiu(value){
    if(value < 1000) return value;
    if(value < 10000000) return formatMoney(0, 3, parseInt(value/1000)) + ' K';
    return formatMoney(0, 3, parseInt(value/1000000)) + ' M';
}
function isNumeric(value) {

    return /^\d+$/.test(value);
}
function replaceAll(find, replace, str) {
    while (str.indexOf(find) > -1) {
        str = str.replace(find, replace);
    }
    return str;
}
function formatMoneyStr(number) {
    var strMoney = "";
    var valueN = parseFloat(number);
    if (valueN >= 1000000000) {
        valueN = Math.round((valueN / 1000000000) * 1000) / 1000;
        strMoney = replaceAll(".", ",", valueN.toString()) + "B";
        return strMoney;
    }
    if (valueN >= 1000000) {
        valueN = Math.round((valueN / 1000000) * 1000) / 1000;
        strMoney = replaceAll(".", ",", valueN.toString()) + "M";
        return strMoney;
    }
    if (valueN >= 1000) {
        valueN = Math.round((valueN / 1000) * 1000) / 1000;
        strMoney = replaceAll(".", ",", valueN.toString()) + "K";
        return strMoney;
    } else {
        strMoney = "" + valueN;
        return strMoney;
    }
}
function formatMoneyK(number)
{
    var strMoney = "";
    var valueN = parseFloat(number);
    if (valueN >= 1000) {
        valueN = Math.round((valueN / 1000) * 1000) / 1000;
        var phanNguyen = valueN.toString().split(".")[0];
        phanNguyen = formatMoney(0,3,phanNguyen);
        strMoney = phanNguyen + "K";
        return strMoney;
    }
    else {
        strMoney = "" + valueN;
        return strMoney;
    }
}
effectRunMoney = function (view, fromMoney, toMoney, breakValueHu, isStopAction) {
    if (view) {
        if (isStopAction)
            view.stopAllActions();
        fromMoney = parseFloat(fromMoney) + parseFloat(breakValueHu);
        view.setString(formatMoney(0, 3, fromMoney));
        if (Math.abs(toMoney - fromMoney) <= Math.abs(breakValueHu) || breakValueHu == 0) {

            view.setString(formatMoney(0, 3, toMoney));

            fromMoney = toMoney;
        } else {
            view.runAction(cc.sequence(cc.delayTime(0.04), cc.callFunc(function () {
                effectRunMoney(view, fromMoney, toMoney, breakValueHu, false);
            })));

        }
    }

}
effectRunMoneyByTime = function (view, fromMoney, toMoney, time) {
    var stepTime = 40;
    var currentStep = 1;
    var startTime = new Date().getTime();
    var timeToNext = stepTime;
    var stepMoney = parseInt((toMoney - fromMoney) / (time * 1000 / 40));
    var action = cc.repeatForever(cc.sequence(cc.delayTime(timeToNext/1000), cc.callFunc(callbackStep)));

    view.runAction(action);

    function callbackStep() {
        var currentTime = new Date().getTime();
        if (currentTime > startTime + time * 1000) {
            view.stopAction(action);
            view.setString(formatMoney(0, 3, toMoney));
        } else {
            currentStep++;
            timeToNext = (startTime + currentStep * stepTime - currentTime) / 1000;
            timeToNext = timeToNext > 0 ? timeToNext : 0;
            fromMoney += stepMoney;
            view.setString(formatMoney(0, 3, fromMoney));
        }
    }

};
effectRunMoneyMenu = function (view, fromMoney, toMoney, breakValue, isStopAction) {
    if (toMoney == -1)
        return;
    var breakValuePot = breakValue;
    if (view) {
        view.setString(formatMoney(0, 3, fromMoney.toFixed(0)));
        if (isStopAction) {
            view.stopAllActions();
            var khoangCach = toMoney - fromMoney;
            if (khoangCach <= 1) {
                view.setString(formatMoney(0, 3, toMoney));
            }
            else {
                fromMoney = parseInt(fromMoney) + 1;
                breakValuePot = 4 / khoangCach;
                view.runAction(cc.sequence(cc.delayTime(breakValuePot), cc.callFunc(function () {
                    effectRunMoneyMenu(view, fromMoney, toMoney, breakValuePot, false);
                })));

            }
        } else {
            fromMoney = parseInt(fromMoney) + 1;
            if (fromMoney >= toMoney) {
                view.setString(formatMoney(0, 3, toMoney));
            } else {
                view.runAction(cc.sequence(cc.delayTime(breakValuePot), cc.callFunc(function () {
                    effectRunMoneyMenu(view, fromMoney, toMoney, breakValuePot, false);
                })));
            }

        }

    }
}
effectRunMoneyPlus = function (view, fromMoney, toMoney, breakValueHu, isStopAction) {
    if (view) {
        if (isStopAction)
            view.stopAllActions();
        fromMoney = parseFloat(fromMoney) + parseFloat(breakValueHu);
        view.setString("+ " + formatMoney(0, 3, fromMoney));
        if (Math.abs(toMoney - fromMoney) <= Math.abs(breakValueHu) || breakValueHu == 0) {

            view.setString("+ " + formatMoney(0, 3, toMoney));

            fromMoney = toMoney;
        } else {
            view.runAction(cc.sequence(cc.delayTime(0.04), cc.callFunc(function () {
                effectRunMoneyPlus(view, fromMoney, toMoney, breakValueHu, false);
            })));

        }
    }

}

function checkAndChangePosition(view) {
    var sizeMain = GameScene.getMainContentSize();
    var winSize = cc.view.getFrameSize();
    var positionMain = MainContent.getPosition();
    var positionView = view.getPosition();
    var checkLeft = (winSize.width / 2 - sizeMain.width / 2) + positionView.x;// - (view.getContentSize().width/2 - (anchorPositionView.x*view.getContentSize().width));
    var checkR = winSize.width - (positionView.x + (winSize.width / 2 - sizeMain.width / 2));
    var checkB = ((winSize.height + winSize.height * 180 / 1260) / 2 - sizeMain.height / 2) + positionView.y;//
    var checkT = (winSize.height - sizeMain.height) / 2 + positionView.y;
    if (checkLeft >= 0) {

    } else {
        view.setPosition(positionView.x - checkLeft, positionView.y);
    }
    if (checkR >= 0) {

    } else {
        view.setPosition(positionView.x + checkR, positionView.y);
    }
    if (checkB < 0) {
        view.setPosition(positionView.x, positionView.y - checkB);
    }
}
function winSizeWeb() {
    for (var i = 0; i < arrayListtennerWinSize.length; i++) {
        checkAndChangePosition(arrayListtennerWinSize[i]);
    }
    if (GameScene != null) {
        var sizeM = GameScene.getMainContentSize();
    }

}
function addWinSizeListener(view) {
    var temp = false;
    for (var i = 0; i < arrayListtennerWinSize.length; i++) {
        if (arrayListtennerWinSize[i] == view) {
            temp = true;
        }
    }
    if (temp == false) {
        arrayListtennerWinSize.push(view);
    }
}

function loadResoureGame(resources, gui, callback) {


    if (!cc.sys.isNative && gui == null) {
        var loading = sceneMgr.addLoading("Vui lòng chờ !!!");
        cc.loader.load(resources,
            function (result, count, loadedCount) {
                var percent = (loadedCount / count * 100) | 0;
                percent = Math.min(percent, 100);
                // cc.log("" + percent);
                loading._label.setString("Đang tải :" + percent + "%");
            },
            function () {
                loading._label.setString("Tải thành công!");
                sceneMgr.clearLoading();
                if (callback)
                    callback();
            }
        );
    } else {
        if (callback)
            callback();
    }
}
getRandomInt = function (min, max) {
    var vRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return vRandom;
}

getRandomFloat = function (min, max, number) {
    var random = (Math.random() * (max - min) + min).toFixed(number)
    return random;
}
formartDateTime = function (date) {
    var dates = new Date(date);
    var ngay = dates.getDate();
    var month = (parseInt(dates.getMonth()) + 1);
    var year = dates.getFullYear();
    var hour = dates.getHours();
    var minus = dates.getMinutes();
    var second = dates.getSeconds();

    if (parseInt(hour) < 10)
        hour = "0" + hour;
    if (parseInt(minus) < 10)
        minus = "0" + minus;
    if (parseInt(second) < 10)
        second = "0" + second;

    var str = hour + ":" + minus + ":" + second + " Ngày " + ngay + " tháng " + month + " năm " + year;

    return str;
}
formartDateTimeCompact = function (date) {
    var dates = new Date(date);
    var ngay = dates.getDate();
    var month = (parseInt(dates.getMonth()) + 1);
    var year = dates.getFullYear();
    var hour = dates.getHours();
    var minus = dates.getMinutes();
    var second = dates.getSeconds();

    if (parseInt(hour) < 10)
        hour = "0" + hour;
    if (parseInt(minus) < 10)
        minus = "0" + minus;
    if (parseInt(second) < 10)
        second = "0" + second;

    var str = hour + ":" + minus + ":" + second + " " + ngay + "/" + month + "/" + year;

    return str;
}
// cc.view.setResizeCallback(function() {
//     //cc.log("cc.game.onStart" + cc.view.getFrameSize().width + " " + cc.view.getFrameSize().height);
//    // cc.log("Resize");
//    //  if(GameScene!=null)
//    //  {
//    //      //winSizeWeb();
//    //  }
//
// });
//

function browserName(){
    if(cc.sys.isNative)
        return;
    var Browser = navigator.userAgent;
    if (Browser.indexOf('MSIE') >= 0){
        Browser = 'MSIE';
    }
    else if (Browser.indexOf('Firefox') >= 0){
        Browser = 'Firefox';
    }
    else if (Browser.indexOf('Chrome') >= 0){
        Browser = 'Chrome';
    }
    else if (Browser.indexOf('Safari') >= 0){
        Browser = 'Safari';
    }
    else if (Browser.indexOf('Opera') >= 0){
        Browser = 'Opera';
    }
    else{
        Browser = 'UNKNOWN';
    }
    cc.log("Browser + " + Browser);
    return Browser;
}

function checkUpdateManifest(_am, sender) {
    var sender = sender;
    if (!_am.getLocalManifest().isLoaded()) {
        sender.getChildByTag(999).setVisible(false);
        _am.release();
    } else {

        var listener = new jsb.EventListenerAssetsManager(_am, function (event) {
            cc.log("event.getEventCode() Check Update " + event.getEventCode());
            switch (event.getEventCode()) {
                case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                    if (sender)
                        sender.getChildByTag(999).setVisible(true);
                    //else

                    break;
                default :
                    //if(sender)
                    //sender.getChildByTag(999).setVisible(false);
                    //else

                    break;
            }
        });
        cc.eventManager.addListener(listener, sender);
        _am.checkUpdate();
    }

}

/*function updateManifest(_am, uiTimer, callBack, callBackErro, sender) {
 if(!cc.sys.isNative)
 {
 return;
 }
 uiTimer.setPercentage(0);


 if (!_am.getLocalManifest().isLoaded())
 {
 cc.log("Fail to update assets, step skipped.");
 callBackErro("Fail to update assets, step skipped.");
 //_am.release();
 }
 else
 {
 var __failCount = 0;
 var fileCount = 0;
 var listener = new jsb.EventListenerAssetsManager(_am, function(event) {
 cc.log("event.getEventCode() Update " + event.getEventCode());
 switch (event.getEventCode())
 {
 case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
 cc.log("No local manifest file found, skip assets update.");
 callBackErro("No local manifest file found, skip assets update.");
 //cc.eventManager.removeListener(listener);
 //_am.release();
 break;
 case jsb.EventAssetsManager.UPDATE_PROGRESSION:


 cc.log("getPercent " + event.getPercent());
 cc.log("getPercentByFile " + event.getPercentByFile());
 uiTimer.setPercentage(event.getPercentByFile());

 var msg = event.getMessage();
 if (msg) {
 cc.log(msg);
 }

 fileCount ++;
 cc.log("fileCount " + fileCount);
 break;
 case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
 case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
 cc.log("Fail to download manifest file, update skipped.");
 callBackErro("Fail to download manifest file, update skipped.");
 //cc.eventManager.removeListener(listener);
 //_am.release();
 break;
 case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
 case jsb.EventAssetsManager.UPDATE_FINISHED:
 cc.log("Update finished. " + event.getMessage());

 callBack();
 //cc.eventManager.removeListener(listener);
 //_am.release();
 break;
 case jsb.EventAssetsManager.UPDATE_FAILED:
 cc.log("Update failed. " + event.getMessage());

 __failCount ++;
 if (__failCount < 5)
 {
 _am.downloadFailedAssets();
 }
 else
 {
 cc.log("Reach maximum fail count, exit update process");
 __failCount = 0;
 //scene = new AssetsManagerTestScene(backgroundPaths[currentScene]);
 //cc.director.runScene(scene);
 callBackErro("Reach maximum fail count, exit update process");
 //cc.eventManager.removeListener(listener);
 //_am.release();
 }
 break;
 case jsb.EventAssetsManager.ERROR_UPDATING:
 cc.log("Asset update error: " + event.getAssetId() + ", " + event.getMessage());
 break;
 case jsb.EventAssetsManager.ERROR_DECOMPRESS:
 cc.log(event.getMessage());
 break;
 default:
 break;
 }
 });

 cc.eventManager.addEventListenerWithFixedPriority(listener, 1);
 _am.update();
 }
 }*/

function checkLoadtextture(img){

    var txtTextture = ccui.Widget.LOCAL_TEXTURE;
    if (cc.spriteFrameCache.getSpriteFrame(img))
        txtTextture = ccui.Widget.PLIST_TEXTURE;
    return txtTextture;
}

function loadPlistGameBai() {
    cc.spriteFrameCache.addSpriteFrames("res/CardGame/CommonResource/BanChoi/PlistBanChoi.plist");
    cc.spriteFrameCache.addSpriteFrames("res/common/PlistCommon.plist");
    // cc.spriteFrameCache.addSpriteFrames("res/CardGame/LaBai/PlistLaBai.plist");
    //cc.spriteFrameCache.addSpriteFrames("res/CardGame/BoBaiPoker/BoBaiPokerPlist.plist");
}
function updateManifest(_am, callBackUpdate, key) {
    if (!cc.sys.isNative) {
        return;
    }
    if (!_am.getLocalManifest().isLoaded()) {
        cc.log("Fail to update assets, step skipped.");
        callBackUpdate(true, 0, false, "Fail to update assets, step skipped.", key);

    }
    else {
        var __failCount = 0;
        var fileCount = 0;
        var listener = new jsb.EventListenerAssetsManager(_am, function (event) {
            cc.log("event.getEventCode() Update " + event.getEventCode());
            switch (event.getEventCode()) {
                case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    cc.log("No local manifest file found, skip assets update.");
                    callBackUpdate(true, 0, false, "No local manifest file found, skip assets update.", key);
                    cc.eventManager.removeListener(listener);
                    //_am.release();
                    break;
                case jsb.EventAssetsManager.UPDATE_PROGRESSION:


                    cc.log("getPercent " + event.getPercent());
                    cc.log("getPercentByFile " + event.getPercentByFile());
                    //uiTimer.setPercentage(event.getPercentByFile());

                    var msg = event.getMessage();
                    if (msg) {
                        cc.log(msg);
                    }

                    fileCount++;
                    cc.log("fileCount " + fileCount);
                    callBackUpdate(false, event.getPercentByFile(), false, "", key);
                    break;
                case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    cc.log("Fail to download manifest file, update skipped.");
                    callBackUpdate(true, 0, false, "Fail to download manifest file, update skipped.", key);
                    cc.eventManager.removeListener(listener);
                    //_am.release();
                    break;
                case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                case jsb.EventAssetsManager.UPDATE_FINISHED:
                    cc.log("Update finished. " + event.getMessage());

                    callBackUpdate(false, 100, true, "", key);
                    cc.eventManager.removeListener(listener);
                    _am.release();
                    break;
                case jsb.EventAssetsManager.UPDATE_FAILED:
                    cc.log("Update failed. " + event.getMessage());

                    __failCount++;
                    if (__failCount < 5) {
                        _am.downloadFailedAssets();
                    }
                    else {
                        cc.log("Reach maximum fail count, exit update process");
                        __failCount = 0;
                        //scene = new AssetsManagerTestScene(backgroundPaths[currentScene]);
                        //cc.director.runScene(scene);
                        callBackUpdate(true, 0, false, "Reach maximum fail count, exit update process", key);
                        cc.eventManager.removeListener(listener);
                        //_am.release();
                    }
                    break;
                case jsb.EventAssetsManager.ERROR_UPDATING:
                    cc.log("Asset update error: " + event.getAssetId() + ", " + event.getMessage());
                    break;
                case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                    cc.log(event.getMessage());
                    break;
                default:
                    break;
            }
        });

        cc.eventManager.addEventListenerWithFixedPriority(listener, 1);
        _am.update();
    }

}


var fontArial = {fontName: "arial", src: [{src: "res/Fonts/arial.ttf", type: "truetype"}]};
var fontArialB = {fontName: "arialbd", src: [{src: "res/Fonts/arialbd.ttf", type: "truetype"}]};
var fontRobotoMedium = {fontName: "Roboto-Medium", src: [{src: "res/Fonts/Roboto-Medium.ttf", type: "truetype"}]};
var fontRobotoRegular = {fontName: "Roboto-Regular", src: [{src: "res/Fonts/Roboto-Regular.ttf", type: "truetype"}]};
var RobotoRegular = {fontName: "Roboto-Regular", src: [{src: "res/Fonts/Roboto-Regular.ttf", type: "truetype"}]};
var fontRobotoBlack = {fontName: "Roboto-Black", src: [{src: "res/Fonts/Roboto-Black.ttf", type: "truetype"}]};
var fontRobotoBold = {fontName: "Roboto-Bold", src: [{src: "res/Fonts/Roboto-Bold.ttf", type: "truetype"}]};
var UTMBebas = {fontName: "UTM-Bebas", src: [{src: "res/Fonts/UTM-Bebas.ttf", type: "truetype"}]};
var fontTahoma = {fontName: "Tahoma", src: [{src: "res/Fonts/tahoma.ttf", type: "truetype"}]};
var fontTahomaB = {fontName: "Tahomabd", src: [{src: "res/Fonts/tahomabd.ttf", type: "truetype"}]};
var fontUTMAlterGothic  = {fontName: "UTM-Alter-Gothic", src: [{src: "res/Fonts/UTM-Alter-Gothic.ttf", type: "truetype"}]};

var fontENGR  = {fontName: "ENGR", src: [{src: "res/Fonts/ENGR.ttf", type: "truetype"}]};

var UTMMobifoneKT = {fontName: "UTM-Mobifone-KT", src: [{src: "res/Fonts/UTM-Mobifone-KT.ttf", type: "truetype"}]};
var UTMBitsumishi = {fontName: "UTM-Bitsumishi-Pro", src: [{src: "res/Fonts/UTM-Bitsumishi-Pro.ttf", type: "truetype"}]};
var SeagullBold = {fontName: "UTM-SeagullBold", src: [{src: "res/Fonts/UTM-SeagullBold.ttf", type: "truetype"}]};
var UTMAlexander = {fontName: "UTM-Alexander", src: [{src: "res/Fonts/UTM-Alexander.ttf", type: "truetype"}]};
//var Pony = {fontName: "Pony_0", src: [{src: "res/Fonts/Pony_0.ttf", type: "truetype"}]};
var Pony = {fontName: "UTM-Cookies", src: [{src: "res/Fonts/UTM-Cookies.ttf", type: "truetype"}]};

var TXFont = "res/Font/TXFont/Taixiu_font_export.fnt";
var TXFontX2 = "res/Font/TXFont/Taixiu_font_export2x.fnt";
var TX_silverFont = "res/Font/TXFont/TX_silverFont_export.fnt";
var TX_silverFontX2 = "res/Font/TXFont/TX_silverFont_export2x.fnt";

var fontUTMAurora = {fontName: "UTM-Aurora", src: [{src: "res/Fonts/UTM-Aurora.ttf", type: "truetype"}]};


var notification_web = function () {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('Notification title', {
            icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
            body: "Hey there! You've been notified!",
        });

        notification.onclick = function () {
            window.open("http://stackoverflow.com/a/13328397/1269037");
        };

    }

}

