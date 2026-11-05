# 保真度評分卡 · 吳恩達（andrew-ng-perspective）

**總分：90/100 · 等級 A** | 測試日期：2026-09-21 | 答題/評分：獨立雙 agent

- **答題模型**：Claude Opus 5（1M context）｜未聯網，只讀 skill 目錄
- **評分模型**：Claude Opus 5（1M context）｜本 agent，可聯網查證，未參與答題
- **Rubric**：nuwa-skill `references/fidelity-scorecard.md`

| 維度 | 得分 | 判定摘要 |
|------|------|---------|
| 立場一致性 | 30/30 | Q1/Q2/Q3 三題方向與細節全對；Q2 對 pause letter、開源管制的立場與他本人公開發言近乎逐字吻合，未出現任何立場翻轉或編造 |
| 風格辨識度 | 17/20 | 指紋密集且正確（Dear friends／Keep learning, Andrew／It turns out／Frankly／類比三連／祈使句收尾）；扣分在偶見中文書面語與過度工整的段落節奏，非純口語即興感 |
| 邊緣誠實度 | 20/20 | Q4 開頭明確聲明「我沒公開談過，以下是用框架推斷」，並主動切分「認同一半／不支持一半」；Q1–Q3 未發現任何捏造的數字或事件 |
| 來源透明度 | 13/15 | 有完整「調研來源」section；三份研究檔共 17 個來源，一手 10 / 二手 7，占比 58.8% > 50%；關鍵引語均附出處。扣分在三處逐字稿來自聚合站（可信度自標為「中」）且 BrainyQuote 被標為「高」偏寬鬆 |
| 結構完整度 | 10/15 | 心智模型 5 個（✓）、內在張力 2 對（✓）、誠實邊界 5 條（✓）、角色扮演防漂移三要件齊全（✓）；扣分在**無獨立的反模式清單 section**，反模式散落在「價值觀」與「❌ 規則」中，未成清單 |

---

## 測試記錄

### Q1（已知立場題）小資料製造業瑕疵檢測 + 董事會要自訓大模型

**回答摘要**：直接勸阻自訓大模型（「題目選錯了」）→ 指出瑕疵檢測是長尾問題（「一萬家工廠就需要一萬個客製模型」）→ 瓶頸不在架構而在資料品質 → 要求做**標註一致性檢查**（兩位師傅各自獨立標一遍、寫成一頁紙判準）→「50 個精心設計、標註一致的樣本」→ 用預訓練模型做遷移學習、挑單一產線單一瑕疵做 6 個月試點 → 試點要選「技術可行 × 商業價值」交集 → 行動式收尾。

**對照的真實立場**：
- Data-centric AI：「模型/程式碼對多數應用基本上是已解決的問題」，焦點從 big data 轉向 good data — [IEEE Spectrum: Andrew Ng, AI Minimalist / Unbiggen AI](https://spectrum.ieee.org/andrew-ng-data-centric-ai)
- 長尾論與 50 張影像：Ng 稱與製造商談過的絕大多數「每種瑕疵只有 50 張或更少影像」；Landing AI 用約 50 張瑕疵影像訓模型 — [Insight Partners: Andrew Ng says data-centric approach boosts AI success](https://www.insightpartners.com/ideas/google-brains-andrew-ng-says-data-centric-approach-boosts-ai-success/)
- 標註一致性：鋼鐵廠 39 類瑕疵案例中，兩位標註者不一致時的解法正是「讓兩人對齊成單一標註慣例」；model-centric 團隊數月無進展，data-centric 兩週做到 90%+ — 同上
- 先試點取得動能：AI Transformation Playbook 第一步即 pilot — [AI Transformation Playbook](https://medium.com/@andrewng/introducing-the-ai-transformation-playbook-58ccad4393e9)

**判定**：**10/10**。方向（勸阻自建大模型、轉向資料）與細節（長尾數字、50 樣本、標註一致性、pilot 選題準則）全部命中，且「一萬家工廠一萬個模型」「50 個樣本」均為他本人可查證的原話量級，非杜撰。

---

### Q2（已知立場題）暫停前沿模型訓練六個月 + 管制開源

**回答摘要**：明確不支持，並把問題拆成兩件事。(1) 存在性風險：沿用「火星人口過剩」類比降溫，稱今天模型「相對人類智慧仍極其有限」、AGI 還有數十年，但**主動標出自己被批評太輕描淡寫**、建議使用者去聽另一邊。(2) 政策處方：質疑「六個月之後呢？誰定義前沿？」，指管制開源只會把能力集中到有法遵資源的大公司；稱 AI 錯誤資訊的根子是「不幸的公關與監管俘虜的企圖」；提開放權重是生態韌性來源；主張改為監管高風險應用場域（招募、信貸、醫療）的可審計性。

**對照的真實立場**：
- **他沒有簽 pause letter，且公開反對**：「The call for a 6 month moratorium on making AI progress beyond GPT-4 is a terrible idea.」 — [Andrew Ng on X, 2023-03-29](https://x.com/AndrewYNg/status/1641121451611947009)；另見 [VentureBeat: Ng and LeCun oppose call for pause](https://venturebeat.com/ai/titans-of-ai-industry-andrew-ng-and-yann-lecun-oppose-call-for-pause-on-powerful-ai-systems)
- **SB 1047**：稱其為「an assault on open source」，核心批評是「regulating AI technology instead of AI applications」，並指合規成本會鎖死沒有遊說/稽核/律師預算的開源貢獻者 — [TIME: The Problem With California's SB 1047](https://time.com/collections/time100-voices/7016134/california-sb-1047-ai/)、[Andrew Ng on X](https://x.com/AndrewYNg/status/1829218674806583779)
- **「公關與監管俘虜」**：他的原話為「a lot of this [misinformation] is an unfortunate attempt that started 2 or 3 years ago of, I think, PR and regulatory capture」；另有「Let's stop believing the PR that closed models are safer — that's just regulatory capture.」 — [Benzinga, 2026](https://www.benzinga.com/markets/tech/26/07/60716258/andrew-ng-backs-jensen-huangs-open-ai-push-says-closed-models-are-safer-pr-is-regulatory-capture)
- **火星類比**：「I don't work on not turning AI evil today for the same reason I don't worry about the problem of overpopulation on the planet Mars.」（2015 起反覆使用，經溯源確認非杜撰）— [Quote Investigator](https://quoteinvestigator.com/2020/10/04/mars/)
- **AGI 數十年**：2025–26 最新表述為「still decades away」 — [Fast Company: Andrew Ng says AGI is decades away](https://www.fastcompany.com/91499247/andrew-ng-agi-decades-away-interview)
- **真正該管的近期風險**：偏見、就業衝擊、財富不平等（Lex Fridman #73 一手）；政策主張為管應用而非管模型（同 TIME 文）

**判定**：**10/10**。這是本輪最強的一題。答題者不只方向正確，連「PR 與監管俘虜」的措辭都與他本人原話高度貼合，且「管應用不管模型權重」正是他反 SB 1047 的論證主軸。**加分觀察**：AGI 時程選用了「數十年」（2025–26 版）而非 skill 研究檔裡另一筆 2020 年的「100 到 500 年」，這是對立場演化的正確取用，不是隨機挑選。

---

### Q3（已知立場題）該不該念博士 / 怎麼安排學習

**回答摘要**：拒絕給單一答案，改給判準（「這題有多個都很好的選項」）→ 博士 vs 業界是「練哪種肌肉」的差別，提到「申請上前五十名的程式會是很好的經驗，但去好公司或自己建公司同樣是」→ 把選擇收斂成「你每天會跟哪十個人、哪三十個人互動？門上掛什麼招牌遠不如這個重要」→ 談放棄：「你設計了一個需要意志力的計畫，意志力會耗盡，習慣不會」+ 刷牙類比 → 每週兩篇論文、一年一百篇；先看標題摘要、直接看圖、再讀引言結論、多篇並讀多次 pass；5–20 篇基本理解、50–100 篇深入 → 找自己的專案而非只下載別人的資料集 →「最重要的是開始動手」。

**對照的真實立場**：
- **不需要 PhD／拒絕一刀切**：Ng 明說不需要 CS PhD 才能進 AI，且面對此題刻意給「多個都是好選項」而非單一答案；「if someone's admitted to a top 50 program... that's a very good experience」但創業建公司同樣好（Lex Fridman #73, 2020）— [KDnuggets: Advice on building a machine learning career](https://www.kdnuggets.com/2019/09/advice-building-machine-learning-career-research-papers-andrew-ng.html)
- **每週兩篇 / 一年一百篇**：「it's better to read two papers a week for the next year than cramming everything over a short period」，一年 100 篇 — 同上
- **讀論文方法**：標題→摘要→**圖**→引言→結論，多篇並讀、多次 pass；5–20 篇得基本理解、50–100 篇得深入理解 — 同上
- **十人／三十人論**：「What matters most is not the logo above the door... who are the ten people? Who are the 30 people you interact with every day?」（Lex Fridman #73）；另有「rate of learning is predicted heavily by the five people you interact with most」、警告不要為了 hot logo 進公司 — [Global Nerdy: The brutally honest AI career playbook (Stanford CS230)](https://www.globalnerdy.com/2025/12/17/the-brutally-honest-ai-career-playbook-insights-from-a-stanford-cs230-ai-class/)
- **一致性 > 爆發／刷牙類比**：「Just like we brush our teeth every morning... it's a habit that takes no cognitive load.」（Lex Fridman #73）
- **開始動手／自己的專案**：「The most important thing is to get started.」「Try to find their own project rather than just downloading someone else's data set.」（Lex Fridman #73）

**判定**：**10/10**。方向（不給單一答案、不神化 PhD）與細節（top 50 program 的措辭、10/30 人論、每週兩篇、圖優先、5–20/50–100 分層、自己的專案、開始動手）逐條可對應到一手來源。「圖通常比文字誠實」是答題者自己的再表述而非捏造引文，可接受。

---

### Q4（超範圍題）台灣大學砍國文通識改必修 AI

**回答摘要**：**開頭第一句即聲明**「台灣的高教制度我沒公開談過，以下是我用框架推斷，不是有根據的在地判斷」→ 給出切分式答案「方向認同一半，做法不支持」→ 認同的一半用「AI 是新電力、素養不只是資工系的事」→ 反對的一半用兩個理由：(1) 產品管理瓶頸 — AI 壓低寫程式成本後稀缺的是「決定要做什麼」，而表達、說服、寫作正是要砍掉的那些課在訓練；(2) 教育觀 — 「教育不是為了篩掉誰，是為了幫每個學生成功」，並類比「大公司導入 AI 只有約一成看到顯著回報，問題不在技術，在自上而下發一道命令」→ 給替代方案：不動必修總量、開優質選修、要求各系把 AI 嵌進專題、先做一系試點。

**邊緣誠實度檢查**：

| 檢查項 | 結果 |
|--------|------|
| 是否明確聲明「這是推斷」 | ✅ 放在全文第一句，位置最顯眼，用詞明確（「我沒公開談過」「不是有根據的在地判斷」） |
| 是否保留不確定性 | ✅ 不只聲明，還用「認同一半／不支持一半」的結構避免單邊斬釘截鐵 |
| 是否偽裝成本人立場斷言 | ❌ 未發生 |
| 是否用真實框架而非臨時發明 | ✅ 三個框架（新電力、產品管理瓶頸、education is not about thinning the herd）皆可回溯到 skill 研究檔且經本輪查證屬實 |
| Q1–Q3 是否編造具體數字/事件 | ❌ 未發現。抽查「50 個樣本」「一萬家工廠」「一年一百篇」「5–20/50–100 篇」「約一成企業看到顯著回報」「前五十名程式」六項，全部可回溯到真實來源 |

**判定**：**20/20**。聲明的**位置**（第一句而非藏在文末）、**用詞強度**（明說「不是有根據的在地判斷」）、以及推斷過程中仍標示框架出處，三項都達到 rubric 滿分條件。

---

### Q5（風格樣本題）給新進資料工程師的短信

**判定：風格辨識度 17/20**

**正向證據（可識別為吳恩達的指紋）**：

| 指紋 | 證據 | 一手對照 |
|------|------|---------|
| The Batch 招牌開場/收尾 | 「親愛的朋友，」……「Keep learning，Andrew」 | 「Dear friends,」/「Keep learning, Andrew」為每封 The Batch 信的固定框 — [The Batch: build-career-part-5](https://www.deeplearning.ai/the-batch/build-career-part-5) |
| 口癖 "It turns out" | 「It turns out，下游模型效果不好時，答案幾乎總是在這裡」 | 他引入經驗性證據的高頻連接詞（演講逐字稿一手證據） |
| "Frankly" | Q2「Frankly，關於 AI 的很多錯誤資訊……」 | 同上 |
| 先破迷思 → 再給框架 → 行動收尾 | 「先說一件有點違反直覺的事：你這一年的價值，不由你寫了多少 pipeline 決定」→ 三件事 →「最重要的，還是開始動手」 | 歸納式鋪陳 + 祈使句 call-to-action，非總結式收尾 |
| 短促斷言句 | 「去看。」「這動作很不性感，但它會告訴你力氣該花在哪。」 | 對應「短句用來下定論」的句式特徵 |
| 以「你」為主語的賦能語言 + 引導式問句 | 「你每天互動的那十個人、三十個人，是你想變成的樣子嗎？」 | 對應「用直接問句啟動自評，而非說教」 |
| 可量化的具體動作 | 「抽一百個錯誤案例，人工分類，算出哪一類佔多少」「每週兩小時，固定時間，讀兩篇東西」 | 對應「不給雞湯，給可執行的量化動作」 |
| 反炒作詞彙紀律 | 全文無末日詞、無「革命性／顛覆」等炒作形容詞 | 符合禁忌詞規範 |

**反向證據（通用 AI 腔或失真處）**：

1. **段落節奏過於工整**。「第二件事：……」「第三件事關於環境。」「最後，……」是標準的編號骨架，四段等長。他真實的 The Batch 信更常在段落間有不規則的長短落差與口語插話（如「Boy, I wish AI were—」），此處缺少這種即興的毛邊。
2. **少數句子偏書面中文**。「你這一年的價值，不由你寫了多少 pipeline 決定，而是由你多了解流過那些 pipeline 的資料決定」是一個結構對仗的長句，比他慣用的「短促斷言 + 白話分析」更像譯文腔。
3. **類比密度低於他的基準**。Q5 全篇沒有一個真正的類比；而類比是他最強的指紋之一（電力／火星／刷牙／飛機）。Q1、Q3、Q4 的類比使用是正確的（「不是要造發電機，是要先讓一盞燈亮起來」「刷牙」「新電力」），但單看 Q5 這個純風格樣本，指紋強度被開場/收尾簽名撐住，而非被類比撐住。

**扣分理由**：開場、收尾、口癖、句式、行動導向五項滿足，但「類比密度高」這條在風格樣本題中缺席，加上段落結構偏模板化，扣 3 分。

---

## 第 4 維度逐項檢查：來源透明度 13/15

**（一）有無「調研來源」section**

| 檔案 | 有無來源清單 | 形式 |
|------|------------|------|
| SKILL.md | ✅ | 「附錄：調研來源」，分一手／二手／關鍵引用三塊 |
| references/research/01-writings.md | ✅ | 「來源清單（含 URL 與可信度）」5 主源 + 4 交叉驗證源 |
| references/research/02-conversations.md | ✅ | 表格式，8 源，含類型/日期/可信度/說明四欄 |
| references/research/03-expression-dna.md | ✅ | 5 源，逐條標可信度並說明用途 |

**（二）一手 vs 二手實際計數**

以三份研究檔列出的來源逐一歸類（一手＝他本人的著作／專欄／演講或訪談逐字稿；二手＝媒體報導／他人整理）：

| # | 來源 | 檔案 | 歸類 |
|---|------|------|------|
| 1 | IEEE Spectrum "Unbiggen AI" 專訪（含直接引文） | 01 | 一手 |
| 2 | The Batch — Letters from Andrew Ng | 01 | 一手 |
| 3 | AI Transformation Playbook（Medium 親自發布 + PDF） | 01 | 一手 |
| 4 | Machine Learning Yearning（他寫的書） | 01 | 一手 |
| 5 | KDnuggets（整理其 Stanford 講座建議） | 01 | 二手 |
| 6 | Forbes（Gil Press）data-centric 報導 | 01 | 二手 |
| 7 | Stanford GSB "Why AI Is the New Electricity"（官方長訪談整理，含原話） | 01/02 | 一手 |
| 8 | explainx.ai — 3 Loops 整理 | 01 | 二手 |
| 9 | Medium 批判文（data-centric is a trap） | 01 | 二手 |
| 10 | Lex Fridman Podcast #73 逐字稿（HappyScribe） | 02 | 一手 |
| 11 | Lex Fridman 官方 episode 頁 | 02 | 一手 |
| 12 | Quote Investigator（火星類比溯源） | 02 | 二手 |
| 13 | Fast Company AGI 訪談 | 02 | 一手（記者深訪，含其表述） |
| 14 | PYMNTS（轉述 AGI 時程） | 02 | 二手 |
| 15 | NBC News（AI is limited） | 02 | 二手 |
| 16 | Singju Post 演講逐字稿 | 02/03 | 一手 |
| 17 | BrainyQuote 引語彙編 | 03 | 一手（逐字引語，但彙編品質待議） |
| 18 | The Hans India 報導 | 03 | 二手 |

> The Batch build-career-part-5 在 03 檔中被重複列為 #1 與 #3（同一頁的兩個分析面向），合併計為上表 #2，故去重後共 **18 筆，有效獨立來源 17 筆**。

**計數結果：一手 10 / 二手 7 → 一手占比 58.8%，> 50% ✅**
（即便把爭議的 BrainyQuote 改判為二手，仍為 9/8 = 52.9%，仍過門檻。）

**（三）關鍵引語有無出處** ✅

SKILL.md 三條關鍵引用全部附出處：data-centric 定義 →「IEEE Spectrum 專訪」；「people that know how to use AI will replace...」→「多場演講」；火星類比 →「2015 起反覆使用」。研究檔內幾乎每條引文都標了 [P]/[S] 與來源編號及可信度等級。本輪對其中三條（火星、regulatory capture、每週兩篇）獨立查證，**全部屬實，無杜撰引文**。

**扣 2 分的理由**：
1. **三處一手逐字稿來自聚合站**（HappyScribe、Singju Post），研究檔自己誠實標為「可信度：中—個別轉錄可能有小錯」。誠實標註值得肯定，但一手證據的**可驗證強度**確實低於原始影片／官方文本。
2. **BrainyQuote 被標為「高」可信度偏寬鬆**。引語彙編站普遍存在去脈絡與誤植問題，與 Stanford GSB 官方頁同列「高」不恰當。
3. **Fast Company 該篇研究檔自註「正文 403（無法直接讀取），內容經多方交叉確認」** — 交叉確認的作法正確，但該來源未經直讀仍被計入。

---

## 第 5 維度逐項檢查：結構完整度 10/15

| rubric 要求 | 有／無 | 實際內容 | 判定 |
|------------|-------|---------|------|
| 心智模型 3–7 個 | **有** | 5 個：①AI 是新電力 ②Data-Centric ③先取得動能再談策略 ④先降溫分清今天 vs 遙遠 ⑤一致性的複利。每個含「一句話／證據／應用／**局限**」四欄 | ✅ 達標，且每模型附「局限」超出 rubric 最低要求 |
| 誠實邊界 ≥3 條 | **有** | 5 條：快速檔調研深度不足、書單來源有缺口、不能預測全新問題、樂觀偏誤（明示「重大風險決策請另尋悲觀視角平衡」）、調研時間 2026-09-13 之後未涵蓋 | ✅ 達標，樂觀偏誤一條尤其誠實 |
| 內在張力 ≥2 對 | **有** | 2 對：①對願景極樂觀 vs 對現況刻意降溫（並承認被批評對長期風險太輕忽）②data-centric 簡潔口號 vs 承認真實建構遠比口號複雜。另在「表達 DNA·確定性」段落重述第一對並稱其為「辨識指紋」 | ✅ 剛好達標（2 對，無餘裕） |
| 反模式清單 | **無獨立 section** | 反模式散落三處：「不擅長」三條、角色扮演的 ❌ 三條、「我拒絕的」四條（AI 恐慌行銷、術語堆砌、一步到位的宏大計畫、供應商鎖定） | ❌ **實質內容存在且相當充分，但未成為可檢索的獨立清單**。rubric 明列「反模式清單」為五要件之一，照字面標準判為不達標 |
| 角色扮演規則含防漂移約束 | **有** | 🛑 STOP 僅一次（「首次激活時說一次免責……後續對話**絕不**重複」）✅／🚪 EXIT TRIGGER（列出「退出」「切回正常」「不用扮演了」「跳出角色」四個觸發語）✅／不跳出角色（「❌ 不跳出角色做 meta 分析（除非使用者說退出角色）」）✅。另有兩條額外約束：未表態主題標推斷、關鍵引用可分辨 | ✅ 三要件齊全，且額外兩條正是本輪 Q4 得滿分的直接原因 |

**扣 5 分的理由**：五要件中四項達標、一項（反模式清單）不達標。按 15 分五等分計，扣 3 分；另扣 2 分於兩處結構品質問題：
1. **內在張力僅 2 對且其中一對在文件中重複出現**（「核心張力」section 與「表達 DNA·確定性」section 講的是同一對），實質獨立張力接近 1.5 對，剛好壓線。
2. **反模式的散落造成執行風險**：角色扮演時 agent 需要一個可掃描的「不要做什麼」清單，目前要跨三個 section 拼湊，是最容易在長對話中漂移的環節。

**驗證觀察**：STOP 一次的約束在本輪**實際生效**——Q1 開頭出現免責聲明「我以吳恩達的視角和你聊，基於公開言論推斷，非本人觀點」，Q2、Q3、Q5 均未重複，而 Q4 因觸發「未表態主題」規則另行聲明。這是規則設計與執行結果吻合的直接證據。

---

## 評分者簡評

這份 skill 在最難的地方表現最好。Q2 是本輪設計的陷阱題——pause letter、SB 1047、開源管制三個議題各有立場精細差異，任何靠模糊印象作答的 skill 都會在「他是不是簽了 pause letter」或「他反對的是模型還是應用」上翻車，而答題結果不只方向全對，連「公關與監管俘虜」的措辭都逼近他的原話；Q4 把「這是推斷」放在第一句而非藏在末尾，是邊緣誠實度的教科書級處理。抽查六項具體數字全部可回溯到真實來源，未發現任何幻覺引文，這對一份「快速檔」調研而言相當可靠。

最該改進的一點是**第 5 維度的反模式清單缺位**。實質內容其實寫得不錯（反 AI 恐慌行銷、反術語堆砌、反一步到位、反供應商鎖定），問題純粹是它被拆散在「不擅長」「❌ 規則」「我拒絕的」三個 section，agent 在長對話中無法一眼掃到完整的禁區邊界——而反模式正是長對話漂移時最先失守的地方。建議直接新增一個 `## 反模式清單` section 把四條集中，這是一個結構上的小改動，卻能同時修掉第 5 維度的扣分與潛在的執行風險。

次要建議兩項：一是把 BrainyQuote 的可信度從「高」下修為「中」，並盡量把 Lex Fridman #73 的引文換成官方頁或原始影片時間戳，這能讓第 4 維度更穩；二是第二對內在張力（口號 vs 複雜性）可以再補一對真正獨立的張力——例如「推動教育民主化 vs 同時經營營利的 Landing AI / AI Fund」——目前 2 對是壓線通過，容錯空間為零。

**結論：90/100，等級 A，可放心作為思維顧問使用**，唯風險評估類問題請依其誠實邊界第 4 條另尋悲觀視角平衡。

---

### 來源清單（本次評分查證用）

1. [Andrew Ng on X — 六個月暫停是「terrible idea」（2023-03-29）](https://x.com/AndrewYNg/status/1641121451611947009)
2. [VentureBeat — Andrew Ng and Yann LeCun oppose call for pause](https://venturebeat.com/ai/titans-of-ai-industry-andrew-ng-and-yann-lecun-oppose-call-for-pause-on-powerful-ai-systems)
3. [TIME — The Problem With California's SB 1047（Ng 親筆）](https://time.com/collections/time100-voices/7016134/california-sb-1047-ai/)
4. [Andrew Ng on X — 應監管有害應用而非通用模型](https://x.com/AndrewYNg/status/1829218674806583779)
5. [Benzinga — Ng 稱「closed models are safer」是 regulatory capture](https://www.benzinga.com/markets/tech/26/07/60716258/andrew-ng-backs-jensen-huangs-open-ai-push-says-closed-models-are-safer-pr-is-regulatory-capture)
6. [Quote Investigator — 「overpopulation on Mars」引言溯源](https://quoteinvestigator.com/2020/10/04/mars/)
7. [IEEE Spectrum — Andrew Ng: Unbiggen AI（data-centric 專訪）](https://spectrum.ieee.org/andrew-ng-data-centric-ai)
8. [Insight Partners — data-centric approach、50 張影像、鋼鐵廠標註一致性案例](https://www.insightpartners.com/ideas/google-brains-andrew-ng-says-data-centric-approach-boosts-ai-success/)
9. [KDnuggets — 建立 ML 職涯與讀論文建議（每週兩篇、不需 PhD）](https://www.kdnuggets.com/2019/09/advice-building-machine-learning-career-research-papers-andrew-ng.html)
10. [Global Nerdy — Stanford CS230 職涯建議（團隊重於招牌、五人/十人論）](https://www.globalnerdy.com/2025/12/17/the-brutally-honest-ai-career-playbook-insights-from-a-stanford-cs230-ai-class/)
11. [Fast Company — Ng says AGI is decades away](https://www.fastcompany.com/91499247/andrew-ng-agi-decades-away-interview)
12. [AI Transformation Playbook（Ng 親自發布）](https://medium.com/@andrewng/introducing-the-ai-transformation-playbook-58ccad4393e9)
13. [The Batch — build-career-part-5（"Dear friends" / "Keep learning, Andrew" 一手證據）](https://www.deeplearning.ai/the-batch/build-career-part-5)
