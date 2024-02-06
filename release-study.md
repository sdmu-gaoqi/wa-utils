# 遇到的阻塞问题

# CI

- 添加了 access token 与配置了 GITHUB_TOKEN 一直提示对仓库没有权限 最后对 permissions 设置为 write-all 解决

- pull request 工作流时提示分支不是可工作分支 这里新迁出了一个空间进行作业 需要将 git 切换到正确进行 release-it 的分支

- 如何使用 pull_request 的信息生成 changelog (未解决)

  ```
  <!-- 无效 -->
  run: npm run release --git.changelog="git log -p -1 ${{github.event.pull_request.head.sha}}"
  ```
