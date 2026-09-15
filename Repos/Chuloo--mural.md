---
repo: Chuloo/mural
url: https://github.com/Chuloo/mural
owner: Chuloo
owner_type: User
language: Kotlin
license: MIT
description: "The language app you eventually delete. A native iPhone companion for learning through conversation."
homepage: "https://mural.chat"
stars: 866
stars_per_day: 433
forks: 181
open_issues: 14
created: 2026-09-12
pushed_at: 2026-09-14
first_seen: 2026-09-15
week: "2026-W38"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "v0.1.0-android-preview.6"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-15
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-18"
contributor_count: 2
engagement: "medium"
issue_close_rate: 22
repo_size_kb: 19376
readme_length: 9161
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-15"
star_history: "2026-09-15:866"
tags:
  - github
  - "category/other"
  - "lang/kotlin"
  - "topic/ios"
  - "topic/language_learning"
  - "topic/open_source"
  - "topic/swiftui"
aliases:
  - "mural"
  - "Chuloo/mural"
---

# mural

**866** stars · **433** stars/天 · 建立 2 天前 · Kotlin · MIT

```dataviewjs
const me = dv.page("Repos/Chuloo--mural");
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

`v0.1.0-android-preview.6`

`ios` `language-learning` `open-source` `swiftui`

> [!summary] 一句話摘要
> The language app you eventually delete. A native iPhone companion for learning through conversation.

## 專案簡介

The language app you eventually delete. A native iPhone companion for learning through conversation.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Chuloo--mural");
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
> const me = dv.page("Repos/Chuloo--mural");
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
| Forks | 181 |
| Open Issues | 14 |
| Issue 解決率 | 22% (4 closed) |
| 最後推送 | 2026-09-14 |
| 建立日期 | 2026-09-12 |
| 官方網站 | [Link](https://mural.chat) |
| Repo 大小 | 18.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Chuloo/mural) |
| Topics | `ios` `language-learning` `open-source` `swiftui` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Kotlin" : 42
>     "TypeScript" : 36
>     "Swift" : 15
>     "Python" : 5
>     "PLpgSQL" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Chuloo](https://github.com/Chuloo) | 53 |
> | [@desdelinux](https://github.com/desdelinux) | 6 |

**最新版本**：v0.1.0-android-preview.6 — Mural for Android — Preview 6 (2026-09-14)

> [!info]- Release Notes
> Preview 6 fixes Google sign-in getting stuck after a guest conversation. Your earlier guest usage remains linked to your account, while an available gift or purchased balance can be used. Signing in keeps the existing one-time welcome allowance rule. Learning history and your own API key remain available if saved trial details cannot be restored. If local conversation saving delays sign-in, Mural now explains the wait.
> 
> ## Install or update
> 
> [**Download Mural for Android — Preview 6**](https://github.com/Chuloo/mural/releases/download/v0.1.0-android-preview.6/Mural-Android-direct-v6.apk)
> 
> Open the downloaded APK and choose **Update** if Mural is already installed. **Do not uninstall Mural or clear its data.** This APK uses the same certificate as the directly shared Preview 5, so it can update that installation. Changing a download link does not update copies already downloaded or installed: download this file again.
> 
> Requires Android 8.0 or later; this preview is for adults 18+. The Google Play build has a different signing certificate and is a separate release.
> 
> ## Verification
> 
> The tested runtime passed 298 JVM tests with no failures or skips. Release lint reported no errors and 47 warnings. The APK passed v2/v3 signature verification, 16 KB ZIP alignment and a bounded credential scan across all 601 archive entries, with no matches. Pattern scanning cannot exclude every possible credential format.
> 
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-14 ~ 2026-09-14）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #23 from desdelinux/android-parity-followup

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#20](https://github.com/Chuloo/mural/issues/20) | Local AI models for offline conversation | 4 | 1 |
> | [#14](https://github.com/Chuloo/mural/issues/14) | Release Mural for Android `enhancement` `platform:android` | 1 | 0 |
> | [#3](https://github.com/Chuloo/mural/issues/3) | Highlight speaker’s words | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Mural
> 
> **The language app you eventually delete.**
> 
>   
>   
>   
>   
> 
> Mural is a native iPhone and Android app for learning through conversation. Speak to a warm, animated orb, follow the meaning when you need it, and practise words again in later conversations. Mural adjusts the challenge from the evidence in your replies.
> 
> Built with SwiftUI and Liquid Glass on iPhone, and Jetpack Compose on Android. Learning records stay on your device. This version connects directly to OpenAI using your own API key. It needs an internet connection, but no Mural account or running Mac.
> 
> 
> ### Install with a local AI agent
> 
> If Codex or another coding agent has access to your Mac's files and terminal, paste the prompt below. The agent can clone, build and install Mural. You handle Apple Account sign-in and team selection in Xcode, device trust and Developer Mode prompts, and API-key entry inside the app. The [iPhone installation guide](docs/run-on-iphone.md) covers each step.
> 
> ```text
> Help me build and install Mural on my iPhone from https://github.com/Chuloo/mural.
> 
> Clone the repository into a new local folder, or use this checkout if it is
> already open. Read README.md, docs/run-on-iphone.md and docs/build-and-test.md.
> Check that Xcode and its iOS tools are ready, resolve the pinned dependencies,
> run the offline core tests, and build the iOS Simulator target.
> 
> Guide me through adding my Apple Account and choosing my signing team in
> Xcode. For a first installation, help me choose a unique bundle identifier if
> needed. Preserve the existing team and identifier when updating Mural, and
> do not uninstall it or erase its learning data.
> 
> Detect my connected iPhone, build with the configured signing team, install
> Mural and launch it. Tell me when I need to unlock the phone, trust this Mac
> or the developer profile, enable Developer Mode, or approve a system prompt.
> 
> I will choose my learning and subtitle languages, then enter my own OpenAI
> API key in Settings > Advanced > Use your own API key. Do not ask me to paste
> the key into chat, read it from Keychain, or put it in source files or logs.
> Leave managed accounts, hosted trials and purchases disabled.
> 
> Finish by reporting which build and installation checks passed, and anything
> I still need to do on the phone. I will start the first live conversation.
> ```
> 
> 
> ### Install with Xcode
> 
> Updating an earlier checkout? The iPhone project now lives in `apps/ios/`. Before opening it, follow the [local-settings migration steps](docs/run-on-iphone.md#update-an-earlier-checkout) to preserve your signing team, account configuration and existing app identity.
> 
> 1. Clone [Chuloo/mural](https://github.com/Chuloo/mural), or download its ZIP. Open `apps/ios/Mural.xcodeproj`.
> 2. In Xcode, open **Settings → Accounts** and add your Apple Account.
> 3. Select the **Mural** target, open **Signing & Capabilities**, enable automatic signing, and choose your team. For your own fork, replace the bundle identifier with a unique value such as `com.yourname.mural`. Keep that value stable for later updates.
> 4. Connect and unlock your iPhone. Trust the Mac if prompted. Turn on **Settings → Privacy & Security → Developer Mode** on the phone, restart, and confirm the setting.
> 5. Select **Mural** as the scheme and your iPhone as the destination, then click **Run**. If iOS asks you to trust the developer, do so in **Settings → General → VPN & Device Management**.
> 6. Choose your learning and subtitle languages in the welcome screens. In **Settings → Advanced → Use your own API key**, save your own OpenAI project key. Start a conversation and allow microphone access.
> 
> You should hear Mural greet you in your chosen language. You can now disconnect your phone from the Mac and use Wi-Fi or cellular.
> 
> A free Personal Team can run the app on your own phone; TestFlight and App Store distribution require Apple Developer Program membership. Free provisioning profiles expire after seven days. Refresh by running the same project again, preserving the team and bundle identifier. Export a learning backup before changing either or switching phones. See the [detailed iPhone guide](docs/run-on-iphone.md) for common setup problems. [Apple membership guidance](https://developer.apple.com/support/compare-memberships/)
> 
> 
> ## Privacy and API costs
> 
> Mural stores conversations, vocabulary and preferences on your device. There is no Mural cloud sync, analytics SDK or advertising. The optional iPhone account feature stores signup data on the account service; conversations and vocabulary stay local. Your API key is stored in the device’s Keychain, excluded from learning exports, and sent only to OpenAI.
> 
> During practice, audio, selected conversation text, learning context and requested searches go to OpenAI. Mural does not save raw audio. API requests set `store: false` where supported, but that does not disable all provider retention; OpenAI’s abuse-monitoring rules and your project’s settings still apply. [OpenAI data controls](https://developers.openai.com/api/docs/guides/your-data)
> 
> OpenAI bills your project for voice, text and search. The app’s usage display is an estimate, and its conversation time limit is not a billing cap. Check your OpenAI project’s usage and spending settings.
> 
> 
> ## Android
> 
> A native Android client is available in [`apps/android/`](apps/android/README.md), with voice and written conversation, the same eight language modules, local learning records and iPhone-compatible JSON backups. Its interface is English, and Spanish on a phone set to Spanish. It runs on Android 8.0 or later and uses your own OpenAI API key stored with Android Keystore. The iPhone client remains available below.
> 
> See the [Android installation/build guide](docs/run-on-android.md) and [Android verification record](verification/android-validation.md). Build a personal-install APK with Java 17 and Android SDK 36:
> 
> ```sh
> cd apps/android
> ./gradlew :app:testDebugUnitTest :app:lintDebug :app:assembleDebug
> ```
> 
> 
> ## Get started
> 
> You need a Mac with Xcode 26 or later, an iPhone running iOS 26.1 or later, an Apple Account, and an OpenAI API project with billing and access to GPT-Live-1 and GPT-5.6 Luna. A ChatGPT subscription does not provide API credit.
> 
> 
> ## What works today
> 
> - **A warm welcome:** choose a learning language and a subtitle language in two short screens, with a greeting that changes languages.
> - **Conversation practice:** live voice, gentle corrections, optional meaning subtitles, word lookup, mute, and a typed reply when speaking is inconvenient.
> - **Themes:** 24 conversation settings, with cultural details supplied by each language module. You can also request a current topic; web search supplies source links.
> - **Adaptive practice:** vocabulary and provisional ability observations come from validated conversation evidence. Each learning language keeps separate progress.
> - **Recall bars:** one to three bars summarise repeated retrieval over time. Three bars require spaced evidence in different contexts. These are product heuristics, not calibrated forgetting probabilities or a language certificate.
> - **A fresh start:** the Talk screen returns to its greeting 15 seconds after a conversation ends. Tap **New conversation** to reset immediately. Your saved conversations and learning remain.
> - **Local records:** export or import a JSON learning backup, delete a conversation, or delete all learning data from Settings.
> 
> The modules teach Norwegian Bokmål with an Eastern Norwegian voice target, Spanish from Spain, international English, French from France, German from Germany, Italian from Italy, Brazilian Portuguese and Standard Mandarin with Simplified Chinese. Each language has its own conversation themes, teaching guidance and progress. Valid regional alternatives are accepted.
> 
> On iPhone, Mandarin includes optional pinyin in Talk, transcripts and word details. Chinese word lookup uses word boundaries, and the original characters remain available for copying from transcripts. Pinyin uses system 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Chuloo/mural) · [官方網站](https://mural.chat)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Chuloo--mural"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Kotlin" AND file.name != "Chuloo--mural" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W38" AND file.name != "Chuloo--mural"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Chuloo--mural");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Chuloo--mural" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Chuloo" AND file.name != "Chuloo--mural"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Chuloo--mural");
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
> const me = dv.page("Repos/Chuloo--mural");
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
> const me = dv.page("Repos/Chuloo--mural");
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
> const me = dv.page("Repos/Chuloo--mural");
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
> const me = dv.page("Repos/Chuloo--mural");
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

> **2026-09-15** — 首次收錄
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

- [[2026-09-15|2026-09-15]] — 首次收錄，866 stars
