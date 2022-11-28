# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'deploy'
 
git push -f "git@github.com:Asushiny/Asushiny.github.io.git" main
cd -