<%*
// Templater script: 一鍵刷新當前 repo 筆記的 GitHub 資料
// 使用方式：在任何 repo 筆記中觸發此 template（建議綁定快捷鍵）
const repo = tp.frontmatter.repo;
if (!repo) {
  new Notice("此筆記沒有 repo frontmatter 欄位");
  return;
}

new Notice(`正在刷新 ${repo} 的資料...`);

try {
  const res = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: { Accept: "application/vnd.github+json" }
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();

  await app.fileManager.processFrontMatter(
    app.workspace.getActiveFile(),
    fm => {
      fm.stars = data.stargazers_count;
      fm.forks = data.forks_count;
      fm.open_issues = data.open_issues_count;
      fm.pushed_at = data.pushed_at?.split("T")[0];
      const spd = Math.round(
        data.stargazers_count / Math.max(1, Math.floor(
          (Date.now() - new Date(data.created_at).getTime()) / 86400000
        ))
      );
      fm.stars_per_day = spd;
      const today = new Date().toISOString().split("T")[0];
      fm.last_reviewed = today;
      // v12: 更新參與度和複習日期
      const ratio = data.stargazers_count > 0 ? data.forks_count / data.stargazers_count : 0;
      fm.engagement = ratio >= 0.3 ? "high" : ratio >= 0.1 ? "medium" : "low";
      const d = new Date();
      d.setDate(d.getDate() + (spd >= 200 ? 3 : spd >= 30 ? 7 : 14));
      fm.next_review = d.toISOString().split("T")[0];
      // v27: 追加 star_history
      const oldHistory = fm.star_history || "";
      if (oldHistory && !oldHistory.endsWith(today)) {
        fm.star_history = `${oldHistory},${today}:${data.stargazers_count}`;
      } else if (!oldHistory) {
        fm.star_history = `${today}:${data.stargazers_count}`;
      }
    }
  );

  new Notice(`${repo} 資料已更新: ${data.stargazers_count} stars`);
} catch (err) {
  new Notice(`刷新失敗: ${err.message}`);
}
%>
