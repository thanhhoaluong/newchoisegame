
var Captcha = BaseLayer.extend(
    {
        _posX : null,
        _posY : null,
        ctor: function (parent, posX, posY) {
            this._super();
            this._posX = posX;
            this._posY = posY;
            return true;
        },
        customizeGUI: function () {
            cc.log("Captcha");
            this.createSprite(this,"sp_captcha",cc.p(this._posX,this._posY),res_login_scene + "sp_captcha.png");
            this.getCatpcha();
        },

        getCatpcha : function(){
            getConection(MODULE_PORTAL);
            var url = CmdgetCaptcha();
            conectsocket.gameClient.send(url);
        },

        showCaptcha : function(texture, error){
            if(error != ""){
                showAlam(0, error, null);
                return;
            }
            var img = "data:image/png;base64," + texture;
            if (cc.sys.isNative) {
                var data = texture;
                this.sp_captcha.initWithBase64(data)
            } else {
                cc.loader.loadImg(img, {isCrossOrigin: false}, function (err, img) {
                    var texture2d = self._texture2d = new cc.Texture2D();
                    texture2d.initWithElement(img);
                    texture2d.handleLoadedTexture();
                    captcha_base.sp_captcha.initWithTexture(texture2d)
                });
            }
        },

        destroySceneCaptcha : function(){
            this.removeAllChildren();
            this.removeFromParent(true)
            captcha_base = null;
        },

        onEnter: function(){
            this._super();

        },
    }
)

