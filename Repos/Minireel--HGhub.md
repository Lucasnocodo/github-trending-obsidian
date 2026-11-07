---
repo: Minireel/HGhub
url: https://github.com/Minireel/HGhub
owner: Minireel
owner_type: Organization
language: TypeScript
license: NOASSERTION
description: "YellowFruit third-party client"
homepage: ""
stars: 1836
stars_per_day: 612
forks: 1034
open_issues: 5
created: 2026-11-03
pushed_at: 2026-11-05
first_seen: 2026-11-07
week: "2026-W45"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v1.1.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-07
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-10"
contributor_count: 2
engagement: "high"
issue_close_rate: 38
repo_size_kb: 1353
readme_length: 4540
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-07"
star_history: "2026-11-07:1836"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - org
  - "topic/android"
  - "topic/drama"
  - "topic/free"
  - "topic/movie_web_app"
  - "topic/reels"
aliases:
  - "HGhub"
  - "Minireel/HGhub"
---

# HGhub

**1.8k** stars · **612** stars/天 · 建立 3 天前 · TypeScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/Minireel--HGhub");
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

`ORG` `v1.1.0`

`android` `drama` `free` `movie-web-app` `reels` `windows`

> [!summary] 一句話摘要
> YellowFruit third-party client

## 專案簡介

YellowFruit third-party client

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Minireel--HGhub");
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
> const me = dv.page("Repos/Minireel--HGhub");
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
| Forks | 1.0k |
| Open Issues | 5 |
| Issue 解決率 | 38% (3 closed) |
| 最後推送 | 2026-11-05 |
| 建立日期 | 2026-11-03 |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Minireel/HGhub) |
| Topics | `android` `drama` `free` `movie-web-app` `reels` `windows` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@tauri-apps/api` `clsx` `hls.js` `react` `react-dom` `tailwind-merge` `@tailwindcss/vite` `@tauri-apps/cli` `@types/node` `@types/react` `@types/react-dom` `@vitejs/plugin-react` `tailwindcss` `typescript` `vite`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 72
>     "Rust" : 18
>     "CSS" : 9
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@WEP-56](https://github.com/WEP-56) | 18 |
> | [@clow7280](https://github.com/clow7280) | 2 |

**最新版本**：v1.1.0 (2026-11-05)

> [!info]- Release Notes
> # HGhub v1.1.0
> ## 新增
> - 新增独立设置页
> - 新增线路嗅探、可达性测试、切换能力
> - 新增检查更新能力，基于release tag
> - 新增观看记录续播能力
> ## 优化
> - 大幅优化移动端播放页布局
> - 优化移动端 "我的" 分页，不需要登陆也可记录收藏、历史
> 
> ## 修复
> - 修复移动端浅色配色突兀问题
> 
> ## 其它
> 本次更新合并了@clow7280 的[pr](https://github.com/Minireel/HGhub/pull/1)，当前项目已适配macos，但暂不发布对应客户端release
> 
> ## 重要变更
> - **许可证自本版本起改为 [PolyForm Noncommercial 1.0.0](https://github.com/Minireel/HGhub/blob/main/LICENSE)：仅限非商业使用**。打包出售、接入付费 / 会员 / 广告变现等均属违规；v1.0.1 及更早版本仍为 MIT。
> - **官方只在本仓库的 Releases 发布**。已发现 `hichuv/HGhub` 等加入了卡密验证、VIP 付费的修改版，与本项目无关，请勿下载使用。
> 
> ## 安装
> - **Windows**：`HGhub_1.1.0_x64-setup.exe`（安装版） / `HGhub_1.1.0_x64_portable.zip`（便携版）
> - **Android**：`HGhub_1.1.0_arm64.apk`（绝大多数手机） / `HGhub_1.1.0_arm.apk`（老旧 32 位设备） / `HGhub_1.1.0_x86_64.apk`（模拟器）
> 
> 
> 
> 
> 
> ## New Contributors
> * @clow7280 made their first contribution in https://github.com/Minireel/HGhub/pull/1

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-04 ~ 2026-11-05）
> **活躍天數** 2 天 · **最新 commit** 去除演示截图

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/Minireel/HGhub/issues/9) | pnpm dev之后根本无法播放，请求全部失败 | 0 | 0 |
> | [#8](https://github.com/Minireel/HGhub/issues/8) | 滑动快进快退后会暂停播放 | 0 | 1 |
> | [#7](https://github.com/Minireel/HGhub/issues/7) | mac用模拟器卡在开屏界面 | 0 | 0 |
> | [#5](https://github.com/Minireel/HGhub/issues/5) | 画质不是很清晰 | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # HGhub
> 
> **黄果短剧第三方客户端 · Rust + Tauri 2**
> 
> Windows / macOS / Android 三端 · Fluent 设计 · 沉浸式竖屏播放
> 
> > ⚠️ 本项目仅供 **学习与技术交流**，不提供、不存储、不分发任何音视频内容。
> > 所有内容均来自第三方站点，版权归原作者与上游站点所有。
> 
> **使用须知**
> 
> - **以访客身份正常使用**：像普通访客一样浏览就好，请勿滥用本项目。
> - **不要给上游增加压力**：本项目本身不提供下载功能，请勿改动代码去做批量下载 / 批量抓取，也不要高频轮询、并发轰炸接口或挂机刷播放量；内置的封面与播放列表缓存请不要改小或关掉。
> - **尊重上游版权**：不要去除水印与站点标识，不要把剧集搬运、转码、修改后二次分发到别处（网盘、资源站、其他 App 等），更不能改完拿出去出售。
> - **不要公开传播接口与直链**：接口地址、播放直链、解密方式请勿公开张贴或打包成「资源站」——上游一旦封禁，所有人都没法再用。
> - **不要商业化**：禁止打包出售、接入广告 / 会员 / 付费点播，或作为收费服务的一部分分发（详见 [LICENSE](LICENSE)）。
> - **合理使用**：仅供个人学习、研究与自用；请在 24 小时内删除相关资源，并支持正版。
> - **遵守当地法律**：使用者应自行判断并承担合规责任。
> 
> > ⚖️ 许可证自 v1.1.0 版本起改为 **PolyForm Noncommercial 1.0.0**：**禁止任何商业用途**——
> > 包括打包出售、接入付费/会员/广告变现、作为收费产品或服务的一部分分发。
> > 个人学习、研究、自用与非营利使用不受限制，详见 [LICENSE](LICENSE)。
> 
> ## 官方渠道与仿冒提醒
> 
> - **唯一官方仓库**：[github.com/Minireel/HGhub](https://github.com/Minireel/HGhub)
> - **唯一下载渠道**：[GitHub Releases](https://github.com/Minireel/HGhub/releases)。仓库源码页不放任何可执行文件，
>   其余网站、网盘、QQ 群、公众号、第三方下载站分发的「HGhub」安装包**一律非官方**，作者不保证其安全性与完整性。
> 
> > 🚫 **已发现的恶意修改版**：[`hichuv/HGhub`](https://github.com/hichuv/HGhub)
> >
> > 该仓库与本项目无关，是在旧版本源码基础上擅自加入**卡密验证、VIP 付费解锁**等变现功能的修改版，
> > 代码改动不透明、安全性无法验证。**请勿下载、勿注册、勿付费**；如已安装，建议立即卸载，改用官方 Release 包安装。
> >
> > 本项目**从未、也不会**加入任何卡密 / VIP / 付费解锁 / 广告功能。如果你遇到的「HGhub」要求输入卡密或付费开通，那一定不是官方版本。
> 
> ## 技术栈
> 
> | 层 | 选型 |
> | --- | --- |
> | 壳 | Tauri 2（Rust 1.9x） |
> | 前端 | React 19 + TypeScript + Vite 7 + Tailwind CSS 4 |
> | 播放 | hls.js（HLS / AES-128） |
> | 网络 | reqwest + rustls |
> 
> ## 目录
> 
> ```
> .
> ├─ src/                      前端
> │  ├─ api.ts                 接口封装 + 本地媒体协议 URL
> │  ├─ store.tsx              全局状态（导航栈 / 用户 / 本地收藏 / 主题）
> │  ├─ html.ts                吃瓜正文清洗与图片代理
> │  ├─ components/            Feed（播放页）/ VideoSurface / PlayerControls / Panels / UI
> │  └─ pages/                 Home / Search / Category / Profile / Posts
> ├─ src-tauri/                Rust 后端
> │  └─ src/
> │     ├─ net.rs              请求层（边缘信封 + 重试）
> │     ├─ api.rs              业务命令
> │     ├─ media.rs            封面解密 + HLS 代理 + 缓存
> │     └─ session.rs          token 持久化
> └─ docs/API.md               接口文档
> ```
> 
> ## 开发 / 构建
> 
> ```bash
> pnpm install          # 首次安装
> pnpm app:dev          # 桌面端热重载
> pnpm app:build        # 打包：Windows → NSIS 安装程序；macOS → .app + .dmg
> ```
> 
> macOS 先装 Xcode Command Line Tools（`xcode-select --install`），打包目标写在
> `src-tauri/tauri.macos.conf.json`（`app` + `dmg`，窗口用系统标题栏 Overlay）。
> 
> Android（需 Android SDK + NDK，并配置 `ANDROID_HOME` / `NDK_HOME`）：
> 
> ```bash
> pnpm android:init     # 首次生成 android 工程
> pnpm android:dev      # 真机 / 模拟器调试
> pnpm android:build    # 产出 APK
> ```
> 
> ### 环境注意
> 
> - 工程若放在 **exFAT** 盘（不支持符号链接），需保留 `.npmrc` 中的 `node-linker=hoisted`。
> - pnpm 10 靠 `package.json` 的 `pnpm.onlyBuiltDependencies` 放行 `esbuild`，否则 `vite build` 缺少二进制；
>   pnpm 11 起该字段失效，白名单改在 `pnpm-workspace.yaml` 的 `allowBuilds`（两处都保留）。
> 
> ## 实现要点
> 
> 1. **统一边缘信封**：站点把 `/api/**` 收敛为 `POST /api/edge/request`（`method/path/body(base64)/content_type` + `Authorization: Bearer`），本项目只对接这一个入口，无需处理 Cookie。
> 2. **封面解密**：封面为 AES-128-CBC 密文，Rust 侧解密后经自定义协议输出，前端 `` 直接使用。
> 3. **HLS 代理**：m3u8 与分片经自定义协议转发并改写 `#EXT-X-KEY` / 分片地址，绕开 WebView 的 CORS 与防盗链。
> 4. **自定义协议**：Windows / Android 为 `http://hg.localhost/*`，macOS 为 `hg://localhost/*`（Tauri 的平台差异）。
>    Rust 侧 `lib.rs` 与前端 `api.ts` 各自按平台生成一次基址，两处必须一致，否则封面与视频全部加载失败。
> 5. **不做签名逆向**：只复用浏览器同源行为，接口字段均有文档与实测样本。
> 
> ## 免责声明
> 
> - 本项目与内容提供方无任何关联，作者不参与内容的制作、上传与分发。
> - 本项目仅在上述官方渠道发布；任何第三方修改版（尤其是加卡密、VIP 变现的版本）均与作者无关，请自行甄别。
> - 使用者应自行遵守所在地法律法规；因使用本项目产生的任何后果由使用者自行承担。
> - 若相关权利方认为本项目存在侵权，请通过 Issue 联系，我们会及时处理。
> 
> ## License
> 
> [PolyForm Noncommercial License 1.0.0](LICENSE) —— **仅限非商业用途**。
> 
> - **允许**：个人学习、研究、自用、爱好项目，以及在非营利组织内部使用；可以自由修改、二次开发。
> - **禁止**：任何商业用途。包括但不限于打包出售、接入付费/会员/广告变现、作为收费服务或商业产品的一部分分发。
> - **保留声明**：分发本项目或其修改版时，必须附带本许可证全文（或上面的链接）以及 `Required Notice` 声明行。
> - 商业授权请通过 Issue 联系作者单独洽谈。
> 
> > 历史说明：v1.0.1 及更早版本以 MIT 发布，已发出的副本继续按 MIT 授权；自 **v1.1.0** 起的新版本一律适用 PolyForm Noncommercial 1.0.0。
> 
> ## 常见问题
> 
> **1. `pnpm install` 报 `ERR_PNPM_EISDIR ... symlink`**
> 
> 工程放在 exFAT / FAT32 盘时无法创建符号链接，保留 `.npmrc` 里的 `node-linker=hoisted` 即可。
> 
> **2. `tauri android build` 报 `Failed to create a symbolic link ... jniLibs`**
> 
> 同样是 exFAT 不支持符号链接。可手动把 Rust 产物拷进 jniLibs，再直接跑 Gradle：
> 
> ```bash
> cp src-tauri/target/aarch64-linux-android/debug/libhuangguo_client_lib.so \
>    src-tauri/gen/android/app/src/main/jniLibs/arm64-v8a/
> 
> cd src-tauri/gen/android
> ./gradlew assembleDebug        # Windows: gradlew.bat assembleDebug
> ```
> 
> 产物在 `src-tauri/gen/android/app/build/outputs/apk/`。
> 
> **3. Android 构建提示找不到 SDK / NDK**
> 
> 需要设置 `ANDROID_HOME`（Android SDK 根目录）、`NDK_HOME`（`$ANDROID_HOME/ndk/`）与 `JAVA_HOME`（JDK 17）。
> 
> ## LinuxDO
> https://linux.do/

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/Minireel/HGhub)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Minireel--HGhub"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Minireel--HGhub" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W45" AND file.name != "Minireel--HGhub"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Minireel--HGhub");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Minireel--HGhub" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Minireel" AND file.name != "Minireel--HGhub"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Minireel--HGhub");
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
> const me = dv.page("Repos/Minireel--HGhub");
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
> const me = dv.page("Repos/Minireel--HGhub");
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
> const me = dv.page("Repos/Minireel--HGhub");
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
> const me = dv.page("Repos/Minireel--HGhub");
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

> **2026-11-07** — 首次收錄
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

- [[2026-11-07|2026-11-07]] — 首次收錄，1.8k stars
