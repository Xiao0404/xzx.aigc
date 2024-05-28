1. git status 用于查看本地仓库的状态
        将不需要的库省略提交，例如node_modules
            创建一个与node_modules同级的文件  .gitignore  里面写/node_modules/
2. git add . 将代码提交到git的暂存区   git reset 撤回暂存区的
3. git commit -m 'xxx' 确认提交
4. git push origin master 将代码推送到远程仓库