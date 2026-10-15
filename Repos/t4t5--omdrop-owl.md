---
repo: t4t5/omdrop-owl
url: https://github.com/t4t5/omdrop-owl
owner: t4t5
owner_type: User
language: Shell
license: N/A
description: "airdrop for non-apple devices"
homepage: ""
stars: 2691
stars_per_day: 449
forks: 208
open_issues: 22
created: 2026-10-08
pushed_at: 2026-10-14
first_seen: 2026-10-14
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.1.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-14
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-10-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 15
repo_size_kb: 126
readme_length: 7900
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-14"
star_history: "2026-10-14:2607,2026-10-15:2691"
tags:
  - github
  - "category/other"
  - "lang/shell"
  - "topic/airdrop"
  - "topic/awdl"
  - "topic/omarchy"
  - "topic/owl"
aliases:
  - "omdrop-owl"
  - "t4t5/omdrop-owl"
---

# omdrop-owl

**2.6k** stars · **521** stars/天 · 建立 5 天前 · Shell · 未標註授權

```dataviewjs
const me = dv.page("Repos/t4t5--omdrop-owl");
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

`v0.1.1`

`airdrop` `awdl` `omarchy` `owl`

> [!summary] 一句話摘要
> airdrop for non-apple devices

## 專案簡介

airdrop for non-apple devices

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/t4t5--omdrop-owl");
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
> const me = dv.page("Repos/t4t5--omdrop-owl");
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
| Forks | 198 |
| Open Issues | 23 |
| Issue 解決率 | 15% (4 closed) |
| 最後推送 | 2026-10-13 |
| 建立日期 | 2026-10-08 |
| Repo 大小 | 126 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/t4t5/omdrop-owl) |
| Topics | `airdrop` `awdl` `omarchy` `owl` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Shell" : 79
>     "Python" : 13
>     "C" : 7
>     "Just" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@t4t5](https://github.com/t4t5) | 29 |
> | [@g4bri3lDev](https://github.com/g4bri3lDev) | 3 |
> | [@benthecarman](https://github.com/benthecarman) | 3 |
> | [@wuharu999](https://github.com/wuharu999) | 1 |
> | [@zigmoo](https://github.com/zigmoo) | 1 |

**最新版本**：v0.1.1 — 0.1.1 (2026-10-13)

> [!info]- Release Notes
> ## What's Changed
> * Record Intel AX200 working in exclusive mode by @t4t5 in https://github.com/t4t5/omdrop-owl/pull/25
> * Add a profile for the Realtek RTL8822BE (rtw88_8822be), exclusive mode by @g4bri3lDev in https://github.com/t4t5/omdrop-owl/pull/35
> * Stop the window when the monitor interface disappears by @g4bri3lDev in https://github.com/t4t5/omdrop-owl/pull/29
> * Warn in test-card.sh when NetworkManager would manage OWL's interfaces by @g4bri3lDev in https://github.com/t4t5/omdrop-owl/pull/28
> * Record Intel AX211 (8086:7a70) working on Omarchy by @Toddpe in https://github.com/t4t5/omdrop-owl/pull/15
> * Add Fedora RPM packaging and hardware-free unit tests (rebased #8) by @Unatxete in https://github.com/t4t5/omdrop-owl/pull/32
> * Accept short zero padding in AWDL discovery action frames by @zigmoo in https://github.com/t4t5/omdrop-owl/pull/7
> * docs: report RTL8852CE shared-mode success on Legion Slim 5 by @vleeuwenmenno in https://github.com/t4t5/omdrop-owl/pull/37
> * Report RTL8852AE shared-mode transfers with recovery caveats by @wuharu999 in https://github.com/t4t5/omdrop-owl/pull/39
> 
> ## New Contributors
> * @g4bri3lDev made their first contribution in https://github.com/t4t5/omdrop-owl/pull/35
> * @Toddpe made their first contribution in https://github.com/t4t5/omdrop-owl/pull/15
> * @Unatxete made their first contribution in https://github.com/t4t5/omdrop-owl/pull/32
> * @zigmoo made their first contribution in https://github.com/t4t5/omdrop-owl/pull/7
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-13 ~ 2026-10-13）
> **活躍天數** 1 天 · **最新 commit** Release 0.1.1

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#27](https://github.com/t4t5/omdrop-owl/issues/27) | Proposal: Windows backend using an external ESP32 AWDL radio | 1 | 0 |
> | [#45](https://github.com/t4t5/omdrop-owl/issues/45) | Qualcomm WCN6855 (QCNFA765, ath11k_pci): mon0 creation fails | 0 | 0 |
> | [#44](https://github.com/t4t5/omdrop-owl/issues/44) | MT7927 (mt7925e): phone never heard in shared mode; exclusiv | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # omdrop-owl
> 
> https://github.com/user-attachments/assets/b195ce4c-e078-49be-bc13-44a72b6dc189
> 
> AirDrop between iPhones and Linux laptops whose Wi-Fi isn't Apple's Broadcom
> chip. Pairs with [omdrop](https://github.com/brentkearney/omdrop-plugin).
> 
> See [supported hardware](#supported-hardware).
> 
> ## Install
> 
> Install this package (omdrop-owl) first, then [omdrop](https://github.com/brentkearney/omdrop-plugin).
> 
> On Arch/Omarchy ([AUR](https://aur.archlinux.org/packages/omdrop-owl)):
> 
> ```sh
> yay -S omdrop-owl
> ```
> 
> On Debian or Ubuntu (from source)
> 
> ```sh
> sudo apt install build-essential cmake git pkg-config dpkg-dev \
>   libev-dev libpcap-dev libnl-3-dev libnl-genl-3-dev
> tools/build-deb.sh
> sudo apt install ./omdrop-owl_*.deb
> ```
> 
> This builds OWL at the commit pinned in `pins`, with `patches/`,
> and installs it root-owned into `/usr/lib/omdrop` together with
> `omdrop-discoverable` and omdrop-awdl's portable tools, a polkit policy for the
> helper, and a NetworkManager rule keeping `awdl0`, `mon0` and `awdlibss0`
> unmanaged. It conflicts with `brcmfmac-awdl-dkms`: one radio backend at a time.
> 
> On Fedora (from source)
> 
> ```sh
> sudo dnf install rpm-build cmake gcc gcc-c++ make git libev-devel libpcap-devel libnl3-devel
> tools/build-rpm.sh
> sudo dnf install ./omdrop-owl-*.rpm
> ```
> 
> This builds the same files as the Debian package into an `.rpm` (Fedora package names;
> other rpm-based distros would rename them). `sudo dnf remove omdrop-owl` removes them all.
> 
> Then install omdrop (0.16.0 or newer):
> 
> ```sh
> omarchy plugin add https://github.com/brentkearney/omdrop-plugin.git
> ```
> 
> and turn it on from the bar.
> 
> ## Supported hardware
> 
> - **Shared** mode = Wi-Fi stays connected
> - **Exclusive** mode = Wi-Fi is *off* while the machine is visible (see [why](#exclusive-mode))
> 
> | Card | Driver | Status | Tested on |
> |---|---|---|---|
> | MediaTek MT7925 | `mt7925e` | ✅ Shared | Framework 13, `14c3:0717`, Omarchy 4.0.4 (kernel 7.2.5) |
> | Realtek RTL8852CE | `rtw89_8852ce` | ✅ Shared (opt-in) | Legion Slim 5 16AHP9, `10ec:c852`, Omarchy 4.0.4 (kernel 7.2.5) |
> | Realtek RTL8852AE | `rtw89_8852ae` | ✅ Shared (opt-in) | ThinkPad P14s Gen 2a, `10ec:8852`, Ubuntu 26.04.1 (kernel 7.0) |
> | Intel AX200 | `iwlwifi` | ✅ Exclusive | ThinkPad X1 Yoga, `8086:2723`, NixOS 26.05 (kernel 6.19.8) |
> | Intel AX201 | `iwlwifi` | ✅ Exclusive | • Ubuntu 24.04 (kernel 6.8)• CachyOS (kernel 7.2.9) |
> | Intel AX211 | `iwlwifi` | ✅ Exclusive | • ThinkPad X1, `8086:51f1`, Ubuntu 26.04 (kernel 7.0)• XPS 9320, `8086:51f0`, Arch (kernel 7.2.3)• Legion Pro 7 16IRX8H, `8086:7a70`, Omarchy 4.0.4 (kernel 7.2.3) |
> | Intel BE (Panther Lake) | `iwlwifi` | ✅ Exclusive | XPS 16, `8086:e440`, Arch (kernel 7.2) |
> | Realtek RTL8822BE | `rtw88_8822be` | ✅ Exclusive; shared untested | Crosshair VII Hero, `10ec:b822`, NixOS 26.11 (kernel 7.2.9) |
> | MediaTek MT7921 | `mt7921e` | ❌ Exclusive ([#14](https://github.com/t4t5/omdrop-owl/issues/14)); shared untested | `14c3:7961`, CachyOS (kernel 7.2.9) |
> | Intel AX210 | `iwlwifi` | ❓ Exclusive untested | — |
> | Intel BE200 | `iwlwifi` | ❓ Exclusive untested | — |
> | Intel 9260 / 9560 | `iwlwifi` | ❓ Exclusive untested | — |
> | MediaTek MT7922 (RZ616) | `mt7921e` | ❓ Untested (opt-in) | — |
> | Qualcomm WCN6855 (QCNFA765) | `ath11k_pci` | ❓ Untested (opt-in) | — |
> | Qualcomm WCN7850 (FastConnect 7800) | `ath12k` | ❓ Untested (opt-in) | — |
> | Realtek RTL8852BE | `rtw89_8852be` | ❓ Untested (opt-in) | — |
> | MediaTek MT7612U (USB) | `mt76x2u` | ❓ Untested (opt-in), in progress in [#13](https://github.com/t4t5/omdrop-owl/pull/13) | — |
> 
> - ✅ means both directions work
> - ❌ means that the mode was tried and fails.
> 
> One card name can cover chips that behave differently, so a report from a machine, PCI ID
> (`lspci -nn`) or kernel not listed here helps too.
> 
> ### Adding your card
> 
> What omdrop-owl does on each Wi-Fi driver comes from
> [`userspace/owl-profiles`](userspace/owl-profiles), one line per driver, so the
> `iwlwifi` line covers every Intel card. A driver with
> no line falls back to the `*` line, which only runs once you opt in with
> `echo 1 | sudo tee /etc/omdrop/allow-untested`.
> 
> Cards that can inject frames from a monitor interface while connected to Wi-Fi
> are the likely candidates. Most mac80211 drivers can, but how they behave
> around it varies, which is what the profile records.
> 
> 1. Find your driver: `basename $(readlink /sys/class/net//device/driver)`.
>    Put your AP on channel 6, 44 or 149.
> 2. Opt in (`/etc/omdrop/allow-untested`), and copy the `*` line to
>    `/etc/omdrop/owl-profiles` with your driver's name. That file is read before
>    the packaged table, so you can change settings without rebuilding.
> 3. Run `sudo tools/test-card.sh`. It walks you through a photo each way,
>    watches Wi-Fi for five minutes after teardown, and writes a report.
> 4. To see if your card needs `reconnect yes`, run it again after
>    `echo 0 | sudo tee /etc/omdrop/reconnect-after`. If Wi-Fi stops after
>    teardown, it does (reload the driver to recover). Delete the file after.
> 5. If something fails, try the other `mon_mac` setting.
> 6. Open a pull request adding your line to `userspace/owl-profiles`, and paste
>    the report's `summary.txt`. The other files include your router's MAC.
> 
> Cards that can't inject while connected can try `mode exclusive`, which takes
> Wi-Fi away for the window.
> 
> ## How it works
> 
> AWDL (the Wi-Fi link AirDrop runs over) is provided by [jedbillyb's OWL fork](https://github.com/jedbillyb/owl).
> omdrop's receiver and sender run over
> it unchanged. Discovery and transfer tools are reused from omdrop-awdl,
> fetched at a pinned commit by `tools/stage.sh`.
> 
> ### Shared mode
> 
> Wi-Fi stays connected on channel **6, 44 or 149**. OWL injects frames through
> a monitor interface using the station's MAC, and advertises only the phone's
> slots on that channel (`-S intersect`). On the MT7925, the station handles
> ACKs. OWL exposes `awdl0` for omdrop's receiver and AirDrop announcements.
> 
> ### Exclusive mode
> 
> No Intel card tested works in shared mode, so `iwlwifi` disconnects Wi-Fi
> while the machine is visible and restores it on `stop`.
> 
> - An ad-hoc (IBSS) interface joins AWDL's BSSID to handle ACKs. Some AX211s
>   need the Wi-Fi interface itself repurposed for this.
> - The cell uses HT20 on channel 6 because the tested Intel cards reject
>   5 GHz IBSS. Beacons every 10 seconds fix discovery after an iPhone restart.
> - OWL injects through a monitor interface, advertises our channel in all
>   16 slots (`-S pin`), and elects its sync master by metric (`-E`). Unicast
>   frames are sent once to avoid retries stalling the queue.
> 
> ## Development
> 
> The unit tests (no radio, no root, no network) run with `tools/run-tests.sh`
> and need [`bats`](https://github.com/bats-core/bats-core) and Python. The OWL
> A-MSDU test skips until `just build` has patched OWL.
> 
> `just build` assembles the same files in `build/lib`, and `just test` runs the
> card test against them. On Arch, `makepkg -si` (or `just install`) builds and
> installs the pacman package from the checkout.
> 
> Without the package, copy `packaging/99-omdrop-owl-unmanaged.conf` to
> `/etc/NetworkManager/conf.d/` and run `sudo nmcli general reload conf`, or
> NetworkManager manages OWL's interfaces and the phone never shows up.
> 
> ## Known issues
> 
> - **Shared mode needs your AP on channel 6, 44 or 149.** On any other channel,
>   `start` refuses and says so.
> - **The MT7925 drops off Wi-Fi when the monitor interface is removed** (an
>   mt76/firmware bug), so `stop` reconnects Wi-Fi straight after.
> - **The MT7925 sends slower than it receives** (about 490 kB/s against
>   1.3 MB/s): injected frames leave at most one every ~2.5 ms.
> - **UFW blocks the receiver**, so the phone never sees this machine. Run
>   `omdrop firewall install` to allow TCP 8771 from link-local addresses on
>   `awdl0`.
> - **Intel cards are slow**, since AWDL on channel 6 gets few of the iPhone's
>   slots: a 2.4 MB photo takes 10–17 s on an AX201.

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/t4t5/omdrop-owl)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "t4t5--omdrop-owl"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Shell" AND file.name != "t4t5--omdrop-owl" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "t4t5--omdrop-owl"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/t4t5--omdrop-owl");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "t4t5--omdrop-owl" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "t4t5" AND file.name != "t4t5--omdrop-owl"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/t4t5--omdrop-owl");
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
> const me = dv.page("Repos/t4t5--omdrop-owl");
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
> const me = dv.page("Repos/t4t5--omdrop-owl");
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
> const me = dv.page("Repos/t4t5--omdrop-owl");
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
> const me = dv.page("Repos/t4t5--omdrop-owl");
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

> **2026-10-14** — 首次收錄
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

- [[2026-10-15|2026-10-15]] — 再次上榜，2.7k stars
- [[2026-10-14|2026-10-14]] — 首次收錄，2.6k stars
