/**
 * Created by Admin on 9/21/2016.
 */

var maxZorderMiniGame = 0;
var arrayBackGroudMiniGame = [];
var ischeckPosition = false;
var MiniGameLayer = BaseLayer.extend(
    {
        ctor: function () {
            maxZorderMiniGame++;
            this._super();
            this.pLayerMaster = null;
            this.setLocalZOrder(maxZorderMiniGame);
            //this.commonImagePath = "res/Minigame/ImageChung/";
            //cc.spriteFrameCache.addSpriteFrames("res/Minigame/ImageChung/PlistImageChung.plist");
        },

        addLayerMaster: function (master) {
            this.pLayerMaster = master;
            this.pLayerMaster.setAnchorPoint(cc.p(0.5, 0.5));
            arrayBackGroudMiniGame.push(this.pLayerMaster);

            var that = this;
            var listener1 = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                onTouchBegan: function (touch, event) {
                    var target = event.getCurrentTarget();
                    var locationInNode = target.convertToNodeSpace(touch.getLocation());
                    var s = target.getContentSize();
                    var rect = cc.rect(0, 0, s.width, s.height);
                    if (cc.rectContainsPoint(rect, locationInNode)) {
                        {
                            that.reOpenLayer1();
                        }
                        return true;
                    }
                    return false;
                },
                onTouchMoved: function (touch, event) {
                    //Move the position of current button sprite
                    var target = event.getCurrentTarget();
                    var delta = touch.getDelta();
                    target.x += delta.x;
                    target.y += delta.y;

                    if (!cc.sys.isNative) {
                        if (taixiu != null) {
                            if (target == taixiu.pn_taixiu) {
                                //if (txSoiCau != null) {
                                //    txSoiCau.setLocalZOrder(maxZorderMiniGame - 1);
                                //    txSoiCau.pSoiCauTaiXiu.x = target.x;
                                //    txSoiCau.pSoiCauTaiXiu.y = target.y;
                                //}
                            }
                        }
                    }
                },
                onTouchEnded: function (touch, event) {
                    var target = event.getCurrentTarget();
                    var endX = target.getPosition().x;
                    var endY = target.getPosition().y;
                    if (cc.sys.isNative) {
                        if (endX < 0) {
                            target.x = 0;
                        }
                        if (endX > 1280) {
                            target.x = 1280;
                        }
                        if (endY < 0) {
                            target.y = 0;
                        }
                        if (endY > 720) {
                            target.y = 720;
                        }
                    } else {
                        if (endX < -320) {
                            target.x = -320;
                        }
                        if (endX > 1600) {
                            target.x = 1600;
                        }
                        if (endY < -220) {
                            target.y = -220;
                        }
                        if (endY > 760) {
                            target.y = 760;
                        }

                    }

                }
            });

            cc.eventManager.addListener(listener1, this.pLayerMaster);
        },
        createDraggableLayout: function () {
            this._layout = new ccui.Layout();
            this._layout.setContentSize(cc.size(1280, 720));
            this._layout.setAnchorPoint(0, 0);
            this.addChild(this._layout);
            return this._layout;
        },
        checkPosition: function () {
            for (var i = 0; i < arrayBackGroudMiniGame.length; i++) {
                var po = arrayBackGroudMiniGame[i].getPosition();
                if (po.x < 530 && po.y < 365) {
                    ischeckPosition = true;
                    return true;
                }
                if (arrayBackGroudMiniGame[i] == taiXiu.bg_tai_xiu && txSoiCau) {
                    if (po.x < 1050 && po.y < 365) {
                        ischeckPosition = true;
                        return true;
                    }
                }
                ischeckPosition = false;
            }
            return false;
        },
        reOpenLayer1: function (layer) {
            if (this.getLocalZOrder() == maxZorderMiniGame) {

            } else {

                maxZorderMiniGame++;
                //Minigame.setLocalZOrder(maxZorderMiniGame + 1);

                this.setLocalZOrder(maxZorderMiniGame);

            }
        },

        reOpenLayer: function (layer) {

            if (this.getLocalZOrder() == maxZorderMiniGame) {

            } else {

                maxZorderMiniGame++;
                //Minigame.setLocalZOrder(maxZorderMiniGame + 1);

                this.setLocalZOrder(maxZorderMiniGame);


            }
        },
        closeLayer: function (layer) {
            if (!cc.sys.isNative) {
                for (var i = 0; i < arrayBackGroudMiniGame.length; i++) {
                    if (arrayBackGroudMiniGame[i] == layer) {
                        arrayBackGroudMiniGame.splice(i, 1);
                    }
                }
            }
        }
    }
);

//MiniGameBaseLayer.maxZorder = 0;