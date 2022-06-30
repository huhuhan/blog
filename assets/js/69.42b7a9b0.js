(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{570:function(t,v,_){"use strict";_.r(v);var a=_(4),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"前提"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),_("h3",{attrs:{id:"域名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[t._v("#")]),t._v(" 域名")]),t._v(" "),_("p",[t._v("顶级域名或一级域名，比如："),_("code",[t._v(".com、.cn")])]),t._v(" "),_("p",[t._v("二级域名，比如："),_("code",[t._v("baidu.com")])]),t._v(" "),_("p",[t._v("三级域名，比如："),_("code",[t._v("pan.baidu.com")])]),t._v(" "),_("p",[t._v("域名备案的主域名，一般是"),_("code",[t._v("xx.com")]),t._v("，也称一级域名，同理直接子域名"),_("code",[t._v("yy.xx.com")]),t._v("就是二级域名")]),t._v(" "),_("h3",{attrs:{id:"cookie"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),_("p",[t._v("作用域是当前域名以及其子域名共享。即"),_("code",[t._v("baidu.com")]),t._v("的cookie，"),_("code",[t._v("pan.baidu.com")]),t._v("可以访问到。相反则不行")]),t._v(" "),_("h3",{attrs:{id:"登录功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#登录功能"}},[t._v("#")]),t._v(" 登录功能")]),t._v(" "),_("p",[t._v("基于Cookie、SessionId。比如单应用的登录，登录成功服务端将SessionId存在Cookie中返回客户端，后续请求带上Cookie，服务器解析里面的SessionId，保证是否成功。")]),t._v(" "),_("p",[t._v("登录凭证：SessionId（有状态）或Token（无状态），比如JWT Token")]),t._v(" "),_("h2",{attrs:{id:"单点登录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单点登录"}},[t._v("#")]),t._v(" 单点登录")]),t._v(" "),_("p",[t._v("即在同一账户平台的多个应用系统，只需登录一次。")]),t._v(" "),_("h3",{attrs:{id:"基于父级域名cookie"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基于父级域名cookie"}},[t._v("#")]),t._v(" 基于父级域名Cookie")]),t._v(" "),_("p",[t._v("在主域名下做统一认证。登录的凭证（sessionId或token）存在主域名cookie中，其他子域名应用都可使用。")]),t._v(" "),_("p",[t._v("缺点：跨域的应用不支持。")]),t._v(" "),_("p",[t._v("（这种也常见，因为接入的子应用会分到指定的域名，都是其对应的子域名，也算一种安全措施）")]),t._v(" "),_("h3",{attrs:{id:"基于统一认证中心"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基于统一认证中心"}},[t._v("#")]),t._v(" 基于统一认证中心")]),t._v(" "),_("p",[t._v("单独的认证中心应用，独立域名。认证中心专门处理登录请求，cookie与自己的服务对接，不需要共享。")]),t._v(" "),_("p",[t._v("其他域名的应用只要跳转到认证中心，发起请求就是用的认证中心域名下的cookie")]),t._v(" "),_("p",[t._v("优点：解决跨域")]),t._v(" "),_("h2",{attrs:{id:"单点登出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单点登出"}},[t._v("#")]),t._v(" 单点登出")]),t._v(" "),_("p",[t._v("即同一账户，单点登录后，某一应用注销退出，其他应用也要退出。")]),t._v(" "),_("p",[t._v("不管是主域名还是独立域名的认证中心，退出时需要根据凭证（sessionId或token）信息的唯一ID（账户或客户端）将所以分发的token都销毁掉")]),t._v(" "),_("p",[t._v("比如A应用单点登录后。B应用跳转统一认证中心（独立域名、跨域），验证已登录，直接分发到的token是可以新的，所以退出时需要都销毁")]),t._v(" "),_("h2",{attrs:{id:"其他"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),_("h3",{attrs:{id:"请求认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求认证"}},[t._v("#")]),t._v(" 请求认证")]),t._v(" "),_("p",[t._v("凭证token，一般都放在请求头，指定参数为"),_("strong",[t._v("Authorization")]),t._v("。新窗口可以通过url后带token参数，页面解析获取。")]),t._v(" "),_("p",[t._v("存储在Cookie中，新窗口url就不必加参数，显示上效果好点")]),t._v(" "),_("h3",{attrs:{id:"密钥信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#密钥信息"}},[t._v("#")]),t._v(" 密钥信息")]),t._v(" "),_("p",[t._v("都是后端服务去调认证中心接口，将应用密钥放在后端保存")]),t._v(" "),_("h3",{attrs:{id:"前后端分离"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前后端分离"}},[t._v("#")]),t._v(" 前后端分离")]),t._v(" "),_("p",[t._v("非分离版，路由判断都是后端处理")]),t._v(" "),_("p",[t._v("分离版，前端做判断是否重定向，")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("判断依据，token是否存在前端Cookie或Storage，保证后续调接接口能带上凭证")])]),t._v(" "),_("li",[_("p",[t._v("请求是调后端获取token、验证token，后端再去调认证中心。拿到token就存储下来")])]),t._v(" "),_("li",[_("p",[t._v("退出注销，删除前端存储的token，请求后端注销接口。后端调用认证中心注销接口")])])]),t._v(" "),_("p",[t._v("获取token")]),t._v(" "),_("ul",[_("li",[t._v("比如授权码方式，需要解析认证中心跳转回来url带的code参数，再调后端接口")]),t._v(" "),_("li",[t._v("或者直接Cookie中获取，因为父级域名共享")])])])}),[],!1,null,null,null);v.default=e.exports}}]);