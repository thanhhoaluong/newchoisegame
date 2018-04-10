var BaseLobby = BaseLayer.extend(

    {

        ctor: function () {
            this._super("BaseLobby");
            this.sizeSceen = null;
            this.positionCenter = null;
            this.positionContent = null;
            this.bg = null;
            this.main_content = null;
            this.imageBg = null;

            var scaleContent = 1;
            var scaleContentX = 1;
            var scaleContentY = 1;

            if (cc.sys.isNative) {

                this.sizeSceen = cc.size(1280,720);
                this.positionCenter = cc.p(640,360);
                this.positionContent = cc.p(640,360);
                this.imageBg = "res/Base/mobile.jpg";
            } else {
                this.sizeSceen = cc.size(1920,1080);
                scaleContentX = window.innerWidth/1920;
                scaleContentY = window.innerHeight/1080;
                if(window.innerWidth/1920 >= window.innerHeight/1080)
                    scaleContent = window.innerWidth/1920;
                else
                    scaleContent = window.innerHeight/1080;
                this.positionCenter = cc.p(960*scaleContentX,540*scaleContentY);
                this.positionContent = cc.p(960*scaleContentX,630*scaleContentY);

                this.imageBg = "res/Base/web.jpg";

            }



            this.createSprite(this,"bg",this.positionCenter,this.imageBg);
            this.bg.setScale(scaleContent);
            this.bg.setName("bg_base");
            this.createLayout(this,"main_content",this.positionContent,null,cc.size(1280,720),false);
            this.main_content.setScale(scaleContent);
            return true;
        },
        onEnter: function(){
            // cc.log("Base Lobby");
            this._super();
            // cc.log("end Base Lobby hehe");
        },

        initGUI: function () {
            //this.main_content = this._layout.getChildByName("main_content");
            //this.main_content.setOpacity(0);
        },
        customizeGUI: function(){

        },
        addGUI: function(layer, zOrder){
            this.main_content.addChild(layer, zOrder);
        }
    }
);