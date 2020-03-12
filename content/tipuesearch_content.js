var tipuesearch = {"pages": [{'title': 'week', 'text': 'week1-week5 \n week6-week9 \n week10-week14 \n week15-week18 \n', 'tags': '', 'url': 'week.html'}, {'title': 'week1-5', 'text': 'week1 \n \n 1.登入自己的github帳戶，並且創建名為cd2020的個人倉儲。 \n 2.進入存放的資料夾例如;tmp \n 3.在小黑窗上打上git clone\xa0https://github.com/s40723221/cd2020。 \n 4.git submodule add https://github.com/mdecourse/cmsimde.git。 \n 5.完成後使用cd cd2020 ->cd cmsimde進入cmsimde的資料夾內。 \n 6.完成之後使用python wsgi.py進入靜態9443內編輯個人網站的資料。 \n 7.使用git add .\xa0 -> commit -m ＂標題＂ -> git push將剛剛編輯好的東西上傳。 \n 8.進入個人倉儲的setting中更改branch(分支)至master。 \n 影片教學: \n \n \n week2 \n 將可攜系統下的python 3.7.3系統更新至python 3.8.2 \n 1.進入 https://www.python.org/downloads/windows/ \n 2.往下滑到最底，下載 Windows x86-64 executable installer (上下兩者分別為 Windows x86-64 embeddable zip file 和 Windows x86-64 web-based installer 這兩者是嵌入式64位元python的可執行壓縮檔案和64位元網際端的可執行檔案)在本次可熙的更新中不會使用到 \n \n 3.接著開始下載切記不要勾選pip選項，接著按下next \n 4.先將下載下來的python3.8.2放置桌面，並且將y槽下的data新增加一個py382的資料夾方便之後可以做測試是否3.8.2之python可以正常的運行 \n 5.將剛剛下載之python3.8.2放置於剛剛創建的py382中切記不要將原先的py373刪除，若之後py382的執行產生錯誤才可以使用py373做返回原版本的動作 \n 6.更改執行檔start_mdecourse.bat \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_mdecourse\nset HomeDrive=%Disk%:\\home_mdecourse\nset Home=%Disk%:\\home_mdecourse\nset USERPROFILE=%Disk%:\\home_mdecourse\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\py373\\DLLs;%Disk%:\\py373\\Lib;%Disk%:\\py373\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py373\n\nset GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n\nset path_python=%Disk%:\\py373;%Disk%:\\py373\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nREM coreutils is for compiling fossil scm\nset path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64;\nset path_tcc=%Disk%:\\tcc;\nset path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin;\nset path_nodejs=Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_xming=%Disk%:\\Xming;\nset path_latex=%%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32;\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;\n\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\n\nExit \n 7.重新啟動剛剛更新的執行檔 \n 8.執行python -m pip install  flask flask-cors markdown lxml bs4 pelican leo \n \n git pull request操作說明: \n 1.以自己github之帳號fork老師的倉儲也就是 fork : https://github.com/mdecourse/cd2020 \n 2.接下來到自己的倉儲中找到剛剛fork下來的老師倉儲並且複製網址 \n 3.利用git clone 自己帳號下老師的網址 \n 4.在執行git submodule add  https://github.com/mdecourse/cmsimde.git \n 5.進入到9443開始編輯自己帳號下老師的網站 \n 6.編輯完成後執行git add commit push三個步驟 \n 7.利用自己帳號下修改完成的老師倉儲建立新的pull request \n \n \n 8.按下提交之後等待老師接受並且merge即可完成此次的pull request \n \n', 'tags': '', 'url': 'week1-5.html'}, {'title': 'week6-9', 'text': '', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': '', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '', 'tags': '', 'url': 'week15-18.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};