---
repo: LaoFeng-mouse/flyingmouse-format
url: https://github.com/LaoFeng-mouse/flyingmouse-format
owner: LaoFeng-mouse
owner_type: User
language: JavaScript
license: MIT
description: "飞鼠格式 FlyingMouse Format - Windows 万能文件格式转换工具（离线可用，内置 FFmpeg/LibreOffice/Poppler/Tesseract）。图片/文档/表格/PPT/PDF/音视频/WPS 格式互转 + OCR + 批量转换"
homepage: ""
stars: 1329
stars_per_day: 222
forks: 109
open_issues: 14
created: 2026-08-06
pushed_at: 2026-08-12
first_seen: 2026-08-13
week: "2026-W33"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.4.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-13
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-16"
contributor_count: 1
engagement: "low"
issue_close_rate: 7
repo_size_kb: 4001
readme_length: 9892
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-13"
star_history: "2026-08-13:1329"
tags:
  - github
  - "category/other"
  - "lang/javascript"
  - "topic/desktop_app"
  - "topic/electron"
  - "topic/ffmpeg"
  - "topic/file_converter"
  - "topic/format_converter"
aliases:
  - "flyingmouse-format"
  - "LaoFeng-mouse/flyingmouse-format"
---

# flyingmouse-format

**1.3k** stars · **222** stars/天 · 建立 6 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/LaoFeng-mouse--flyingmouse-format");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!warning] AI 摘要產生失敗
> 此筆記的中文翻譯和分析未能成功產生。以下為原始資料，你可以手動補充。

`個人專案` `v0.4.1`

`desktop-app` `electron` `ffmpeg` `file-converter` `format-converter` `libreoffice` `ocr` `pdf` `windows` `wps`

> [!summary] 一句話摘要
> 飞鼠格式 FlyingMouse Format - Windows 万能文件格式转换工具（离线可用，内置 FFmpeg/LibreOffice/Poppler/Tesseract）。图片/文档/表格/PPT/PDF/音视频/WPS 格式互转 + OCR + 批量转换

## 專案簡介

飞鼠格式 FlyingMouse Format - Windows 万能文件格式转换工具（离线可用，内置 FFmpeg/LibreOffice/Poppler/Tesseract）。图片/文档/表格/PPT/PDF/音视频/WPS 格式互转 + OCR + 批量转换

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/LaoFeng-mouse--flyingmouse-format");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/LaoFeng-mouse--flyingmouse-format");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 109 |
| Open Issues | 14 |
| Issue 解決率 | 7% (1 closed) |
| 最後推送 | 2026-08-12 |
| 建立日期 | 2026-08-06 |
| Repo 大小 | 3.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/LaoFeng-mouse/flyingmouse-format) |
| Topics | `desktop-app` `electron` `ffmpeg` `file-converter` `format-converter` `libreoffice` `ocr` `pdf` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 96
>     "CSS" : 2
>     "HTML" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@LaoFeng-mouse](https://github.com/LaoFeng-mouse) | 174 |

**最新版本**：v0.4.1 — FlyingMouse Format v0.4.1 (2026-08-12)

> [!info]- Release Notes
> ## FlyingMouse Format v0.4.1
> 
> ### 新增
> 
> - **QQ 音乐 mflac/mgg 自动降档转换**：遇到母带档（AIM 等）无在线密钥权限的文件，自动改用同一首歌你账号有权限的音质档位（FLAC 无损 → OGG → MP3 320k）完成转换，放上去就能转成 MP3
> - **PDF 页数不设上限**：任意页数的 PDF 都按原文件 1:1 转换（长文档加载/转换时间较长属正常，不再限制 500/1000 页）
> - 相机 RAW 原片转换（CR2/NEF/ARW/DNG 等 18 种，Windows 实验性）
> 
> ### 修复
> 
> - macOS 构建机偶发的 DMG 卸载报错不再导致发布失败（hdiutil 卸载容错）
> - 商店 APPX 图标换回鼠鼠（NSIS 与商店包两套图标均已核对）
> - WPS 生成的 docx 转 PDF 前先 roundtrip 修复
> - csv/tsv→xlsx 不再依赖 LibreOffice
> - win7-package-lock.json 修复 CI 构建
> 
> ## 下载指南（按你的系统选，别下错）
> 
> | 你的系统 | 下载这个文件 |
> |---|---|
> | **Windows 10 / 11（64 位，绝大多数人）** | `FlyingMouse-Format-Setup-0.4.1-x64.exe` |
> | Windows 7 SP1（64 位，老旧系统） | `FlyingMouse.Format-Setup-0.4.1-win7-x64.exe` |
> | **macOS（Apple Silicon：M1/M2/M3/M4，2020 年及以后的 Mac）** | `FlyingMouse.Format-Setup-0.4.1-mac-arm64.dmg` |
> | **macOS（Intel：2019 年及更早的 Mac）** | `FlyingMouse.Format-Setup-0.4.1-mac-x64.dmg` |
> 
> > 判断 Mac 芯片：点左上角苹果菜单 →「关于本机」→「芯片」栏——「Apple M1/M2/M3/M4」选 arm64；「Intel Core…」选 x64。选错了也没关系，Apple Silicon 也能运行 x64 包（Rosetta 转译）。
> >
> > ⚠️ 提示：
> > - 默认选第一行 `x64.exe`（Windows 10/11 64 位）。只有确定是 Windows 7 才选第二行。
> > - `latest.yml` 和 `*.blockmap` 是自动更新内部文件，**不要手动下载**。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-12 ~ 2026-08-12）
> **活躍天數** 1 天 · **最新 commit** docs: HANDOFF 更新 v0.4.1 发布完成状态 + release-notes-041

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/LaoFeng-mouse/flyingmouse-format/issues/19) | 软件缩放问题 | 1 | 0 |
> | [#18](https://github.com/LaoFeng-mouse/flyingmouse-format/issues/18) | 每次点转换都会提示链接打印机 | 0 | 0 |
> | [#17](https://github.com/LaoFeng-mouse/flyingmouse-format/issues/17) | mac M1 点开软件后提示“更新检查失败”在页面最上面很占地方 | 0 | 0 |
> | [#16](https://github.com/LaoFeng-mouse/flyingmouse-format/issues/16) | 建议发布MCP功能 | 0 | 0 |
> | [#15](https://github.com/LaoFeng-mouse/flyingmouse-format/issues/15) | m 芯片mac 检查更新报错 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # FlyingMouse Format / 飞鼠格式
> 
> > A mouse-themed, offline Windows file converter. / 一款鼠鼠主题、可离线使用的 Windows 文件格式转换工具。
> 
> [](https://github.com/LaoFeng-mouse/flyingmouse-format/releases/latest)
> 
> [下载最新版 / Download](https://github.com/LaoFeng-mouse/flyingmouse-format/releases/latest) · [问题反馈 / Issues](https://github.com/LaoFeng-mouse/flyingmouse-format/issues)
> 
> 
> ### Quick start
> 
> 1. Download the v0.3.5 build for your system from [Releases](https://github.com/LaoFeng-mouse/flyingmouse-format/releases/latest).
> 2. Install and launch FlyingMouse Format.
> 3. Drop in files, choose a target, and convert.
> 4. Choose a save location. The app remembers both the target preference and save folder.
> 
> > The source repository excludes the large FFmpeg, LibreOffice, Poppler, and Tesseract bundles. Regular users should install the Release build. Developers need to provide the corresponding resources under `bin/` for the complete conversion feature set.
> 
> 
> ### Highlights
> 
> - Original mouse UI with animated state changes for upload, detection, batch work, OCR, success, and errors.
> - Fully local conversion with bundled FFmpeg, LibreOffice, Poppler, Tesseract, and an AVS3 decoder.
> - Converts images, text, Word/WPS, Excel/WPS, PPT/WPS, PDF, audio, video, and ZIP files.
> - Decrypts and converts standard NCM plus Audio Vivid (AV3A) NCM from the NetEase Cloud Music client associated with `music.163.com`.
> - Decrypts mflac/mgg from the official QQ Music client (newer musicex variants require a QQ Music login cookie for online key exchange; when the original quality tier is unauthorized, the app automatically downloads an available tier of the same song).
> - Remembers the chosen target separately for each source extension. Changing it replaces that extension's default.
> - Remembers the last save directory for the next save dialog.
> - Chinese and English UI. The first launch follows the system language; a manual choice is remembered.
> - Batch conversion with per-file progress, results, error details, individual save, and Save All.
> - Higher-quality text conversion: structural HTML/Office Markdown plus standards-compliant quoted and multiline CSV parsing.
> - PDF → Excel smart table extraction for digital text and scanned pages, including multiple tables, continued pages, merged cells, confidence notes, and Raw fallback.
> - PDF → Word (editable content extraction): digital PDFs are converted to editable DOCX with text and simple tables; scanned PDFs fall back to OCR. Layout is not restored — images, fonts, colors, headers/footers, and complex page design are not preserved.
> - E-books: txt/md/html → EPUB (generated locally); EPUB → TXT/Markdown; MOBI → EPUB/TXT/Markdown (MOBI parsing is experimental; complex layouts may be incomplete).
> - Image-to-PDF ordering: when merging multiple images into a PDF, reorder items with up/down controls before converting; PDF page order follows the queue.
> - HEIC/HEIF images convert to JPG/PNG/WebP and more (built-in ffmpeg decoding).
> - Camera RAW files (CR2/CR3/NEF/ARW/DNG, etc.) convert to JPG/PNG/WebP/TIFF and more (built-in dcraw decoding, Windows build, experimental).
> - Resource safeguards: 50 MP / 16384 px per image, 100 MP image-to-PDF decode budget, 2 GB batches, 500 PDF pages, and 100 OCR pages.
> 
> > NCM scope: compatibility is guaranteed only for files downloaded by the NetEase Cloud Music client associated with `music.163.com`. Files from other sites may use a different internal format despite sharing the `.ncm` extension.
> 
> 
> ## 中文
> 
> 
> ### 主要功能
> 
> - 鼠鼠原版界面：鼠鼠会跟随上传、识别、批量、OCR、转换成功或失败切换状态。
> - 本地离线转换：内置 FFmpeg、LibreOffice、Poppler、Tesseract 和 AVS3 解码器。
> - 支持图片、文本、Word/WPS、Excel/WPS、PPT/WPS、PDF、音频、视频和 ZIP。
> - NCM 解密与转码：支持来自 `music.163.com` 对应网易云音乐客户端的常规 NCM，以及 Audio Vivid（AV3A）NCM。
> - mflac/mgg 解密：支持 QQ 音乐官方客户端下载的 mflac/mgg（新版 musicex 需 QQ 音乐登录凭据在线换密钥；原档无权限时自动降档下载同一首歌的可用音质档位）。
> - 操作记忆：按“源文件格式”分别记住上次选择的目标格式；重新修改后，新选择会成为该源格式的默认值。
> - 路径记忆：记住上次保存目录，下次保存时自动从该目录开始。
> - 中文/English 界面：首次启动跟随系统语言，手动选择后会记住设置。
> - 批量转换：显示逐文件进度、结果和失败原因，并可单独保存或保存全部。
> - 转换质量：HTML / Office 转 Markdown 保留标题、列表和代码块；CSV 支持 BOM、转义引号和字段内换行。
> - PDF → Excel（智能表格提取）：支持电子文字坐标、扫描页 OCR、有框/无框表格、多表、跨页续接、合并单元格、低置信度批注与 Raw 回退。
> - PDF → Word（可编辑内容提取）：电子版 PDF 提取文字与简单表格生成可编辑 DOCX，扫描版自动 OCR 回退。注意：不保留原 PDF 的图片、字体、颜色、页眉页脚与复杂版式，属内容提取而非版式还原。
> - 电子书：txt/md/html → EPUB（纯本地生成）；EPUB → TXT/Markdown；MOBI → EPUB/TXT/Markdown（MOBI 解析为实验性，复杂版式可能不完整）。
> - 图片合并 PDF 支持调整顺序：多张图片转 PDF 前可在队列中上移/下移，PDF 页序跟随队列顺序。
> - HEIC/HEIF 图片可转换为 JPG/PNG/WebP 等（内置 ffmpeg 解码）。
> - 相机 RAW 原片（CR2/CR3/NEF/ARW/DNG 等）可转换为 JPG/PNG/WebP/TIFF 等（内置 dcraw 解码，Windows 版，实验性）。
> - 资源保护：单图 50MP / 16384px、图片合并 PDF 总计 100MP、批量 2GB、PDF 不限页数（1:1 转换，长文档加载较慢）、OCR 不限页数。
> 
> > NCM 说明：仅保证支持 `music.163.com` 对应客户端下载的音乐文件。其他网站或来源虽然扩展名也可能是 `.ncm`，但内部格式不同，不属于本项目的兼容范围。
> 
> 
> ### 快速开始
> 
> 1. 在 [Releases](https://github.com/LaoFeng-mouse/flyingmouse-format/releases/latest) 下载 v0.3.5 对应系统的安装包。
> 2. 安装并启动 FlyingMouse Format。
> 3. 拖入文件，选择目标格式并开始转换。
> 4. 选择保存位置；软件会记住目标格式与保存目录。
> 
> 从源码运行：
> 
> > 源码仓库不包含体积较大的 FFmpeg、LibreOffice、Poppler 和 Tesseract 资源；普通用户请直接下载 Release 安装包。开发者从源码运行完整转换功能前，需要自行准备 `bin/` 下的引擎资源。
> 
> ```powershell
> npm install
> npm run desktop
> ```
> 
> 运行测试与打包：
> 
> ```powershell
> npm test
> npm run dist
> ```
> 
> 
> ### Windows 版本选择
> 
> - **Windows 10 / 11 x64（推荐）**：下载标准资产 `FlyingMouse.Format-Setup-0.3.5-x64.exe`。它使用 Electron 43、Sharp 0.35 和 PDF.js 6 运行时。
> - **Windows 7 SP1 x64（兼容版）**：下载 `FlyingMouse.Format-Setup-0.3.5-win7-x64.exe`。它使用同一源码和鼠鼠 UI，但在独立环境固定 Electron 22.3.27、Sharp 0.32.6 与 PDF.js 2.16.105。
> 
> Windows 7 兼容版是 Legacy 构建，不会降低标准版依赖。其 Electron 22 已停止上游安全维护，并包含无法在 Windows 7 上直接升级的已知依赖风险；PDF.js 动态代码执行已通过 `isEvalSupported: false` 缓解，但仍只建议离线处理可信文件。v0.3.5 通过 Windows、macOS arm64 和 macOS x64 自动化门禁以及 3 个真实 NCM/AV3A 样本回归；真实 Windows 7 SP1 x64 设备仍待验收。Windows 安装包均未签名，SmartScreen 可能提示。
> 
> 
> ### macOS 版本选择
> 
> - **Apple Silicon（M1 及更新）**：下载 `FlyingMouse.Format-Setup-0.3.5-mac-arm64.dmg`。
> - **Intel Mac**：下载 `FlyingMouse.Format-Setup-0.3.5-mac-x64.dmg`。
> 
> 首批 macOS 包支持 macOS 11 及更新版本，未签名且未公证，可能触发 Gatekeeper。标准 NCM 可用；Audio Vivid（AV3A）NCM 依赖 Windows 专用解码器，不在 macOS 支持范围内。两个架构已在原生 GitHub runner 完成固定引擎、完整转换、包结构和 12 秒启动冒烟；真实 Mac 设备仍待验收。
> 
> 完整构建只需：
> 
> ```powershell
> npm run dist:win7
> ```
> 
> Win7 staging 使用专用 `win7-package-lock.json` 和 `npm ci` 重建；推荐使用 Node.js 22 LTS（构建脚本接受 18–22，其他主版本会在改动 staging 前拒绝）。构建脚本会绑定子进程到当前 Node、以 Unicode 安全方式复制源码、锁定 staging manifest/lockfile，并校验本地 builder 与打包资源没有越过各自允许的根目录或经过 junction/符号链接。
> 
> 仅需检查 staging 时可运行 `node scripts/build-win7.js --prepare-only`；它不会打包。完整构建会重新准备 staging。
> 
> 
> ## English
> 
> 
> ### Choose a Windows build
> 
> - **Windows 10 / 11 x64 (recommended):** use `FlyingMouse.Format-Setup-0.3.5-x64.exe` with Electron 43, Sharp 0.35, and PDF.js 6.
> - **Windows 7 SP1 x64 (compatibility build):** use `FlyingMouse.Format-Setup-0.3.5-win7-x64.exe`, derived from the same source and mouse UI with Electron 22.3.27, Sharp 0.32.6, and PDF.js 2.16.105 pinned in isolation.
> 
> The Windows 7 package is a Legacy build and does not downgrade the standard build. Electron 22 no longer receives upstream security maintenance, and other known legacy dependency risks cannot be upgraded without dropping Windows 7. PDF.js dynamic evaluation is disabled as a mitigation, but this build should remain offline and process trusted files only. v0.3.5 passed Windows, native macOS arm64, and native macOS x64 automation gates plus three real NCM/AV3A regressions; acceptance on a physical Windows 7 SP1 x64 system is still pending. Both Windows installers are unsigned and may trigger SmartScreen.
> 
> 
> ### Choose a macOS build
> 
> - **Apple Silicon (M1 or newer):** use `FlyingMouse.Format-Setup-0.3.5-mac-arm64.dmg`.
> - **Intel Mac:** use `FlyingMouse.Format-Setup-0.3.5-mac-x64.dmg`.
> 
> The first macOS packages support macOS 11 or newer and are unsigned and unnotarized, so Gatekeeper may warn. Standard NCM is supported; Audio Vivid (AV3A) NCM depends on a Windows-only decoder and is unavailable on macOS. Both architectures passed pinned-engine, full-conversion, bundle, and 12-second launch gates on native GitHub runners; physical Mac acceptance remains pending.
> 
> The complete build requires only:
> 
> ```powersh

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/LaoFeng-mouse/flyingmouse-format)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "LaoFeng-mouse--flyingmouse-format"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "LaoFeng-mouse--flyingmouse-format" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W33" AND file.name != "LaoFeng-mouse--flyingmouse-format"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/LaoFeng-mouse--flyingmouse-format");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "LaoFeng-mouse--flyingmouse-format" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "LaoFeng-mouse" AND file.name != "LaoFeng-mouse--flyingmouse-format"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/LaoFeng-mouse--flyingmouse-format");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/LaoFeng-mouse--flyingmouse-format");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/LaoFeng-mouse--flyingmouse-format");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/LaoFeng-mouse--flyingmouse-format");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/LaoFeng-mouse--flyingmouse-format");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

> [!question]- 待研究的問題
> _記下看完後還沒有答案的問題，未來回來補充_
> 
> - [ ] 

### 採用判斷

> [!tip]- 什麼時候該用 / 不該用
> **該用的情況**：
> - 
> 
> **不該用的情況**：
> - 

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-08-13** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-08-13|2026-08-13]] — 首次收錄，1.3k stars
