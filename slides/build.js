// Build deck: 論文核心 (2411.10109) + GenAgents vs Nuwa 比較
// Style: presentation-style skill — light bg, top progress bar, one idea per line, plain language, no AI tells.
const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.defineLayout({ name: "W", width: 13.333, height: 7.5 });
p.layout = "W";

// ---- Palette ----
const BG = "FFFFFF";
const INK = "1F2A37";        // body text, not pure black
const MUTED = "8A94A6";      // faded / de-emphasized
const ACCENT = "2563EB";     // primary accent (blue)
const ACCENT2 = "E8811C";    // secondary/emphasis (orange)
const GREEN = "16A34A";
const LTBLUE = "EAF1FE";     // light tint backing
const LTGREY = "F3F4F6";
const FONT = "Microsoft JhengHei"; // 微軟正黑體

const CHAPTERS = ["1. 研究要解決的問題", "2. 怎麼做的", "3. 結果", "4. 該怎麼選", "5. 實作 Demo"];

// ---- Top progress bar ----
function bar(slide, active) {
  const y = 0.28, h = 0.42, gap = 0.12;
  const totalW = 13.333 - 0.6 * 2;
  const w = (totalW - gap * (CHAPTERS.length - 1)) / CHAPTERS.length;
  CHAPTERS.forEach((c, i) => {
    const x = 0.6 + i * (w + gap);
    const on = i === active;
    slide.addShape(p.ShapeType.roundRect, {
      x, y, w, h, rectRadius: 0.06,
      fill: { color: on ? ACCENT : LTGREY },
      line: { type: "none" },
    });
    slide.addText(c, {
      x, y, w, h, align: "center", valign: "middle",
      fontFace: FONT, fontSize: 11, bold: on,
      color: on ? "FFFFFF" : MUTED,
    });
  });
}

function title(slide, t) {
  slide.addText(t, {
    x: 0.6, y: 0.95, w: 12.1, h: 0.7, align: "left", valign: "middle",
    fontFace: FONT, fontSize: 27, bold: true, color: INK,
  });
}

function footer(slide, n) {
  slide.addText("LLM Agents Grounded in Self-Reports · arXiv 2411.10109v3", {
    x: 0.6, y: 7.02, w: 9, h: 0.3, fontFace: FONT, fontSize: 9, color: MUTED, align: "left",
  });
  slide.addText(String(n), {
    x: 12.4, y: 7.02, w: 0.6, h: 0.3, fontFace: FONT, fontSize: 9, color: MUTED, align: "right",
  });
}

function newSlide(active, n) {
  const s = p.addSlide();
  s.background = { color: BG };
  bar(s, active);
  footer(s, n);
  return s;
}

let pageNo = 0;

// ============================================================
// COVER
// ============================================================
{
  const s = p.addSlide();
  s.background = { color: BG };
  s.addText("用一個人「自己講的話」，做出他的數位分身", {
    x: 0.8, y: 2.2, w: 11.7, h: 1.0, fontFace: FONT, fontSize: 34, bold: true, color: INK, align: "left",
  });
  s.addText("LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals", {
    x: 0.8, y: 3.25, w: 11.7, h: 0.6, fontFace: FONT, fontSize: 16, color: ACCENT, align: "left",
  });
  s.addText([
    { text: "Joon Sung Park 等 · Stanford / Google DeepMind · 2024", options: { breakLine: true } },
    { text: "訪談 1,052 位美國人，每人 2 小時 → 建立能預測他態度與行為的 AI", options: {} },
  ], {
    x: 0.8, y: 4.0, w: 11.7, h: 0.9, fontFace: FONT, fontSize: 14, color: MUTED, align: "left", lineSpacingMultiple: 1.3,
  });
  s.addShape(p.ShapeType.roundRect, { x: 0.8, y: 5.2, w: 3.0, h: 0.55, rectRadius: 0.08, fill: { color: LTBLUE }, line: { type: "none" } });
  s.addText("arXiv 2411.10109v3", { x: 0.8, y: 5.2, w: 3.0, h: 0.55, align: "center", valign: "middle", fontFace: FONT, fontSize: 12, bold: true, color: ACCENT });
}

// ============================================================
// CH1 — 研究要解決的問題  (問題定義 = 論文第 1 頁核心)
// ============================================================
{
  const s = newSlide(0, ++pageNo);
  title(s, "要解決問題");
  s.addText([
    { text: "餵給 AI 一個人的深度自述\n", options: { fontSize: 24, color: INK, breakLine: true } },
    { text: "（訪談逐字稿或問卷）\n\n", options: { fontSize: 18, color: MUTED, breakLine: true } },
    { text: "它就能預測這個人\n", options: { fontSize: 24, color: INK, breakLine: true } },
    { text: "在各種情境下會怎麼想、怎麼選", options: { fontSize: 24, bold: true, color: ACCENT } },
  ], { x: 0.9, y: 2.1, w: 11.5, h: 3.2, fontFace: FONT, align: "left", valign: "top", lineSpacingMultiple: 1.15 });
}

// ============================================================
// CH2 — 怎麼做的  (方法 = 論文第 2 頁核心, Figure 1 流程)
// ============================================================
// 資料流：人 → 訪談/問卷 → 建 Agent → 評估。
function pipelineSlide(n) {
  const s = newSlide(1, n);
  title(s, "怎麼做的：四個步驟");

  const boxes = [
    { key: "人", t: "1,052 位美國人", sub: "按年齡/性別/種族/地區\n分層抽樣" },
    { key: "自述", t: "收集自述", sub: "AI 語音訪談 2 小時\n+ 問卷（GSS、Big Five）" },
    { key: "分身", t: "建立數位分身", sub: "把自述塞進 prompt\n+ 四位專家角度推理" },
    { key: "驗證", t: "驗證準不準", sub: "跟本人兩週後\n重測結果比對" },
  ];
  const n4 = boxes.length;
  const bw = 2.75, gap = 0.45, bh = 2.45;
  const totalW = bw * n4 + gap * (n4 - 1);
  const startX = (13.333 - totalW) / 2;
  const by = 2.75;

  boxes.forEach((b, i) => {
    const x = startX + i * (bw + gap);
    s.addShape(p.ShapeType.roundRect, {
      x, y: by, w: bw, h: bh, rectRadius: 0.1,
      fill: { color: "FFFFFF" }, line: { color: ACCENT, width: 1.6 },
    });
    s.addText(String(i + 1), {
      x: x + 0.15, y: by + 0.14, w: 0.6, h: 0.5, fontFace: FONT, fontSize: 19, bold: true,
      color: ACCENT, align: "left",
    });
    s.addText(b.t, {
      x: x + 0.1, y: by + 0.68, w: bw - 0.2, h: 0.55, align: "center", valign: "middle",
      fontFace: FONT, fontSize: 16, bold: true, color: INK,
    });
    s.addText(b.sub, {
      x: x + 0.12, y: by + 1.24, w: bw - 0.24, h: 1.0, align: "center", valign: "top",
      fontFace: FONT, fontSize: 12, color: INK, lineSpacingMultiple: 1.2,
    });
    // arrow to next
    if (i < n4 - 1) {
      const ax = x + bw + 0.04;
      s.addShape(p.ShapeType.rightArrow, {
        x: ax, y: by + bh / 2 - 0.13, w: gap - 0.08, h: 0.26,
        fill: { color: ACCENT }, line: { type: "none" },
      });
    }
  });

}
// 原本四頁逐步點亮，已合併為一頁
pipelineSlide(++pageNo);

// ============================================================
// CH3 — 結果
// ============================================================
{
  const s = newSlide(2, ++pageNo);
  title(s, "結果：自述做的分身，明顯更準");

  // Bar chart-ish: normalized accuracy on GSS
  const data = [
    { label: "訪談 + 問卷", v: 0.86, hi: true },
    { label: "只用訪談", v: 0.83, hi: true },
    { label: "只用問卷", v: 0.82, hi: true },
    { label: "只用人口統計", v: 0.74, hi: false },
    { label: "只用人物介紹", v: 0.71, hi: false },
  ];
  const cx = 3.6, cy = 2.35, rowH = 0.72, maxW = 7.6, maxV = 1.0;
  data.forEach((d, i) => {
    const y = cy + i * rowH;
    s.addText(d.label, { x: 0.6, y, w: 2.9, h: 0.5, align: "right", valign: "middle", fontFace: FONT, fontSize: 13, bold: d.hi, color: d.hi ? INK : MUTED });
    const w = (d.v / maxV) * maxW;
    s.addShape(p.ShapeType.roundRect, { x: cx, y: y + 0.06, w, h: 0.38, rectRadius: 0.04, fill: { color: d.hi ? ACCENT : "CBD5E1" }, line: { type: "none" } });
    s.addText(d.v.toFixed(2), { x: cx + w + 0.1, y: y + 0.02, w: 0.9, h: 0.45, align: "left", valign: "middle", fontFace: FONT, fontSize: 13, bold: true, color: d.hi ? ACCENT : MUTED });
  });
}


// ============================================================
// CH4 — 所以該怎麼選 + GenAgents vs Nuwa 比較
// ============================================================
{
  const s = newSlide(3, ++pageNo);
  title(s, "所以，該怎麼選？");

  // 三張卡橫排，撐滿版面；每張 = 一個可執行的決定
  const picks = [
    { n: "1", h: "用深度自述", sub: "別只寫人設", c: ACCENT },
    { n: "2", h: "訪談或問卷，做一種", sub: "合併只小贏", c: ACCENT2 },
    { n: "3", h: "抓重點就好", sub: "不必錄 2 小時", c: GREEN },
  ];
  const pw = 10.4, ph = 1.16, pgap = 0.34, py = 2.5;
  const px0 = (13.333 - pw) / 2;

  picks.forEach((k, i) => {
    const y = py + i * (ph + pgap);
    s.addShape(p.ShapeType.roundRect, { x: px0, y, w: pw, h: ph, rectRadius: 0.1, fill: { color: k.c }, line: { type: "none" } });
    s.addShape(p.ShapeType.ellipse, { x: px0 + 0.42, y: y + (ph - 0.5) / 2, w: 0.5, h: 0.5, fill: { color: "FFFFFF" }, line: { type: "none" } });
    s.addText(k.n, { x: px0 + 0.42, y: y + (ph - 0.5) / 2, w: 0.5, h: 0.5, align: "center", valign: "middle", fontFace: FONT, fontSize: 16, bold: true, color: k.c });
    s.addText([
      { text: k.h, options: { fontSize: 21, bold: true } },
      { text: "　　" + k.sub, options: { fontSize: 14 } },
    ], { x: px0 + 1.15, y, w: pw - 1.5, h: ph, align: "left", valign: "middle", fontFace: FONT, color: "FFFFFF" });
  });
}

// ============================================================
// CH4b — GenAgents vs Nuwa 比較表（還原）
// ============================================================
{
  const s = newSlide(3, ++pageNo);
  title(s, "GenAgents vs 女媧 Nuwa");

  const headH = 0.5, rowLabelW = 2.2, colW = 5.05, startX = 0.6, startY = 1.78;
  const colX = [startX + rowLabelW, startX + rowLabelW + colW + 0.2];

  // Column headers
  const heads = [
    { t: "GenAgents（生成式代理人）", c: ACCENT, sub: "Stanford · 學術訪談法" },
    { t: "女媧 Nuwa（造人術）", c: ACCENT2, sub: "花叔社群 · 蒸餾法" },
  ];
  heads.forEach((h, i) => {
    s.addShape(p.ShapeType.roundRect, { x: colX[i], y: startY, w: colW, h: headH + 0.35, rectRadius: 0.06, fill: { color: h.c }, line: { type: "none" } });
    s.addText([
      { text: h.t + "\n", options: { fontSize: 14, bold: true, breakLine: true } },
      { text: h.sub, options: { fontSize: 11 } },
    ], { x: colX[i] + 0.15, y: startY, w: colW - 0.3, h: headH + 0.35, align: "center", valign: "middle", fontFace: FONT, color: "FFFFFF" });
  });

  const rows = [
    { label: "研發背景", a: "史丹佛 HCI 團隊\n（Joon Sung Park 等），2023 開源", b: "中國開發者社群「花叔」發起的開源專案" },
    { label: "核心作法", a: "科學化深度訪談\n1,000 人 × 2 小時，累積 2,000+ 小時", b: "自動抓公開資料\n（演講/貼文/Podcast/文章）做蒸餾" },
    { label: "萃取什麼", a: "記憶流 + 反思 + 規劃\n的自主 Agent 架構", b: "心智模型 + 決策啟發式 + 表達 DNA\n（LLM 三重驗證）" },
    { label: "優勢", a: "擬真度高（學術主流）\n人格、價值觀、社交決策深度模擬", b: "快速落地（應用導向）\n建置成本低、速度快" },
    { label: "本地路徑", a: "joonspk-research/\ngenerative_agents", b: "alchaincyf/nuwa-skill ✓ 已 clone" },
  ];
  const rY = startY + headH + 0.35 + 0.12;
  const rH = 0.72;
  rows.forEach((r, i) => {
    const y = rY + i * (rH + 0.06);
    // row label
    s.addShape(p.ShapeType.roundRect, { x: startX, y, w: rowLabelW - 0.05, h: rH, rectRadius: 0.05, fill: { color: LTGREY }, line: { type: "none" } });
    s.addText(r.label, { x: startX, y, w: rowLabelW - 0.05, h: rH, align: "center", valign: "middle", fontFace: FONT, fontSize: 12.5, bold: true, color: INK });
    // cells
    [r.a, r.b].forEach((txt, j) => {
      s.addShape(p.ShapeType.roundRect, { x: colX[j], y, w: colW, h: rH, rectRadius: 0.05, fill: { color: j === 0 ? "F5F8FF" : "FFF7EE" }, line: { type: "none" } });
      s.addText(txt, { x: colX[j] + 0.15, y, w: colW - 0.3, h: rH, align: "left", valign: "middle", fontFace: FONT, fontSize: 11.5, color: INK, lineSpacingMultiple: 1.1 });
    });
  });
}

// ============================================================
// CH5 — 蒸餾流程圖（快速檔：檔位 → 3 維度 → 三重驗證 → 產出）
// ============================================================
{
  const s = newSlide(4, ++pageNo);
  title(s, "怎麼蒸餾的：nuwa-skill「快速檔」流程");

  // ---- Row 1: 五階段流程 ----
  const steps = [
    { n: "1", t: "選檔位", who: "你決定", sub: "快速檔\n(3 維度 / 每維 5 來源)",
      detail: "捨棄他者評價 / 決策 /\n時間線 = 快速檔的代價", c: ACCENT2 },
    { n: "2", t: "3 維度調研", who: "自動", sub: "subagent 分維度抓素材\n（並行，不支援則串行）",
      detail: "著作 → 反覆出現 ≥3 次\n對話 → 被追問時怎麼答\n表達 → 高頻句式、立場", c: ACCENT },
    { n: "3", t: "三重驗證", who: "自動", sub: "15–30 候選 → 取 top 3–7\n（這次 5 個）",
      detail: "跨域復現 → ≥2 個領域\n生成力 → 能推斷新問題\n排他性 → 非人人皆如此", c: ACCENT },
    { n: "4", t: "提煉框架", who: "自動", sub: "5 心智模型 + 7 啟發式",
      detail: "只過 1–2 重 → 降級啟發式\n0 重 → 丟掉", c: ACCENT },
    { n: "5", t: "生成 Skill", who: "自動", sub: "247 行 SKILL.md",
      detail: "內建回答工作流\n分類 → 查現況 → 用框架答", c: GREEN },
  ];
  // 兩個 🔴 CHECKPOINT：跑到這裡會停下來等你確認（索引 = 它前面那一步）
  const gates = { 1: "看調研品質", 3: "看提煉結果" };
  // repo 共 4 個 CHECKPOINT，後兩個在生成 Skill 之後（品質驗證、雙 Agent 精煉）
  const tailGates = ["⏸ 你確認 · 看品質驗證", "⏸ 你確認 · 看精煉變更"];
  const sw = 2.36, sgap = 0.32, sh = 2.72;
  const stotal = sw * steps.length + sgap * (steps.length - 1);
  const sx0 = (13.333 - stotal) / 2;
  const sy = 3.05;

  steps.forEach((b, i) => {
    const x = sx0 + i * (sw + sgap);
    s.addShape(p.ShapeType.roundRect, {
      x, y: sy, w: sw, h: sh, rectRadius: 0.09,
      fill: { color: "FFFFFF" }, line: { color: b.c, width: 1.8 },
    });
    // number badge
    s.addShape(p.ShapeType.ellipse, {
      x: x + 0.12, y: sy + 0.11, w: 0.34, h: 0.34,
      fill: { color: b.c }, line: { type: "none" },
    });
    s.addText(b.n, {
      x: x + 0.12, y: sy + 0.11, w: 0.34, h: 0.34, align: "center", valign: "middle",
      fontFace: FONT, fontSize: 11.5, bold: true, color: "FFFFFF",
    });
    s.addText(b.t, {
      x: x + 0.5, y: sy + 0.1, w: sw - 0.62, h: 0.37, align: "left", valign: "middle",
      fontFace: FONT, fontSize: 14, bold: true, color: INK,
    });
    s.addText(b.sub, {
      x: x + 0.16, y: sy + 0.52, w: sw - 0.32, h: 0.6, align: "left", valign: "top",
      fontFace: FONT, fontSize: 10.5, color: INK, lineSpacingMultiple: 1.2,
    });
    // 細節（原本獨立面板的內容，收進方框）
    s.addShape(p.ShapeType.line, {
      x: x + 0.16, y: sy + 1.1, w: sw - 0.32, h: 0,
      line: { color: "E5E7EB", width: 1 },
    });
    s.addText(b.detail, {
      x: x + 0.16, y: sy + 1.22, w: sw - 0.32, h: 0.98, align: "left", valign: "top",
      fontFace: FONT, fontSize: 9.5, color: MUTED, lineSpacingMultiple: 1.25,
    });
    // 誰做的：你決定 vs 自動
    const isYou = b.who === "你決定";
    s.addShape(p.ShapeType.roundRect, {
      x: x + 0.16, y: sy + sh - 0.5, w: 1.0, h: 0.33, rectRadius: 0.06,
      fill: { color: isYou ? ACCENT2 : LTGREY }, line: { type: "none" },
    });
    s.addText(b.who, {
      x: x + 0.16, y: sy + sh - 0.5, w: 1.0, h: 0.33, align: "center", valign: "middle",
      fontFace: FONT, fontSize: 10, bold: isYou, color: isYou ? "FFFFFF" : MUTED,
    });
    // 確認關卡：標在箭頭上方（不擠在方框之間）
    if (gates[i]) {
      const gcx = x + sw + sgap / 2;
      s.addShape(p.ShapeType.roundRect, {
        x: gcx - 0.95, y: sy - 0.46, w: 1.9, h: 0.38, rectRadius: 0.19,
        fill: { color: "FDF1E3" }, line: { color: ACCENT2, width: 1 },
      });
      s.addText("⏸ 你確認 · " + gates[i], {
        x: gcx - 0.95, y: sy - 0.46, w: 1.9, h: 0.38, align: "center", valign: "middle",
        fontFace: FONT, fontSize: 9.5, bold: true, color: ACCENT2,
      });
      // 指回箭頭的細線
      s.addShape(p.ShapeType.line, {
        x: gcx, y: sy - 0.08, w: 0, h: sh / 2 - 0.05,
        line: { color: ACCENT2, width: 1, dashType: "dash" },
      });
    }
    if (i < steps.length - 1) {
      s.addShape(p.ShapeType.rightArrow, {
        x: x + sw + 0.02, y: sy + sh / 2 - 0.11, w: sgap - 0.06, h: 0.22,
        fill: { color: "C9CFDA" }, line: { type: "none" },
      });
    }
  });

  // 生成 Skill 之後還有兩個確認關卡（repo 共 4 個）
  const lastX = sx0 + (steps.length - 1) * (sw + sgap);
  const tgY = sy + sh + 0.28;
  s.addText("生成後還有兩關：", {
    x: sx0, y: tgY, w: 1.9, h: 0.34, align: "right", valign: "middle",
    fontFace: FONT, fontSize: 10.5, color: MUTED,
  });
  tailGates.forEach((g, i) => {
    const gx = sx0 + 2.0 + i * 2.15;
    s.addShape(p.ShapeType.roundRect, {
      x: gx, y: tgY, w: 2.0, h: 0.34, rectRadius: 0.17,
      fill: { color: "FDF1E3" }, line: { color: ACCENT2, width: 1 },
    });
    s.addText(g, {
      x: gx, y: tgY, w: 2.0, h: 0.34, align: "center", valign: "middle",
      fontFace: FONT, fontSize: 9.5, bold: true, color: ACCENT2,
    });
  });
  s.addText("規則是取 top 3–7 個心智模型；5 個是蒸餾吳恩達的實際結果", {
    x: sx0 + 6.5, y: tgY, w: 6.2, h: 0.34, align: "right", valign: "middle",
    fontFace: FONT, fontSize: 9.5, color: MUTED,
  });
}

// ============================================================
// CH5 — 實作 Demo（用 nuwa 蒸餾吳恩達，回答本計畫問題）
// ============================================================
{
  const s = newSlide(4, ++pageNo);
  title(s, "實作 Demo：蒸餾吳恩達，問我們的計畫");

  // 左：流程小標
  s.addText([
    { text: "用 nuwa-skill 走「快速檔」蒸餾 Andrew Ng\n", options: { fontSize: 13, color: INK, breakLine: true } },
    { text: "3 維度上網調研 → 提煉 5 個心智模型 → 生成可用 Skill", options: { fontSize: 12, color: MUTED } },
  ], { x: 0.6, y: 1.75, w: 12.1, h: 0.7, fontFace: FONT, align: "left", valign: "top", lineSpacingMultiple: 1.2 });

  // 問題框
  s.addShape(p.ShapeType.roundRect, { x: 0.6, y: 2.5, w: 12.1, h: 0.7, rectRadius: 0.08, fill: { color: LTGREY }, line: { type: "none" } });
  s.addText([
    { text: "問：", options: { bold: true, color: ACCENT } },
    { text: "我想做「教授數位分身」幫教授回答學生問題、做求職媒合，該怎麼務實落地？", options: { color: INK } },
  ], { x: 0.9, y: 2.5, w: 11.5, h: 0.7, fontFace: FONT, fontSize: 13, align: "left", valign: "middle" });

  // 答（吳恩達視角）左右兩欄
  const ay = 3.4, aw = 5.85, ah = 2.85;
  // 左欄：他的招牌判斷
  s.addShape(p.ShapeType.roundRect, { x: 0.6, y: ay, w: aw, h: ah, rectRadius: 0.08, fill: { color: "F5F8FF" }, line: { color: ACCENT, width: 1.5 } });
  s.addText("吳恩達視角怎麼回", { x: 0.85, y: ay + 0.15, w: aw - 0.5, h: 0.4, fontFace: FONT, fontSize: 14, bold: true, color: ACCENT });
  s.addText([
    { text: "先降溫：你不需要完美復刻教授", options: { bullet: { code: "2022" }, breakLine: true } },
    { text: "這是資料問題，不是模型問題", options: { bullet: { code: "2022" }, breakLine: true } },
    { text: "收 50 組真實 Q&A，勝過訓練大模型", options: { bullet: { code: "2022" }, breakLine: true } },
    { text: "求職媒合「還很遠」，先別碰", options: { bullet: { code: "2022" }, breakLine: true } },
    { text: "先做一位教授、跑 6 週小試點", options: { bullet: { code: "2022" } } },
  ], { x: 0.85, y: ay + 0.6, w: aw - 0.5, h: ah - 0.75, fontFace: FONT, fontSize: 12.5, color: INK, valign: "top", lineSpacingMultiple: 1.3 });

  // 右欄：Skill 規則在哪體現（證明是框架在跑，不是隨口答）
  s.addShape(p.ShapeType.roundRect, { x: 0.6 + aw + 0.4, y: ay, w: aw, h: ah, rectRadius: 0.08, fill: { color: "FFF7EE" }, line: { color: ACCENT2, width: 1.5 } });
  s.addText("這些都來自蒸餾出的心智模型", { x: 0.85 + aw + 0.4, y: ay + 0.15, w: aw - 0.5, h: 0.4, fontFace: FONT, fontSize: 14, bold: true, color: ACCENT2 });
  s.addText([
    { text: "「今天 vs 遙遠」→ 反炒作鏡片", options: { bullet: { code: "2022" }, breakLine: true } },
    { text: "「改資料不改模型」→ Data-Centric", options: { bullet: { code: "2022" }, breakLine: true } },
    { text: "「先做能贏的小試點」→ Playbook", options: { bullet: { code: "2022" }, breakLine: true } },
    { text: "溫暖鼓勵、行動收尾 → 表達 DNA", options: { bullet: { code: "2022" }, breakLine: true } },
    { text: "= 換個人物視角，答案完全不同", options: { bold: true, color: ACCENT2 } },
  ], { x: 0.85 + aw + 0.4, y: ay + 0.6, w: aw - 0.5, h: ah - 0.75, fontFace: FONT, fontSize: 12.5, color: INK, valign: "top", lineSpacingMultiple: 1.3 });

  // 底部一句
  s.addText("成品已存成可用 Skill：.claude/skills/andrew-ng-perspective/", {
    x: 0.6, y: 6.45, w: 12.1, h: 0.4, fontFace: FONT, fontSize: 11, color: MUTED, align: "left",
  });
}

// ---- Save ----
p.writeFile({ fileName: "C:/Users/julia/new_friend_nycu/slides/paper-summary.pptx" }).then(f => {
  console.log("SAVED:", f);
});
