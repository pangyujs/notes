# bash 命令详解

## 命令行移动

- crtl + a 移动到最前
- crtl + e 移动到最后
- crtl + k 向后删除
- crtl + u 向前删除

## alias 

给一些常用的 bash 命令起别名，比如给 git 操作起别名

- ga='git add'
- gc='git commit -c'
- gp='git push'
- gst='git status'

这样你就可以在进行 git 操作的时候使用别名

如果你想看系统下的所有别名

- alias 这个命令会满足你

## history 

可以看到以前执行过的命令

- !! 用于执行上次命令
- !命令的号码 执行指定命令

## 一些bash 预设的组合键

- ctrl + c 中止目前的命令
- ctrl + d 输入完毕
- ctrl + m 相当于 enter
- ctrl + s 暂停屏幕的输出
- ctrl + q 恢复屏幕的输出
- ctrl + z 暂停目前的命令

## 匹配符与特殊字符


### 匹配符

- \× 代表『 0 个到无穷多个』任意字元
- [] 同样代表『一定有一个在括号内』的字元(非任意字元)
- ? 代表『一定有一个』任意字元
- [-] 若有减号在中括号内时，代表『在编码顺序内的所有字元』
- \[^] 若中括号内的第一个字元为指数符号(^) ，那表示『反向选择』

### 特殊字符

- # 注解符号
- \ 转义符号
- | 管道命令
- ; 连续指令符号
- ~ home 目录
- $ 给变量使用
- & 连接命令符
- ！非符号
- / 根目录
- >,>> 输出

### 管线命令(pipe)

处理材料的命令，比要读一个文件需要经过各种程序来达到想要的格式，那么就可以用管线命令

- ls -a /etc | less


::: tip 注意
管线命令仅会处理standard output，对于standard error output 会予以忽略。

管线命令必须要能够接受来自前一个指令的资料成为standard input 继续处理才行。
:::

#### 撷取命令

- cut 这个指令可以将一段讯息的某一段给他『切』出来

cut 主要的用途在于将『同一行里面的资料进行分解！』最常使用在分析一些数据或文字资料的时候！

- grep 分析一行讯息， 若当中有我们所需要的资讯，就将该行拿出来
- sort 进行排序，而且可以依据不同的资料型态来排序
- uniq 重复的资料仅列出一个显示
- wc 档案里面有多少字，多少行，多少字元



















