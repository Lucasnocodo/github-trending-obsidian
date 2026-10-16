---
repo: onehumanbeing/esp32-iphone-agent
url: https://github.com/onehumanbeing/esp32-iphone-agent
owner: onehumanbeing
owner_type: User
language: C
license: MIT
description: "Let an AI model use a real iPhone with a $7 ESP32: AirPlay eyes, USB HID hands, any OpenAI-compatible vision model. No Mac, no developer account, no jailbreak."
homepage: ""
stars: 2599
stars_per_day: 650
forks: 342
open_issues: 4
created: 2026-10-11
pushed_at: 2026-10-16
first_seen: 2026-10-15
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.1.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-15
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-10-19"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 9534
readme_length: 9596
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-15"
star_history: "2026-10-15:2158,2026-10-16:2599"
tags:
  - github
  - "category/other"
  - "lang/c"
  - "topic/ai_agent"
  - "topic/airplay"
  - "topic/automation"
  - "topic/computer_use"
  - "topic/esp32"
aliases:
  - "esp32-iphone-agent"
  - "onehumanbeing/esp32-iphone-agent"
---

# esp32-iphone-agent

**2.2k** stars · **719** stars/天 · 建立 3 天前 · C · MIT

```dataviewjs
const me = dv.page("Repos/onehumanbeing--esp32-iphone-agent");
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

`個人專案` `v0.1.0`

`ai-agent` `airplay` `automation` `computer-use` `esp32` `esp32-s3` `iphone` `llm` `usb-hid`

> [!summary] 一句話摘要
> Let an AI model use a real iPhone with a $7 ESP32: AirPlay eyes, USB HID hands, any OpenAI-compatible vision model. No Mac, no developer account, no jailbreak.

## 專案簡介

Let an AI model use a real iPhone with a $7 ESP32: AirPlay eyes, USB HID hands, any OpenAI-compatible vision model. No Mac, no developer account, no jailbreak.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/onehumanbeing--esp32-iphone-agent");
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
> const me = dv.page("Repos/onehumanbeing--esp32-iphone-agent");
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
| Forks | 290 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-10-15 |
| 建立日期 | 2026-10-11 |
| Repo 大小 | 9.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/onehumanbeing/esp32-iphone-agent) |
| Topics | `ai-agent` `airplay` `automation` `computer-use` `esp32` `esp32-s3` `iphone` `llm` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 47
>     "Swift" : 41
>     "Python" : 6
>     "C++" : 3
>     "JavaScript" : 2
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@onehumanbeing](https://github.com/onehumanbeing) | 27 |

**最新版本**：v0.1.0 — v0.1.0 — AirPlay + ESP32 USB HID (computer in the middle) (2026-10-14)

> [!info]- Release Notes
> First tagged release: the original architecture, before the next big redesign.
> 
> - Eyes: the iPhone mirrors its screen over AirPlay to UxPlay on a Mac or Linux computer.
> - Hands: a ~$7 ESP32-S3 plugs into the iPhone's USB port as a mouse + keyboard (AssistiveTouch pointer), connected to the computer over Wi-Fi.
> - Brain: any OpenAI-compatible vision model (demo: Qwen3.8-Flash-Next on two DGX Sparks).
> - No Mac required, no developer account, no jailbreak.
> 
> Known limits: portrait apps only, ASCII-only typing, ~1.3 s per step.
> 
> Use this tag if you want the computer-in-the-middle setup after main moves on.

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-12 ~ 2026-10-15）
> **活躍天數** 3 天 · **最新 commit** docs: merge app screenshots into one row

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/onehumanbeing/esp32-iphone-agent/issues/4) | 为什么选择esp32 | 0 | 5 |
> | [#3](https://github.com/onehumanbeing/esp32-iphone-agent/issues/3) | Would a tested A2Agent vision endpoint fit the model setup d | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # ESP32 iPhone Agent
> 
> **Let an AI model use a real iPhone with a $7 ESP32. Just the phone and the board: no computer, no jailbreak.**
> 
> English · [简体中文](README.zh-CN.md)
> 
> Demo video and updates: [X @iamhenryyuan](https://x.com/iamhenryyuan) · [YouTube demo](https://www.youtube.com/watch?v=Ly4im-P4jYg)
> 
> [](https://github.com/onehumanbeing/esp32-iphone-agent/actions/workflows/ci.yml)
> [](LICENSE)
> 
> > **New: the computer is gone.** The board is now the AirPlay receiver and the mouse, and the agent runs in an iPhone
> > app on the same phone. The original version (a Mac/Linux computer running UxPlay and a Python server) is kept as
> > tag [`v0.1.0`](https://github.com/onehumanbeing/esp32-iphone-agent/tree/v0.1.0) and branch
> > [`legacy`](https://github.com/onehumanbeing/esp32-iphone-agent/tree/legacy). See [docs/legacy.md](docs/legacy.md).
> 
> *"Set an alarm for 8:00 AM that repeats every Monday and Tuesday, then save it"*: the agent leaves its own app,
> opens Clock, types the time into the wheel, ticks the days and saves. (Photo from v0.1.0; the task is the same.)
> 
> *Left: the real phone. Right: what the agent sees through the board's AirPlay mirror. The second shot is the pointer calibration.*
> 
> ## How it works
> 
> ```
> iPhone ──Screen Mirroring (Wi-Fi)──▶ ESP32-S3: AirPlay receiver ──BLE──▶ ESP32 Agent app (same iPhone)
>    ▲                                    own hotspot, H.264 passthrough        decode → vision model → action
>    └──────── USB HID mouse + keyboard ◀──────────── BLE commands ◀────────────────────┘
> ```
> 
> - **Eyes — AirPlay to the board.** The board opens its own Wi-Fi hotspot and appears in the phone's Screen Mirroring
>   list as *ESP32 Agent*. It keeps the H.264 stream (no decoding on the board) and forwards it to the app over BLE.
>   The phone keeps using cellular data for the model while it is on the board's hotspot.
> - **Hands — USB HID.** The board is a standard USB mouse and keyboard. With AssistiveTouch on, the mouse moves an
>   on-screen pointer, so a click is a tap and a drag is a swipe.
> - **Brain — the app.** The app decodes the stream, sends screenshots to any OpenAI-compatible vision model, and runs
>   a planner and an actor: tap, swipe, draw, type, press keys, go home, finish. It runs in the background while it
>   works; the Dynamic Island shows what it is doing.
> - **Closing the loop.** The pointer is relative, so the app tracks it and re-homes it in a corner; before precise taps
>   it wiggles the pointer, finds it on screen and corrects the miss. After each action it waits for the screen to
>   settle and tells the model whether anything changed. A lost board, hotspot or mirroring link pauses the run and
>   resumes it from the same step.
> - **Review.** Every run is kept on the phone: replay it step by step with the taps and swipes drawn on top.
> 
> ## Hardware
> 
> | Part | Notes |
> |---|---|
> | **ESP32-S3 board** | Tested with a [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/) (plain version, 8 MB PSRAM; not Sense, not Plus). About $7. Any ESP32-S3 with native USB on its USB-C port and PSRAM should work. |
> | **iPhone** | iOS 18 or later, with cellular data (the Wi-Fi is taken by the board's hotspot). USB-C models plug in directly; Lightning models need a Lightning to USB Camera Adapter. The phone powers the board. |
> | **Vision model** | Any OpenAI-compatible chat API that accepts images: a cloud API or your own server. |
> | **Mac with Xcode** | Only to flash the board and build the app once. Not needed at run time. |
> 
> ## Quick start
> 
> ### 1. Flash the board (plugged into the Mac)
> 
> Install [arduino-cli](https://arduino.github.io/arduino-cli/), the ESP32 core 3.3.x and NimBLE-Arduino 2.5.x, then:
> 
> ```bash
> arduino-cli lib install "NimBLE-Arduino@2.5.1"
> hardware/flash.sh            # optional: [serial port] [--debug]
> ```
> 
> Always build with `flash.sh`: it applies the BLE buffer sizes in `hardware/hid_bridge/nimble_cfg.h`.
> 
> ### 2. Install the app
> 
> ```bash
> cp ios/Config/Local.xcconfig.example ios/Config/Local.xcconfig   # set DEVELOPMENT_TEAM and IA_BUNDLE_ID
> open ios/IPhoneAgent.xcodeproj                                    # run the IPhoneAgent scheme on your iPhone
> ```
> 
> The project is generated with [XcodeGen](https://github.com/yonaskolb/XcodeGen) from `ios/project.yml`
> (`cd ios && xcodegen`). A free Apple ID can sign it (re-sign every 7 days). The one-tap hotspot join needs the
> Hotspot Configuration capability (a paid account); without it the app shows the hotspot password to join by hand.
> 
> ### 3. Set up (once, in the app)
> 
> Plug the board into the iPhone and open **ESP32 Agent**. Setup walks through four steps and checks each one itself:
> 
> 1. **Plug Me In** — pair the board over Bluetooth.
> 2. **Let Me See the Screen** — join the board's Wi-Fi, then Control Center → Screen Mirroring → *ESP32 Agent*.
> 3. **Let Me Use the Pointer** — turn on AssistiveTouch; the app calibrates the pointer by itself.
> 4. **Give Me a Brain** — enter your model endpoint and key (stored in the Keychain).
> 
> ### 4. Give it a task
> 
> Type a goal (for example *"Open Settings and go to Wi-Fi"*) and press **Start**. Stop it from the Dynamic Island,
> or come back to the app. Siri, Shortcuts, widgets and Control Center can run saved tasks.
> 
> ## Model and prompts
> 
> - Any OpenAI-compatible vision endpoint works (vLLM, SGLang, llama.cpp, Ollama, cloud APIs). The app lists the
>   endpoint's models and picks one; you can override it, and set a separate planner and actor model.
> - The prompts are plain text in [`prompts/`](prompts/) and bundled with the app: edit them, rebuild, done.
> - The project was developed with [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)
>   served on two DGX Sparks ([TensorFold](https://github.com/MiaAI-Lab/Qwen3.8-Flash-Dual-DGX-Sparks-TensorFold)).
> 
> ## Project layout
> 
> ```
> ios/        the app (SwiftUI): BLE link, H.264 decode, agent, setup, replay, Live Activity, widgets; tests
> prompts/    planner / actor prompts used by the app
> hardware/   ESP32-S3 firmware (Arduino): BLE GATT, hotspot, AirPlay receiver, USB HID; flash script,
>             host tests, Mac BLE test harness (hardware/tools)
> docs/       BLE protocol, legacy version notes
> server/     legacy v0.1.0 computer-side server; not used by this version (see server/README.md)
> ```
> 
> Debugging without the phone app: `hardware/tools/board_test.py` plays the app over BLE from a Mac
> ([hardware/tools/README.md](hardware/tools/README.md)). Board ↔ app protocol: [docs/ble-protocol.md](docs/ble-protocol.md).
> 
> ## Roadmap
> 
> - [x] Drop the computer: the board mirrors and clicks, the app on the phone thinks
> - [ ] Landscape apps (coordinates and calibration assume portrait)
> - [ ] Non-ASCII text input (e.g. Chinese through the iOS pinyin keyboard)
> - [ ] Faster steps: several actions per model call, pointer checks only when needed
> 
> ## Limitations
> 
> - BLE carries about 300-500 kbps, so the screen is mirrored small (480×1040, ≤5 fps); each step takes a few seconds,
>   most of it the model.
> - iOS does not mirror some screens (passcode entry, Apple Pay, DRM video); the agent cannot see them. Mirroring stops
>   when the phone locks.
> - While the agent runs, the phone's Wi-Fi is the board's hotspot (no internet over it); the model is reached over
>   cellular data.
> - The app leaves itself with a private iOS API (`suspend`); fine for a self-built app, to be replaced before the App Store.
> - Keyboard input is ASCII only. Landscape apps are not supported yet.
> 
> ## Responsible use
> 
> Only automate devices and accounts you own or are allowed to use, and respect the terms of the apps involved. The
> agent acts with your hands: watch it, and keep the stop button within reach.
> 
> ## Contributing
> 
> Issues and pull requests are welcome; see [CONTRIBUTING.md](CONTRIBUTING.md). Security reports: [SECURITY.md](SECURITY.md).
> 
> ## Related projects
> 
> | Project | Approach | Difference from this project |
> |---|---|---|
> | [VersaiOS](https://github.com/zhaodashuaibi/VersaiOS) | UxPlay mirroring + ESP32-S3 Bluetoot

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/onehumanbeing/esp32-iphone-agent)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "onehumanbeing--esp32-iphone-agent"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "onehumanbeing--esp32-iphone-agent" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "onehumanbeing--esp32-iphone-agent"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/onehumanbeing--esp32-iphone-agent");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "onehumanbeing--esp32-iphone-agent" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "onehumanbeing" AND file.name != "onehumanbeing--esp32-iphone-agent"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/onehumanbeing--esp32-iphone-agent");
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
> const me = dv.page("Repos/onehumanbeing--esp32-iphone-agent");
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
> const me = dv.page("Repos/onehumanbeing--esp32-iphone-agent");
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
> const me = dv.page("Repos/onehumanbeing--esp32-iphone-agent");
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
> const me = dv.page("Repos/onehumanbeing--esp32-iphone-agent");
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

> **2026-10-15** — 首次收錄
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

- [[2026-10-16|2026-10-16]] — 再次上榜，2.6k stars
- [[2026-10-15|2026-10-15]] — 首次收錄，2.2k stars
