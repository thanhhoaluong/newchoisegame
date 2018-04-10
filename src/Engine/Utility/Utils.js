/**
 * Created by HOANGNGUYEN on 7/25/2016.
 */
    var useTCP = false;
    var addMD5 = function (url,real) {
        var obj = url.substr(4,url.length-4);
        if(g_hash_resources[obj])
        {
            real += "?h=" + g_hash_resources[obj];
            real += "&v=" + version_res;
        }
        return real;
    };
    if(!cc.sys.isNative) {
        var engine = engine || {};
        var ccui = ccui || {};
        var cc = cc || {};
        cc.RED = {r: 255, g: 0, b: 0};
        cc.GREEN = {r: 0, g: 255, b: 0};
        cc.BLUE = {r: 0, g: 0, b: 255};
        cc.BLACK = {r: 0, g: 0, b: 0};
        cc.WHITE = {r: 255, g: 255, b: 255};
        cc.YELLOW = {r: 255, g: 255, b: 0};
        ccui.Helper = ccui.helper;


        engine.AsyncDownloader = cc.Class.extend({

            ctor: function () {
                this._downloading = false;
                this._need_quit = false;
                this._callback = null;
            },
            initDownload: function (url, filePath, callback) {
                this._url = url;
                this.filePath = filePath;
                this._callback = callback;
            },
            startDownload: function () {
                this._need_quit = false;
                this.xhr = cc.loader.getXMLHttpRequest();
                var self = this;
                this.xhr.onload = function (e) {
                    if (this.status == 200) {
                        var buffer = this.response;
                        var bb = new Blob([buffer]);
                        var fileReader = new FileReader();

                    }
                };

                this.xhr.open("GET", this._url, true);
                this.xhr.responseType = "arraybuffer";

                this.xhr.send();
            },
            setCallback: function (callback) {
                this._callback = callback;
            },
            progressDownloaded: function () {

            }
        })

        engine.AsyncDownloader.create = function (url, fileName, callback) {
            var ret = new engine.AsyncDownloader();
            ret.initDownload(url, fileName, callback);
            return ret;
        }

        // UI avatar
        engine.UIAvatar = ccui.Widget.extend({
            ctor: function () {
                this._super();
                this._img = null;
                this._downloading = false;
            },
            initUI: function (id, url, defaultImg) {
                if (!url) {
                    defaultImg = id;
                }
                else {
                    this._id = id;
                    this._url = url;
                    this._defaultImg = defaultImg;
                }
                this._img = new cc.Sprite(defaultImg);
                this._img.oldSize = this._img.getContentSize();

                this.addChild(this._img);
            },
            asyncExecuteWithUrl: function (id, url) {
                if (url.length < 4 || (url.substring(0, 4) != "http"))
                    return;
                this._id = id;
                this._url = url;
                var self = this;

                if (!this._downloading) {
                    //cc.textureCache.addImageAsync(url,function(texture){
                    //    if(texture instanceof cc.Texture2D)
                    //    {
                    //        self._img.setTexture(texture);
                    //        var a = self._img.getContentSize();
                    //        self._img.setScale(self._img.oldSize.width/ a.width,self._img.oldSize.height/ a.height);
                    //        self._downloading = false;
                    //    }
                    //},this);


                    cc.loader.loadImg(url, {isCrossOrigin: false}, function (err, img) {
                        self.doneDownload(img);
                    }.bind(this));

                    this._downloading = true;

                }

            },
            doneDownload: function (imgData) {
                var texture2d = new cc.Texture2D();
                texture2d.initWithElement(imgData);
                texture2d.handleLoadedTexture();
                var self = this;

                self._img.setTexture(texture2d);
                var a = self._img.getContentSize();
                self._img.setScale(self._img.oldSize.width / a.width, self._img.oldSize.height / a.height);
                self._downloading = false;

            },
            setDefaultImage: function () {

            },
            initUIMask: function (defaultImg, pathMask, extraImg) {
                this._id = "";
                this._defaultImg = defaultImg;
                this._img = new cc.Sprite(defaultImg);
                this._img.oldSize = this._img.getContentSize();

                var mCliper = new cc.ClippingNode();
                mCliper.retain();
                mCliper.width = this._img.getContentSize().width;
                mCliper.height = this._img.getContentSize().height;

                mCliper.setStencil(new cc.Sprite(defaultImg));
                mCliper.setAnchorPoint(cc.p(0.0, 0.0));

                var holesClipper = new cc.ClippingNode();
                holesClipper.inverted = false;
                holesClipper.setAlphaThreshold(0.1);
                holesClipper.addChild(this._img);
                var holeStencil = new cc.Sprite(pathMask);
                holeStencil.setPosition(cc.p(0, 0));
                holesClipper.setStencil(holeStencil);

                mCliper.addChild(holesClipper);
                this.addChild(mCliper, -1, -1);

                if (extraImg != "") {
                    this.addChild(new cc.Sprite(extraImg), 1);
                }
            }
        })

        engine.UIAvatar.create = function (id, url, defaultImg) {
            var ret = new engine.UIAvatar();
            ret.initUI(id, url, defaultImg);

            return ret;
        }

        engine.UIAvatar.createWithMask = function (defaultImg, pathMask, extraImg) {
            var ret = new engine.UIAvatar();
            ret.initUIMask(defaultImg, pathMask, extraImg);

            return ret;
        }

        // effect
        engine.TimeProgressEffect = cc.ProgressFromTo.extend({
            _timer: null,
            startPercent: 0,
            totalTime: 0,
            _nen: null,
            ctor: function (timer, duration, percentFrom) {
                cc.ProgressFromTo.prototype.ctor.call(timer, duration, percentFrom);
            },

            setNen: function (nen) {
                this._nen = nen;
            },

            update: function (time) {
                cc.ProgressFromTo.prototype.update.call(time);
                if (this._timer)
                {
                    var checkTime = (1 - this.startPercent) + time * this.startPercent;
                    if (checkTime <= .5)
                    {
                        this._timer._sprite.setColor({r:Math.floor(checkTime * 510),g:255,b:0});
                    }
                    else
                    {
                        this._timer._sprite.setColor({r:255,g:Math.floor(255 - (checkTime - .5) * 510),b:0});
                    }

                    if (this._nen)
                    {
                        this._nen.setOpacity(Math.floor((1 - time) * 255));
                        this._nen.setColor(this._timer.getColor());
                    }
                }
                this._super(time);

            }
        })

        engine.TimeProgressEffect.create = function (timer, duration, percentFrom) {
            //var ret = new engine.TimeProgressEffect(timer,percentFrom * 100,0);
            //ret._timer = timer;
            //ret.startPercent = percentFrom;
            //ret._duration = duration;
            //ret._totalTime = duration / percentFrom;
            //
            //var checkMau = 1 - percentFrom;
            //if (checkMau <= .5)
            //{
            //    ret._timer.setColor({r:Math.floor(checkMau * 510),g:255,b:0});
            //}
            //else
            //{
            //    ret._timer.setColor({r:255,g:Math.floor(255 - (checkMau - .5) * 510),b:0});
            //}
            //if (ret._nen)
            //{
            //    ret._nen.setOpacity(255);
            //    ret._nen.setColor(ret._timer.getColor());
            //}
            //
            //return ret;
            var _timeEff = new engine.TimeProgressEffect();
            _timeEff.initWithDuration(duration, percentFrom * 100, 0);
            _timeEff._timer = timer;
            _timeEff.startPercent = percentFrom;
            _timeEff.duration = duration;
            _timeEff.totalTime = duration / percentFrom;
            return _timeEff;
        }

        engine.CircleMove = cc.ActionInterval.extend({
            target: null,
            ctor: function () {
                this._super();
            },
            update: function (time) {
                var winSize = {width:1280,height:720}
                var MATH_PIOVER2 = Math.PI / 2;
                var alpha = MATH_PIOVER2 + time * 2 * MATH_PIOVER2;
                if (time < 0.35) {
                    this.target.setPositionX(winSize.width / 2 - Math.cos(alpha) * this.radius - this.radius);
                }
                else if ((time >= 0.35) && (time < 0.65)) {
                    var x = winSize.width / 2 - Math.cos(MATH_PIOVER2 + 0.35 * 2 * MATH_PIOVER2) * this.radius - this.radius;
                    var x2 = winSize.width / 2 + Math.cos(MATH_PIOVER2 + 0.65 * 2 * MATH_PIOVER2) * this.radius + this.radius;
                    var dx = Math.abs(x2 - x);
                    this.target.setPositionX(x + (dx / 0.3) * (time - 0.35));
                } else {
                    this.target.setPositionX(winSize.width / 2 + this.radius + Math.cos(alpha) * this.radius);
                }
                if(time <= 0.001 || time >= .999)
                {
                    this.target.setVisible(false)
                }
                else
                {
                    this.target.setVisible(true)
                }

            },
            startWithTarget: function (target) {
                this._super(target);
                this.target = target;
                target.setPositionX(cc.director.getWinSize().width / 2 - this.radius);
            },
            initWithDuration: function (duration, radius) {
                if (this._super(duration)) {
                    this.radius = radius;
                }
            }
        })

        engine.CircleMove.create = function (duration, radius ) {
            var pRet = new engine.CircleMove();
            pRet.initWithDuration(duration, radius);

            return pRet;
        }

        engine.MoveCircle = cc.ActionInterval.extend({
            startPos: null,
            radius: null,
            alphaBegin: null,
            alphaEnd: null,
            target: null,
            ctor: function () {
                this._super();
            },
            initWithDuration: function (duration, radius, alphaBegin, alphaEnd) {
                if (this._super(duration)) {
                    this.radius = radius;
                    this.alphaBegin = alphaBegin;
                    this.alphaEnd = alphaEnd;
                }
            },
            startWithTarget: function (target) {
                this._super(target);
                this.startPos = target.getPosition();
                this._target = target;
                target.setPosition(this.startPos.x + this.radius * Math.sin(this.alphaBegin), this.startPos.y + this.radius * Math.cos(this.alphaBegin));
            },
            update: function (time) {
                var alpha = (this.alphaEnd - this.alphaBegin) * time + this.alphaBegin;
                this._target.setPosition(this.startPos.x + this.radius * Math.sin(alpha), this.startPos.y + this.radius * Math.cos(alpha));
            }

        })

        engine.MoveCircle.create = function (duration, radius, alphaBegin, alphaEnd) {
            var pRet = new engine.MoveCircle();
            pRet.initWithDuration(duration, radius, alphaBegin, alphaEnd);
            return pRet;
        }

        engine.Handler = cc.Class.extend({
            ctor: function (id) {
                this.id = id;
                this.needTimeOut = false;
                this._timeout = 0;
                this._timeElapsed = 0;
                this.jData = "";
                this.callback = null;
                this.needStop = false;
            },
            stop: function (data) {
                this.jData = data;
                if (this.callback) {
                    this.callback.call(data);
                }
            },
            setTimeOut: function (time, needTOut) {
                this._timeout = time;
                this.needTimeOut = needTOut;
            }
        })

        engine.HandlerManager = cc.Class.extend({
            ctor: function () {
                this.handlers = [];
            },

            update: function (dt) {
                // dragonBones
                //dragonBones.animation.WorldClock.clock.advanceTime(dt);

                var needRemoves = [];
                for (var i = 0; i < this.handlers.length; i++) {
                    var obj = this.handlers[i];
                    if (obj["handler"].needTimeOut && !obj["handler"].needStop) {
                        obj["handler"]._timeElapsed += dt;
                        if (obj["handler"]._timeElapsed > obj["handler"]._timeout) {
                            obj["handler"].callback.call(obj["handler"].jData);
                            needRemoves.push(obj["id"]);
                            continue;
                        }
                    }
                    if (obj["handler"].needStop) {
                        if (obj["handler"].callback) {
                            obj["handler"].callback.call(obj["handler"].jData);
                            needRemoves.push(obj["id"]);
                        }
                    }
                }
                for (var i = 0; i < needRemoves.length; i++) {
                    this.forceRemoveHandler(needRemoves[i]);
                }
            },
            addHandler: function (id, callback) {
                cc.log("Add handler web: " + id);
                var handler = new engine.Handler(id);
                handler.callback = callback;
                var exist = false;
                for (var i = 0; i < this.handlers.length; i++) {
                    var obj = this.handlers[i];
                    if (obj["id"] == id) {
                        exist = true;
                        break;
                    }
                }
                if (exist) {
                    cc.log("this handler :" + id + "has in handler manager , return ...");
                }
                else {
                    var object = {};
                    object["id"] = id;
                    object["handler"] = handler;
                    this.handlers.push(object);
                }
            },
            getHandler: function (id) {
                for (var i = 0; i < this.handlers.length; i++) {
                    var obj = this.handlers[i];
                    if (obj["id"] == id) {
                        return obj["handler"];
                    }
                }
                return null;
            },
            forceRemoveHandler: function (id) {
                var idx = -1;
                for (var i = 0; i < this.handlers.length; i++) {
                    var obj = this.handlers[i];
                    if (obj["id"] == id) {
                        idx = i;
                        break;
                    }
                }
                if (idx != -1) {
                    this.handlers.splice(idx, 1);
                }
            }
        })

        engine.HandlerManager.instance = null;
        engine.HandlerManager.firstInit = false;

        engine.HandlerManager.getInstance = function () {
            if (!engine.HandlerManager.firstInit) {
                engine.HandlerManager.firstInit = true;
                engine.HandlerManager.instance = new engine.HandlerManager();
            }
            return engine.HandlerManager.instance;
        }
// dragonbones
        var getJSONData = function (filename) {
            return JSON.parse(cc.loader._loadTxtSync(filename));
        }

    }
