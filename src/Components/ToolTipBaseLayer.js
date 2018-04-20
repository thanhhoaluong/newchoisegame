var ToolTipBaseLayer = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            this.pLayer = null;
            this.arrayChild = null;
            this.data = null;
            this.layout_tool = null;
        },

        addToolTipTable: function (layer, arrayChild, data, layout_tool) {
            this.pLayer = layer;
            this.pLayer.setAnchorPoint(cc.p(0.5, 0.5));
            this.data = data;
            this.layout_tool = layout_tool;
            this.arrayChild = arrayChild;
            var numchild = this.arrayChild.length;
            cc.log(" numchild " + numchild);
            //arrayBackGroudMiniGame.push(this.pLayer);

            var that = this;
            if (cc.sys.capabilities.hasOwnProperty('mouse')){
                this.ListenToolTip = cc.EventListener.create({
                    event: cc.EventListener.MOUSE,
                    onMouseDown: function (event) {
                    },
                    onMouseMove: function (event) {
                        var pos = event.getLocation();
                        target = event.getCurrentTarget();
                        var locationInNode = target.convertToNodeSpace(event.getLocation());
                        var s = target.getContentSize();
                        //cc.log("Mouse Moved: " + locationInNode.x);
                        for (var i = 0; i < numchild; i++) {
                            if (cc.rectContainsPoint(cc.rect(that.arrayChild[i].getPosition().x - 14, that.arrayChild[i].getPosition().y - 14, 28, 28), locationInNode)){
                                //cc.log("show phien");
                                that.showToolTip(that.arrayChild[i].getName());
                                break;
                            } else {
                                //cc.log("ngoai");
                                that.closeTooltip();
                            }
                        }
                    },
                    onMouseUp: function (event) {
                    }
                });
            }
            if ('mouse' in cc.sys.capabilities) {
                cc.eventManager.addListener(this.ListenToolTip, this.pLayer);
            }
        },

        showToolTip : function(tag){
            //cc.log("tag = " + tag);
            this.layout_tool.setPosition(cc.p(this.arrayChild[tag].getPositionX(),this.arrayChild[tag].getPositionY() - 30));
            this.layout_tool.setVisible(true);

            var subtext = "Phiên:#";
            subtext = subtext + this.data[tag].id + "\n";

            if(this.data[tag].result >= 11)
                subtext = subtext + "TÀI ";
            else
                subtext = subtext + "XỈU "
            subtext = subtext + "(" + this.data[tag].xucxac1 + "," + this.data[tag].xucxac2 + "," + this.data[tag].xucxac3 + ")";
            var lbale = this.layout_tool.getChildByName("lb_tooltip");
            lbale.setString(subtext);
        },

        closeTooltip : function(){
            this.layout_tool.setVisible(false);
        },
    })