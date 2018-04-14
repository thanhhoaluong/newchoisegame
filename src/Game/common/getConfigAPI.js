var BASE_URL = "http://35.198.201.207";
var PORT = "8686";

var MODULE_PORTAL = 1;
var MODULE_TAIXIU = 100;
var MODULE_SLOT = 200;

var urlGetConfig = function(){
    return BASE_URL + ":"+ PORT + "/api/config";
}

function findSocket (MODULE){
    for(var i = 0; i < configMyGame.module.length; i++){
        if(MODULE == configMyGame.module[i].i){
            var serverID = configMyGame.module[i].sId;
            break;
        }
    }
}