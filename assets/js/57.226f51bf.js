(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{226:function(t,s,n){"use strict";n.r(s);var a=n(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_5-项目质量监测"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-项目质量监测"}},[t._v("#")]),t._v(" 5.项目质量监测")]),t._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("注意：此篇文章未来可能要和其他文章进行合并，或者重构... 目前结构混乱，无法阅读")])]),t._v(" "),n("h3",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),n("p",[n("strong",[t._v("🔥通常来说，项目的质量决定了 软件项目的命运，软件项目的可维护性，软件项目的运维成本，软件项目的拓展性")])]),t._v(" "),n("p",[n("strong",[t._v("为什么要进行代码检查")])]),t._v(" "),n("ul",[n("li",[t._v("避免低级BUG")]),t._v(" "),n("li",[t._v("统一代码习惯")]),t._v(" "),n("li",[t._v("保证线上代码质量")])]),t._v(" "),n("p",[n("strong",[t._v("如何让一个团队的人产出的代码都在一个基本水平底线之上呢?")])]),t._v(" "),n("p",[t._v("最初是靠制订规范。要确保规范得以执行只能靠人，所以文字规范成了code review的公共参照标准。单纯靠人的事最终都容易流于形式，")]),t._v(" "),n("p",[t._v("🔥所以需要工具加以保证。虽说工具并不能完全实现规范中的规则，但至少能够在一定程度 上缓解代码不统一一的局面")]),t._v(" "),n("p",[n("strong",[t._v("从哪几个方面可以让项目质量有所提高呢？")])]),t._v(" "),n("ul",[n("li",[t._v("代码Lint：告别低级错误，简单的配置让程序来自动检查")]),t._v(" "),n("li",[t._v("e2e test：e2e测试，黑盒测试，如何用e2e进行端到端的测试")]),t._v(" "),n("li",[t._v("开源测试平台：codecov介绍（配合CI工具，让测试过程自动化）")])]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"_2-日常写代码中遇到的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-日常写代码中遇到的问题"}},[t._v("#")]),t._v(" 2.日常写代码中遇到的问题")]),t._v(" "),n("p",[n("strong",[t._v("代码风格")])]),t._v(" "),n("p",[n("strong",[t._v("代码规范")])]),t._v(" "),n("p",[t._v("这里使用 Typescript 能提高代码质量")]),t._v(" "),n("p",[n("strong",[t._v("设计思路")])]),t._v(" "),n("p",[t._v("有的人写的程序就是高度耦合的，几十个函数，很难调用，没办法维护，这就和思路有关系了，要设计一些设计模式，设计一些模块化的东西，来规避这点")]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"_3-代码质量检测-lint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码质量检测-lint"}},[t._v("#")]),t._v(" 3.代码质量检测 Lint")]),t._v(" "),n("p",[n("strong",[t._v("Lint：是一款分析源码以及标记编程过程中（代码，样式，构建）书写的错误的工具")])]),t._v(" "),n("p",[t._v("常见的3个JS检测工具对比")]),t._v(" "),n("ul",[n("li",[t._v("JSLint（2012年出现）：\n"),n("ul",[n("li",[t._v("优点：参数配置完成，可以直接使用")]),t._v(" "),n("li",[t._v("缺点：有限的配置选项，不能增加个性化的规则等等")])])]),t._v(" "),n("li",[t._v("JSHint\n"),n("ul",[n("li",[t._v("优点：可配置，可以写配置文件")]),t._v(" "),n("li",[t._v("缺点：难于知道那个规则产生的错误，不能自定义规则等等")])])]),t._v(" "),n("li",[t._v("🔥ESLint（比较新的工具，JSCS已经合并到ESLint）\n"),n("ul",[n("li",[t._v("优点：高度可配置")]),t._v(" "),n("li",[t._v("缺点：需要一些配置，速度慢")])])])]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"_4-lint工具介绍（4个核心概念）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-lint工具介绍（4个核心概念）"}},[t._v("#")]),t._v(" 4.Lint工具介绍（4个核心概念）")]),t._v(" "),n("p",[n("strong",[t._v("核心是配置文件，规则是写到里面的：.eslintrc.js")])]),t._v(" "),n("p",[n("strong",[t._v("常见规则")])]),t._v(" "),n("ul",[n("li",[t._v("off && 0：关闭规则")]),t._v(" "),n("li",[t._v("warn && 1：开启规则，使用警告级别错误（不会导致程序退出）")]),t._v(" "),n("li",[t._v("error && 2：开启规则，使用错误级别错误（程序会退出）")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 例如")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"semi"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"never"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("Extends：使用别人的包（使用别人的规则）")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"google"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("🔥Plugins：插件系统")])]),t._v(" "),n("p",[t._v("我们有时候可能有一些特殊的应用场景，例如Vue的语法，例如less，sass等这些的语法，可能 使用别人的包里面也没有这些配置，我们就需要自己配置了（针对特定的语法结构进行Lint）")]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"_5-eslint初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-eslint初始化"}},[t._v("#")]),t._v(" 5.ESLint初始化")]),t._v(" "),n("ul",[n("li",[t._v("安排：npm install eslint --save-dev")]),t._v(" "),n("li",[t._v("使用")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint app.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint:create"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --init"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[n("strong",[t._v("使用 eslint --init创建一个ESLint配置文件")])]),t._v(" "),n("ul",[n("li",[t._v("第一个问题：检查代码规范 | 🔥检查代码规范并查找一些问题 | 强制使用某些规范")]),t._v(" "),n("li",[t._v("第二个问题（你使用哪种模块方式）：🔥ESM | COM | 不使用")]),t._v(" "),n("li",[t._v("第三个问题（选择常见的框架）")]),t._v(" "),n("li",[t._v("第四个问题（你的代码会在哪里运行）：🔥浏览器 | 🔥Node")]),t._v(" "),n("li",[t._v("第五个问题（你想把这些配置放到什么文件中）")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"env"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行环境")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browser"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es6"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拓展规则")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"globals"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行代码时脚本需要访问额外全局变量")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Atomics"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"readonly"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SharedArrayBuffer"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"readonly"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parserOptions"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于指定想要支持的JS语言")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecmaVersion"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sourceType"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启某些规则，设置规则登记")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("❣️注意，有时候也要写另一个文件.eslintignore，用于告诉ESLint忽略某些文件或者目录")])]),t._v(" "),n("hr")])}),[],!1,null,null,null);s.default=r.exports}}]);