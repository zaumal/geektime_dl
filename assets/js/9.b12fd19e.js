(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{256:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("h2",{attrs:{id:"项目结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),s("p",[t._v("这个项目主要包括下边这几个部分：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("kindle_maker: 一个 mobi 电子书制作工具。用户使用 kindle_maker 就可以轻松制作出一本精美的 kindle 电子书。这部分已拎出来放在单独的项目里，具体使用方式见该项目文档： "),s("a",{attrs:{href:"https://github.com/jachinlin/kindle_maker",target:"_blank",rel:"noopener noreferrer"}},[t._v("kindle_maker"),s("OutboundLink")],1),t._v("；")])]),t._v(" "),s("li",[s("p",[t._v("utils: 提供了 mp3/mp4 下载、邮件发送、html 文件生成等功能；")])]),t._v(" "),s("li",[s("p",[t._v("gk_apis: 封装了极客时间 api；")])]),t._v(" "),s("li",[s("p",[t._v("store_client: 缓存极客时间专栏数据至本地 json 文件；")])]),t._v(" "),s("li",[s("p",[t._v("cli: 提供若干cmd 命令，将上面这几个部分连接在一起，最后使用 kindle_maker 制作电子书，或者使用下载器下载相关音视频。")])])]),t._v(" "),s("h2",{attrs:{id:"主要依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要依赖"}},[t._v("#")]),t._v(" 主要依赖")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://dPocs.python.org/3.6/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python"),s("OutboundLink")],1),t._v(": 支持的 Python 版本为 3.6 及以上")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://www.python-requests.org/en/master/",target:"_blank",rel:"noopener noreferrer"}},[t._v("requests"),s("OutboundLink")],1),t._v(": 网络请求")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://jinja.pocoo.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jinja2"),s("OutboundLink")],1),t._v(": html 模板引擎")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/jachinlin/kindle_maker",target:"_blank",rel:"noopener noreferrer"}},[t._v("kindle_maker"),s("OutboundLink")],1),t._v(": 制作 kindle 电子书")])])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("h3",{attrs:{id:"安装-python-解释器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-python-解释器"}},[t._v("#")]),t._v(" 安装 Python 解释器")]),t._v(" "),s("p",[t._v("目前仅支持 Python3.6+（包含），请在 "),s("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 官网"),s("OutboundLink")],1),t._v("下载并安装您熟悉的版本对应的 Python 解释器。")]),t._v(" "),s("h3",{attrs:{id:"虚拟环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟环境"}},[t._v("#")]),t._v(" 虚拟环境")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" geektime "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$$")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" geektime\npython3 -m venv venv3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" venv3/bin/activate\n")])])]),s("h3",{attrs:{id:"安装-geektime-dl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-geektime-dl"}},[t._v("#")]),t._v(" 安装 geektime-dl")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -U geektime_dl\n")])])]),s("p",[t._v("或者源码安装，这样可以获取最新的特性")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -U git+https://github.com/jachinlin/geektime_dl.git\n")])])]),s("h3",{attrs:{id:"检验是否正确安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检验是否正确安装"}},[t._v("#")]),t._v(" 检验是否正确安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("geektime "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("\n")])])]),s("p",[t._v("执行上述命令，如果出现 "),s("code",[t._v("command not found: geektime")]),t._v("，则说明没有正确安装，请按照上面步骤重新按照，如果还有困难的话，可以"),s("a",{attrs:{href:"https://github.com/jachinlin/geektime_dl/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("提 issue"),s("OutboundLink")],1),t._v("获取帮助；如果 terminal 显示的是其他信息，则说明您已经正确安装该软件了，恭喜您，咱们可以进行下一步了。")]),t._v(" "),s("h2",{attrs:{id:"查看帮助信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看帮助信息"}},[t._v("#")]),t._v(" 查看帮助信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("geektime "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("\n")])])]),s("p",[t._v("该命令会显示所有支持的命令（command），以及所支持的命令的简要说明，具体输出如下：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Available commands:\n    daily  保存每日一课视频\n    ebook  将专栏文章制作成电子书\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("   Display the list of available commands\n    login  登录极客时间，保存账号密码至配置文件\n    mp3    保存专栏音频\n    query  查看课程列表\n\nUse "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'geektime <command> --help'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" individual "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" help.\n")])])]),s("p",[t._v("通过下边的操作可以查看具体命令（command）的帮助信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("geektime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --help\n")])])]),s("p",[t._v("例如，")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("geektime ebook --help\n")])])]),s("p",[t._v("这条命令就可以显示出 "),s("code",[t._v("ebook")]),t._v(" 命令（制作 mobi 电子书命令）的使用说明和所有的参数说明")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("usage: geektime ebook\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-a ACCOUNT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-p PASSWORD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--area AREA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--config CONFIG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-o OUTPUT_FOLDER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--no-login"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--image-ratio IMAGE_RATIO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--image-min-height IMAGE_MIN_HEIGHT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--image-min-width IMAGE_MIN_WIDTH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--email-to EMAIL_TO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--smtp-password SMTP_PASSWORD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--smtp-user SMTP_USER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--smtp-encryption SMTP_ENCRYPTION"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--smtp-port SMTP_PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--smtp-host SMTP_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--push"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--comments-count COMMENTS_COUNT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--force"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       course_ids\n\n将专栏文章制作成电子书\n\npositional arguments:\n  course_ids            specify the target course ids\n\noptional arguments:\n  -h, --help            show this "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  -a ACCOUNT, --account ACCOUNT\n                        specify the account phone number "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -p PASSWORD, --password PASSWORD\n                        specify the account password "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --area AREA           specify the account country code "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("86")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --config CONFIG       specify alternate config "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default:\n                        /Users/linjiaxian/dev/geektime_dl/geektime.cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -o OUTPUT_FOLDER, --output-folder OUTPUT_FOLDER\n                        specify the output folder "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default:\n                        /Users/linjiaxian/dev/geektime_dl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --no-login            no login, just "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: False"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --image-ratio IMAGE_RATIO\n                        image ratio "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --image-min-height IMAGE_MIN_HEIGHT\n                        image min height "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --image-min-width IMAGE_MIN_WIDTH\n                        image min width "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --email-to EMAIL_TO   specify the kindle receiver email "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --smtp-password SMTP_PASSWORD\n                        specify the smtp password "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --smtp-user SMTP_USER\n                        specify the smtp user "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --smtp-encryption SMTP_ENCRYPTION\n                        specify the a smtp encryption "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --smtp-port SMTP_PORT\n                        specify the a smtp port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --smtp-host SMTP_HOST\n                        specify the smtp "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --push                push to kindle "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: False"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --comments-count COMMENTS_COUNT\n                        the count of comments to fetch each post "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --force               "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" not use the cache data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: False"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("具体命令的参数说明是使用 "),s("code",[t._v("argparse")]),t._v(" 生成的，如果你对于上面的参数说明感到迷惑的话，可以先阅读 "),s("a",{attrs:{href:"https://docs.python.org/3.8/howto/argparse.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("argparse 的文档"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("下一步，请阅读"),s("RouterLink",{attrs:{to:"/guide.html"}},[t._v("使用说明")]),t._v("。")],1)])}),[],!1,null,null,null);a.default=e.exports}}]);