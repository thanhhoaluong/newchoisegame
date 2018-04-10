
var LocalizedsString = cc.Class.extend({
    ctor : function () {

    },

    loadLocalized : function () {
        this._localizedStrings = {};
        var contents = "";

        if(cc.sys.isNative)
        {
            cc.loader.loadTxt("res/list", function (error, txt) {
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
            contents = cc.loader._loadTxtSync("res/list");
        }
    },

    getText : function (key) {
        if(key in this._localizedStrings)
        {
            return this._localizedStrings[key];
        }
        return key;
    }
});
