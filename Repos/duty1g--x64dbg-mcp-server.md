---
repo: duty1g/x64dbg-mcp-server
url: https://github.com/duty1g/x64dbg-mcp-server
owner: duty1g
owner_type: User
language: Zig
license: MIT
description: "x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg that exposes the debugger's full functionality over HTTP. Connect any MCP-compatible AI assistant and control x64dbg programmatically: set breakpoints, step through code, read memory, dump registers, and more.  Built with Zig — zero dependencies, single-binary output, cros"
homepage: ""
stars: 1488
stars_per_day: 372
forks: 146
open_issues: 0
created: 2026-08-22
pushed_at: 2026-08-27
first_seen: 2026-08-24
week: "2026-W35"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "1.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-24
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-08-30"
contributor_count: 1
engagement: "low"
issue_close_rate: 100
repo_size_kb: 1768
readme_length: 9765
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-24"
star_history: "2026-08-24:921,2026-08-25:1242,2026-08-26:1387,2026-08-27:1488"
tags:
  - github
  - "category/other"
  - "lang/zig"
  - "topic/ai_agents"
  - "topic/ai_debugging"
  - "topic/binary_analysis"
  - "topic/claude"
  - "topic/claude_code"
aliases:
  - "x64dbg-mcp-server"
  - "duty1g/x64dbg-mcp-server"
---

# x64dbg-mcp-server

**921** stars · **921** stars/天 · 建立 1 天前 · Zig · MIT

```dataviewjs
const me = dv.page("Repos/duty1g--x64dbg-mcp-server");
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

`個人專案` `1.0`

`ai-agents` `ai-debugging` `binary-analysis` `claude` `claude-code` `malware-analysis` `malware-research` `malware-scanner` `mcp` `mcp-server` `mcp-servers` `x64dbg` `x64dbg-mcp` `x64dbg-plugin` `x64dbg-tools` `xdbg` `zig` `zig-lang` `ziglang`

> [!summary] 一句話摘要
> x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg that exposes the debugger's full functionality over HTTP. Connect any MCP-compatible AI assistant and control x64dbg programmatically: set breakpoints, step through code, read memory, dump registers, and more.  Built with Zig — zero dependencies, single-binary output, cros

## 專案簡介

x64dbg-MCP Server is a native MCP (Model Context Protocol) plugin for x64dbg that exposes the debugger's full functionality over HTTP. Connect any MCP-compatible AI assistant and control x64dbg programmatically: set breakpoints, step through code, read memory, dump registers, and more.  Built with Zig — zero dependencies, single-binary output, cros

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/duty1g--x64dbg-mcp-server");
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
> const me = dv.page("Repos/duty1g--x64dbg-mcp-server");
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
| Forks | 93 |
| Open Issues | 0 |
| Issue 解決率 | 100% (1 closed) |
| 最後推送 | 2026-08-23 |
| 建立日期 | 2026-08-22 |
| Repo 大小 | 1.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/duty1g/x64dbg-mcp-server) |
| Topics | `ai-agents` `ai-debugging` `binary-analysis` `claude` `claude-code` `malware-analysis` `malware-research` `malware-scanner` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@duty1g](https://github.com/duty1g) | 13 |

**最新版本**：1.0 — x64dbg - v1.0  (2026-08-22)

> [!info]- Release Notes
> ## v1.0 — 71 MCP Tools, Full Debugger Control
> 
> Native x64dbg MCP plugin built in Zig. Zero dependencies, single binary, x32 + x64.
> 
> ### Highlights
> 
> - **71 MCP tools** covering the full debugging workflow
> - **Dual transport** — Streamable HTTP + SSE (MCP 2024-11-05)
> - **x32 and x64** from a single codebase
> - **Config dialog** — change IP/port from the Plugins menu
> - **Auto-start** — server launches with x64dbg, configurable
> 
> ### Tools
> 
> | Category | Tools |
> |----------|-------|
> | Execution | run, StepInto, StepOver, StepOut, PauseDebug, StopDebug, RestartDebug, RunToAddress, TraceInto |
> | Breakpoints | SetBreakpoint, SetHardwareBreakpoint, SetConditionalBreakpoint, EnableBreakpoint, DisableBreakpoint, ToggleBreakpoint, DeleteBreakpoint, DeleteAllBreakpoints, ResetHitCount, ListBreakpoints |
> | Memory | ReadMemory, WriteMemToAddress, AllocateMemory, FreeMemory, GetMemoryMap, GetDumpableRegions, DumpMemory, FindPattern, RestorePatches, GetPatches |
> | Registers | GetAllRegisters, SetRegister, GetArguments |
> | Disassembly | Disassemble, DisassembleFunction, Assemble, GetFunctions |
> | Modules | ListModules, GetImports, GetExports, ListSymbols, SearchSymbols, AnalyzeModule, DetectOEP, DumpModule |
> | Threads | GetThreads, SwitchThread, SuspendThread, ResumeThread |
> | Annotations | CommentOrLabelAtAddress, SetBookmark, DeleteBookmark, ListBookmarks |
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-22 ~ 2026-08-23）
> **活躍天數** 2 天 · **最新 commit** Style disclaimer as blockquote

## README 摘錄

> [!info]- 展開查看原文 README
> x64dbg-MCP Server
> MCP-powered agentic reverse engineering for x64dbg.
> 
>   
>   
>   
>   
>   
>   
>   
>   
> 
>   Features •
>   Install •
>   Usage •
>   Tools •
>   Configuration •
>   Building •
>   Structure
> 
> #
> 
> x64dbg-MCP Server is a native [MCP](https://modelcontextprotocol.io/) (Model Context Protocol) plugin for [x64dbg](https://x64dbg.com/) that exposes the debugger's full functionality over HTTP. Connect any MCP-compatible AI assistant and control x64dbg programmatically: set breakpoints, step through code, read memory, dump registers, and more.
> 
> Built with [Zig](https://ziglang.org/) — zero dependencies, single-binary output, cross-compiles to both x32 and x64 from any host. No .NET, no Python, no runtime — just drop the plugin into your x64dbg plugins folder and go.
> 
> > **MCP 2024-11-05** — Streamable HTTP + SSE transports, JSON-RPC 2.0.
> 
> 
> ## Install
> 
> Download the latest release or build from source:
> 
> 1. Copy the contents of `dist/` into your x64dbg root folder (deploys both x32 and x64)
> 2. Launch x64dbg
> 
> The MCP server starts automatically. Default ports:
> - **x64:** `0.0.0.0:9094`
> - **x32:** `0.0.0.0:9095`
> 
> 
> ## Usage
> 
> Add to your MCP client config (`.mcp.json`, etc.):
> 
> **Streamable HTTP (recommended):**
> ```json
> {
>   "mcpServers": {
>     "x64dbg": {
>       "type": "http",
>       "url": "http://localhost:9094/",
>       "headers": {
>         "Authorization": "Bearer YOUR_TOKEN_HERE"
>       }
>     }
>   }
> }
> ```
> 
> **SSE (legacy clients):**
> ```json
> {
>   "mcpServers": {
>     "x64dbg": {
>       "type": "sse",
>       "url": "http://localhost:9094/sse",
>       "headers": {
>         "Authorization": "Bearer YOUR_TOKEN_HERE"
>       }
>     }
>   }
> }
> ```
> 
> If connecting from WSL or a remote machine, use the host's IP address and set the bind address to `0.0.0.0` in the config dialog.
> 
> **Example — AI-assisted reverse engineering session:**
> ```
> You:    Load calc.exe and break at the entry point
> AI: [calls LoadBinary, SetBreakpoint, run, WaitForPause]
>         Loaded calc.exe, hit breakpoint at 0x7FF7A1234000 in calc.exe
> 
> You:    What are the current registers?
> AI: [calls GetAllRegisters]
>         RAX: 0x0, RCX: 0x7FF7A1234000, RDX: 0x1, ...
> 
> You:    Read 64 bytes at the current instruction pointer
> AI: [calls ReadMemory]
>         48 83 EC 28 E8 12 34 00 00 ...
> 
> You:    Step over the next 3 instructions and show me the stack
> AI: [calls StepOver x3, GetCallStack]
>         Stepped to 0x7FF7A1234010, call stack: ...
> ```
> 
> 
> ## Features
> 
> - **71 MCP Tools:** Full debugger control — disassembly, stepping, breakpoints, memory allocation, registers, modules, threads, call stack, pattern scanning, string extraction, xrefs, symbols, bookmarks, PE analysis, OEP detection, module dumping, PEB/SEH inspection, tracing, and more.
> - **22 Event Callbacks:** Full debugger event coverage — init, stop, breakpoint, exception, step, attach/detach, DLL load/unload, threads, and more.
> - **Zero Dependencies:** Pure native plugin, no runtime or framework needed.
> - **x32 and x64:** Single codebase, builds both architectures from one command.
> - **Dual Transport:** Streamable HTTP + SSE — compatible with any MCP client (new and legacy).
> - **Bearer Auth:** Mandatory token authentication — auto-generated on first run, required on every request to prevent unauthorized access.
> - **Config Dialog:** Change IP/port/token from the Plugins menu, auto-restarts the server on save.
> - **Auto-Start:** MCP server starts automatically when x64dbg launches.
> - **Cross-Compile:** Build Windows plugins from Linux, macOS, or WSL.
> 
> 
> ## Configuration
> 
> Go to **Plugins > x64dbg-MCP Server > Configure MCP Server...** to change the bind address, port, and auth token.
> 
> - `0.0.0.0` — listen on all interfaces (for WSL/remote access)
> - `127.0.0.1` — local-only access
> 
> 
> ## Tools
> 
> 71 MCP tools covering the full x64dbg debugging workflow.
> 
> 
> ### Always available
> | Tool | Description |
> |------|-------------|
> | `GetDebugState` | Current debugger state, PID, instruction pointer |
> | `LoadBinary` | Load an executable into the debugger |
> | `ExecuteDebuggerCommand` | Run any x64dbg command |
> | `ListCommandsByCategory` | List available MCP tools |
> | `SearchForStrings` | Search process memory for text |
> | `GetEventLog` | Last N debugger events (exceptions, breakpoints, DLL loads) |
> | `ClearEventLog` | Clear the event log |
> | `EvalExpression` | Evaluate any x64dbg expression (address, register, arithmetic) |
> | `AttachProcess` | Attach to a running process by PID |
> | `Echo` | Echo input back |
> 
> 
> ### Requires active debug session
> | Tool | Description |
> |------|-------------|
> | `GetCurrentAddress` | Current EIP/RIP with label and comment |
> | `Disassemble` | Disassemble N instructions at an address |
> | `DisassembleFunction` | Disassemble an entire function by boundaries |
> | `ReadMemory` | Hex dump of process memory |
> | `WaitForPause` | Block until target pauses |
> | `run` | Resume execution (F9) |
> | `StepInto` | Single-step into calls (F7) |
> | `StepOver` | Step over calls (F8) |
> | `StepOut` | Run until return (Ctrl+F9) |
> | `PauseDebug` | Pause the target (F12) |
> | `StopDebug` | Terminate debug session |
> | `RestartDebug` | Restart debug session |
> | `SetBreakpoint` | Set INT3 breakpoint at address/symbol |
> | `SetHardwareBreakpoint` | Set hardware breakpoint (DR0-DR3, read/write/execute) |
> | `SetConditionalBreakpoint` | Set breakpoint with condition expression and optional log |
> | `EnableBreakpoint` | Enable a breakpoint at a given address |
> | `DisableBreakpoint` | Disable a breakpoint without deleting it |
> | `ToggleBreakpoint` | Toggle a breakpoint between enabled and disabled |
> | `DeleteBreakpoint` | Remove a breakpoint |
> | `DeleteAllBreakpoints` | Remove all breakpoints (normal, hardware, memory) |
> | `ResetHitCount` | Reset a breakpoint's hit counter to zero |
> | `ListBreakpoints` | List all active breakpoints |
> | `GetAllRegisters` | Dump all general-purpose registers |
> | `SetRegister` | Set a CPU register value |
> | `GetCallStack` | Current thread call stack |
> | `GetThreads` | List all threads with IDs and instruction pointers |
> | `SwitchThread` | Switch active thread context |
> | `SuspendThread` | Suspend a thread by its thread ID |
> | `ResumeThread` | Resume a suspended thread |
> | `ListModules` | List loaded modules with base addresses and sizes |
> | `GetMemoryMap` | Memory regions with addresses, sizes, and protection |
> | `GetDumpableRegions` | List committed, readable memory regions |
> | `AllocateMemory` | Allocate memory in the target process |
> | `FreeMemory` | Free allocated memory in the target process |
> | `WriteMemToAddress` | Patch memory with hex bytes |
> | `RestorePatches` | Restore all patches to original bytes |
> | `Assemble` | Assemble an instruction at an address |
> | `CommentOrLabelAtAddress` | Add comment/label in disassembly |
> | `SetBookmark` | Set a bookmark at an address |
> | `DeleteBookmark` | Delete a bookmark |
> | `ListBookmarks` | List all bookmarks |
> | `GetImports` | Show module import table |
> | `GetExports` | Show module export table |
> | `SearchSymbols` | Search for symbols matching a pattern |
> | `ListSymbols` | List exported symbols of a module |
> | `GetPatches` | List all memory patches |
> | `FindPattern` | Scan module memory for byte pattern with ?? wildcards |
> | `GetStrings` | Extract ASCII strings from a module's memory |
> | `GetReferences` | Find CALL/JMP xrefs to a target address |
> | `GetFunctions` | List analyzed functions with addresses and labels |
> | `AnalyzeModule` | PE structure analysis: sections, EP, image size |
> | `DetectOEP` | Detect Original Entry Point for packed executables |
> | `DumpMemory` | Save memory region to file on disk |
> | `DumpModule` | Dump an entire module to a file |
> | `RunToAddress` | Run until hitting a specific address |
> | `TraceInto` | Step N instructions recording address + disassembly |
> | `FollowPointer` | Dereference pointer chain N levels deep |
> | `WatchExpressions` | Evaluate multiple expressions in one call |
> | `GetSEHChain` | Walk Structured Exception Handler chain (x32) |
> | `GetPEB` | Read Process Environment Block fields |
> | `GetA

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]]

[GitHub](https://github.com/duty1g/x64dbg-mcp-server)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "duty1g--x64dbg-mcp-server"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Zig" AND file.name != "duty1g--x64dbg-mcp-server" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W35" AND file.name != "duty1g--x64dbg-mcp-server"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/duty1g--x64dbg-mcp-server");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "duty1g--x64dbg-mcp-server" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "duty1g" AND file.name != "duty1g--x64dbg-mcp-server"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/duty1g--x64dbg-mcp-server");
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
> const me = dv.page("Repos/duty1g--x64dbg-mcp-server");
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
> const me = dv.page("Repos/duty1g--x64dbg-mcp-server");
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
> const me = dv.page("Repos/duty1g--x64dbg-mcp-server");
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
> const me = dv.page("Repos/duty1g--x64dbg-mcp-server");
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

> **2026-08-24** — 首次收錄
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

- [[2026-08-27|2026-08-27]] — 再次上榜，1.5k stars
- [[2026-08-26|2026-08-26]] — 再次上榜，1.4k stars
- [[2026-08-25|2026-08-25]] — 再次上榜，1.2k stars
- [[2026-08-24|2026-08-24]] — 首次收錄，921 stars
