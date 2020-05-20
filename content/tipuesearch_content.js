var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '40723145', 'text': '個人倉儲: https://github.com/s40723145/cd2020 \n 個人網站: https://s40723145.github.io/cd2020/ \n', 'tags': '', 'url': '40723145.html'}, {'title': 'Oauth2', 'text': '建立Google domains憑證 \n \n 將憑證的內容存為文字檔存在pj1資料夾的上一層 \n 再將config.py裡的oauth_scrum改為oauth_gm \n 接著在終端機啟動8443頁面 \n 進入8443頁面後要利用gm的帳號來登入即可看到相關頁面 \n', 'tags': '', 'url': 'Oauth2.html'}, {'title': 'course notes', 'text': 'week11: \n 複習Topic內容 \n \n 說明電子書內容所要表達的意涵 \n \n 使用虛擬主機啟動Ubuntu20.04 \n \n 網路設定說明 \n 示範建立網路連線 \n 在Linux系統下安裝套件 \n \n', 'tags': '', 'url': 'course notes.html'}, {'title': '40723138', 'text': '分組網頁: https://s40723138.github.io/cd2020ag4/content/index.html \n 個人網頁: https://s40723138.github.io/cd2020/content/index.html \n 一開始建立了自己的隨身系統,整理了裡面的python版本與其他需要的程式環境; \n 再來幾周進行了遠端上課,統整了分組的倉儲,並進行分組與電子書重點整理, \n 期中過後,開始研究虛擬主機上進行程式運作,並可以接收檔案(.ttt),以便線上協同設計 \n', 'tags': '', 'url': '40723138.html'}, {'title': '40723137', 'text': '', 'tags': '', 'url': '40723137.html'}, {'title': '影片', 'text': '\n', 'tags': '', 'url': '影片.html'}, {'title': '四輪小車', 'text': '參考尺寸 \n \n 建模 \n 避震器 \n \n 下車殼 \n \n 斜齒輪 \n \n \n', 'tags': '', 'url': '四輪小車.html'}, {'title': '翻譯文件', 'text': '', 'tags': '', 'url': '翻譯文件.html'}, {'title': 'IndustrialAndEngineeringProductDesignCollaboration', 'text': '3.討論與啟示 \n 3.1角色變更 \n 工業設計師在設計階段占主導地位，工程設計師則是後續的角色，除了第3類型的設計過程以外，其他都是工業設計師提出設計概念開始的，對於1、2類型是由工業設計師依據形狀定義設計概念及使用，第4種類型在設計概念階段是集成方式，但是是由工業設計師擬定最初的設計理念。與其他三種不同第3類型是對現有產品進行修改，此種類型是由工程設計師進行布局及設計。綜上所述可發覺工業設計師為概念開發者，而工程設計師則為概念實現者，在開發新產品或重新設計時設計師是很重要的角色，設計產品新的用途及含義也可看作新技術從現有技術及原理開始的證據。 \n 關於工業設計師的知識，並不會很少考慮內部零件，他們有足夠的知識處裡內部功能組件並顧及外部功能設計。除了第1類型定義外部形狀總是通過工業設計師考慮及重新布置內部功能部件，第2類型則是特別情況。工業設計師通過內部直接影響到外型的零件去設計外型，但不會參與設計內部零件，但零件的作用影響到工程設計領域，兩項能整合即是歸功於高層管理的支持及兩組間共享的CAD工具 \n 3.2選擇設計方法 \n 理論上”由內而外”和”由外而內”這兩個方法結合工程設計師不同的工作習慣和工業設計師的4個協作設計過程可看作兩個方法，本張籍是討論這四個類型和兩種方法之間的關係，及成功應用每個類型的條件，並將其應用於顧問和客戶合作夥伴。\xa0 \n 對於強調使用環境的產品工業設計師應該先定義外觀，再由工程設計師設計確定內外部功能零件鏈接，這是由外而內的方法，其中第1、2類型幾乎適用此種方法，第3類型就是將內外流程定義為初步布局用其開發外部及後續一起設計的一種案例，第4類型則為混合過程，他考慮到兩種方法，因為內外皆已經決定，若將內部布局定義為”由內而外”，則此方法較不適合消費產品，但適合工業耐用商品。 \n 使用第1類型時，工業設計師可以自由提出創新的設計思路，但該方法將導致兩個問題： \n 1.很難獲得工程技術性能。為了獲得最佳性能，內部功能部件可能會與外形衝突。 \n 2.為了解決第一個問題，設計團隊可能會通過在功能和外觀之間進行權衡來折衷原始設計概念。 \n 為了成功運用此方法，當折衷方案發生時，高層管理人員必須給予強大的支持以保持設計的創新性。我們在B公司中觀察到，類型2可以替代這些問題。它的策略是，工業設計師在移動或放置相關內部零件時確定外觀形式。這避免了內部和外部之間的嚴重干擾。但有爭議的是，工業設計師是否應在外觀設計開發之外還進行內部佈局設計，但他們可能會在自己的知識範圍內而折衷創新。因此要成功應用第2類型，設計師應該對工業設計和工程設計都非常了解。 \n 為了在早期階段實現高階設計概念的可行性，類型4特別的是工業設計師的概念和工程設計師的技術合力進行新產品開發。此過程很有效不過開發創新產品的公司需要適當的工作條件，眾所周知，戴森公司之所以可以成為榜樣，就是因為實施設計師和工程師作為一個部門的成員共享一個工作區，在此過程中，公司需要有一個由兩個小組共享一個工作空間並按預期吸收每個學科的文化。更重要的是激發設計師挑戰性的組織文化，並願意一起工作。如果設計師擔心失敗而產生公司的罰款，他們將更加保守。若沒有這種情況的改變，即使在公司中有據可查的流程也無法有效地處理第4類型的工作。 \n 在行業中，許多工程公司與外部工業設計師合作。儘管我們沒有調查這種類型的協作，但是，根據我們的發現對可能的流程方案進行討論將是有益的。當製造商與設計諮詢公司合作時，他們可以得到支持，以按時完成項目或產生新的想法（Bruce＆Morris，1994）。在顧問和客戶合作關係中，有兩種過程耦合方式： \n 1.被動耦合，其中顧問在與客戶聯繫以獲取更多信息或查看其結果時獨立開發解決方案。 \n 2.主動耦合，其中顧問和客戶設計師的協作團隊密切合作生成解決方案（Gericke＆Maier，2011年）。 \n 在被動耦合中，由於外部設計師獨立工作，其設計過程將類似於類型1或類型2。當客戶希望利用他們缺少的特定專業來收集盡可能多的創意時，類型1將非常有用。當客戶公司高度以技術為導向並且有足夠的能力在強大的工程支持下實施好的概念時，這種情況將很有幫助。如果客戶的能力比上述情況要小，並且在初期需要聘請外部工業設計師來領導其產品開發，此狀態下較適合類型2。主動耦合模式將具有與類型3和類型4相似的過程。當客戶已經具有良好的設計方向和相關技術，並且想要改善產品的美學外觀時比較適合類型3。除非客戶和顧問公司的整合團隊在項目期間在同一空間工作，否則類型4是不可能的。在顧問和客戶合作夥伴的協作設計過程中應該考慮其他因素。在許多情況下，客戶為顧問提供的信息受到限制。因此，顧問和客戶合作夥伴以及公司內部發生的相同類型的協作過程在內容方面將是不同的。儘管如此，我們的研究結果和討論仍可為在消費電子領域選擇更好的設計方法提供線索。 \n \xa03.設計過程類型的含義 \n 工業設計師和工程設計師在設計方法和關於產品開發的觀點上是不同的（Eder，2013； Pahl等，2007； Ulrich＆Eppinger，2012）。工業設計師產生以用戶為中心的解決方案概念，工程設計師根據技術角度解決設計問題。這兩個群體的專業所面臨的過程可能是開發具有競爭力的創新產品的基礎。此外，系統工程設計和以用戶為中心的設計思想的耦合過程對於在顧問與客戶之間的關係中生成以用戶為中心的解決方案是有益的（Gericke＆Maier，2011）。耦合過程是公司採取並實現市場競爭力的最佳選擇。例如，消費電子公司使用四種類型的協作設計過程來實現其市場目標。工業設計師在這四種類型的早期階段中的作用是顯而易見的，採用工業設計師專業的方式是採用適當類型的協作設計過程的重要因素。通過給予類型1中的工業設計師自由，可以增加獲得創新設計概念的可能性。那麼，這種自由如何驅動工業設計師創建創新設計概念呢？實際上，建築和工業設計師首先從解決方案的圖像入手，然後通過重複試驗最終確定（Lawson，2006； Roozenburg＆Cross，1991）。這與一個模型有關，在該模型中，設計人員首先基於預設進行推測，然後進行分析（Hillier等，1972）。這意味著工業設計師依靠對未來的展望來創造創新的概念，而不是對市場和客戶進行深入的設計研究。 Press and Cooper（2003）補充說，工業設計方法是價值驅動的。因此，類型1的工業設計師可以不受約束，可以通過設想所需的未來產生創意。 \n \xa0Norman和Verganti（2014）認為，創新產品開發是通過技術或含義的改變進行的，而不是以人為中心的認真的設計研究。他們補充說，以人為本的設計方法更適合於改進現有產品。在消費電子領域當前的產品開發環境中，產品規劃專家在市場和客戶研究中起著關鍵作用。因此，產品規劃團隊對工業設計師的投入將僅限於他們的創造力。這解釋了為什麼公司以相反的方式使用類型1；首先開發概念，然後再定義市場，而不是相反。通常，在產品設計概念中，設計師會考慮與技術高度相關的功能概念，以及會給用戶帶來新含義的樣式概念（Baxter，1995年）。因此，由於功能和樣式概念，工業設計師提出的設計概念應該是創新的。當涉及到技術時，工程設計師應開發新技術或尋找適當的技術來實施該概念。如果在產品開發計劃階段沒有被拒絕，這種類型的過程將促進新技術的開發。 \n \xa0如果我們考慮將類型2和類型3用於重新設計，那麼類型2何時比類型3更好？類型3的特性符合工程設計中大多數設計過程。工業設計被認為是工程設計領域的事後考慮（例如Andreasen＆Hein，2000； Hubka＆Eder，1987； Pahl等，2007）。按照他們的觀點，工業設計的功能與產品外觀的各個方面有關，例如確定產品特徵的樣式、形式和顏色。類型3是工程設計師為設計概念提供技術解決方案的過程。他們要求工業設計師開發外觀。因此，類型3僅使用工業設計師的部分專業知識來創造美學外觀。從這個角度來看，類型2比類型3可以為工業設計師提供更多的方式來展示其專業知識。考慮到類型3是最常用的過程，因此在過程管理方面可以更加有效。類型3早期階段的不確定性可能是四種類型中最小的。設計概念的大多數技術解決方案都是由工程設計師在早期階段製定的，而工業設計師僅受限於創造美觀外觀。 \n \xa0我們找不到的一個過程是類型5：ED主導的技術驅動過程。這可以與類型1：由ID主導的概念驅動過程形成對比。在類型5中，工程設計人員將首先開發一項新技術而無需考慮產品開發計劃，並使用測試原型來測試其性能。接下來，工業設計師為該技術產生新的產品設計概念。然後可視化設計概念和原型用於決定產品開發。應用類型5，公司可以創建新類別的產品，從而增加打開新市場的可能性。我們無法找到這種類型的原因之一是創新技術開發的稀缺，以及新技術滿足新概念的難得機會。另外，在決定產品開發之前，公司不太可能等不確定的工程設計師和工業設計師。為了使此過程更好，我們需要工程設計師開發新技術，需要工業設計師使用相互合作的技術創建新概念。根據這一論點，類型4在正式用於創新產品設計時會很有用。它可以使工程設計師開發的技術與工業設計師提出的新概念集成在一起。 \n \n 結論 \n \n 我們在確定協作設計過程類型的存在以及在公司中採用特定類型的條件。我們根據工業設計師和工程設計師的深入訪談數據建立了協作設計流程。結果我們發現了四種類型的協作設計過程。 根據設計過程早期階段的不同對它們進行分類。 四種類型的過程在不同的上下文中用於不同的目的。 有時它們會被戰略性地用於開發新設計或重新設計，有時它們會由於內部和外部因素而有機地應用。 我們還發現，工業設計師的作用是有影響力的，而且是擴展的。 \n \xa0設計過程模型的抽象特徵和研究中的一門學科方法與實際實踐並不完全匹配，在這方面，有人要求結合不同的設計過程模型（Albers，2010； Dorst，2008）被確定為造成這種問題情況的原因（Brooks Jr，2010； Eckert＆Clarkson，2005）。。四種類型的過程是工業設計師驅動的以解決方案為導向的方法和工程設計師以問題為導向的方法的組合過程。它們表明，即使在單個領域（即消費類電子產品）中，實際的設計過程也無法用單個模型來表示。為了提高設計過程的適用性並在設計實踐中獲得設計方法的適當支持，需要考慮公司和項目具體環境的更為具體的過程模型（Finkelstein＆Finkelstein，1983； Gericke＆Blessing，2011）。我們特別專注於消費電子領域，在這一領域中，工業設計師和工程設計師在產品開發中起著重要的合作作用。我們發現了四種類型的設計過程，並確定了它們的目的和背景。因此，我們發現的有關上下文的詳細信息將為計劃進行新產品開發的有效設計過程管理的公司提供有用的信息 \n \xa0根據研究方法，我們展示如何從設計師的深入訪談數據中建立協作設計過程。我們確定了過程元素，並使用它們構造了部分過程，並使用鑲嵌方法建立了詳細的協作設計過程。我們還引入了“過程塊”，並定義了一個或兩個交互塊作為一個階段。我們認為這種方法有利於確定最佳水平的實際設計過程。我們的過程模型的形式與其他基於階段的模型相比較（例如French，1998； Pahl等，2007），我們發現，在階段之間很少發生反向迭代或反饋。這與現有的基於階段的工程設計過程模型的描述不同。在理想情況下，我們認為雙向迭代是可能的，但是實際上由於激烈的市場競爭，我們認為這種情況很少發生。 \n \xa0特別是針對其他產品領域中的其他項目案例，需要對該方法進行進一步的研究。 本研究中的公司均為電子產品製造商。 因此，結果僅限於此產品類別。 我們需要測試這四個協作設計過程如何在其他公司中應用。 相反，值得研究創新產品開發和應用過程的案例。 \n', 'tags': '', 'url': 'IndustrialAndEngineeringProductDesignCollaboration.html'}, {'title': '直播參與', 'text': 'https://s40723150.github.io/cd2020ag2/content/%E5%88%86%E7%B5%84%E8%A8%8E%E8%AB%96%E7%B4%80%E9%8C%84.html \n \n \n', 'tags': '', 'url': '直播參與.html'}, {'title': '40723115', 'text': '', 'tags': '', 'url': '40723115.html'}, {'title': 'python３８２更新', 'text': '\n 首先到" https://www.python.org/downloads/release/python-382/ "下載Window x86-64 executable installer，下載完後，執行python-3.8.2-amd64.exe\xa0 \n 選Customize installation，再uncheck pip option，就可以繼續安裝置完成。 \n 進入安裝號的對應目錄複製檔案到 " 201906_fall/data" \n SciTE下載: 從 "\xa0 https://www.scintilla.org/SciTEDownload.html \xa0" 下載 " \xa0 full 64-bit download \xa0" 載完病解壓縮後，搬移至data下(有需要的話)，接著到相應的目錄執行SciTE.exe，開啟後到 OPTION>>>OPEN GLOBAL OPTION FILE進行切換到UTF-8編碼即開啟即時更新:\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 將code.page=0更改成code.page=65001(切換到UTF-8編碼)\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 將#load.on.activate=1的井字號拿掉(開啟即時更新)，儲存，關閉SciTE。\xa0 \n ＭＳＹＳ２下載： https://www.msys2.org/ \xa0\u3000下載msys2-x86_64-20190524.exe\xa0並執行\u3000，點選Ｂｒｏｗｓｅ，選擇２０１９０６＿ｆａｌｌ／ｄａｔａ後，就可開始安裝，安裝結束後，ｕｎｃｈｅｃｋRun MSYS2 64bit now，結束下載流程。 \n protablegit下載: https://git-scm.com/download/win \xa0下載\xa064-bit Git for WindowsPortable安裝在data目錄下 \n pip下載:到 https://bootstrap.pypa.io/get-pip.py 頁面，滑鼠右鍵另存新檔到CD2020/data執行，到cmd 輸入python get-pip.py開始下載，下載完成後輸入pip，測試pip是否正常運行。 \n 下載可在python使用的模組flask,bs4,xml,elican, mrkdown,flask_cors,leo，指令為pip install flask bs4 lxml pelican markdown flask_cors leo \n git clone 整個倉儲到 data 目錄下並命名目錄為 tmp \n putty下載:下載 putty 放到data裡面，把之前的ssh和.gitconfig放到home裡面測試是否可以成功用ssh推送資料。 \n \n', 'tags': '', 'url': 'python３８２更新.html'}, {'title': 'project', 'text': '', 'tags': '', 'url': 'project.html'}, {'title': 'assignment 1', 'text': '亂數分組 \n import random \n import requests \n # getNumList 主要在每組最低人數下, 將不足 10 人的分組平均分配至各組 def getNumList(total, eachGrp=10): \n # total is the number of students \n # each group at least 10 students #eachGrp = 10; # may divide into "grpNum" number of group grpNum = total // eachGrp; \n # check grpNum #print(grpNum) \n # vacan list splits = [] \n # find remainder when total number divid into "grpNum" number of group remainder = total % grpNum \n # number of people in one group by calculation calGrp = total // grpNum for i in range(grpNum): splits.append(calGrp) \n # check first splits \n #print(splits) for i in range(remainder): splits[i] += 1 \n # check final splits #print(splits); return splits; # 儲存學生名單資料的 url target_url = "http://mde.tw/cd2020/downloads/2020spring_cd_2a_list.txt" \n # 利用 requests 讀取 url 中的資料 f = requests.get(target_url) \n # get student list from target_url # 利用 splitlines() 將資料放入數列 studList studList = f.text.splitlines() # 每組預計分組的最低人數 num_in_one_group = 10 \n # 每組學員暫存數列 gpList = [] \n # 全班分組數列 group = [] \n # 各組人數數列 numList = [] \n # get numList numList = getNumList(len(studList), num_in_one_group) \n # check numList # 列出已經補齊的各組人數數列 print("預計各組人數數列:" + str(numList)) output = "" gth = 1 inc = 0 \n # 弄亂 studList random.shuffle(studList) output += "以下為尚未排序前的各組學員學號: \\n" for i in numList: # 列印區隔符號 output += \'=\' * 20 + "\\n"; output += "group " + str(gth) + " 有 " + str(i) + " 人: \\n" \n # 每組學員暫存數列, 在此 reset gpList = [] for j in range(i): output += studList[j+inc] + "\\n" \n # 在各分組數列中加入將對應的學員學號 gpList.append(studList[j+inc]) gth = gth + 1 inc = inc + j # 將各組學員數列依照學號排序 gpList.sort() group.append(gpList) \n # 列出尚未排序前的分組結果 print(output) \n # 列出已經完成排序的分組數列 print("已經排序後的分組數列:" + str(group)) output = "" \n # 列出已經排序後的分組名單 output += \'=\' * 25 + "\\n" output += \'以下為排序後的各組成員名單:\\n\' gth = 1 \n # 先列出純文字以 \\n 跳行組員資料 for i in range(len(group)): \n # 列印區隔符號 output += \'=\' * 20 + "\\n" output += "group" + str(gth) + "\\n" gpList = [] for j in range(len(group[i])): output += str(group[i][j]) + "\\n" gth = gth + 1 print(output) \n 每組隨機抽選: \n 學員名單 URL: \n \n 2a \n 2b \n \n  每組抽選人數:      \n \n', 'tags': '', 'url': 'assignment 1.html'}, {'title': 'assignment 2', 'text': '討論 topic 0 \n 主題:協同設計出更好的產品 今天，數位產品比以往任何時候都更加複雜。創建它們需要多個團隊 成員，每個成員都有自己的一套技能和專業知識。例如，在Savvy，我們的客戶 與以下人員緊密合作：產品經理，UX設計人員，視覺設計師，開發人員，內容 戰略家和成長專家。 我們使用設計協作來處理這種複雜性。正確完成，設計協作可助力 每個專家都有共同的心態，流程和工具，共同建立更好的 產品更快。 我們編寫了此資源，以幫助其他應用程序創建者採用協作文化和流程。 繼續學習為什麼設計協同對於創造吸引人的產品很重要，以及 經驗。我們還將深入探討設計協作心態和文化，工具的要素 進行有效的設計協作，以及實際工作中的設計協作示例。 什麼是“設計”協同？ 在進入之前，我們需要在同一頁上了解什麼是設計協同…… 簡單來說，設計協同就是在設計優先的環境中進行協同。 由於設計的本質，特別是我們在Savvy所做的設計，設計協同趨向於超越人們通常認為的協作。 通常將協作定義為兩個或兩個以上的人共同完成一項任務 為了實現共同的目標，設計協作涉及更多。 設計協同包括更多具有不同技能，艱鉅挑戰和更大規模的人員,具有深遠影響的目標。 您可能將協同視為兩個人掛在一塊藝術品上。它只需要溝通，團隊合作和四隻手。設計協同是指一組策展人.精心設計訪問者的體驗。他們選擇藝術品，選擇在何處以及如何懸掛藝術品， 它所居住的房間（以及房間的照明，家具），甚至前面的房間和建築物 整個。為什麼設計協作很重要 您可以在沒有協同的情況下設計產品，但是需要一個協同設計過程才能完成 不錯的產品。這就是設計協作如此重要的原因。 我們不僅為客戶構建應用程序。精巧構建複雜且多平台的體驗 內部系統，在某些情況下還包括整個品牌和業務。為此，我們利用專業知識 跨多個核心學科：戰略，設計，開發和增長。每個項目都涉及 許多人都有各自的技能和專長。 設計協作將這些思想融合在一起，將他們各自的專業知識結合在一起 創建解決方案，以解決共同目標的所有方面。而不是一個人遇到問題 角度來看，設計協作將這個問題擺在所有專家面前，迫使他們考慮新 觀點和可能性。 例如，我們在設計過程的早期就讓我們的開發人員參與進來，以確保我們 盡快解決技術機會和局限性。這使我們可以有好處並推動我們的技術能力，同時進一步消除了複雜的障礙處理。它還限制了一個人可以在筒倉中工作的數量，從而使工作保持公開狀態,並強調用戶需求和產品目標。 培養設計協同心態 在設計過程中建立有效的協同時，正確的思維方式大有幫助。它規定了誰進行協同，如何進行以及達到何種目的的準則。 合作適合每個人 設計師有時會認為不是設計師的人沒有資格提供良好的產品 反之。但是出色的設計不只是視覺效果。它涵蓋了有關產品的所有內容，從 它的品牌，工程技術及其成長。 設計協同吸引了許多人，每個人都有自己的觀點和優勢。它給大家一個聲音。這些新鮮的觀點為設計師提供了更多信息。觀點 使設計師能夠針對其他設計有持久並有影響的選擇做出正確的決定， 開發和營銷選擇 與客戶的合作和其他設計師和團隊的合作一樣重要 成員。在Savvy，我們讓客戶參與產品的整個創作過程。我們 花些時間來解釋選項，並與客戶進行討論以確保我們了解他們的想法。 這使我們能夠及早獲得客戶的認可，並從明確的起點和終點開始工作。 更大的曝光量並不是什麼好事，沒有人知道他們正在與客戶第一次合作. 客戶合作意味著無需花費高昂成本就能更快地獲得更清晰的產品 後退和不必要的會議。 很容易陷入當下而忽略全局。通過更早地參與更多的人 而且，您正在與隊友建立更緊密的聯繫，並共同承擔責任， 對產品成功的興趣。您正在創建一個更加開放和透明的流程，因為更緊密聯繫和投入的團隊。 合作是背景性的 客戶向我們提出了複雜的挑戰和目標。更不用說，我們持續努力 與我們的客戶進行長達數月甚至好幾年的交流，並積累了過去的大量知識 決策，研究和其他有價值的地方。 通過採用上下文優先的方法，您可以確保每個人都處於最高水平知識。這樣，他們就可以在產品上做出最明智的決定。 為了做到這一點，我們通過引入所有團隊成員儘早，記錄和記錄會議，建立一些重疊的地方以及過程中的下一個團隊成員就像客戶一樣。 在個案協同的基礎上，上下文也同樣重要。請遵循以下準則以保持 協作中的上下文優先： 在顯示您的工作之前提供上下文。如果您正在工作，則您的工作是否出現在屏幕上 提供背景信息，您已經失去了聽眾的注意力。 描述您要解決的問題或要達到的目標。介紹與當前問題相關的工作。解釋您的想法以及為什麼要這麼做這些決定。請具體說明您要回饋的內容。 合作是開放，誠實和無畏的 將您的工作（和您自己）放在那裡並不容易。情緒會阻礙提供 開放和誠實的反饋，尤其是當您擔心會傷害他人的感受時。 這並不意味著在協同中沒有情感的位置。 感覺如何在設計中很重要。我們為有情感， 在決策中使用情感的人。離開談話可能會縮短 潛在的想法或解決方案。其實，僅圍繞事實和數據進行實際的討論是不會的。 提供完整圖片。在最壞的情況下，它可能是不相關或提供虛假的敘述。 在Savvy，我們使我們的團隊對收到反饋“無所畏懼”。這意味著放手 關於我們為自己創造的東西而被批評的任何焦慮。這也意味著了解我們 在一起變得更強大，更有機會創造偉大的事物。無所畏懼，我們 更好地信任並相互授權，以提供誠實和周到的反饋。 我們的團隊還相信，不要害怕提供反饋。這意味著了解 需要解決的問題以及客戶的品牌和目標。這也意味著要問很多 提問以發現相關思想或幫助指導決策。 嘗試以探索性和指導性的方式提出反饋意見，以建立並改善工作而不是拆散。您的反饋意見應具有建設性。與其說你不喜歡什麼，不如說 反饋以指出您要幫助解決的問題。在以下方面提供可行的步驟 改善工作，或者至少改善您的思維背後的理由。而且不要忘記 表達您喜歡什麼以及為什麼。 合作不僅僅是新的想法 開放並接受協作反饋是一回事，解析這些想法是另一回事 並將它們用作激發自己的催化劑。這是一項發展起來的高級技能 時間。一種實踐方法是成為更好的聽眾。 通常，在與他人交談時，我們會更多地考慮接下來要說的內容 比別人說什麼這會影響反饋過程，尤其是在設計中，因為我們 在聽到其他意見或解決方案之前，通常都知道我們要說什麼。 當您選擇先聆聽然後再做出反應時，它可以讓您完全理解反饋 有人在介紹您，並讓您更深入-他們使用的觀點是什麼 他們來自哪裡？很有可能這是您在 創建過程。通過聽取並理解反饋的上下文和推理 您正在接受，正在向更多的視角，思維方式和體驗方式開放您的設計。然後，您可以針對挑戰，目標和舉例子測試這些新觀點。 您正在設計用於查看是否更適合用戶。 當所有協作者都在積極聆聽時，更容易接受反饋。 最終，提供良好反饋的技能來自學習如何獲得反饋。當我們做一個 努力成為更好的聽眾，我們也發現自己變得更加謙虛，我們認為，更好的設計師。 尋找和使用正確的設計協作工具 正確的工具在增強團隊的設計協作思維方面大有幫助。 在這 部分，您將了解在協作工具中尋找什麼。 我們還建議我們的工具及自己的經驗。 選擇合適的工具 有效的協作工具為協作者消除了所有障礙，使他們能夠快速輕鬆地訪問和 與工作互動。 這將重點放在提供反饋上。 他們還允許其他人 在不破壞原始設計的情況下進行協作。 過去，我們使用依賴於提供基本版本控制的工具，而不是真正的 協作功能。 例如，設計人員將保存一個Sketch文件並將其上傳到Dropbox。 然後，另一個團隊成員將下載它，進行處理，然後重新上傳。 沒有簡單的方法 在文件移交給他人的情況下進行更改。 我們嘗試了與Github類似的方法， 實踐證明，該工具非常適合管理代碼庫，但在迭代設計工作中卻不那麼重要。 不用說，這些版本控制流程使我們的協作更加耗時， 令人困惑，而且非常不合作。 現在，我們根據協作類型從多種更高級的工具中進行選擇,並且想要實現。 FIGMA 這是一個協作優先的共享工作區工具。 Figma非常適合在其中有多個人 設計文件的相同區域。 您可以觀看隊友設計或在同一個設計上一起即時工作 。 好處: Figma降低了某人在筒倉中工作的能力。 無需添加不必要的修飾或創建靜態可交付結果即可實現協作。 所以 您無需更改工作流程即可展示設計。 可以輕鬆地在其本機環境中查看並與之交互，並隨意進行調整。 何時使用：流量文檔，高保真線框，即時協作和行走 客戶通過一系列屏幕來解釋並獲得有關設計方向的反饋。 Marvel 雖然Figma傾向於感覺更自由和靈活，但Marvel允許更標準化的形式 合作。 這也使我們的客戶可以輕鬆地與我們合作。 好處： Marvel是一個更簡潔，更規範和集中的空間，非常適合與非設計團隊成員合作 。 它消除了客戶支付帳戶或深入了解工具的所有需求 去看工作。 客戶可以下載屏幕並通過Marvel在設備環境中查看它們的運行情況 應用程式。 使用時間：與客戶和開發人員一起呈現更多最終設計工作。 （學習關於 Marvel與其他原型工具的比較。） 其他合作工具 Zeplin是一個有用的傳遞工具，可讓開發人員深入了解設計的細節。 工作。 （我們在這裡更深入地討論Zeplin。） Quip是集思廣益和產品/過程文檔的絕佳平台。 我們用它來記錄 並組織團隊成員在工作時需要了解的所有背景和知識 一個專案。 對於集思廣益而不是視覺關注的新想法也很有用。 請注意，還有許多其他工具可以為協作增加類似的好處， 上面列出的。 該列表代表了在我們日常工作中對我們有效的工具 協作，並不表示所有選項都可能對您的團隊有效. 精明的設計合作過程在實踐中 現在，讓我們採用上面概述的最佳實踐和工具，並展示它們如何組合在一起。 現實生活中的情況。 我們將使用Press Play應用程序中的實時繪圖體驗來演示 設計協作的重要性。 這項經驗涉及到跨學科的團隊成員數量，包括視覺設計師，UX設計人員，開發人員，產品經理，當然還有客戶。 處境與挑戰 Press Play是一個抽獎活動應用程序，可保存每日，每周和每月的圖紙。 用戶獲得門票 觀看廣告，然後選擇五個表情符號輸入繪圖。 然後根據 他們的選擇如何與圖形的隨機選擇表情符號匹配。 這個特殊的任務有 我們為正在等待現場繪畫結果的用戶創造了一個有趣而激動人心的現場體驗。 對於我們來說，為這種體驗創建類似遊戲的動畫非常重要。 我們特別想要 在用戶去看他們的屏幕時在屏幕上喚起一種嬉戲和期待感 所選表情符號與抽獎活動附圖中的表情符號匹配。 就是說，我們需要注意動畫所需的複雜程度及其影響 在整個產品的時間表和成本上。 我們的目標是將保真度提高到 合理的時間，而不會顯著影響項目的預算。 合作過程 第一階段：線框和集思廣益 首先，精明的用戶體驗設計師創建了Press Play的整體用戶體驗和線框，確定了 需要屏幕和每個屏幕的時間安排。 她還提出了一個粗略的概念（如圖 右圖）用於實時繪圖動畫，根據客戶的需求和項目的已建立UX。 她向產品經理和視覺設計師展示了線框和粗糙的動畫設計師。 然後，這三個人都與客戶會面，因此每個人都可以直接聽到反饋。 第二階段：研究與背景 精明的視覺設計師負責創建實際的實時繪圖動畫 新鮮的眼睛，並且對Press Play產品沒有太多的先驗知識。為了起床，他 與UX設計人員和產品經理進行了深入的交談。他還致力於其他研究 有時間了解整體產品目標，挑戰並熟悉工作 至今。如前所述，他是線框演示的一部分，並為客戶反饋。 在這種情況下，他進行了一些與手頭任務直接相關的其他研究。 通過這樣做，他確保自己了解現場繪畫體驗的要求，目標和挑戰。他查看了具有類似經驗和保真度的其他應用，並參考了動畫，以了解最終動畫到底需要顯示什麼（在這種情況下，表情符號和用戶的表情符號選擇）。 在過於束縛解決方案之前，他遇到了一個精明的人 iOS開發人員了解技術限制和注意事項。 然後，我們的視覺設計師和UX設計師集思廣益，對視覺效果至關重要。他們 同意需要為用戶建立緩慢的提示以建立懸念/期望 階段3：循環和反饋 當我們的視覺設計師沿多個不同方向工作時，他選擇了UX設計師 聊聊他在Figma中的進度和設計。通過討論工作，他們激發了更多 想法和迭代，同時確保它們符合客戶期望。還有更多 他手下有很多可靠的選擇，他再次與iOS開發人員會面，以確保一切都在 從技術角度出發。 階段4：客戶的反饋和發展 當我們找到更多，更最終的體驗版本時，視覺設計師走了 通過他們與客戶一起使用Figma。 Press Play產品經理和UX設計師 還提供了反饋和指導。 一旦他們都了解了引起顧客興趣的東西，視覺設計師便開始最大限度地發揮作用。 視覺效果並使它們為開發做好準備。他繼續與iOS開發人員合作， 在技術層面上充分利用該概念。 最終結果 Press Play的實時繪圖動畫是工作中設計協作的一個範例。 一些跨學科專家一起解決更大的設計和開發挑戰 意思是。沒有設計協作，我們將找不到理想的交集 用戶體驗，視覺和技術。 當客戶在他的應用程序中看到動畫生動時，他稱其為“開創性的”。 而且，這種Press Play體驗的研究，合作和創造對我們有幫助 發現產品用戶旅程中的空白。最初，現場繪畫的目的是為了娛樂 向用戶顯示結果的方式。在設計過程中，我們意識到，如果用戶不觀看實時繪圖，他們就會迷失方向，無法體驗終結該圖紙的用戶旅程。 基於這一發現，我們決定在其他兩個地方也改進該應用程序。我們添加了一個 獲勝者範圍的結果/實時繪圖元素，以及用戶的輸贏歷史記錄部分 應用程序的細節部分。最後，需要用戶體驗,來設計協同使我們得以實現這一些未實現的目標。 結論說明 設計協作需要解決建造中伴隨的複雜，關鍵問題 很棒的產品和經驗。 通過利用多個團隊成員的專業知識 跨學科的設計協作可確保團隊從各個角度應對挑戰 並尋求更好的解決方案。 借助正確的思維方式，工具和流程，進行設計協作 使團隊能夠通過創造性思維和迭代來更深入。 我們希望本指南為您提供良好的基礎，以便您可以構建自己的有效設計 協作過程。 您可以在Savvy博客上了解有關設計和產品策略的更多信息， 並隨時在Savvy Apps網站上與我們聯繫以尋求幫助。 心得:協同可說是往後工作不可或缺的工具，不只侷限在專業人士，而且很平易近人，是合作設計不可或缺的工具，合作設計往往會產生衝突，但協同能讓衝突減少，並且持續改進，達到一定的設計效率，另一方面，協同是與各式各樣的人合作，要如何完成一個協同，我覺得當一個好的聽眾與 \n', 'tags': '', 'url': 'assignment 2.html'}, {'title': 'tool', 'text': '', 'tags': '', 'url': 'tool.html'}, {'title': '每周直播內容', 'text': 'w2 \n \n w3 \n \n w5 \n \n w6 \n \n w7 \n \n w9 \n \n w10 \n \n', 'tags': '', 'url': '每周直播內容.html'}, {'title': 'webots', 'text': '', 'tags': '', 'url': 'webots.html'}, {'title': 'coopliasim', 'text': '', 'tags': '', 'url': 'coopliasim.html'}, {'title': 'COVID-19', 'text': '線上課程流程： 通過電子郵件將 https://meet.google.com 會議網址發送給各組組長 以進行線上會議. 講師使用 Youtube 和 OBS 直播每週的課程內容，並將其 URL 發佈到各班 Gitter. 所有學員使用 Youtube 和 OBS 直播並錄製當週作業, 並將其 URL 發佈到各分組的網站上. 所有學員根據各學員的 Github 提交, Github Page 網站與 Youtube 影片內容, 完成自評與互評. \n', 'tags': '', 'url': 'COVID-19.html'}, {'title': '40723153', 'text': '個人網頁: https://40723153.github.io/cd2020/ \xa0 \n 個人倉儲: https://github.com/40723153 \n', 'tags': '', 'url': '40723153.html'}]};