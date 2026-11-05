// 共用版型：淺底、頂部章節進度條、固定標題位置、頁尾。依 presentation-style skill。
const pptxgen = require("C:/Users/julia/new_friend_nycu/slides/node_modules/pptxgenjs");

const BG = "FFFFFF";
const INK = "1F2A37";      // 內文深藍灰，不用純黑
const MUTED = "8A94A6";    // 淡化
const ACCENT = "1D4ED8";   // 主色：藍
const ACCENT2 = "D97706";  // 次色：琥珀
const LTBLUE = "EAF1FE";
const LTAMBER = "FEF3E2";
const LTGREY = "F3F4F6";
const LINE = "CBD5E1";
const FONT = "Microsoft JhengHei";
const W = 13.333, H = 7.5;

function makeDeck(chapters, footerText) {
  const p = new pptxgen();
  p.defineLayout({ name: "W", width: W, height: H });
  p.layout = "W";
  let pageNo = 0;

  function bar(slide, active) {
    const y = 0.28, h = 0.4, gap = 0.1;
    const totalW = W - 1.2;
    const w = (totalW - gap * (chapters.length - 1)) / chapters.length;
    chapters.forEach((c, i) => {
      const x = 0.6 + i * (w + gap);
      const on = i === active, passed = i < active;
      slide.addShape(p.ShapeType.roundRect, {
        x, y, w, h, rectRadius: 0.06,
        fill: { color: on ? ACCENT : passed ? "E5E7EB" : LTGREY }, line: { type: "none" },
      });
      slide.addText(c, {
        x, y, w, h, align: "center", valign: "middle", fontFace: FONT, fontSize: 10.5,
        bold: on, color: on ? "FFFFFF" : passed ? "6B7280" : "B0B7C3",
      });
    });
  }
  // 只留大標題；副標一律不顯示（保留參數相容，傳入即忽略）
  function title(slide, t) {
    slide.addText(t, { x: 0.6, y: 1.0, w: 9.6, h: 0.75, align: "left", valign: "middle", fontFace: FONT, fontSize: 26, bold: true, color: INK });
  }
  // 頁尾只留頁碼，不顯示專案名稱
  function footer(slide, n) {
    slide.addText(String(n), { x: 12.4, y: 7.02, w: 0.6, h: 0.3, fontFace: FONT, fontSize: 9, color: MUTED, align: "right" });
  }
  // 來源標記：標示本頁內容是文獻既有、或本專案產出
  // kind: "lit" 文獻既有 ｜ "ours" 本專案產出 ｜ "mixed" 文獻資料 + 本專案分析
  function sourceBadge(slide, kind) {
    const map = {
      lit: { t: "文獻既有", fill: "EEF1F5", fg: "6B7280" },
      ours: { t: "本專案產出", fill: "DCFCE7", fg: "15803D" },
      mixed: { t: "文獻資料 · 本專案分析", fill: "FEF3E2", fg: "B45309" },
    };
    const m = map[kind];
    if (!m) return;
    const w = kind === "mixed" ? 2.1 : 1.25, x = W - 0.6 - w, y = 1.06;
    slide.addShape(p.ShapeType.roundRect, {
      x, y, w, h: 0.34, rectRadius: 0.17, fill: { color: m.fill }, line: { type: "none" },
    });
    slide.addText(m.t, {
      x, y, w, h: 0.34, align: "center", valign: "middle",
      fontFace: FONT, fontSize: 10, bold: true, color: m.fg,
    });
  }
  function slide(active, t, sub, src) {
    const s = p.addSlide();
    s.background = { color: BG };
    bar(s, active);
    footer(s, ++pageNo);
    if (t) title(s, t, sub);
    if (src) sourceBadge(s, src);
    return s;
  }
  function blank() {
    const s = p.addSlide();
    s.background = { color: BG };
    return s;
  }
  // 聚光燈分隔頁：在同一組並列項目中，只點亮目前要講的那一項，其餘淡化
  // items = [{ label, note }]；active = 要點亮的索引
  function spotlight(chapterIdx, items, active, opts = {}) {
    const s = p.addSlide();
    s.background = { color: BG };
    bar(s, chapterIdx);
    footer(s, ++pageNo);
    const accent = opts.color || ACCENT;
    const n = items.length;
    const cw = 4.4, gap = 0.5;
    const totalW = cw * n + gap * (n - 1);
    const x0 = (W - totalW) / 2;
    const y = 2.55, h = 2.1;
    items.forEach((it, i) => {
      const on = i === active;
      const x = x0 + i * (cw + gap);
      slideCard(s, x, y, cw, h, on, accent, it, i, n);
    });
    if (opts.caption) {
      s.addText(opts.caption, {
        x: 0.6, y: 5.35, w: 12.1, h: 0.5, align: "center", valign: "middle",
        fontFace: FONT, fontSize: 14, color: INK,
      });
    }
    return s;
  }
  function slideCard(s, x, y, w, h, on, accent, it, i, n) {
    s.addShape(p.ShapeType.roundRect, {
      x, y, w, h, rectRadius: 0.1,
      fill: { color: on ? accent : "F7F8FA" },
      line: on ? { type: "none" } : { color: "E5E7EB", width: 1.2 },
    });
    s.addText(String(i + 1).padStart(2, "0"), {
      x: x + 0.28, y: y + 0.22, w: 1.0, h: 0.38, align: "left", valign: "middle",
      fontFace: FONT, fontSize: 12, bold: true, color: on ? "FFFFFF" : "C4CAD4",
    });
    s.addText(it.label, {
      x: x + 0.28, y: y + 0.68, w: w - 0.56, h: 0.6, align: "left", valign: "middle",
      fontFace: FONT, fontSize: on ? 22 : 18, bold: true, color: on ? "FFFFFF" : "B0B7C3",
    });
    if (it.note) {
      s.addText(it.note, {
        x: x + 0.28, y: y + 1.32, w: w - 0.56, h: 0.6, align: "left", valign: "top",
        fontFace: FONT, fontSize: 11.5, color: on ? "DCE6FB" : "C4CAD4", lineSpacingMultiple: 1.25,
      });
    }
  }
  // 常用小元件
  function box(s, x, y, w, h, opts = {}) {
    s.addShape(p.ShapeType.roundRect, {
      x, y, w, h, rectRadius: opts.r ?? 0.08,
      fill: { color: opts.fill ?? "FFFFFF" },
      line: opts.line === false ? { type: "none" } : Object.assign({ color: opts.line ?? LINE, width: opts.lw ?? 1.2 }, opts.dash ? { dashType: opts.dash } : {}),
    });
  }
  function text(s, t, x, y, w, h, opts = {}) {
    s.addText(t, Object.assign({ x, y, w, h, fontFace: FONT, fontSize: 13, color: INK, align: "left", valign: "top", lineSpacingMultiple: 1.2 }, opts));
  }
  function arrow(s, x, y, w, h, color = INK) {
    s.addShape(p.ShapeType.rightArrow, { x, y, w, h, fill: { color }, line: { type: "none" } });
  }
  function pill(s, t, x, y, w, h, color, textColor = "FFFFFF", fontSize = 11) {
    s.addShape(p.ShapeType.roundRect, { x, y, w, h, rectRadius: h / 2, fill: { color }, line: { type: "none" } });
    s.addText(t, { x, y, w, h, align: "center", valign: "middle", fontFace: FONT, fontSize, bold: true, color: textColor });
  }
  return { p, slide, blank, spotlight, box, text, arrow, pill, get pageNo() { return pageNo; } };
}

module.exports = { makeDeck, BG, INK, MUTED, ACCENT, ACCENT2, LTBLUE, LTAMBER, LTGREY, LINE, FONT, W, H };
