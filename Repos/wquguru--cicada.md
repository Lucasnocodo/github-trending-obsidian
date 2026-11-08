---
repo: wquguru/cicada
url: https://github.com/wquguru/cicada
owner: wquguru
owner_type: User
language: Swift
license: Apache-2.0
description: "知了 Cicada · 任何会议和直播的实时字幕、同声传译、AI 会议纪要，Mac、Windows、Linux、Android 免费开源。Live subtitles, interpreting and meeting notes for any call or stream, on Mac, Windows, Linux and Android."
homepage: "https://cicada.indaloop.app"
stars: 1688
stars_per_day: 241
forks: 300
open_issues: 2
created: 2026-11-01
pushed_at: 2026-11-08
first_seen: 2026-11-08
week: "2026-W46"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v1.5.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-08
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-11"
contributor_count: 5
engagement: "medium"
issue_close_rate: 85
repo_size_kb: 39952
readme_length: 6617
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-08"
star_history: "2026-11-08:1688"
tags:
  - github
  - "category/other"
  - "lang/swift"
  - "topic/android"
  - "topic/linux"
  - "topic/live_captions"
  - "topic/macos"
  - "topic/meeting_notes"
aliases:
  - "cicada"
  - "wquguru/cicada"
---

# cicada

**1.7k** stars · **241** stars/天 · 建立 7 天前 · Swift · Apache-2.0

```dataviewjs
const me = dv.page("Repos/wquguru--cicada");
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

`v1.5.1`

`android` `linux` `live-captions` `macos` `meeting-notes` `menubar-app` `simultaneous-interpretation` `speech-recognition` `subtitles` `swift` `swiftui` `translation` `windows`

> [!summary] 一句話摘要
> 知了 Cicada · 任何会议和直播的实时字幕、同声传译、AI 会议纪要，Mac、Windows、Linux、Android 免费开源。Live subtitles, interpreting and meeting notes for any call or stream, on Mac, Windows, Linux and Android.

## 專案簡介

知了 Cicada · 任何会议和直播的实时字幕、同声传译、AI 会议纪要，Mac、Windows、Linux、Android 免费开源。Live subtitles, interpreting and meeting notes for any call or stream, on Mac, Windows, Linux and Android.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/wquguru--cicada");
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
> const me = dv.page("Repos/wquguru--cicada");
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
| Forks | 300 |
| Open Issues | 2 |
| Issue 解決率 | 85% (11 closed) |
| 最後推送 | 2026-11-08 |
| 建立日期 | 2026-11-01 |
| 官方網站 | [Link](https://cicada.indaloop.app) |
| Repo 大小 | 39.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/wquguru/cicada) |
| Topics | `android` `linux` `live-captions` `macos` `meeting-notes` `menubar-app` `simultaneous-interpretation` `speech-recognition` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 34
>     "Python" : 23
>     "C#" : 20
>     "Kotlin" : 18
>     "Shell" : 2
>     "HTML" : 1
>     "CSS" : 1
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@wquguru](https://github.com/wquguru) | 592 |
> | [@eltociear](https://github.com/eltociear) | 1 |
> | [@philo-veritas](https://github.com/philo-veritas) | 1 |
> | [@lmjmt](https://github.com/lmjmt) | 1 |
> | [@longshines](https://github.com/longshines) | 1 |

**最新版本**：v1.5.1 — 知了 Cicada 1.5.1 (2026-11-07)

> [!info]- Release Notes
> ### Mac
> 
> #### New
> 
> - Misheard names and terms are fixed in subtitles and live notes as the meeting goes, with new names asked about once ([bf9a680](https://github.com/wquguru/cicada/commit/bf9a680258c0148f9c8f1958b84018512a5826da))
> - Settings › Word list keeps the spellings you use, and takes many at once by pasting ([d087810](https://github.com/wquguru/cicada/commit/d0878107672ed193dccd869de31eec4321a292e0))
> - Fix a misheard word yourself from the meeting record, settle waiting fixes after the meeting, and undo any fix ([b6f1f8c](https://github.com/wquguru/cicada/commit/b6f1f8ccd92e5dd164706a0ee3e7da8ac4f322ea))
> - Settings › Word list edits in place: change a spelling, add or remove a misheard form, undo a delete, see counts before pasting ([d7db66f](https://github.com/wquguru/cicada/commit/d7db66fdd81cfe5b14fd82a036a413ae21702cd1))
> 
> #### Fixed
> 
> - Early in a meeting, the transcript no longer runs several people's lines into one paragraph ([00c57e3](https://github.com/wquguru/cicada/commit/00c57e34346b0a22a845822534e49144b3fc7e7d))
> - Saying yes to a fixed name fixes the rest of the meeting heard the same way at once, not only with the next line ([46dae9f](https://github.com/wquguru/cicada/commit/46dae9fa7cfc77a703a33d162e7ad54b34b96852))
> - In English, Japanese and Korean, a to-do's owner shows in the UI language (Them, You, Speaker 2), not in Chinese ([5d20f2e](https://github.com/wquguru/cicada/commit/5d20f2e1a7617ebe680be59c31a0679c3839ecbf))
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-08 ~ 2026-11-08）
> **活躍天數** 1 天 · **最新 commit** revert(site): undo the North America review route; it didn't help mainland China

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#14](https://github.com/wquguru/cicada/issues/14) | 识别准确度太低了 | 0 | 6 |
> | [#11](https://github.com/wquguru/cicada/issues/11) | 希望支持 iOS（iPhone / iPad） | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> 知了 · Cicada
> 
>   任何会议、任何直播，没有语言障碍。
>   听得懂，说得出，记得住。Mac、Windows、Linux 和 Android 上的实时纪要、双语文字记录、字幕与同声传译。
> 
>   
>   &nbsp;
>   
> 
>   
>   
>   
>   
>   
> 
> 简体中文 · English · 日本語 · 한국어
> 
> 开 Zoom、飞书、腾讯会议，或者听 X Spaces、YouTube 直播，知了都能实时给双语字幕、边听边写结构化纪要。轮到你发言时，按住说话键（Mac 右 `⌥`，Windows 右 `Ctrl`）开口，对方直接在会里听到翻译好的语音。知了直接读系统声音，不往会里塞机器人，对方完全无感。在 Apple 芯片的 Mac 上全部本机识别，声音不出电脑。
> 
>   
> 
> ## 平台
> 
> | 平台 | 系统要求 | 说明 |
> |---|---|---|
> | Mac | macOS 14.4+，Apple 芯片 / Intel | 功能最全。Apple 芯片本机识别（不填 key 也能用），Intel 版需 Ling key（识别走 Ming） |
> | Windows | Windows 10 2004+，x64 / ARM64 | 需 Ling、OpenRouter、ZenMux 等 AI 服务 key，见 [windows/](windows/README.md) |
> | Linux | Ubuntu 22.04 / 24.04 桌面版 | 需 AI 服务 key；纪要窗会被屏幕共享看到，见 [linux/](linux/README.md) |
> | Android | Android 10+ | 需 AI 服务 key；视频与直播字幕、面对面互译，见 [android/](android/README.md) |
> 
> 安装包都在 [官网下载页](https://cicada.indaloop.app/download/) 和 [Releases](https://github.com/wquguru/cicada/releases)。四个平台共用版本号和会议记录格式，下面以 Mac 版为例说明功能。
> 
> ## 主要功能
> 
> ### 实时纪要与双语文字记录
> 
> 纪要窗口边听边整理总结、议题要点、结论、待办、鱼骨图和人名术语表，点结论或待办就能跳回原话。按 `⌘F` 搜索时，连同识别错的写法也能一起搜出来。
> 
> 接了 AI 服务后，听错的人名和术语会当场改对：同音错字直接改，生僻名字先问你一次，答“对”以后自动改。常用写法可以贴进设置的“词表”里。会后也能选“改这句…”批量改整场同样的错词，随时可撤销。
> 
> ### 实时字幕与语言识别
> 
> 对方开口几秒就能自动认出语言并翻成你的系统语言，按 `⌃⌥S` 切换显示方式。字幕条只在有人说话时出现，鼠标划过自动变透明，不挡按钮。Apple 芯片的 macOS 26 上还会在本机重听校准，15 到 30 秒后修掉错字和断句漏字。
> 
> ### 线下与混合会议
> 
> 在会议室里点“打开麦克风”，就能听桌边的人说话。线上线下混合开会也是这一个按钮：电脑声音记为“线上”，麦克风记为“现场”，合在同一份记录里（macOS 14 和 15 打开麦克风时只听桌边）。外放声音传进麦克风时会自动避让并去重，不会记两遍；戴耳机时两边同时说也能记下。Windows 和 Linux 规则相同。
> 
> ### 同声传译
> 
> 按住右 `⌥` 说话，对方就能在会议软件里听到翻译后的语音。打开功能时会自动把系统麦克风切到一键下载安装的虚拟驱动 BlackHole 2ch。填了 Ling API key 可以用自然人声，或用 8 到 30 秒录音克隆你自己的声音；不填也能用 Mac 自带语音。
> 
>   
> 
> ### 会议记录
> 
> 双语记录、纪要和原始录音都存在本机。点任意一句就能从那儿回放录音，本机声纹模型会自动区分不同说话人（填了 Ling key 会填上名字），认错了随时改名或合并。会后支持补生成纪要，或导出 Markdown、Word 和 SRT 字幕。点“分享…”可以把纪要（也可以带上双语全文）发成一个链接，能设有效期和密码；上传前会先检查有没有密钥、未公开的公司信息这类敏感内容，有就先拦下。你也可以通过“文件 › 导入录音或视频…”把本地音视频快速转成双语记录。目前记录里的你只包含按住说话键说的话，会上直接开口的部分见[路线图](#路线图)。
> 
>   
> 
> ## 隐私与权限
> 
> **Apple 芯片的 Mac**：声音采集、语言识别、语音识别和会议录音全部在本机完成。离开电脑的只有识别出的文字（去翻译和写纪要），以及填了 Ling key 用同传时你说的那几句语音（如果语音模型下载慢你点了“先用 Ling 听”，或你在“设置 › AI 服务”里把语音识别改成了自建服务，会议声音也会发给对应服务）。不填 API key 时，实时字幕、翻译、会议记录和同传都能免费用。实时纪要、一步语音翻译和声音克隆需要你自己的 Ling（蚂蚁集团大模型服务）API key，一小时会大约花 0.15 到 1 元人民币，Ling 每月送 10 元额度，够用 10 到 50 小时。
> 
> **Intel 版 Mac、Windows、Linux、Android**：语音识别在云端完成，说话声音会分段发给 Ling 的 Ming 或你选的 OpenRouter、ZenMux 等服务，所以必须填 AI 服务 key。录音和会议记录依然只存在本机。
> 
> Mac 版只在用到某项功能时才要权限，拒绝后其他功能照常：
> 
> | 权限 | 用途 | 不给的话 |
> |---|---|---|
> | 录制系统声音（屏幕与系统录音） | 听系统播放的声音出字幕，不录屏幕 | 字幕和纪要都用不了 |
> | 麦克风 | 按住说话键做同传；点“打开麦克风”听会议室 | 不能说话翻译，不能听会议室 |
> | 输入监控 | 判断右 `⌥` 是否被按下（不拦截、不记别的键） | 设置里改成 `⌃`/`⌘` 组合键就不用这个权限 |
> | 管理员密码 | 安装虚拟麦克风 BlackHole 2ch（只问一次） | 对方听不到同传，其余照常 |
> 
> - **联网透明**：只有翻译（`translate.googleapis.com`）、你配的 AI 服务（如 `api.ant-ling.com`）、下载苹果公证过的 BlackHole 驱动（会核对 SHA-256）和每天去 GitHub 检查更新会联网。没有统计、没有埋点，也没有我们自己的服务器。
> - **数据存本机**：记录和录音存在 `~/Library/Application Support/LiveSubs`。Key 和声音样本只对当前系统账户可读，不进 Time Machine 和日志。
> - **防录屏**：Mac 上共享屏幕、录屏和截图都拍不到纪要窗口，录演示时可手动打开“共享屏幕时让对方看到”。
> 
> ## 用到的模型
> 
> 以下为 Apple 芯片 Mac 的配置。用自建服务（“其他（兼容 OpenAI）”）时，可在“设置 › AI 服务”打开“语音和文字只发给你的服务”，完全不经过 Google。
> 
> | 功能 | 填了 Ling key | 不填 key / 退回 |
> |---|---|---|
> | 语音识别、语言识别 | Apple `SpeechAnalyzer` / `SpeechTranscriber`（本机）；macOS 14.4–15 为 `SFSpeechRecognizer`（本机，需开听写） | 同左 |
> | 整句翻译 | Ling `Ling-3.1-flash`（可在“设置 › AI 服务”改为 `Ling-3.0-flash`） | Google 翻译 → Apple `Translation`（本机，仅 macOS 26） |
> | 正在说的半句话翻译 | Google 翻译 | 只显示原文，说完换整句翻译 |
> | 实时纪要、会后完整版 | Ling `Ling-3.1-flash` | 不可用 |
> | 检查 key 是否有效 | Ling `Ling-3.0-tiny`（1 token） | — |
> | 同传：听懂并翻译 | Ming `Ming-3.0-audio-flash`（一步完成） | Apple 本机识别 + 上述翻译链 |
> | 同传：发声与声音克隆 | Ming `Ming-3.0-tts-0.5B` | Mac 自带语音（`AVSpeechSynthesizer`），无克隆 |
> | 说话人识别 | WeSpeaker ResNet34-LM（随 app 附带，本机 Core ML 运行） | 同左 |
> 
> ## 配置 Ling API key
> 
> 1. 去 [Ling 开放平台](https://chat.ant-ling.com/platform/api) 注册登录，创建令牌，复制 `sk-` 开头的 key。
> 2. 打开知了“设置 › AI 服务”（或纪要窗口顶部提示框），粘贴保存即可。
> 
> **注册不了 Ling？** 在“设置 › AI 服务”右上角（或引导页点“用不了 Ling？”）可以换成 OpenRouter、ZenMux、OpenAI，或任何 OpenAI 兼容服务（包括 Ollama、vLLM、SGLang、Qwen3-ASR、Whisper 等本机或局域网服务）。实时纪要和整句翻译都能用，OpenRouter 和 ZenMux 还能用 Gemini 的自然人声做同传；一步语音翻译和声音克隆只有 Ling 支持。Windows、Linux、Android 换用其他服务时，“听对方”也交给该服务，字幕比 Ling 晚 1–2 秒。连不上时设置里会直接提示是 key、模型还是代理问题（代理说明见[设置页](https://cicada.indaloop.app/start/#proxy)）。
> 
> ## 系统要求与安装
> 
> 安装包都在 [Releases 页面](https://github.com/wquguru/cicada/releases/latest) 或 [官网](https://cicada.indaloop.app)，可用 Releases 里的 `checksums.txt` 核对 SHA-256。有问题可以去 X 找作者 [@wquguru](https://x.com/wquguru)。
> 
> ### Mac
> 
> 需要 macOS 14.4+（支持 Apple 芯片与 Intel）。Apple 芯片在 macOS 14.4–15 上要先去系统设置 › 键盘里打开“听写”并添加要听的语言；macOS 26 直接用新本机模型，不用开听写；Intel 版走云端 Ming 识别，需要配 Ling key。
> 
> 下载 `Cicada--macOS-AppleSilicon.dmg` 或 `Cicada--macOS-Intel.dmg`，拖进应用程序文件夹（可用 `shasum -a 256 Cicada-*.dmg` 校验）。目前还没有苹果公证，第一次打开被拦时，去系统设置 › 隐私与安全性里点仍要打开。跟着首次引导开权限、试听示例会议即可。
> 
>   
> 
> ### Windows
> 
> 需要 Windows 10 2004+（x64 或骁龙 ARM64）。下载安装包双击即装，不用管理员权限。SmartScreen 拦下时点更多信息 › 仍要运行。用同传时引导会带你装免费的 VB-Cable 虚拟麦克风。
> 
> ### Linux
> 
> 需要 Ubuntu 22.04 或 24.04 桌面版（x86_64 或 arm64）。下载 `Cicada--Linux.tar.gz`，终端运行 `tar xzf Cicada--Linux.tar.gz && cicada-linux/install.sh`。同传会自动建一个“知了 麦克风”，免装驱动。Linux 窗口无法避开屏幕共享，纪要窗会标明“共享屏幕时此窗口可见”。想打开“设置 › 通用 › 保存会议录音”，需先装系统第三方媒体格式（如 `ubuntu-restricted-extras`）提供 AAC 编码器。打开“设置 › 词表 › 会中改正听错的词”后每句会多发一次文字请求。
> 
> ### Android
> 
> 需要 Android 10+。下载 `Cicada--Android.apk` 安装；Android 15 起第一次开悬浮字幕要先在应用信息里允许受限制的设置。同样自带本机声纹区分说话人、支持“正在听”时实时改错词。微信通话和会议 app 的声音系统不让内录，开外放、改选“面对面”就行。
> 
> ## 路线图
> 
> 按先后排，想要哪一项欢迎提 Issue。细节见 [docs/ROADMAP.zh-CN.md](docs/ROADMAP.zh-CN.md)。
> 
> - **记录我的发言**：开会时持续听麦克风并消除回声，把你直接开口说的话也记进记录和纪要。
> - **正式签名与公证**：Mac 和 Windows 安装包加上正式签名与公证，不再弹窗拦截，AI key 放回系统钥匙串。
> - **声纹识别**：在本机记住常开会同事的声音，下次自动认出。
> - **不用 key 也有纪要**：在支持的 Mac 上用 Apple 本机模型整理纪要。
> - **Android 上架应用商店**：不用再手动装 APK。
> - **iPhone 和 iPad**：先做听会议室、面对面互译和会议记录。
> 
> ## 卸载
> 
> 退出知了，从应用程序文件夹拖进废纸篓即可。会议记录和录音在 `~/Library/Application Support/LiveSubs`，不用可手动删。清除设置运行：
> 
> ```bash
> defaults delete com.wquguru.cicada
> ```
> 
> ## 开发
> 
> Mac 版只需安装 Xcode Command Line Tools（`xcode-select --install`），无第三方依赖。macOS 27 上若报 `SwiftUIMacros` 缺失，安装完整 Xcode 并运行 `sudo xcode-select -s /Applications/Xcode.app`。其他平台构建见 [windows/README.md](windows/README.md)、[linux/README.md](linux/README.md)、[android/README.md](android/README.md)。
> 
> ```bash
> scripts/build.sh            # 编译开发版 → build/Cicada.app（名为 Cicada Dev，可与正式版同时运行）
> open build/Cicada.app
> scripts/package.sh          # 打包正式版 DMG、zip 和 SHA-256 校验值
> ```
> 
> 代码架构见 [AGENTS.md](AGENTS.md)，官网源码在 `site/`（由 `scripts/site.py` 生成），更新记录见 [CHANGELOG.md](CHANGELOG.md) 或[官网更新日志](https://cicada.indaloop.app/changelog/)。
> 
> ## 开源协议
> 
> 本项目采用 [Apache-2.0](LICENSE) 协议开源。虚拟麦克风驱动 BlackHole 2ch 采用 GPL 协议，不打包在安装包内，点安装时从其官方地址下载。随附的声纹模型是 [WeSpeaker](https://github.com/wenet-e2e/wespeaker) 在 VoxCeleb 上训练的 ResNet34-LM（CC BY 4.0 协议），由 `scripts/convert-voiceprint.py` 转为 Core ML。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/wquguru/cicada) · [官方網站](https://cicada.indaloop.app)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "wquguru--cicada"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "wquguru--cicada" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "wquguru--cicada"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/wquguru--cicada");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "wquguru--cicada" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "wquguru" AND file.name != "wquguru--cicada"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/wquguru--cicada");
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
> const me = dv.page("Repos/wquguru--cicada");
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
> const me = dv.page("Repos/wquguru--cicada");
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
> const me = dv.page("Repos/wquguru--cicada");
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
> const me = dv.page("Repos/wquguru--cicada");
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

> **2026-11-08** — 首次收錄
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

- [[2026-11-08|2026-11-08]] — 首次收錄，1.7k stars
