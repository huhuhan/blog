(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{534:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"常用命令总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令总结"}},[s._v("#")]),s._v(" 常用命令总结")]),s._v(" "),n("h2",{attrs:{id:"基本操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[s._v("#")]),s._v(" 基本操作")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆、初始化")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看、删除文本文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" README.md\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" README.md\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加版本控制")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" README.md\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据不同状态下撤销")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" restore "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--staged"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交、推送")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h2",{attrs:{id:"日志操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志操作"}},[s._v("#")]),s._v(" 日志操作")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出按`q`，类似vim")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 简化信息：版本号+提交注释")]),s._v("\ngt log --pretty"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --graph --pretty"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有的操作命令记录，包括分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退版本，建议通过第三方可视化工具操作")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard commit_id\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"分支操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分支操作"}},[s._v("#")]),s._v(" 分支操作")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建、切换、查看、删除分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" dev 或 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" dev\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地分支，[-r]本地的远程分支，[-a]本地的所有分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新本地的远程分支，参考IEAD的fetch命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin --progress --prune\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换、合并到当前分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch master\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge dev\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 存在冲突，当前状态为（master|merging）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 手动解决后，再提交")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'merge by master'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 冲突建议通过第三方可视化比较工具解决")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("blockquote",[n("p",[s._v("对于所有分支而言， 工作区和暂存区是公共的。因此切换前都应当先提交。")])]),s._v(" "),n("h2",{attrs:{id:"标签操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标签操作"}},[s._v("#")]),s._v(" 标签操作")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认当前记录打标签，可指定说明信息、提交记录版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tab v1 -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'description'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("commit_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看标签详情")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"本地账户切换配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地账户切换配置"}},[s._v("#")]),s._v(" 本地账户切换配置")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local --list\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yanghan"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"huhuhan"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"869108683@qq.com"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --local --unset user.name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"远程仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[s._v("#")]),s._v(" 远程仓库")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看仓库信息，一个项目可以有多个仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加仓库，[origin、main]都是别名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remove "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" main git@192.168.0.82:yanghan/demo.git\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更换仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v(" origin old-origin\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@192.168.0.82:yanghan/demo.git\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新仓库，或，追加仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin git@192.168.0.82:yanghan/demo.git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"版本回滚"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#版本回滚"}},[s._v("#")]),s._v(" 版本回滚")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("参数"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("commit_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("例子如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# 假设git本地日志如下：commit_id实际是哈希值\n提交3："1月3日上传了文件" commit_id=b333333333\n\n# 假设git服务器日志如下：\n提交2："1月2日上传了文件" commit_id=b221222222\n提交1："1月1日上传了文件" commit_id=b111111111\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("回滚【提交3】，复制【提交2】的版本号，用IDEA的插件窗口"),n("strong",[s._v("LocalChanges")])]),s._v(" "),n("blockquote",[n("p",[s._v("工作区：代码版本没变化，IDEA标记"),n("strong",[s._v("白色")]),s._v("或红色（还没版本号）")]),s._v(" "),n("p",[s._v("缓存区：代码版本变化，如IDEA上标记"),n("strong",[s._v("蓝色")]),s._v("或"),n("strong",[s._v("绿色")])]),s._v(" "),n("p",[s._v("IDEA的版本控制窗口"),n("strong",[s._v("LocalChanges")]),s._v("会显示红色、蓝色、绿色的代码")])]),s._v(" "),n("ul",[n("li",[s._v("mixed ：会【提交3】代码回滚本地，"),n("strong",[s._v("LocalChanges")]),s._v("中原本蓝色还是显示蓝色，原本红色还是红色。适用可以"),n("strong",[s._v("继续")]),s._v("修改，再重新提交")]),s._v(" "),n("li",[s._v("solt：类似mixed，区别不大，不多用")]),s._v(" "),n("li",[s._v("hard：等于"),n("strong",[s._v("执行mixed")]),s._v("后，有对回滚本地的蓝色代码，"),n("strong",[s._v("再执行Revert")]),s._v("命令")])]),s._v(" "),n("h3",{attrs:{id:"本地仓库回滚"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库回滚"}},[s._v("#")]),s._v(" 本地仓库回滚")]),s._v(" "),n("p",[s._v("如上，一般情况是cmmit注释写错，回滚重新提交；或者需要回滚分几次提交。")]),s._v(" "),n("h3",{attrs:{id:"远程仓库回滚"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库回滚"}},[s._v("#")]),s._v(" 远程仓库回滚")]),s._v(" "),n("p",[s._v("一样，根据情况回滚到目标版本。然后推送是用"),n("strong",[s._v("强制推送")]),s._v("，覆盖远程仓库记录")]),s._v(" "),n("div",{staticClass:"language-git line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[s._v("git push -f\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("远程仓库设置成被保护的分支，即使允许推送，也不能推送")])]),s._v(" "),n("h2",{attrs:{id:"注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),n("p",[s._v("内网部署社区办的gitlab，因为管理员可以有任何权限，因此开发人员不应当同时兼任管理员。\n否则，管理员可以参与项目开发，切项目成员权限分配限制不了管理员，容易造成项目开发路线混乱。权限分配失去意义")]),s._v(" "),n("blockquote",[n("p",[s._v("以上情况尤其会出现公司不规范管理，开发和管理没详细分工的情况")])]),s._v(" "),n("h2",{attrs:{id:"操作逻辑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#操作逻辑"}},[s._v("#")]),s._v(" 操作逻辑")]),s._v(" "),n("p",[s._v("当前服务器默认分支：master，简称S分支")]),s._v(" "),n("ol",[n("li",[s._v("更新分支，命令参考（git fetch origin --progress --prune）")]),s._v(" "),n("li",[s._v("根据S分支，切出一份本地的分支，S1分支")]),s._v(" "),n("li",[s._v("以S1分支，切出自己开发用的分支，简称A1分支(格式推荐：名称+日期，如xxx1027）")]),s._v(" "),n("li",[s._v("自己A1分支提交. 推送")]),s._v(" "),n("li",[s._v("服务器上发起合并请求，合并请求处理成功")]),s._v(" "),n("li",[s._v("执行操作1步骤")]),s._v(" "),n("li",[s._v("切到本地S1分支，拉取S分支最新代码")]),s._v(" "),n("li",[s._v("以S1分支，再次切出自己开发用的新分支A2")]),s._v(" "),n("li",[s._v("继续在A2分支上提交. 推送，后续步骤类似")])]),s._v(" "),n("blockquote",[n("ol",[n("li",[s._v("保留2份自己的A分支，当前开发，和上次开发但已提交合并")]),s._v(" "),n("li",[s._v("本地S1分支，只做同步服务器S分支用，区分本地自己A分支")]),s._v(" "),n("li",[s._v("步骤1，很重要，遗漏的话会导致后续S或S1分支切出的A2分支，没有已合并的A1代码和其他人提交的代码")]),s._v(" "),n("li",[s._v("步骤8，可以继续在A1分支上开发，但需要将已同步过的S1分支合并过来，不建议这样操作！\n尤其步骤1没操作即没同步，就需要自己处理合并冲突，生成新的commit记录，再次提交推送合并会影响其他版本代码")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);