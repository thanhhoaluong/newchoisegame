var BaseLayer = cc.Layer.extend({

    ctor: function (id) {
        this.curFram = 0;

        this._id = id;
        this._layout = null;
        this._layoutPath = "";
        this._scale = -1;

        this._showHideAnimate = false;
        this._bgShowHideAnimate = null;
        this._currentScaleBg = 1;

        this._enableBack = false;

        if (this._scale < 0) {
            this._scale = cc.director.getWinSize().width / 800;
            this._scale = (this._scale > 1) ? 1 : this._scale;
        }

        cc.Layer.prototype.ctor.call(this);
        this._layerColor = new cc.LayerColor(cc.BLACK);
        this.addChild(this._layerColor);
        this._layerColor.setVisible(false);

        this._keyboardEvent = cc.EventListener.create({
            event: cc.EventListener.KEYBOARD,
            onKeyReleased: function (keyCode, event) {
                if (keyCode == cc.KEY.back || keyCode == 27) {
                    event.getCurrentTarget().backKeyPress();
                }
            }
        });
        cc.eventManager.addListener(this._keyboardEvent, this);


        this._listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                return true;
            },
            onTouchMoved: function (touch, event) {
            },
            onTouchEnded: function (touch, event) {
            }
        });
    },

    onEnter: function () {
        this.curFram += 1;
        cc.Layer.prototype.onEnter.call(this);
        this.setContentSize(cc.winSize);
        this.setAnchorPoint(cc.p(.5, .5));
        this.customizeGUI();
    },

    initWithJsonFile: function (json) {
        this._layoutPath = json;
        var jsonLayout = ccs.load(json);
        this._layout = jsonLayout.node;
        this._layout.setContentSize(cc.director.getWinSize());
        if (cc.sys.isNative) {
            ccui.Helper.doLayout(this._layout);
        }
        this.addChild(this._layout);
        this.initGUI();
    },

    initWithBinaryFile: function (json) {
        var start = new Date().getTime();
        this._layoutPath = json;
        var jsonLayout = ccs.load(json);
        this._layout = jsonLayout.node;
        this._layout.setContentSize(cc.director.getWinSize());
        if (cc.sys.isNative) {
            ccui.Helper.doLayout(this._layout);
        }
        this.addChild(this._layout);
        var end = new Date().getTime();

        this.initGUI();
        var end2 = new Date().getTime();
    },

    customizeButton: function (name, tag, parent) {
        if (tag) {
            tag = parseInt(tag);
        }

        if (!this._layout)
            return;

        var button = null;
        if (parent) {
            button = ccui.Helper.seekWidgetByName(parent, name);
        }
        else {
            button = ccui.Helper.seekWidgetByName(this._layout, name);
        }

        if (!button)
            return null;
        button.setPressedActionEnabled(true);
        button.setTag(tag);
        button.addTouchEventListener(this.onTouchEventHandler, this);

        return button;

    },

    customButton: function (name, tag, parent, action) {
        if (action === undefined)
            action = true;
        if (tag) {
            tag = parseInt(tag);
        }

        var btn = this.getControl(name, parent);
        if (!btn) return null;
        btn.setPressedActionEnabled(action);

        btn.setTag(tag);
        btn.addTouchEventListener(this.onTouchEventHandler, this);
        return btn;
    },

    setLabelText: function (text, control) {
        if (typeof  text === 'undefined') return;
        if (typeof  control === 'undefined') return;
        if (control == null) return;
        if (typeof  control.getString === 'undefined') return;
        if (typeof  control.setString === 'undefined') return;

        var str = control.getString();
        var l1 = str.length;
        var l2 = text.length;

        if (control.subText !== undefined) {
            l1 = control.subText;

            if (l2 <= l1) {
                control.setString(text);
            }
            else {
                control.setString(text.substring(0, l1 - 2) + "...");
            }
        }
        else if (control.wrapText !== undefined) {
            var s1 = control.width;
            var num = text.length;
            var str = "";
            var result = "";
            for (var i = 0; i < num; i++) {
                str += text.charAt(i);
                result += text.charAt(i);
                control.setString(str);
                if (text.charAt(i) == " ") {
                    if (control.width > s1) {
                        result += "\n";
                        str = "";
                    }
                }
            }
            control.setString(result);
        }
        else {
            control.setString(text);
        }
    },

    getControl: function (cName, parent) {
        var p = null;
        if (typeof  parent === 'undefined') {
            p = this._layout;
        }
        else if (typeof parent === 'string') {
            p = ccui.Helper.seekWidgetByName(this._layout, parent);
        }
        else {
            p = parent;
        }

        var control = ccui.Helper.seekWidgetByName(p, cName);
        if (control == null) {
            return null;
        }
        this.analyzeCustomControl(control);
        return control;
    },

    processScaleControl: function (control, direct) {
        if (direct === undefined) {
            control.setScale(this._scale);
        }
        else if (direct == 1) {
            control.setScaleX(this._scale);
        }
        else {
            control.setScaleY(this._scale);
        }
    },

    analyzeCustomControl: function (control) {
        if (control.customData === undefined) {
            if (control.getTag() < 0) // scale theo ty le nho nhat
            {
                this.processScaleControl(control);
            }
            return;
        }

        var s = control.customData;

        if (s.indexOf("scale") > -1) // scale theo ty le nho nhat
        {
            if (s.indexOf("scaleX") > -1) {
                this.processScaleControl(control, 1);
            }
            else if (s.indexOf("scaleY") > -1) {
                this.processScaleControl(control, 0);
            }
            else {
                this.processScaleControl(control);
            }
        }

        if (s.indexOf("subText") > -1) // set text gioi han string
        {
            control["subText"] = control.getString().length;
        }

        if (s.indexOf("wrapText") > -1) // set text cat strign xuong dong
        {
            control["wrapText"] = control.getString().length;
        }
    },

    processListControl: function (name, num) {
        if (name === undefined || num === undefined) return;

        for (var i = 0; i < num; i++) {
            this.getControl(name + i);
        }
    },

    setFog: function (bool) {
        this._layerColor.setVisible(true);
        cc.eventManager.addListener(this._listener, this);
        this._layerColor.runAction(cc.fadeTo(.25, 150));
    },

    enableFog: function () {
        this._fog = new cc.LayerColor(cc.BLACK);
        this._fog.setVisible(true);
        this.addChild(this._fog, -999);

        this._listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                return true;
            },
            onTouchMoved: function (touch, event) {
            },
            onTouchEnded: function (touch, event) {
            }
        });

        cc.eventManager.addListener(this._listener, this);
        this._fog.runAction(cc.fadeTo(.25, 150));
    },

    setDelayInit: function (time) {
        if (time === undefined)
            time = BaseLayer.TIME_APPEAR_GUI;
        if (time < BaseLayer.TIME_APPEAR_GUI)
            time = BaseLayer.TIME_APPEAR_GUI;

        this.runAction(cc.sequence(cc.delayTime(time), cc.callFunc(this.functionDelayInit, this)));
    },

    setShowHideAnimate: function (parent, customScale) {
        this._showHideAnimate = true;
        if (parent === undefined) {
            this._bgShowHideAnimate = this._layout;
        }
        else {
            this._bgShowHideAnimate = parent;
        }

        if (customScale === undefined) {
            customScale = false;
        }
        this._currentScaleBg = customScale ? this._scale : 1;

        this._bgShowHideAnimate.setScale(0.5 * this._currentScaleBg);
        this._bgShowHideAnimate.setOpacity(0);
        this._bgShowHideAnimate.runAction(cc.sequence(cc.spawn(new cc.EaseBackOut(cc.scaleTo(0.35, this._currentScaleBg)), cc.fadeIn(0.35)), cc.callFunc(this.finishAnimate, this)));
    },
    setShowHideAnimate9Sprite: function (parent, customScaleX, customScaleY) {
        this._showHideAnimate = true;
        if (parent === undefined) {
            this._bgShowHideAnimate = this._layout;
        }
        else {
            this._bgShowHideAnimate = parent;
        }

        this._bgShowHideAnimate.setScale(0.5 * customScaleX, 0.5 * customScaleY);
        this._bgShowHideAnimate.setOpacity(0);
        this._bgShowHideAnimate.runAction(cc.sequence(cc.spawn(new cc.EaseBackOut(cc.scaleTo(0.35, customScaleX, customScaleY)), cc.fadeIn(0.35)), cc.callFunc(this.finishAnimate, this)));
    },

    onClose: function () {
        if (this._layerColor && this._layerColor.isVisible())
            this._layerColor.runAction(cc.fadeTo(.3, 0));

        if (this._fog && this._fog.isVisible())
            this._fog.runAction(cc.fadeTo(.3, 0));

        if (this._showHideAnimate) {
            this._bgShowHideAnimate.setScale(this._currentScaleBg);
            this._bgShowHideAnimate.runAction(cc.spawn(new cc.EaseBackIn(cc.scaleTo(0.2, 1.2)), cc.fadeOut(0.2)));
            this.runAction(cc.sequence(cc.delayTime(0.2), cc.removeSelf()));
        }
        else {
            this.removeFromParent();
        }
    },

    setBackEnable: function (enable) {
        this._enableBack = enable;
    },

    backKeyPress: function () {
        if (!this._enableBack) return;

        var dialog = sceneMgr.getRunningScene().getMainLayer().getChildByTag(Dialog.TAG);
        if (dialog !== undefined && dialog != null) {
            if (dialog._id !== undefined && dialog._id == "Dialog")
                dialog.onBackDetect();
            return;
        }

        var sp = sceneMgr.getRunningScene().getMainLayer().getChildByTag(Dialog.SUPPORT_TAG);
        if (sp !== undefined && sp != null) {
            if (sp._id !== undefined && sp._id == "SupportGUI")
                sp.onBackDetect();
            return;
        }

        this.onBack();
    },

    checkGuiAvailable: function (tag, id) {
        if (tag === undefined) return false;

        var g = this.getChildByTag(tag);
        if (g !== undefined && g != null) {
            if (id === undefined) return true;
            if (g._id !== undefined && g._id == id) return true;
        }

        return false;
    },

    /************ touch event handler *************/
    onTouchEventHandler: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                this.onButtonTouched(sender, sender.getTag());
                break;
            case ccui.Widget.TOUCH_ENDED:
                this.onButtonRelease(sender, sender.getTag());
                this.playSoundButton(sender.getTag());
                break;
        }
    },

    createSprite: function (parent, name, position, image, texType) {
        if ((typeof image == "undefined") || (image == "")) {
            this[name] = new cc.Sprite();
        }
        else {
            if (cc.spriteFrameCache.getSpriteFrame(image)) {
                this[name] = new cc.Sprite("#" + image);
            }
            else {
                this[name] = new cc.Sprite(image);
            }
        }
        this[name].setPosition(position);
        parent.addChild(this[name]);
    },

    addChildAsProp: function (parent, child, name, addRootProp) {
        parent.addChild(child);
        if(name){
            child.setName(name);
            addRootProp && (this[name] = child);
        }
        return child;
    },

    createProgressBar: function (parent, name, position, size, image, percent, options) {
        var sprite;
        if (cc.spriteFrameCache.getSpriteFrame(image)) {
            sprite = new cc.Sprite("#" + image);
        } else {
            sprite = new cc.Sprite(image);
        }

        /* var sprite = GuiUtil.createSprite(image);
         var uiTimer = new cc.ProgressTimer(sprite);
         uiTimer.setType(cc.ProgressTimer.TYPE_BAR);
         uiTimer.setMidpoint(cc.p(0,0));
         uiTimer.setBarChangeRate(cc.p(1,0));*/

        var uiTimer = new cc.ProgressTimer(sprite);
        uiTimer.setType(cc.ProgressTimer.TYPE_BAR);
        uiTimer.setPosition(position);
        uiTimer.setPercentage(percent);
        uiTimer.setBarChangeRate(cc.p(1, 0));
        uiTimer.setMidpoint({x: 0, y: 0.5});
        // uiTimer.setMidpoint(0.5,0.5);
        if (typeof options === "object") {
            cc.extend(uiTimer, options);
        }
        return this.addChildAsProp(parent, uiTimer, name, (options && options.nestedProp) ? false : true);
    },

    convertPositionByPhotoshop : function(photosopPosition, photoshopContensize, contenSize){
        var initContentSize = contenSize || this.initContentSize || {width : 0, height : 0};
        var returnPosision = {x : 0, y : 0};
        returnPosision.x = photosopPosition.x + photoshopContensize.width/2;
        returnPosision.y = initContentSize.height - photosopPosition.y - photoshopContensize.height/2;
        return returnPosision;
    },

    createSlider: function (parent, name, position, size, percent, images, enableTouch, options) {
        var child = new ccui.Slider();

        images[0] && child.loadBarTexture(images[0], GuiUtility.checkTextureType(images[0]));
        images[1] && child.loadSlidBallTextures(images[1], images[1], images[1], GuiUtility.checkTextureType(images[1]));
        images[2] && child.loadProgressBarTexture(images[2], GuiUtility.checkTextureType(images[2]));
        child.setTouchEnabled(enableTouch);
        child.setPosition(position);
        child.ignoreContentAdaptWithSize(false);
        child.setContentSize(size);
        child.setPercent(percent);
        if (typeof options === "object") {
            cc.extend(child, options);
        }

        return this.addChildAsProp(parent, child, name, (options && options.nestedProp) ? false : true);
    },

    createLayout: function (parent, name, position, image, size, isTouch) {

        this[name] = new ccui.Layout();
        this[name].setAnchorPoint(0.5, 0.5);
        this[name].setContentSize(size);
        this[name].setTouchEnabled(isTouch);
        this[name].setCascadeOpacityEnabled(true);
        if (image != null) {
            if (cc.spriteFrameCache.getSpriteFrame(image)) {
                this[name].setBackGroundImage(image, ccui.Widget.PLIST_TEXTURE);
            } else {
                this[name].setBackGroundImage(image, ccui.Widget.LOCAL_TEXTURE);
            }
        }
        this[name].setPosition(position);

        parent.addChild(this[name]);
    },

    createButton: function (parent, name, tag, position, action, imageNol, imageS, texType, label) {

        //texType = texType || ccui.Widget.LOCAL_TEXTURE;
        if (action === undefined)
            action = true;
        if (tag) {
            tag = parseInt(tag);
        }
        var texType = ccui.Widget.LOCAL_TEXTURE;
        this[name] = new ccui.Button();
        if (imageNol && cc.spriteFrameCache.getSpriteFrame(imageNol)) {
            texType = ccui.Widget.PLIST_TEXTURE;
        }

        imageS = imageS || imageNol;
        if (imageNol != null) {
            this[name].loadTextures(imageNol, imageS, imageS, texType);
        }
        this[name].setPressedActionEnabled(action);
        this[name].setTag(tag);
        this[name].addTouchEventListener(this.onTouchEventHandler, this);
        this[name].setPosition(position);
        this[name].setTitleFontName(fontRobotoBold.fontName);
        this[name].setTitleFontSize(30);
        this[name].setTitleColor(cc.color.WHITE);

        if(label != "" && label != null && label != undefined){
            this.addText(this[name],"lb_" + this[name],cc.p(this[name].width/2,this[name].height/2),label,fontArial.fontName,18);
        }

        if (cc.sys.isNative) {
            this[name].setTitleFontName("res/Font/" + this[name].getTitleFontName() + ".ttf");
        }
        parent.addChild(this[name]);
    },

    createButtonText: function (name, options) {
        return cc.extend({
            titleText: name,
            titleColor: cc.color(255, 255, 255, 1),
            titleFontName: fontRobotoBold.fontName,
            titleFontSize: 24
        }, options);
    },
    createText: function (parent, name, position, string, fontName, fontSize) {
        this[name] = new ccui.Text(string, fontName, fontSize);
        this[name].setPosition(position);
        this[name].setAnchorPoint(0.5, 0.5);
        if (cc.sys.isNative) {
            this[name].setFontName("res/Font/" + this[name].getFontName() + ".ttf");
        }
        if (!cc.sys.isNative) {
            if(Type_Web == "Firefox"){
                this[name].setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM);
            }
        }
        parent.addChild(this[name]);
    },


    convertHexToRgbA: function (hex) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return [(c >> 16) & 255, (c >> 8) & 255, c & 255, 1];
        }
        throw new Error('Bad Hex');
    },

    createEditBox: function (parent, name, position, string, placeHolder, fontName, fontSize, size, backGround, textAlign, maxLength) {
        if (backGround != null) {
            if (cc.spriteFrameCache.getSpriteFrame(backGround))
                this[name] = new cc.EditBox(size, new cc.Scale9Sprite(backGround), new cc.Scale9Sprite(backGround));
            else
                this[name] = new cc.EditBox(size, cc.Scale9Sprite.create(backGround), cc.Scale9Sprite.create(backGround));
        }

        else
            this[name] = new cc.EditBox(size, cc.Scale9Sprite.create(), cc.Scale9Sprite.create());
        this[name].setPosition(position);
        this[name].setPlaceHolder(placeHolder);
        //this[name].setInputMode(cc.EDITBOX_INPUT_MODE_ANY);
        this[name].setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);
        this[name].setFontName(fontName);
        this[name].setFontSize(fontSize);
        this[name].setPlaceholderFontSize(fontSize);
        this[name].setPlaceholderFontName(fontName);

        this[name].setPlaceholderFontColor(cc.color.GRAY);
        this[name].setFontColor(cc.color.WHITE);
        this[name].setDelegate(this);
        if (textAlign != null && !cc.sys.isNative)
            this[name].setTextAlign(textAlign);
        this[name].setAnchorPoint(0.5, 0.5);
        this[name].setMaxLength(maxLength);
        /*if(cc.sys.isNative)
         {
         this[name].setFontName("res/Font/"+ this[name].getFontName()+".ttf");
         }*/
        parent.addChild(this[name]);
    },
    createImage: function (parent, name, position, image, size) {
        if (image && cc.spriteFrameCache.getSpriteFrame(image)) {
            this[name] = new ccui.ImageView(image, ccui.Widget.PLIST_TEXTURE);
        } else {
            if(image)
                this[name] = new ccui.ImageView(image, ccui.Widget.LOCAL_TEXTURE);
            else
                this[name] = new ccui.ImageView();
        }

        this[name].setScale9Enabled(true);
        this[name].setPosition(position);
        this[name].setAnchorPoint(0.5, 0.5);
        this[name].setContentSize(size);
        this[name].setCascadeOpacityEnabled(true);
        parent.addChild(this[name]);
    },

    createCheckBox: function (parent, name, position, isSelect, backGround, backGroundSelected, cross, backGroundDisabled, frontCrossDisabled, texType) {
        this[name] = new ccui.CheckBox();
        if (cc.spriteFrameCache.getSpriteFrame(backGround) || texType == ccui.Widget.PLIST_TEXTURE)
            this[name].loadTextures(backGround, backGroundSelected, cross, backGroundDisabled, frontCrossDisabled, ccui.Widget.PLIST_TEXTURE);
        else
            this[name].loadTextures(backGround, backGroundSelected, cross, backGroundDisabled, frontCrossDisabled, ccui.Widget.LOCAL_TEXTURE);
        this[name].setPosition(position);
        this[name].setSelected(isSelect);
        parent.addChild(this[name]);
    },

    createTextBM: function (parent, name, position, bgImage, text, font) {
        var imgBG = null;
        if (bgImage != null) {
            if (cc.spriteFrameCache.getSpriteFrame(bgImage)) {
                imgBG = new ccui.ImageView(bgImage, ccui.Widget.PLIST_TEXTURE);
            } else {
                imgBG = new ccui.ImageView(bgImage, ccui.Widget.LOCAL_TEXTURE);
            }

            imgBG.setScale9Enabled(true);
            imgBG.setPosition(position);
            imgBG.setAnchorPoint(0.5, 0.5);
            parent.addChild(imgBG);
        }
        this[name] = new cc.LabelBMFont(text, font);
        this[name].setPosition(position);
        this[name].setAnchorPoint(0.5, 0.5);
        parent.addChild(this[name]);
        if (imgBG != null) {
            imgBG.setContentSize(this[name].getContentSize().width + 50, this[name].getContentSize().height + 10);
        }
    },

    createListView: function (parent, name, position, size) {
        this[name] = new ccui.ListView();
        this[name].setDirection(ccui.ScrollView.DIR_VERTICAL);
        this[name].setTouchEnabled(true);
        this[name].setBounceEnabled(true);
        this[name].setClippingEnabled(true);
        this[name].setContentSize(size);
        this[name].setPosition(position);
        this[name].setAnchorPoint(cc.p(0.5, 0.5));
        parent.addChild(this[name]);
    },

    ////////////////////////////////////////////

    /******* functions need override  *******/
    customizeGUI: function () {
        /*    override meeeeeeeeee  */
    },

    onButtonRelease: function (button, id) {
        /*    override meeeeeeeeee  */
    },

    onButtonTouched: function (button, id) {
        /*    override meeeeeeeeee  */
    },

    onUpdateGUI: function (data) {

    },

    initGUI: function () {

    },

    functionDelayInit: function () {

    },

    finishAnimate: function () {

    },

    onBack: function () {

    },
    playSoundButton: function (id) {
        //gameSound.playClick();
    },

    //////////////////////////////////////////////////////
});
BaseLayer.TIME_APPEAR_GUI = 0.35;


