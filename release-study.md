# 流程

1. git cz
2. 完善 breakChange
3. git push
4. 提交 pull_request 到 yml 配置的 branch 触发自动 relase 作业 需要满足 release: <版本号>触发

# 遇到的阻塞问题

# CI

- 添加了 access token 与配置了 GITHUB_TOKEN 一直提示对仓库没有权限 最后对 permissions 设置为 write-all 解决

- 作业工作到 release 时提示工作区不干净 yarn.lock 不同步导致 重新生成 yarn.lock

- pull request 工作流时提示分支不是可工作分支 这里新迁出了一个空间进行作业 需要将 git 切换到正确进行 release-it 的分支

- 如何使用 pull_request 的信息生成 changelog (未解决)

  ```
  <!-- 无效 -->
  run: npm run release --git.changelog="git log -p -1 ${{github.event.pull_request.head.sha}}"
  ```
