# follow this video

https://www.youtube.com/watch?v=m4YKslkob9Q

# 如何部署到 github 的 pages

## 1. 修改 vite.config.js

```js
 base: '/your-repo-name/',  // 设置为 GitHub 仓库的名称
```

## 2. 安装 gh-pages

```bash
pnpm install --save-dev gh-pages
```

## 3. 构建应用

```bash
pnpm build
```

## 4. packages.json 中添加部署命令

```json
"deploy": "gh-pages -d dist"
```

### 执行 deploy 命令

```bash
pnpm deploy
```

## 5. 之后访问对应网址即可

https://code1379.github.io/gsap-learn-1/
