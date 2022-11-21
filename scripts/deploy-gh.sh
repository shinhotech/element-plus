#!/usr/bin/env sh
###
 # @description:
 # @Author:
 # @Date: 2022-11-21 15:38:02
###
###
 # @description:
 # @Author:
 # @Date: 2022-11-17 15:11:50
###

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'xxx.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:shinhotech/sh-element-plus.git master:sh-gh-pages

cd -
