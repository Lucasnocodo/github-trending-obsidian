---
repo: mizorewww/x_gift_bot
url: https://github.com/mizorewww/x_gift_bot
owner: mizorewww
owner_type: User
language: Go
license: MIT
description: "X Premium gift CLI and redemption site"
homepage: "xp.kfcv50.today"
stars: 1097
stars_per_day: 183
forks: 348
open_issues: 1
created: 2026-10-02
pushed_at: 2026-10-09
first_seen: 2026-10-08
week: "2026-W41"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-08
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-10-16"
contributor_count: 2
engagement: "high"
issue_close_rate: 100
repo_size_kb: 15214
readme_length: 6384
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-08"
star_history: "2026-10-08:1004,2026-10-09:1097"
tags:
  - github
  - "category/other"
  - "lang/go"
aliases:
  - "x_gift_bot"
  - "mizorewww/x_gift_bot"
---

# x_gift_bot

**1.0k** stars · **201** stars/天 · 建立 5 天前 · Go · MIT

```dataviewjs
const me = dv.page("Repos/mizorewww--x_gift_bot");
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

> [!summary] 一句話摘要
> X Premium gift CLI and redemption site

## 專案簡介

X Premium gift CLI and redemption site

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/mizorewww--x_gift_bot");
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
> const me = dv.page("Repos/mizorewww--x_gift_bot");
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
| Forks | 330 |
| Open Issues | 0 |
| Issue 解決率 | 100% (7 closed) |
| 最後推送 | 2026-10-07 |
| 建立日期 | 2026-10-02 |
| 官方網站 | [Link](xp.kfcv50.today) |
| Repo 大小 | 14.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/mizorewww/x_gift_bot) |

> [!info]- 主要依賴
> `go.mod` 中的核心套件：
> `github.com/mattn/go-sqlite3` `github.com/sagernet/sing` `github.com/sagernet/sing-box` `golang.org/x/crypto` `golang.org/x/term` `filippo.io/edwards25519` `github.com/RyuaNerin/go-krypto` `github.com/ajg/form` `github.com/akutz/memconn` `github.com/alexbrainman/sspi` `github.com/anchore/go-lzo` `github.com/andybalholm/brotli` `github.com/anmitsu/go-shlex` `github.com/anthropics/anthropic-sdk-go` `github.com/anytls/sing-anytls`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Go" : 57
>     "TypeScript" : 36
>     "JavaScript" : 4
>     "Python" : 1
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mizorewww](https://github.com/mizorewww) | 88 |
> | [@codex](https://github.com/codex) | 2 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-07 ~ 2026-10-07）
> **活躍天數** 1 天 · **最新 commit** Create fresh public checkout sessions on explicit regeneration

## README 摘錄

> [!info]- 展開查看原文 README
> # XGift
> 
> X (Twitter) Premium 礼品兑换平台。你生成兑换码发给用户，用户在网页上输入兑换码和自己的 X 用户名，系统自动完成 Premium 赠送的下单与付款。
> 
> - **兑换页**：用户自助兑换，实时显示处理进度
> - **管理后台**：生成/停用兑换码、批次文件夹、统计面板、订单状态
> - **安全**：凭据逐条 AES-256-GCM 加密存储，付款前逐项校验金额与商户，付款确认只提交一次
> 
> ## 截图
> 
> 以下截图来自本地模拟预览（全部为示例数据）：
> 
> | 兑换页 | 管理页（统计概览） |
> |---|---|
> |  |  |
> 
> 管理页深色模式：
> 
> ## 本地预览（不写任何真实配置）
> 
> 想先看看界面？只需要 Node.js 22+：
> 
> ```sh
> npm ci
> npm run build
> npm run preview
> ```
> 
> 打开 http://127.0.0.1:4173 是兑换页，http://127.0.0.1:4173/admin 是管理后台。所有数据都是内存示例，不连接真实服务。在兑换页输入 `XG-` 加 48 个字母 `A` 可以演示完整成功流程。
> 
> ## 部署教程
> 
> ### 第一步：准备这些东西
> 
> 部署前请先准备好以下四样东西，配置向导会逐项询问：
> 
> 1. **X 登录 Cookie**（`auth_token` 和 `ct0`）：在浏览器登录 x.com 后，按 F12 打开开发者工具 → Application（应用）→ Cookies → `https://x.com`，复制这两项的值。这是系统以你的 X 账号身份发起赠送的凭据。
> 2. **用于付款的银行卡（一张或多张）**：卡号、有效期、CVC，以及发卡行登记的持卡人姓名、账单邮箱和账单国家（两位代码，如 `BD`）。多张卡会在服务端加密保存并随机轮换，新卡可复用同一账单资料。请只填真实信息。
> 3. **代理（可选）**：服务器能直接访问 x.com 就选「直连」；否则准备一个代理节点。支持 sing-box 的任意 outbound 类型（anytls、socks、http、shadowsocks、vmess、vless、trojan 等），也可以直接粘贴完整 sing-box 配置。
> 4. **Stripe 公钥**：X 结账页面使用的 `pk_live_` 开头公钥。使用默认 X Premium 目录时向导会说明；它与商户、商品、价格一起保存在「目录」配置中，也可以完全自定义。
> 
> 网络路径独立配置：X 账号与资格检查始终直连；生成付款链接所需的地区报价校验与创建链接使用同一个 `proxy` 出口，避免币种和金额因地区不同而变化；X 请求不读取环境代理；Stripe 可使用包含 `direct` 的 `payment-outbounds` 节点池。连接故障触发 30 分钟冷却，安全查询最多尝试 3 个出口；付款确认不会自动重放。未配置或空数组时，新订单直连。Stripe 不读取环境代理。详见 [付款节点池配置](docs/payment-outbounds.md)。直接在浏览器打开 Stripe 链接时使用浏览器网络。
> 
> 另外需要：一台 Linux 服务器、一个指向该服务器的域名、服务器上安装 Go 1.27+（或在自己电脑上构建后上传二进制）。
> 
> ### 第二步：构建
> 
> ```sh
> git clone https://github.com/mizorewww/x_gift_bot.git
> cd x_gift_bot
> npm ci && npm run build        # 构建前端（只需一次，产物已随仓库提交时可跳过）
> go build -tags with_quic,with_utls -o bin/xgift ./cmd/xgift
> go build -tags with_quic,with_utls -o bin/xgift-web ./cmd/xgift-web
> ```
> 
> ### 第三步：运行配置向导
> 
> ```sh
> ./bin/xgift setup
> ```
> 
> 向导会一步步引导你完成配置，全程有中文提示：
> 
> 1. **密码文件** — 自动生成一个随机密码用于加密保管库，保存在你指定的路径（默认 `sqlite/vault-password`，仅本人可读）。**请务必备份这个文件，丢失后所有加密数据无法恢复。**
> 2. **X 凭据** — 粘贴第一步准备的两个 Cookie。
> 3. **支付卡** — 输入卡信息和账单信息（卡号会自动校验）。想启用多卡轮换，向导完成后用 `xgift cards add` 追加更多卡，缺少的账单字段会自动继承。
> 4. **代理** — 选直连、按提示填 AnyTLS 节点，或粘贴 sing-box 配置；保存前会实际启动验证配置是否有效。
> 5. **Stripe 公钥** — 粘贴 `pk_live_` 公钥。
> 6. **商品目录** — 直接回车使用 X Premium 默认目录（3/6 个月套餐），或自定义商户、币种和套餐。
> 7. **站点配置** — 输入你的域名（如 `https://xp.example.com`），向导会生成 `site.env` 和随机的后台管理员密码（只显示一次，同时保存在文件里）。
> 
> 完成后运行 `./bin/xgift status`，六条记录全部显示 `verified` 即为成功。
> 
> ### 第四步：启动网站
> 
> 把向导生成的 `site.env`、`admin-password`、`vault-password` 放到安全目录（生产建议 `/etc/xgift/`，权限 0600），然后：
> 
> ```sh
> sudo systemctl link $PWD/deploy/xgift.service   # 或直接复制到 /etc/systemd/system/
> # 编辑 deploy/xgift.service 中的路径使其与你的安装位置一致
> sudo systemctl enable --now xgift
> ```
> 
> `site.env` 各字段含义：
> 
> | 字段 | 说明 |
> |---|---|
> | `XGIFT_ORIGIN` | 站点完整域名（`https://` 开头） |
> | `XGIFT_LISTEN` | 监听地址，只能回环，如 `127.0.0.1:8787` |
> | `XGIFT_DATA_DIR` | 数据目录（vault.db、site.db 所在） |
> | `XGIFT_PASSWORD_FILE` | 保管库密码文件路径 |
> | `XGIFT_ADMIN_PASSWORD_FILE` | 后台密码文件路径 |
> | `XGIFT_PAYMENTS_ENABLED` | `true` 开放充值，`false` 暂停（不消耗兑换码） |
> 
> ### 第五步：配置 HTTPS 反向代理
> 
> 程序只监听本机端口，需要 Caddy（或任意反向代理）提供 HTTPS。`deploy/Caddyfile` 是模板，把 `xp.example.com` 替换成你的域名后放到 Caddy 配置目录并 reload 即可。模板默认只放行 Cloudflare 回源 IP，不用 Cloudflare 时删掉 `@cloudflare` 相关段、保留 `reverse_proxy` 即可。
> 
> 验证：
> 
> ```sh
> curl https://你的域名/healthz     # {"ok":true,...} 即成功
> ```
> 
> ### 第六步：开始使用
> 
> 浏览器打开 `https://你的域名/admin`，输入用户名 `admin` 和向导生成的密码：
> 
> 1. 在「生成兑换码」选套餐、数量、批次名，点生成，复制或下载兑换码发给用户。
> 2. 顶部「统计概览」随时查看兑换进度和成功率。
> 3. 用户打开 `https://你的域名`，输入兑换码和 X 用户名即可完成充值。
> 
> ## 日常维护
> 
> ```sh
> ./bin/xgift status              # 检查所有加密记录是否完好
> ./bin/xgift check               # 测试代理能否访问 x.com
> ./bin/xgift import-chrome       # macOS：从本机 Chrome 重新导入 X Cookie（过期时用）
> ```
> 
> 更新配置用 `put`（从标准输入读取新值）：
> 
> ```sh
> ./bin/xgift cards list                                     # 查看卡池和当前轮换组合（只显示尾号）
> echo '{"number":"...","exp_month":"05","exp_year":"2031","cvc":"123"}' | ./bin/xgift cards add
> echo '新的ct0等JSON' | ./bin/xgift put --name cookies      # 还有 card / cards / proxy / api-auth
> echo 'pk_live_新公钥' | ./bin/xgift put --name stripe-key
> echo '{"merchant":"acct_...","currency":"bdt","plans":[...]}' | ./bin/xgift put --name catalog
> ```
> 
> 付款卡按「卡 × 节点」组合随机轮换：每 3 个连续订单使用同一组合；任意订单被拒后立即换组合，被拒的那张卡进入 30 分钟冷却（其他卡继续轮换），补单也走同一逻辑。支付方明确 `do_not_try_again` 时该卡永久封锁直到显式解除。`cards add` 追加或更新（同卡号替换），`cards remove --last4 1234` 移除，`cards rotate` 立即结束当前组合，`cards unblock` 清除冷却与永久封锁。
> 
> ## 常见问题
> 
> **密码文件丢了怎么办？** 无法恢复。加密数据全部作废，需要删除 `vault.db` 后重新运行 `xgift setup`。请把它和数据库一起备份。
> 
> **X Cookie 过期了？** macOS 上用 `./bin/xgift import-chrome` 一键刷新；其他系统重新从浏览器复制后用 `put --name cookies` 更新。
> 
> **想暂停充值？** 把 `site.env` 里 `XGIFT_PAYMENTS_ENABLED` 改为 `false` 并重启服务。用户兑换会被婉拒，兑换码不消耗。
> 
> **付款被拒怎么办？** 明确拒付会显示失败说明并阻止重复提交，不再显示自动核实。网页和 CLI 在同一个 `checkout.lock` 下执行付款，提交间隔至少 30 秒，重启仍保留间隔。付款按「卡 × 节点」组合随机轮换，每 3 个连续订单使用同一组合；普通拒付会立即结束当前组合，并**先冷却该出口节点及其共享 IP（30 分钟）**，同一张卡马上换其他节点继续付款；只有同一张卡在两个不同节点都被拒，才冷却整卡 30 分钟。其他卡继续轮换，下一次提交（含补单）自动换到新的组合，不因连续次数暂停全站。支付端明确返回 `do_not_try_again` 时只永久封锁被拒的那张卡；仅当所有卡都被永久封锁时才暂停全站，可用 `xgift cards unblock` 显式解除（同时清除冷却，不能通过补单确认框解除）。后台补单页会实时显示每张卡的可用/冷却状态和当前组合。该命令不付款，也不会修改 `XGIFT_PAYMENTS_ENABLED`。手动完成原账单后，可查询原订单以核对成功状态。
> 
> **付款结果不明怎么办？** 系统宁可标记「待核实」也不会重复扣款。用户用原兑换码点「重新检查并继续兑换」即可自动核对，确认成功后自动补上状态。
> 
> **升级程序？** 重新构建两个二进制，备份数据目录和密码文件，替换后 `systemctl restart xgift`。不要覆盖线上数据库。
> 
> ## 数据与安全
> 
> - `vault.db`：所有敏感信息（Cookie、卡、代理、订单）逐条 AES-256-GCM 加密，密钥由密码文件派生。没有密码文件谁也读不了。
> - `site.db`：兑换码只存摘要和尾号，不存明文；用户名、状态为明文。请限制文件权限。
> - 所有密钥文件均为 0600（仅本人可读）；后台使用 HTTPS Basic Auth；接口有限流和同源校验。
> 
> ### 管理员手动补单
> 
> 登录 `/admin`，使用「预览并补单」查看所有 `review` 订单、每笔金额和当前轮换卡尾号，勾选确认后点击「确认付款并启动补单」。补单与普通付款共用同一套卡 × 节点轮换逻辑：被拒订单会换到新组合，同一批次的后续订单继续沿用新组合。此操作会发起真实付款，独立于公开充值入口的 `XGIFT_PAYMENTS_ENABLED` 开关；预览、状态查询、部署或服务重启均不会启动付款。预览有效期为 10 分钟，卡池配置或订单内容发生变化时必须重新预览。
> 
> 补单在服务器后台串行执行，订单之间至少等待 30 秒，并保留全局付款间隔。每批每单最多尝试一次；已付款只同步结果，未知付款结果、银行验证、禁止重试指令和不匹配的账单不会重付。有效会话会复用并重新核验商户、客户、套餐、金额及未收款/未授权金额证据。旧会话失效时，管理员必须确认已核对原订单未扣款；系统还要求原始明确拒付、对应的失败查询记录，以及再次通过的账号资格和价格检查，才会归档旧订单并生成新链接。未知付款结果、禁止重试指令不会因该确认而放行。每个原会话最多允许 3 次人工重试。普通拒付不再累计触发全站暂停；支付方明确禁止重试的暂停不能从此按钮解除。
> 
> 「停止后续订单」会让当前订单完成核实后停止。关闭浏览器不影响任务；服务重启会将运行中的任务标记为中断，不会自动恢复扣款。重新预览后，结果不明的原付款仍被排除。任务及历史记录保存在加密 vault 的 `admin-recovery:*`，原付款记录保存在 `manual-previous:*`，核验依据保存在 `manual-preflight:*`，诊断错误保存在 `manual-recovery-error:*`。页面仅显示卡尾号，不接收卡号或安全码。
> 
> 管理页的「按客户查卡密 / 单独补单」支持输入 X 用户名，跨批次读取绑定订单、解密并验证完整卡密，查看当前付款链接。兑换码列表的「查看卡密 / 补单」打开同一详情。历史仅存哈希的卡密不能还原，但单独补单直接使用订单 ID，不依赖卡密明文。
> 
> 「仅生成补单链接」与「单独补单」分别创建 `links` 和 `pay` 模式的预览；前者在服务端不调用卡片令牌化或付款确认接口，付款保护暂停时也不解除保护。两种模式都只处理预览绑定的客户。失效账单替换使用 vault 原子事务保存 `replacement-original:` 审计并安装新订单记录，保留人工未扣款确认、历史失败证据、前一个会话和替换次数。有效未支付链接会直接复用；生成新链接后可以在客户详情查看。服务器重启不会自动继续任务。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]]

[GitHub](https://github.com/mizorewww/x_gift_bot) · [官方網站](xp.kfcv50.today)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "mizorewww--x_gift_bot"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Go" AND file.name != "mizorewww--x_gift_bot" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W41" AND file.name != "mizorewww--x_gift_bot"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/mizorewww--x_gift_bot");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "mizorewww--x_gift_bot" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "mizorewww" AND file.name != "mizorewww--x_gift_bot"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/mizorewww--x_gift_bot");
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
> const me = dv.page("Repos/mizorewww--x_gift_bot");
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
> const me = dv.page("Repos/mizorewww--x_gift_bot");
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
> const me = dv.page("Repos/mizorewww--x_gift_bot");
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
> const me = dv.page("Repos/mizorewww--x_gift_bot");
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

> **2026-10-08** — 首次收錄
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

- [[2026-10-09|2026-10-09]] — 再次上榜，1.1k stars
- [[2026-10-08|2026-10-08]] — 首次收錄，1.0k stars
