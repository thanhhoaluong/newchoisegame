using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpdateResource
{

    class Program
    {
        public static List<string> lPath = new List<string>();
        public static List<string> lPathJson = new List<string>();
        public static List<string> lPathCommonGameBai = new List<string>();
        public static List<string> lPathSam = new List<string>();
        public static List<string> lPathTienLen = new List<string>();
        public static List<string> lPathBaCay = new List<string>();
        public static List<string> lPathBaiCao = new List<string>();
        public static List<string> lPathMauBinh = new List<string>();
        public static List<string> lPathLieng = new List<string>();
        public static List<string> lPathPoker = new List<string>();
        public static List<string> lPathXiZach = new List<string>();
        public static List<string> lPathCaro = new List<string>();
        public static List<string> lPathCoTuong = new List<string>();
        public static List<string> lPathCoUp = new List<string>();

        public static List<string> lPathPokerTour = new List<string>();

        public static List<string> lPathMinigame = new List<string>();
        public static List<string> lPathMinigameTaiXiu = new List<string>();
        public static List<string> lPathMinigameBauCua = new List<string>();
        public static List<string> lPathMinigamePokeGo = new List<string>();
        public static List<string> lPathMinigamePoker = new List<string>();
        public static List<string> lPathMinigameCaoThap = new List<string>();
        public static List<string> lPathMinigameVongQuay = new List<string>();
        public static List<string> lPathSlotsKhoBau = new List<string>();
        public static List<string> lPathSlotsNuDiepVien = new List<string>();
        public static List<string> lPathSlotsAvenger = new List<string>();
        public static List<string> lPathSlotsVQV = new List<string>();
		public static List<string> lPathXocDia = new List<string>();


        public static string strPathMiniGame = @"res/Minigame";
        public static string strPathMiniGameTaiXiu = @"res/TaiXiu";
        public static string strPathMiniGameBauCua = @"res/Minigame/BauCua";
        public static string strPathMiniGamePokeGo = @"res/Minigame/ResSlotBa";
        public static string strPathMiniGamePoker = @"res/Minigame/ResMiniPoker";
        public static string strPathMiniGameCaoThap = @"res/Minigame/ResCaoThap";
        public static string strPathMiniGameVongQuay = @"res/Minigame/ResVQMM";

        public static string strPathGameBai = @"res/CardGame";
        public static string strPathCommonResGameBai = @"res/CardGame/CommonResource";
        public static string strPathCommonResGameBai2 = @"res/common";
        public static string strPathGameCo = @"res/GameCo";
        public static string strPathSam = @"res/CardGame/Sam";
        public static string strPathTienLen = @"res/CardGameTienLen";
        public static string strPathBaCay = @"res/CardGame/BaCay";
        public static string strPathBaiCao = @"res/CardGame/BaCay";
        public static string strPathMauBinh = @"res/CardGame/MauBinh";

        public static string strPathLieng = @"res/CardGame/Poker";
        public static string strPathPoker = @"res/CardGame/Poker";
        public static string strPathXiZach = @"res/CardGame/backjack";
        public static string strPathPokerTour = @"res/CardGame/PokerTour";
        public static string strPathLaBaiNormal = @"res/CardGame/LaBai";
        public static string strPathLaBaiPoker = @"res/CardGame/BoBaiPoker";
        public static string strPathCaro = @"res/GameCo/Caro";
        public static string strPathCoTuong = @"res/GameCo/CoTuong";
        public static string strPathCoUp = @"res/GameCo/CoUp";
        public static string strPathXocDia = @"res/CardGame/ResXocDia";

        public static string strPathSlotsKhoBau = @"res/SlotKhoBau";
        public static string strPathNuDiepVien = @"res/NuDiepVien";
        public static string strPathAvenger = @"res/Avenger";
        public static string strPathVuongQuocVin = @"res/VuongQuocVin";

        public static string strResult = "";
        public static string strResultCommonGameBai = "g_resources_cardGame";
        public static string strResultSam = "g_resources_sam";
        public static string strResultTienLen = "g_resources_tienlen";
        public static string strResultBaCay = "g_resources_bacay";
        public static string strResultBaiCao = "g_resources_baicao";
        public static string strResultMauBinh = "g_resources_maubinh";
        public static string strResultPoker = "g_resources_poker";
        public static string strResultPokerTour = "g_resources_pokertour";
        public static string strResultLieng = "g_resources_lieng";
        public static string strResultXizach = "g_resources_xizach";
        public static string strResultCaro = "g_resources_caro";
        public static string strResultCoTuong = "g_resources_cotuong";
        public static string strResultCoUp = "g_resources_coup";
        public static string strResultXocDia = "g_resources_xocdia";


        public static string strResultMinigame = "";
        public static string strResultMiniGameTaiXiu = "res_tai_xiu";
        public static string strResultMiniGameBauCua = "";
        public static string strResultMiniGamePokeGo = "";
        public static string strResultMiniGamePoker = "";
        public static string strResultMiniGameCaoThap = "";
        public static string strResultMiniGameVongQuay = "";

        public static string strResultJson = "";
        public static string strResultSlotsKhoBau = "";
        public static string strResultNuDiepVien = "";
        public static string strResultAvenger = "";
        public static string strResultSlotVQV = "";


        public static string strResult1 = "g_resources";
        public static string strResultMinigame1 = "g_resources_mn";
        public static string strResultMiniGameTaiXiu1 = "res_tai_xiu";
        public static string strResultMiniGameBauCua1 = "g_resources_mn_bau_cua";
        public static string strResultMiniGamePokeGo1 = "g_resources_mn_pokego";
        public static string strResultMiniGamePoker1 = "g_resources_mn_poker";
        public static string strResultMiniGameCaoThap1 = "g_resources_mn_cao_thap";
        public static string strResultMiniGameVongQuay1 = "g_resources_mn_vqmm";
        public static string strResultGameBai1 = "g_resources_game_bai_1";
        public static string strResultJson1 = "g_resources_json";
        public static string strResultSlotsKhoBau1 = "g_resources_slots_kho_bau";
        public static string strResultNuDiepVien1 = "g_resources_nu_diep_vien";
        public static string strResultAvenger1 = "g_resources_avenger";
        public static string strResultSlotVQV1 = "g_resources_slot_vqv";

        static void Main(string[] args)
        {
            
            string baseToPath = @"C:\xampp\htdocs\app";
            string baseToPathRes = baseToPath + @"\res";
            string baseToPathSrc = baseToPath + @"\src";

            string baseFromPath = System.IO.Directory.GetCurrentDirectory();
            string baseFromPathRes = baseFromPath + @"\res";
            string baseFromPathSrc = baseFromPath + @"\src";

            string pathTemp = baseFromPath + @"\Temp.txt";

            if (!File.Exists(pathTemp))
            {
                // Create a file to write to.
            }
            else
            {
                System.IO.File.WriteAllText(pathTemp, string.Empty);
            }

            using (StreamWriter file = new System.IO.StreamWriter(pathTemp, true))
            {
                ProcessDirectory(baseFromPathRes, file);
            }

            string text = File.ReadAllText(pathTemp);

            //for (int i = 0; i < lPathJson.Count; i++ )
            //{
            //    var json = System.IO.File.ReadAllText(baseFromPath +@"\"+ lPathJson[i]);
            //    var jsonObj = JObject.Parse(json);

            //    var jObjectContent1 = (JObject)jsonObj.GetValue("Content");
            //    var jObjectContent2 = (JObject)jObjectContent1.GetValue("Content");
            //    var UsedResources = (JArray)jObjectContent2.GetValue("UsedResources");
            //    foreach (string root in UsedResources)
            //    {
            //        for (int j = lPath.Count -1; j >=0 ; j--)
            //        {
            //            if (lPath[j].Contains(root))
            //            {
            //                lPath.RemoveAt(j);
            //            }
            //        }
            //    }


            //}
            // string strResu = "";
            for (int i = 0; i < lPathJson.Count; i++)
            {
                if (i == 0)
                {
                    strResultJson = "\"" + lPathJson[i] + "\"";
                }
                else
                {
                    strResultJson = strResultJson + ",\n" + "\"" + lPathJson[i] + "\"";
                }

            }
            strResultJson = "var " + strResultJson1 + " = [" + strResultJson.TrimEnd(',') + "];";

            for (int i = 0; i < lPath.Count; i++)
            {
                if (i == 0)
                {
                    strResult = "\"" + lPath[i] + "\"";
                }
                else
                {
                    strResult = strResult + ",\n" + "\"" + lPath[i] + "\"";
                }

            }

            strResult = "\nvar " + strResult1 + " = [" + strResult.TrimEnd(',') + "];";

            var strTemp = "";

            //string strResuPhu = "";
            for (int i = 0; i < lPathCommonGameBai.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathCommonGameBai[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathCommonGameBai[i] + "\"";
                }

            }

            strResultCommonGameBai = "\nvar " + strResultCommonGameBai + " = [" + strTemp.TrimEnd(',') + "];";

            strTemp = "";
            for (int i = 0; i < lPathSam.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathSam[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathSam[i] + "\"";
                }

            }
            strResultSam = "\nvar " + strResultSam + " = [" + strTemp.TrimEnd(',') + "];";

            strTemp = "";
            for (int i = 0; i < lPathTienLen.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathTienLen[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathTienLen[i] + "\"";
                }

            }
            strResultTienLen = "\nvar " + strResultTienLen + " = [" + strTemp.TrimEnd(',') + "];";

            strTemp = "";
            for (int i = 0; i < lPathBaCay.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathBaCay[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathBaCay[i] + "\"";
                }

            }
            strResultBaCay = "\nvar " + strResultBaCay + " = [" + strTemp.TrimEnd(',') + "];";

            strTemp = "";
            for (int i = 0; i < lPathBaiCao.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathBaiCao[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathBaiCao[i] + "\"";
                }

            }
            strResultBaiCao = "\nvar " + strResultBaiCao + " = [" + strTemp.TrimEnd(',') + "];";


            strTemp = "";
            for (int i = 0; i < lPathMauBinh.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathMauBinh[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathMauBinh[i] + "\"";
                }

            }
            strResultMauBinh = "\nvar " + strResultMauBinh + " = [" + strTemp.TrimEnd(',') + "];";

            strTemp = "";
            for (int i = 0; i < lPathPoker.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathPoker[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathPoker[i] + "\"";
                }

            }
            strResultPoker = "\nvar " + strResultPoker + " = [" + strTemp.TrimEnd(',') + "];";

            strTemp = "";
            for (int i = 0; i < lPathPokerTour.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathPokerTour[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathPokerTour[i] + "\"";
                }

            }

            strResultPokerTour = "\nvar " + strResultPokerTour + " = [" + strTemp.TrimEnd(',') + "];";

            strTemp = "";
            for (int i = 0; i < lPathLieng.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathLieng[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathLieng[i] + "\"";
                }

            }

            strResultLieng = "\nvar " + strResultLieng + " = [" + strTemp.TrimEnd(',') + "];";


            strTemp = "";
            for (int i = 0; i < lPathXiZach.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathXiZach[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathXiZach[i] + "\"";
                }

            }

            strResultXizach = "\nvar " + strResultXizach + " = [" + strTemp.TrimEnd(',') + "];";

            strTemp = "";
            for (int i = 0; i < lPathCaro.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathCaro[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathCaro[i] + "\"";
                }

            }

            strResultCaro = "\nvar " + strResultCaro + " = [" + strTemp.TrimEnd(',') + "];";

            strTemp = "";
            for (int i = 0; i < lPathCoTuong.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathCoTuong[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathCoTuong[i] + "\"";
                }

            }

            strResultCoTuong = "\nvar " + strResultCoTuong + " = [" + strTemp.TrimEnd(',') + "];";


            strTemp = "";
            for (int i = 0; i < lPathCoUp.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathCoUp[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathCoUp[i] + "\"";
                }

            }

            strResultCoUp = "\nvar " + strResultCoUp + " = [" + strTemp.TrimEnd(',') + "];";

            strTemp = "";
            for (int i = 0; i < lPathXocDia.Count; i++)
            {
                if (i == 0)
                {
                    strTemp = "\"" + lPathXocDia[i] + "\"";
                }
                else
                {
                    strTemp = strTemp + ",\n" + "\"" + lPathXocDia[i] + "\"";
                }

            }

            strResultXocDia = "\nvar " + strResultXocDia + " = [" + strTemp.TrimEnd(',') + "];";





            for (int i = 0; i < lPathMinigameTaiXiu.Count; i++)
            {
                if (i == 0)
                {
                    strResultMiniGameTaiXiu = "\"" + lPathMinigameTaiXiu[i] + "\"";
                }
                else
                {
                    strResultMiniGameTaiXiu = strResultMiniGameTaiXiu + ",\n" + "\"" + lPathMinigameTaiXiu[i] + "\"";
                }

            }
            strResultMiniGameTaiXiu = "\nvar " + strResultMiniGameTaiXiu1 + " = [" + strResultMiniGameTaiXiu.TrimEnd(',') + "];";

            for (int i = 0; i < lPathMinigameBauCua.Count; i++)
            {
                if (i == 0)
                {
                    strResultMiniGameBauCua = "\"" + lPathMinigameBauCua[i] + "\"";
                }
                else
                {
                    strResultMiniGameBauCua = strResultMiniGameBauCua + ",\n" + "\"" + lPathMinigameBauCua[i] + "\"";
                }

            }
            strResultMiniGameBauCua = "\nvar " + strResultMiniGameBauCua1 + " = [" + strResultMiniGameBauCua.TrimEnd(',') + "];";

            for (int i = 0; i < lPathMinigamePokeGo.Count; i++)
            {
                if (i == 0)
                {
                    strResultMiniGamePokeGo = "\"" + lPathMinigamePokeGo[i] + "\"";
                }
                else
                {
                    strResultMiniGamePokeGo = strResultMiniGamePokeGo + ",\n" + "\"" + lPathMinigamePokeGo[i] + "\"";
                }

            }
            strResultMiniGamePokeGo = "\nvar " + strResultMiniGamePokeGo1 + " = [" + strResultMiniGamePokeGo.TrimEnd(',') + "];";

            for (int i = 0; i < lPathMinigameCaoThap.Count; i++)
            {
                if (i == 0)
                {
                    strResultMiniGameCaoThap = "\"" + lPathMinigameCaoThap[i] + "\"";
                }
                else
                {
                    strResultMiniGameCaoThap = strResultMiniGameCaoThap + ",\n" + "\"" + lPathMinigameCaoThap[i] + "\"";
                }

            }
            strResultMiniGameCaoThap = "\nvar " + strResultMiniGameCaoThap1 + " = [" + strResultMiniGameCaoThap.TrimEnd(',') + "];";

            for (int i = 0; i < lPathMinigamePoker.Count; i++)
            {
                if (i == 0)
                {
                    strResultMiniGamePoker = "\"" + lPathMinigamePoker[i] + "\"";
                }
                else
                {
                    strResultMiniGamePoker = strResultMiniGamePoker + ",\n" + "\"" + lPathMinigamePoker[i] + "\"";
                }

            }
            strResultMiniGamePoker = "\nvar " + strResultMiniGamePoker1 + " = [" + strResultMiniGamePoker.TrimEnd(',') + "];";

            for (int i = 0; i < lPathMinigameVongQuay.Count; i++)
            {
                if (i == 0)
                {
                    strResultMiniGameVongQuay = "\"" + lPathMinigameVongQuay[i] + "\"";
                }
                else
                {
                    strResultMiniGameVongQuay = strResultMiniGameVongQuay + ",\n" + "\"" + lPathMinigameVongQuay[i] + "\"";
                }

            }
            strResultMiniGameVongQuay = "\nvar " + strResultMiniGameVongQuay1 + " = [" + strResultMiniGameVongQuay.TrimEnd(',') + "];";

            for (int i = 0; i < lPathMinigame.Count; i++)
            {
                if (i == 0)
                {
                    strResultMinigame = "\"" + lPathMinigame[i] + "\"";
                }
                else
                {
                    strResultMinigame = strResultMinigame + ",\n" + "\"" + lPathMinigame[i] + "\"";
                }

            }
            strResultMinigame = "\nvar " + strResultMinigame1 + " = [" + strResultMinigame.TrimEnd(',') + "];";

            for (int i = 0; i < lPathSlotsKhoBau.Count; i++)
            {
                if (i == 0)
                {
                    strResultSlotsKhoBau = "\"" + lPathSlotsKhoBau[i] + "\"";
                }
                else
                {
                    strResultSlotsKhoBau = strResultSlotsKhoBau + ",\n" + "\"" + lPathSlotsKhoBau[i] + "\"";
                }

            }
            strResultSlotsKhoBau = "\nvar " + strResultSlotsKhoBau1 + " = [" + strResultSlotsKhoBau.TrimEnd(',') + "];";

            for (int i = 0; i < lPathSlotsNuDiepVien.Count; i++)
            {
                if (i == 0)
                {
                    strResultNuDiepVien = "\"" + lPathSlotsNuDiepVien[i] + "\"";
                }
                else
                {
                    strResultNuDiepVien = strResultNuDiepVien + ",\n" + "\"" + lPathSlotsNuDiepVien[i] + "\"";
                }

            }
            strResultNuDiepVien = "\nvar " + strResultNuDiepVien1 + " = [" + strResultNuDiepVien.TrimEnd(',') + "];";

            for (int i = 0; i < lPathSlotsAvenger.Count; i++)
            {
                if (i == 0)
                {
                    strResultAvenger = "\"" + lPathSlotsAvenger[i] + "\"";
                }
                else
                {
                    strResultAvenger = strResultAvenger + ",\n" + "\"" + lPathSlotsAvenger[i] + "\"";
                }

            }
            strResultAvenger = "\nvar " + strResultAvenger1 + " = [" + strResultAvenger.TrimEnd(',') + "];";

            for (int i = 0; i < lPathSlotsVQV.Count; i++)
            {
                if (i == 0)
                {
                    strResultSlotVQV = "\"" + lPathSlotsVQV[i] + "\"";
                }
                else
                {
                    strResultSlotVQV = strResultSlotVQV + ",\n" + "\"" + lPathSlotsVQV[i] + "\"";
                }

            }
            strResultSlotVQV = "\nvar " + strResultSlotVQV1 + " = [" + strResultSlotVQV.TrimEnd(',') + "];";

            //

            string test = strResult + strResultCommonGameBai + strResultSam + strResultTienLen + strResultBaCay + strResultBaiCao + strResultMauBinh +
                strResultPoker +  strResultPokerTour + strResultLieng + strResultXizach + strResultCaro + strResultCoTuong + strResultCoUp + strResultXocDia +
                strResultMinigame + strResultMiniGameTaiXiu + strResultMiniGameBauCua +
                strResultMiniGamePokeGo + strResultMiniGamePoker + strResultMiniGameCaoThap + strResultMiniGameVongQuay + strResultSlotsKhoBau + strResultNuDiepVien + strResultAvenger + strResultSlotVQV;
            File.WriteAllText(pathTemp, test);

            // File.WriteAllText(pathTemp, textPhu);


            if (!System.IO.Directory.Exists(baseToPath))
            {
                System.IO.Directory.CreateDirectory(baseToPath);
                System.IO.Directory.CreateDirectory(baseToPathRes);
                System.IO.Directory.CreateDirectory(baseToPathSrc);
            }


            System.IO.File.Copy(pathTemp, baseFromPathSrc + @"\resource.js", true);



            System.IO.File.Copy(baseFromPath + @"\index.html", baseToPath + @"\index.html", true);
            System.IO.File.Copy(baseFromPath + @"\main.js", baseToPath + @"\main.js", true);
            System.IO.File.Copy(baseFromPath + @"\project.json", baseToPath + @"\project.json", true);


            copyDirectory(baseFromPathRes, baseToPathRes);
            copyDirectory(baseFromPathSrc, baseToPathSrc);
        }

        public static void ProcessDirectory(string targetDirectory, StreamWriter sw)
        {
            // Process the list of files found in the directory.
            string[] fileEntries = Directory.GetFiles(targetDirectory);
            foreach (string fileName in fileEntries)
                ProcessFile(fileName, sw);

            // Recurse into subdirectories of this directory.
            string[] subdirectoryEntries = Directory.GetDirectories(targetDirectory);
            foreach (string subdirectory in subdirectoryEntries)
                ProcessDirectory(subdirectory, sw);
        }

        // Insert logic for processing found files here.
        public static void ProcessFile(string path, StreamWriter sw)
        {
            //Console.WriteLine("Processed file '{0}'.", path);
            if (path.Contains("loading.js") || path.Contains(".gaf") || path.Contains(".manifest"))
            {

            }
            else
            {
                // var content = objects.Get

                string s = path.Replace(System.IO.Directory.GetCurrentDirectory() + @"\", "");
                s = s.Replace(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
                // lPath.Add(s);
                if (s.Contains(".json"))
                {
                    lPathJson.Add(s);
                }
                //else


                // Game bai
                if (s.Contains(strPathGameBai) || s.Contains(strPathGameCo) || s.Contains("g_res_cardGame_json_"))
                {

                    if (s.Contains(strPathGameBai) || s.Contains(strPathCommonResGameBai) || s.Contains(strPathCommonResGameBai2) || s.Contains("g_res_cardGame_json_ChonBanScene.json") )
                    {
                        lPathCommonGameBai.Add(s);
                    }

                    if (s.Contains(strPathCommonResGameBai) || s.Contains(strPathCommonResGameBai2) || s.Contains(strPathSam) || s.Contains(strPathLaBaiNormal)
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_SamGameScene.json")
                        || s.Contains("g_res_cardGame_json_SamEndGame.json")
                        || s.Contains("g_res_cardGame_json_BaoSamScene.json")
                        || s.Contains("g_res_cardGame_json_CheatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json"))
                    {
                        lPathSam.Add(s);
                    }


                    if (s.Contains(strPathCommonResGameBai) || s.Contains(strPathTienLen) || s.Contains(strPathLaBaiNormal)
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_TienLenGameScene.json")
                        || s.Contains("g_res_cardGame_json_SamEndGame.json")
                        || s.Contains("g_res_cardGame_json_CheatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json"))
                    {
                        lPathTienLen.Add(s);
                    }

                    if (s.Contains(strPathCommonResGameBai) || s.Contains(strPathBaCay) || s.Contains(strPathLaBaiNormal)
                        || s.Contains("g_res_cardGame_json_BaCayScene.json")
                        || s.Contains("g_res_cardGame_json_BaCayEndGame.json")
                        || s.Contains("g_res_cardGame_json_BaCayEndGameItem.json")
                        || s.Contains("g_res_cardGame_json_nanBaiLayer.json")
                        || s.Contains("g_res_cardGame_json_CheatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json"))
                    {
                        lPathBaCay.Add(s);
                    }

                    if (s.Contains(strPathCommonResGameBai) || s.Contains(strPathBaiCao) || s.Contains(strPathLaBaiNormal)
                        || s.Contains("g_res_cardGame_json_BaCayScene.json")
                        || s.Contains("g_res_cardGame_json_BaCayEndGame.json")
                        || s.Contains("g_res_cardGame_json_BaCayEndGameItem.json")
                        || s.Contains("g_res_cardGame_json_nanBaiLayer.json")
                        || s.Contains("g_res_cardGame_json_CheatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json"))
                    {
                        lPathBaiCao.Add(s);
                    }

                    if (s.Contains(strPathCommonResGameBai) || s.Contains(strPathMauBinh) || s.Contains(strPathLaBaiNormal)
                        || s.Contains("g_res_cardGame_json_MauBinhGameGui.json")
                        || s.Contains("g_res_cardGame_json_MauBinhCheatCardGui.json")
                        || s.Contains("g_res_cardGame_json_CheatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json"))
                    {
                        lPathMauBinh.Add(s);
                    }


                    if (s.Contains(strPathCommonResGameBai) ||s.Contains(strPathPoker) || s.Contains(strPathLaBaiPoker) || s.Contains(strPathLaBaiNormal)
                        || s.Contains("g_res_cardGame_json_PokerScene.json")
                        || s.Contains("g_res_cardGame_json_PokerSceneTour.json")
                        || s.Contains("g_res_cardGame_json_BangXepHangPointPokerTour.json")
                        || s.Contains("g_res_cardGame_json_BuyInScene.json")
                        || s.Contains("g_res_cardGame_json_PokerTourLobby.json")
                        || s.Contains("g_res_cardGame_json_ThongTinGiaiDau.json")
                        || s.Contains("g_res_cardGame_json_PokerTourCard.json")
                        || s.Contains("g_res_cardGame_json_CheatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json"))
                    {
                        lPathPoker.Add(s);
                    }

                    if (s.Contains(strPathCommonResGameBai) || s.Contains(strPathPoker) || s.Contains(strPathLaBaiPoker) || s.Contains(strPathLaBaiNormal) || s.Contains(strPathPokerTour)
                        || s.Contains("g_res_cardGame_json_PokerScene.json")
                        || s.Contains("g_res_cardGame_json_PokerTourScene.json")
                        || s.Contains("g_res_cardGame_json_BangXepHangPointPokerTour.json")
                        || s.Contains("g_res_cardGame_json_BangXepHangPokerTour.json")
                        || s.Contains("g_res_cardGame_json_BangVipTourScene.json")
                        || s.Contains("g_res_cardGame_json_BuyInScene.json")
                        || s.Contains("g_res_cardGame_json_PokerTourLobby.json")
                        || s.Contains("g_res_cardGame_json_ThongTinGiaiDau.json")
                        || s.Contains("g_res_cardGame_json_BangThongTinGiaiDau.json")
                        || s.Contains("g_res_cardGame_json_PokerTourCard.json")
                        || s.Contains("g_res_cardGame_json_CheatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_BangThanhTichPokerTour.json")
                        || s.Contains("g_res_cardGame_json_BangMenuPokerTour.json")
                        || s.Contains("g_res_cardGame_json_BangXepHangTour.json"))
                    {
                        lPathPokerTour.Add(s);
                    }
                    if (s.Contains(strPathCommonResGameBai) || s.Contains(strPathLieng) || s.Contains(strPathLaBaiPoker) || s.Contains(strPathLaBaiNormal)
                        || s.Contains("g_res_cardGame_json_PokerScene.json")
                        || s.Contains("g_res_cardGame_json_LiengLatBai.json")
                        || s.Contains("g_res_cardGame_json_LiengBuyInScene.json")
                        || s.Contains("g_res_cardGame_json_CheatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json"))
                    {
                        lPathLieng.Add(s);
                    }

                    if (s.Contains(strPathCommonResGameBai) || s.Contains(strPathXiZach) || s.Contains(strPathPoker) || s.Contains(strPathLaBaiPoker) || s.Contains(strPathLaBaiNormal)
                        || s.Contains("g_res_cardGame_json_XiZachScene.json")
                        || s.Contains("g_res_cardGame_json_CheatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json"))
                    {
                        lPathXiZach.Add(s);
                    }

                    if (s.Contains(strPathCommonResGameBai) || s.Contains(strPathCaro)
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_CheatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json"))
                    {
                        lPathCaro.Add(s);
                    }

                    if (s.Contains(strPathCommonResGameBai) || s.Contains(strPathCaro) || s.Contains(strPathCoTuong)
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_CheatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json"))
                    {
                        lPathCoTuong.Add(s);
                    }

                    if (s.Contains(strPathCommonResGameBai) || s.Contains(strPathCaro) || s.Contains(strPathCoUp) || s.Contains(strPathCoTuong)
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_CheatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json"))
                    {
                        lPathCoUp.Add(s);
                    }


                    if (s.Contains(strPathCommonResGameBai)  || s.Contains(strPathXocDia)
                        ||  s.Contains("XocDiaScene.json")
                        || s.Contains("g_res_cardGame_json_TopGame.json")
                        || s.Contains("g_res_cardGame_json_TopCaoThu.json")
                        || s.Contains("g_res_cardGame_json_theLeGameBai.json")
                        || s.Contains("g_res_cardGame_json_ChatLayer.json")
                        || s.Contains("g_res_cardGame_json_ChonBanScene.json")
                        || s.Contains("g_res_cardGame_json_MoiChoiLayer.json")
                        || s.Contains("g_res_cardGame_json_ReceiveMoiChoiLayer.json"))
                    {
                        lPathXocDia.Add(s);
                    }
                }
                else
                    if (s.Contains(strPathMiniGameBauCua) ||
                            s.Contains("BCHuongDan.json") ||
                            s.Contains("BCLichSuGiaoDich.json") ||
                            s.Contains("BCToiChonCa.json") ||
                            s.Contains("BCTopUser.json") ||
                            s.Contains("MNBauCua.json"))
                    {
                        lPathMinigameBauCua.Add(s);
                    }
                    else
                        if (s.Contains(strPathMiniGameTaiXiu) ||
                            s.Contains("TXChiTietPhien.json") ||
                            s.Contains("TXHuongDan.json") ||
                            s.Contains("TXLichSuGiaoDich.json") ||
                            s.Contains("TXTanLoc.json") ||
                            s.Contains("TXSoiCau.json") ||
                            s.Contains("TXThanhDu.json") ||
                            s.Contains("MNTaiXiu.json") ||
                            s.Contains("TXTopUser.json"))
                        {
                            lPathMinigameTaiXiu.Add(s);
                        }
                        else
                            if (s.Contains(strPathMiniGamePokeGo) ||
                            s.Contains("Slot3hang.json") ||
                            s.Contains("Slot3hang_bangthanhtich.json") ||
                            s.Contains("Slot3Hang_guild.json") ||
                            s.Contains("Slot3Hang_lichsu.json") ||
                            s.Contains("Slot3hang_theleX2.json"))
                            {
                                lPathMinigamePokeGo.Add(s);
                            }
                            else
                                if (s.Contains(strPathMiniGamePoker) ||
                            s.Contains("MiniPokerScene.json") ||
                            s.Contains("MiniPoker_BangThanhTich.json") ||
                            s.Contains("MiniPoker_Huongdan.json") ||
                            s.Contains("MiniPoker_LichSu.json"))
                                {
                                    lPathMinigamePoker.Add(s);
                                }
                                else
                                    if (s.Contains(strPathMiniGameVongQuay) ||
                            s.Contains("VongQuayMM.json") ||
                            s.Contains("VQMM_LichSu.json"))
                                    {
                                        lPathMinigameVongQuay.Add(s);
                                    }
                                    else
                                        if (s.Contains(strPathMiniGameCaoThap) ||
                            s.Contains("CaoThapScene.json") ||
                            s.Contains("CaoThap_guild.json") ||
                            s.Contains("CaoThap_lichsu.json") ||
                            s.Contains("CaoThap_sanbaidep.json") ||
                            s.Contains("CaoThap_vinhdanh.json"))
                                        {
                                            lPathMinigameCaoThap.Add(s);
                                        }
                                        else
                                            if (s.Contains(strPathMiniGame) ||
                                            s.Contains("Minigame.json"))
                                            {
                                                lPathMinigame.Add(s);
                                            }
                                            else
                                                if (s.Contains(strPathSlotsKhoBau) ||
                                                    s.Contains("SlotsKhoBau.json"))
                                                {
                                                    lPathSlotsKhoBau.Add(s);
                                                }
                                                else
                                                    if (s.Contains(strPathNuDiepVien) ||
                                                        s.Contains("NuDiepVien.json") ||
                                                        s.Contains("NDVBangThuong.json") ||
                                                        s.Contains("NDVHuongDan.json") ||
                                                        s.Contains("NDVLichSuGiaoDich.json") ||
                                                        s.Contains("NDVTheLeX2.json") ||
                                                        s.Contains("NDVTopNoHu.json"))
                                                    {
                                                        lPathSlotsNuDiepVien.Add(s);
                                                    }
                                                    else
                                                        if (s.Contains(strPathAvenger) ||
                                                            s.Contains("Avenger.json") ||
                                                            s.Contains("AvengerBangThuong.json") ||
                                                            s.Contains("AvengerLichSuGiaoDich.json") ||
                                                            s.Contains("AvengerMiniGame.json") ||
                                                            s.Contains("AvengerTheLeX2.json") ||
                                                            s.Contains("AvengerTopNoHu.json"))
                                                        {
                                                            lPathSlotsAvenger.Add(s);
                                                        }
                                                            else if(s.Contains(strPathVuongQuocVin))
                                                        {
                                                            lPathSlotsVQV.Add(s);
                                                        }
                                                        else
                                                            lPath.Add(s);


                s = "\"" + s + "\",";
                sw.WriteLine(s);

            }

        }
        public static void copyDirectory(string strSource, string strDestination)
        {
            if (!Directory.Exists(strDestination))
            {
                Directory.CreateDirectory(strDestination);
            }

            DirectoryInfo dirInfo = new DirectoryInfo(strSource);
            FileInfo[] files = dirInfo.GetFiles();
            foreach (FileInfo tempfile in files)
            {
                tempfile.CopyTo(Path.Combine(strDestination, tempfile.Name), true);
            }

            DirectoryInfo[] directories = dirInfo.GetDirectories();
            foreach (DirectoryInfo tempdir in directories)
            {
                copyDirectory(Path.Combine(strSource, tempdir.Name), Path.Combine(strDestination, tempdir.Name));
            }

        }
    }
    class AssetItem
    {
        string path;
        string md5;
        bool zipped;
    }
}
