(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{531:function(t,v,_){"use strict";_.r(v);var a=_(55),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"bash-命令详解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bash-命令详解"}},[t._v("#")]),t._v(" bash 命令详解")]),t._v(" "),_("h2",{attrs:{id:"命令行移动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令行移动"}},[t._v("#")]),t._v(" 命令行移动")]),t._v(" "),_("ul",[_("li",[t._v("crtl + a 移动到最前")]),t._v(" "),_("li",[t._v("crtl + e 移动到最后")]),t._v(" "),_("li",[t._v("crtl + k 向后删除")]),t._v(" "),_("li",[t._v("crtl + u 向前删除")])]),t._v(" "),_("h2",{attrs:{id:"alias"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#alias"}},[t._v("#")]),t._v(" alias")]),t._v(" "),_("p",[t._v("给一些常用的 bash 命令起别名，比如给 git 操作起别名")]),t._v(" "),_("ul",[_("li",[t._v("ga='git add'")]),t._v(" "),_("li",[t._v("gc='git commit -c'")]),t._v(" "),_("li",[t._v("gp='git push'")]),t._v(" "),_("li",[t._v("gst='git status'")])]),t._v(" "),_("p",[t._v("这样你就可以在进行 git 操作的时候使用别名")]),t._v(" "),_("p",[t._v("如果你想看系统下的所有别名")]),t._v(" "),_("ul",[_("li",[t._v("alias 这个命令会满足你")])]),t._v(" "),_("h2",{attrs:{id:"history"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[t._v("#")]),t._v(" history")]),t._v(" "),_("p",[t._v("可以看到以前执行过的命令")]),t._v(" "),_("ul",[_("li",[t._v("!! 用于执行上次命令")]),t._v(" "),_("li",[t._v("!命令的号码 执行指定命令")])]),t._v(" "),_("h2",{attrs:{id:"一些bash-预设的组合键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一些bash-预设的组合键"}},[t._v("#")]),t._v(" 一些bash 预设的组合键")]),t._v(" "),_("ul",[_("li",[t._v("ctrl + c 中止目前的命令")]),t._v(" "),_("li",[t._v("ctrl + d 输入完毕")]),t._v(" "),_("li",[t._v("ctrl + m 相当于 enter")]),t._v(" "),_("li",[t._v("ctrl + s 暂停屏幕的输出")]),t._v(" "),_("li",[t._v("ctrl + q 恢复屏幕的输出")]),t._v(" "),_("li",[t._v("ctrl + z 暂停目前的命令")])]),t._v(" "),_("h2",{attrs:{id:"匹配符与特殊字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#匹配符与特殊字符"}},[t._v("#")]),t._v(" 匹配符与特殊字符")]),t._v(" "),_("h3",{attrs:{id:"匹配符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#匹配符"}},[t._v("#")]),t._v(" 匹配符")]),t._v(" "),_("ul",[_("li",[t._v("\\× 代表『 0 个到无穷多个』任意字元")]),t._v(" "),_("li",[t._v("[] 同样代表『一定有一个在括号内』的字元(非任意字元)")]),t._v(" "),_("li",[t._v("? 代表『一定有一个』任意字元")]),t._v(" "),_("li",[t._v("[-] 若有减号在中括号内时，代表『在编码顺序内的所有字元』")]),t._v(" "),_("li",[t._v("[^] 若中括号内的第一个字元为指数符号(^) ，那表示『反向选择』")])]),t._v(" "),_("h3",{attrs:{id:"特殊字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特殊字符"}},[t._v("#")]),t._v(" 特殊字符")]),t._v(" "),_("ul",[_("li",[_("h1",{attrs:{id:"注解符号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注解符号"}},[t._v("#")]),t._v(" 注解符号")])]),t._v(" "),_("li",[t._v("\\ 转义符号")]),t._v(" "),_("li",[t._v("| 管道命令")]),t._v(" "),_("li",[t._v("; 连续指令符号")]),t._v(" "),_("li",[t._v("~ home 目录")]),t._v(" "),_("li",[t._v("$ 给变量使用")]),t._v(" "),_("li",[t._v("& 连接命令符")]),t._v(" "),_("li",[t._v("！非符号")]),t._v(" "),_("li",[t._v("/ 根目录")]),t._v(" "),_("li",[_("blockquote",[_("p",[t._v(",>> 输出")])])])]),t._v(" "),_("h3",{attrs:{id:"管线命令-pipe"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#管线命令-pipe"}},[t._v("#")]),t._v(" 管线命令(pipe)")]),t._v(" "),_("p",[t._v("处理材料的命令，比要读一个文件需要经过各种程序来达到想要的格式，那么就可以用管线命令")]),t._v(" "),_("ul",[_("li",[t._v("ls -a /etc | less")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),_("p",[t._v("管线命令仅会处理standard output，对于standard error output 会予以忽略。")]),t._v(" "),_("p",[t._v("管线命令必须要能够接受来自前一个指令的资料成为standard input 继续处理才行。")])]),t._v(" "),_("h4",{attrs:{id:"撷取命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#撷取命令"}},[t._v("#")]),t._v(" 撷取命令")]),t._v(" "),_("ul",[_("li",[t._v("cut 这个指令可以将一段讯息的某一段给他『切』出来")])]),t._v(" "),_("p",[t._v("cut 主要的用途在于将『同一行里面的资料进行分解！』最常使用在分析一些数据或文字资料的时候！")]),t._v(" "),_("ul",[_("li",[t._v("grep 分析一行讯息， 若当中有我们所需要的资讯，就将该行拿出来")]),t._v(" "),_("li",[t._v("sort 进行排序，而且可以依据不同的资料型态来排序")]),t._v(" "),_("li",[t._v("uniq 重复的资料仅列出一个显示")]),t._v(" "),_("li",[t._v("wc 档案里面有多少字，多少行，多少字元")])])])}),[],!1,null,null,null);v.default=s.exports}}]);