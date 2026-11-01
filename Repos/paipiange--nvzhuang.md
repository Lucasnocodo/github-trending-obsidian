---
repo: paipiange/nvzhuang
url: https://github.com/paipiange/nvzhuang
owner: paipiange
owner_type: User
language: Go
license: MIT
description: "1407 张 AI 女装参考图集与虚拟试穿网站，支持中英检索、OpenAI Images / Gemini / 豆包及自定义 Base URL、API Key、模型。https://github.com/paipiange/nvzhuang"
homepage: "https://paipiange.github.io/nvzhuang/"
stars: 1793
stars_per_day: 598
forks: 478
open_issues: 0
created: 2026-10-29
pushed_at: 2026-10-31
first_seen: 2026-11-01
week: "2026-W45"
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
last_reviewed: 2026-11-01
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-04"
contributor_count: 0
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 128237
readme_length: 9788
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-01"
star_history: "2026-11-01:1793"
tags:
  - github
  - "category/other"
  - "lang/go"
aliases:
  - "nvzhuang"
  - "paipiange/nvzhuang"
---

# nvzhuang

**1.8k** stars · **598** stars/天 · 建立 3 天前 · Go · MIT

```dataviewjs
const me = dv.page("Repos/paipiange--nvzhuang");
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
> 1407 张 AI 女装参考图集与虚拟试穿网站，支持中英检索、OpenAI Images / Gemini / 豆包及自定义 Base URL、API Key、模型。https://github.com/paipiange/nvzhuang

## 專案簡介

1407 张 AI 女装参考图集与虚拟试穿网站，支持中英检索、OpenAI Images / Gemini / 豆包及自定义 Base URL、API Key、模型。https://github.com/paipiange/nvzhuang

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/paipiange--nvzhuang");
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
> const me = dv.page("Repos/paipiange--nvzhuang");
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
| Forks | 478 |
| Open Issues | 0 |
| Issue 解決率 | 100% (6 closed) |
| 最後推送 | 2026-10-31 |
| 建立日期 | 2026-10-29 |
| 官方網站 | [Link](https://paipiange.github.io/nvzhuang/) |
| Repo 大小 | 125.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/paipiange/nvzhuang) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Go" : 51
>     "HTML" : 47
>     "JavaScript" : 1
> ```

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-29 ~ 2026-10-31）
> **活躍天數** 3 天 · **最新 commit** docs: 更新 README Star 增长趋势为动态 Star History 图表

## README 摘錄

> [!info]- 展開查看原文 README
> # 拍片哥女装 · AI 服装参考图集 (COSTUME-DB-01)
> 
> 一个深色主题的纯净服装参考图集网站，收录 **1407 张** 人物不入镜的 AI 生成服装图像（2:3 比例），支持中英文双语浏览、多维检索，并配备可选的 AI 一键换装试穿。
> 
> > 👗 **【Linux.do 3级常任理事专属彩蛋】**  
> > 听说在 [LINUX DO](https://linux.do/) 社区只要升到 **3 级（常任理事）** 就可以解锁“看女装大佬”的保留节目？身为一名尊贵的 Linux.do 3 级老兵，逛了一圈发现坛里的女装资源还不够看，干脆亲手搓了这个 **「拍片哥女装」** 项目！  
> > 不仅收录了 1407 套纯净高质量服装图，还顺手接了 AI 虚拟换装后端——这下各位佬友哪怕现实中没有小裙子，直接传张自拍照就能一键无痛变身“女装大佬”出道了 😂！
> 
> > 🔗 **在线预览**：https://paipiange.github.io/nvzhuang/  
> > ⭐ **GitHub 源码**：https://github.com/paipiange/nvzhuang  
> > 💃 **兄弟项目（AI 姿势参考与生图工坊）**：https://github.com/paipiange/ai-pose-gallery-zh  
> > 💡 **原作者推文 / 灵感来源**：X [@giaaibusi](https://x.com/giaaibusi)  
> > 🐧 **社区友链**：[LINUX DO (https://linux.do/)](https://linux.do/)
> 
> 
> # 1. 复制环境变量模板并填入你的 Key（如国内免翻墙的豆包 ARK_API_KEY，或 OpenAI Key）
> cp backend/.env.example backend/.env
> 
> 
> ## ⏱️ 10 秒了解本项目
> 
> - 🆓 **免费使用（无需部署 / 无需 Key）**：1407 套 AI 服装参考图库浏览、分类筛选、中英双语双向检索、大图全屏查看、基础搭配台与同款跳转，由纯前端静态驱动，在线打开即可使用。
> - ⚙️ **自选扩展（需自建后端 / 需自备 Key）**：真实 AI 试衣换装功能依赖 `backend/` 的 GoFrame 服务。需自行配置大模型（如 GPT Image 2、豆包 Seedream 或 Gemini）的 API Key 与 Base URL，调用将消耗对应的第三方模型配额。
> - 📜 **完全可商用 · 免费开源**：基于 [MIT License](LICENSE) 全量开源，代码与图集资源完全开放，支持自由商用创作、设计参考及二次开发。详见 [合规审计报告](docs/LINUXDO_RELEASE_AUDIT.md)。
> 
> 
> ## 📸 预览
> 
> | 中文模式 | 英文模式 | 关键词搜索 |
> |---|---|---|
> |  |  |  |
> 
> 
> ## 👗 AI 换装效果演示
> 
> 系统支持上传真实人像与选中的服装，通过 AI 生图大模型进行衣物迁移换装，实现精准保留面容、贴合人体形态的虚拟试穿效果：
> 
> | ① 选中的服装（图 1） | ② 上传的模特照片（图 2） | ③ AI 换装合成效果（图 3） |
> |:---:|:---:|:---:|
> |  |  |  |
> | **参考服装图**（图集中的精选女装） | **模特原图**（用户上传的人像日常照） | **AI 换装效果（图 1 + 图 2 ➔ 图 3）**（保留模特五官发型，自然融合服饰材质与剪裁） |
> 
> 
> ## 🎬 兄弟项目联动：姿势参考 + 人物参考 → AI 生成结果
> 
> 如果你不仅想为模特挑选服装，还希望**自由掌控人体的拍摄姿势、骨架动作与构图视角**，推荐搭配我的另一个开源项目一起使用：  
> 👉 **[拍片哥 · AI 姿势参考库与生图工坊 (AI Pose Gallery & Studio)](https://github.com/paipiange/ai-pose-gallery-zh)**
> 
> 该项目收录了 **288 组 / 1439 张** AI 人体多视角姿势参考图（日文数据完整汉化），内置「拍片哥 AI 姿势生图与试穿工坊」，支持骨架动作锁定、真实面料试穿与面容复刻：
> 
> 选择姿势骨架控制动作与构图，再上传人物/服装参考，即可生成同时保留目标姿势、人物面容与穿搭特征的完整图片：
> 
> | ① 姿势与构图参考 | ② 人物与服装参考 | ③ AI 融合生成结果 |
> | :---: | :---: | :---: |
> |  |  |  |
> | **锁定身体动作、视角与画面构图**（从 1439 张多角度姿势库中挑选骨架素体） | **提供面容、发型与服装特征**（结合本项目精选服装或上传的模特穿搭） | **AI 融合生成结果（图 1 + 图 2 ➔ 图 3）**（动作精准还原，完美呈现人物与穿搭细节） |
> 
> > **上图即实际工作流：图 1 + 图 2 → 图 3。** 人物头像与服装均为可选输入；只选择姿势，也可以让模型自动完成人物与穿搭设计。  
> > 💡 **联动工作流**：在 [拍片哥女装](https://github.com/paipiange/nvzhuang) 挑选高质量服装设计，在 [拍片哥姿势库](https://github.com/paipiange/ai-pose-gallery-zh) 挑选合适的人体动作构图，两者结合即可生成兼具神韵动作与精美穿搭的专业级 AI 模特大片！
> 
> 
> ## ✨ 功能特性
> 
> - **8 大分类**：春（215）/ 夏（254）/ 秋（244）/ 冬（253）/ 内衣（199）/ 派对（48）/ 泳装（54）/ 性感（140）
> - **中英文双语**：默认中文，右上角一键切换 English
> - **双向检索**：中文（白、蕾丝、连衣裙…）和英文（white、lace、dress…）关键词都能搜索
> - **关键词本地化**：中文模式自动将服装属性翻译为中文展示
> - **交互体验**：分类筛选、实时搜索、无限滚动加载、放大查看、键盘 ←/→ 切换、Esc 关闭、原尺寸 PNG 下载
> - **AI 试穿搭配台**：上传人像后可从图库选服装，也可上传自己的服装图片；自定义服装支持 1 张完整全身穿搭，或按顺序上传 2 张上半身 / 下半身服装
> - **明确错误反馈**：换装校验、接口限流、鉴权和服务异常会同时显示页内提示与可聚焦弹窗
> - **黑白主题**：默认白色主题，可在图库页和试穿页切换黑色 / 白色主题，并记住本机选择
> - **浏览器设置中心**：可保存自己的后端地址、Base URL、API Key、接口协议与模型名；个人配置只保存在当前浏览器，后端仅按单次请求临时使用
> - **本机生成记录**：AI 换装成功后自动保存到当前浏览器的 IndexedDB，可随时查看、下载、单条删除或全部清空，不上传、不跨设备同步
> 
> > 自定义上传的服装原图仅保留在当前页面内存中，不写入本地存储或生成记录；刷新或关闭页面后会自动清除。生成时只将压缩后的图片内容发送到用户配置的换装后端。
> - **电商以图搜同款**：大图详情与试穿操作区支持一键唤起淘宝图片搜索，快速查找现实中在售的同款服饰
> - **ComfyUI 本地离线生图**：支持零成本、免 API Key 本地私密运行；集成阿里开源 **Qwen-Image-Edit-2511 (Int8) + 4 步极速 Lightning LoRA** 与 **MiniMax H3** 双工作流，具备自动容灾回退能力
> 
> 
> ## 🤖 AI 换装（可选功能）
> 
> 「AI 换装」需要一个后端服务，把服装真实地「穿」到人像上。后端位于 `backend/`（GoFrame v2），支持**多模型可插拔**：
> 
> | 模型别名 | 模型 | 协议 | 说明 |
> |---|---|---|---|
> | `comfyui` | **Qwen-Image-Edit-2511**（优先） / MiniMax H3 | ComfyUI 本地 API | **本地零成本离线方案**，4 步极速换装，无审查限制，未就绪自动回退 H3 |
> | `gemini` | **Nano Banana 2**（`gemini-3.1-flash-image`） | Google generateContent | **云端推荐默认**，对真人换装场景无 moderation 阻断 |
> | `doubao` | 豆包 Seedream（火山方舟） | 火山方舟 | 国内可用，无需代理网络 |
> | `gpt-image` | **GPT Image 2**（`gpt-image-2`） | OpenAI Images | 兼容 OpenAI 协议，支持第三方中转与代理 |
> | `qwen` / `zhipu` / `siliconflow` … | 通义万相 / 智谱 CogView / 硅基流动 | OpenAI Images 兼容 | 按需在配置中开启 |
> 
> > 三个关键点都可配置：**API Key、Base URL、模型名**。加一个国内模型只需在配置里新增一段，无需改代码。
> 
> 前端 AI 试穿页右上角提供「设置中心」，支持两种使用方式：
> 
> 1. **服务器预设**：继续使用后端 `config.yaml` / 环境变量中的模型配置。
> 2. **个人模型配置**：在当前浏览器保存协议、Base URL、API Key 和模型名，生成时随本次请求临时发送给后端。后端不把这些字段写入数据库、配置文件或业务日志。
> 
> > 浏览器本地保存适合个人设备使用。共享设备使用完毕后，请在设置中心点击「清除本地配置」。个人 Base URL 默认禁止指向 localhost、内网和保留地址，避免公开后端被用作内网请求代理。
> 
> 
> ### 配置模型
> 
> 编辑 `backend/manifest/config/config.yaml`（模板见 `config.example.yaml`）：
> 
> ```yaml
> llm:
>   models:
>     gpt-image:                     # 前端请求用的别名
>       provider: openai             # 协议：openai / doubao / gemini
>       apiKey: ""                   # 直接填 Key，或留空用环境变量
>       envKey: "OPENAI_API_KEY"     # 环境变量名（优先级高于 apiKey）
>       baseURL: "https://api.openai.com/v1"   # Base URL 可改（支持中转/代理）
>       model: "gpt-image-2"         # 真实模型名
> 
>     doubao:                        # 豆包（国内可用）
>       provider: doubao
>       envKey: "ARK_API_KEY"
>       baseURL: "https://ark.cn-beijing.volces.com/api/v3"
>       model: "doubao-seedream-3-0-t2i-250415"
> 
>     gemini:
>       provider: gemini
>       envKey: "GEMINI_API_KEY"
>       baseURL: "https://generativelanguage.googleapis.com/v1beta"
>       model: "gemini-3.1-flash-image"
> ```
> 
> **接入任意 OpenAI 兼容的国内生图模型**（通义万相、智谱、硅基流动等），加一段即可：
> 
> ```yaml
>     qwen:                          # 通义万相示例
>       provider: openai
>       envKey: "DASHSCOPE_API_KEY"
>       baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
>       model: "wanx2.1-t2i-turbo"
> 
>     # 本地 ComfyUI（零成本离线极速换装，支持 Qwen-Image-Edit / MiniMax H3）
>     comfyui:
>       provider: comfyui
>       baseURL: "http://127.0.0.1:8188"
>       model: "qwen-image-edit-2511"
>       workflowPath: "workflows/comfyui_qwen_image_edit_2511_api.json"
> ```
> 
> 
> ### 🎨 ComfyUI 本地离线模式（推荐：零成本、免 Key、超快速度）
> 
> 如果你的电脑拥有独立显卡（或局域网有运行 ComfyUI 的主机），可以完全免 Key 使用本地生图：
> 1. 启动本地 ComfyUI（默认 `http://127.0.0.1:8188`）；
> 2. 放入 `Qwen-Image-Edit-2511` 的模型与 4 步 Lightning LoRA（详见 [`backend/README.MD`](backend/README.MD)）；
> 3. 打开网页右上角 **设置中心**，选择「ComfyUI 本地」，点击「测试连接」成功后保存，即可享受 4 步极速离线换装体验。系统已内置双模型自适应能力，未就绪时会自动回退至 H3 方案。
> 
> 
> ### 🚀 后端部署（优先推荐 Docker）
> 
> 后端推荐使用 **Docker / Docker Compose** 部署，无需在宿主机安装 Go 编译环境，开箱即用。
> 
> #### 方式一：Docker Compose（推荐，最省心）
> 
> ```bash
> 
> # 2. 一键启动后端（内置开箱即用兜底，默认监听 8000 端口）
> docker compose up -d
> 
> 
> # 服务启动后监听在 http://localhost:8000
> ```
> 
> > 提示：若需深度定制模型或高级路由，可复制配置文件模板：`cp backend/manifest/config/config.example.yaml backend/manifest/config/config.yaml`（未复制时系统也会自动使用模板并稳定监听 8000 端口）。
> 
> #### 方式二：Docker Run 单命令运行
> 
> ```bash
> cd backend
> 
> 
> # 构建镜像
> docker build -f manifest/docker/Dockerfile -t costume-tryon .
> 
> 
> # 运行容器（按需注入模型 Key，例如豆包或 OpenAI）
> docker run -d --name costume-tryon \
>   -p 8000:8000 \
>   -e ARK_API_KEY="你的豆包ArkKey" \
>   -e OPENAI_API_KEY="sk-你的OpenAIKey" \
>   costume-tryon
> ```
> 
> #### 方式三：无 Docker 本地运行
> 
> - **Windows 用户**：直接双击 `backend/restart.bat` 一键自动编译并启动服务。
> - **命令行运行**：
>   ```bash
>   cd backend
>   # 可选：复制配置文件（不复制时也会自动安全回退加载模板并监听 8000）
>   # cp manifest/config/config.example.yaml manifest/config/config.yaml
>   export ARK_API_KEY="你的Key"   # Windows PowerShell 用 $env:ARK_API_KEY="你的Key"
>   go run main.go                 # 服务稳定监听 :8000
>   ```
> 
> 
> ### 🔗 前端对接后端
> 
> 前端静态页面通过以下顺序识别换装后端地址（优先级从高到低）：
> 
> 1. **设置中心**：用户在当前浏览器保存的「后端 API 地址」（跨源外部公网后端须使用 `HTTPS`）
> 2. **全局变量**：在 HTML 加载前配置 `window.AI_API_URL = "http://localhost:8000"`
> 3. **URL 参数**：`https://你的前端地址/?tryon=http://localhost:8000`（安全约束：为防止钓鱼窃取 API Key 与私密照片，`?tryon=` 仅允许同源或本机回环 `localhost/127.0.0.1`；外部后端须在设置中心显式保存）
> 4. **本地回退**：本地以 `localhost` 或 `127.0.0.1` 访问前端时，默认自动连接 `http://127.0.0.1:8000`
> 
> 
> ### 🛡️ 接口安全与资源限制（公网部署必备）
> 
> 后端原生提供企业级调用鉴权与高防资源限制（详见 [`backend/DEPLOY.md`](backend/DEPLOY.md)）：
> 
> 1. **接口访问鉴权**：支持 Bearer Token 校验，服务端安全保存 SHA-256 摘要与恒定时间防侧信道比对；前端设置中心支持单独保存「后端访问 Token」，不与大模型 Key 混淆。
> 2. **精确 CORS 白名单**：严格域名匹配，彻底杜绝跨域滥刷与盗链。
> 3. **频率与额度保护**：内置令牌桶限流（默认 10 次/分）与 UTC 自然日调用额度（默认 100 次/天），超限返回标准 `429` 业务码。
> 4. **并发控制**：全局（默认 2 并发）与单调用主体（默认 1 并发）严格锁定，模型生图不排队堆积。
> 5. **图片校验与前端自适应压缩**：
>    - 仅支持 JPEG / PNG / WebP 真实图像内容探测，严格防范伪造扩展名与代码注入；
>    - 单图上限 8 MiB、两图合计 16 MiB、长宽限制 256~8192 px、总像素严格限制在 2000 万以内（防止解压像素炸弹导致服务器 OOM）；
>    - 前端上传照片时自适应缩放：任一边小于 256 px 时自动等比放大到合规尺寸，高清模式最长边 2048 px，并阶梯压缩（WebP 优先，质量 0.90~0.75）。
> 
> > 完整的多模型接入、生产环境 Nginx 反代与安全加固说明见 [`backend/DEPLOY.md`](backend/DEPLOY.md)。
> 
> 
> ## 🚀 前端本地启动
> 
> 本项目前端是纯静态站点，无需构建。任选一种方式运行：
> 
> ```bash
> 
> # 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/paipiange/nvzhuang) · [官方網站](https://paipiange.github.io/nvzhuang/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "paipiange--nvzhuang"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Go" AND file.name != "paipiange--nvzhuang" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W45" AND file.name != "paipiange--nvzhuang"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/paipiange--nvzhuang");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "paipiange--nvzhuang" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "paipiange" AND file.name != "paipiange--nvzhuang"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/paipiange--nvzhuang");
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
> const me = dv.page("Repos/paipiange--nvzhuang");
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
> const me = dv.page("Repos/paipiange--nvzhuang");
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
> const me = dv.page("Repos/paipiange--nvzhuang");
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
> const me = dv.page("Repos/paipiange--nvzhuang");
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

> **2026-11-01** — 首次收錄
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

- [[2026-11-01|2026-11-01]] — 首次收錄，1.8k stars
