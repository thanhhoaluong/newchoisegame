var GuiUtil = GuiUtil || {};

GuiUtil.createSprite = function (name, rect) {

    if ((typeof name == "undefined") || (name == "")) {
        return new cc.Sprite();
    }
    else {
        if (cc.spriteFrameCache.getSpriteFrame(name)) {
            return new cc.Sprite("#" + name, rect);
        }
        else {
            return new cc.Sprite(name);
        }
    }
};

GuiUtil.changeImage = function (image, name) {
    image.setScale9Enabled(false);
    image.loadTexture(name, GuiUtil.checkTextureType(name));
};

GuiUtil.changeSprite = function (sprite, name) {
    if (cc.spriteFrameCache.getSpriteFrame(name)) {
        sprite.setSpriteFrame(name);
    }
    else {
        sprite.setTexture(name);
    }
};
GuiUtil.createImage = function (name, size) {
    var imgView = null;
    if (cc.spriteFrameCache.getSpriteFrame(name)) {
        cc.log("true");
        imgView = new ccui.ImageView(name, ccui.Widget.PLIST_TEXTURE);
    }
    else {
        cc.log("false");
        imgView = new ccui.ImageView(name, ccui.Widget.LOCAL_TEXTURE);
    }
    imgView.setScale9Enabled(true);
    imgView.setAnchorPoint(0.5, 0.5);
    imgView.setContentSize(size);
    return imgView;
};
//GuiUtil.changeButtonBg = function(image,name)

GuiUtil.changeSpriteWithTexture = function (sprite, texture) {
    sprite.setTexture(texture);
};

GuiUtil.initSprite = function (sprite, image, rect) {
    if (cc.spriteFrameCache.getSpriteFrame(image)) {
        sprite.initWithTexture(image, rect);
    }
    else {
        sprite.initWithFile(image, rect);
    }
};

GuiUtil.createSimpleButton = function (normal, texType) {
    texType = texType || ccui.Widget.LOCAL_TEXTURE;
    if (cc.spriteFrameCache.getSpriteFrame(normal)) {
        texType = ccui.Widget.PLIST_TEXTURE;
    }

    var btnKeep = new ccui.Button();
    btnKeep.loadTextureNormal(normal, texType);
    return btnKeep;
};

GuiUtil.getWinSize = function () {
    if (!cc.sys.isNative) {
        return cc.size(1280, 720);
    }
    else {
        return cc.winSize;
    }
};

GuiUtil.getCardResource = function (cardId) {
    var number = 52;
    if (0 <= cardId && cardId < 4) number = 48 + cardId;
    else if (4 <= cardId && cardId <= 51) number = cardId - 4;
    return "res/CardGame/LaBai/labai_" + number + ".png";
};

GuiUtil.checkTextureType = function (image) {
    return image && cc.spriteFrameCache.getSpriteFrame(image) ? ccui.Widget.PLIST_TEXTURE : ccui.Widget.LOCAL_TEXTURE;
};

GuiUtil.loadButtonTextures = function (target, image, image1, image2) {
    target.loadTextures(image, image1, image2, GuiUtil.checkTextureType(image));
};

GuiUtil.createButton = function (image, image1, image2) {
    if (!image) return new ccui.Button();
    if (image instanceof Array) return new ccui.Button(image[0], image[1] || image[0], image[2] || image[0], GuiUtil.checkTextureType(image[0]));
    return new ccui.Button(image, image1 || image, image2 || image, GuiUtil.checkTextureType(image));
};

GuiUtil.loadTextureNormal = function (target, image) {
    target.loadTextureNormal(image, GuiUtil.checkTextureType(image));
};

GuiUtil.loadTexturePressed = function (target, image) {
    target.loadTexturePressed(image, GuiUtil.checkTextureType(image));
};

GuiUtil.loadTextureDisabled = function (target, image) {
    target.loadTextureDisabled(image, GuiUtil.checkTextureType(image));
};

GuiUtil.setBackGroundColor = function (layout, color, opacity) {
    layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
    layout.setBackGroundColor(color);
    layout.setBackGroundColorOpacity(opacity);
    return layout;
};

GuiUtil.clearEffect = function () {
    var gameGui = SceneMgr.getInstance().getRunningScene().getMainLayer();
    if (gameGui != null && gameGui != undefined) {
        if (gameGui.effectLayer) {
            gameGui.effectLayer.clear();
        }
        gameGui.stopAllActions();
    }
};

GuiUtil.showWaitingGui = function () {
    // var waitingGui = gv.guiMgr.getGuiById(GuiId.WAITING_GUI);
    // if(waitingGui == null){
    //     gv.guiMgr.addGui(new GuiWaiting(), GuiId.WAITING_GUI, LayerId.LAYER_LOADING);
    // }
};

GuiUtil.hideWaitingGui = function () {
    // var waitingGui = gv.guiMgr.getGuiById(GuiId.WAITING_GUI);
    // if(waitingGui!=null)
    //     waitingGui.destroy();
};
GuiUtil.color = function (r, g, b, a) {
    if (typeof r == "string" && cc.sys.isNative) {
        return cc.color.apply(this, GuiUtil.convertHexToRgbA(r));
    }
    return cc.color(r, g, b, a);
}

GuiUtil.getFontNameButton = function (fontname) {
    fontname = cc.sys.isNative ? "res/Font/" + fontname + ".ttf" : fontname;
    return fontname;
}

GuiUtil.convertHexToRgbA = function (hex) {
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
};

GuiUtil.textColor = {
    textNormal: GuiUtil.color("#60401b"),
    description: GuiUtil.color("#feeaca")
};

GuiUtil.removeTextureList = function () {
    var resourceList = cc.extend([], arguments);
    resourceList.forEach(function (resources) {
        if (resources instanceof Array) {
            resources.forEach(function (fileName) {
                if (fileName.indexOf(".png") != -1)
                    cc.textureCache.removeTextureForKey(fileName);
            });
        } else if (typeof resources === "string" && resources.indexOf(".png") != -1) {
            cc.textureCache.removeTextureForKey(resources);
        }
    });
};

GuiUtil.addCicleText = function (parent, text, radius, fontName, fontSize, color, defaultWidthText) {
    var textArray = text.split("");
    var layout = new BaseLayer();
    parent.addChild(layout);
    var totalWidth = 0;
    var _defaultWidthText = defaultWidthText || 104;

    function addText(character, index) {
        var item = layout.addLayoutStructure(layout,index,cc.p(0,0), null, cc.size(0,radius));
        var text = layout.addTextStructure(item,item,cc.p(0,radius), character, fontName, fontSize, color);
        var width = text.getBoundingBox().width || _defaultWidthText;
        totalWidth += width;
        item._textWidth = width;
        return item;
    }

    var displayItemArray = textArray.map(addText);

    var totalAngle = totalWidth / (radius * 2 * Math.PI) * 360;
    var startRotate = -totalAngle / 2;
    var currentWidth = 0;

    function setRotate(item) {
        var angle = startRotate + (currentWidth +  item._textWidth/2)/ totalWidth * totalAngle;
        currentWidth += item._textWidth;
        item.setAnchorPoint(0,0);
        item.setRotation(angle);
    }

    displayItemArray.forEach(setRotate);
    return layout;
}
