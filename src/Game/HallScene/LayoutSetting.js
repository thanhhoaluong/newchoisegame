var LayoutSetting = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("LayoutSetting");
            this.createLayout(this,"shadow",cc.p(640,370),null,cc.size(1920,1280),true);
            this.shadow.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
            this.shadow.setBackGroundColor(cc.color.BLACK);
            this.shadow.setBackGroundColorOpacity(180);

            this.createLayout(this,"shadow",cc.p(640,370),null,cc.size(1920,1280),true);

        },

        onEnter: function(){
            this._super();

        },
    }
)

