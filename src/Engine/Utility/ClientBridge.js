/**
 * Created by Admin on 4/12/2017.
 */

var clientBridge = function () {
}

clientBridge.VIETNAM_CODE = 452;
clientBridge.VIETTEL = "04";
clientBridge.MOBIFONE = "01";
clientBridge.VINAPHONE = "02";
clientBridge.VIETNAMMOBLE = "05";
clientBridge.BEELINE = "07";
clientBridge.countryCode = function(){
    var ret = "";

    if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative)
        ret = jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%PZ@DC"), toName("mo~Ied~xsIeno"), toName("\"#F`k|k%fkdm%Y~xcdm1"));
    if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative)
        ret = jsb.reflection.callStaticMethod(toName("Eh`IHxcnmfo"), toName("mo~\\oxycedY~xcdm"));
    return ret;
}

clientBridge.networkCode = function(){
    var ret = "";

    if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative)
        ret = jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%PZ@DC"), toName("mo~Do~}exaIeno"), toName("\"#F`k|k%fkdm%Y~xcdm1"));
    if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative)
        ret = jsb.reflection.callStaticMethod(toName("Eh`IHxcnmfo"), toName("mo~Do~}exaIeno"));
    return ret;
}

clientBridge.versionCode = function () {
    var ret = "1";
    if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative)
        ret = jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%PZ@DC"), "getVersionCode", toName("\"#F`k|k%fkdm%Y~xcdm1"));
    if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative)
        ret = jsb.reflection.callStaticMethod(toName("Eh`IHxcnmfo"), toName("mo~Kzz\\oxyced"));
    return ret;
}

clientBridge.openWebView = function (url, https) {
    cc.log("clientBridge.openWebView " + url);
    if (!https) {
        url = url.replace("https", "http");
    }

    cc.log(url);
    if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative)
        jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%PZ@DC"), toName("ezod_XF"), toName("\"F`k|k%fkdm%Y~xcdm1#\\"), url);
    if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative)
    {
        jsb.reflection.callStaticMethod(toName("Eh`IHxcnmfo"), toName("ezod_XF0"), url);
    }

    if (!cc.sys.isNative) {
        window.open(url, "_blank");
    }
}

clientBridge.sendSMS = function (phone, content) {
    cc.log("clientBridge.sendSMS : " + phone + "/" + content);

    if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
        jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%PZ@DC"), toName("yodnGoyykmo"), toName("\"F`k|k%fkdm%Y~xcdm1F`k|k%fkdm%Y~xcdm1#\\"), phone, content);
    }
    else if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
        jsb.reflection.callStaticMethod(toName("Eh`IHxcnmfo"), toName("yodnGoyykmo0goyykmo0"), phone + "",content + "");
    }
}
clientBridge.GetDeviceInfo = function()
{
    var ret = "";
    if(cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative){
        ret = jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%PZ@DC"), "GetDeviceInfo", toName("\"#F`k|k%fkdm%Y~xcdm1"));
    }
    if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative)
        ret = jsb.reflection.callStaticMethod(toName("Eh`IHxcnmfo"), toName("mo~No|cioCdle"));
    return ret;
}
clientBridge.GetDeviceID = function()
{
    var ret = "";
    if(cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative){
        ret = jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%PZ@DC"), "GetDeviceID", toName("\"#F`k|k%fkdm%Y~xcdm1"));
    }
    if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative)
        ret = jsb.reflection.callStaticMethod(toName("Eh`IHxcnmfo"), toName("mo~CGOC"));
    return ret;
}
clientBridge.GetVersionOS = function()
{
    var ret = "";
    if(cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative){
        ret = jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%PZ@DC"), "GetVersionOS", toName("\"#F`k|k%fkdm%Y~xcdm1"));
    }
    if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative)
        ret = jsb.reflection.callStaticMethod(toName("Eh`IHxcnmfo"), toName("mo~Ey\\oxyced"));
    return ret;
}
clientBridge.GetDeviceModel = function()
{
    var ret = "";
    if(cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative){
        ret = jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%PZ@DC"), "GetDeviceModel", toName("\"#F`k|k%fkdm%Y~xcdm1"));
    }
    if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative)
        ret = jsb.reflection.callStaticMethod(toName("Eh`IHxcnmfo"), toName("mo~No|cioGenof"));
    return ret;
}
/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/**
 * Created by Admin on 12/10/2016.
 */
var IAPManager = cc.Class.extend({
    ctor: function () {

        this._target = null
        this._selector = null
    },

    setTarget: function (target, selector) {
        this._target = target;
        this._selector = selector;
    },

    // khi connect server thi goi hen
    checkItemWhenMinigameConnected: function()
    {
        if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            engine.HandlerManager.getInstance().addHandler("iap", this.onPurchaseHandle.bind(this));
            jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%\\cdzfksZxibkyo"), toName("iboiaC~og"), "()V");
        }
    },
    // khi clcik button thi goi
    purchase: function(sku,userID)
    {
        if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            engine.HandlerManager.getInstance().addHandler("iap", this.onPurchaseHandle.bind(this));
            jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%\\cdzfksZxibkyo"), toName("zxibkyo\\cd"), toName("\"F`k|k%fkdm%Y~xcdm1F`k|k%fkdm%Y~xcdm1#\\"), sku+"",userID+"");
        }
        else if(cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative){
            engine.HandlerManager.getInstance().addHandler("iap", this.onPurchaseHandle.bind(this));
            jsb.reflection.callStaticMethod(toName("Eh`IHxcnmfo"), toName("zxibkyo0Nk~k0"), sku + "",userID + "");
        }
    },
    // goi khi muon close item
    closeItem: function(sku)
    {
        if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            engine.HandlerManager.getInstance().addHandler(toName("ifeyoC~og"), this.onCloseItemCallback.bind(this));
            jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%\\cdzfksZxibkyo"), toName("ifeyoC~og"), toName("\"F`k|k%fkdm%Y~xcdm1#\\"), sku+"");
        }
    },
    onCloseItemCallback: function(errorCode,message)
    {

    },

    // dc goi khi thuc hien giao dich voi google
    onPurchaseGG: function(errorCode,signedData,signature,purchaseData)
    {
        if (this._selector && this._target)
            this._selector.call(this._target,errorCode, signedData,signature,purchaseData);
    },


    // call back from handler manager , parse to get signedData,signature,purchaseData
    onPurchaseHandle: function(jdata)
    {
        var obj = JSON.parse(jdata);
        this.onPurchaseGG(obj["error"],obj["signedData"],obj["signature"],obj["purchaseData"]);
    }

})
var toName = function(str) {
    var res = "";
    for (var i = 0; i < str.length; i++) {
        var s = str.charCodeAt(i) ^ 10;

        res += String.fromCharCode(s);
    }
    return res;
}
IAPManager.SKU_1 = "zumclub_goi1";
IAPManager.SKU_2 = "zumclub_goi1";
IAPManager.SKU_3 = "zumclub_goi1";
IAPManager.SKU_4 = "zumclub_goi1";
IAPManager.SKU_5 = "zumclub_goi1";
IAPManager.SKU_6 = "zumclub_goi1";
IAPManager.SKU_7 = "zumclub_goi1";
IAPManager.SKU_8 = "zumclub_goi1";

// Billing response codes
IAPManager.BILLING_RESPONSE_RESULT_OK = 0;

// IAB Helper error codes
IAPManager.IABHELPER_ERROR_BASE = -1000;
IAPManager.IABHELPER_REMOTE_EXCEPTION = -1001;
IAPManager.IABHELPER_BAD_RESPONSE = -1002;
IAPManager.IABHELPER_VERIFICATION_FAILED = -1003;
IAPManager.IABHELPER_SEND_INTENT_FAILED = -1004;
IAPManager.IABHELPER_USER_CANCELLED = -1005;
IAPManager.IABHELPER_UNKNOWN_PURCHASE_RESPONSE = -1006;
IAPManager.IABHELPER_MISSING_TOKEN = -1007;
IAPManager.IABHELPER_UNKNOWN_ERROR = -1008;
IAPManager.IABHELPER_SUBSCRIPTIONS_NOT_AVAILABLE = -1009;
IAPManager.IABHELPER_INVALID_CONSUMPTION = -1010;


IAPManager.firstinit = true;
IAPManager.sharedInstance = null;

IAPManager.getInstance = function () {
    if (IAPManager.firstinit) {
        IAPManager.sharedInstance = new IAPManager();
        IAPManager.firstinit = false;
    }
    return IAPManager.sharedInstance;
}

var iapManager = IAPManager.getInstance();



/*--------------------------------------------------------------------------------------------------------------------------------------------*/

var g_localization = null;

var LocalizedString = cc.Class.extend({

    ctor : function () {

    },

    loadLocalized : function () {
        this._localizedStrings = {};
        var contents = "";

        if(cc.sys.isNative)
        {
            cc.loader.loadTxt("res/Localized_vi.txt", function (error, txt) {
                if (error != null) {
                    cc.log("Load localization file error!");
                }
                else {
                    contents = txt;
                }
            });
        }
        else
        {
            contents = cc.loader._loadTxtSync("res/Localized_vi.txt");
        }


        var lines = contents.split('\n');
        for(var i in lines)
        {
            var line = lines[i];
            if (line.indexOf("/*",0) == -1 &&
                line.indexOf("//",0) == -1 &&
                line.indexOf("*/",0) == -1) //filter the valid string of one line
            {
                var validPos = line.indexOf('=', 0);
                if (validPos != -1)
                {
                    var keyStr = line.substring(0, validPos - 1);
                    // get valid string
                    var subStr = line.substring(validPos + 1, line.length - 1);

                    //trim space
                    keyStr = keyStr.slice(this.findFirstNotOf(keyStr," \t"));
                    keyStr = keyStr.slice(0,this.findLastNotOf(keyStr," \t") +1);

                    subStr = subStr.slice(this.findFirstNotOf(subStr," \t"));
                    subStr = subStr.slice(0,this.findLastNotOf(subStr," \t") +1);

                    //trim \"
                    keyStr = keyStr.slice(this.findFirstNotOf(keyStr,"\""));
                    keyStr = keyStr.slice(0,this.findLastNotOf(keyStr,"\"") +1);
                    var  findPosition = subStr.indexOf('\"', 0);
                    subStr = subStr.slice(this.findFirstNotOf(subStr,"\""));

                    //trim ; character and last \" character
                    subStr = subStr.slice(0,this.findLastNotOf(subStr,";") +1);
                    subStr = subStr.slice(0,this.findLastNotOf(subStr,"\"") +1);

                    //replace line feed with \n
                    subStr.replace(/\\n/g,"\n");

                    this._localizedStrings[keyStr] = subStr;
                }
            }
        }
    },

    findLastNotOf:function(strSource,text) {
        var sourceLen = strSource.length;
        var strLen = text.length;
        if (strLen >sourceLen)
        {
            return -1;
        }
        var i = sourceLen - 1;
        while (i >= 0)
        {
            var result = false;
            for (var k = 0; k < strLen; k++)
            {
                if (text[k] == strSource[i])
                {
                    result = true;
                    break;
                }
            }
            if(result)
            {
                i-=1;
            }
            else
            {
                return i;
            }
        }
        return -1;
    },

    findFirstNotOf:function(strSource, text) {
        var sourceLen = strSource.length;
        var strLen = text.length;
        var i = 0;
        while (i < sourceLen - 1) {
            var result = false;
            for (var k = 0; k < strLen; k++) {
                if (text[k] == strSource[i]) {
                    result = true;
                    break;
                }
            }
            if (result) {
                i += 1;
            } else {
                return i;
            }

        }
        return -1;
    },

    getText : function (key) {
        if(key in this._localizedStrings)
        {
            return this._localizedStrings[key];
        }
        return key;
    }
});

LocalizedString.to = function (keyLocalized) {
    if(g_localization == null)
    {
        g_localization = new LocalizedString();
        g_localization.loadLocalized();
    }
    return g_localization.getText(keyLocalized);
}

var localized = function(keyLocalized)
{
    return LocalizedString.to(keyLocalized)
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

var SocialManager = cc.Class.extend({

    ctor: function () {

        this._target = null
        this._selector = null
        this._currentSocial = 0
        //this.friendData = new SocialFriendData();
        this.topServer = null;

    },
    setTarget: function (target, selector) {
        this._target = target;
        this._selector = selector;
    },

    errorHttp: function () {
        engine.HandlerManager.getInstance().forceRemoveHandler(toName("femcdUpcdmgo"));
        engine.HandlerManager.getInstance().forceRemoveHandler(toName("mo~YoyycedAos"));
        if (this._selector && this._target)
            this._selector.call(this._target, this._currentSocial, "{\"error\": -1}");
    },

    logout: function () {
        if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
            jsb.reflection.callStaticMethod("FacebookUtils", "logout");
            jsb.reflection.callStaticMethod("GoogleUtils", "logout");
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%yeickf%Lkioheea_~cfy"), "logout", "()V");
        }
        else if (cc.sys.os == cc.sys.OS_WP8) {
            if (this._currentSocial == SocialManager.FACEBOOK)
                engine.WP8Bridgle.logoutFB();

        }

    },
    // exec login google
    loginGoogle: function () {
        this._currentSocial = SocialManager.GOOGLE;
        this.callbackGG = function (jdata) {
            cc.log("socialMgr :" + "google :" + jdata);
            if (this._selector && this._target)
                this._selector.call(this._target, this._currentSocial, jdata);
        }

        engine.HandlerManager.getInstance().addHandler("login_google", this.callbackGG.bind(this));

        if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
            jsb.reflection.callStaticMethod("GoogleUtils", "login");
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%yeickf%Meemfo_~cfy"), "getAccessToken", "()V");
        }

    },

    // exec login facebook
    loginFacebook: function () {
        this._currentSocial = SocialManager.FACEBOOK;
        this.callbackFB = function (jdata) {

            if (this._selector && this._target)
                this._selector.call(this._target, this._currentSocial, jdata);
        }
        engine.HandlerManager.getInstance().addHandler("login_facebook", this.callbackFB.bind(this));
        if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
            jsb.reflection.callStaticMethod("FacebookUtils", "login");
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            jsb.reflection.callStaticMethod(toName("ieg%|zf%~cfy%yeickf%Lkioheea_~cfy"), "getAccessToken", "()V");
        }
        else if (cc.sys.os == cc.sys.OS_WP8) {
            engine.WP8Bridgle.loginFB();
        }


    },

    onTimeOut: function () {              // timeout

    },
    saveSession: function (session, social, openID, typesocial) {
        cc.log("__________________  SAVE SESSION  _____________________");
        cc.sys.localStorage.setItem("social", social);
        cc.sys.localStorage.setItem("session", session);
        cc.sys.localStorage.setItem("openID", openID);
        cc.sys.localStorage.setItem("typesocial", typesocial);

    },
    clearSession: function () {
        cc.sys.localStorage.setItem("social", "");
        cc.sys.localStorage.setItem("session", "");
        cc.sys.localStorage.setItem("openID", "");
        cc.sys.localStorage.setItem("typesocial", -1);
    },

    getSession: function (session, social, openID, typesocial) {
        social = cc.sys.localStorage.getItem("social");
        session = cc.sys.localStorage.getItem("session");
        openID = cc.sys.localStorage.getItem("openID");
        typesocial = cc.sys.localStorage.getItem("typesocial");


    },
    sessionExist: function () {
        var session = cc.sys.localStorage.getItem("session");
        return (session != null) && (session != "");
    },


    /**********************************************/
    /* get sessionkey -- handle response*/
    onTimeOutSessionKey: function () {              // timeout
        cc.log("timeout sessionKey")
        if (this._selector && this._target)
            this._selector.call(this._target, this._currentSocial, "{\"error\": -1}");

    },
    onResponseSessionkey: function (data) {

        if (this._selector && this._target)
            if (data) {
                this._selector.call(this._target, this._currentSocial, data);
            }
            else {
                this._selector.call(this._target, this._currentSocial, this.xhr.responseText);
            }
        engine.HandlerManager.getInstance().forceRemoveHandler("getSessionKey");
    },
    /**********************************************/

})

SocialManager.GOOGLE = 0;
SocialManager.FACEBOOK = 2;

SocialManager.firstinit = true;
SocialManager.sharedInstance = null;

SocialManager.getInstance = function () {
    if (SocialManager.firstinit) {
        SocialManager.sharedInstance = new SocialManager();
        SocialManager.firstinit = false;
    }
    return SocialManager.sharedInstance;
}

var socialMgr = SocialManager.getInstance()

//end social

// start Inpacket

var INDEX_SIZE_PACKET = 1;

var InPacket = cc.Class.extend({
    ctor: function () {

    },
    init: function (pkg) {
        this._pos = 0;
        this._data = pkg;
        this._length = pkg.length;
        this._controllerId = this.parseByte();
        this._cmdId = this.getShort();
        this._error = this.parseByte();
    },
    getCmdId: function () {
        return this._cmdId;
    },
    getControllerId: function () {
        return this._controllerId;
    },
    getError: function () {
        return this._error;
    },
    parseByte: function () {
        cc.assert(this._pos < this._length, "IndexOutOfBoundsException");
        var b = this._data[this._pos++];
        return b;
    },
    getByte: function () {
        return this.parseByte();
    },
    getBool: function () {
        cc.assert(this._pos < this._length, "IndexOutOfBoundsException");
        var b = this._data[this._pos++];
        return b > 0;
    },
    getBytes: function (size) {
        cc.assert(this._pos + size <= this._length, "IndexOutOfBoundsException");
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(this.parseByte());
        }
        return bytes;
    },
    getShort: function () {
        cc.assert(this._pos + 2 <= this._length, "IndexOutOfBoundsException");
        if (this._pos + 2 > this._length) {
            return 0;
        }
        var v = ((this.parseByte() << 8) + (this.parseByte() & 255));
        if (v > 32767) {
            return (v - 65536);
        }
        return v;
    },
    getUnsignedShort: function () {
        cc.assert(this._pos + 2 <= this._length, "getUnsignedShort: IndexOutOfBoundsException");
        var a = (this.parseByte() & 255) << 8;
        var b = (this.parseByte() & 255) << 0;
        return a + b;
    },
    getInt: function () {
        cc.assert(this._pos + 4 <= this._length, "getInt: IndexOutOfBoundsException");
        return ((this.parseByte() & 255) << 24) +
            ((this.parseByte() & 255) << 16) +
            ((this.parseByte() & 255) << 8) +
            ((this.parseByte() & 255) << 0);
    },
    byteArrayToLong: function(array) {
        var positive = true;
        var value = 0;
        if(array[0] == (255 & 0xff)){
            positive = false;
        }
        if(positive){
            for ( var i = 0; i < 8; i++) {
                value = (value * 256) + array[i];
            }
        }else{
            //for ( var i = 0; i < 7; i++) {
            //    array[i] = (255 - array[i])& 0xff;
            //}
            //array[7] = (256-array[i]) & 0xff;
            //for ( var i = 0; i < 8; i++) {
            //    value = (value * 256) + array[i];
            //}
            //value = -value;
            value = 1;
            for(var i= 1; i <=7; i++){
                value = value*256 - array[i];
            }
            value = -value;
        }
        return value;
    },

    getLong: function () {
        cc.assert(this._pos + 8 <= this._length, "getLong: IndexOutOfBoundsException");
        var data = [];
        for(var i = 0; i < 8; i++){
            data[i] = this.parseByte();
        }
        return this.byteArrayToLong(data);
    },


    getDouble: function () {
        cc.assert(this._pos + 8 <= this._length, "getLong: IndexOutOfBoundsException");
        var buffer = new ArrayBuffer(8);
        var int8array = new Uint8Array(buffer);

        for (var i = 7; i >= 0; i--) {
            int8array[7 - i] = this.parseByte();
        }
        var dataview = new DataView(buffer);

        return dataview.getFloat64(0);

    },

    getCharArray: function () {
        var size = this.getUnsignedShort();
        return this.getBytes(size);
    },

    getString: function () {
        var out = this.getCharArray();
        var uintarray = new Uint8Array(out.length);
        for (var i = 0; i < out.length; i++) {
            uintarray[i] = parseInt(out[i], 10);
        }
        var encode = String.fromCharCode.apply(null, uintarray);
        var decode = decodeURIComponent(escape(encode));

        return decode;
    },
    clean: function () {

    }
});

if(cc.sys.isNative && useTCP){
    engine.InPacket.extend = cc.Class.extend;
    var CmdReceivedCommon = engine.InPacket.extend({
            _jData: "{}",
            ctor:function(pkg)
            {
                this._super();
                this.init(pkg);
            },
            readData: function()
            {

            },
            getLong: function(){
                var kk = engine.InPacket.prototype.getLong.call(this);
                return Number(kk);
            },
            getInt: function(){
                var kk = engine.InPacket.prototype.getInt.call(this);
                return Number(kk);
            },
            getShort: function(){
                var kk = engine.InPacket.prototype.getShort.call(this);
                return Number(kk);
            }
        }
    )
}else{
    var CmdReceivedCommon = InPacket.extend({
            _jData: "{}",
            ctor:function(pkg)
            {
                this._super();
                this.init(pkg);
            },
            readData: function()
            {

            }
        }
    )
}

// out packet

var OutPacket = cc.Class.extend(
    {
        ctor: function () {
            this._controllerId = 1;
            this._cmdId = 0;
            this.reset();
        },
        setCmdId: function (cmdId) {
            this._cmdId = cmdId;
        },
        setControllerId: function (controllerId) {
            this._controllerId = controllerId;
        },
        initData: function (capacity) {
            this._data = [capacity];
            this._capacity = capacity;
        },
        reset: function () {
            this._pos = 0;
            this._length = 0;
            this._isPackedHeader = false;
        },
        packHeader: function () {
            if (this._isPackedHeader) {
                return;
            }
            this._isPackedHeader = true;

            var header = PacketHeaderAnalyze.genHeader(false, false);
            this.putByte(header);
            this.putUnsignedShort(this._length);
            this.putByte(this._controllerId);
            this.putShort(this._cmdId);
        },
        putByte: function (b) {
            this._data[this._pos++] = b;
            this._length = this._pos;
            return this;
        },
        putByteArray: function (bytes) {
            this.putShort(bytes.length);
            this.putBytes(bytes);
            return this;
        },

        putBytes: function (bytes) {
            for (var i = 0; i < bytes.length; i++) {
                this.putByte(bytes[i]);
            }
            return this;
        },

        putShort: function (v) {
            this.putByte((v >> 8) & 0xFF);
            this.putByte((v >> 0) & 0xFF);
            return this;
        },
        putUnsignedShort: function (v) {
            this.putByte(v >> 8);
            this.putByte(v >> 0);
            return this;
        },
        putInt: function (v) {
            this.putByte((v >> 24) & 0xff);
            this.putByte((v >> 16) & 0xff);
            this.putByte((v >> 8) & 0xff);
            this.putByte((v >> 0) & 0xff);
            return this;
        },

        putLong: function (v) {
            if(v < 0) {
                cc.log("hahaha");
            }
            var data = [];
            //if(v < 0){
            //    data[7] = 1 & 0xff;
            //}else{
            //    data[7] = 0 & 0xff;
            //}

            for(var k=0; k< 8;k++) {
                data[k] = (v & (0xff));
                v = Math.floor(v/ 256);
            }

            for(var i = 7; i >= 0; i--) {
                this.putByte(data[i]);
            }
        },


        putDouble: function(v){
            this.putByte((v >> 24) & 0xff);
            this.putByte((v >> 16) & 0xff);
            this.putByte((v >> 8) & 0xff);
            this.putByte((v >> 0) & 0xff);
            this.putByte((v >> 24) & 0xff);
            this.putByte((v >> 16) & 0xff);
            this.putByte((v >> 8) & 0xff);
            this.putByte((v >> 0) & 0xff);
            return this;
        },

        putString: function (str) {
            //TODO: add this
            this.putByteArray(this._stringConvertToByteArray(str));
            return this;
        },
        updateUnsignedShortAtPos: function (v, pos) {
            this._data[pos] = v >> 8;
            this._data[pos + 1] = v >> 0;
        },
        updateSize: function () {
            this.updateUnsignedShortAtPos(this._length - 3, INDEX_SIZE_PACKET);
        },
        getData: function () {
            return this._data.slice(0, this._length);
        },
        _stringConvertToByteArray: function (strData) {
            if (strData == null)
                return null;
            var arrData = new Uint8Array(strData.length);
            for (var i = 0; i < strData.length; i++) {
                arrData[i] = strData.charCodeAt(i);
            }
            return arrData;
        },
        clean: function () {

        }
    }
);

var BIT_IS_BINARY_INDEX = 7;
var BIT_IS_ENCRYPT_INDEX = 6;
var BIT_IS_COMPRESS_INDEX = 5;
var BIT_IS_BLUE_BOXED_INDEX = 4;
var BIT_IS_BIG_SIZE_INDEX = 3;
var BYTE_PACKET_SIZE_INDEX = 1;
var BIG_HEADER_SIZE = 5;
var NORMAL_HEADER_SIZE = 3;

var PacketHeaderAnalyze = {
    getDataSize: function (data) {
        var bigSize = this.isBigSize(data);
        if (bigSize)
            return this.getIntAt(data, BYTE_PACKET_SIZE_INDEX);
        else
            return this.getUnsignedShortAt(data, BYTE_PACKET_SIZE_INDEX);
    },
    getCmdIdFromData: function (data) {
        return this.getShortAt(data, 1);
    },
    isBigSize: function (data) {
        return this.getBit(data[0], BIT_IS_BIG_SIZE_INDEX);
    },
    isCompress: function (data) {
        return this.getBit(data[0], BIT_IS_COMPRESS_INDEX);
    },
    getValidSize: function (data) {
        var bigSize = this.isBigSize(data);
        var dataSize = 0;
        var addSize = 0;
        if (bigSize) {
            if (length < BIG_HEADER_SIZE)
                return -1;
            dataSize = this.getIntAt(data, BYTE_PACKET_SIZE_INDEX);
            addSize = BIG_HEADER_SIZE;
        }
        else {
            if (length < NORMAL_HEADER_SIZE)
                return -1;
            dataSize = this.getUnsignedShortAt(data, BYTE_PACKET_SIZE_INDEX);
            addSize = NORMAL_HEADER_SIZE;
        }
        return dataSize + addSize;
    },
    getBit: function (input, index) {
        var result = input & (1 << index);
        return (result != 0);
    },
    genHeader: function (bigSize, compress) {
        var header = 0;
        //set bit dau la binary hay ko
        header = this.setBit(header, 7, true);
        //bit 2: ko ma hoa
        header = this.setBit(header, 6, false);
        //bit 3: ko nen
        header = this.setBit(header, 5, compress);
        //bit 4: isBlueBoxed?
        header = this.setBit(header, 4, true);
        //bit 5: isBigSize?
        header = this.setBit(header, 3, bigSize);
        return header;
    },
    setBit: function (input, index, hasBit) {
        if (hasBit) {
            input |= 1 << index;
        } else {
            input &= ~(1 << index);
        }
        return input;
    },
    getIntAt: function (data, index) {
        return ((data[index] & 255) << 24) +
            ((data[index + 1] & 255) << 16) +
            ((data[index + 2] & 255) << 8) +
            ((data[index + 3] & 255) << 0);
    },
    getUnsignedShortAt: function (data, index) {
        var a = (data[index] & 255) << 8;
        var b = (data[index + 1] & 255) << 0;
        return a + b;
    },
    getShortAt: function (data, index) {
        return (data[index] << 8) + (data[index + 1] & 255);
    }
};

if(!cc.sys.isNative || !useTCP){
    CmdSendCommon = OutPacket.extend({
            _jData: "{}",
            ctor:function()
            {
                this._super();
            }
        }
    )
}else{
    engine.OutPacket.extend = cc.Class.extend;
    CmdSendCommon = engine.OutPacket.extend({
            _jData: "{}",
            ctor:function()
            {
                this._super();
            }
        }
    )
}

// end out packet

// Ws client

var BaseWSListener = cc.Class.extend(
    {
        ctor:function(){

        },
        onFinishConnect:function(isSuccess){
            cc.log("BaseWSListener Finish connect " + isSuccess);
        },
        onDisconnected:function(){
            cc.log("BaseWSListener Finish connect " + isSuccess);
        },
        onReceived:function(cmd, pkg){
            cc.log("BaseWSListener On Received");
        }
    }
);

var ConnectState = function(){}
ConnectState.DISCONNECTED = 0;
ConnectState.CONNECTING = 1;
ConnectState.CONNECTED = 2;
ConnectState.NEED_QUIT = 3;             // state khi client da disconnect va thong bao cho GUI hien tai de disconnect

var WebSocket = WebSocket || window.WebSocket || window.MozWebSocket;
//var WebSocket = window.MozWebSocket;

var EVENT_CONNECT_SUCCESS = 0;
var EVENT_CONNECT_ERROR = 3;
var EVENT_DISCONNECT = 1;
var EVENT_RECEIVED = 2;


var WebsocketClient = cc.Class.extend({
    ctor: function(){
        this.listener = null;
        this.ws = null;
        if(!cc.sys.isNative)
        {
            cc.director.getScheduler().scheduleUpdate(this,0,false);
        }
        this.data = [];
        this.event = -1;
    },
    getHandshakeRequest: function()
    {
        var obj = {};
        obj.c = 0;
        obj.a = 0;
        obj.p = {};
        obj.p["cl"] = "JavaScript";
        obj.p["api"] = "1.2.0";

        return JSON.stringify(obj);
    },
    handleHandshake: function(){
    },
    update: function(){
        this.dispatchEvent();
    },
    //

    dispatchEvent: function(event)
    {
        if(this.event == EVENT_CONNECT_SUCCESS)
        {
            if(this.listener && this.listener.onFinishConnect)
            {
                this.listener.target = this;
                this.listener.onFinishConnect.call(this.listener,true);
            }
            this.event = -1;
        }
        else if(this.event == EVENT_CONNECT_ERROR)
        {
            if(this.listener && this.listener.onFinishConnect)
            {
                this.listener.target = this;
                this.listener.onFinishConnect.call(this.listener,false);
            }
        }
        else if(this.event == EVENT_DISCONNECT)
        {
            if(this.listener && this.listener.onDisconnected)
            {
                this.listener.target = this;
                this.listener.onDisconnected.call(this.listener);
            }
            this.event = -1;
        }

        if(this.data.length > 0)
        {
            var data = this.data[0];
            if(this.listener && this.listener.onReceived)
            {
                this.listener.onReceived.call(this.listener,0,data);
            }
            this.data.splice(0,1);
        }
    },

    connect: function(host,port,isSsl, listenner)    {
        //cc.log("connect: " + host + " port: " + port);
        var url = "ws" + (isSsl ? "s" : "") + "://" + host + ":" + port + "/ws";

            this.ws = new WebSocket(url);
            this.listener = listenner;
            this.ws.binaryType = "arraybuffer";
            this.ws.onopen = this.onSocketConnect.bind(this);
            this.ws.onclose = this.onSocketClose.bind(this);
            this.ws.onmessage = this.onSocketData.bind(this);
            this.ws.onerror = this.onSocketError.bind(this);
            //cc.log("create websocket client emd");
    },

    closeSocket:function()
    {

        if(!cc.sys.isNative || !useTCP){
            this.ws.close();
        }
        else{
            this.ws.disconnect();
        }

    },

    onSocketConnect : function(){
        if(false) {
            this.event = EVENT_CONNECT_SUCCESS;
        }else{
            if(this.listener && this.listener.onFinishConnect)
            {
                this.listener.target = this;
                this.listener.onFinishConnect.call(this.listener,true);
            }
        }
    },

    onSocketClose: function(){
        cc.log("CONNECT CLOSED");
        if(false) {
            this.event = EVENT_DISCONNECT;
        }else{
            if(this.listener && this.listener.onDisconnected)
            {
                this.listener.target = this;
                this.listener.onDisconnected.call(this.listener);
            }
        }
    },
    onSocketData: function(a){
        //cc.log("onSocketData = " + a.data);

        var data = new Uint8Array(a.data);
        if(false) {
            this.data.push(data);
        }else{
            if(this.listener && this.listener.onReceived)
            {

                this.listener.onReceived.call(this.listener,a.data);
            }
        }
    },
    onSocketError: function(){
        cc.log("error connect");
        if(false) {
            this.event = EVENT_CONNECT_ERROR;
        }else{
            if(this.listener && this.listener.onFinishConnect)
            {
                this.listener.target = this;
                this.listener.onFinishConnect.call(this.listener,false);
            }
        }
    },
    send: function(packet){
        this.ws.send(packet);
        return;
        if(!cc.sys.isNative || !useTCP){
            var data = new Int8Array(packet._length);

            for(var i=0; i< packet._length; i++)
            {
                data[i] = packet._data[i];
            }

            this.ws.send(data.buffer);
        }
        else
        {
            this.ws.send(packet);
        }
    }

});

var CmdSendTest = CmdSendCommon.extend(
    {
        ctor:function()
        {
            this._super();
            this.initData(100);
            this.setControllerId(1);
            this.setCmdId(1);
        },
        putData:function(){
            //pack
            this.packHeader();
            this.putString("1000");
            this.updateSize();
        }
    }
);
var USER ="th";
var PASS = 123;
var CLIENT;

testWebsocketConnection = function(username, pass){
    CLIENT = new WebsocketClient();
    CLIENT.connect("192.168.1.2", 8081, false);
};

testSendData = function(){
    cc.log("Send test data to server");
    var login = new CmdSendTest();
    login.putData(USER, PASS);
    CLIENT.send(login);
    login.clean();
}

// end ws client