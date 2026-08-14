---
repo: xoreaxeaxeax/skitter-creek-bath-salts
url: https://github.com/xoreaxeaxeax/skitter-creek-bath-salts
owner: xoreaxeaxeax
owner_type: User
language: C
license: MIT
description: "Unlocking _everything_ on the CPU with DRAM scrambling"
homepage: ""
stars: 1073
stars_per_day: 1073
forks: 106
open_issues: 0
created: 2026-08-13
pushed_at: 2026-08-13
first_seen: 2026-08-14
week: "2026-W33"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-14
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-17"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 3855
readme_length: 9549
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-14"
star_history: "2026-08-14:1073"
tags:
  - github
  - "category/other"
  - "lang/c"
aliases:
  - "skitter-creek-bath-salts"
  - "xoreaxeaxeax/skitter-creek-bath-salts"
---

# skitter-creek-bath-salts

**1.1k** stars · **1.1k** stars/天 · 建立 1 天前 · C · MIT

```dataviewjs
const me = dv.page("Repos/xoreaxeaxeax--skitter-creek-bath-salts");
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
> Unlocking _everything_ on the CPU with DRAM scrambling

## 專案簡介

Unlocking _everything_ on the CPU with DRAM scrambling

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/xoreaxeaxeax--skitter-creek-bath-salts");
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
> const me = dv.page("Repos/xoreaxeaxeax--skitter-creek-bath-salts");
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
| Forks | 106 |
| Open Issues | 0 |
| 最後推送 | 2026-08-13 |
| 建立日期 | 2026-08-13 |
| Repo 大小 | 3.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/xoreaxeaxeax/skitter-creek-bath-salts) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 61
>     "Python" : 38
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xoreaxeaxeax](https://github.com/xoreaxeaxeax) | 2 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-13 ~ 2026-08-13）
> **活躍天數** 1 天 · **最新 commit** unspaghettify the readme prose

## README 摘錄

> [!info]- 展開查看原文 README
> # skitter-creek-bath-salts
> 
> > *Unlocking **everything** on the CPU with DRAM scrambling — PSP, C6, microcode,
> > SMM, and anything else the specs left out.*
> 
> `&x == &x`.
> 
> Usually.
> 
> Poke the DRAM controller and an address can be made to land wherever you want in
> memory. `skitter-creek-bath-salts` modifies the bottom layers of the memory
> hierarchy to rewire the physical DRAM address translations. This scrambles
> platform memory, exposing protected regions of DRAM — carveouts invisible even
> to the kernel. When the address translations break, so do the security
> primitives built on them, and we unlock *everything*.
> 
> ---
> 
> 
> ## Quick start: unlock your Platform Security Processor
> 
> > *Tamper with your PSP, see what happens.*
> 
> The fTPM runs on the PSP's own ARM core, in a DRAM carveout right past the
> visible top-of-memory. Reach it by aliasing an OS-visible physical address
> onto it, pull the bytes out, disassemble.
> 
> ```sh
> 
> ## Quick start: unlock System Management Mode
> 
> > *Read what SMM hides.*
> 
> The SMI handler entry vector lives at `SMBASE + 0x8000`. `SMBASE` is in
> MSR `0xc0010111`. Read it, pull the bytes through the alias map, and pipe
> them straight into a disassembler:
> 
> ```sh
> 
> ## Quick start: unlock C6 DRAM
> 
> > *I have no idea what's in here and have never seen it discussed, likely
> > internal CPU registers. Have fun.*
> 
> When the cores power-gate into C6, each one's full x86 architectural context is
> stashed here for restore.
> 
> ```sh
> ./userspace/platform_check || exit 1
> 
> 
> # For example, on this platform IA32_APIC_BASE sits at +0x9b8 in each area.
> 
> ## TL;DR
> 
> - [Unlock your Platform Security Processor](#quick-start-unlock-your-platform-security-processor)
> - [Unlock System Management Mode](#quick-start-unlock-system-management-mode)
> - [Unlock C6 DRAM](#quick-start-unlock-cc6-dram)
> - [Unlock your CPU microcode](#quick-start-unlock-your-cpu-microcode)
> 
> ---
> 
> 
> ## Target
> 
> Developed and tested on **AMD Family 16h CPUs**, the last generation whose
> datasheets document the DRAM controller's translation registers — and show that
> they can't be locked. 17h and beyond simply leave this information out. The
> [odyssey of `*p`](#the-odyssey-of-p) is similar across generations and
> architectures, and the underlying transforms extend even to ARM, RISC-V, and
> beyond; `skitter-creek-bath-salts` shows us [**only how to begin**](#the-shared-pipeline).
> 
> ---
> 
> 
> # Bail out early on platforms this was never tested on.
> ./userspace/platform_check || exit 1
> 
> 
> # Resolve the PSP DRAM carveout — sets PSP_BASE / PSP_SIZE (0x7f800000 /
> 
> # 0x800000 on the test box). Swap 2x4gb for whichever data/maps/ prefix
> 
> # matches your DIMMs; one --map per saved map.
> eval "$(sudo ./userspace/dram_carveouts --region psp)"
> sudo ./userspace/dram_dump --protected-pa $PSP_BASE --length $PSP_SIZE \
>     $(printf -- '--map %s ' data/maps/2x4gb_*.map) > psp.bin
> 
> 
> # The PSP is an ARM core, so disassemble as Thumb-2. Carve crAmd_ModExp
> 
> # (0x64 bytes at PSP_BASE+0x19d4) straight out of the captured image.
> objdump -b binary -m armv7 -M force-thumb --adjust-vma=$PSP_BASE \
>     --start-address=$((PSP_BASE + 0x19d4)) \
>     --stop-address=$((PSP_BASE + 0x19d4 + 0x64)) \
>     -D psp.bin
> ```
> 
> ```armasm
> ; crAmd_ModExp — the fTPM's RSA modular-exponentiation routine, recovered intact
> ; from the PSP's private DRAM.
> 7f8019d4:  b5f0       push  {r4, r5, r6, r7, lr}
> 7f8019d6:  b0e5       sub   sp, #404
> 7f8019de:  2280       movs  r2, #128                  ; 1024-bit operand
> 7f8019e4:  f7fe ffef  bl    0x7f8009c6                ; import base (aA)
> 7f8019ee:  a0eb       adr   r0, 0x7f801d9c            ; "crAmd_ModExp aA failed, status = 0x%x"
> 7f8019f8:  f7fe ffe5  bl    0x7f8009c6                ; import exponent (aB)
> 7f801a02:  a0f0       adr   r0, 0x7f801dc4            ; "crAmd_ModExp aB failed status = 0x%x"
> 7f801a18:  f000 fdd4  bl    0x7f8025c4                ; the modexp itself
> 7f801a20:  a0f2       adr   r0, 0x7f801dec            ; "crAmd_ModExp failed ret=0x%08x, exit"
> 7f801a22:  f000 fef5  bl    0x7f802810                ; log error
> 7f801a2e:  f001 e92a  blx   0x7f802c84                ; export result
> 7f801a36:  bdf0       pop   {r4, r5, r6, r7, pc}
> ```
> 
> That's the PSP's RSA engine — the modexp behind every fTPM signature, and behind
> the Miller-Rabin tests that mint its keys — lifted out of memory the PSP is
> supposed to own alone, fenced off at the memory controller, opaque even to
> ring-0. Modify as you see fit.
> 
> ---
> 
> 
> # Bail out early on platforms this was never tested on.
> ./userspace/platform_check || exit 1
> 
> sudo modprobe msr
> 
> 
> # SMBASE is per-core; core 0's lives in MSR 0xc0010111.
> SMM_BASE=0x$(sudo rdmsr -p 0 0xc0010111)
> SMI_ENTRY=$(( SMM_BASE + 0x8000 ))
> 
> 
> # Dump the entry vector through the alias map and disassemble on the fly.
> 
> # SMM starts in real mode, so ndisasm gets -b 16. One --map per saved map;
> 
> # printf expands the glob into a --map for each (at_swizzle, at_bankswap) combo.
> sudo ./userspace/dram_dump --protected-pa $SMI_ENTRY --length 0x40 \
>     $(printf -- '--map %s ' data/maps/2x4gb_*.map) | ndisasm -b 16 -
> ```
> 
> ```nasm
> ; SMI entry stub — the first thing a core executes when entering the
> ; ultra-privileged System Management Mode.
> mov si,0x8148           ; SI -> GDT pointer parked at SMBASE+0x8148, just past this stub
> o32 lgdt [cs:si]        ; load it (o32 -> full 32-bit base, not real mode's 24-bit form)
> mov eax,0x3             ; CR0.PE | CR0.MP
> mov cr0,eax             ; flip the core into protected mode
> jmp short 0x14          ; near jump to serialize and flush the prefetch queue post-switch
> mov ax,0x18             ; GDT selector 0x18 -> flat data segment
> mov ss,ax               ; reload SS for protected mode
> mov eax,0x6efe2ff8      ; SMM stack top
> mov esp,eax             ; install the SMM stack
> o32 push byte +0x10     ; far-return frame: CS = code selector 0x10
> mov ecx,0xc0010111      ; MSR SMM_BASE
> rdmsr                   ; EAX = this core's SMBASE
> mov ebx,eax             ; stash SMBASE
> add eax,0x803a          ; EAX = SMBASE+0x803a, the 32-bit handler entry
> push eax                ; far-return frame: EIP = SMBASE+0x803a
> retfd                   ; far-return into 0x10:SMBASE+0x803a — the SMI handler proper
> ```
> 
> Those instructions run in ring -2, the most privileged context on the CPU,
> out of memory the chipset is supposed to make unreadable. SMRAM "locked"
> turns out to be a polite suggestion when we can talk to the DRAM controller
> directly.
> 
> Swap `2x4gb` for whichever prefix in `data/maps/` matches your installed
> DIMMs (`sudo dmidecode -t memory`). If your topology isn't there, run
> `analysis/gather_aliases.py` then `analysis/unspaghettify.py` to bake
> your own.
> 
> ---
> 
> 
> # Resolve the C6 stash — sets CC6_BASE / CC6_SIZE (0x7f000000 / 0x800000 on the
> 
> # test box). Each idle core's state lives in a 16 KiB save area; four cores
> 
> # here, at CC6_BASE + {0, 0x4000, 0x8000, 0xc000}.
> eval "$(sudo ./userspace/dram_carveouts --region cc6)"
> sudo ./userspace/dram_dump --protected-pa $CC6_BASE --length 0x10000 \
>     $(printf -- '--map %s ' data/maps/2x4gb_*.map) > cc6.bin
> 
> 
> # Read it from all four cores straight out of the stash:
> for c in 0 1 2 3; do
>     printf 'core %d  ' $c
>     hexdump -C -s $(( c*0x4000 + 0x9b8 )) -n 8 cc6.bin | head -1
> done
> ```
> 
> ```text
> core 0  000009b8  00 09 e0 fe 00 00 00 00  |........|    *What could go wrong?*
> 
> When a core drops into C6 its microcode patch RAM — volatile SRAM — goes dark with
> the rest of the core. So the C6 stash keeps the loaded patch in DRAM and re-seeds
> it on wake. That copy sits at `+0x1800` in each save area, and the alias reaches
> it like any other byte.
> 
> Grab the microcode copy the CPU stashed in fenced DRAM:
> 
> ```sh
> ./userspace/platform_check || exit 1
> eval "$(sudo ./userspace/dram_carveouts --region cc6)"
> 
> 
> # page 1 of core 0's save area is the live microcode patch body
> sudo ./userspace/dram_dump --protected-pa $((CC6_BASE + 0x1800)) --length 0x5f0 \
>     $(printf -- '--map %s ' data/maps/2x4gb_*.map) > ucode_ram.bin
> ```
> 
> Match it against known patches:
> 
> ```sh
> 
> # did we find it?
> pyt

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "xoreaxeaxeax--skitter-creek-bath-salts"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "xoreaxeaxeax--skitter-creek-bath-salts" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W33" AND file.name != "xoreaxeaxeax--skitter-creek-bath-salts"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/xoreaxeaxeax--skitter-creek-bath-salts");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "xoreaxeaxeax--skitter-creek-bath-salts" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "xoreaxeaxeax" AND file.name != "xoreaxeaxeax--skitter-creek-bath-salts"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/xoreaxeaxeax--skitter-creek-bath-salts");
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
> const me = dv.page("Repos/xoreaxeaxeax--skitter-creek-bath-salts");
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
> const me = dv.page("Repos/xoreaxeaxeax--skitter-creek-bath-salts");
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
> const me = dv.page("Repos/xoreaxeaxeax--skitter-creek-bath-salts");
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
> const me = dv.page("Repos/xoreaxeaxeax--skitter-creek-bath-salts");
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

> **2026-08-14** — 首次收錄
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

- [[2026-08-14|2026-08-14]] — 首次收錄，1.1k stars
