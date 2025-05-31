#!/bin/bash

# === 颜色设置 ===
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # 无颜色

# === 获取分支和提交信息 ===
branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
info=${1:-":pencil: update content"}

echo -e "${BLUE}📂 当前分支: ${GREEN}$branch${NC}"
echo -e "${BLUE}✏️  提交信息: ${GREEN}$info${NC}"

# === 添加更改 ===
git add -A

# === 尝试提交 ===
if git commit -m "$info"; then
    echo -e "${GREEN}✅ 提交成功${NC}"
else
    echo -e "${YELLOW}⚠️ 无需提交（可能没有变更）${NC}"
fi

# === 尝试推送 ===
if git push; then
    echo -e "${GREEN}🚀 推送成功${NC}"
else
    echo -e "${RED}❌ 推送失败！${NC}"
    echo -e "${YELLOW}📌 可能由于远程有新提交或冲突。你可以选择以下操作：${NC}"
    echo -e "${BLUE}1) git pull --rebase"
    echo -e "2) git stash -> pull -> stash pop${NC}"
    read -p "👉 你想执行哪种操作？输入 1 或 2（其他跳过）: " choice

    if [ "$choice" == "1" ]; then
        echo -e "${BLUE}执行: git pull --rebase${NC}"
        git pull --rebase
        echo -e "${BLUE}重新尝试推送...${NC}"
        git push
    elif [ "$choice" == "2" ]; then
        echo -e "${BLUE}执行: stash 保存、拉取、恢复${NC}"
        git stash
        git pull
        git stash pop
        echo -e "${BLUE}重新尝试推送...${NC}"
        git push
    else
        echo -e "${YELLOW}❗️跳过自动处理，请手动检查问题${NC}"
    fi
fi
