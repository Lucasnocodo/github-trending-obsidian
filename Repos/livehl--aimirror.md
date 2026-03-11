---
repo: livehl/aimirror
url: https://github.com/livehl/aimirror
owner: livehl
owner_type: User
language: Python
license: MIT
description: "🚀 200倍速！AI时代的下载神器 | Docker/PyPI/HuggingFace/CRAN 全加速 | 并行分片+智能缓存，让下载飞起来"
homepage: ""
stars: 727
stars_per_day: 145
forks: 0
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-11
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "下載加速器"
release_tag: "v0.3.0"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-11
use_case: "讓下載速度飛起來，支援 PyPI、Docker Hub、CRAN 和 HuggingFace 的全加速工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-18"
contributor_count: 1
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-11"
star_history: "2026-03-11:727"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/ai_tools"
  - "topic/cache_proxy"
  - "topic/cuda"
  - "topic/deep_learning"
  - "topic/docker_registry"
aliases:
  - "aimirror"
  - "livehl/aimirror"
  - "讓下載速度飛起來，支援 PyPI、Docker Hub、CRAN 和 HuggingFace 的全加速工具。"
---

# aimirror

**727** stars · **145** stars/天 · 建立 5 天前 · Python · MIT

`個人專案` `v0.3.0` `easy-install`

> [!summary] 一句話摘要
> 讓下載速度飛起來，支援 PyPI、Docker Hub、CRAN 和 HuggingFace 的全加速工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (145 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在內網環境中快速下載大型 AI 模型和庫的工程師。
> **一句話重點** aimirror 不僅提升了下載速度，更是針對 AI 工程師的實際需求而設計的工具，解決了內網環境中的下載瓶頸問題。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，能夠顯著提升下載效率，值得採用。

> [!abstract] 核心創新
> aimirror 透過智能路由和並行分片下載技術，顯著提升了多個大型下載源的下載速度。

## 專案簡介

aimirror 是一個針對 AI 工程師設計的下載加速工具，通過並行分片下載和智能緩存技術，顯著提升了大文件的下載速度。用戶只需將目標下載源的地址配置到 aimirror，然後透過 HTTP 請求進行下載，aimirror 會自動處理並行下載和緩存，最終將速度提升至 200 倍以上。關鍵的 CLI 指令包括 `pip install aimirror` 和 `aimirror` 來啟動服務，並可通過 `curl http://localhost:8081/health` 檢查服務狀態。這個工具的設計理念是解決在內網環境中，由於單線程下載導致的速度瓶頸，aimirror 透過多線程和 HTTP Range 分片技術，能夠充分利用帶寬。其智能緩存功能基於文件的 digest 去重，並使用 LRU 算法自動淘汰不常用的緩存，確保高效的資源使用。這樣的設計使得重複下載相同的包時能夠快速命中緩存，進一步加速下載過程。aimirror 也支持靈活的路由和內容改寫，能夠無縫代理各種 HTTP 下載請求，並可根據需求擴展支持更多源。這些特性使得 aimirror 在處理大規模的依賴包下載時，能夠顯著降低時間成本，特別適合需要頻繁安裝大型 AI 模型或庫的開發者。

**技術棧**：`FastAPI 0.100.0` · `Uvicorn 0.23.0` · `HTTPX 0.25.0` · `Aiohttp 3.9.0`

## 重點功能

- 並行下載 — 使用 HTTP Range 分片和多線程技術，顯著提升下載速度。
- 智能緩存 — 基於文件 digest 去重，並使用 LRU 算法自動淘汰不常用的緩存。
- 多源支持 — 預設支持 Docker Hub、PyPI、CRAN 和 HuggingFace，並可擴展其他 HTTP 源。
- 內容改寫 — 自動改寫 HTML/JSON 響應中的鏈接，無縫代理下載請求。
- 並發控制 — 全局下載並發限制，防止資源耗盡。
- 靈活的路由 — 根據文件大小自動選擇代理或並行下載策略。

## 快速開始

1. 安裝 aimirror
```bash
pip install aimirror
```
2. 啟動 aimirror 服務
```bash
aimirror
```
3. 檢查服務狀態
```bash
curl http://localhost:8081/health
```

## 程式碼範例

{
  "前置條件": "已安裝 aimirror 並啟動服務",
  "指令": "curl http://localhost:8081/packages/fb/d7/71b982339efc4fff3c622c6fefecddfd3e0b35b60c5f822872d5b806bb71/torch-1.0.0-cp27-cp27m-manylinux1_x86_64.whl",
  "預期輸出": "HTTP: 200, Size: 12345678, Time: 0.123s"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 727 stars（145/天），forks 0，顯示出這是一個新興但尚未被廣泛修改的專案。作者 livehl 是一位 AI 工程師，針對下載速度慢的痛點開發了這個工具，之前的解決方案如單線程下載和缺乏緩存的情況無法滿足需求。這個工具的出現正好填補了這一空白，特別是在需要頻繁下載大型檔案的場景下。技術上，隨著多線程和緩存技術的成熟，這個工具的可行性大大提升。由於 forks/stars 比率為 0%，顯示出目前使用者對於這個工具的興趣尚在觀望階段。

## 適合誰使用

**目標受眾**：需要在內網環境中快速下載大型 AI 模型和庫的工程師。

> [!example] 使用場景
> - AI 工程師用它來加速安裝大型 Python 庫（如 torch），因為 aimirror 能將下載時間從 31 分鐘縮短至 80 秒，提升效率。
> - DevOps 工程師用它來快速拉取 Docker 映像，因為它支持並行下載，能有效減少從 Docker Hub 下載的時間。
> - 數據科學家用它來下載 HuggingFace 模型，因為 aimirror 能夠處理各種文件格式，並且支持自定義下載規則，方便靈活使用。

## 架構分析

aimirror 採用 FastAPI 作為後端框架，設計為一個單一服務，通過 HTTP 協議接收請求並返回下載內容。架構中包含路由匹配器、特殊處理器、直接代理和並行下載器等模組，確保能夠根據不同的請求類型選擇最優的處理方式。資料流從客戶端發起請求，經過路由匹配後，根據文件大小和類型選擇合適的處理器。

這樣的設計使得 aimirror 能夠靈活應對各種下載需求，並在性能上達到最佳化。選擇 FastAPI 的原因在於其高效的性能和易於擴展的特性，這對於需要高併發的下載服務至關重要。由於使用了多線程和緩存技術，aimirror 在處理大量請求時能夠保持穩定的性能，但在極端高並發的情況下仍需注意資源的合理分配。

## 技術深入分析

aimirror 的核心技術機制包括多線程並行下載和智能緩存管理，這使得它能夠在高帶寬環境下充分發揮性能。使用 HTTP Range 分片技術，aimirror 能夠將大文件拆分為多個小片段並同時下載，這樣不僅能提高速度，還能有效利用帶寬。根據測試，aimirror 的下載速度可達 170MB/s，相比於傳統的 900KB/s 提升了近 200 倍。選擇 FastAPI 作為後端框架的原因在於其高效的性能和易於擴展的特性，這對於需要高併發的下載服務至關重要。

aimirror 的依賴關係相對簡單，主要依賴 FastAPI 和一些輕量級的 HTTP 客戶端庫，這使得整體架構保持輕量。技術風險方面，aimirror 在高並發情況下可能會面臨資源耗盡的風險，因此需要合理配置全局並發限制。對於外部 API 的依賴程度較低，主要依賴於 HTTP 協議的穩定性，這降低了潛在的風險。aimirror 與主流的 CI/CD 工具鏈整合友好，可以輕鬆集成到現有的開發流程中，並且學習成本相對較低，適合團隊快速上手。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝和使用範例，對於新手來說非常友好。安裝過程順暢，僅需使用 pip 指令即可完成安裝。文件中提供了多種配置示例，幫助用戶快速上手。整體而言，花 30 分鐘內能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 顯著提升下載速度，特別適合需要頻繁下載大型檔案的場景。
> - 支持多種下載源，靈活性高，能夠滿足不同需求。
> - 智能緩存功能能夠減少重複下載的時間成本，提升效率。

> [!danger] 缺點
> - 僅支援 HTTP 下載，對於其他協議的支持有限。
> - 需要一定的配置，對於新手可能有學習曲線。
> - 在高並發情況下可能需要進行資源調整，以防止服務崩潰。

> [!warning] 注意事項
> - 僅支援 HTTP 下載，無法處理 FTP 或其他協議。
> - 需要配置正確的上游代理，否則可能無法正常下載。
> - 對於小文件，可能無法充分發揮並行下載的優勢。
> - 目前僅支持 Python 環境，對於其他語言的支持尚未完善。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高並發情況下，可能會出現資源耗盡的問題。
  - 解法：調整全局並發限制，確保不超過系統資源的承受範圍。
- [MEDIUM] 對於小文件，可能無法充分發揮並行下載的優勢。
  - 解法：根據實際情況調整下載策略，對小文件使用代理模式。
- **[HIGH]** 需要正確配置上游代理，否則可能無法正常下載。
  - 解法：確保 config.yaml 中的 upstream_proxy 配置正確。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要頻繁下載大型 AI 模型的研究團隊 | 非常適合 | aimirror 能夠顯著提升下載速度，減少等待時間。 |
| 小型開發團隊的日常依賴包安裝 | 適合 | 對於大型包的安裝能夠提升效率，但小文件下載效果有限。 |
| 需要在 CI/CD pipeline 中集成的工具 | 普通 | 雖然能夠加速下載，但可能需要額外的配置和調整。 |
| 不需要頻繁下載的個人開發者 | 不適合 | 對於偶爾下載的需求，使用標準的下載方式即可。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能夠顯著提升下載效率，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> aimirror 本身不需要高權限運行，僅需普通用戶權限即可。它不會存取敏感資料，主要通過 HTTP 請求進行下載，安全性較高。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/livehl--aimirror");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 0 |
| Open Issues | 0 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 76 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/livehl/aimirror) |
| Topics | `ai-tools` `cache-proxy` `cuda` `deep-learning` `docker-registry` `download-accelerator` `fastapi` `gpu` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `fastapi` `uvicorn` `httpx` `aiohttp` `aiofiles` `pyyaml` `pytest`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@livehl](https://github.com/livehl) | 39 |

**最新版本**：v0.3.0 (2026-03-10)

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新，但缺乏多樣的貢獻者。
**連結**：[文件](https://github.com/livehl/aimirror)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-07 ~ 2026-03-10）
> **活躍天數** 2 天 · **最新 commit** chore(release): bump version to 0.3.0

## README 摘錄

> [!info]- 展開查看原文 README
> # 🚀 aimirror
> 
> [](https://www.python.org/)
> [](https://fastapi.tiangolo.com/)
> [](LICENSE)
> [](https://pypi.org/project/aimirror/)
> 
> > AI 时代的下载镜像加速器 —— 被慢速网络逼疯的工程师的自救工具
> > 
> > **一个服务 = PyPI + Docker Hub + CRAN + HuggingFace 全加速，还能任意扩展更多源**
> 
> 
> ## 💡 项目背景
> 
> 作为一名 AI 工程师，每天的工作离不开：
> - `pip install torch` —— 几百 MB 的 wheel 包下载到地老天荒
> - `docker pull nvidia/cuda` —— 几个 GB 的镜像层反复下载
> - `huggingface-cli download` —— 模型文件从 HuggingFace 蜗牛般爬过来
> 
> 公司内网有代理，但单线程下载大文件依然慢得让人崩溃。重复下载相同的包？不存在的缓存。忍无可忍，于是写了这个工具。
> 
> **aimirror** = 智能路由 + 并行分片下载 + 本地缓存，让下载速度飞起来。
> 
> 
> ## ✨ 功能特性
> 
> - **⚡ 并行下载** —— HTTP Range 分片，多线程并发，榨干带宽
> - **💾 智能缓存** —— 基于文件 digest 去重，LRU 自动淘汰
> - **🎯 动态路由** —— 小文件直接代理，大文件自动并行
> - **🔗 多源支持** —— Docker Hub、PyPI、CRAN、HuggingFace 开箱即用
> - **🔌 任意扩展** —— 只要是 HTTP 下载，配置一条规则即可几十倍加速
> - **📝 内容改写** —— 自动改写 HTML/JSON 响应中的链接，无缝代理
> - **🎛️ 特殊处理** —— 支持自定义 Handler 处理复杂场景（如 Docker Registry）
> - **🚦 并发控制** —— 全局下载并发限制，防止资源耗尽
> - **🔄 路径重写** —— 灵活的路径替换规则，适配各种 API 差异
> - **🔑 缓存优化** —— 支持原始 URL 作为缓存 key，解决临时签名问题
> 
> 
> ## 🔥 性能实测
> 
> 
> ### PyPI 包安装加速对比
> 
> 使用 `uv pip install` 安装 148 个依赖包（含 torch、transformers 等大包）：
> 
> | 模式 | 解析依赖 | 准备包 | 总耗时 | 加速比 |
> |------|---------|--------|--------|--------|
> | ❌ 仅代理 (900KB/s) | 17m 04s | 14m 20s | **~31 分钟** | 1x |
> | ✅ aimirror (170MB/s) | 34.78s | 45.81s | **~80 秒** | **23x** |
> 
> > 💡 **实测环境**: 公司内网代理，带宽瓶颈明显。使用 aimirror 后从 900KB/s 飙升至 170MB/s，**提速近 200 倍**！
> 
> 
> ### 缓存效果
> 
> | 场景 | 耗时 | 速度 | 说明 |
> |------|------|------|------|
> | 首次下载 | 80s | 170MB/s | 并行下载 + 写入缓存 |
> | 缓存命中 |  🔌 **扩展能力**: 只要是 HTTP 下载，在 `config.yaml` 中添加一条规则即可接入加速，无需启动多个服务。
> 
> 
> ## 🏗️ 架构
> 
> ```mermaid
> flowchart LR
>     subgraph Client["客户端"]
>         PIP[pip install]
>         DOCKER[docker pull]
>         HF[huggingface-cli]
>         R[R install.packages]
>     end
> 
>     subgraph aimirror["aimirror 服务"]
>         ROUTER[路由匹配器router.py]
>         HANDLER[特殊处理器handlers/]
>         PROXY[直接代理proxy]
>         DOWNLOADER[并行下载器downloader.py]
>         CACHE[缓存管理器cache.py]
>         REWRITE[内容改写content_rewrite]
>     end
> 
>     subgraph UpstreamProxy["上游代理 (可选)"]
>         COMPANY_PROXY[公司代理]
>     end
> 
>     subgraph Upstream["上游服务"]
>         PYPI[PyPI]
>         DOCKER_HUB[Docker Hub]
>         HF_HUB[HuggingFace]
>         CRAN[CRAN]
>     end
> 
>     PIP --> ROUTER
>     DOCKER --> ROUTER
>     HF --> ROUTER
>     R --> ROUTER
> 
>     ROUTER -->|匹配 handler| HANDLER
>     ROUTER -->|小文件/代理策略| PROXY
>     ROUTER -->|大文件/并行策略| DOWNLOADER
> 
>     HANDLER --> PROXY
>     PROXY -->|需要改写| REWRITE
>     REWRITE --> Client
>     PROXY -->|直接返回| Client
>     
>     DOWNLOADER --> CACHE
>     CACHE -->|命中| Client
>     CACHE -->|未命中| UpstreamProxy
>     PROXY --> UpstreamProxy
> 
>     UpstreamProxy -.->|可选| Upstream
>     UpstreamProxy -->|直连| Upstream
> 
>     DOCKER_HUB -->|返回文件| CACHE
>     PYPI -->|返回文件| CACHE
>     HF_HUB -->|返回文件| CACHE
>     CRAN -->|返回文件| CACHE
> ```
> 
> 
> ## 🚀 快速开始
> 
> 
> ### 方式一：pip 安装（推荐）
> 
> ```bash
> 
> # 安装
> pip install aimirror
> 
> 
> # 启动
> aimirror
> 
> 
> # 使用
> curl http://localhost:8081/health
> ```
> 
> 
> ### 方式二：源码安装
> 
> ```bash
> 
> # 克隆仓库
> git clone https://github.com/livehl/aimirror.git
> cd aimirror
> 
> 
> # 安装依赖
> pip install -r requirements.txt
> 
> 
> # 启动
> python main.py
> 
> 
> # 使用
> curl http://localhost:8081/health
> ```
> 
> 
> ## 🔧 客户端配置
> 
> 
> ### pip / uv
> 
> ```bash
> 
> # 临时使用（单次安装）
> pip install torch --index-url http://localhost:8081/simple --trusted-host localhost:8081
> 
> 
> # 全局配置（推荐）
> pip config set global.index-url http://localhost:8081/simple
> pip config set global.trusted-host localhost:8081
> 
> 
> # 使用 uv（速度更快）
> uv pip install torch --index-url http://localhost:8081/simple
> 
> 
> # 或使用环境变量
> export HTTPS_PROXY=http://localhost:8081
> pip install torch
> ```
> 
> 
> ### Docker
> 
> ```bash
> 
> # 配置 daemon.json
> sudo tee /etc/docker/daemon.json  **⚠️ 重要提示**：Docker 镜像层文件通常很大（GB 级别），建议将 `chunk_size` 设置为 `0`（自动模式）。
> > 
> > 自动模式下，`chunk_size = 文件总大小 / concurrency`，这样可以：
> > - 避免固定小分片导致分片数量过多
> > - 减少 Docker Registry token 因超时失效的概率
> > - 保持并发数不变，同时优化分片大小
> >
> > 配置示例见 `config.yaml` 中的 `docker-blob` 规则。
> 
> 
> ### HuggingFace (huggingface-cli)
> 
> ```bash
> 
> # 设置环境变量
> export HF_ENDPOINT=http://localhost:8081
> 
> 
> # 下载模型（支持所有文件类型：.gguf, .bin, .safetensors, .json 等）
> huggingface-cli download TheBloke/Llama-2-7B-GGUF llama-2-7b.Q4_K_M.gguf
> 
> 
> # 下载整个仓库
> huggingface-cli download meta-llama/Llama-2-7b-hf --local-dir ./models
> ```
> 
> 或使用 Python:
> ```python
> import os
> os.environ["HF_ENDPOINT"] = "http://localhost:8081"
> 
> from huggingface_hub import hf_hub_download, snapshot_download
> 
> 
> # 下载单个文件
> hf_hub_download(repo_id="TheBloke/Llama-2-7B-GGUF", filename="llama-2-7b.Q4_K_M.gguf")
> 
> 
> # 下载整个仓库
> snapshot_download(repo_id="meta-llama/Llama-2-7b-hf", local_dir="./models")
> ```
> 
> 
> ### R (CRAN)
> 
> ```r
> 
> # 在 R 控制台中设置
> options(repos = c(CRAN = "http://localhost:8081"))
> 
> 
> # 或在 .Rprofile 中永久配置
> cat('options(repos = c(CRAN = "http://localhost:8081"))\n', file = "~/.Rprofile")
> ```
> 
> 
> ### Conda
> 
> ```bash
> 
> # 修改 .condarc
> cat >> ~/.condarc  **注意**：上游代理请在 `config.yaml` 中配置 `server.upstream_proxy`，不支持环境变量方式。
> 
> 
> ## ⚙️ 配置示例
> 
> ```yaml
> 
> # fast_proxy 配置文件
> server:
>   host: "0.0.0.0"
>   port: 8081
>   upstream_proxy: ""  # 上游代理，默认空表示直连
>   public_host: "127.0.0.1:8081"  # 对外访问地址，用于 HTML 链接改写
>   max_concurrent_downloads: 100  # 全局最大并发下载数，超过则排队
> 
> cache:
>   dir: "/data/fast_proxy/cache"
>   max_size_gb: 100
>   lru_enabled: true
> 
> rules:
>   # Docker Registry 代理（/v2/ 和 /v2/auth 在代码中特殊处理）
>   - name: docker-blob
>     pattern: "/v2/.*/blobs/sha256:[a-f0-9]+"
>     upstream: "https://registry-1.docker.io"
>     strategy: parallel
>     min_size: 1       # all
>     concurrency: 20
>     chunk_size: 0     # 自动模式：总大小/concurrency，避免超大文件分片过多导致 token 超时
>   - name: docker-registry
>     pattern: "/v2/.*"
>     upstream: "https://registry-1.docker.io"
>     strategy: proxy
>     handler: handlers.docker  # 特殊处理模块路径
>     
>   - name: pip-packages
>     pattern: "/packages/.+\\.(whl|tar\\.gz|zip)$"
>     upstream: "https://pypi.org"
>     strategy: parallel
>     min_size: 1       # all
>     concurrency: 20
>     chunk_size: 5242880      # 5MB per chunk
>     
>   - name: r-package
>     pattern: "/src/contrib/.*"
>     upstream: "https://cran.r-project.org"
>     strategy: parallel
>     min_size: 102400       # 100K
>     concurrency: 20
>     chunk_size: 5242880
> 
>   - name: huggingface-files
>     pattern: '/.*/(blob|resolve)/[^/]+/.+'
>     upstream: "https://huggingface.co"
>     strategy: parallel
>     min_size: 102400       #100k
>     concurrency: 20
>     chunk_size: 10485760    # 10MB per chunk
>     cache_key_source: original  # 使用原始 URL 作为缓存 key（避免临时签名影响缓存命中）
>     path_rewrite:
>       - search: "/blob/"
>         replace: "/resolve/"
>     # HEAD 请求时需要额外保留的响应头（用于元数据获取）
>     head_meta_headers:
>       - "x-repo-commit"
>       - "x-linked-etag"
>       - "x-linked-size"
>       - "etag"
> 
>   - name: huggingface-api
>     pattern: '/api/models/.*'
>     upstream: "https://huggingface.co"
>     strategy: proxy
> 
>   # 示例：其他使用临时签名 URL 的站点
>   # - name: example-signed-url
>   #   pattern: '/signed-download/.*'
>   #   upstream: "https://example.com"
>   #   strategy: parallel
>   #   min_size: 10485760
>   #   concurrency: 10
>   #   cache_key_source: original  # 使用原始 URL 作为缓存 key
> 
>   - name: default
>     pattern: ".*"
>     upstream: "https://pypi.org"
>     strategy: proxy
>     content_rewrite:         # 响应内容改写配置
>       content_types:         # 匹配的 Content-Type（HTML 和 JSON）
>         - "text/html"
>         - "application/json"
>         - "application/vnd.pypi.simple"
>       targets:               # 要替换的目标 host 列表
>         - "https://files.pythonhosted.org"
> 
> logging:
>   level: "INFO"
>   file: "/data/fast_proxy/fast_proxy.log"
> ```
> 
> 
> ### 配置说明
> 
> #### Server 配置
> 
> | 字段 | 说明 | 默认值 |
> |------|------|--------|
> | `server.host` | 服务监听地址 | `"0.0.0.0"` |
> | `server.port` | 服务监听端口 | `8081` |
> | `server.upstream_proxy` | 上游代理地址，空字符串表示直连 | `""` |
> | `server.public_host` | 对外访问地址，用于 HTML 链接改写 | `"127.0.0.1:8081"` |
> | `server.max_concurrent_downloads` | 全局最大并发下载数，超过则排队 | `100` |
> 
> #### Cache 配置
> 
> | 字段 | 说明 | 默认值 |
> |------|------|--------|
> | `cache.dir` | 缓存目录路径 | `"./cache"` |
> | `cache.max_size_gb` | 缓存最大容量（GB） | `100` |
> | `cache.lru_enabled` | 是否启用 LRU 自动淘汰 | `true` |
> 
> #### Rules 配置
> 
> | 字段 | 说明 | 示例 |
> |------|------|------|
> | `rules[].name` | 规则名称 | `"docker-blob"` |
> | `rules[].pattern` | URL 匹配正则表达式 | `"/v2/.*/blobs/sha256:[a-f0-9]+"` |
> | `rules[].u

## 延伸閱讀

相關概念：[[自動化]] · [[CI/CD]] · [[容器化]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

[GitHub](https://github.com/livehl/aimirror)

## 相關收錄

> [!note]- 直接競品（同子分類：下載加速器）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "下載加速器" AND file.name != "livehl--aimirror"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "livehl--aimirror"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "livehl--aimirror" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "livehl--aimirror"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CI/CD","容器化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "livehl--aimirror" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "livehl" AND file.name != "livehl--aimirror"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/livehl--aimirror");
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
> const me = dv.page("Repos/livehl--aimirror");
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
> const me = dv.page("Repos/livehl--aimirror");
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
> const me = dv.page("Repos/livehl--aimirror");
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
> const me = dv.page("Repos/livehl--aimirror");
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

> **2026-03-11** — 首次收錄
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

- [[2026-03-11|2026-03-11]] — 首次收錄，727 stars
