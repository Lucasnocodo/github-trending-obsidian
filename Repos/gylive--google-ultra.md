---
repo: gylive/google-ultra
url: https://github.com/gylive/google-ultra
owner: gylive
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 2636
stars_per_day: 659
forks: 84
open_issues: 26
created: 2026-11-17
pushed_at: 2026-11-21
first_seen: 2026-11-18
week: "2026-W47"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-18
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-11-25"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1914
readme_length: 4799
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-18"
star_history: "2026-11-18:2252,2026-11-20:2485,2026-11-21:2552,2026-11-22:2636"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "google-ultra"
  - "gylive/google-ultra"
---

# google-ultra

**2.3k** stars · **2.3k** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/gylive--google-ultra");
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

`個人專案`

> [!summary] 一句話摘要
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/gylive--google-ultra");
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
> const me = dv.page("Repos/gylive--google-ultra");
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
| Forks | 830 |
| Open Issues | 24 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-11-18 |
| 建立日期 | 2026-11-17 |
| Repo 大小 | 1.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/gylive/google-ultra) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `frida`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 94
>     "HTML" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@gylive](https://github.com/gylive) | 24 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-17 ~ 2026-11-18）
> **活躍天數** 2 天 · **最新 commit** docs: 新增 13 群并去掉重复的 7 群

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/gylive/google-ultra/issues/5) | what is this problem  | 6 | 4 |
> | [#2](https://github.com/gylive/google-ultra/issues/2) | Cant access google account | 3 | 0 |
> | [#15](https://github.com/gylive/google-ultra/issues/15) | 这个漏洞似乎已经被镀上了，我尝试在网页版使用但是失败了 | 2 | 0 |
> | [#11](https://github.com/gylive/google-ultra/issues/11) | Thanks | 2 | 0 |
> | [#9](https://github.com/gylive/google-ultra/issues/9) | solutions to stuck at/卡在: "注入计费模块，查询免费试用" 的解决办法 | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # google-ultra
> 
> 简体中文 | [English](README.en.md)
> 
> Google One 的 AI Ultra 有个 12 个月免费试用的 offer，任何页面上都看不到，只存在于 Play 结算库（BillingClient）的返回值里。这个脚本把「查 offer → 拉起 Play 收银台 → 确认 0 元 → 开通」串成了一条命令。
> 
> 原理是借 Google One 自己的进程调 BillingClient，不需要 Xposed，不需要改 APK。
> 
> ## 两个版本
> 
> **简单版**：一个网页，双击 `web/index.html` 打开，登录 → 绑卡 → 点一下，完事。不用装 Python，不用 root，不用数据线。
> 
> **脚本版**：`ultra0.py`，要一台 root 手机和 frida。优点是 offer 从真实客户端取，不依赖浏览器指纹。
> 
> 先试简单版，不行再上脚本。
> 
> ## 能拿到什么
> 
> 拿到的是 **Ultra 5x，20TB，12 个月 $0**，到期前取消就不用付钱。开通后 Play 订阅页会写「即将扣款 2027-11-17 US$99.99/月」，这是试用结束后的价格，不是现在扣。
> 
> 30TB 那档（20x）也查得到 offer，但 Play 结算时会二次校验，大部分号会弹「您不符合免费试用条件」。这个脚本不会去点它。
> 
> ## 需要什么
> 
> 一台 root 过的安卓手机，USB 连着电脑。Magisk、KernelSU、APatch 都行，模拟器也行。
> 
> 电脑上要 Python 3.9 以上，外加两个包：
> 
> ```bash
> pip3 install frida
> ```
> 
> adb 用 Android SDK 里的 platform-tools。装好后 `adb devices` 能看到手机就行。没装过的话，Mac 上 `brew install android-platform-tools`，Windows 去下 platform-tools 压缩包，解压后把目录加进 PATH。
> 
> 手机上要开「开发者选项 → USB 调试」，插上后在弹窗里点允许。
> 
> ## 用法
> 
> ### 简单版怎么用
> 
> 源码在 `web/index.html`，单文件，下载后双击就能用，浏览器会打开一个页面：
> 
> 1. 点「去登录」，用要开的谷歌账号登进去
> 2. 点「去绑卡」，绑一张卡，卡里留 1 美元就行，试用期间不扣
> 3. 回页面，点「Ultra 20 TB」那张卡片
> 
> 跳到 Google 的结算页之后，确认金额是 0，点订阅即可。
> 
> 不想下仓库的话，也可以直接访问在线版：https://gylive.github.io/google-ultra/web/
> 
> ### 脚本版怎么用
> 
> 先自检一遍环境，它会检查设备、root、frida-server、推送计费模块，还会顺手关掉会拦截 Play 网络的代理和 Clash：
> 
> ```bash
> python3 ultra0.py --check
> ```
> 
> 全绿就可以跑号了。
> 
> 账号写成一个文本文件，一行一个，字段用四个短横线隔开：
> 
> ```
> 邮箱----密码----辅助邮箱----2FA密钥----卡号----有效期----CVC----持卡人----邮编
> ```
> 
> 后面几项留空也行。刚买的新号一般没有 2FA，那就留空：
> 
> ```
> abc123@gmail.com----mypassword----
> ```
> 
> 带卡的话：
> 
> ```
> abc123@gmail.com----mypassword--------4242424242424242----10/29----326----ZHANG SAN----97201
> ```
> 
> 地址不填会默认用 `123 Main St, Portland, OR 97201`，俄勒冈免消费税。
> 
> 跑：
> 
> ```bash
> python3 ultra0.py accounts.txt
> ```
> 
> 单个号也可以：
> 
> ```bash
> python3 ultra0.py --account "abc@gmail.com:密码:2FA密钥"
> ```
> 
> 想看结果，开订阅页确认一下：
> 
> ```
> Play 商店 → 头像 → 付款和订阅 → 订阅
> ```
> 
> ## 它内部干了什么
> 
> 1. 把账号加到手机（没有就加，有就跳过）
> 2. 切 Play 账号。切完一定从头像面板读回来核对，对不上直接退出，不会跑到别的号上
> 3. 启动 Google One，用 Frida 挂进去，`DexClassLoader` 加载计费模块
> 4. `queryProductDetailsAsync` 查 `g1.play.20tb`，拿回 5 个 offer
> 5. 挑免费期最长的那个（`eft-12month`，P1Y），在主线程调 `launchBillingFlow`
> 6. 盯着收银台。看到价格是 0 或者「免费试用 12 个月」才点订阅；看到「不符合免费试用条件」就关掉，绝不点
> 7. Play 有时会要求重新输密码，脚本自己填
> 8. 打开订阅页核对，结果写进 `ultra0-report/`
> 
> ## 失败的时候是什么情况
> 
> **账号不符合资格。** Play 会说「您不符合免费试用条件，尽管如此，您仍能订阅」。一个号基本只有一次机会：试用一旦发起过，哪怕没确认，offer 也会消失。所以别拿主力号试。
> 
> **没有付款方式。** 订阅必须有卡。Play 的加卡页是 WebView，adb 填不进去，脚本会停下来提示你在手机上填完再按回车。每台设备手动绑一次，之后所有号共用这张卡。
> 
> **Play 账号没切过来。** 脚本会打印当前实际登录的是哪个号，然后退出。这时手动在 Play 里切一下，加上 `--no-switch` 重跑，让它只做校验不再尝试切换：
> 
> ```bash
> python3 ultra0.py accounts.txt --no-switch
> ```
> 
> **收银台没弹出来。** 重跑一次。连续两次都不弹，检查一下设备的网络：`settings get global http_proxy`，不是 `null` 就清掉；Clash 这类 VPN 会劫持 DNS，也会让 Play 连不上。
> 
> ## 一些参数
> 
> ```bash
> --plan 5x      # 只开 20TB
> --plan 20x     # 只查 30TB（多数号拿不到试用）
> --plan auto    # 默认，两档都查，挑免费期最长的
> --no-add       # 账号已经在手机上，跳过加号
> --no-switch    # 不自动切账号，只校验当前账号
> ```
> 
> ## 几个说明
> 
> 试完之后记得去 Play 里取消订阅，不然到期会扣 $99.99。
> 
> 脚本只在本地跑，账号密码和卡号不联网，也不上传任何地方。报告文件在 `ultra0-report/`，里面有 offer 明细和每步结果。
> 
> 这段代码只对 Play 结算流程里「客户端能拿到试用 offer」这件事做了利用，没有改任何服务端数据。
> 
> ## 交流
> 
> 技术讨论群，随便进一个。**进群前先看[群规则](RULES.md)：禁止一切广告，违者移出。**
> 
> 2 群
> 3 群
> 4 群
> 
> 5 群
> 6 群
> 7 群
> 
> 8 群
> 9 群
> 10 群
> 
> 11 群
> 12 群
> 13 群
> 
> ## 友链
> 
> 本项目在 [LINUX DO](https://linux.do) 社区发布与讨论，感谢社区的支持。
> 
> - [LINUX DO](https://linux.do) —— 新的理想主义者社区
> - [LINUX DO 开源推广](https://linux.do/tag/1014) —— 开源项目推广板块
> 
> [](https://linux.do)
> 
> ## 仓库结构
> 
> ```
> web/index.html      简单版：单文件网页，在线版就是它
> simple/ultra.py     脚本版极简实现（带内嵌模块）
> simple/README.md    脚本版教程
> ultra0.py           脚本版完整实现（批量、选档、切号）
> assets/             群二维码
> ```
> 
> 在线版地址：https://gylive.github.io/google-ultra/web/
> 
> ## 免责声明与使用条款
> 
> **性质。** 本仓库是一份安全研究与接口分析记录，内容是 Google Play Billing 在客户端侧的接口行为，以及一个用于验证该行为的概念验证（PoC）脚本。仓库里没有提供服务，也没有任何商品。
> 
> **与 Google 无关。** 本项目由个人维护，与 Google LLC 及其关联公司没有任何关系，未获其授权、认可或赞助。Google、Google One、Google Play、Gemini 等名称与标识归 Google LLC 所有，此处仅作描述性引用。
> 
> **你可能面临的风险。** 使用本仓库的代码可能违反 Google 服务条款，导致账号被限制或封禁；也可能违反你所在地区的法律或相关规定。是否使用、如何使用、使用后产生什么结果，全部由你自行判断并承担。作者不提供法律意见，也不对你的行为负责。
> 
> **不做的事。** 本仓库不提供账号、不代开订阅、不售卖支付方式，不接受任何形式的付费委托，也不构成对上述行为的教唆或诱导。
> 
> **仅供学习研究。** 本仓库仅用于安全研究、接口行为分析与技术交流，不得用于任何商业、牟利、批量或规模化用途。任何人将其用于上述用途，均与作者无关，责任自负。
> 
> **禁止代开、收费与批量。** 严禁利用本仓库进行有偿代开、转卖订阅或开通资格、批量注册养号、接单牟利，以及使用他人的账号或支付工具。此类行为可能构成违法甚至犯罪，由行为人独立承担全部法律责任，作者明确反对并不提供任何协助。
> 
> **数据与隐私。** 本项目网页版在你本地浏览器内运行，脚本版在你本地设备运行，全程只与 Google 官方域名通信，不向作者或任何第三方服务器发送、也不收集或存储你的谷歌账号、密码、辅助邮箱、2FA 或银行卡信息。请只使用你本人、你有权使用的账号与支付方式；因填入他人信息造成的后果由使用者承担。
> 
> **未成年人。** 本仓库不面向未成年人，未满当地法定完全民事行为能力年龄者请勿使用。
> 
> **地域合规。** 不同国家和地区对薅取平台优惠、绕过结算校验的行为法律评价不同。你有义务自行确认在你所在地使用本项目是否合法合规；作者不对任何特定司法辖区的合法性作出保证。
> 
> **随时下架。** 作者保留随时修改、归档或删除本仓库全部内容的权利，不另行通知，也不保证任何接口、offer 或功能在未来仍然有效。
> 
> **责任限制。** 代码按 MIT 协议「原样」提供，不含任何明示或默示担保，包括适销性、特定用途适用性和不侵权。在任何情况下，作者均不对因使用或无法使用本项目而产生的任何直接、间接、附带、特殊或后果性损失承担责任，包括但不限于账号损失、费用支出、数据丢失或利润损失。你使用本项目的唯一补救措施是停止使用。
> 
> **权利人通知。** 如权利人或其代表认为本仓库内容侵犯权益，请通过仓库 Issue 或下列方式联系，核实后将配合删除相关内容或整个仓库。
> 
> **未同意即勿使用。** 如果你不同意上述任何一条，请立即停止使用并删除本仓库的副本。
> 
> ## 许可
> 
> MIT，见 [LICENSE](LICENSE)。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/gylive/google-ultra)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "gylive--google-ultra"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "gylive--google-ultra" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W47" AND file.name != "gylive--google-ultra"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/gylive--google-ultra");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "gylive--google-ultra" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "gylive" AND file.name != "gylive--google-ultra"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/gylive--google-ultra");
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
> const me = dv.page("Repos/gylive--google-ultra");
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
> const me = dv.page("Repos/gylive--google-ultra");
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
> const me = dv.page("Repos/gylive--google-ultra");
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
> const me = dv.page("Repos/gylive--google-ultra");
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

> **2026-11-18** — 首次收錄
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

- [[2026-11-22|2026-11-22]] — 再次上榜，2.6k stars
- [[2026-11-21|2026-11-21]] — 再次上榜，2.6k stars
- [[2026-11-20|2026-11-20]] — 再次上榜，2.5k stars
- [[2026-11-18|2026-11-18]] — 首次收錄，2.3k stars
