var tipuesearch = {"pages": [{'title': 'week', 'text': 'week1-week5 \n week6-week9 \n week10-week14 \n week15-week18 \n', 'tags': '', 'url': 'week.html'}, {'title': 'week1-5', 'text': 'week1 \n \n 1.登入自己的github帳戶，並且創建名為cd2020的個人倉儲。 \n 2.進入存放的資料夾例如;tmp \n 3.在小黑窗上打上git clone\xa0https://github.com/s40723221/cd2020。 \n 4.git submodule add https://github.com/mdecourse/cmsimde.git。 \n 5.完成後使用cd cd2020 ->cd cmsimde進入cmsimde的資料夾內。 \n 6.完成之後使用python wsgi.py進入靜態9443內編輯個人網站的資料。 \n 7.使用git add .\xa0 -> commit -m ＂標題＂ -> git push將剛剛編輯好的東西上傳。 \n 8.進入個人倉儲的setting中更改branch(分支)至master。 \n 影片教學: \n \n \n week2 \n 將可攜系統下的python 3.7.3系統更新至python 3.8.2 \n 1.進入 https://www.python.org/downloads/windows/ \n 2.往下滑到最底，下載 Windows x86-64 executable installer (上下兩者分別為 Windows x86-64 embeddable zip file 和 Windows x86-64 web-based installer 這兩者是嵌入式64位元python的可執行壓縮檔案和64位元網際端的可執行檔案)在本次可熙的更新中不會使用到 \n \n 3.接著開始下載切記不要勾選pip選項，接著按下next \n 4.先將下載下來的python3.8.2放置桌面，並且將y槽下的data新增加一個py382的資料夾方便之後可以做測試是否3.8.2之python可以正常的運行 \n 5.將剛剛下載之python3.8.2放置於剛剛創建的py382中切記不要將原先的py373刪除，若之後py382的執行產生錯誤才可以使用py373做返回原版本的動作 \n 6.更改執行檔start_mdecourse.bat \n 將底下py373處更改為自己下在python3.8.2所儲存的資料夾名稱 \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_mdecourse\nset HomeDrive=%Disk%:\\home_mdecourse\nset Home=%Disk%:\\home_mdecourse\nset USERPROFILE=%Disk%:\\home_mdecourse\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\py373\\DLLs;%Disk%:\\py373\\Lib;%Disk%:\\py373\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py373\n\nset GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n\nset path_python=%Disk%:\\py373;%Disk%:\\py373\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nREM coreutils is for compiling fossil scm\nset path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64;\nset path_tcc=%Disk%:\\tcc;\nset path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin;\nset path_nodejs=Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_xming=%Disk%:\\Xming;\nset path_latex=%%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32;\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;\n\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\n\nExit \n 7.重新啟動剛剛更新的執行檔 \n 8.執行 python get-pip.py \n 9..執行 python -m pip install flask flask-cors markdown lxml bs4 pelican leo \n 影片教學: \n \n \n git pull request操作說明: \n 1.以自己github之帳號fork老師的倉儲也就是 fork : https://github.com/mdecourse/cd2020 \n 2.接下來到自己的倉儲中找到剛剛fork下來的老師倉儲並且複製網址 \n 3.利用git clone 自己帳號下老師的網址 \n 4.在執行git submodule add  https://github.com/mdecourse/cmsimde.git \n 5.進入到9443開始編輯自己帳號下老師的網站 \n 6.編輯完成後執行git add commit push三個步驟 \n 7.利用自己帳號下修改完成的老師倉儲建立新的pull request \n \n \n 8.按下提交之後等待老師接受並且merge即可完成此次的pull request \n w2直播進程: \n 分工內容: \n 40523253:亂數分組程式 40623117:亂數分組程式 40623252:4輪車  40723221 (group leader) :4輪車  40723222:4輪車  40723228:亂數分組程式 40723236:4輪車  40723237:可攜系統 40723240:4輪車  40723243:4輪車  40723244:可攜系統 40723249:可攜系統  40732331:4輪車\xa0 \n 注意事項: \n 1.視課堂進度上傳影片 2.不管會不會做每周都要push 3.可以從gitter上面提問 4.直播大家輪流主持，直播前半部分有教大家如何開直播了 5.git pull request每個人都要會之後要更改東西比較方便 6.不會做的可以去看我的網站我會盡可能提早更新，再不行就到gitter上面提問可以在這邊提問 gitter:https://gitter.im/mdecourse/cd2020 7.2020年3月26日到期assignment 1的pdf繳交請在時間內上傳到自己倉儲的download上 8.pdf上寫上進度，之後打分數依照pdf打分 \n 直播進程影片: \n \n \n week3 \n 本周報告影片: \n \n', 'tags': '', 'url': 'week1-5.html'}, {'title': 'week6-9', 'text': '', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': '', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '', 'tags': '', 'url': 'week15-18.html'}, {'title': 'Q&A', 'text': 'PY3.8.2更新後出現之LEO無法開啟問題與解決方法。 \n \n 拿之前home_mdecourse/.leo裡面的.leoID.txt放到home裡面就正常了。 \n', 'tags': '', 'url': 'Q&A.html'}, {'title': 'assignments', 'text': '', 'tags': '', 'url': 'assignments.html'}, {'title': 'assignment1', 'text': 'Collaborative product design processes of industrial design and engineering design in consumer product companies \n 1. Describe how\xa0to\xa0do an efficient random grouping for this\xa0course or do the roll calling randomly? \n 2. Describe how to prepare a portable Python programming system for Windows 10 64bit system to allow one the maintain \xa0 CMSiMDE \xa0 website, \xa0 Pelican blog \xa0 and \xa0 Reveal.js \xa0 presentation on \xa0 Github ? \n 3. What do you need to know from\xa0 http://www.coppeliarobotics.com/helpFiles/index.html \xa0to implement a four-wheeled robot?', 'tags': '', 'url': 'assignment1.html'}, {'title': 'Random grouping', 'text': '資料提供及統整:40723221\xa0 \n 1.如何從網站中抓取所需之資料(如名單)? \n  2.順利抓取名單後如何運用於程式中並使其能夠正確的讀取? \n  3.如何在上述皆達成後順利達到分組的效果?    我們必須要了解 import 的 request、ast、random 是甚麼模組。 \n  (1) Request 為能夠下載網頁的一項 python 中的模組，我們能夠使用 request.get(加入網址)的方式來達到擷取網頁資料的目的。  \n 參考連結 :  https://blog.gtwang.org/programming/python-requests-module-tutorial/  (2) ast 中的 literal_eval 可以將剛剛擷取下來的網頁資料(僅允許為字符串，字  節對象(bytes)，數值，元組，列表，字典，集合，布爾值和 None)才可以進 行轉換。  \n 參考連結 :  https://docs.python.org/zh-cn/3/library/ast.html \n  (3) random 中有許多不同的用法，在每周抽點中我們使用的是 shuffle 的用法， 此 用法會將給定的元素隨機打亂，以達到亂數的目的。 \n  參考連結 :  https://ithelp.ithome.com.tw/articles/10207483  \n 最後我們可以經由 for 迴圈對剛剛打亂的元素進行我們所想要的分法已達到 亂數分組中的分組的目的。    亂數分組及每周抽點程式比較 :亂數分組必須要從 index.html 中去抓取網址， 如在 html 中不存在網址才會從主程式 evenGrouping.dart 中抓取網址，而每 周抽點的程式中則是採用 Request 的方式去產生擷取網站資料的目的，在亂 數分組中可以以 dart 的方式去 run 就會達到分組的目的，也可以使用 scite 進 行 python 指令的運行，這樣也可以對每周抽點進行抽點運行。 ', 'tags': '', 'url': 'Random grouping.html'}, {'title': 'Portable system', 'text': '資料提供及資料統整:40723221、40723237、 40723249 、40723244\xa0 \n 問題:如何對現有的可攜進行更新 python 至 3.8.2 的動作，可攜系統的完整安裝流程，及 python3.8.2 的運行需要做哪一些更動?    (1)直接對舊有可攜進行更新  將可攜系統下的 python 3.7.3 系統更新至 python 3.8.2   \n 1.進入\xa0 https://www.python.org/downloads/windows/   2.往下滑到最底，下載 Windows x86-64 executable installer(上下兩者分別為 Windows x86-64 embeddable zip file 和 Windows x86-64 web-based installer 這兩者是嵌入式64位元python的可執行壓縮檔案和64位元網際端的可執行檔 案)在本次可攜的更新中不會使用到  3.接著開始下載切記不要勾選 pip 選項，接著按下 next  4.先將下載下來的python3.8.2放置桌面，並且將y槽下的data新增加一個py382 的資料夾方便之後可以做測試是否 3.8.2 之 python 可以正常的運行  5.將剛剛下載之 python3.8.2 放置於剛剛創建的 py382 中切記不要將原先的 py373刪除，若之後 py382 的執行產生錯誤才可以使用 py373 做返回原版本的 動作  6.更改執行檔 start_mdecourse.bat 將底下 py373 處更改為自己下在 python3.8.2 所儲存的資料夾名稱  \n [start 開啟檔的修改]  \n 7.重新啟動剛剛更新的執行檔  8.執行 python get-pip.py  9..執行 python -m pip install flask flask-cors markdown lxml bs4 pelican leo  影片教學網址\xa0:   (2)從頭對創建 python3.8.2 的可攜  \n 1.往下滑到最底，下載 Windows x86-64 executable installer \n  2.SciTE：到 https://www.scintilla.org/SciTEDownload.html，下載 ” full 64-bit download” 把檔案 ”wscite432” 搬移至 data 目錄底下，在到data下的wscite432 下的 wscite 目錄下執行”scite.exe”  \n 3. MSYS2：https://www.msys2.org/ 下載 msys2-x86_64-20190524.exe 並執行 \n  4. PortableGit：https://git-scm.com/download/win 下載 64-bit Git for Windows Portable 安裝在 data 目錄下  \n 5.安裝pip為以更新的方式更新可攜或者是以從頭開始的方式更新可攜都必須要 安裝指令為 python get-pip.py 6. 指令為 pip install flask bs4 lxml pelican markdown flask_cors 也必須要安裝這些模組    兩者的比較差異:更新舊有的可攜需要的主要為 python get-pip.py 與下載模 組 pip install flask bs4 lxml pelican markdown flask_cors 並且對 開啟檔 start_mdecourse.bat 進行內容的更動及可，從頭開始執行可攜的更新則 比較麻煩需要下載的模組較多，必須對 SciTE、MSYS2、PortableGit、Tiny C Compiler、Jupyterlab、Fossil SCM 有需要甚至可以將 webots、v-rep 及其他如sharex 等軟體載入可攜系統中。 ', 'tags': '', 'url': 'Portable system.html'}, {'title': 'four wheel car', 'text': '本資料由40723222提供 \n BubbleRob tutorial : 在此教程中可以透過我們自行設置的BubbleRob機器人進行初步的模擬，在上學期中我們有實際的以v-rep操作過這個教程，在這個教程中有含括了很多包括如何建造模型(機器人本體、輪子、後方支撐滑塊、障礙物)，並且經由設定好的距離傳感器去感知並且避開我們所設立的障礙物，其中很重要的要點是如何去設計指令使輪胎兩側的傳動器依照我們所想要的方式去做運動，且當距離感測器接近我們所設立的障礙物時，他必須要做出相對應的反應部會使其碰到障礙物，另外還必須要考慮到視覺辨識系統，使機器人在移動時我們能夠觀測到機器人前方之狀況，此教程能夠使我們更加有效率的使用v-rep這套模擬軟體。 \n 影片教學網址:   https://www.youtube.com/watch?v=CXGJmwHt81g&t=59s \n 本資料由40723243 \n Line following BubbleRob tutorial : 在此模擬教程中我們銜接上面的BubbleRob教程，我們想要使其能夠按照我們所規劃的路徑移動，在四輪車的方面這樣的功能能夠使我們有效的規劃四輪車的行走路徑，以達到更好去控制四輪的目的，在無外部控制器或者是想要直接在模擬器的環境中直接模擬可以採用該方法達到比較好的效率。 \n 本資料由40723240提供 \n External controller tutorial : 遠端控制器教程中，當我們想要從遠端電腦的方式控制我們在模擬中的物件例如:四輪車或機器人時我們就會需要一項遠程控制的控制器，我們可以參考 ROS tutorial 及 ROS 2 tutorial 來達到我們想做控制的想法， ROS 主要比較像是對於機器人的中間控制系統，他能夠藉由傳感器來指引機器人該往哪個方向移動，如下圖所示，就是 ROS 較好的解釋。 \n ROS:比較像是在負責為機器人的各個元件進行溝通與操作的一個框架，以機器人的行走為例，要讓機器人走路需要控制其底下的馬達、還有一些感測器以進行避開障礙物的功能等等，ROS內就有這種類型的函式可以讓控制馬達的程式得以與接收感測器的程式溝通。 \n \n 本資料由40723221提供 \n Simulation : 這裡主要是在描述模擬是如何建立的，在模擬中我們雖然比較不會受到的限制很少，但是因為硬體的關係我們必須要適度調整好例如:模擬的速度快慢、非主要物件的加入或移除，我們也可以從這裡看到系統是如何調整速度運行的快慢和機制。 \n 本資料由40723221提供 \n Simulation settings dialog : \n 這篇教程主要在幫助我們理解如何設定模擬時所需要設定的視窗要如何操控，並且講解當我們導入實際的時間運行時，模擬會產生怎樣的變化，但當我們使用加速或減慢時模擬的變化又會怎樣，在一般的情況下模擬的時間步長如果太快會造成模擬的結果及過程不精確甚至會有偵數漏掉的問題，如果太慢雖然會有較精確的結果和過程但會使得模擬時的總時長太久，在某些結構較符雜的模擬之下，模擬在運行到較為複雜的動作或者較難去運算的動作時會使得模擬的時間跟不上實際的時間，這時v-rep內建有寫入能夠補正此bug的方式，他可以藉由進行其他較為簡單的運動模擬時加速已達到與原先時長同步的效果。 \n 總結 :完成四輪車的模擬必須要有對於模擬軟體的熟悉、馬達的設立、外部控制器的連結、模型的組立、結構的評估(過於複雜的結構可以經由省略內部某些部份零件或者是外觀零件的方式達到簡化)、內部攝像頭的設立、如何以程式(如:python)去所存於模擬中的物件並且對外部控制器做連結，若要進行只單單在模擬軟體中的模擬而不依靠外部控制器去控制作動，則必須要設定在內部模擬器中的感測器(如:距離感射器、視覺感測器等等……)並且布置如線條或者是障礙物的方式去使感測器運行，使物件達到想要的避讓或者是作動，而要達到這些都必須通過程式的設置來完成。 \n ast 模組 : https://docs.python.org/zh-cn/3/library/ast.html \n Rendom 模組 : https://ithelp.ithome.com.tw/articles/10207483 \n Request: https://blog.gtwang.org/programming/python-requests-module-tutorial/ \n mde.tw 中分組之程式 : http://mde.tw/cd2020/content/Grouping.html \n v-rep使用手冊:\xa0 http://www.coppeliarobotics.com/helpFiles/index.html \xa0 \n \n', 'tags': '', 'url': 'four wheel car.html'}, {'title': 'refer e-book', 'text': '', 'tags': '', 'url': 'refer e-book.html'}, {'title': 'Simulation', 'text': "Simulation \n 模擬 \n A simulation in CoppeliaSim can be started, paused and stopped with [Menu bar --> Simulation --> Start/Pause/Stop simulation] or through the related toolbar buttons: \n 可以使用 [ 菜單欄 -> 模擬 -> 開始 / 暫停 / 停止模擬 ] 或通過相關的工具欄按鈕來啟動，暫停和停止 CoppeliaSim 中的模擬： \n \n [Simulation start/pause/stop toolbar buttons] \n [ 模擬開始 / 暫停 / 停止工具欄按鈕 ] \n Internally, the simulator will use additional intermediate states in order to correctly inform scripts or programs about what will happen next. Following state diagram illustrates the simulator's internal states: \n 在模擬內，模擬器將使用其他中間狀態，以正確告知腳本或程序接下來將發生的情況。以下狀態圖說明了模擬器的內部狀態： \n [Simulation state diagram] \n [ 模擬狀態圖 ] \n \n Scripts and programs should alwaysreact according to the current system call function and possibly the simulation state in order to behave correctly. It is good practice to divide each control code into at least 4 system call functions (e.g. for non-threaded child scripts): \n 腳本和程序應始終根據當前系統調用功能以及可能的模擬狀態進行反應，以便正確運行。優良作法是將每個控制代碼至少分為 4 個系統調用函數（例如，用於非線程子腳本）： \n 1.Initialization function: sysCall_init: the function is called only when the script is initialized. \n 2.Actuation function: sysCall_actuation: the function is called when actuation should happen. \n 3.Sensing function: sysCall_sensing: this function is called when sensing should happen. \n 4.Clean-up function: sysCall_cleanup: the function is called just before the script is de-initialized (e.g. at simulation end, or when the script is destroyed) \n 1.Initialization 函數： sysCall_init ：僅在腳本初始化時調用該函數。 \n 2.actuation 函數： sysCall_actuation ：應在發生 actuation 時調用該函數。 \n 3.Sensing 函數： sysCall_sensing ：當應該進行檢測時調用此函數。 \n 4.Clean-up 函數： sysCall_cleanup ：該函數在腳本未初始化之前被調用（例如在模擬結束時或腳本被銷毀時） \n \xa0 \n For examples on how to arrange a typical script, refer to the main script, the child scripts and customization scripts pages. \n 有關如何安排典型腳本的示例，請參閱主腳本，子腳本和自定義腳本頁面。 \n The simulator operates by advancing the simulation time at constant time steps. Following figure illustrates the main simulation loop \n 模擬器通過以恆定的時間步長推進模擬時間來進行操作。下圖說明了主要的模擬循環 \n Simulation loop \n \n [Main simulation loop] \n [ 主要模擬路徑參考圖 ] \n Real-time simulation is supported by trying to keep the simulation time synchronized with the real time: \n 通過嘗試使模擬時間與實時保持同步來支持實時模擬： \n \n [Real-time simulation loop] \n [ 加入真實時間後的模擬參考圖 ] \n Following represents a very simplified main client application (messaging, plugin handling and other details have been omitted for clarity purpose): \n 以下是一個非常簡單的主客戶端應用程序（為清晰起見，已省略了消息，插件處理和其他詳細信息）： \n void initializationCallback  {  \xa0\xa0\xa0 // do some initialization here \n } \n \xa0 \n void loopCallback  {  \xa0\xa0\xa0 if ( (simGetSimulationState()&sim_simulation_advancing)!=0 )  \xa0\xa0\xa0 {  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 if ( (simGetRealTimeSimulation()!=1)||(simIsRealTimeSimulationStepNeeded()==1) )  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 {  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if ((simHandleMainScript()&sim_script_main_script_not_called)==0)  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 simAdvanceSimulationByOneStep();  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 }  \xa0\xa0\xa0 }  } \n \xa0 \n void deinitializationCallback  {  \xa0\xa0\xa0 // do some clean-up here \n } \n Depending on the simulation complexity, performance of the computer and simulation settings, real-time simulation might not always be possible. \n 取決於模擬的複雜性，電腦的性能和模擬設置，實時模擬並不總是完美的。 \n In non real-time simulations, the simulation speed (i.e. the perceived speed) is mainly dependent on two factors: the simulation time step and the number of simulation passes for one rendering pass (see the simulation dialog for more details). In the case of a real-time simulation, the simulation speed mainly depends on the real-time multiplication coefficient, but also to a certain degree of the simulation time step (a too small simulation time step might not be compatible with the real-time character of a simulation because of the limited calculation power of the computer). During simulation, the simulation speed can be adjusted with following toolbar buttons \n 在非實時模擬中，模擬速度（即感知速度）主要取決於兩個因素：模擬時間步長和一個渲染通道的模擬通道數量（有關更多詳細信息，請參見模擬對話框）。在實時模擬的情況下，模擬速度主要取決於實時乘法係數，而且在一定程度上取決於模擬時間步長（太小的模擬時間步長可能與實時時間不兼容）。由於計算機的計算能力有限，因此無法進行模擬。在模擬過程中，可以通過以下工具欄按鈕來調節模擬速度 \n Simulation speed \n \n [Simulation speed adjustment toolbar buttons] \n The simulation speed is adjusted in a way so that the initial simulation time step is never increased (because this might have as consequence the breaking of a mechanism for example). Following two figures illustrate the simulation speed adjustment mechanisms \n 以某種方式調整模擬速度，以使初始模擬時間的步長永遠不會增加（這可能因此而導致機制中斷）。下兩個圖說明了模擬速度調節機制 \n \n [Simulation speed adjustment mechanism for non real-time simulations]  [非實時模擬的模擬速度調整機制] \n \n [Simulation speed adjustment mechanism for real-time simulations] \n [實時模擬與調整機制] \n By default, each simulation cycle is composed by following sequential operations: \n 1.Executing the main script \n 2.Rendering the scen \n 默認情況下，每個模擬週期由以下順序操作組成： \n 1. 執行主腳本 \n 2. 渲染場景 \n Threaded rendering \n The rendering operation will always increase the simulation cycle duration, thus also slowing down simulation speed. The number of main script executions per scene rendering can be defined (see further up), but this is not enough in some situations, because rendering will still slow down every xth simulation cycle (which can be handicapping with real-time requirements). For those situations, a threaded rendering mode can be activated via the user settings, or via the following toolbar button: When the threaded rendering mode is activated, a simulation cycle will only consist in execution of the main script, thus simulations will run at maximum speed. Rendering will happen via a different thread, and not slow down the simulation task. The drawbacks have however to be considered. When threaded rendering is activated, then: \n  \xa0 [Threaded rendering toolbar button] \n Rendering will happen asynchronously to the simulation loop, and visual glitches might appear \n The video recorder will not operate at constant speed (some frames might get skipped) \n The stability of the application might be reduced \n Some operations (e.g. erasing an object, etc.) require to wait for the rendering thread to finish work, before being able to execute, and vice-versa. In those situations, cycles could take more time than in the sequential rendering mode \n 交互渲染 \n 渲染操作將始終增加模擬週期的持續時間，從而也降低了模擬速度。可以定義每個場景渲染的主腳本執行次數（請參閱後面的內容），但這在某些情況下還不夠，因為渲染仍然會減慢每個第 x 個模擬週期的時間（這可能會限制實時性）。在這種情況下，可以通過用戶設置或以下工具欄按鈕激活線程渲染模式： \n \xa0[ 線程渲染工具欄按鈕 ] \n 激活線程渲染模式後，模擬週期將僅包含在執行主腳本中，因此模擬將以最大速度運行。渲染將通過不同的線程進行，並且不會減慢模擬任務的速度。然而，必須考慮缺點。激活線程渲染後，： \n 渲染將與模擬循環不會同步進行，並且可能會出現視覺上的瑕疵 \n 錄影機將無法以恆定速度運行（可能會跳過某些幀數） \n 應用程序的穩定性可能會降低 \n 某些操作（例如去除物件等）需要等待渲染得線程完成工作才能執行，反之亦然。在那些情況下，循環可能比有順序的渲染模式花費更多的時間。 \n Simulation dialog \n 模擬控制視窗 \n The simulation dialog can be accessed with [Menu bar --> Simulation --> Simulation settings] or by clicking following toolbar button: \n 可以通過 [ 菜單欄 -> 模擬 -> 模擬設置 ] 或單擊以下工具欄按鈕來訪問模擬對話框： \n \n [Simulation toolbar button] \n [ 模擬工具欄按鈕 ] \n \n [Simulation settings dialog] \n 模擬設定視窗 \n Time step: the simulation time step. Each time the main script was executed, the simulation time is incremented by the simulation time step. Using large time steps results in fast but inaccurate/unstable simulations. Small time steps on the other hand will (generally) lead to more precise simulations, but will take more time. It is highly recommended to keep a default time step. \n Simulation passes per frame (ppf): the number of simulation passes for one rendering pass. A value of 10 would mean that the main script is executed 10 times (10 simulation steps) before the screen is refreshed. If you have a slow graphic card, you can choose to display only one frame out of two for instance. \n Pause when simulation time higher than: allows specifying a simulation time at which the simulation will   be paused (e.g. to be able to analyze some results at a specific simulation time). \n Pause on script error: if enabled, then a simulation will be paused when a script error occurs. \n 時間步長：模擬時間步長。每次執行主腳本時，模擬時間都會增加模擬時間的步長。使用較大的時間步長會導致快速但不准確 / 不穩定的模擬。另一方面，較小的時間步長（通常）會有更精確的模擬，但是會花費更多時間。強烈建議保留默認的時間步長。 \n 每幀模擬次數（ ppf ）：一個渲染遍的模擬次數。其值為 10 表示刷新屏幕之前，主腳本已執行 10 次（ 10 個模擬步驟）。如果您的顯示卡較慢，則可以選擇僅顯示兩幅中的一幅。 \n 當模擬時間高於以下時間時則會暫停：允許指定暫停模擬的模擬時間（例如，能夠在特定模擬時間分析某些結果）。 \n 腳本錯誤暫停：如果啟用，則在腳本錯誤發生時暫停模擬。 \n Full screen at simulation start: if enabled, then simulation starts in full screen mode. Be aware that in full screen mode, dialogs and messages won't appear or won't be visible, and only the left mouse button will be active. For that reason that mode is only recommended once a scene is properly configured and final. Full screen mode can be left with the esc-key, and toggled via the boolean parameter sim_booparam_fullscreen during simulation. Unler Linux and MacOS the full-screen mode might only partially be supported, and switching back to normal mode might fail on certain systems. \n 模擬開始時全屏：如果啟用，則模擬以全屏模式開始。請注意，在全屏模式下，設置視窗和消息將不會出現或不可見，只有鼠標左鍵處於活動狀態時才會出現。因此，僅在正確配置場景並最終確定場景後才建議使用該模式。可以使用 esc 鍵保留全屏模式，並在模擬過程中通過布爾參數 sim_booparam_fullscreen 進行切換。  Unler Linux 和 MacOS 可能僅部分支持全屏模式，並且在某些系統上切換回普通模式可能會失敗。 \n Real-time simulation, multiplication factor: if selected, then the simulation time will try to follow the real-time. A multiplication factor of X would try to run a simulation X times faster than real-time. \n 實際時間的模擬，倍增係數：如果選擇，則模擬時間將嘗試跟隨實際時間。  X 的乘數將使模擬運行比實時快 X 倍。 \n Try catching up when behind: during real-time simulation, it can happen that the simulation time is not able to follow the real-time (e.g. because of some momentarily heavy calculations). In that case, if this check-box is selected, then the simulation time will try catching up the lost time (e.g. when the calculation load is again reduced), which results in an apparent speed-up. \n 在落後時嘗試趕上：在實時模擬過程中，模擬時間可能無法實時跟踪（例如，由於某些瞬間繁重的計算）。在這種情況下，如果選中此複選框，則模擬時間將嘗試趕上不足的時間（例如，當計算負載再次減少時），從而明顯加快速度。 \n Reset scene to initial state: when selected, then all objects will be reset to their initial state: this includes the object local position, local orientation and its parent (as long as the object wasn't modified otherwise (e.g. scaled)), joint and path intrinsic positions, floating view positions and sizes, etc. This means that the next simulation run will execute in a same way as previous one, unless heavy changes were undertaken (shape scaling, object removal, etc.). Some minor settings are ignored by this item. \n 將場景重置為初始狀態：選中後，所有物件都將重置為其初始狀態：包括對象的局部位置，局部方向及其父對象（只要未進行其他修改（例如，縮放），以及路徑的固有位置，浮動視圖的位置和大小等。這意味著除非進行了重大更改（形狀縮放，對象移除等），否則下一次模擬運行將以與上一次相同的方式執行。此項目將忽略一些次要設置。 \n Remove new objects: when selected, then scene objects added during a simulation run will be removed at the end of the simulation. \n 刪除新對象：選中後，在模擬運行期間添加的場景對象將在模擬結束時被刪除。", 'tags': '', 'url': 'Simulation.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};