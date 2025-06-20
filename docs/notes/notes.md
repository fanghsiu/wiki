---
layout: doc
---
# Notes

## Anaconda

```terminal [Anaconda Prompt (miniconda3)]
%WINDIR%\System32\cmd.exe "/K" D:\Programs\miniconda3\Scripts\activate.bat D:\Programs\miniconda3
```

```terminal [Anaconda PowerShell Prompt (miniconda3)]
%WINDIR%\System32\WindowsPowerShell\v1.0\powershell.exe -ExecutionPolicy ByPass -NoExit -Command "& 'D:\Programs\miniconda3\shell\condabin\conda-hook.ps1' ; conda activate 'D:\Programs\miniconda3' "
```

## Vitepress
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

::: code-group

```sh [npm]
npm install vitepress-plugin-group-icons
```

```sh [yarn]
yarn add vitepress-plugin-group-icons
```

```sh [pnpm]
pnpm add vitepress-plugin-group-icons
```

```sh [bun]
bun add vitepress-plugin-group-icons
```

:::

```sh
#!/bin/bash
# 如果没有消息后缀，默认提交信息为 :pencil: update content
info=${1:-":pencil: update content"}
git add -A
git commit -m "$info"
git push
```