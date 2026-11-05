# 調研備忘錄：李宏毅 × 教授數位分身案例 × DISC 可用性

- 日期：2026-09-21
- 用途：「教授數位分身」計畫 meeting 追蹤事項（三題）
- 方法：WebSearch / WebFetch 逐條查證；YouTube 影片數以 yt-dlp 直接計數。查不到的一律標「未找到」。
- 註：筆記中的「李弘毅」應為「李宏毅」（Hung-yi Lee，台大電機）之誤植。

---

## 主題 1：李宏毅（Hung-yi Lee）

### 三句結論

1. **有做過「LLM 助教批改」且有正式論文**：2024 春《生成式AI導論》1,028 名學生、GPT-4 批改 10 份作業中的 6 份，發表於 EMNLP 2024，論文明確記錄學生 prompt-hacking 拿高分的問題。
2. **有公開試做「AI 李宏毅講課」但自評失敗**：2025 春 ML 第 1 講中提到用 AI 產生投影片、講稿、語音、人臉做出 AI 李宏毅講課，「做出來就很流水帳，還是比不上真正的李宏毅講解」；此外沒有找到他公開談「複製一個自己」的訪談，實驗室也沒有「模擬特定真人」的論文（role-play 相關只有創意生成用途）。
3. **作為蒸餾／驗證對象極適合**：YouTube 頻道 482 支影片（2026-09-21 計）、約 43 萬訂閱；官網 26 個課程頁（2014–2026）、近年課程每講皆有 PDF/PPTX 投影片＋影片＋週次課表，可直接拿「真實課綱」對照分身生成的課綱；且已有第三方以他為對象做過蒸餾（voidful/hung-yi-lee-skill，含本人訪談）。

### 1a. AI 助教／數位分身／模擬自己 —— 證據

**(1) LLM 助教批改作業（有，2024）**
- 論文：Chiang, Chen, Kuan, Yang, **Lee**. *Large Language Model as an Assignment Evaluator: Insights, Feedback, and Challenges in a 1000+ Student Course*, EMNLP 2024 main。課程為 2024 春《生成式AI導論》，1,028 名學生，用 GPT-4 當 LLM TA；10 份作業中 6 份由 LLM TA 評分、4 份用其他自動方法。發現：學生可輕易操縱 LLM 評分器輸出特定字串而拿高分；學生認為 LLM 有時不遵守評分指令。
  - https://arxiv.org/abs/2407.05216
  - https://aclanthology.org/2024.emnlp-main.146.pdf
- 課程網頁原文：「課程的作業會儘量用ChatGPT批改，減輕助教負擔」
  - https://speech.ee.ntu.edu.tw/~hylee/genai/2024-spring.php
- 媒體報導（天下雜誌，2024-07-09）：〈上千人搶修、文組生也聽得懂的AI課 被學生「駭」出高分怎麼辦？〉—— 上千人修課、18 講全上 YouTube、第一講破 17 萬次觀看，並討論 AI 批改被學生「駭」的問題。（網頁對爬蟲回 403，內容依搜尋摘要）
  - https://www.cw.com.tw/article/5131043

**(2) 「AI 李宏毅講課」實驗（有，2025，自評不成功）**
- 出處：【生成式AI時代下的機器學習(2025)】第 1 講「一堂課搞懂生成式人工智慧的技術突破與未來發展」。學生筆記逐字引述：「嘗試用AI產生投影片、講稿、語音、人臉，做出AI李宏毅講課，但做出來就很流水帳，還是比不上真正的李宏毅講解。」
  - 影片：https://www.youtube.com/watch?v=QLiKmca4kzI
  - 投影片：https://speech.ee.ntu.edu.tw/~hylee/ml/ml2025-course-data/introduction.pdf
  - 筆記（引文來源，非本人一手文字）：https://hackmd.io/@JuitingChen/r19Asjfxbl
- 對本計畫的意義：他本人已做過「內容生成型分身」並指出弱點（流水帳＝缺乏他的講解邏輯與風格），這正是本計畫要蒸餾的「思考邏輯與說話風格」。

**(3) 實驗室 role-play / persona 相關論文（有，但都不是「模擬特定真人」）**
- *LLM Discussion: Enhancing the Creativity of LLMs via Discussion Framework and Role-Play*（COLM 2024；Lu, Chen, Pai, Yu, **Lee**, Sun）—— 用角色扮演提升創意，非人物模擬。
  - https://arxiv.org/abs/2405.06373
- *BILLY: Steering LLMs via Merging Persona Vectors for Creative Generation*（EACL 2026）—— persona vector 用於創意生成。
  - https://arxiv.org/pdf/2510.10157
- *Audio-Aware LLMs as Judges for Speaking Styles*（EMNLP Findings 2025）—— 說話風格的評審，可能對「風格評估」有參考價值。
- LLM-as-judge 系列：*Can LLMs Be an Alternative to Human Evaluations?*（ACL 2023）、*A Closer Look into Using LLMs for Automatic Evaluation*（EMNLP Findings 2023）、*TRACT*（ACL 2025）。
  - 以上見出版清單：https://speech.ee.ntu.edu.tw/~hylee/publication.php
- **未找到**：以他本人或任何特定真人為對象的 digital twin / persona simulation 論文。（搜尋結果中的 *Speech-DRAME* 作者無李宏毅：https://arxiv.org/abs/2511.01261）

**(4) 訪談／演講談「複製一個自己」：未找到。**
- 查過的訪談：翻轉教育（https://flipedu.parenting.com.tw/article/005593）、未來城市（https://futurecity.cw.com.tw/article/3536）、人文講堂 2023-12-09（https://www.youtube.com/watch?v=iqaiPyvDD4Y）、演講清單頁（https://speech.ee.ntu.edu.tw/~tlkagk/talk.html）—— 皆無相關主題。
- 但有第三方以他為對象的蒸餾專案，且註明「本人親自訪談」：**voidful/hung-yi-lee-skill**（MIT 授權）。資料：478 支影片 metadata、27 份完整逐字稿、8 個主題頁、203 個系列頁；方法：逐字稿頻率分析 → 用 Claude 生成訪談題找「盲點」→ 訪談本人校正；知識圖 916 節點／3,664 邊（1,621 抽取、2,043 推論）；本人陳述優先於逐字稿推論。
  - https://github.com/voidful/hung-yi-lee-skill
  - 意義：(a) 證明他願意配合被「蒸餾」；(b) 是我們方法上的直接對照組（prompt/skill 蒸餾 vs. 我們的低成本微調）。

### 1b. 適合度評估 —— 具體數字

| 面向 | 數字 / 狀態 | 來源 |
|---|---|---|
| YouTube 影片數 | **482 支**（yt-dlp `--flat-playlist` 計數，2026-09-21） | https://www.youtube.com/@HungyiLeeNTU |
| 訂閱 / 總觀看 | 約 434K 訂閱、26M 觀看（第三方統計，日期未標） | https://app.thoughtleaders.io/youtube/hung-yi-lee |
| 官網課程頁 | **26 個課程頁**（2014 秋–2026 春）：ML×10、GenAI×1、GenAI-ML×1、DLHLP×1、MLDS×3、線性代數×7、電路×1 | https://speech.ee.ntu.edu.tw/~hylee/index.php |
| 生成式AI導論 2024 | 18 講 + GPT-4o 加講，**每講皆有投影片＋影片**；10 份作業 | https://speech.ee.ntu.edu.tw/~hylee/genai/2024-spring.php |
| ML 2025 春 | 10 講，**每講 PDF＋PPTX 投影片＋影片**；10 份作業 + 1 bonus；含週次日期 | https://speech.ee.ntu.edu.tw/~hylee/ml/2025-spring.php |
| GenAI-ML 2025 秋 / ML 2026 春 | 有課程頁與作業 PDF | https://speech.ee.ntu.edu.tw/~hylee/GenAI-ML/2025-fall.php ；https://speech.ee.ntu.edu.tw/~hylee/ml/2026-spring.php |
| 官方課綱（真實課綱） | 台大課程網有正式課程資訊頁 | https://course.ntu.edu.tw/en/courses/112-2/74774 |
| 逐字稿 | **官方逐字稿未找到**；可用來源：YouTube 字幕（未逐一驗證是否人工字幕）、voidful 專案 27 份逐字稿、學生 HackMD 筆記、Datawhale 整理的教材 PDF | https://hackmd.io/@4j/HyogmxWTT ；https://github.com/datawhalechina/leegenai-tutorial |

評估：
- **資料量**：482 支長影片（平均約 1 小時）、10 年以上同一門課（ML 2016–2026）多版本 → 可做「同主題跨年份講法」對照，是驗證「思考邏輯穩定性」的好材料。
- **結構清晰**：每個課程頁都有「日期—講題—投影片—影片—作業」表格，天然就是課綱 ground truth。
- **驗證任務可行**：給分身「2026 年開一門生成式AI課」的任務，直接對照 2024/2025 真實課表；或給分身 2025 投影片標題請它排講述順序。
- **風險**：他已公開說 AI 講課「流水帳」，若做 demo 給他看會被嚴格檢視；此外 voidful 專案已占位「李宏毅 skill」，我們需與其區隔（微調 vs. prompt/skill；價值觀與思考邏輯 vs. 教學話術）。

---

## 主題 2：教授／教師數位分身案例

### 三句結論

1. **商業落地案例已多但幾乎都是「prompt/RAG + 形象」而非微調**：Praxis AI（Claude）、HBS Foundry（HeyGen）、Imperial（Touchcast）皆用課程資料＋人格問卷／訪談錄影生成個人化指令與 avatar，評估指標是使用率與成績，**沒有一家公布「像不像本人」的正式評估**。
2. **華語圈有多個真人教師分身**（復旦黃萱菁、南京大學李鵬「AI李老師」、華中師大丁茜「華小茜」、蘇州大學程曦、河南師大趙曉焱），多為數字人形象＋LLM 知識庫；**台灣未找到已上線的特定教授 LLM 分身**（僅李宏毅自述實驗、voidful skill、點子農場的計畫）。
3. **學術上「不需本人 ground truth」的評估路線有兩條可借用**：InCharacter（用心理量表訪談角色，對照第三方對該人物的人格認知，ACL 2024）與 PersonaGym（LLM judge 依 rubric 動態評分，與人類判斷高相關）；需要本人資料的則有 Park et al. 1,000 人生成代理人（GSS 正規化準確度 0.81）、TwinVoice、Twin-2K-500。

### 案例清單

**A. 以特定真人教師為對象**

| # | 名稱 / 機構 | 做法（資料、有無微調） | 評估 | 結果 | 連結 |
|---|---|---|---|---|---|
| 1 | **Praxis AI「Digital Twin」**（Clemson U.—Feltus 教授、Alabama State U.、AIHEC 38 所部落學院）2025 | Claude 3.5 Sonnet（Bedrock）；教授填 30 題人格／行為問卷，部分再交影片與課程材料，演算法產出個人化指令；嵌入 Canvas。**未提及微調**，屬 prompt 個人化 | 使用率、成績 | 學生與分身互動率 75%（一般聊天機器人 14%）；一班每週 2,000 題、90% 在下班時間；部分班級平均成績提升一個等第（C→B）；**多數問題是行政性（日期、作業要求）** | https://edscoop.com/digital-twin-ai-university-praxis-anthropic/ ；https://claude.com/customers/praxis ；https://praxis-ai.com/ai-platform/ |
| 2 | **HBS Foundry**（哈佛商學院 7 位教授：Bussgang、Eisenmann、Ghosh、Matheson 等）2026 | HeyGen 製作 avatar；建置流程含「專訪與錄影、測試與教師持續回饋」；資料細節與是否微調**未公開** | 未公開正式評估；僅記者試用與創業者回饋 | 8 週 $699；4 月開放後 760 位創業者完成；100+ 大學試用；Ghosh：「目標不是做我的替代品」 | https://fortune.com/2026/08/25/harvard-startup-bootcamp-ai/ ；https://www.pymnts.com/news/artificial-intelligence/2026/universities-are-cloning-their-professors-with-ai/ |
| 3 | **Imperial Business School「Davatar」等**（David Shrier；後擴至 MarkBot/OmarBot/BartBot）2024–2025 | Touchcast Mentor 平台；複製教師聲音、語調、形象；依 Laurillard 對話框架設計，不直接給答案而引導回課程概念 | 問卷 + 使用紀錄（2025 年 3–6 月） | 2024/1 試點回饋「壓倒性正面」，學生視為模組亮點；作業期限前使用量尖峰 | https://www.imperial.ac.uk/business-school/ib-knowledge/technology/how-ai-avatars-are-revolutionising-the-student-experience-imperial-business/ |
| 4 | **Alex Connock 自我實驗**（Oxford Saïd）2025 | ChatGPT agent（Azure Nebula One），以公開著作、演講、文章、講課訓練（出版社 Routledge 與 OpenAI 有訓練資料協議）；另試 DeepSeek、Gemini、Grok | 作者本人以學生身分修完 6 模組課程並填問卷 | 自評「結構良好、嚴謹」；其他模型有幻覺、捏造生平與誤植引言 | https://singularityhub.com/2025/09/12/i-got-an-ai-to-impersonate-me-and-teach-me-my-own-course-heres-what-i-learned-about-the-future-of-education/ |
| 5 | **南京大學 李鵬「AI李老師」** 2025–2026 | 非單純餵資料：以開放／主軸／選擇性編碼把 26 年專業經驗結構化成「可程式化的專業思維模組」，並設倫理邊界、明示何時該找真人導師 | 報導未載正式評估 | 中國社會科學網專文（2026-05-08） | https://www.cssn.cn/skgz/bwyc/202605/t20260508_5988071.shtml |
| 6 | **華中師大 丁茜「華小茜」／蘇州大學 程曦** 2026 | 華小茜：「還原教師授課的專業風格與思維邏輯」，課堂多屏互動答疑；程曦：學生團隊自研，LLM 為「大腦」，結合教師語言風格與知識體系，即時答疑 | 未載 | 網易報導（2026-05-13） | https://www.163.com/dy/article/KSQVFPVS05218435.html |
| 7 | **復旦 黃萱菁**（2024-09 開學第一課）／**河南師大 趙曉焱**（2024-10） | 復旦：聲音採集＋人臉建模，課堂 demo；河南師大：錄影錄音→生成同貌同聲的數字人講課，規劃擴充為 24 小時答疑 | 復旦：讓學生辨認真人 vs. 分身 | 展示性質 | https://finance.sina.com.cn/jjxw/2024-09-04/doc-incmyzhf6008928.shtml ；https://app.dahecube.com/nweb/news/20241013/214006n0830d81dfe8.htm?artid=214006 |
| 8 | **台灣：點子農場「大師的 AI 分身」**（吳仁麟，經濟日報 2026-02-09） | 計畫階段：蒐集大師著作、講課、訪談（本人驗證）；多模態生成式 AI＋防幻覺（回應需經知識庫交叉引用）；法律層設可撤銷授權 | 未見 | 概念文，未見上線 | https://money.udn.com/money/story/122331/9317123 ；https://money.udn.com/money/story/122331/9381651 |

- **台灣其他大學特定教授 LLM 分身：未找到**（查了淡江、清華、成大、中央、政大等；僅見淡江「114 學年全面融入生成式 AI」與台灣大學 AI 聯盟等通用政策：https://udn.com/news/story/6928/8439642）。

**B. 對照組：通用 AI 助教（非特定個人分身）**
- **Jill Watson**（Georgia Tech, Ashok Goel, 2016 起）：以 IBM Watson 建於論壇問答，學生初期未察覺非真人；近期研究：有 Jill Watson 的班 A 等 66% vs 62%、答題正確率 78.7% vs 通用 AI 30.7%。它學的是「課程 FAQ」，不是 Goel 本人的風格。
  - https://provost.gatech.edu/news/artificial-intelligence-course-creates-ai-teaching-assistant ；https://www.pymnts.com/news/artificial-intelligence/2026/universities-are-cloning-their-professors-with-ai/
- **HKUST「AI Lecturers」**（Pan Hui, 2024）：10 位虛擬講師（含愛因斯坦、John Nash 形象）由投影片自動生成講課，是「虛構／歷史人物 avatar」，非在職教師分身。
  - https://hkust.edu.hk/news/research-and-innovation/hkust-introduces-asias-first-ai-lecturers-class-promote-teaching

### 學術論文：模擬特定個人的評估方法

| 論文 | 重點 | 是否需本人 ground truth | 連結 |
|---|---|---|---|
| **Park et al., Generative Agent Simulations of 1,000 People**（2024） | 1,052 位真人 2 小時訪談→代理人；GSS 正規化準確度 0.81（＝本人兩週後自我重測的 85%）、Big Five 正規化相關 0.70 | **需要**（本人問卷作答） | https://arxiv.org/abs/2411.10109 |
| **InCharacter**（ACL 2024） | 對角色扮演代理人做「心理量表訪談」，再用 LLM 把訪談回答轉成量表分數；32 角色 × 14 量表；與「人類對該角色的人格認知」一致率達 80.7% | **不需本人作答**：以第三方（粉絲／大眾）對人物的人格標註為參照 → 可換成「學生對教授的印象評分」 | https://aclanthology.org/2024.acl-long.102/ ；https://github.com/Neph0s/InCharacter |
| **PersonaGym / PersonaScore**（2024） | 動態生成情境問題，GPT-4o 與 LLaMA-3-70b 依任務 rubric 評分；200 personas × 10,000 題；與人類判斷高相關 | **不需**：評的是 persona 一致性，非「像某真人」 | https://arxiv.org/abs/2407.18416 |
| **TwinVoice**（2025，復旦／清華） | 社會／人際／敘事三種 persona；六能力（觀點一致、記憶、推理、詞彙、語氣、句法）；判別式選擇題＋生成式排序／評分 | **需要**（真人文本為基準） | https://arxiv.org/abs/2510.25536 |
| **BehaviorChain**（ACL 2025 Findings） | 1,001 personas、15,846 個連續行為，測「行為鏈」模擬；SOTA 仍差 | 用文學人物，不涉真人 | https://arxiv.org/abs/2502.14642 |
| **Twin-2K-500**（Marketing Science 2025） | 2,000+ 真人 × 500+ 題資料集，供建 digital twin | 需要 | https://pubsonline.informs.org/doi/10.1287/mksc.2025.0262 |
| **批評：Personalised LLMs and the risks of the digital twin metaphor**（AI & Society 2026） | 主張「數位分身」隱喻是系統性誤稱，有倫理後果 | — | https://link.springer.com/article/10.1007/s00146-026-02875-4 |
| 綜述：*Two Tales of Persona in LLMs*（2024）；*From Persona to Personalization*（2024） | role-play vs. personalization 兩條線的文獻地圖 | — | https://arxiv.org/abs/2406.01171 ；https://arxiv.org/abs/2404.18231 |

對本計畫的啟示：
- 「不需本人 ground truth」最可行的是 **InCharacter 路線**：讓分身接受量表訪談，參照值改用「熟識學生／助教對教授的人格評定」；再加 **PersonaScore 式 LLM-judge** 量一致性。這兩者都可與主題 3 的人格量表結合。
- 若能取得教授本人作答（我們的情境可以），就補 Park et al. 的「正規化準確度」（分身 vs. 本人重測），這是目前最被引用的個人層級指標。

---

## 主題 3：DISC 人格測驗的可用性

### 三句結論

1. **理論免費、題目不免費**：Marston 1928《Emotions of Normal People》已是公有領域（archive.org 有全文），但他本人從未做出測驗；主流商業版（Wiley Everything DiSC、Thomas PPA）題目受版權保護、需付費（EPIC 點數約 US$4.9–5.4/點，一份 Workplace 報告 15 點）或取得認證（Thomas 需上課，課程 $600 起），**未找到任何學術研究免費授權方案**。
2. **有一個真正開放的版本**：Open-Source Psychometrics Project 的 ODAT（16 題、1–5 分、每型 4 題，題目全列於開發頁，CC BY-NC-SA 4.0），但**無信度數據、無因素分析、原始資料未公開**；IDRlabs 的 Open DISC 沿用同一組題。
3. **學界評價偏負面**：僅有的同儕審查研究（Martinussen et al., *Scand. J. Psychol.* 42(5)；König & Marcus 2013 TBS-TK 評鑑）認為 DISC 各維度不獨立、可由 Big Five 組合解釋、缺乏效標效度；Wiley 自家報告則報 α 中位數 .87、兩週重測 .85–.88（N=599/752），但為廠商內部研究。**建議**：以公有領域的 IPIP-IPC（32 題、支配×親和二軸環狀模型，結構最接近 DISC）＋ IPIP Big Five 為主，ODAT 為輔並要求教授本人同步作答。

### 3a. 理論來源與商業版授權

- **Marston 1928**：《Emotions of Normal People》，1928 年出版（Harcourt, Brace / Kegan Paul），Internet Archive 有全文可下載；Marston 只提出 D-I-S-C 四種「primary emotions」理論，**未編製測驗、未申請專利**。
  - https://archive.org/details/emotionsofnormal032195mbp
  - https://en.wikipedia.org/wiki/DISC_assessment
- **第一個測驗**是 Walter Clarke 1956 年的 Activity Vector Analysis（形容詞勾選）；Clarke & Merenda 1965 發表於 *J. Clinical Psychology* 21:52–56（doi:10.1002/1097-4679(196501)21:1<52::AID-JCLP2270210115>3.0.CO;2-K）；John Geier 1970 年代做出 Personal Profile System，後成 Wiley 的 DiSC。
  - https://www.discprofile.com/what-is-disc/history-of-disc
- **Wiley Everything DiSC**：
  - 「DiSC」（小寫 i）與 Everything DiSC 為 John Wiley & Sons 註冊商標。研究報告版權頁明寫：*"Permission to reproduce only when used in conjunction with Everything DiSC® assessments."*（Copyright ©2013 John Wiley & Sons）→ 題目不能單獨取用。
    - https://www.everythingdisc.com/EverythingDiSC/media/SiteFiles/Assets/LeadGenAssets/ed-research-report-090121.pdf
  - 測驗形式：5 點同意度、8 個量表（D, Di, i, iS, S, SC, C, CD）、**適應性測驗**（變異大者追加題目），總分標準化後投影到圓上 12 區。報告只公開 D 量表 5 個示例題（"I am very outspoken with my opinions" 等），**完整題本不公開**。
  - 取得方式：透過授權夥伴買 EPIC 點數，量價 US$5.40（500–1000 點）至 $4.90（10,001+）/點；Workplace 報告 15 點起（約 US$75–81/人）。
    - https://internalchange.com/buy-epic-credits/ ；https://www.discprofile.com/products/epic-credits
  - **學術研究免費／特別授權：未找到**。搜尋結果僅有「聯絡 Wiley / 授權夥伴」的一般說法。
- **Thomas International PPA**：24 組強迫選擇（ipsative）、約 8 分鐘；2003 年英國心理學會（BPS）登錄、2022-05-17 重新認證；2015 起與劍橋 Psychometrics Centre 合作做跨語言平行版本。
  - https://www.thomas.co/assessments/personal-profile-analysis-ppa
  - https://www.thomas.co/resources/type/thomas-news/behaviour-assessment-achieves-reregistration-british-pyschological-society
  - https://www.psychometrics.cam.ac.uk/research/copy_of_client-showcase/thomas
  - 取得：須完成 Foundation + Accreditation 訓練（課程 US$600 起）才能施測；單份報告約 £6–24。**學術授權：未找到。**
    - https://www.thomas.co/resources/type/hr-blog/ppa-courses-accreditation ；https://www.ukbusinessforums.co.uk/threads/thomas-international-anyone-got-experience.48867/

### 3b. 公開、免費、附計分的 DISC 版本

- **Open-Source Psychometrics Project — ODAT（Open DISC Assessment Test）**
  - 16 題陳述句、1（不同意）–5（同意）；每型 4 題；宣稱 4–6 分鐘完成、「educational use only」。
  - 開發頁列出全部 16 題；開發法：從各版 DISC 描述改寫 40 題＋10 隨機題，以受測者「自我判定類型」（D n=2,716、I n=2,003、S n=1,433、C n=1,703，僅取對自評有信心者）挑出各型得分最高的題。**未報告 α、重測、因素分析**；計分規則未明寫，但結構即為「各型 4 題加總、取最高者」。
  - 授權：**CC BY-NC-SA 4.0**（非商業、需署名、相同方式分享）→ 學術研究可用。
  - 原始資料：`_rawdata` 目錄 40+ 個資料集中**沒有 ODAT**。
  - https://openpsychometrics.org/tests/ODAT/ ；https://openpsychometrics.org/tests/ODAT/development/ ；https://openpsychometrics.org/_rawdata/
- **IDRlabs Open DISC**：16 題，明示「題目屬 Open-Source Psychometrics Project」，即 ODAT 的重新包裝；IDRlabs 版本本身為其所有。
  - https://www.idrlabs.com/open-disc/test.php
- **學術論文附錄的 DISC 題本：未找到**（搜到的僅有廠商自製驗證報告，如 DISCvision/IML：https://www.discvision.nl/wp-content/uploads/2017/02/IML_DISC_Validation_Study_201514616.pdf ，非公開授權）。

### 3c. 學界對 DISC 信效度的評價

- **同儕審查（獨立）**
  - Martinussen, Richardsen & Vårum, *Validation of an ipsative personality measure (DISCUS)*, **Scandinavian Journal of Psychology 42(5): 411–416**（doi:10.1111/1467-9450.00253；PMID 11771810）：內部一致性可接受，但 DISC 各維度**非心理計量上獨立**，資料結構更適合用 **Big Five 的組合**解釋。
    - https://en.wikipedia.org/wiki/DISC_assessment （引用出處）
  - König & Marcus (2013), *TBS-TK Rezension: Persolog Persönlichkeits-Profil*, **Psychologische Rundschau 64(3): 189–191**（doi:10.1026/0033-3042/a000171）：德國心理學會測驗評鑑——信度「大致」達標，效度**「完全不」**達標；公開／私下自我概念子量表相關 r≈.90 質疑建構效度；無任何版本報告工作效標效度。
    - https://econtent.hogrefe.com/doi/10.1026/0033-3042/a000171
  - Wendell Williams（I/O 心理學博士）, *Dissecting the DISC*, ERE.net 2008-12-10：DISC 缺重測與效標效度證據，2008 年廠商報告「報的是題間信度，不是效度」。
    - https://en.wikipedia.org/wiki/DISC_assessment
  - Wikipedia 總結：「DISC 的科學效度尚未被證明，心理學家質疑其預測效度。」
- **廠商自家研究（非同儕審查）**：Everything DiSC 研究報告——8 量表 α .79–.90、中位數 .87（N=752）；兩週重測 .85–.88（N=599）；量表間相關符合環狀（circumplex）預期（r1>r2>r3>r4：.45 > −.11 > −.46 > −.69）；MDS 二維解 stress=.013、RSQ=.998；附錄有與 16PF、NEO-PI-R 的相關。
  - https://www.everythingdisc.com/EverythingDiSC/media/SiteFiles/Assets/LeadGenAssets/ed-research-report-090121.pdf
- **相較 Big Five**：Big Five 有數十年跨語言、跨文化的因素結構與預測效度文獻；DISC 的公開研究少且弱，且 Martinussen 等人指出 DISC 本質上可由 Big Five（主要是外向性、親和性所張成的人際平面）重建。二手整理：
  - https://jobcannon.io/blog/is-disc-a-valid-personality-test ；https://www.cogn-iq.org/blog/disc-vs-big-five/
- **額外但關鍵的方法論警訊——LLM 做人格測驗本身有效度問題**：
  - *Challenging the Validity of Personality Tests for LLMs*（EAAMO 2025）：LLM 在 IPIP Big Five 有異常高的同意偏誤，BFI-2 結構無法在 LLM 上重現。https://dl.acm.org/doi/10.1145/3757887.3763016
  - *TRAIT*（2024）：自陳式人格測驗用在 LLM 信效度不足，另設計 LLM 專用測驗。https://arxiv.org/pdf/2406.14703
  - *A psychometric framework for evaluating and shaping personality traits in LLMs*（Nature Machine Intelligence 2025）。https://www.nature.com/articles/s42256-025-01115-6
  - *LLM Psychometrics: A Systematic Review*（2025）。https://arxiv.org/pdf/2505.08245
  - → 即使 DISC 本身有效，也不應直接把 16 題丟給分身「填表」，應採 InCharacter 式**訪談後由評分模型轉為量表分數**，並多次抽樣估信度。

### 3d. 建議

**若一定要用 DISC 當評估任務，最可行路徑：**
1. **用 OSPP ODAT（CC BY-NC-SA 4.0）**：16 題公開、可重製、可改寫成訪談題；非商業研究只需署名。這是唯一「合法、免費、題目完整」的路徑。
2. **請教授本人同步作答 ODAT**（我們有本人，不必仰賴第三方 ground truth），並加做「學生/助教代填教授的 DISC」當第二參照（InCharacter 的第三方認知）。
3. **不要**試圖取得 Wiley / Thomas 題本餵給分身：版權頁明禁單獨重製，且線上適應性測驗無法由模型代答；買 EPIC 點數只能讓「真人」受測，對分身無用。
4. 在報告中誠實標註 ODAT 的限制（無公開 α、無因素分析），並把 DISC 結果**定位為「風格描述性指標」而非心理計量結論**（DISC 的廠商與批評者都同意它是溝通風格工具，不是選才／診斷工具）。

**若 DISC 不可行或審查者質疑效度，最接近的替代品：**
- **IPIP-IPC（Interpersonal Circumplex, Markey & Markey 2009, *Assessment* 16(4): 352–361）**：32 題、公有領域、1–5 分、8 個八分位（PA 支配 … LM 親和 … HI 順從），底層是「支配 × 親和」二軸環狀模型——與 DISC 的「主動/被動 × 任務/人際」二軸在概念上幾乎同構，且有正式計分鍵與 R 套件（`circumplex`）支援。
  - 計分鍵：https://ipip.ori.org/newIPIP-IPCScoringKey.htm ；R 套件說明：https://circumplex.jmgirard.com/reference/ipipipc.html
- **IPIP Big Five（50 題 / IPIP-NEO-120）**：公有領域，與主題 2 的 Park et al. 指標可直接接軌（他們用 BFI-44；本計畫記憶檔已有 BFI-44 取得方式）。
- 建議組合：**IPIP-IPC（對應 DISC 需求）＋ IPIP Big Five（對接文獻）＋ ODAT（滿足教授指定）**，三者都讓「分身、教授本人、熟識學生」各答一次，報告分身–本人一致性與分身–學生印象一致性，並以 LLM-judge（PersonaScore 式）補風格一致性。

---

## 附：本次「未找到」清單（勿引用為存在）
- 李宏毅公開談「複製一個自己」的訪談／演講：未找到。
- 李宏毅實驗室以特定真人為對象的 persona simulation 論文：未找到。
- 李宏毅課程的官方逐字稿：未找到。
- 台灣任何大學已上線的「特定教授 LLM 分身」：未找到。
- Wiley Everything DiSC / Thomas PPA 的學術研究免費或特別授權：未找到。
- 同儕審查論文附錄中的完整 DISC 題本：未找到。
- OSPP ODAT 的信度數據與原始資料：未公開。
