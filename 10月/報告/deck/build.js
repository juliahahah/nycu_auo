// 數位分身專案 · 研究進度報告（對外版）
const F = require("./frame.js");
const { makeDeck, INK, MUTED, ACCENT, ACCENT2, LTBLUE, LTAMBER, LTGREY, LINE, FONT, W } = F;

const CH = ["1 專案目標", "2 能力邊界", "3 系統架構與驗證", "4 對標與未來規劃"];
const D = makeDeck(CH, "數位分身專案 · 研究進度報告 · 2026-09");
const { p, slide, blank, spotlight, box, text, arrow, pill } = D;
const GREEN = "15803D", RED = "B91C1C", LTGREEN = "EAF7EE", LTRED = "FDECEC";

// QA 版面：每頁三組問答
function drawQA(s, qa) {
  const y0 = 1.95, rh = 1.52;
  qa.forEach((item, i) => {
    const y = y0 + i * (rh + 0.16);
    box(s, 0.6, y, 12.1, rh, { fill: "F7F8FA", line: false });
    s.addShape(p.ShapeType.rect, { x: 0.6, y, w: 0.07, h: rh, fill: { color: ACCENT }, line: { type: "none" } });
    text(s, "Q" + (i + 1), 0.85, y + 0.16, 0.7, 0.34, { fontSize: 13, bold: true, color: ACCENT });
    text(s, item.q, 1.62, y + 0.13, 10.9, 0.4, { fontSize: 15, bold: true, valign: "middle" });
    text(s, "A", 0.85, y + 0.66, 0.7, 0.34, { fontSize: 12, bold: true, color: MUTED });
    text(s, item.a, 1.62, y + 0.62, 10.9, 0.78, { fontSize: 12, lineSpacingMultiple: 1.35 });
  });
}
// 既有兩條技術路線，聚光燈分隔頁共用
const ROUTES = [
  { label: "GenAgents", note: "Stanford / Google DeepMind\n學術訪談法" },
  { label: "女媧 Nuwa", note: "開源社群\n公開資料蒸餾法" },
];
// ============ 0 封面 ============
{
  const s = blank();
  text(s, "數位分身專案", 0.8, 1.95, 11.7, 0.6, { fontSize: 20, color: ACCENT, bold: true });
  text(s, "個人分身的建置方法與驗證協議", 0.8, 2.55, 11.7, 1.0, { fontSize: 34, bold: true });
  text(s, "研究進度報告　·　2026 年 9 月", 0.8, 3.75, 11.7, 0.5, { fontSize: 15, color: MUTED });
  s.addShape(p.ShapeType.rect, { x: 0.85, y: 4.55, w: 2.2, h: 0.04, fill: { color: ACCENT }, line: { type: "none" } });
}

// ============ 0b 目錄 ============
{
  const s = blank();
  text(s, "目錄", 0.8, 0.95, 11.7, 0.7, { fontSize: 26, bold: true });
  const toc = [
    { n: "1", t: "專案目標", d: "本專案要達成的架構、驗證與邊界三項目標，並以既有兩條技術路線作為背景對照", pg: "1–6" },
    { n: "2", t: "能力邊界", d: "分身在態度層可用、在行為層失效的實證數據，據此界定可承諾的範圍", pg: "7–8" },
    { n: "3", t: "系統架構與驗證", d: "四段架構、測量工具的取捨、釋出閘門與更新機制，以及底層模型實驗", pg: "9–21" },
    { n: "4", t: "對標與未來規劃", d: "國內外既有案例與 Andrew Ng 分身的缺口，以及語言、視覺、聲音三階段規劃", pg: "22–24" },
  ];
  const y0 = 2.2, rh = 0.85;
  toc.forEach((c, i) => {
    const y = y0 + i * (rh + 0.09);
    pill(s, c.n, 0.8, y + (rh - 0.46) / 2, 0.46, 0.46, ACCENT, "FFFFFF", 15);
    text(s, c.t, 1.55, y, 2.5, rh, { fontSize: 17, bold: true, valign: "middle" });
    text(s, c.d, 4.15, y, 7.5, rh, { fontSize: 12.5, color: INK, valign: "middle" });
    text(s, c.pg, 11.8, y, 0.9, rh, { fontSize: 12, color: MUTED, valign: "middle", align: "right" });
    if (i < toc.length - 1) s.addShape(p.ShapeType.line, { x: 0.8, y: y + rh + 0.045, w: 11.9, h: 0, line: { color: "EAECF0", width: 1 } });
  });
}

// ============ 0c 本專案目標 ============
{
  const s = slide(0, "專案目標：建立低成本且可驗證的個人分身", null, "ours");

  // 上：核心宗旨
  box(s, 0.6, 1.95, 12.1, 1.05, { fill: LTBLUE, line: false });
  text(s, [
    { text: "核心宗旨　", options: { fontSize: 12, bold: true, color: ACCENT } },
    { text: "建立低成本、可驗證的個人數位分身，重現一個人的說話風格、思考邏輯與價值觀，用於經驗與智慧的傳承。", options: { fontSize: 15, bold: true, color: INK } },
  ], 0.95, 1.95, 11.4, 1.05, { valign: "middle", lineSpacingMultiple: 1.25 });

  // 中：三個具體目標
  const goals = [
    { n: "01", t: "架構目標", c: ACCENT, lt: LTBLUE },
    { n: "02", t: "驗證目標", c: ACCENT2, lt: LTAMBER },
    { n: "03", t: "邊界目標", c: GREEN, lt: LTGREEN },
  ];
  const gw = 3.9, ggap = 0.28, gy = 3.25, gh = 1.5;
  goals.forEach((g, i) => {
    const x = 0.6 + i * (gw + ggap);
    box(s, x, gy, gw, gh, { fill: g.lt, line: false });
    text(s, g.n, x + 0.3, gy + 0.26, 1.0, 0.38, { fontSize: 14, bold: true, color: g.c });
    text(s, g.t, x + 0.3, gy + 0.72, gw - 0.6, 0.5, { fontSize: 20, bold: true, color: INK });
  });

}

// ============ 0d 兩條路線前情提要（比較表） ============
{
  const s = slide(0, "前情提要：兩條既有技術路線的比較", null, "lit");

  const colW = 4.55, labelW = 2.55, x0 = 0.6;
  const cx = [x0 + labelW + 0.15, x0 + labelW + 0.15 + colW + 0.2];
  const hy = 1.88, hh = 0.72;

  // 欄位標頭
  const heads = [
    { t: "GenAgents", sub: "Stanford / Google DeepMind · arXiv 2411.10109", c: ACCENT },
    { t: "女媧 Nuwa", sub: "開源社群 · alchaincyf/nuwa-skill", c: ACCENT2 },
  ];
  heads.forEach((h, i) => {
    box(s, cx[i], hy, colW, hh, { fill: h.c, line: false });
    text(s, h.t, cx[i] + 0.15, hy + 0.06, colW - 0.3, 0.36, { fontSize: 16, bold: true, color: "FFFFFF", align: "center", valign: "middle" });
    text(s, h.sub, cx[i] + 0.15, hy + 0.41, colW - 0.3, 0.26, { fontSize: 9.5, color: "FFFFFF", align: "center", valign: "middle" });
  });

  const rows = [
    ["資料來源", "本人自述：2 小時訪談 × 1,052 人", "公開資料：演講、貼文、Podcast、文章"],
    ["建置成本", "極高（累積 2,000 小時以上）", "極低（自動抓取，數小時內完成）"],
    ["測量目標", "個體差異——這個人與他人差在哪", "思維框架——這個人如何推理"],
    ["輸出形式", "一組人格向度分數", "可執行的心智模型與決策啟發式"],
    ["品質控制", "心理計量學：效度、信度、常模", "三重驗證：跨域複現、生成力、排他性"],
    ["驗證方式", "與本人兩週後重測結果比對", "與本人公開表態過的立場比對"],
    ["主要限制", "學術規格，無法規模化", "拿不到本人自述，須靠驗證過濾雜訊"],
  ];
  const ry0 = hy + hh + 0.1, rh = 0.5;
  rows.forEach((r, i) => {
    const y = ry0 + i * (rh + 0.04);
    box(s, x0, y, labelW, rh, { fill: LTGREY, line: false });
    text(s, r[0], x0, y, labelW, rh, { fontSize: 12, bold: true, align: "center", valign: "middle" });
    [r[1], r[2]].forEach((cell, j) => {
      box(s, cx[j], y, colW, rh, { fill: j === 0 ? "F5F8FF" : "FFF9F0", line: false });
      text(s, cell, cx[j] + 0.18, y, colW - 0.36, rh, { fontSize: 11.5, valign: "middle" });
    });
  });

}

// ============ 聚光燈：GenAgents ============
spotlight(0, ROUTES, 0);

// ============ 1-2 GenAgents 的做法 ============
{
  const s = slide(0, "學術訪談法：以大規模自述資料建立分身", null, "lit");

  // 四步驟流程
  const steps = [
    { n: "1", t: "分層抽樣", d: "1,052 位受測者\n依年齡、性別、種族、地區", c: ACCENT },
    { n: "2", t: "收集自述", d: "每人 2 小時訪談\n加四項測量工具", c: ACCENT },
    { n: "3", t: "建立分身", d: "自述放入提示詞\n不重新訓練模型", c: ACCENT2 },
    { n: "4", t: "驗證準確度", d: "與本人兩週後\n重測結果比對", c: GREEN },
  ];
  const sw = 2.9, sgap = 0.27, sy = 2.15, sh = 2.0;
  const sx0 = (W - (sw * 4 + sgap * 3)) / 2;
  steps.forEach((b, i) => {
    const x = sx0 + i * (sw + sgap);
    box(s, x, sy, sw, sh, { line: b.c, lw: 1.6 });
    s.addShape(p.ShapeType.ellipse, { x: x + 0.16, y: sy + 0.16, w: 0.36, h: 0.36, fill: { color: b.c }, line: { type: "none" } });
    text(s, b.n, x + 0.16, sy + 0.16, 0.36, 0.36, { fontSize: 12.5, bold: true, color: "FFFFFF", align: "center", valign: "middle" });
    text(s, b.t, x + 0.62, sy + 0.15, sw - 0.75, 0.38, { fontSize: 15, bold: true, valign: "middle" });
    text(s, b.d, x + 0.2, sy + 0.75, sw - 0.4, 1.0, { fontSize: 12, lineSpacingMultiple: 1.35 });
    if (i < steps.length - 1) arrow(s, x + sw + 0.03, sy + sh / 2 - 0.11, sgap - 0.06, 0.22, "C9CFDA");
  });

  // 三個關鍵設計
  text(s, "值得借鑑的三個設計", 0.6, 4.55, 4.0, 0.34, { fontSize: 13, bold: true, color: ACCENT });
  const keys = [
    { t: "不重新訓練模型" },
    { t: "採用他人設計的訪談腳本" },
    { t: "評估時剔除可被猜中的題目" },
  ];
  const kw = 3.9, kgap = 0.28, ky = 5.0, kh = 0.72;
  keys.forEach((k, i) => {
    const x = 0.6 + i * (kw + kgap);
    box(s, x, ky, kw, kh, { fill: LTBLUE, line: false });
    text(s, k.t, x + 0.22, ky, kw - 0.44, kh, { fontSize: 13.5, bold: true, color: ACCENT, valign: "middle" });
  });
}

// ============ 聚光燈：女媧 Nuwa ============
spotlight(0, ROUTES, 1, { color: ACCENT2 });
// ============ 1-3 女媧蒸餾流程（架構圖） ============
{
  const s = slide(0, "蒸餾流程：從公開資料到可執行的分身", null, "lit");

  const steps = [
    { n: "1", t: "選定檔位", d: "快速／標準／深度\n決定調研維度數", c: ACCENT2, who: "人工" },
    { n: "2", t: "多維度調研", d: "分頭抓取著作、對話、\n表達素材", c: ACCENT, who: "自動" },
    { n: "3", t: "三重驗證", d: "15–30 個候選論點\n篩出 3–7 個", c: ACCENT, who: "自動" },
    { n: "4", t: "提煉框架", d: "心智模型、決策啟發式\n表達 DNA", c: ACCENT, who: "自動" },
    { n: "5", t: "生成 Skill", d: "可直接載入使用的\n人格檔案", c: GREEN, who: "自動" },
  ];
  const sw = 2.3, sgap = 0.19, sy = 2.5, sh = 3.4;
  const sx0 = 0.6;
  steps.forEach((b, i) => {
    const x = sx0 + i * (sw + sgap);
    box(s, x, sy, sw, sh, { line: b.c, lw: 1.6 });
    s.addShape(p.ShapeType.ellipse, { x: x + 0.14, y: sy + 0.14, w: 0.34, h: 0.34, fill: { color: b.c }, line: { type: "none" } });
    text(s, b.n, x + 0.14, sy + 0.14, 0.34, 0.34, { fontSize: 12, bold: true, color: "FFFFFF", align: "center", valign: "middle" });
    text(s, b.t, x + 0.56, sy + 0.13, sw - 0.7, 0.36, { fontSize: 14, bold: true, valign: "middle" });
    text(s, b.d, x + 0.18, sy + 0.72, sw - 0.36, 1.5, { fontSize: 12, lineSpacingMultiple: 1.35 });
    pill(s, b.who, x + 0.18, sy + sh - 0.58, 0.95, 0.36, b.who === "人工" ? ACCENT2 : "E5E7EB", b.who === "人工" ? "FFFFFF" : "6B7280", 10.5);
    if (i < steps.length - 1) arrow(s, x + sw + 0.01, sy + sh / 2 - 0.1, sgap - 0.02, 0.2, "C9CFDA");
  });

}

// ============ 2-1 行為層驗證：賽局數字 ============
{
  const s = slide(1, "行為層驗證：分身答得出觀點，預測不了行為", null, "mixed");

  // 左右對照：兩個大區塊
  const cw = 5.95, cgap = 0.2, cy = 2.0, ch = 1.9;
  const cards = [
    { t: "問觀點（態度層）", v: "準", d: "對社會議題的立場、看法", c: GREEN, lt: LTGREEN },
    { t: "預測行為（行為層）", v: "不準", d: "實際怎麼分錢、要不要信任對方", c: RED, lt: LTRED },
  ];
  cards.forEach((c, k) => {
    const x = 0.6 + k * (cw + cgap);
    box(s, x, cy, cw, ch, { fill: c.lt, line: false });
    text(s, c.t, x + 0.35, cy + 0.24, cw - 0.7, 0.38, { fontSize: 14, bold: true, color: c.c });
    text(s, c.v, x + 0.35, cy + 0.68, cw - 0.7, 0.72, { fontSize: 38, bold: true, color: c.c });
    text(s, c.d, x + 0.35, cy + 1.42, cw - 0.7, 0.4, { fontSize: 12.5, color: INK });
  });

  // 佐證圖：五個經濟賽局
  text(s, "佐證：五個經濟賽局逐題比對", 0.6, 4.22, 6.0, 0.3, { fontSize: 12, bold: true, color: MUTED });

  // 圖例（與標題同列，右側）
  s.addShape(p.ShapeType.rect, { x: 7.3, y: 4.28, w: 0.22, h: 0.13, fill: { color: ACCENT2 }, line: { type: "none" } });
  text(s, "分身預測本人　→　幾乎零", 7.62, 4.21, 2.6, 0.26, { fontSize: 10.5, valign: "middle", color: INK });
  s.addShape(p.ShapeType.rect, { x: 10.3, y: 4.28, w: 0.22, h: 0.13, fill: { color: "9CA3AF" }, line: { type: "none" } });
  text(s, "本人自己重做　→　穩定", 10.62, 4.21, 2.3, 0.26, { fontSize: 10.5, valign: "middle", color: INK });

  const games = [
    { n: "獨裁者", a: 0.11, h: 0.45 }, { n: "信任（先手）", a: 0.08, h: 0.50 }, { n: "信任（後手）", a: 0.03, h: 0.47 },
    { n: "公共財", a: -0.05, h: 0.07 }, { n: "囚徒困境", a: 0.10, h: 0.31 },
  ];
  const zx = 3.35, scale = 10.2, y0 = 4.72, rowH = 0.38, bh = 0.14;
  s.addShape(p.ShapeType.rect, { x: zx - 0.005, y: y0 - 0.06, w: 0.012, h: 5 * rowH - 0.04, fill: { color: "C9CFDA" }, line: { type: "none" } });
  games.forEach((g, k) => {
    const y = y0 + k * rowH;
    text(s, g.n, 0.6, y - 0.01, 2.14, 0.32, { fontSize: 11, align: "right", valign: "middle", color: INK });
    const wa = Math.abs(g.a) * scale, xa = g.a >= 0 ? zx : zx - wa;
    s.addShape(p.ShapeType.rect, { x: zx, y: y + bh + 0.03, w: g.h * scale, h: bh, fill: { color: "9CA3AF" }, line: { type: "none" } });
    s.addShape(p.ShapeType.rect, { x: xa, y: y, w: Math.max(wa, 0.02), h: bh, fill: { color: ACCENT2 }, line: { type: "none" } });
  });

  box(s, 9.1, 5.02, 3.6, 1.26, { fill: LTGREY, line: false });
  text(s, "本人自己是穩定的，\n所以不是題目有問題——\n是分身預測不到。", 9.4, 5.02, 3.0, 1.26, { fontSize: 12, bold: true, color: INK, valign: "middle", lineSpacingMultiple: 1.35 });
  text(s, "資料來源：Park et al., arXiv:2411.10109v3；公共財賽局本人重測僅 0.07，信度不足，不列入判定。", 0.6, 7.02, 12.1, 0.28, { fontSize: 9, color: MUTED });
}

// ============ 2-2 筆試 vs 路考 ============
{
  const s = slide(1, "應用邊界：態度層可落地，行為層不予承諾", null, "ours");
  const cw = 5.75, y = 2.25, h = 3.4;
  box(s, 0.6, y, cw, h, { fill: LTGREEN, line: false });
  text(s, "態度與觀點層級", 0.85, y + 0.2, cw - 0.5, 0.5, { fontSize: 18, bold: true, color: GREEN });
  text(s, [
    { text: "GSS 一致性 0.83\n", options: { fontSize: 15, bold: true, breakLine: true } },
    { text: "實際意義：177 題中答對 65.7%\n", options: { breakLine: true } },
    { text: "本人兩週後重測為 79.5%\n\n", options: { breakLine: true } },
    { text: "適用：常見問題回覆、教學與研究理念重現", options: { bold: true, color: GREEN } },
  ], 0.85, y + 0.85, cw - 0.5, 2.5, { fontSize: 13, lineSpacingMultiple: 1.4 });
  box(s, 0.6 + cw + 0.4, y, cw, h, { fill: LTRED, line: false });
  text(s, "行為與決策層級", 0.85 + cw + 0.4, y + 0.2, cw - 0.5, 0.5, { fontSize: 18, bold: true, color: RED });
  text(s, [
    { text: "賽局 correlation 0.03–0.11\n", options: { fontSize: 15, bold: true, breakLine: true } },
    { text: "即使具備本人兩小時訪談資料亦無法預測\n", options: { breakLine: true } },
    { text: "僅有公開資料之方法表現只會更低\n\n", options: { breakLine: true } },
    { text: "不適用：具體決策預測，本專案不予承諾", options: { bold: true, color: RED } },
  ], 0.85 + cw + 0.4, y + 0.85, cw - 0.5, 2.5, { fontSize: 13, lineSpacingMultiple: 1.4 });
  text(s, "0.83 並非準確率，而是相對於本人自身重測穩定度的比值。", 0.6, 5.85, 12.1, 0.4, { fontSize: 12.5, color: MUTED });
  text(s, "行為層預測為該領域尚未解決之共同問題，亦為潛在的技術空缺。", 0.6, 6.3, 12.1, 0.5, { fontSize: 15, bold: true, align: "center" });
}

// ============ 4-1 三條路 ============
{
  const s = slide(2, "技術定位：介於學術訪談法與蒸餾法之間", null, "ours");
  const labelW = 1.6, colW = 3.4, x0 = 0.6;
  const cx = [x0 + labelW + 0.15, x0 + labelW + 0.15 + colW + 0.2, x0 + labelW + 0.15 + (colW + 0.2) * 2];
  const hy = 1.92, hh = 0.68;

  const heads = [
    { t: "學術訪談法", sub: "Stanford", c: ACCENT },
    { t: "公開資料蒸餾法", sub: "開源方案", c: ACCENT2 },
    { t: "本專案", sub: "混合法", c: GREEN },
  ];
  heads.forEach((h, i) => {
    box(s, cx[i], hy, colW, hh, { fill: h.c, line: false });
    text(s, h.t, cx[i] + 0.12, hy + 0.06, colW - 0.24, 0.36, { fontSize: 15, bold: true, color: "FFFFFF", align: "center", valign: "middle" });
    text(s, h.sub, cx[i] + 0.12, hy + 0.41, colW - 0.24, 0.26, { fontSize: 10, color: "FFFFFF", align: "center", valign: "middle" });
  });

  const rows = [
    ["資料來源", "本人自述\n1,052 人 × 2 小時訪談", "公開資料\n演講、貼文、音訊節目", "本人自述 ＋ 公開資料"],
    ["建置成本", "極高\n累積 2,000 小時以上", "極低\n數小時內完成", "中\n本人投入約 3 小時"],
    ["品質控制", "心理計量學\n效度、信度、常模", "三重驗證\n跨域複現、生成力、排他性", "沿用三重驗證\n另加心理計量驗證"],
    ["主要限制", "學術規格\n難以規模化", "無本人自述\n須以驗證過濾雜訊", "可取得本人自述\n但預算規模受限"],
  ];
  const ry0 = hy + hh + 0.1, rh = 0.88;
  rows.forEach((r, i) => {
    const y = ry0 + i * (rh + 0.07);
    box(s, x0, y, labelW, rh, { fill: LTGREY, line: false });
    text(s, r[0], x0, y, labelW, rh, { fontSize: 12.5, bold: true, align: "center", valign: "middle" });
    [r[1], r[2], r[3]].forEach((cell, j) => {
      box(s, cx[j], y, colW, rh, { fill: j === 0 ? "F5F8FF" : j === 1 ? "FFF9F0" : "F3FAF5", line: false });
      text(s, cell, cx[j] + 0.15, y, colW - 0.3, rh, { fontSize: 11.5, valign: "middle", align: "center", lineSpacingMultiple: 1.3 });
    });
  });

  text(s, "本專案架構：低成本蒸餾流程　＋　本人自述資料　＋　心理計量驗證工具", 0.6, 6.42, 12.1, 0.42, { fontSize: 14, bold: true, align: "center" });
}

// ============ 架構圖：共用繪製函式 ============
// mode: "all" 全亮｜"build" 只亮資料層+蒸餾層｜"verify" 只亮驗證層
function archDiagram(s, mode, opts) {
  const o = opts || {};
  const litBuild = mode === "all" || mode === "build";
  const litVerify = mode === "all" || mode === "verify";
  // 釋出閘門恆繪製；僅總圖點亮，聚光燈頁維持暗色
  const litGate = mode === "all" || mode === "release" || !!o.litGate;
  const col = (on, c) => on ? c : "D1D5DB";
  const tcol = (on, c) => on ? c : "B0B7C3";
  const lt = (on, c) => on ? c : "F8F9FB";
  const y = 2.45;

  // 四欄共用版位：三層壓縮後讓出右側閘門窄欄
  const X = [0.6, 3.82, 7.30];
  const CW = [2.80, 3.06, 3.23];
  const gx = 10.95, gw = 1.75;
  const fsSub = 9.5;   // 方塊內說明字
  const fsV = 11;      // 驗證層標題字
  const fsVSub = 9;

  // 資料層
  box(s, X[0], y - 0.35, CW[0], 3.5, { fill: lt(litBuild, LTBLUE), line: false });
  text(s, "資料層", X[0] + 0.15, y - 0.3, CW[0] - 0.3, 0.4, { fontSize: 12, bold: true, color: tcol(litBuild, ACCENT) });
  box(s, X[0] + 0.25, y + 0.22, CW[0] - 0.5, 1.15, { fill: "FFFFFF", line: col(litBuild, ACCENT), lw: 1.6 });
  text(s, [{ text: "公開資料\n", options: { bold: true, breakLine: true } }, { text: "演講、投影片、論文、影片", options: { fontSize: fsSub } }],
    X[0] + 0.35, y + 0.22, CW[0] - 0.7, 1.15, { fontSize: 13, color: tcol(litBuild, INK), valign: "middle", align: "center" });
  box(s, X[0] + 0.25, y + 1.62, CW[0] - 0.5, 1.15, { fill: "FFFFFF", line: col(litBuild, ACCENT2), lw: 1.6 });
  text(s, [{ text: "本人自述\n", options: { bold: true, breakLine: true } }, { text: "改寫版訪談 60–90 分鐘", options: { fontSize: fsSub } }],
    X[0] + 0.35, y + 1.62, CW[0] - 0.7, 1.15, { fontSize: 13, color: tcol(litBuild, INK), valign: "middle", align: "center" });
  arrow(s, X[0] + CW[0] + 0.1, y + 1.32, X[1] - X[0] - CW[0] - 0.2, 0.28, col(litBuild, INK));

  // 蒸餾層
  box(s, X[1], y - 0.35, CW[1], 3.5, { fill: lt(litBuild, LTAMBER), line: false });
  text(s, "蒸餾層", X[1] + 0.15, y - 0.3, CW[1] - 0.3, 0.4, { fontSize: 12, bold: true, color: tcol(litBuild, ACCENT2) });
  box(s, X[1] + 0.25, y + 0.22, CW[1] - 0.5, 1.15, { fill: "FFFFFF", line: col(litBuild, ACCENT2), lw: 1.6 });
  text(s, [{ text: "三重驗證\n", options: { bold: true, breakLine: true } }, { text: "跨域複現 · 生成力 · 排他性", options: { fontSize: fsSub } }],
    X[1] + 0.35, y + 0.22, CW[1] - 0.7, 1.15, { fontSize: 13, color: tcol(litBuild, INK), valign: "middle", align: "center" });
  s.addShape(p.ShapeType.downArrow, { x: X[1] + CW[1] / 2 - 0.15, y: y + 1.4, w: 0.3, h: 0.18, fill: { color: col(litBuild, INK) }, line: { type: "none" } });
  box(s, X[1] + 0.25, y + 1.62, CW[1] - 0.5, 1.15, { fill: "FFFFFF", line: col(litBuild, ACCENT2), lw: 1.6 });
  text(s, [{ text: "分身 skill\n", options: { bold: true, breakLine: true } }, { text: "心智模型 · 啟發式 · 表達 DNA", options: { fontSize: fsSub } }],
    X[1] + 0.35, y + 1.62, CW[1] - 0.7, 1.15, { fontSize: 13, color: tcol(litBuild, INK), valign: "middle", align: "center" });
  arrow(s, X[1] + CW[1] + 0.1, y + 1.32, X[2] - X[1] - CW[1] - 0.2, 0.28, col(litVerify, INK));

  // 驗證層
  box(s, X[2], y - 0.35, CW[2], 3.5, { fill: lt(litVerify, LTGREEN), line: false });
  text(s, "驗證層", X[2] + 0.15, y - 0.3, CW[2] - 0.3, 0.4, { fontSize: 12, bold: true, color: tcol(litVerify, GREEN) });
  const v = [
    ["① 標準化量表", "BFI-44、IPIP-IPC 對照自評與他評"],
    ["② 課程框架任務", "3 門課 · 5 位評分者盲測"],
    ["③ 學生問答重演", "實際提問紀錄，本人判讀"],
  ];
  v.forEach((t, i) => {
    const vy = y + 0.2 + i * 0.92;
    box(s, X[2] + 0.25, vy, CW[2] - 0.5, 0.78, { fill: "FFFFFF", line: col(litVerify, GREEN), lw: 1.6 });
    text(s, [{ text: t[0] + "\n", options: { bold: true, breakLine: true } }, { text: t[1], options: { fontSize: fsVSub } }],
      X[2] + 0.4, vy, CW[2] - 0.8, 0.78, { fontSize: fsV, color: tcol(litVerify, INK), valign: "middle" });
  });

  // ④ 釋出閘門（恆繪製，依 litGate 決定明暗）
  arrow(s, X[2] + CW[2] + 0.1, y + 1.32, gx - X[2] - CW[2] - 0.2, 0.28, col(litGate, GREEN));
  box(s, gx, y - 0.35, gw, 3.5, { fill: lt(litGate, "F0F7F2"), line: col(litGate, GREEN), lw: 1.3, dash: "dash" });
  text(s, "釋出閘門", gx + 0.15, y - 0.3, gw - 0.3, 0.4, { fontSize: 12, bold: true, color: tcol(litGate, GREEN) });
  const gsteps = [
    { t: "本人評分", c: ACCENT },
    { t: "達門檻", c: ACCENT2 },
    { t: "釋出上線", c: GREEN },
  ];
  gsteps.forEach((g, i) => {
    const gy = y + 0.3 + i * 0.86;
    box(s, gx + 0.2, gy, gw - 0.4, 0.56, { fill: "FFFFFF", line: col(litGate, g.c), lw: 1.5 });
    text(s, g.t, gx + 0.2, gy, gw - 0.4, 0.56, { fontSize: 11.5, bold: true, color: tcol(litGate, g.c), align: "center", valign: "middle" });
    if (i < gsteps.length - 1) {
      s.addShape(p.ShapeType.downArrow, { x: gx + gw / 2 - 0.1, y: gy + 0.62, w: 0.2, h: 0.14, fill: { color: col(litGate, "9CA3AF") }, line: { type: "none" } });
    }
  });
  if (litGate && mode !== "release") text(s, "詳見後頁", gx + 0.2, y + 2.68, gw - 0.4, 0.26, { fontSize: 9.5, color: GREEN, align: "center" });

  // 回饋線
  const fbRight = X[2] + CW[2];
  const fbLeft = X[1] + CW[1] / 2;
  s.addShape(p.ShapeType.line, { x: fbLeft, y: y + 3.28, w: fbRight - fbLeft, h: 0, line: { color: col(litVerify, GREEN), width: 1.5, endArrowType: "triangle", dashType: "dash" } });
  text(s, "未通過 → 回到資料層補件、調整蒸餾", fbLeft, y + 3.32, fbRight - fbLeft, 0.32, { fontSize: 10, color: tcol(litVerify, GREEN), align: "center" });
}

// ============ 4-2a 架構總圖 ============
{
  const s = slide(2, "系統架構：資料、蒸餾、驗證、釋出", null, "mixed");
  archDiagram(s, "all");
  const tags = [
    { t: "多了本人自述", x: 0.6, w: 2.80, c: ACCENT },
    { t: "沿用既有流程", x: 3.82, w: 3.06, c: ACCENT2 },
    { t: "本專案原創", x: 7.30, w: 5.40, c: GREEN },
  ];
  tags.forEach((t) => pill(s, t.t, t.x + (t.w - 2.0) / 2, 6.25, 2.0, 0.34, t.c, "FFFFFF", 11));
}

// ============ 4-2b 聚光燈：資料層與蒸餾層 ============
{
  const s = slide(2, "系統架構 ①②：資料層與蒸餾層", null, "mixed");
  archDiagram(s, "build");
}

// ============ 1-1 四項測量工具：層級、題數、構面、取得方式（合併版） ============
{
  const s = slide(2, "測量工具：四項工具的層級、題數與構面", null, "lit");

  const colX = [0.6, 1.95, 4.35, 5.55, 9.95];
  const colW = [1.35, 2.4, 1.2, 4.4, 2.75];
  const heads = ["層級", "工具", "題數", "構面與內容", "取得方式"];
  const hy = 1.95, hh = 0.42;
  heads.forEach((h, i) => {
    text(s, h, colX[i] + 0.12, hy, colW[i] - 0.24, hh, { fontSize: 11, color: MUTED, valign: "middle", align: i === 2 ? "center" : "left" });
  });
  s.addShape(p.ShapeType.line, { x: 0.6, y: hy + hh, w: 12.1, h: 0, line: { color: "D1D5DB", width: 1.2 } });

  const rows = [
    {
      layer: "素材層", disc: "質性社會學", c: MUTED, lt: "F7F8FA",
      tool: "AVP 訪談腳本", n: "124 題",
      body: "半結構式訪談，開場為極開放題「說說你的人生故事」，時限 625 秒。\n依序涵蓋人生轉捩點、家庭與重要他人、社區、日常作息、政治立場。每題設秒數上限。",
      src: "文獻附錄全文刊出",
    },
    {
      layer: "態度層", disc: "社會學", c: ACCENT, lt: "F5F8FF",
      tool: "GSS 綜合社會調查", n: "177 題",
      body: "對社會議題的立場，如墮胎、死刑、槍枝管制、對各機構的信任度。\n評估時剔除 27 題人口統計題與 27 題與訪談措辭雷同者，避免靠背景推測或照抄得分。",
      src: "官方免費公開",
    },
    {
      layer: "人格層", disc: "人格心理學", c: ACCENT, lt: "F5F8FF",
      tool: "BFI-44 大五人格", n: "44 題",
      body: "五個維度：外向性 8、親和性 9、嚴謹性 9、神經質 8、開放性 10 題。\n五點量表，各維度取平均；其中 16 題為反向題，以 6 減原分換算。",
      src: "學術用途免費\n具台灣驗證繁中版",
    },
    {
      layer: "行為層", disc: "行為經濟學", c: ACCENT2, lt: "FFF9F0",
      tool: "五個經濟賽局", n: "5 局",
      body: "獨裁者測利他、信任賽局先手測信任、後手測互惠、公共財測合作、囚徒困境測合作與自利的取捨。\n以實際金額作答，單局獎金上限 8 至 10 美元。",
      src: "文獻載明完整參數",
    },
  ];

  const ry0 = hy + hh + 0.1, rh = 1.06;
  rows.forEach((r, i) => {
    const y = ry0 + i * (rh + 0.07);
    s.addShape(p.ShapeType.roundRect, { x: 0.6, y, w: 12.1, h: rh, rectRadius: 0.06, fill: { color: r.lt }, line: { type: "none" } });
    s.addShape(p.ShapeType.rect, { x: 0.6, y, w: 0.07, h: rh, fill: { color: r.c }, line: { type: "none" } });
    text(s, [
      { text: r.layer + "\n", options: { fontSize: 13, bold: true, color: r.c, breakLine: true } },
      { text: r.disc, options: { fontSize: 9.5, color: MUTED } },
    ], colX[0] + 0.2, y, colW[0] - 0.3, rh, { valign: "middle", lineSpacingMultiple: 1.2 });
    text(s, r.tool, colX[1] + 0.05, y, colW[1] - 0.15, rh, { fontSize: 14, bold: true, valign: "middle" });
    text(s, r.n, colX[2], y, colW[2], rh, { fontSize: 14, bold: true, color: r.c, align: "center", valign: "middle" });
    text(s, r.body, colX[3] + 0.1, y, colW[3] - 0.2, rh, { fontSize: 10.5, valign: "middle", lineSpacingMultiple: 1.3 });
    text(s, r.src, colX[4] + 0.1, y, colW[4] - 0.2, rh, { fontSize: 10.5, color: INK, valign: "middle", lineSpacingMultiple: 1.25 });
  });
}
// ============ 1-2 工具取捨與自建題庫（合併，格式同前頁） ============
{
  const s = slide(2, "工具取捨：保留、改寫、自建", null, "ours");

  const colX = [0.6, 1.95, 4.35, 5.6, 9.6];
  const colW = [1.35, 2.4, 1.25, 4.0, 3.1];
  const heads = ["決定", "工具", "題數", "判定理由", "後續作業"];
  const hy = 1.95, hh = 0.4;
  heads.forEach((h, i) => {
    text(s, h, colX[i] + 0.12, hy, colW[i] - 0.24, hh, { fontSize: 11, color: MUTED, valign: "middle", align: i === 2 ? "center" : "left" });
  });
  s.addShape(p.ShapeType.line, { x: 0.6, y: hy + hh, w: 12.1, h: 0, line: { color: "D1D5DB", width: 1.2 } });

  const rows = [
    { d: "保留", c: GREEN, lt: "F3FAF5", tool: "BFI-44 大五人格", n: "44 題",
      why: "免授權費，具台灣驗證繁中版（α .73–.83），結果可國際對比",
      todo: "取得繁中版全文（需學術資料庫權限）" },
    { d: "改寫", c: ACCENT, lt: "F5F8FF", tool: "AVP 訪談腳本", n: "124 → 40–60 題",
      why: "原版題目為美國社會議題；惟開放式開場與降低社會期許偏誤的問法具參考價值",
      todo: "改寫為中文學術場景版，涵蓋生涯、教學、研究品味、指導原則" },
    { d: "自建", c: ACCENT2, lt: "FFF9F0", tool: "專業領域態度題庫\n（取代 GSS）", n: "60 → 40 題",
      why: "GSS 為美國社會議題，與應用場域無關聯，須整份替換",
      todo: "六個面向各 10 題，經篩選後保留 40 題（詳見次頁）" },
    { d: "暫不用", c: RED, lt: "FDF4F4", tool: "五個經濟賽局", n: "5 局",
      why: "文獻原始資料顯示此層級預測力接近於零",
      todo: "列為後續階段之開放研究問題" },
  ];

  const ry0 = hy + hh + 0.08, rh = 0.78;
  rows.forEach((r, i) => {
    const y = ry0 + i * (rh + 0.07);
    s.addShape(p.ShapeType.roundRect, { x: 0.6, y, w: 12.1, h: rh, rectRadius: 0.06, fill: { color: r.lt }, line: { type: "none" } });
    s.addShape(p.ShapeType.rect, { x: 0.6, y, w: 0.07, h: rh, fill: { color: r.c }, line: { type: "none" } });
    pill(s, r.d, colX[0] + 0.2, y + (rh - 0.38) / 2, 1.05, 0.38, r.c, "FFFFFF", 12);
    text(s, r.tool, colX[1] + 0.05, y, colW[1] - 0.15, rh, { fontSize: 13.5, bold: true, valign: "middle", lineSpacingMultiple: 1.2 });
    text(s, r.n, colX[2], y, colW[2], rh, { fontSize: 12.5, bold: true, color: r.c, align: "center", valign: "middle" });
    text(s, r.why, colX[3] + 0.1, y, colW[3] - 0.2, rh, { fontSize: 11, valign: "middle", lineSpacingMultiple: 1.3 });
    text(s, r.todo, colX[4] + 0.1, y, colW[4] - 0.2, rh, { fontSize: 11, valign: "middle", lineSpacingMultiple: 1.3 });
  });

  // 自建題庫的六個面向
  text(s, "自建題庫的六個面向（各 10 題）", 0.6, 5.68, 4.0, 0.32, { fontSize: 12.5, bold: true, color: ACCENT2 });
  const dims = [
    { t: "研究品味", c: ACCENT }, { t: "指導原則", c: ACCENT },
    { t: "教學理念", c: ACCENT2 }, { t: "對 AI 的立場", c: ACCENT2 },
    { t: "學術倫理", c: GREEN }, { t: "職涯與價值觀", c: GREEN },
  ];
  const dw = 1.94, dgap = 0.09;
  dims.forEach((d, i) => {
    const x = 0.6 + i * (dw + dgap);
    box(s, x, 6.05, dw, 0.46, { fill: "FFFFFF", line: d.c, lw: 1.4 });
    text(s, d.t, x, 6.05, dw, 0.46, { fontSize: 11.5, bold: true, color: d.c, align: "center", valign: "middle" });
  });
}

// ============ 4-2c 聚光燈：驗證層 ============
{
  const s = slide(2, "系統架構 ③：驗證層", null, "ours");
  archDiagram(s, "verify");
}
// ============ 5-1 為什麼不能要 ground truth ============
{
  const s = slide(2, "驗證瓶頸：改採免標準答案的兩階段協議", null, "ours");
  const y = 2.45;
  box(s, 0.6, y, 5.8, 3.6, { fill: LTAMBER, line: false });
  text(s, [{ text: "第一階段　資料蒸餾\n\n", options: { fontSize: 20, bold: true, color: ACCENT2, breakLine: true } }, { text: "公開資料與本人自述經蒸餾流程產出分身\n\n版本凍結，並記錄資料清單與模型版本", options: { fontSize: 14 } }], 0.9, y + 0.35, 5.3, 3.0, { lineSpacingMultiple: 1.4 });
  arrow(s, 6.55, y + 1.65, 0.22, 0.3);
  box(s, 6.9, y, 5.8, 3.6, { fill: LTGREEN, line: false });
  text(s, [{ text: "第二階段　免標準答案之驗證任務\n\n", options: { fontSize: 20, bold: true, color: GREEN, breakLine: true } }, { text: "判斷依據改採三種來源\n\n既定計分規則　·　專家判斷　·　天然對照組", options: { fontSize: 14 } }], 7.2, y + 0.35, 5.3, 3.0, { lineSpacingMultiple: 1.4 });
}

// ============ 5-2 三個任務 ============
{
  const s = slide(2, "驗證任務：三項任務的依據皆非本人逐題答案", null, "ours");
  const cards = [
    { n: "①", t: "標準化量表", c: ACCENT, lt: LTBLUE, body: [
      "主要工具為 BFI-44 繁中版，並以公有領域之 IPIP-IPC（支配 × 親和二軸）替代 DISC 之功能位置",
      "DISC 評估：商業版題目無法取得，唯一開放版本（16 題）缺乏信度資料，且學界評價偏負面 → 列為輔助工具，結果定位為風格描述",
      "分身同題作答三次以檢視穩定度，並與本人自評及 2–3 位熟識者之他評比對",
    ]},
    { n: "②", t: "課程框架設計", c: ACCENT2, lt: LTAMBER, body: [
      "題目：設計指定課程之 12 週課綱，並說明排序理由",
      "三門課程：已開授者（具真實課綱可對照）、專長內未開授者、專長外者",
      "盲測設計：每門課混入 3 份課綱，由 5 位評分者辨識（本人 1、熟識者 2、不熟識之同領域學者 2）。不熟識者之辨識率不應顯著高於隨機",
    ]},
    { n: "③", t: "學生問答重演（候選）", c: GREEN, lt: LTGREEN, body: [
      "採用實際提問紀錄 10–20 題，由分身回覆後交本人判讀",
      "具備當時之真實回覆可供對照，且無須重複施測",
      "驗證情境與第一階段應用場景完全一致",
      "另備 3 項候選任務，待確認後定案",
    ]},
  ];
  const cw = 3.85, gap = 0.27, y = 2.2, h = 4.1;
  cards.forEach((c, i) => {
    const x = 0.6 + i * (cw + gap);
    box(s, x, y, cw, h, { fill: c.lt, line: false });
    text(s, c.n + " " + c.t, x + 0.2, y + 0.15, cw - 0.4, 0.55, { fontSize: 15.5, bold: true, color: c.c });
    text(s, c.body.map((b, j) => ({ text: b, options: { bullet: { code: "2022" }, breakLine: j < c.body.length - 1 } })), x + 0.2, y + 0.8, cw - 0.4, h - 0.9, { fontSize: 11.5, lineSpacingMultiple: 1.3 });
  });
  text(s, "所有任務均須計算真人評分者間一致性（Cohen's κ／ICC），以避免擬真度判定流於單一主觀印象。", 0.6, 6.45, 12.1, 0.4, { fontSize: 12, color: MUTED });
}

// ============ 4-2d 聚光燈：釋出閘門 ============
{
  const s = slide(2, "系統架構 ④：釋出閘門", null, "ours");
  archDiagram(s, "release");
}

// ============ 5-2b 釋出閘門（品質門檻） ============
{
  const s = slide(2, "釋出閘門：本人評分通過門檻後方可釋出", null, "ours");

  const steps = [
    { n: "01", t: "系統出題", d: "依各面向自動\n產生初考題組", c: MUTED, lt: LTGREY },
    { n: "02", t: "分身作答", d: "由分身逐題回覆", c: MUTED, lt: LTGREY },
    { n: "03", t: "本人評分", d: "由本人判定是否貼近\n自身觀點與思考風格", c: ACCENT, lt: LTBLUE },
    { n: "04", t: "門檻判定", d: "達門檻者釋出\n未達者退回調整重測", c: ACCENT2, lt: LTAMBER },
    { n: "05", t: "釋出上線", d: "列入可選分身清單\n供他人對話", c: GREEN, lt: LTGREEN },
  ];
  const sw = 2.22, sgap = 0.26, sy = 2.15, sh = 2.25;
  steps.forEach((st, i) => {
    const x = 0.6 + i * (sw + sgap);
    box(s, x, sy, sw, sh, { fill: st.lt, line: false });
    text(s, st.n, x + 0.22, sy + 0.2, 1.0, 0.34, { fontSize: 12, bold: true, color: st.c });
    text(s, st.t, x + 0.22, sy + 0.66, sw - 0.44, 0.42, { fontSize: 15, bold: true, color: INK });
    text(s, st.d, x + 0.22, sy + 1.2, sw - 0.44, 0.9, { fontSize: 11, lineSpacingMultiple: 1.3 });
    if (i < steps.length - 1) arrow(s, x + sw + 0.04, sy + sh / 2 - 0.1, 0.18, 0.2, "C4CAD4");
  });

  box(s, 0.6, 4.72, 12.1, 1.0, { fill: LTBLUE, line: false });
  text(s, [
    { text: "評分者為何必須是本人　", options: { fontSize: 12, bold: true, color: ACCENT } },
    { text: "「像不像我」屬於只有本人掌握的判準。他評與模型自評皆為替代指標，唯本人之判定可作為釋出與否的依據。", options: { fontSize: 14, color: INK } },
  ], 0.95, 4.72, 11.4, 1.0, { valign: "middle", lineSpacingMultiple: 1.25 });

  text(s, "門檻數值與各面向權重待第一位對象試評後定案；本頁為架構圖第四格「釋出閘門」之展開，於三項驗證任務之後執行。", 0.6, 6.0, 12.1, 0.4, { fontSize: 11.5, color: MUTED });
}

// ============ 5-3 審稿人 ============
{
  const s = slide(2, "方法論風險：四項可預期質疑與對應說明", null, "ours");
  const rows = [
    ["無本人重測資料，如何區分誤差來自分身或本人自身不穩定", "不宣稱正規化準確率，改報絕對一致率，並以其他對象之分身及不熟識本人之評分者作為基準線，據以區辨「像此人」與「像此類人」。", "本人穩定度僅能引用文獻之 79.5%"],
    ["單一對象，缺乏外推性", "第一階段驗證對象為方法本身（協議能否區辨擬真程度），而非母體。第二位對象將選擇公開課程資料完整者，其課綱可作為天然對照。", "須完成第二位對象方能正式回應"],
    ["態度層準確度之實務價值為何", "行為層於原文獻即已失效（0.03–0.11），本專案不予承諾；而規劃之應用場景本即落於態度層。", "行為層為開放問題，目前尚無解法"],
  ];
  const y0 = 2.38, rh = 1.28;
  text(s, "可預期之質疑", 0.6, y0 - 0.32, 3.6, 0.3, { fontSize: 10.5, color: MUTED });
  text(s, "本專案之回應", 4.4, y0 - 0.32, 5.6, 0.3, { fontSize: 10.5, color: MUTED });
  text(s, "現階段限制", 10.2, y0 - 0.32, 2.5, 0.3, { fontSize: 10.5, color: MUTED });
  rows.forEach((r, i) => {
    const y = y0 + i * (rh + 0.12);
    box(s, 0.6, y, 3.6, rh, { fill: LTRED, line: false });
    text(s, r[0], 0.75, y, 3.3, rh, { fontSize: 12, bold: true, valign: "middle" });
    box(s, 4.4, y, 5.6, rh, { fill: LTBLUE, line: false });
    text(s, r[1], 4.55, y, 5.3, rh, { fontSize: 11.5, valign: "middle" });
    box(s, 10.2, y, 2.5, rh, { fill: LTGREY, line: false });
    text(s, r[2], 10.35, y, 2.2, rh, { fontSize: 11, color: MUTED, valign: "middle" });
  });
  text(s, "另一項質疑為題目由研究團隊自訂。對策：出題人員與蒸餾人員分離、出題時點晚於蒸餾、課綱任務採用真實課綱對照。態度題庫初稿仍需第三方審題。", 0.6, 6.45, 12.1, 0.45, { fontSize: 11, color: MUTED });
}

// ============ 5-4 時效性與更新機制 ============
{
  const s = slide(2, "更新機制：分身所捕捉者為特定時點之特徵", null, "ours");

  box(s, 0.6, 1.95, 12.1, 1.08, { fill: LTRED, line: false });
  text(s, [
    { text: "理論缺口　", options: { fontSize: 12, bold: true, color: RED } },
    { text: "現行架構擷取的是蒸餾當下的觀點與風格。然而本人對新技術、新局勢的看法會持續變動，分身若不更新，將逐漸偏離本人當前的判斷。", options: { fontSize: 14.5, color: INK } },
  ], 0.95, 1.95, 11.4, 1.08, { valign: "middle", lineSpacingMultiple: 1.25 });

  const cols = [
    { t: "何者會變", c: ACCENT2, lt: LTAMBER, body: [
      "對新技術、新事件的立場",
      "研究重心與關注議題",
      "舉例素材與時事引用",
    ]},
    { t: "何者相對穩定", c: ACCENT, lt: LTBLUE, body: [
      "表達風格與句法習慣",
      "推理方式與論證結構",
      "核心價值與判斷原則",
    ]},
    { t: "初步構想（待討論）", c: GREEN, lt: LTGREEN, body: [
      "增量更新：定期補入新資料，重蒸餾易變層",
      "時效標記：回覆標註所依據資料之時點",
      "觸發條件：本人評分下滑或立場變動時重測",
    ]},
  ];
  const cw = 3.9, cgap = 0.28, cy = 3.35, ch = 2.55;
  cols.forEach((c, i) => {
    const x = 0.6 + i * (cw + cgap);
    box(s, x, cy, cw, ch, { fill: c.lt, line: false });
    text(s, c.t, x + 0.25, cy + 0.2, cw - 0.5, 0.42, { fontSize: 15, bold: true, color: c.c });
    text(s, c.body.map((b, j) => ({ text: b, options: { bullet: { code: "2022" }, breakLine: j < c.body.length - 1 } })), x + 0.25, cy + 0.78, cw - 0.5, ch - 0.98, { fontSize: 11.5, lineSpacingMultiple: 1.35 });
  });

  text(s, "本項為現階段尚未解決之問題，列為後續研究重點；第一階段先以版本凍結與時點標記因應。", 0.6, 6.15, 12.1, 0.4, { fontSize: 12, color: MUTED });
}

// ============ 3-3 換模型 + 對照組 ============
{
  const s = slide(2, "混淆因子實驗：底層模型影響風格，不影響立場", null, "ours");
  const models = [
    { n: "Haiku 4.5", w: 4098, note: "篇幅最長，自行添加粗體小標，並出現與人格資料無關之產品指涉", c: "9CA3AF" },
    { n: "Sonnet 5", w: 3164, note: "類比密度接近於零，與人格資料所載之表達特徵不符", c: "9CA3AF" },
    { n: "Opus 5", w: 3198, note: "唯一落實引用附出處規則，並完整執行時間尺度二分句法", c: ACCENT },
    { n: "Opus · 不載資料", w: 3282, note: "立場相同，特徵詞 14 項僅命中 2 項，且出現無來源之第一人稱事實宣稱", c: ACCENT2 },
  ];
  const y0 = 2.35, rowH = 0.85, bx = 3.0, scale = 5.2 / 4098;
  models.forEach((m, i) => {
    const y = y0 + i * rowH;
    text(s, m.n, 0.6, y, 2.3, 0.5, { fontSize: 13.5, bold: true, valign: "middle", align: "right", color: m.c === "9CA3AF" ? INK : m.c });
    s.addShape(p.ShapeType.rect, { x: bx, y: y + 0.1, w: m.w * scale, h: 0.3, fill: { color: m.c }, line: { type: "none" } });
    text(s, m.w + " 字", bx + m.w * scale + 0.1, y + 0.02, 1.2, 0.45, { fontSize: 11.5, color: MUTED, valign: "middle" });
    text(s, m.note, bx, y + 0.42, 6.2, 0.4, { fontSize: 10.5, color: INK });
  });
  box(s, 9.6, 2.3, 3.1, 3.4, { fill: LTBLUE, line: false });
  text(s, [
    { text: "立場：四組完全一致\n", options: { bold: true, breakLine: true } },
    { text: "未載入人格資料之對照組亦產出相同主張\n\n", options: { fontSize: 11.5, breakLine: true } },
    { text: "風格：差異顯著\n", options: { bold: true, breakLine: true } },
    { text: "篇幅差異 30% 源自模型；載入與否之差異僅 2.6%\n\n", options: { fontSize: 11.5, breakLine: true } },
    { text: "人格資料之實際貢獻：詞彙、句法與輸出紀律", options: { bold: true, color: ACCENT } },
  ], 9.75, 2.4, 2.85, 3.2, { fontSize: 12.5, lineSpacingMultiple: 1.25 });
  text(s, "設計結論：多分身系統應固定同一底層模型，方能確保觀點分歧來自人格資料而非模型差異。", 0.6, 5.95, 12.1, 0.45, { fontSize: 13.5, bold: true });
  text(s, "本實驗規模：3 個模型、2 道題、每題單次作答；立場一致性之結論尚待擴大樣本確認。", 0.6, 6.4, 12.1, 0.4, { fontSize: 10.5, color: MUTED });
}

// ============ 4-3 多視角顧問團 ============
{
  const s = slide(2, "延伸應用：多視角顧問團彙整不同分身的觀點", null, "ours");
  const y = 2.4;
  box(s, 0.6, y + 1.0, 2.2, 0.9, { fill: LTGREY, line: false });
  text(s, "同一個問題", 0.6, y + 1.0, 2.2, 0.9, { fontSize: 14, bold: true, align: "center", valign: "middle" });
  arrow(s, 2.9, y + 1.31, 0.5, 0.28);
  box(s, 3.5, y + 1.0, 1.8, 0.9, { line: INK });
  text(s, "分派", 3.5, y + 1.0, 1.8, 0.9, { fontSize: 14, bold: true, align: "center", valign: "middle" });
  const agents = ["分身 A · 對象甲", "分身 B · 對象乙", "分身 C · 外部專家"];
  agents.forEach((a, i) => {
    const ay = y + i * 1.05;
    s.addShape(p.ShapeType.line, { x: 5.3, y: y + 1.45, w: 0.6, h: (ay + 0.4) - (y + 1.45), line: { color: INK, width: 1.2 } });
    box(s, 5.95, ay, 2.9, 0.8, { fill: i === 2 ? LTAMBER : LTBLUE, line: false });
    text(s, [{ text: a + "\n", options: { bold: true, breakLine: true } }, { text: "各自的資料 · 標記 base model", options: { fontSize: 10, color: MUTED } }], 6.05, ay, 2.7, 0.8, { fontSize: 12.5, valign: "middle" });
    s.addShape(p.ShapeType.line, { x: 8.85, y: ay + 0.4, w: 0.6, h: (y + 1.45) - (ay + 0.4), line: { color: INK, width: 1.2 } });
  });
  box(s, 9.5, y + 0.15, 3.2, 2.6, { line: GREEN, lw: 1.6 });
  text(s, "彙整層", 9.7, y + 0.3, 2.9, 0.35, { fontSize: 13, bold: true, color: GREEN });
  text(s, "不投票、不平均", 9.7, y + 0.68, 2.9, 0.3, { fontSize: 12.5 });
  text(s, "列出共識、分歧、各自理由", 9.7, y + 1.0, 2.9, 0.3, { fontSize: 12.5 });
  text(s, "每句話標來源：", 9.7, y + 1.42, 2.9, 0.3, { fontSize: 10.5, color: MUTED });
  const srcs = [["15803D", "本人講過"], ["D97706", "模型補的"], ["B91C1C", "推測"]];
  srcs.forEach((sc, i) => {
    const sy = y + 1.74 + i * 0.28;
    s.addShape(p.ShapeType.rect, { x: 9.75, y: sy + 0.05, w: 0.18, h: 0.15, fill: { color: sc[0] }, line: { type: "none" } });
    text(s, sc[1], 10.03, sy, 2.5, 0.28, { fontSize: 10.5, color: INK, valign: "middle" });
  });
}

// ============ 6-1 競品對標 ============
{
  const s = slide(3, "競品對標：八個既有案例均未公布擬真度評估", null, "lit");
  const cw = 5.75, y = 2.2, h = 3.9;

  box(s, 0.6, y, cw, h, { fill: LTBLUE, line: false });
  text(s, "參考對象：台大電機 李宏毅教授", 0.85, y + 0.18, cw - 0.5, 0.5, { fontSize: 17, bold: true, color: ACCENT });
  text(s, [
    { text: "已實作 LLM 助教", options: { fontSize: 14, bold: true, breakLine: true } },
    { text: "1,028 名學生、GPT-4 批改 6 份作業，發表於 EMNLP 2024", options: { fontSize: 12, color: MUTED, breakLine: true } },
  ], 0.85, y + 0.85, cw - 0.5, 0.75, {});
  text(s, [
    { text: "曾試作 AI 授課影片，自評不及真人講解", options: { fontSize: 14, bold: true, breakLine: true } },
    { text: "該缺口正是本專案所欲蒸餾之講解邏輯與表達風格", options: { fontSize: 12, color: MUTED, breakLine: true } },
  ], 0.85, y + 1.75, cw - 0.5, 0.75, {});
  text(s, [
    { text: "驗證條件充足", options: { fontSize: 14, bold: true, breakLine: true } },
    { text: "公開影片 482 支、課程頁面 26 個，課綱具天然對照組", options: { fontSize: 12, color: MUTED, breakLine: true } },
  ], 0.85, y + 2.65, cw - 0.5, 0.75, {});
  text(s, "已有第三方開源專案以其為對象，本專案須明確區隔定位。", 0.85, y + 3.3, cw - 0.5, 0.4, { fontSize: 11.5, color: ACCENT2 });

  box(s, 0.6 + cw + 0.4, y, cw, h, { fill: LTGREY, line: false });
  const x2 = 0.85 + cw + 0.4;
  text(s, "業界與學術界 8 項案例", x2, y + 0.18, cw - 0.5, 0.5, { fontSize: 17, bold: true, color: INK });
  text(s, [
    { text: "均採指令工程結合檢索與形象合成", options: { fontSize: 14, bold: true, breakLine: true } },
    { text: "Praxis AI、哈佛商學院、帝國理工、復旦、南京大學等，未進行模型微調", options: { fontSize: 12, color: MUTED, breakLine: true } },
  ], x2, y + 0.85, cw - 0.5, 0.75, {});
  text(s, [
    { text: "八案例均未公布擬真度正式評估", options: { fontSize: 14, bold: true, color: ACCENT2, breakLine: true } },
    { text: "評估指標集中於使用率與學習成效", options: { fontSize: 12, color: MUTED, breakLine: true } },
  ], x2, y + 1.75, cw - 0.5, 0.75, {});
  text(s, [
    { text: "可借鑑之免標準答案路線", options: { fontSize: 14, bold: true, breakLine: true } },
    { text: "InCharacter（ACL 2024）以量表訪談角色，", options: { fontSize: 12, color: MUTED, breakLine: true } },
    { text: "對照第三方認知一致率 80.7%", options: { fontSize: 12, color: MUTED, breakLine: true } },
  ], x2, y + 2.6, cw - 0.5, 0.95, {});
  text(s, "國內目前未見已上線之特定人物數位分身案例。", x2, y + 3.45, cw - 0.5, 0.4, { fontSize: 11.5, color: MUTED });

  text(s, "市場缺口明確：實作案例眾多，但均未建立擬真度驗證機制。", 0.6, 6.3, 12.1, 0.5, { fontSize: 16, bold: true, align: "center" });
}

// ============ 6-1b Andrew Ng 數位分身 ============
{
  const s = slide(3, "重點參考：AI Andrew（avatar.andrewng.org）", null, "lit");

  box(s, 0.6, 1.9, 12.1, 0.95, { fill: LTAMBER, line: false });
  text(s, [
    { text: "值得注意之處　", options: { fontSize: 12, bold: true, color: ACCENT2 } },
    { text: "該站主動聲明「AI Andrew is not Andrew Ng」，並明確區分分身回覆與本人觀點——此即責任邊界的揭露做法。", options: { fontSize: 15, bold: true, color: INK } },
  ], 0.95, 1.9, 11.4, 0.95, { valign: "middle" });

  const cw = 5.95, cgap = 0.2, cy = 3.1, ch = 2.45;
  const cards = [
    { t: "該站自述之定位", c: ACCENT, lt: LTBLUE, body: [
      "定位為 intellectual companion（思想陪伴），非問答機器人",
      "自述建於 Andrew Ng 之著述、教學與長年 AI 經驗",
      "強調跨對話記憶：記得使用者的脈絡並主動追問未竟之事",
      "具合成語音，網站明示並非本人錄音",
    ]},
    { t: "與本專案之對照", c: GREEN, lt: LTGREEN, body: [
      "互動形態與本專案第一階段目標一致",
      "素材取自公開內容，屬蒸餾路線；本專案另取得本人自述",
      "合成語音對應本專案第三階段規劃",
      "同樣未見公布擬真度之正式評估",
    ]},
  ];
  cards.forEach((c, k) => {
    const x = 0.6 + k * (cw + cgap);
    box(s, x, cy, cw, ch, { fill: c.lt, line: false });
    text(s, c.t, x + 0.3, cy + 0.2, cw - 0.6, 0.42, { fontSize: 16, bold: true, color: c.c });
    text(s, c.body.map((b, m) => ({ text: b, options: { bullet: { code: "2022" }, breakLine: m < c.body.length - 1 } })), x + 0.3, cy + 0.78, cw - 0.6, ch - 0.98, { fontSize: 11.5, lineSpacingMultiple: 1.35 });
  });

  box(s, 0.6, 5.78, 12.1, 0.62, { fill: LTGREY, line: false });
  text(s, [
    { text: "可借鑑　", options: { fontSize: 11.5, bold: true, color: INK } },
    { text: "本專案亦應於分身介面明示「此為分身、非本人」，並標示語音為合成。此屬倫理揭露，與擬真度驗證同等重要。", options: { fontSize: 12, color: INK } },
  ], 0.95, 5.78, 11.4, 0.62, { valign: "middle" });

  text(s, "資料來源：avatar.andrewng.org 網站說明與服務條款（2026-10 擷取）。該站未公布擬真度評估方法或數據。", 0.6, 6.55, 12.1, 0.3, { fontSize: 9.5, color: MUTED });
}

// ============ 6-2 三階段未來規劃 ============
{
  const s = slide(3, "未來規劃：語言、視覺、聲音三階段推進", null, "ours");

  const stages = [
    {
      n: "第一階段", t: "語言（Language）", tag: "現階段", c: ACCENT, lt: LTBLUE,
      lead: "建立以文字對話為主的數位分身，驗證核心架構與評估協議。",
      rows: [
        ["蒸餾流程", "公開資料（演講、投影片、論文、逐字稿）＋ 教授自述"],
        ["測量工具", "BFI-44 保留；AVP 訪談腳本改寫為中文學術場景版；GSS 整份替換為自製「專業領域態度題庫」"],
        ["產出驗證", "DISC ＋ 課程框架任務 ＋ 女媧評分卡"],
      ],
    },
    {
      n: "第二階段", t: "VLM（視覺語言模型）", tag: "", c: ACCENT2, lt: LTAMBER,
      lead: "擴充至視覺模態 —— 讓分身能理解與產生投影片、圖表、板書等教學場景中的視覺內容。",
      rows: [],
    },
    {
      n: "第三階段", t: "聲音（語音模仿）", tag: "", c: MUTED, lt: LTGREY,
      lead: "重現本人的聲音與語調。技術與倫理複雜度均顯著較高，列為最後階段。",
      rows: [],
    },
  ];

  // 第一階段：大卡，含三列細節
  const s1 = stages[0];
  const y1 = 1.95, h1 = 2.75;
  box(s, 0.6, y1, 12.1, h1, { fill: s1.lt, line: false });
  s.addShape(p.ShapeType.rect, { x: 0.6, y: y1, w: 0.09, h: h1, fill: { color: s1.c }, line: { type: "none" } });
  text(s, s1.n, 0.95, y1 + 0.18, 1.5, 0.4, { fontSize: 13, bold: true, color: s1.c });
  text(s, s1.t, 2.4, y1 + 0.14, 4.0, 0.45, { fontSize: 19, bold: true, color: INK });
  pill(s, s1.tag, 6.35, y1 + 0.22, 0.95, 0.34, s1.c, "FFFFFF", 11);
  text(s, s1.lead, 0.95, y1 + 0.68, 11.4, 0.4, { fontSize: 13.5, color: INK });
  s1.rows.forEach((r, i) => {
    const ry = y1 + 1.2 + i * 0.5;
    box(s, 0.95, ry, 1.6, 0.4, { fill: "FFFFFF", line: false, r: 0.05 });
    text(s, r[0], 0.95, ry, 1.6, 0.4, { fontSize: 11.5, bold: true, color: s1.c, align: "center", valign: "middle" });
    text(s, r[1], 2.75, ry, 9.6, 0.4, { fontSize: 12, valign: "middle" });
  });

  // 第二、三階段：兩張並排小卡
  const cw2 = 5.95, cgap2 = 0.2, y2 = 4.95, h2 = 1.55;
  [stages[1], stages[2]].forEach((st, i) => {
    const x = 0.6 + i * (cw2 + cgap2);
    box(s, x, y2, cw2, h2, { fill: st.lt, line: false });
    s.addShape(p.ShapeType.rect, { x: x, y: y2, w: 0.09, h: h2, fill: { color: st.c }, line: { type: "none" } });
    text(s, st.n, x + 0.35, y2 + 0.16, 1.5, 0.34, { fontSize: 12, bold: true, color: st.c });
    text(s, st.t, x + 1.75, y2 + 0.12, 4.0, 0.4, { fontSize: 16, bold: true, color: INK });
    text(s, st.lead, x + 0.35, y2 + 0.62, cw2 - 0.6, 0.85, { fontSize: 12, lineSpacingMultiple: 1.3 });
  });
}
// ============ QA 分隔頁 ============
{
  const s = blank();
  text(s, "Q & A", 0.8, 3.0, 11.7, 1.2, { fontSize: 44, bold: true, align: "center", color: ACCENT });
}

// ============ QA 1 ============
{
  const s = slide(3, "Q & A");
  const qa = [
    {
      q: "驗證層跟既有方法差在哪？",
      a: "既有方法沒有這一層。個體差異以標準化量表量測，擬真度由真人盲測評定，不由模型自評。這是本專案相對既有做法的主要原創部分。",
    },
    {
      q: "為什麼不請本人作答再重測就好？",
      a: "原方法需作答數百題並於兩週後重測。除時間成本過高外，第二次作答時受測者已看過題目，獨立性已經喪失。改以情境任務觀察判斷方式，本人投入時間由 5 小時降至約 3 小時。",
    },
    {
      q: "多個分身的意見不同，要怎麼整合？",
      a: "不投票也不取平均。多視角架構的價值在於呈現不同框架對同一問題的解讀，取平均會使這個價值消失。輸出的是共識、分歧，以及各自的理由。",
    },
  ];
  drawQA(s, qa);
}

// ============ QA 2 ============
{
  const s = slide(3, "Q & A");
  const qa = [
    {
      q: "多個分身可以用不同的底層模型嗎？",
      a: "初期應固定同一個模型。實驗顯示底層模型會改變表達風格但不改變立場，若混用就無法分辨意見分歧來自人格資料還是模型差異。待量化模型間差異後再評估。",
    },
    {
      q: "90 分算好嗎？",
      a: "落在公開範例 89 至 97 的下緣。但該評分工具有 60 分是依模板撰寫即可取得，立場一致性維度在 15 份範例中全數滿分，不具鑑別力。90 分說明沒有漂移與捏造，不足以說明擬真度。",
    },
    {
      q: "這項技術可以用在哪些場景？",
      a: "落在態度層的場景可行：資深或退休員工的經驗留存、常見問題自動回覆、理念與判斷原則的傳承。不建議用於需要預測具體決策的場景。",
    },
  ];
  drawQA(s, qa);
}

// ============ 結尾 ============
{
  const s = blank();
  text(s, "謝謝大家", 0.8, 3.0, 11.7, 1.2, { fontSize: 44, bold: true, align: "center" });
}

p.writeFile({ fileName: "C:/Users/julia/new_friend_nycu/10月/報告/deck/progress-report.pptx" }).then(f => console.log("SAVED:", f, "content slides:", D.pageNo));
