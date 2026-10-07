---
repo: nanaism/yomiyasu
url: https://github.com/nanaism/yomiyasu
owner: nanaism
owner_type: User
language: Python
license: MIT
description: "AI生成の日本語を自然な日本語へ推敲するAgent Skill / Agent Skill for Refining AI-Generated Japanese into Natural Japanese"
homepage: ""
stars: 1656
stars_per_day: 276
forks: 37
open_issues: 0
created: 2026-09-30
pushed_at: 2026-10-06
first_seen: 2026-10-04
week: "2026-W41"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v1.0.5"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-04
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-10-10"
contributor_count: 1
engagement: "low"
issue_close_rate: 100
repo_size_kb: 474
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-04"
star_history: "2026-10-04:1342,2026-10-05:1431,2026-10-06:1548,2026-10-07:1656"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/agent_skills"
  - "topic/ai_writing"
  - "topic/antigravity"
  - "topic/claude_code"
  - "topic/codex"
aliases:
  - "yomiyasu"
  - "nanaism/yomiyasu"
---

# yomiyasu

**1.3k** stars · **447** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/nanaism--yomiyasu");
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

`個人專案` `v1.0.5`

`agent-skills` `ai-writing` `antigravity` `claude-code` `codex` `cursor` `gemini` `japanese` `linter` `llm` `nlp` `writing` `writing-assistant` `writing-tool`

> [!summary] 一句話摘要
> AI生成の日本語を自然な日本語へ推敲するAgent Skill / Agent Skill for Refining AI-Generated Japanese into Natural Japanese

## 專案簡介

AI生成の日本語を自然な日本語へ推敲するAgent Skill / Agent Skill for Refining AI-Generated Japanese into Natural Japanese

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/nanaism--yomiyasu");
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
> const me = dv.page("Repos/nanaism--yomiyasu");
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
| Forks | 29 |
| Open Issues | 0 |
| Issue 解決率 | 100% (2 closed) |
| 最後推送 | 2026-10-04 |
| 建立日期 | 2026-09-30 |
| Repo 大小 | 474 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/nanaism/yomiyasu) |
| Topics | `agent-skills` `ai-writing` `antigravity` `claude-code` `codex` `cursor` `gemini` `japanese` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@nanaism](https://github.com/nanaism) | 26 |

**最新版本**：v1.0.5 (2026-10-03)

> [!info]- Release Notes
> ## 概要
> 
> yomiyasu v1.0.5 では、Markdown 内で太字記号（`**`）が複数行にまたがっている場合に、静的リンター（`bold_not_rendered`）が表示崩れと誤認し、提示された修正案を適用すると太字の描画範囲が壊れる問題（Issue #2）を修正しました。
> 
> 従来の行単位での機械的なデリミタ照合を改め、段落や引用などのブロック単位での解析と2段階デリミタペアリングへ刷新しました。また、ブロック境界（引用、見出し、リスト、表）での誤った太字ペアリングの発生を抑止し、SKILL.md および差分チェッカーの安全確認手順を更新しました。
> 
> ## 主な変更点
> 
> ### 1. 複数行太字の誤判定解消と2段階デリミタペアリングの導入 (Issue #2)
> 
> - 従来の行単位のデリミタ照合（`_bold_pairs`）では、2行にまたがる太字の閉じ `**` と、同一行の後続太字の開き `**` が組になり、太字範囲の誤認識や破壊的な修正案が発生していました。
> - 段落・引用・リストなどのブロック単位で複数行太字を正しく解析するロジックへ刷新しました。
> - 1行内の `**` が偶数個であっても 2 つの複数行太字が交差するケースにおいて、誤警告を出さず原文の太字範囲を維持するようにしました。
> - 2段階デリミタペアリングを導入し、正常な複数行太字や括弧・句読点の表示崩れを正しく判定するとともに、内側に空白を含む太字（`** 重要 **` 等）の検出（`how="太字の内側の空白を取る"`）を維持しています。
> 
> ### 2. ブロック境界をまたぐ破壊的な修正案の抑止
> 
> - 行のコンテナ構造（リストマーカー、引用の深さ）を簡易解析する処理（`_line_containers`）を追加しました。
> - 引用の深さの変更（`>` のネストや空白付きマーカー `>  >`）、引用内の見出し・リスト・表、Setext 見出し、外周パイプのない GFM 表（`-- | --`）などの境界を検知し、ブロックを適切に分離してブロック境界をまたぐ不確かな修正案を出さないようにしました。
> 
> ### 3. 指示文およびCLI見出しの安全確認手順への見直し
> 
> - `SKILL.md` (Step 3 / Step 4) の「案のとおりに直す」という指示を改定し、元の太字が表示される書き方であれば変更せず、表示可否と修正案の範囲を確認して不確かな案は目視で整える安全重視の手順に見直しました。
> - 差分検査ツール `yomiyasu_diff.py` の CLI 見出し（`bold_head`）も同様に「表示可否と案の範囲を確認して直す」へ改定しました。
> 
> ### 4. リポジトリ内回帰テストスイートと fixture の整備
> 
> - 外部依存やオンライン API なしに実行可能な単体テストスイート（`tests/test_bold_multiline.py`）および回帰テスト用 fixture（`tests/fixtures/bold_regressions.json`、計 50 ケース）を新規追加しました。
> - 公式 GitHub Markdown API (`mode: gfm`) による実描画テストにおいても、太字範囲の破損・文字変化・改行変化が 0 件であることを確認しています。
> 

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-02 ~ 2026-10-04）
> **活躍天數** 3 天 · **最新 commit** docs: READMEのALGO ARTIS紹介文を推敲・最新化

## README 摘錄

> [!info]- 展開查看原文 README
> # yomiyasu（よみやす）
> 
> [](./LICENSE)
> [](https://github.com/nanaism/yomiyasu/releases)
> 
> 
> ### 2. `npx openskills install`（Cursor / Codexなど）
> 
> ```bash
> npx openskills install nanaism/yomiyasu
> npx openskills sync
> ```
> 
> `AGENTS.md`を経由して各エージェントから利用できるようになります。
> 
> 
> ## これは何？
> 
> 『yomiyasu（よみやす）』は、AIが生成した日本語の不自然さを解消し、人間が読みやすく情報密度の高い日本語へ推敲するためのスキルです。
> 
> 主に技術記事、設計書・仕様書、PR説明文、社内レポートなどの実務的な文章を対象として設計されています。
> 
> Codex、Claude Code、CursorをはじめとするAIコーディング環境に読み込ませて使用してください。
> 
> 開発背景や言語学的病理の分析、複数のコーパスによる検証結果については、以下の解説記事で詳しく紹介しています。
> 
> - **解説記事**: [AI臭い日本語を脱臭するAgent Skill『yomiyasu』を作った話（Zenn）](https://zenn.dev/algoartis/articles/0b1c731881b25c)
> 
> *Built with curiosity at [ALGO ARTIS](https://www.algo-artis.com/)*
> 
> [](https://www.algo-artis.com/)
> 
> ALGO ARTISについて
> 
> > 株式会社ALGO ARTISは、社会基盤の最適化に取り組むスタートアップです。
> > 
> > 電力・海運・化学プラントといった現場では、膨大な制約が絡み合う複雑な運用計画を、今なお熟練者が手作業で組み立てています。
> > 
> > そうした高度な現場業務を数理モデル化し、実用的なヒューリスティック最適化アルゴリズムと業務システムを一貫して開発しています。
> > 
> > 最適化技術を用いた社会インフラの変革に興味がある方は、[公式ウェブサイト](https://www.algo-artis.com/)や[採用情報](https://www.algo-artis.com/career/)をご覧ください。
> 
> ---
> 
> 
> ## 背景と課題
> 
> AIによる文章生成は日常的な道具となりました。一方で、生成された文章には独特のクセが残りやすく、そのままでは実務や技術発信に使いにくい場面が多くあります。
> 
> これまでに様々な文体調整プロンプトやスキルが試みられてきました。しかし、依然として「AI特有の読みにくさ」が残るケースが見られます。
> 
> 従来のアプローチが抱えていた限界は、主に次の4点でした。
> 
> 1. 禁止語の置き換えにとどまる対処  
>    `手触り`や`解像度`、`泥臭い`といった表層の単語を禁止しても、別の曖昧な語へ置き換わるだけで、不自然な文構造そのものは解消されませんでした。
> 2. 編集ルールの過剰適用  
>    修辞規範を過度に与えると、モデルが指示を過剰に解釈し、かえって不自然な造語や大げさな文体を招いていました。
> 3. 主述関係の曖昧さと非生物主語  
>    誰が何をどうするのかが省略されたまま、概念や道具が比喩的な動詞（`壊れる`、`倒す`、`効く`など）と結びつき、読み手側で過剰な文脈補完が必要でした。
> 4. 形式の偏重と情報密度の低下  
>    太字や箇条書きが増加する一方で、手順やコードの仕組みといった核心部分が抽象化され、文章量に対して実質的な情報が希薄化していました。
> 
> ---
> 
> 
> ## 本スキルのアプローチ
> 
> 本スキルは、文章の骨格である統語構造を7つの変換原則として体系化し、主要なLLM環境で自然な日本語へ推敲できるように設計しています。
> 
> 
> ### 7つの変換原則
> 
> 1. SVOCMの完全復元  
>    動作主（開発者、運用者、システムなど）を明確にし、曖昧な指示代名詞（`これ`、`両者`、`片方`など）を具体的な名詞へ復元しています。文単体で意味が通じる構造を維持しています。
> 2. 動作主と働きかけの明確化  
>    仕様書や案内文において主体を曖昧にせず、読者への要請は「〜してください」、機能説明は「〜できます」と役割を整理しています。
> 3. 非生物主語の解体  
>    概念や道具があたかも意思を持つような表現を排し、人間やシステムの客観的な動作へ書き換えています。
> 4. 比喩動詞の技術的操作化  
>    `壊れる`、`倒す`、`効く`、`溶かす`、`潰す`といった比喩表現を、直接的な操作や客観的な状態変化へ置き換えています。
> 5. 不要な前置きと否定対比の肯定化  
>    「重要なのは」といった前置きを省き、二重否定や修辞的対比を簡潔な肯定文へ再編しています。
> 6. 意味保持と不要な情報増補の防止  
>    原文の技術的制約や数値を損なわず、AI特有の免責事項や一般論を削っています。原文に存在しない主体や仕様を勝手に追加せず、客観的事実のみを残しています。
> 7. 呼吸に合った文長と読点・装飾の抑制  
>    平均30〜45文字を目安とし、1文あたりの読点を0〜2個に抑えています。絵文字、文末コロン、過剰な太字や不要な半角空白を排除しています。
> 
> ---
> 
> 
> ## 変換例と検証データ
> 
> オープンライセンス（政府標準利用規約2.0 / CC BY 4.0互換）の公的文書およびOSS設計ノートを題材に、素のLLM出力と本スキルによる推敲出力を比較検証しました。
> 
> 
> ### 比較例1: 業務・仕様解説
> 
> #### 修正前のAI生成文
> > ここで**重要なのは、単なるパーツの共通化ではなく、組織の意思決定OSとしてのガバナンス**です。
> > 
> > 従来の開発では、画面ごとに手触り感を探りながらパーツを作っていました。しかし、片方だけを見て画面を作ると、もう片方のアクセシビリティが**静かに壊れます**。そこでデザインシステムという**強固な土台**を置くことで、開発者の**解像度が一段上がります**。
> > 
> > デザインシステム導入のメリットは、主に次の3点です。
> > - **開発速度の加速**: コンポーネントを再利用することで、時間を溶かさずに済みます。
> > - **仕様の収斂**: 判断に迷うスタイルは、あらかじめ**共通側に倒します**。
> > - **アクセシビリティの担保**: ガイドラインが規律を要求するため、事故を未然に防ぐことができます。
> > 
> > もちろん、これは「デザイナーが不要になる」ことを意味しません。日々の開発に**地味に効いてきます**。ぜひ参考にしてみてください！
> 
> #### 本スキル適用後
> > デザインシステムを導入する目的は、ボタンや入力欄などのUIパーツを一から作成する負担を減らし、画面全体の情報設計に集中することにあります。
> > 
> > 各コンポーネントの見た目やアクセシビリティ要件があらかじめ定義されていれば、デザイナーと開発者はコードの記述や画面遷移の実装を円滑に進められます。スタイルの指定に迷った場合でも、定義済みの標準コンポーネントを選択すれば表示の不整合を防ぐことが可能です。
> > 
> > 導入によってデザイン作業そのものが不要になるわけではありません。しかし、単純なパーツ作成にかかる工数を削減することで、本来注力すべき使い勝手の検証や品質向上に時間を充てられるようになります。結果として、利用者が迷わず操作できる高品質な行政サービスの提供につながります。
> 
> #### 主な改善点
> 比喩動詞（`静かに壊れる`、`共通側に倒す`、`地味に効く`、`時間を溶かす`）を直接的な操作や状態変化へ修正しました。また、`手触り感`、`意思決定OS`、`解像度`といった曖昧な流行語を排除し、具体的な作業内容を記述しています。不要な太字や過度な箇条書きを抑え、前後のつながりが自然な地の文へ再構築しました。
> 
> ---
> 
> 
> ### 比較例2: 技術解説
> 
> #### 修正前のAI生成文
> > 非同期処理における**最大の落とし穴**は、ネットワークの瞬断です。
> > 
> > **依存構造は分割できない。動かしながら引き返す。**
> > 
> > 単にメッセージを流すだけでは、背後でデータが**静かに壊れます**。前提を、経路が代わりに添えてくれるわけではありません。
> > 
> > そこで**地味に効いてくる**のが、以下の3つの原則です。
> > - **冪等性の担保**: 重複した処理は**黙ってスキップ**します。
> > - **安全なリトライ**: 指数バックオフを挟むことで、DBの負荷を逃がします。
> > - **DLQへの退避**: 破綻したメッセージは隔離し、原因を1つずつ**潰していきます**。
> > 
> > デバッグで丸一日**時間を溶かさない**ためにも、この境界線を意識した設計が不可欠です。いかがでしたでしょうか。
> 
> #### 本スキル適用後
> > 非同期キューを用いたメッセージ処理では、通信の切断やサーバーの再起動によって処理が中断されるおそれがあります。メッセージの二重送信が発生しても不整合を起こさないよう、受信側のプログラムで冪等性を担保する設計が不可欠です。
> > 
> > 具体的な対策として、メッセージの固有IDをデータベースに記録し、同一IDをすでに処理済みであれば追加処理を行わずに終了します。外部APIの呼び出しに失敗した場合は、待機時間を徐々に延ばしながら再試行し、規定回数を超えて失敗したデータはデッドレターキュー（DLQ）へ退避して手動調査に回す構成をとります。エラー時の復旧手順をあらかじめ決めておけば、障害発生時にも迅速な原因究明が可能です。
> 
> #### 主な改善点
> `前提を経路が添える`や`依存構造は分割できない`といった主語のない抽象文を解体し、動作主と対象を明記しました。あわせて`黙ってスキップ`、`潰していく`、`時間を溶かす`を正確な技術用語や操作へ置き換えています。冒頭と末尾にあった不要な煽り文句や定型文（`最大の落とし穴`、`いかがでしたでしょうか`）も削除しました。
> 
> ---
> 
> 
> ## インストール
> 
> 
> ### 1. `npx skills add`（推奨）
> 
> ```bash
> 
> # 新規インストール
> npx skills add nanaism/yomiyasu
> 
> 
> # 最新版へのアップデート
> npx skills update yomiyasu
> ```
> 
> Claude Codeなどのエージェント設定ディレクトリへインストール・更新します（すでに導入済みの場合は `npx skills update yomiyasu` で最新版へ更新できます）。
> 
> 
> ### 3. Claude Code プラグイン
> 
> ```text
> /plugin marketplace add nanaism/yomiyasu
> /plugin install yomiyasu@yomiyasu
> ```
> 
> 
> ### 4. ZIPファイルからの登録（Claude.ai Web版など）
> 
> Claudeのカスタムスキル登録機能（Web版など）を利用する場合、GitHubの「Download ZIP」から取得したリポジトリ全体のZIPをアップロードすると、別形式の設定ファイル（`plugin.json`）や重複ファイルを検知して登録エラーになる仕様です。
> 
> そのため、スキル本体のみを固めた登録専用のZIPファイルを用意しています。
> 
> 1. **専用ZIPのダウンロード**  
>    以下のリンクから、登録専用のZIPファイルをダウンロードします。  
>    [yomiyasu.zip（最新版ダウンロード）](https://github.com/nanaism/yomiyasu/releases/latest/download/yomiyasu.zip)
> 2. **そのままアップロード**  
>    ダウンロードした `yomiyasu.zip` を解凍せず、Claudeのスキル登録画面にそのままアップロードしてください。
> 
> ※ すでにリポジトリ全体のZIPをダウンロード済みの場合は、解凍したフォルダの中から `SKILL.md` と `references/` フォルダの2つだけを選択して右クリックからZIP圧縮し、そのZIPファイルをアップロードすることでも登録可能です。
> 
> 
> ### 他の日本語校正スキルとの干渉について
> 
> 文体調整や文章校正を目的とした他のエージェントスキルが同一環境で同時に有効化されている場合、指示同士が干渉し合って意図しない出力になるおそれがあります。本スキルを利用する際は、類似の日本語校正スキルを一時的に無効化して使用してください。
> 
> ---
> 
> 
> ## 使い方
> 
> AIチャットやコーディングエージェントに対して、下書きを貼り付けて次のように指示します。
> 
> ```text
> この文章を読みやすくして。
> （ここに修正したい文章を貼り付け）
> ```
> 
> 
> ### ドメインの指定
> 
> 用途に特化した文体へ調整したい場合は、プロンプト内でドメインを指定してください。自然な文章で「技術記事向けに」と添えるか、「ドメイン tech」と明記して指示できます（省略時は入力内容から自動判別されます）。
> 
> ```text
> この文章を技術記事向けに読みやすくして。
> （ここに修正したい文章を貼り付け）
> ```
> 
> - tech（技術記事）  
>   技術ブログやコード解説向け。手順や仕組みを復元し、箇条書きを抑えます。「技術記事向けに」または「ドメイン tech」と指定してください。
> - business（業務文書）  
>   仕様書やPR文、提案書向け。比喩表現を排し、境界条件や責任主体を明確にします。「業務仕様向けに」または「ドメイン business」と指定してください。
> - essay（エッセイ）  
>   個人ブログやnote向け。大げさな教訓化を避け、素直な感情と実感を大切にします。「エッセイ向けに」または「ドメイン essay」と伝えてください。
> 
> ---
> 
> 
> ## 付属ツール
> 
> 本リポジトリには、文章のAIっぽさやMarkdownの構文崩れを検査する2つのPythonスクリプトを同梱しています。外部ライブラリへの依存はなく、Python標準ライブラリのみで動作する設計です。
> 
> 
> ### 1. yomiyasu_lint.py（静的検査リンター）
> 
> 文章内のAIっぽさ（不自然な比喩動詞、過剰な太字・箇条書き、絵文字、文末コロン、同一文末の連続、不要な半角空白など）に加え、GitHub Flavored MarkdownやCommonMarkで日本語の括弧や句読点に隣接して太字記号（`**`）がそのまま露出してしまう構文崩れ（`bold_not_rendered`）を数値化して検査します。複数行にまたがる太字やブロック境界（引用、見出し、リスト、表）も考慮して判定します。
> 
> ```bash
> 
> # Markdownファイルを検査
> python3 scripts/yomiyasu_lint.py README.md
> 
> 
> # 警告があれば終了コード1を返す厳格モード（CIやGitフック用）
> python3 scripts/yomiyasu_lint.py article.md --strict
> 
> 
> # JSON形式で結果を出力
> python3 scripts/yomiyasu_lint.py article.md --json
> ```
> 
> #### 出力例
> 
> ```text
> ============================================================
> AIっぽさ 検査レポート (スコア: 100/100)
> ============================================================
> ・文字数: 1420 | 行数: 85
> ・太字頻度: 1,000字あたり 1.4 個 (推奨: 2.0以下 / 警告: 3.0超)
> ・箇条書き比率: 8.2% (推奨: 15%以下 / 警告: 25%超)
> ------------------------------------------------------------
> [PASS] 設定された検査ルールによる指摘はありません。
> ```
> 
> 
> ### 2. yomiyasu_diff.py（推敲差分チェッカー）
> 
> 推敲前（原文）と推敲後の文章を比較し、意図しない意味の変化、勝手な情報の付け足し、文末の立場（勧め／決まり／説明）の食い違い、太字表示崩れの修正が適切に行われているかを確かめるツールです。
> 
> ```bash
> 
> # 原文と推敲後の差分を検査（文書の立場を指定）
> python3 scripts/yomiyasu_diff.py 元の文.md 書き直した文.md --stance=説明
> 
> 
> # 文末の種類（敬体・常体・立場）の分布のみを確認
> python3 scripts/yomiyasu_diff.py --endings 対象文.md
> ```
> 
> ---
> 
> 
> ## リポジトリ構成
> 
> ```text
> .
> ├── .claude-plugin/                   # Claude Code用プラグイン設定
> │   ├── plugin.json
> │   └── marketplace.json
> ├── SKILL.md                          # スキル定義エントリポイント
> ├── README.md                         # 本ドキュメント
> ├── LICENSE                           # ライセンス（MIT）
> ├── scripts/                          # 付属検査ツール群
> │   ├── yomiyasu_lint.py             # 静的検査スクリプト（AIっぽさ・太字構文検査）
> │   └── yomiyasu_diff.py             # 差分検査スクリプト（推敲前後の意味・文末比較）
> ├── references/                       # スキル参照ドキュメント
> │   ├── gemini-syntax.md              # 構文変換原則
> │   ├── slop-catalog.md               # 不自然な語彙・構文カタログ
> │   └── domains/                      # ドメイン別指針（tech, business, essay）
> ├── skills/                           # 配布用パッケージ（エージェントインストール用コピー）
> │   └── yomiya

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]]

[GitHub](https://github.com/nanaism/yomiyasu)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "nanaism--yomiyasu"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "nanaism--yomiyasu" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W41" AND file.name != "nanaism--yomiyasu"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/nanaism--yomiyasu");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "nanaism--yomiyasu" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "nanaism" AND file.name != "nanaism--yomiyasu"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/nanaism--yomiyasu");
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
> const me = dv.page("Repos/nanaism--yomiyasu");
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
> const me = dv.page("Repos/nanaism--yomiyasu");
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
> const me = dv.page("Repos/nanaism--yomiyasu");
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
> const me = dv.page("Repos/nanaism--yomiyasu");
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

> **2026-10-04** — 首次收錄
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

- [[2026-10-07|2026-10-07]] — 再次上榜，1.7k stars
- [[2026-10-06|2026-10-06]] — 再次上榜，1.5k stars
- [[2026-10-05|2026-10-05]] — 再次上榜，1.4k stars
- [[2026-10-04|2026-10-04]] — 首次收錄，1.3k stars
