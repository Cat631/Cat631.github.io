# Cat631.github.io

这是一个用于演示静态页面（HTML + CSS + JS）的示例仓库。目录结构的主要文件位于 `html/`：

- `demo.html` — 演示页面，引用 `demo.css` 和 `demo.js`（相对路径）。
- `demo.css` — 演示样式。
- `demo.js` — 简单交互（模态广告 + 轮播横幅）。

快速开始

1. 在本地打开（无需服务器）:

```powershell
cd 'C:\Users\17729\Desktop\Cat631.github.io\html'
Start-Process .\demo.html
```

2. 部署到 GitHub Pages:
- 若仓库命名为 `username.github.io`（用户/组织页），将该仓库发布为 GitHub Pages（默认 `main` 或 `gh-pages` 分支），示例文件将可通过 `https://username.github.io/html/demo.html` 访问。
- 若为项目页（例如仓库名 `Website`），请注意绝对路径问题：建议使用相对路径（已在 `demo.html` 中使用），或在绝对路径前加上仓库名，例如 `/Website/...`。

许可证

本仓库使用 MIT 许可证（见 `LICENSE`）。

如需我帮你把演示内容合并进现有的 `index.html` / `style.css` / `ad.js`，或切换到其它许可证（如 Apache-2.0、GPL），告诉我即可。
