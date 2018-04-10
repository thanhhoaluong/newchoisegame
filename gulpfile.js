/**
 * Created by Admin on 7/5/2017.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var fs = require('fs');
var path = require('path');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var del = require('del');
var runSequence = require('run-sequence');
var glob = require("glob")


var source = "src";
var destination = "./dist/src/";
var baseToPath = "C:/xampp/htdocs/app/";
var baseToPathRes = "res/";
var baseToPathSrc = "src/";

gulp.task('build.js', function () {
    var target = gulp.src(projectDev.jsList)
        .pipe(babel());
    return target
        .pipe(concat('main.min.js'))
        // .pipe(uglify({preserveComments: 'some'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('clear', function (file) {
    return del("dist");
});

gulp.task('copy.js', function () {
    return gulp.src(source + "/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest(destination));
});


gulp.task('create.project.json', function () {
    var projectDev = require('./project-dev');
    var newFile = Object.assign({}, projectDev);
    newFile.jsList = projectDev.jsList.map(function (item, index) {
        return "dist/" + item;
    });

    return fs.writeFile("project.json", JSON.stringify(newFile), function (err) {
        if (err) return console.log(err);
    });
});

gulp.task('watch', function () {
    gulp.watch(projectDev.jsList).on('change', function (file) {
        console.log("file.path change", file.path);
        return gulp.src(file.path, {base: source})
            .pipe(babel())
            .pipe(gulp.dest(destination));
    });
});

gulp.task('run:dev', function (callback) {
    runSequence(
        'clear',
        'copy.js',
        'create.project.json',
        'watch'
    );
});

gulp.task('create.copy.resource', function (callback) {
    runSequence(
        'create.resource',
        'copy.resource'
    );
});


gulp.task('copy.resource', function () {
    var filesCopy = ["index.html", "main.js", "project.json"]

    gulp.src(baseToPathRes + "/**/*")
        .pipe(gulp.dest(baseToPath + baseToPathRes));

    gulp.src(baseToPathSrc + "/**/*")
        .pipe(gulp.dest(baseToPath + baseToPathSrc));

    filesCopy.forEach(function (item) {
        gulp.src(item).pipe(gulp.dest(baseToPath));
    })
});


gulp.task('create.resource', function () {

    var strPathMiniGame = "res/Minigame";
    var strPathMiniGameTaiXiu = "res/Minigame/TaiXiu";
    var strPathMiniGameBauCua = "res/Minigame/BauCua";
    var strPathMiniGamePokeGo = "res/Minigame/ResSlotBa";
    var strPathMiniGamePoker = "res/Minigame/ResMiniPoker";
    var strPathMiniGameCaoThap = "res/Minigame/ResCaoThap";
    var strPathMiniGameVongQuay = "res/Minigame/ResVQMM";

    var strPathGameBai = "res/CardGame";
    var strPathCommonResGameBai = "res/CardGame/CommonResource";
    var strPathCommonResGameBai2 = "res/common";
    var strPathGameCo = "res/GameCo";
    var strPathSam = "res/CardGame/Sam";
    var strPathTienLen = "res/CardGameTienLen";
    var strPathBaCay = "res/CardGame/BaCay";
    var strPathBaiCao = "res/CardGame/BaCay";
    var strPathMauBinh = "res/CardGame/MauBinh";

    var strPathLieng = "res/CardGame/Lieng";
    var strPathPoker = "res/CardGame/Poker";
    var strPathXiZach = "res/CardGame/backjack";
    var strPathPokerTour = "res/CardGame/PokerTour";
    var strPathLaBaiNormal = "res/CardGame/LaBai";
    var strPathLaBaiPoker = "res/CardGame/BoBaiPoker";
    var strPathCaro = "res/GameCo/Caro";
    var strPathCoTuong = "res/GameCo/CoTuong";
    var strPathCoUp = "res/GameCo/CoUp";
    var strPathXocDia = "res/CardGame/ResXocDia";

    var strPathSlotsKhoBau = "res/SlotKhoBau";
    var strPathNuDiepVien = "res/NuDiepVien";
    var strPathAvenger = "res/Avenger";
    var strPathVuongQuocVin = "res/VuongQuocVin";

    var strResultCommonGameBai = "g_resources_cardGame";
    var strResultSam = "g_resources_sam";
    var strResultTienLen = "g_resources_tienlen";
    var strResultBaCay = "g_resources_bacay";
    var strResultBaiCao = "g_resources_baicao";
    var strResultMauBinh = "g_resources_maubinh";
    var strResultPoker = "g_resources_poker";
    var strResultPokerTour = "g_resources_pokertour";
    var strResultLieng = "g_resources_lieng";
    var strResultXizach = "g_resources_xizach";
    var strResultCaro = "g_resources_caro";
    var strResultCoTuong = "g_resources_cotuong";
    var strResultCoUp = "g_resources_coup";
    var strResultXocDia = "g_resources_xocdia";

    var strResult1 = "g_resources";
    var strResultMinigame1 = "g_resources_mn";
    var strResultMiniGameTaiXiu1 = "g_resources_mn_tai_xiu";
    var strResultMiniGameBauCua1 = "g_resources_mn_bau_cua";
    var strResultMiniGamePokeGo1 = "g_resources_mn_pokego";
    var strResultMiniGamePoker1 = "g_resources_mn_poker";
    var strResultMiniGameCaoThap1 = "g_resources_mn_cao_thap";
    var strResultMiniGameVongQuay1 = "g_resources_mn_vqmm";
    var strResultGameBai1 = "g_resources_game_bai_1";
    var strResultJson1 = "g_resources_json";
    var strResultSlotsKhoBau1 = "g_resources_slots_kho_bau";
    var strResultNuDiepVien1 = "g_resources_nu_diep_vien";
    var strResultAvenger1 = "g_resources_avenger";
    var strResultSlotVQV1 = "g_resources_slot_vqv";


    var isReturnArray = ["loading.js", ".gaf", ".manifest"];

    var isGameBai = [
        strPathGameBai,
        // strPathCommonResGameBai2,
        strPathGameCo,
        "g_res_cardGame_json_"
    ];

    var gamebaiList = [
        strResultCommonGameBai, strResultSam, strResultTienLen, strResultBaCay, strResultBaiCao, strResultMauBinh, strResultPoker, strResultPokerTour, strResultLieng,
        strResultXizach, strResultCaro, strResultCoTuong, strResultCoUp, strResultXocDia
    ];

    var miniGameProperPriority = [
        strResultMiniGameBauCua1, strResultMiniGameTaiXiu1, strResultMiniGamePokeGo1, strResultMiniGamePoker1, strResultMiniGameVongQuay1, strResultMiniGameCaoThap1,
        strResultMinigame1, strResultSlotsKhoBau1, strResultNuDiepVien1, strResultAvenger1, strResultSlotVQV1, strResult1
    ];

    var configs = [

        {
            name: strResult1,
            value: []
        },
        {
            name: strResultCommonGameBai,
            value: [
                strPathGameBai,
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                "g_res_cardGame_json_ChonBanScene.json"
            ]
        },
        {
            name: strResultSam,
            value: [
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                strPathSam,
                strPathLaBaiNormal,
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_SamGameScene.json",
                "g_res_cardGame_json_SamEndGame.json",
                "g_res_cardGame_json_BaoSamScene.json",
                "g_res_cardGame_json_CheatLayer.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json",
            ]
        },
        {
            name: strResultTienLen,
            value: [
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                strPathTienLen,
                strPathLaBaiNormal,
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_TienLenGameScene.json",
                "g_res_cardGame_json_SamEndGame.json",
                "g_res_cardGame_json_CheatLayer.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json"
            ]
        },
        {
            name: strResultBaCay,
            value: [
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                strPathBaCay,
                strPathLaBaiNormal,
                "g_res_cardGame_json_BaCayScene.json",
                "g_res_cardGame_json_BaCayEndGame.json",
                "g_res_cardGame_json_BaCayEndGameItem.json",
                "g_res_cardGame_json_nanBaiLayer.json",
                "g_res_cardGame_json_CheatLayer.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json"
            ]
        },
        {
            name: strResultBaiCao,
            value: [
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                strPathBaiCao,
                strPathLaBaiNormal,
                "g_res_cardGame_json_BaCayScene.json",
                "g_res_cardGame_json_BaCayEndGame.json",
                "g_res_cardGame_json_BaCayEndGameItem.json",
                "g_res_cardGame_json_nanBaiLayer.json",
                "g_res_cardGame_json_CheatLayer.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json"
            ]
        },
        {
            name: strResultMauBinh,
            value: [
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                strPathMauBinh,
                strPathLaBaiNormal,
                "g_res_cardGame_json_MauBinhGameGui.json",
                "g_res_cardGame_json_MauBinhCheatCardGui.json",
                "g_res_cardGame_json_CheatLayer.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json"
            ]
        },
        {
            name: strResultPoker,
            value: [
                strPathCommonResGameBai,
                strPathPoker,
                strPathLaBaiPoker,
                strPathLaBaiNormal,
                "g_res_cardGame_json_PokerScene.json",
                "g_res_cardGame_json_PokerSceneTour.json",
                "g_res_cardGame_json_BangXepHangPointPokerTour.json",
                "g_res_cardGame_json_BuyInScene.json",
                "g_res_cardGame_json_PokerTourLobby.json",
                "g_res_cardGame_json_ThongTinGiaiDau.json",
                "g_res_cardGame_json_PokerTourCard.json",
                "g_res_cardGame_json_CheatLayer.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json"
            ]
        },
        {
            name: strResultPokerTour,
            value: [
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                strPathPoker,
                strPathLaBaiPoker,
                strPathLaBaiNormal,
                strPathPokerTour,
                "g_res_cardGame_json_PokerScene.json",
                "g_res_cardGame_json_PokerTourScene.json",
                "g_res_cardGame_json_BangXepHangPointPokerTour.json",
                "g_res_cardGame_json_BangXepHangPokerTour.json",
                "g_res_cardGame_json_BangVipTourScene.json",
                "g_res_cardGame_json_BuyInScene.json",
                "g_res_cardGame_json_PokerTourLobby.json",
                "g_res_cardGame_json_ThongTinGiaiDau.json",
                "g_res_cardGame_json_BangThongTinGiaiDau.json",
                "g_res_cardGame_json_PokerTourCard.json",
                "g_res_cardGame_json_CheatLayer.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json",
                "g_res_cardGame_json_BangThanhTichPokerTour.json",
                "g_res_cardGame_json_BangMenuPokerTour.json",
                "g_res_cardGame_json_BangXepHangTour.json"
            ]
        },
        {
            name: strResultLieng,
            value: [
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                strPathPoker,
                strPathLieng,
                strPathLaBaiPoker,
                "g_res_cardGame_json_PokerScene.json",
                "g_res_cardGame_json_LiengLatBai.json",
                "g_res_cardGame_json_LiengBuyInScene.json",
                "g_res_cardGame_json_CheatLayer.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json"
            ]
        },
        {
            name: strResultXizach,
            value: [
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                strPathXiZach,
                strPathPoker,
                strPathLaBaiPoker,
                strPathLaBaiNormal,
                "g_res_cardGame_json_XiZachScene.json",
                "g_res_cardGame_json_CheatLayer.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json"
            ]
        },
        {
            name: strResultCaro,
            value: [
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                strPathCaro,
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_CheatLayer.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json"
            ],
        },
        {
            name: strResultCoTuong,
            value: [
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                strPathCaro,
                strPathCoTuong,
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_CheatLayer.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json"
            ],
        },
        {
            name: strResultCoUp,
            value: [
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                strPathCaro,
                strPathCoUp,
                strPathCoTuong,
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_CheatLayer.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json"
            ],
        },
        {
            name: strResultXocDia,
            value: [
                strPathCommonResGameBai,
                // strPathCommonResGameBai2,
                strPathCaro,
                strPathXocDia,
                "XocDiaScene.json",
                "g_res_cardGame_json_TopGame.json",
                "g_res_cardGame_json_TopCaoThu.json",
                "g_res_cardGame_json_theLeGameBai.json",
                "g_res_cardGame_json_ChatLayer.json",
                "g_res_cardGame_json_ChonBanScene.json",
                "g_res_cardGame_json_MoiChoiLayer.json",
                "g_res_cardGame_json_ReceiveMoiChoiLayer.json"
            ],
        },
        {
            name: strResultMinigame1,
            value: [
                strPathMiniGame,
                "Minigame.json"
            ],
        },
        {
            name: strResultMiniGameTaiXiu1,
            value: [
                strPathMiniGameTaiXiu,
                "TXChiTietPhien.json",
                "TXHuongDan.json",
                "TXLichSuGiaoDich.json",
                "TXTanLoc.json",
                "TXSoiCau.json",
                "TXThanhDu.json",
                "MNTaiXiu.json",
                "TXTopUser.json"
            ]
        },
        {
            name: strResultMiniGameBauCua1,
            value: [
                strPathMiniGameBauCua,
                "BCHuongDan.json",
                "BCLichSuGiaoDich.json",
                "BCToiChonCa.json",
                "BCTopUser.json",
                "MNBauCua.json"
            ]
        },
        {
            name: strResultMiniGamePokeGo1,
            value: [
                strPathMiniGamePokeGo,
                "Slot3hang.json",
                "Slot3hang_bangthanhtich.json",
                "Slot3Hang_guild.json",
                "Slot3Hang_lichsu.json",
                "Slot3hang_theleX2.json"
            ]
        },
        {
            name: strResultMiniGamePoker1,
            value: [
                strPathMiniGamePoker,
                "MiniPokerScene.json",
                "MiniPoker_BangThanhTich.json",
                "MiniPoker_Huongdan.json",
                "MiniPoker_LichSu.json"
            ]
        },
        {
            name: strResultMiniGameCaoThap1,
            value: [
                strPathMiniGameCaoThap,
                "CaoThapScene.json",
                "CaoThap_guild.json",
                "CaoThap_lichsu.json",
                "CaoThap_sanbaidep.json",
                "CaoThap_vinhdanh.json"
            ]
        },
        {
            name: strResultMiniGameVongQuay1,
            value: [
                strPathMiniGameVongQuay,
                "VongQuayMM.json",
                "VQMM_LichSu.json"
            ]
        },
        {
            name: strResultSlotsKhoBau1,
            value: [
                strPathSlotsKhoBau,
                "SlotsKhoBau.json"
            ]
        },
        {
            name: strResultNuDiepVien1,
            value: [
                strPathNuDiepVien,
                "NuDiepVien.json",
                "NDVBangThuong.json",
                "NDVHuongDan.json",
                "NDVLichSuGiaoDich.json",
                "NDVTheLeX2.json",
                "NDVTopNoHu.json"
            ]
        },
        {
            name: strResultAvenger1,
            value: [
                strPathAvenger,
                "Avenger.json",
                "AvengerBangThuong.json",
                "AvengerLichSuGiaoDich.json",
                "AvengerMiniGame.json",
                "AvengerTheLeX2.json",
                "AvengerTopNoHu.json"
            ]
        },
        {
            name: strResultSlotVQV1,
            value: [
                strPathVuongQuocVin
            ]
        },
        {
            name: strResultJson1,
            value: [
                ".json"
            ]
        }
    ]

    configs.forEach(function (item, index) {
        item.resultFiles = [];
    })

    glob(baseToPathRes + "/**/*", {}, function (er, files) {
        var fileNameList = files.filter(function (item) {
            return item.split(".").length > 1;
        });
        fileNameList.forEach(checkFileName);
        createResultText(configs);
    });

    function checkFileName(fileName) {
        if (checkElementInArray(fileName, isReturnArray)) return;

        checkElementToAdd(fileName, strResultJson1);

        if (checkElementInArray(fileName, isGameBai)) {
            gamebaiList.forEach(function (item) {
                checkElementToAdd(fileName, item)
            });
        } else {
            miniGameProperPriority.find(function (item) {
                return checkElementToAdd(fileName, item);
            });
        }

    }

    function checkElementInArray(fileName, checkArray) {
        if(checkArray.length == 0) return true;
        return checkArray.find(function (item, index) {
            // if(item == ".json") console.log("fileName",fileName, fileName.includes(item));
            return fileName.includes(item) ? true : undefined;
        });
    }

    function checkElementToAdd(fileName, arrayName) {
        var configItem = configs.find(function (item) {
            return item.name == arrayName;
        });
        if (!configItem) return undefined;
        var isContain = checkElementInArray(fileName, configItem.value);
        isContain && configItem.resultFiles.push(fileName);
        return isContain;
    }

    function createResultText(configArray) {
        var arrayText = configArray.map(function (item) {
            return "var " + item.name + ' = ["' + item.resultFiles.join('",\n"') + '"];';
        })
        var resultText = arrayText.join('\n');
        var wstream = fs.createWriteStream(baseToPathSrc + "resource.js")
        wstream.write(resultText);
    }
});
