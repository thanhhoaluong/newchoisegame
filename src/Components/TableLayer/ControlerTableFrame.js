var ControlerTableFrame  = ccui.Layout.extend(
    {
        _btnBackAll:null,
        _btnBack:null,
        _btnNextAll:null,
        _btnNext:null,
        _currentPage:1,
        _totalPage:1,
        _lbPage:null,
        _bgPage:null,
        _layer:null,
        ctor: function (layer,totalPage){
            this._super();
            if(totalPage)
                this._totalPage = totalPage;
            this._layer = layer;
            this.setContentSize(cc.size(1000,40));
            this.setAnchorPoint(0.5 , 0.5);
            var texType = ccui.Widget.LOCAL_TEXTURE;
            if (cc.spriteFrameCache.getSpriteFrame(res_TableGui + "totalPage.png")) {
                texType = ccui.Widget.PLIST_TEXTURE;
            }
            this._btnBackAll = new ccui.Button();
            this._btnBackAll.loadTextures(res_TableGui + "bt_backAllPage.png", res_TableGui + "bt_backAllPage_s.png", res_TableGui + "bt_backAllPage_s.png", texType);
            this._btnBackAll.setPosition(350,30);
            this.addChild(this._btnBackAll);
            this._btnBackAll.addTouchEventListener(this.onTouchEventHandler, this);
            this._btnBackAll.setTag(0);

            this._btnBack = new ccui.Button();
            this._btnBack.loadTextures(res_TableGui + "bt_backPage.png", res_TableGui + "bt_backPage_s.png", res_TableGui + "bt_backPage_s.png", texType);
            this._btnBack.setPosition(415,30);
            this.addChild(this._btnBack);
            this._btnBack.addTouchEventListener(this.onTouchEventHandler, this);
            this._btnBack.setTag(1);

            if(texType == ccui.Widget.PLIST_TEXTURE)
            {
                this._bgPage = new cc.Sprite("#res/TableGui/totalPage.png");
            }else
            {
                this._bgPage = new cc.Sprite("res/TableGui/totalPage.png");
            }
            this._bgPage.setPosition(500,30);
            this.addChild(this._bgPage);

            this._lbPage = new ccui.Text(this._currentPage + "/" + this._totalPage, fontArialB.fontName, 25);
            this._lbPage.setColor(cc.color(41,41,41));

            this._lbPage.setPosition(500,30);
            this._lbPage.setAnchorPoint(0.5, 0.5);
            if (cc.sys.isNative) {
                this._lbPage.setFontName("res/Font/" + this._lbPage.getFontName() + ".ttf");
            }
            this.addChild(this._lbPage);

            this._btnNext = new ccui.Button();
            this._btnNext.loadTextures(res_TableGui + "bt_backPage.png", res_TableGui + "bt_backPage_s.png", res_TableGui + "bt_backPage_s.png", texType);
            this._btnNext.setPosition(585,30);
            this.addChild(this._btnNext);
            this._btnNext.addTouchEventListener(this.onTouchEventHandler, this);
            this._btnNext.setRotationY(180);
            this._btnNext.setTag(2);

            this._btnNextAll = new ccui.Button();
            this._btnNextAll.loadTextures(res_TableGui + "bt_backAllPage.png", res_TableGui + "bt_backAllPage_s.png", res_TableGui + "bt_backAllPage_s.png", texType);
            this._btnNextAll.setPosition(650,30);
            this.addChild(this._btnNextAll);
            this._btnNextAll.addTouchEventListener(this.onTouchEventHandler, this);
            this._btnNextAll.setRotationY(180);
            this._btnNextAll.setTag(3);

        },
        setCurrentPage:function(currentPage)
        {
            this._currentPage = currentPage;
            this._lbPage.setString(this._currentPage + "/" + this._totalPage);
        },
        setTotalPage:function(totalPage)
        {
            this._totalPage = totalPage;
            this._lbPage.setString(this._currentPage + "/" + this._totalPage);
        },
        onTouchEventHandler: function (sender, type) {
            switch (type) {
                case ccui.Widget.TOUCH_ENDED:
                   switch (sender.getTag())
                   {
                       case 0://back all
                           if(this._currentPage != 1)
                           {
                               this._currentPage = 1;
                               this._lbPage.setString(this._currentPage + "/" + this._totalPage);
                               this._layer.onClickControl(0, this._currentPage)
                           }
                           break;
                       case 1://back
                           if(this._currentPage > 1)
                           {
                               this._currentPage --;
                               this._lbPage.setString(this._currentPage + "/" + this._totalPage);
                               this._layer.onClickControl(1, this._currentPage)
                           }
                           break;
                       case 2://next
                           if(this._currentPage < this._totalPage)
                           {
                               this._currentPage ++;
                               this._lbPage.setString(this._currentPage + "/" + this._totalPage);
                               this._layer.onClickControl(2, this._currentPage)
                           }
                           break;
                       case 3://next all
                           if(this._currentPage != this._totalPage)
                           {
                               this._currentPage = this._totalPage;
                               this._lbPage.setString(this._currentPage + "/" + this._totalPage);
                               this._layer.onClickControl(3, this._currentPage)
                           }
                           break;
                   }


                    break;

            }
        }

    }
)