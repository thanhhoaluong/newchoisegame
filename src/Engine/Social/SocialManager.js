
/*
 * Tutorial
 * 1. setTarget -> listener
 * 2. loginFB ....
 * */

var SociallManager = cc.Class.extend({

    ctor: function () {

        this._target = null
        this._selector = null
        this._currentSocial = 0;
    },

    errorHttp: function () {
        if (this._selector && this._target)
            this._selector.call(this._target, this._currentSocial, "{\"error\": -1}");
    },

    logout: function () {
        if (cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod("Facebook", "logout");
        }
    },
    // exec login google
    loginGoogle: function () {
        this._currentSocial = SociallManager.GOOGLE;
        this.callback = function (jdata) {
            cc.log("socialMgr :" + "google :" + jdata);
        }
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(toName("\\cdzfks%Meemfo"), "accessToken", "()V");
        }

    },

    // exec login facebook
    loginFacebook: function () {
        this._currentSocial = SociallManager.FACEBOOK;
        this.callbackFB = function (jdata) {

            if (this._selector && this._target)
                this._selector.call(this._target, this._currentSocial, jdata);
        }
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(toName("|cdzfks%Lkioheea"), "ccessToken", "()V");
        }

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
    },
    /**********************************************/

})

SociallManager.GOOGLE = 0;
SociallManager.FACEBOOK = 2;