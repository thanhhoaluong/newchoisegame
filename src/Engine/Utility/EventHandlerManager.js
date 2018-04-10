
var TimeOutHandler = cc.Class.extend({
    ctor: function(name, func){
        this.name = name;
        this.func = func;
        this.needDelete = false;
    },

    setTimeOut: function(time){
        this.timeOut = time;
    }
});


var EventHandlerManager = cc.Node.extend({
    ctor: function(){
        this._super();
        this.currentTime = 0;
        this.listHandler = [];
    },

    onEnter: function(){
        cc.Node.prototype.onEnter.call(this);
        this.currentTime = 0;
        this.scheduleUpdate();
    },



    update: function(dt){
        this.currentTime += dt;
        for (var i = 0; i < this.listHandler.length; i++) {
            var val = this.listHandler[i];

            if(val.timeOut < this.currentTime - val.startTime){
                cc.log("time out " + val.name + " " + this.currentTime);
                this.listHandler.splice(i, 1);
                val.func();
                return;
            }
        }
    },

    addHandler: function(name, func){
        if(!this.getHandler(name)){
            var handler = new TimeOutHandler(name, func);
            handler.startTime = this.currentTime;
            this.listHandler.push(handler);
        }
    },

    removeHandler: function(name){
        for(var i = 0; i < this.listHandler.length; i++){
            if(this.listHandler[i].name == name){
                this.listHandler.splice(i, 1);
                return;
            }
        }
    },

    getHandler: function(name){
        for(var i = 0; i < this.listHandler.length; i++){
            if(this.listHandler[i].name == name){
                return this.listHandler[i];
            }
        }
        return null;
    }

});

var eventHandleInstance = null;

EventHandlerManager.getInstance = function(){
    if(eventHandleInstance == null){
        eventHandleInstance = new EventHandlerManager();
        GameScene.addChild(eventHandleInstance);
        eventHandleInstance.retain();
    }
    return eventHandleInstance;
}

