var Center_Ring = BaseLayer.extend(
    {
        ctor: function () {
            this._super();
            return true;
        },
        customizeGUI: function () {
            cc.log("Center_Ring");
        },

        onEnter: function(){
            this._super();

        },
    }
)



var centerRing =  new Center_Ring();

centerRing.INDEX_SLOT = 1;
centerRing.INDEX_TAI_XIU = 2;
centerRing.INDEX_MINI_POKER = 3;
centerRing.INDEX_MINI_SLOT = 4;
centerRing.INDEX_MINI_CAO_THAP = 5;
centerRing.INDEX_BAU_CUA = 6;
centerRing.INDEX_VQMM = 7;
centerRing.INDEX_CENTER_RING = 8;

centerRing.TAI = 0;
centerRing.XIU = 1;