---
repo: sdli1995/dlssg_for_sm86
url: https://github.com/sdli1995/dlssg_for_sm86
owner: sdli1995
owner_type: User
language: N/A
license: N/A
description: "Here is a dlssg for RTX30 Series GPU "
homepage: ""
stars: 1508
stars_per_day: 503
forks: 89
open_issues: 70
created: 2026-09-07
pushed_at: 2026-09-10
first_seen: 2026-09-10
week: "2026-W37"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-10
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-09-14"
contributor_count: 1
engagement: "low"
issue_close_rate: 18
repo_size_kb: 10048
readme_length: 7623
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-10"
star_history: "2026-09-10:842,2026-09-11:1508"
tags:
  - github
  - "category/other"
  - "lang/other"
aliases:
  - "dlssg_for_sm86"
  - "sdli1995/dlssg_for_sm86"
---

# dlssg_for_sm86

**842** stars · **421** stars/天 · 建立 2 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/sdli1995--dlssg_for_sm86");
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
> Here is a dlssg for RTX30 Series GPU 

## 專案簡介

Here is a dlssg for RTX30 Series GPU 

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/sdli1995--dlssg_for_sm86");
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
> const me = dv.page("Repos/sdli1995--dlssg_for_sm86");
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
| Forks | 51 |
| Open Issues | 41 |
| Issue 解決率 | 18% (9 closed) |
| 最後推送 | 2026-09-09 |
| 建立日期 | 2026-09-07 |
| Repo 大小 | 9.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/sdli1995/dlssg_for_sm86) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sdli1995](https://github.com/sdli1995) | 9 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-07 ~ 2026-09-09）
> **活躍天數** 2 天 · **最新 commit** update readme

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/sdli1995/dlssg_for_sm86/issues/1) | thanks bro | 9 | 4 |
> | [#20](https://github.com/sdli1995/dlssg_for_sm86/issues/20) | Any chance to use Smooth Motion as well? | 8 | 1 |
> | [#17](https://github.com/sdli1995/dlssg_for_sm86/issues/17) | Source Code | 6 | 1 |
> | [#13](https://github.com/sdli1995/dlssg_for_sm86/issues/13) | Chrome blocks `version.dll` download as potentially maliciou | 5 | 2 |
> | [#10](https://github.com/sdli1995/dlssg_for_sm86/issues/10) | Proton (Arch Linux) backend install fails with `Missing cuIn | 4 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # DLSSG Native 0.2.3
> 
> 简体中文 | [English](README.en.md)
> 
> Windows x64 / D3D12。运行文件为 `version.dll` 和 `dlssg_sm86.ini`。
> 
> 自有 C++ 包装层、SM75/SM86 PTX/Cubin、310.1 模型和推理图都在一个 DLL 内。运行时不解压、加载或内存映射原厂 `nvngx_dlssg.dll`；仍使用系统 NVIDIA NGX/NVAPI/CUDA 驱动接口，无需 CUDA Toolkit。
> 
> ## 0.2.3 简略更新说明
> 
> - **性能**：默认启用已验证的 SM86 精确内核、融合、图像处理和 CUDA 缓冲清理优化，移除变慢的实验路径。3080 Ti 的 4K 4X 离线插帧组耗时相对 Release 0.1.0 从 6.748 ms 降至 4.654 ms；完整数据和游戏实测见下文。
> - **配置**：日常 INI 精简为 5 项。默认 `HardwareBilinear=0` 为精确档，`1` 为可选近似采样，仅 SM86 生效。
> - **安装包**：同包提供 SM75/SM86 路由；`altnative` 增加四种备用代理入口，全部五个 DLL 使用项目自签证书。
> - **兼容修复**：保留 0.2.2 的《悟空》typeless UI 修复和首次 Evaluate 初始化。
> 
> ## 运行要求
> 
> - **系统与游戏**：Windows 10/11 x64、D3D12，以及能够通过本 Mod 启用 DLSS 帧生成的游戏。CPU 和系统内存仍需满足游戏自身要求。
> - **显卡与路由**：SM86 路由面向 RTX 30 系列；SM75 路由面向 RTX 20 系列。当前实卡验证为 RTX 3080 Ti，SM75 在该卡上通过 PTX 前向测试，物理 Turing/Cubin 仍待验证。
> - **驱动与依赖**：需要 NVIDIA 驱动提供 NGX/NVAPI/CUDA 接口；本次使用驱动 591.86 验证，此版本号不代表最低驱动要求。运行时无需安装 CUDA Toolkit 或 Python。
> - **显存**：需同时容纳游戏本体、插帧新增资源和场景波动余量。系统及其他程序也会占用显存，应关注游戏实际可用的显存预算。
> 
> ### 不同配置的插帧额外显存参考
> 
> 以下为 0.2.3 在 RTX 3080 Ti / 驱动 591.86 / PTX 下的参考预算，覆盖 SM86 默认精确、SM86 可选近似及 SM75 路由，共 27 组补测。按最终**输出分辨率**选行；例如 4K 输出 + DLSS 性能档仍使用 4K 这一行。
> 
> | 输出分辨率 | 2X：额外显存估计 | 3X：额外显存估计 | 4X：额外显存估计 |
> |---|---:|---:|---:|
> | 1080p / 1920×1080 | 约 320 MiB | 约 330 MiB | 约 340 MiB |
> | 2K / 2560×1440 | 约 490 MiB | 约 510 MiB | 约 520 MiB |
> | 4K / 3840×2160 | 约 700 MiB | 约 740 MiB | 约 770 MiB |
> 
> 表值按预热后的进程本地显存增量计算，扣除基准程序预存输入和测试输出的占用，再加上一组 `M` 张 32 位输出缓冲，向上取整到 10 MiB（1 GiB = 1024 MiB）。这是稳定运行时的估计；游戏本体、额外在途帧、交换链及更大像素格式的开销还需另计，**实际应留出高于表值的额外显存余量**。这些数值不是整款游戏的最低显存容量或峰值保证；SM75 数值为 3080 Ti 上的路由参考。
> 
> 本次测得默认精确档和可选近似档的显存占用相同；SM75 路由差异小于 1 MiB，采用同一取整预算。2X/3X/4X 复用常驻推理资源，因此降低倍率主要减少输出缓冲，未必显著降低总显存占用。
> 
> **显存不足或超过 Windows 分配的显存预算时，可能出现偶发卡顿、帧时间尖峰，即使平均 FPS 看起来正常。** 可降低贴图、输出分辨率或光追设置，并减少后台显存占用，为场景切换和资源加载留出余量。[Microsoft 显存预算说明](https://learn.microsoft.com/en-us/windows/win32/api/dxgi1_4/nf-dxgi1_4-idxgiadapter3-queryvideomemoryinfo)
> 
> ## 安装与升级
> 
> 适用 Windows x64、D3D12 游戏及 NVIDIA 驱动。无需额外安装 Python 或 CUDA Toolkit。当前模型为 310.1；Vulkan 支持见下一版本计划。
> 
> 1. **完全退出游戏。** 首次安装直接进行下一步；从旧版升级时，把之前安装的本项目代理 DLL 和 `dlssg_sm86.ini` 备份到单独目录，再移出游戏目录中的旧代理。保留其他 Mod 的文件。
> 2. **找到实际渲染 EXE 的目录。** 《黑神话：悟空》为 `D:\SteamLibrary\steamapps\common\BlackMythWukong\b1\Binaries\Win64`，其中应有 `b1-Win64-Shipping.exe`。
> 3. **复制一个代理 DLL 和 INI。** 默认复制包根目录的 `version.dll` 与 `dlssg_sm86.ini`。若这个 DLL 名称被其他 Mod 占用，或游戏不会加载它，从 `altnative` 选择一个可用入口，按下表安装。每次只保留本项目的一个代理。
> 4. **选择显卡路由。** 3080 Ti 保持 `Router=SM86, KernelImage=PTX`；SM75/Turing 使用 `Router=SM75, KernelImage=PTX`。同一 INI 适用于全部入口。
> 5. **重启游戏并启用 DLSS 帧生成。** 在游戏中选择 2X/3X/4X；`MaxGeneratedFrames=3` 表示允许最多额外生成三帧，实际倍率由游戏请求。
> 
> | 入口 | 包内位置 | 用法 |
> |---|---|---|
> | 默认 | `version.dll` | 与 INI 放到渲染 EXE 旁 |
> | 替代 | `altnative/winmm.dll` | 选择游戏会加载的名称，原名复制到 EXE 旁 |
> | 替代 | `altnative/dinput8.dll` | 同上 |
> | 替代 | `altnative/winhttp.dll` | 同上 |
> | 替代 | `altnative/dxgi.dll` | 同上；当前仍为 D3D12 管线 |
> 
> 所有 DLL 都包含完整推理资源。替代入口复制时保持原文件名；其他文件可保留在下载目录。不额外混用上游 SM75 包中的代理、注入器或后端。
> 
> `HardwareBilinear=0` 为默认精确档；需要可选近似采样时改为 `1`，仅 SM86 生效，生成像素可能变化。两档预设见 [INI 说明](docs/NATIVE_INI.md)。更改配置后重启游戏。
> 
> 排查加载时临时设置 `Logging.Level=2`，日志位于 EXE 旁 `dlssg_sm86/logs`；若未出现项目日志，核对渲染 EXE 目录和所选 DLL 是否由游戏加载。正式游玩可恢复 `Level=1`。保留游戏自带的 DLSSG 文件。卸载时退出游戏，移除本次选择的代理 DLL 和 INI，需要回退时恢复备份。
> 
> ## 杀软误报与签名
> 
> 本项目通过系统 DLL 代理和 LoadLibrary hook 接入游戏，这类行为可能被安全软件的启发式检测误报。Native 化已经取消原厂 feature DLL 的解压和手动映射，但仍需保留接入 hook；是否属于误报，要结合具体检测结果由对应厂商复核。
> 
> 全部五个 DLL 都使用 **DLSSG Native Project 项目自签证书**，可在 Windows 文件属性的“数字签名”中查看。签名用于核验签名者和文件完整性，**不提供 Windows 默认信任，也不保证消除杀软告警**。证书链不受信任、SmartScreen 的信誉提示与杀软检出属于不同检查；自签文件仍可能收到 SmartScreen 提示。[Microsoft SmartScreen 说明](https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/smartscreen-reputation)
> 
> 遇到告警时，先核对下载来源及发布 ZIP 旁的 `.sha256`，再记录安全软件名称、检测名称、病毒库版本和被检测 DLL 的 SHA256，向对应厂商提交误报复核。Microsoft Defender 的提交入口为 [Microsoft 文件分析](https://www.microsoft.com/en-us/wdsi/filesubmission)；核对哈希和签名不能代替厂商的检测结论。
> 
> ## 统一基线：Release 0.1.0 → Native 0.2.3
> 
> 本表统一使用 **2026-09-07 的 `dist/Release/version.dll`**，SHA256 `03d445237d519ac48cd9226278a0f07aecd7ac597697697eb64404e1d51b3c5a`。本表两档使用 0.2.3 DLL 的签名前文件 `f5715c29…`；发布包追加签名，PE 内容摘要一致。九个条件全部重新实测，GPU 为 RTX 3080 Ti / SM86，驱动 591.86。
> 
> 单位为**每个真实帧对应整组帧生成的 GPU 毫秒数**，包含共用预处理；2X/3X/4X 分别生成 1/2/3 帧。默认精确档为 `HardwareBilinear=0`，可选近似档为 `1`。
> 
> | 分辨率 | 倍率 | Release 0.1.0 (ms) | 0.2.3 默认精确 (ms) | 耗时降低 | 0.2.3 可选近似 (ms) | 耗时降低 |
> |---|---:|---:|---:|---:|---:|---:|
> | 1080p | 2X | 1.528 | 0.996 | 34.82% | 0.985 | 35.55% |
> | 1080p | 3X | 2.253 | 1.594 | 29.26% | 1.574 | 30.11% |
> | 1080p | 4X | 2.977 | 2.185 | 26.61% | 2.157 | 27.54% |
> | 2K / 1440p | 2X | 2.477 | 1.632 | 34.12% | 1.616 | 34.77% |
> | 2K / 1440p | 3X | 3.674 | 2.591 | 29.49% | 2.557 | 30.40% |
> | 2K / 1440p | 4X | 4.882 | 3.545 | 27.39% | 3.493 | 28.45% |
> | 4K | 2X | 3.138 | 2.090 | 33.38% | 2.048 | 34.74% |
> | 4K | 3X | 4.994 | 3.407 | 31.77% | 3.326 | 33.39% |
> | 4K | 4X | 6.748 | 4.654 | 31.03% | 4.535 | 32.80% |
> 
> 耗时降低统一按 `(Release 耗时 − 当前耗时) / Release 耗时` 计算，使用未取整数据。毫秒数为各轮中位数的中位数。每个条件四轮，旧 Release 在每轮前后各测一次，精确/近似顺序交替；每次测 256 组，共 144 次运行。GPU 未锁频，未删除异常值。
> 
> 所有版本使用相同的合成《悟空》资源格式输入、PTX、HIGH=100 计算队列，每次 Evaluate 独立提交；1.5 秒负载预热后 Reset，再预热 64 帧。旧 Release 的内核格式由 Auto/Cubin 显式改为 PTX，其余计算路径来自该原始 DLL。旧版显式加载与内嵌资源一致的 310.1 feature DLL；初始化、解压和加载时间均不计入本表。
> 
> 精确档计时后输出与旧 Release 逐字节一致；近似档的真实帧及 alpha 不变，生成 RGB 有差异。这里是 GPU pipeline 耗时，整组跨度包含 Evaluate 之间的提交空隙；游戏渲染、Present、上传和读回不计入。不能将耗时降幅当作游戏 FPS 增幅。
> 
> ## 插帧后帧率怎么估算
> 
> 先在**相同场景、输出分辨率、DLSS 超分档位和画质设置**下关闭帧生成，得到帧率 `F_off`。用 `1000 / F_off` 换算基础帧时间，再从上表按分辨率、插帧倍率和默认精确／可选近似配置选择整组插帧耗时 `T_FG`（毫秒）。
> 
> ```text
> 基础帧时间 T_base (ms) = 1000 / F_off
> 开启插帧后的帧组时间 T_group (ms) ≈ T_base + T_FG
> 真实帧／帧组速率 G (组/s) ≈ 1000 / T_group
> 插帧后总帧率 F_out (FPS) ≈ G × M
>                        = 1000 × M / (1000 / F_off + T_FG)
> ```
> 
> `M` 是总倍率（2X/3X/4X 对应 2/3/4）。一组包含一个真实帧和 `M − 1` 个生成帧；**上表的 `T_FG` 已包含整组生成帧和共用预处理，不能再乘 `M − 1`**。在这个估算中，开启插帧后的真实帧／帧组速率 `G` 低于关闭插帧的 `F_off`。
> 
> 例如，未开帧生成约 **50 FPS**，基础帧时间为 **20 ms**。采用上表 RTX 3080 Ti / SM86 的 **4K 4X** 插帧组耗时：
> 
> | 配置 | 插帧组耗时 T_FG (ms) | 估计帧组时间 (ms) | 估计真实帧／帧组速率 (组/s) | 估计插帧后总帧率 |
> |---|---:|---:|---:|---:|
> | Release 0.1.0 | 6.748 | 26.748 | 37.4 | 149.5 FPS |
> | 0.2.3 默认精确（HardwareBilinear=0） | 4.654 | 24.654 | 40.6 | 162.2 FPS |
> | 0.2.3 可选近似（HardwareBilinear=1） | 4.535 | 24.535 | 40.8 | 163.0 FPS |
> 
> 1080p、1440p 或 2X/3X 时，换用上表对应行，并填入该画质设置下自己测得的 `F_off`。这些插帧耗时来自 3080 Ti / SM86；其他显卡或 SM75 路由应使用对应实测耗时。
> 
> 这是将基础渲染时间与插帧组开销相加的**粗略估计**。游戏中的 GPU 资源争用、同步、CPU 开销、限帧及显示器刷新率会影响最终结果；估计值不保证等于计数器读数或实际显示帧率。
> 
> ## 《黑神话：悟空》实测反馈
> 
> 用户提供的 RTX 3080 Ti 同场景近似读数：**4K 输出、DLSS 性能档、全景光线追踪关闭、全影视级画质**。关闭帧生成时约 **50 FPS**，开启 **4X** 后：
> 
> | 状态 | 真实帧／帧组速率 | 含生成帧的总帧率 |
> |---|---:|---:|
> | 优化前 | 约 36 组/s | 约 144 FPS |
> | 本次优化后 | 约 40 组/s | 约 160 FPS |
> 
> 帧组速率和总帧率均提升约 **11.1%**，即约 **+4 组/s、+16 FPS**。这里记录的是用户反馈的游戏实测，不是上述公式计算出的结果，也不是本次重新执行的自动化游戏测试。与离线默认精确档约 162 FPS 的估算接近，但不能把离线插帧耗时降低 31.03% 直接当作游戏 FPS 增幅。
> 
> ## 诊断与边界
> 
> 默认 `Logging.Level=1` 只记错误；排查时改为 `2` 或 `3`，日志在 `dlssg_sm86/logs`。可选 GPU 计时项见 INI 说明。
> 
> 调用方必须提供正反 clip 矩阵；最高生成 3 帧，不支持 6X/动态倍率、Reflex Warp 或 Reflex 自动矩阵查询。输入状态为 NON_PIXEL_SHADER_RESOURCE，输出为 UAV；调用方负责提交、同步和显示。本版优化的是 GPU 计算开销，不能将离线耗时下降当成实测游戏 FPS 增幅。
> 
> SM75 路由已在 3080 Ti 上完成前向 PTX 检查；物理 Turing/Cubin 和新版游戏长期运行仍待验证。
> 
> ## SM75 来源与致谢
> 
> 感谢 **Coldwood1026** 的 RTX 20 系列 / SM75 适配工作。GPU 资源引用 [dlssg_for_sm75](https://github.com/Coldwood1026/dlssg_for_sm75)（原名 `dlssg_for_sm86`）的固定提交 [c60c2aa…](https://github.com/Coldwood1026/dlssg_for_sm75/commit/c60c2aa363c7e66a523122aa5cec9c884658ad5f)，由本项目独立宿主加载和调度。来源及许可见 `THIRD_PARTY_NOTICES.txt`。
> 
> ## 下一版本计划
> 
> 1. **Vulkan 支持**：增加 Vulkan 资源接入、互操作与同步，并验证 SM75/SM86 路径。
> 2. **模型更新到最新 DLSSG**：实施时固定最新可用版本及哈希，适配模型/推理图并评估画质、显存和耗时。
> 
> 当前版本仍为 D3D12 + 310.1 模型。详细计划见 [路线图](docs/ROADMAP.md)。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]]

[GitHub](https://github.com/sdli1995/dlssg_for_sm86)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "sdli1995--dlssg_for_sm86"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "sdli1995--dlssg_for_sm86" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W37" AND file.name != "sdli1995--dlssg_for_sm86"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/sdli1995--dlssg_for_sm86");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "sdli1995--dlssg_for_sm86" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "sdli1995" AND file.name != "sdli1995--dlssg_for_sm86"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/sdli1995--dlssg_for_sm86");
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
> const me = dv.page("Repos/sdli1995--dlssg_for_sm86");
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
> const me = dv.page("Repos/sdli1995--dlssg_for_sm86");
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
> const me = dv.page("Repos/sdli1995--dlssg_for_sm86");
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
> const me = dv.page("Repos/sdli1995--dlssg_for_sm86");
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

> **2026-09-10** — 首次收錄
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

- [[2026-09-11|2026-09-11]] — 再次上榜，1.5k stars
- [[2026-09-10|2026-09-10]] — 首次收錄，842 stars
