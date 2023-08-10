(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{485:function(s,t,a){s.exports=a.p+"assets/img/node-global-1.3f88957e.png"},486:function(s,t,a){s.exports=a.p+"assets/img/node-global-2.c1beb9f6.png"},487:function(s,t,a){s.exports=a.p+"assets/img/node-global-3.865468e9.png"},553:function(s,t,a){"use strict";a.r(t);var e=a(55),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"node-js-全局对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-全局对象"}},[s._v("#")]),s._v(" Node.js 全局对象")]),s._v(" "),e("p",[s._v("JavaScript 中的全局对象是 window，而 Node.js 中的全局对象是 global")]),s._v(" "),e("p",[s._v("全局变量会挂在到全局对象上，但是最好不要用 var 声明变量，否则会造成全局污染")]),s._v(" "),e("h2",{attrs:{id:"filename"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filename"}},[s._v("#")]),s._v(" __filename")]),s._v(" "),e("p",[e("strong",[s._v("__filename")]),s._v(" 表示当前正在执行的脚本的文件名")]),s._v(" "),e("p",[s._v("它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同")]),s._v(" "),e("p",[s._v("如果在模块中，返回的值是模块文件的路径")]),s._v(" "),e("p",[s._v("在 node-demo.js 里写:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__filename"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(485),alt:"文件路径"}})]),s._v(" "),e("h2",{attrs:{id:"dirname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dirname"}},[s._v("#")]),s._v(" __dirname")]),s._v(" "),e("p",[s._v("__dirname 表示当前执行脚本所在的目录")]),s._v(" "),e("p",[s._v("在 node-demo.js 里写:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(486),alt:"目录路径"}})]),s._v(" "),e("h2",{attrs:{id:"settimeout-cb-ms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-cb-ms"}},[s._v("#")]),s._v(" setTimeout(cb, ms)")]),s._v(" "),e("p",[e("strong",[s._v("setTimeout(cb, ms)")]),s._v(" 全局函数在指定的毫秒(ms)数后执行指定函数(cb)，只执行一次")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我是过了两秒执行的hello'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我是立即执行的hello'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:a(487),alt:"计时器"}})]),s._v(" "),e("h2",{attrs:{id:"console"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#console"}},[s._v("#")]),s._v(" console")]),s._v(" "),e("p",[s._v("console 用于提供控制台标准输出，它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的实施标准")]),s._v(" "),e("p",[s._v("API：")]),s._v(" "),e("ul",[e("li",[s._v("console.log([data][, ...])")])]),s._v(" "),e("blockquote",[e("p",[s._v("向标准输出流打印字符并以换行符结束")])]),s._v(" "),e("ul",[e("li",[s._v("console.info([data][, ...])")])]),s._v(" "),e("blockquote",[e("p",[s._v("该命令的作用是返回信息性消息该命令的作用是返回信息性消息，与 log 差别不大")])]),s._v(" "),e("ul",[e("li",[s._v("console.error([data][, ...])")])]),s._v(" "),e("blockquote",[e("p",[s._v("输出错误消息的")])]),s._v(" "),e("ul",[e("li",[s._v("console.warn([data][, ...])")])]),s._v(" "),e("blockquote",[e("p",[s._v("输出警告消息")])]),s._v(" "),e("ul",[e("li",[s._v("console.dir(obj[, options])")])]),s._v(" "),e("blockquote",[e("p",[s._v("用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示")])]),s._v(" "),e("ul",[e("li",[s._v("console.time(label)")])]),s._v(" "),e("blockquote",[e("p",[s._v("输出时间，表示计时开始")])]),s._v(" "),e("ul",[e("li",[s._v("console.timeEnd(label)")])]),s._v(" "),e("blockquote",[e("p",[s._v("输出时间，表示计时结束")])]),s._v(" "),e("ul",[e("li",[s._v("console.trace(message[, ...])")])]),s._v(" "),e("blockquote",[e("p",[s._v("当前执行的代码在堆栈中的调用路径")])]),s._v(" "),e("ul",[e("li",[s._v("console.assert(value[, message][, ...])")])]),s._v(" "),e("blockquote",[e("p",[s._v("用于判断某个表达式或变量是否为真，接收两个参数，第一个参数是表达式，第二个参数是字符串")])]),s._v(" "),e("h2",{attrs:{id:"process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[s._v("#")]),s._v(" process")]),s._v(" "),e("p",[e("strong",[s._v("process")]),s._v(" 是一个全局变量，即 global 对象的属性")]),s._v(" "),e("p",[s._v("描述当前Node.js 进程状态的对象")]),s._v(" "),e("p",[s._v("API:")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("exit:")]),s._v(" 当进程准备退出时触发")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("beforeExit:")]),s._v(" 当 node 清空事件循环，并且没有其他安排时触发这个事件")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("uncaughtException:")]),s._v(" 当一个异常冒泡回到事件循环，触发这个事件")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("Signal 事件:")]),s._v(" 当进程接收到信号时就触发")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);