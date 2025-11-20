<!-- .github/copilot-instructions.md -->
# 快速上手（给 AI 编码助手）

这是一个非常小的静态示例站点（纯 HTML/CSS/JS）。目标是让 AI 助手能快速了解项目结构、修改约定和常见变更点，以便能直接做修改或提出可执行建议。

要点概览
- **项目类型**：静态单页演示（无需构建工具、无依赖管理）。
- **主要文件**：`index.html`、`demo.css`、`demo.js`、`README.md`、`LICENSE`。
- **运行/调试**：直接在本地打开 HTML 文件；或将仓库发布为 GitHub Pages（参见 README）。

重要实现细节（请在修改时注意）
- `index.html`：页面以相对路径引用 `demo.css` 与 `demo.js`；修改时请优先使用相对路径，避免破坏 GitHub Pages 的访问路径。
- `demo.js`：在 `DOMContentLoaded` 回调中绑定了按钮事件与轮播逻辑。关键标识符：`showAd`、`adModal`、`closeAd`、`cta`、`banner`。轮播使用 `messages` 数组与 `bannerTimer`（`setInterval`/`clearInterval`）。若修改交互，请保持这些 ID/class 的语义或同时更新 HTML。
- `demo.css`：包含页面与模态的样式。类名示例：`site-header`、`container`、`card`、`banner`、`modal`、`modal-content`、`hidden`。JS 通过 `classList.add/remove('hidden')` 控制模态可见性。

仓库约定与发现的差异
- README 中提到 `html/` 子目录（例如 `demo.html`），但当前仓库根目录已有 `index.html`、`demo.js` 等文件。修改或重构路径前，请先确认是否要把文件移动到 `html/` 下，或更新 README。不要假定 README 的路径总是最新。

常见任务示例（可直接执行）
- 本地预览（PowerShell 示例）：
```
cd 'C:\Users\17729\Documents\GitHub\Cat631.github.io'
Start-Process .\index.html
```
- 修改轮播消息：在 `demo.js` 中编辑 `messages` 数组并调整 `setInterval` 的毫秒数（当前为 `2500`）。
- 修改模态文字/按钮：编辑 `index.html` 中 `#adModal` 内的文案或添加新的按钮，使用与现有事件绑定相同的模式 `element.addEventListener('click', ...)`。

不要做的事（除非得到明确许可）
- 不要引入打包器（如 webpack、Vite）或构建流程，除非用户要求。仓库目前为简单静态站点，添加构建工具会改变项目意图。
- 不要擅自移动文件到新子目录（如 `html/`），除非同时更新所有引用与 README 并告知作者。

集成点与外部依赖
- 目前没有外部 API、CDN 或第三方包的依赖。所有交互都是本地 DOM 操作（`alert()` 被用于 CTA）。

编辑优先级与变更建议
- 小改动（文案、样式、轮播文案/间隔、按钮行为）：可直接提交 PR。
- 结构性改动（重命名 ID、移动文件、添加构建步骤）：先在 issue 中说明理由，并提供回滚计划与 URL/path 验证示例。

若要我继续
- 我可以：创建/合并此文件、修正文档中路径不一致、或把示例改造成模块化 JS（需用户批准）。请指出你希望的下一步。

参考文件
- `index.html` — 页面结构与 ID/class 的权威来源。
- `demo.js` — 交互实现（事件绑定、轮播、模态）。
- `README.md` — 部署与本地打开示例（注意可能过时的 `html/` 路径）。

---
如果有任何遗漏或你希望我把说明写得更详细（例如添加 PR 模板或例子改动的完整 patch），告诉我我会继续迭代。
