/**
 * Created by HOANGNGUYEN on 8/2/2015.
 */

var Timer = cc.Class.extend({
    _id: "",
    _time: 0,
    _timeEslapsed: 0,
    _callback_func: null,
    _target: null,
    ctor: function(id,time){
        this._super();
        this._time = time;
    },
    set: function(target,callback){
        this._target = target;
        this._callback_func = callback;
    },
    execWhenFinish: function(){
        if(this._callback_func != null){
            this._callback_func.call(this._target);
        }
    }
})

var TimerManager = cc.Node.extend({
    _timers: [],
    addTimer: function(timer){
        for(var i=0;i<this._timers.length;i++)
        {
            if(this._timers[i]._id == timer._id)
            {
                cc.log("timer existed");
                return;
            }
        }
        this._timers.push(timer);

    },
    forceRemoveHandler: function(id){

    },
    update: function(dt){
        //cc.log("aaa");

    }
})

TimerManager._timerManagerInstance = null;
TimerManager._firstInit = true;

TimerManager.getInstatnce = function(){
    if(TimerManager._firstInit){
        TimerManager._timerManagerInstance = new TimerManager();
        TimerManager._firstInit = false;
        TimerManager._timerManagerInstance.retain();
        TimerManager._timerManagerInstance.scheduleUpdate();
    }
    return TimerManager._timerManagerInstance;
}