---
repo: 852wa/JIZURA
url: https://github.com/852wa/JIZURA
owner: 852wa
owner_type: User
language: HTML
license: MIT
description: "歌詞から文字PVを自動で組み立てるブラウザアプリ"
homepage: "https://852wa.github.io/JIZURA/"
stars: 1128
stars_per_day: 161
forks: 160
open_issues: 22
created: 2026-09-23
pushed_at: 2026-09-29
first_seen: 2026-09-30
week: "2026-W40"
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
last_reviewed: 2026-09-30
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-07"
contributor_count: 4
engagement: "medium"
issue_close_rate: 21
repo_size_kb: 47734
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-30"
star_history: "2026-09-30:1128"
tags:
  - github
  - "category/other"
  - "lang/html"
aliases:
  - "JIZURA"
  - "852wa/JIZURA"
---

# JIZURA

**1.1k** stars · **161** stars/天 · 建立 7 天前 · HTML · MIT

```dataviewjs
const me = dv.page("Repos/852wa--JIZURA");
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
> 歌詞から文字PVを自動で組み立てるブラウザアプリ

## 專案簡介

歌詞から文字PVを自動で組み立てるブラウザアプリ

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/852wa--JIZURA");
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
> const me = dv.page("Repos/852wa--JIZURA");
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
| Forks | 160 |
| Open Issues | 22 |
| Issue 解決率 | 21% (6 closed) |
| 最後推送 | 2026-09-29 |
| 建立日期 | 2026-09-23 |
| 官方網站 | [Link](https://852wa.github.io/JIZURA/) |
| Repo 大小 | 46.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/852wa/JIZURA) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 59
>     "JavaScript" : 40
>     "Python" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@852wa](https://github.com/852wa) | 53 |
> | [@nocore-dtm](https://github.com/nocore-dtm) | 9 |
> | [@Zaious](https://github.com/Zaious) | 3 |
> | [@phamhuulocforwork](https://github.com/phamhuulocforwork) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-25 ~ 2026-09-29）
> **活躍天數** 3 天 · **最新 commit** Simple mode: PNG sequence / transparent PNG / PNG layers export buttons

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#46](https://github.com/852wa/JIZURA/issues/46) | feat: add i18n | 0 | 0 |
> | [#45](https://github.com/852wa/JIZURA/issues/45) | 各種開き括弧の直後がひらがな以外の場合に開き括弧の直後で改行やカット割りが行われる | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # JIZURA 字面 — 文字PV自動構成ツール
> 
> **English edition:** [Open the app](https://852wa.github.io/JIZURA/en/) · [English guide](README.en.md)　／　**Bahasa Indonesia**：[Buka](https://852wa.github.io/JIZURA/id/) · [Panduan](README.id.md)　**Tiếng Việt**：[Mở](https://852wa.github.io/JIZURA/vi/) · [Hướng dẫn](README.vi.md)　**繁體中文**：[開啟](https://852wa.github.io/JIZURA/zh-hant/)　**简体中文**：[打开](https://852wa.github.io/JIZURA/zh-hans/)　**한국어**：[열기](https://852wa.github.io/JIZURA/ko/) · [한국어 가이드](README.ko.md)
> 
> 英語版 AE パネル：[ScriptUI](https://852wa.github.io/JIZURA/JIZURA_AE_en.jsx) · [CEP](https://852wa.github.io/JIZURA/JIZURA_CEP_en.zip)
> 
> 歌詞を入れると、文字PV（リリックモーション）でよく使われる表現を組み合わせてカットを自動で組み立て、MP4 に書き出すブラウザアプリです。レイアウト・動き・装飾・つなぎ・仕上げを 860 の小さな部品（と 27 のスタイル）として持ち、その組み合わせを毎回変えるので、シードを変えれば何度でも別の構成になります。After Effects 用のパネル（スクリプト版と、ブラウザ版の画面をそのまま使える CEP 版）も付属しています。
> 
> **バージョン：v0.9.0**（変更の記録は [CHANGELOG.md](CHANGELOG.md)）
> 
> **▶ ブラウザで使う：**　／　AE パネル：[JIZURA_AE.jsx](https://852wa.github.io/JIZURA/JIZURA_AE.jsx)（スクリプト版。リンク先を右クリック →「名前を付けてリンク先を保存」）・[JIZURA_CEP.zip](https://852wa.github.io/JIZURA/JIZURA_CEP.zip)（CEP 版）
> 
> - インストール不要。歌詞・曲・書き出しはすべてブラウザの中で処理され、サーバーには送信されません（外部から読み込むのは Google Fonts のフォントだけで、今の構成で使う書体だけを読み込みます）。
> - おまかせボタン（キー `R`）で、押すたびにスタイル・雰囲気・動き・配色・構成がまるごと変わります。
> - 画面比 16:9 / 9:16 / 4:3 / 3:4 / 1:1 / 4:5 / 21:9、720p〜4K、24 / 30 / 60fps。
> - 曲を読み込むと拍を検出してカットを合わせます。タップでの手動同期もできます。
> - MP4（曲入り）・連番PNG・透過PNG で書き出し。背景を**グリーンバック / ブラックバック**（白い文字と演出だけ）にして、合成用の素材としても書き出せます。After Effects で編集できる構成データ（JSON）も書き出せます。
> 
> | ファイル | 中身 |
> |---|---|
> | `index.html` | ブラウザ版の本体（ビルド済み・1ファイル）。GitHub Pages ではこれが開きます。ダウンロードしてローカルで開いても使えます |
> | `JIZURA_AE.jsx` | After Effects 用のパネル・スクリプト版（ビルド済み） |
> | `JIZURA_CEP.zip` | After Effects 用のパネル・CEP 版（ビルド済み。展開してインストール用のファイルを実行） |
> | `src/` `app/` | ブラウザ版のソース（エンジン・表現パック・UI） |
> | `ae/` | AE パネルの生成エンジンのソース |
> | `cep/` | CEP 版パネルの外枠（manifest・AE との橋渡し・インストール用ファイル） |
> | `docs/EXPRESSION_PACKS.md` | 表現部品（パック）を追加する人向けのガイド |
> 
> 動作環境
> 
> - **MP4 書き出し**：WebCodecs に対応したブラウザ（Chrome / Edge 推奨。Safari 16.4 以降・Firefox 130 以降も WebCodecs に対応していますが、H.264 で書き出せるかはブラウザと OS によります）。対応していない環境でも、プレビューと連番PNG書き出しは使えます。
> - スマホでも使えます（iPhone は iOS 16.4 以降の Safari、Android は Chrome）。長い曲を高い解像度で書き出すときは PC をおすすめします。
> - フォントは Google Fonts から、使う書体だけを必要なときに読み込みます（オフラインのときは PC のフォントで代用）。
> 
> 利用について（出力物の権利とライセンス）
> 
> - このツールで作った**動画や画像（出力物）の権利は、作った人に帰属します**。商用・非商用を問わず自由に使えます。
> - 使った歌詞や曲の権利は、それぞれの権利者に帰属します。
> - ツール本体は MIT ライセンスで公開しています。詳しくは [LICENSE](LICENSE) を見てください。
> - 入力した歌詞や曲は、ブラウザの中だけで処理され、サーバーには送信されません。
> - アプリ画面でも、右上の「利用について」ボタン（かんたんモードでは書き出しボタンの下のリンク）から同じ内容を確認できます。
> 
> おまかせ（かんたんモード）
> 
> 右上の「かんたん / 詳細」で画面を切り替えられます。最初はかんたんモードで開きます（スマホでは「スマホ」モード。下の「スマホモード」を見てください）。
> 
> - **おまかせで作る**（キーボードの `R` でも可）：押すたびに次をまとめてランダムに決め直し、頭から再生します。
>   - スタイル（直前と同じものは出ません）
>   - 雰囲気（グリッチ / しっとり / ポップ / グラフィック / エディトリアル / エモーショナル / 全部入り。「ホラーの演出も使う」がオンのときはホラーも）。雰囲気ごとに、動きの強さ・グリッチの量・使うレイアウトや登場・退場の手法が変わります。
>   - 見出しや明朝枠の書体
>   - 配色（ときどき、アクセント色とズレ色A/Bもランダムになります）
>   - カット構成（シード）
> - **◀ 前の案 / 次の案 ▶**：おまかせで出した案を行き来できます。気に入った案に戻ってから書き出せます。
> - **ここだけ変える**：今の案を活かしたまま、一部だけを振り直します。
>   - スタイル / 配色（アクセント・ズレ色A/B）/ 雰囲気（動きと使う手法）/ 構成（レイアウトと動きの組み合わせ）
> - 歌詞・曲・タイミング・書き出し設定は、おまかせでは変わりません。行リストで鍵をかけた行もそのまま残ります。
> 
> ランダムで使う演出の範囲
> 
> おまかせボタンの下（詳細モードでは「手法」タブの上）にあるチェックで、おまかせ・シャッフル・行ごとの再抽選で選ばれる演出を決められます。
> 
> - **追加分の演出も使う**（初期状態：オフ）：オフのときは、最初の公開版の演出（356部品・スタイル12種）だけを使います。オンにすると、あとから追加した演出（351部品・スタイル12種・書体6種）も候補になります。
> - **和風の演出も使う**（初期状態：オン）：提灯・はがき・障子・扇・家紋・青海波・桜の花びらなどの和風グラフィックと、和風のスタイル（サクラ・墨と朱）です。オフにすると選ばれなくなります。この判定は、追加分のチェックのあとに適用されます。
> - **文字PV系の部品を使う**（初期状態：オン）：最初の公開版の部品から派生した、線・数字・字組みだけで見せる部品（50）です。絵やモチーフではなく、文字そのものを主役にします（大字挟み・見切れ大文字・十字組・ルビ振り・罫線組・級数上げ・幅揃え・断ち割り・行中強調・打ち直し・括弧が開く／閉じる・柱とノンブル など）。手法タブでは「文」の印が付きます。
> - **キネティックの部品を使う**（初期状態：オン）：語ごとに動く、動き重視の部品（51）です（積み上げ・直角ターン・入れ替わり・文字へ潜る・流れて整列・語のカット割り・歯車・正面衝突・語ごとスラム・蝶番おろし・語ごとの拍・読み追いカメラ・刻みカット など）。曲の拍があるときは、語の切り替わりを拍に合わせます。「キ」の印が付きます。
> - **ホラーの演出も使う**（初期状態：オフ）：不気味な雰囲気の部品（52）と、配色セット3つ（廃墟・深夜の録画・呪いの手紙）です（懐中電灯・扉の隙間・壁の落書き・監視モニター・降霊盤・尋ね人・一字だけ違う・黒塗り文書・砂嵐のテレビ・心霊写真・影が違う、瞬きの間に・飛び出し・鏡文字、引きずり込み・一字残る、痙攣・見つめる字、見ている目・魔法陣・ひび割れ、暗い廊下・広がる染み、怯えた手持ち、サブリミナル・横切る影、砂嵐カット・まばたき など）。オンにすると、おまかせの雰囲気に「ホラー」が加わり、半分ほどの確率でホラーの案になります。おまかせでは、ホラーの部品は雰囲気が「ホラー」のときだけ使います。「ホ」の印が付きます。血や傷などの残酷な表現は入れていません。
> - この3つは「追加分」とは別のチェックで、追加分がオフでも使えます。
> - どれも、行ごとに手動でレイアウトなどを指定した場合や、スタイルを自分で選んだ場合には関係なく使えます。
> - 「手法」タブとスタイル一覧では、追加分に「追加」、和風に「和」の印が付きます。いまの設定でランダムに選ばれないものは薄く表示されます。
> 
> スマホモード
> 
> スマホ（幅の狭い画面やタッチ操作の端末）では、右上が「スマホ / かんたん / 詳細」の3つになり、初めて開いたときはスマホモードになります。
> 
> - **おまかせボタンはヘッダーに固定**：画面をスクロールしても、いつでも押せます。
> - **プレビューは上に固定**：スクロールしても再生画面が見えたままです。
> - **行はたたんで表示**：行一覧は歌詞だけを1行ずつ並べ、行をタップするとその行のサイコロ・鍵・カット数などが開きます。見出しをタップすると、歌詞・行一覧・設定のまとまりごとにたたんだり開いたりできます。
> - 保存・開く・初期化などは「メニュー」にまとめています。ボタンは指で押しやすい大きさです。
> - **書き出しが失敗しにくい設定**：スマホモードでは、最初の書き出し解像度を 720p にしています。1080p より大きい解像度を選んでいても、スマホモードでは 1080p で書き出します（大きな解像度は「詳細」モードで）。書き出し中は画面が消えないようにし、別のアプリに切り替えていた間は失敗扱いにしません。書き出しのあと、対応しているブラウザでは「共有して保存」から写真アプリなどに保存できます。
> 
> 配色ランダム
> 
> 「詳細」→「スタイル」タブの「アクセント・ズレ色」にあります。
> 
> - **ランダムに配色**：アクセント色と、ズレ色A/B（色ズレの2色）を組み合わせで選び直します。
>   - 半分弱は、補色どうしなどで相性を調整済みの組み合わせから選びます。残りは色相環から毎回新しく作ります。
>   - 背景の明るさに合わせて明るさを自動で補正し、文字が読める濃さを保ちます（アクセントは背景とのコントラスト比 3 以上）。
> - 色を直接選ぶこともできます。「自分の色で上書き」を外すと、スタイル本来の色に戻ります。
> 
> ブラウザ版の使い方
> 
> 1. **歌詞**：1行が1フレーズです。記法は次のとおりです。
>    - `夜明けの色を/覚えてる` … `/` でカットの切れ目を指定
>    - `*透明*` … 強調（大きく・インパクトのある演出が選ばれやすくなります）
>    - 行末の `!` … フラッシュと揺れが入ります
>    - `歌詞|注釈` … 注釈レイアウトに出す小さな文字
>    - `[01:23.45]歌詞` … LRC のタイムスタンプをそのまま使います。時刻のない行は、書いた位置のまま前後の時刻のあいだに入ります
>    - 歌詞欄の右上の「LRC を読み込む」で、.lrc ファイルを歌詞として読み込めます（今の歌詞と置き換え。「元に戻す」で戻せます）
>    - `[間奏 8]` … 8秒の間奏。歌詞は出さず、背景・装飾・画面効果だけが流れます（6秒以上なら曲名とアーティストを小さく表示）。秒数を省くと4秒で、タップ同期やマーカーで長さを合わせられます。`[interlude]` `[间奏]` `[간주]` でも同じです
> 2. **曲とタイミング**
>    - 曲を読み込むと、BPM と拍を自動で検出し、カットの切れ目を拍に寄せます。読み込んだ曲はこのブラウザに保存され、ページを開き直しても自動で読み込み直されます（書き出しで音声が抜けないように）。
>    - 「タップで同期」を押すと曲が流れます。各行が始まる瞬間に Space を押してください。押し間違えたら Backspace か「1つ戻る」。行一覧の ◎ を押すと、**その行からタップし直せます**（前の行の時刻はそのまま）。
>      - タップ中は「速さ」で 0.75× / 0.5× に落として聴けます（保存される時刻は曲の本来の時刻です）。「カウントダウン」をオンにすると、3・2・1 のあとに曲が始まります。
>      - 1行に複数のカットがあるときは、カットが切り替わる瞬間に Tab を押すと、その行のカットの開始時刻も合わせられます。
>    - 行リストの秒数を直接書き換えることもできます。前後の行と順番が入れ替わる値は、入れ替わらない位置に直します。
>    - **カットの開始時刻**（詳細モード）：行の下のカットごとの欄に、2つ目以降のカットの開始時刻が出ます。数値を入れると固定、空にすると自動に戻ります。再生中のカットは枠で示します。
>    - **タイムライン**：上の目盛り（行の区切り）を左右にドラッグすると、その行の開始時刻を変えられます（拍に吸着、Shift で自由に）。＋／−・ホイールで拡大縮小、Shift＋ホイールで左右に移動、「全体」で戻ります。
>    - 歌詞・タイミングの変更は「元に戻す」（Ctrl+Z）で取り消せます。
> 3. **行ごとに直す**（かんたんモードでも使えます）
>    - ✎（または歌詞をダブルクリック）で、その行の歌詞をその場で直せます。記法もそのまま使えます。
>    - 「カット 自動 / 1〜6」で、その行を何カットに分けるかを決められます。
>    - 行ごとのサイコロで、その行だけを再抽選します。鍵でその行の構成を固定し、レイアウトを直接指定することもできます（詳細モード）。鍵をかけた行は、ほかの行のサイコロ・シャッフル・おまかせをしても、レイアウト・動き・装飾・配色・カット割りまでそのまま残ります。
>    - 「シャッフル」で全体を再抽選します。
>    - **テーマ**：おまかせボタンの横（かんたんモードでは下）の「テーマ」で、文字PV / キネティック / 和風 / ホラー / ポップ / バラード を選ぶと、その方向の中でおまかせします。必要な部品のスイッチ（文字PV系・キネティック・和風と追加分・ホラー）はオンになります。「テーマなし」なら今までどおりです。
>    - **カットごとに差し替える**（詳細モード）：プレビューの下のカット情報（レイアウト・登場・保持・退場・装飾・加工・背景・カメラ・つなぎ）を押すと一覧が開き、そのカットだけを別の部品に替えられます。「自動」で元に戻ります。行一覧でも、行の下にカットごとのレイアウトを選ぶ欄が出ます。「このカットをシャッフル／おまかせ」で、そのカットだけを選び直せます。差し替えても、ほかのカットの抽選結果は変わりません。
>    - **ロック**（詳細モード）：「手法」タブの分類ごとの鍵で、その分類の ON/OFF の選び方を、「演出」タブのスライダー・フラッシュ・コマ打ちの鍵で、その値を、おまかせのあとも変えずに残せます。ロックはプロジェクトファイルにも保存されます。
>    - **ループ**：再生ボタンの横の「ループ」を押すたびに、全体 → 行 → カット → なし と切り替わります。行・カットのループ中は、タイムラインに繰り返す範囲が表示されます。
> 4. **スタイル**：配色・書体・質感のセットが27種類あります（サクラ / 深海 / 夕焼けグラデ / 森の手帖 / ヴェイパー / 新聞 / シンセ80s / クラフト紙 / キャンディ / アシッド / 墨と朱 / 金夜、ホラー用の 廃墟 / 深夜の録画 / 呪いの手紙 などを含む）。1本の中でも、カットによって背景色が切り替わります。
>    - 書体は Google Fonts の18ファミリー（Reggae One / Rampart One / Potta One / Kiwi Maru / Klee One / Shippori Mincho B1 を含む）から選ばれます。**今の構成で使っている書体だけ**をその都度読み込むので、書体の数が増えても起動や動作は重くなりません。
>    - フォントは次の方法で差し替えられます。
>      - PC に入っているフォント名を入力する
>      - .ttf / .otf ファイルを読み込む
> 5. **演出と手法**
>    - 「演出」タブで、動きの強さ・グリッチ・色ズレ・装飾の量・カットの細かさ・質感・コマ打ちを調整します。
>    - 「飾りの数字を消す」「飾りの時刻を消す」で、レイアウトや装飾・HUD が添える `No.01` や `00:12.34` のような文字を出さないようにできます（歌詞に含まれる数字・時刻はそのまま）。
>    - 「手法」タブで、10の分類（レイアウト・登場・保持・退場・装飾・文字の加工・背景・カメラ・画面効果・カット間のつなぎ）の部品を1つずつ ON/OFF できます（上の「追加分」「和風」のチェックと組み合わせて判定されます）。分類ごとに折りたたまれていて、「すべてON / すべてOFF / 反転」と名前での絞り込みが使えます。
> 6. **書き出し**
>    - MP4（Chrome / Edge では H.264。曲も含められます）
>    - 連番PNG（ZIP）
>    - 透過PNG（ZIP・背景なし。AE などで合成する用）
>    - 連番PNG・透過PN

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[ArasTey--lunel|ArasTey/lunel]]

[GitHub](https://github.com/852wa/JIZURA) · [官方網站](https://852wa.github.io/JIZURA/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "852wa--JIZURA"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "852wa--JIZURA" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W40" AND file.name != "852wa--JIZURA"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/852wa--JIZURA");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "852wa--JIZURA" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "852wa" AND file.name != "852wa--JIZURA"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/852wa--JIZURA");
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
> const me = dv.page("Repos/852wa--JIZURA");
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
> const me = dv.page("Repos/852wa--JIZURA");
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
> const me = dv.page("Repos/852wa--JIZURA");
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
> const me = dv.page("Repos/852wa--JIZURA");
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

> **2026-09-30** — 首次收錄
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

- [[2026-09-30|2026-09-30]] — 首次收錄，1.1k stars
