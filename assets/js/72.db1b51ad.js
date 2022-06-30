(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{571:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目"}},[s._v("#")]),s._v(" 项目")]),s._v(" "),a("h3",{attrs:{id:"下载链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载链接"}},[s._v("#")]),s._v(" 下载链接")]),s._v(" "),a("ul",[a("li",[s._v("地址："),a("a",{attrs:{href:"https://github.com/huhuhan/yh-cloud",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("tag： "),a("a",{attrs:{href:"https://github.com/huhuhan/yh-cloud/archive/oauth2.zip",target:"_blank",rel:"noopener noreferrer"}},[s._v("zip"),a("OutboundLink")],1)])]),s._v(" "),a("blockquote",[a("p",[s._v("项目已更新，下面例子，下载tag获得原项目代码")])]),s._v(" "),a("h3",{attrs:{id:"启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动项目"}},[s._v("#")]),s._v(" 启动项目")]),s._v(" "),a("ul",[a("li",[s._v("yh-eureka")]),s._v(" "),a("li",[s._v("yh-auth")]),s._v(" "),a("li",[s._v("yh-auth-client-demo")])]),s._v(" "),a("blockquote",[a("p",[s._v("yh-eureka 可以不启动，不过其他2个项目需要去除eureka依赖")])]),s._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),a("ul",[a("li",[s._v("postman客户端导入"),a("code",[s._v("yh-auth-client-demo\\src\\main\\resources\\postman_collection2.1.json")]),s._v("或"),a("a",{attrs:{href:"https://fastly.jsdelivr.net/gh/huhuhan/img@master/postman/spring%20cloud%20oauth2.postman_collection.json",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载json"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("demo数据")])]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("123456")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("client-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("client_demo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("client-secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("secret_client_demo")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"客户端认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端认证"}},[s._v("#")]),s._v(" 客户端认证")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --location --request POST "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:9001/oauth/token'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--header "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/x-www-form-urlencoded'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'grant_type=client_credentials'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'client_id=client_demo'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'client_secret=secret_client_demo'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scope=all'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNTg1NTQyOTgyLCJhdXRob3JpdGllcyI6WyJjbGllbnRfeCJdLCJqdGkiOiI4YTY0ZjlkYy0zZjhjLTQyNzMtYmUzYi1jZDRkYzhkNDljOTUiLCJjbGllbnRfaWQiOiJjbGllbnRfZGVtbyJ9.T8BrYGuuHGDJrxEcAjMlWhEzTtZf-hjGqRtygglS5EAzefbBesy6MFsWarMXyNZaLhWgqYoH4dilQpQLrM6UGnULN3pCPz0XTQOazV_hhxtWqG-RHTYp6yAi2U685ZmAgOn01En0V_ntiksradR9cU9FxOHrUd0qf9-U7qLcc6SU9qQdy4B1bwRIMgOlhaMvBxKJUzhJ18irn6XRBUSOkjeTSSiwbql_oioStZ5MVRKHd5ARxpEVj2vX40Qczueu6aM749lSatYihhRmVB2yuhjgSZ-uJRFmYepcBj3FdweSY6JHs48hxpmvU_H_qgxX7jOpRB0ARRMq2HV79AdRjg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"token_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bearer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3599")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scope"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jti"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8a64f9dc-3f8c-4273-be3b-cd4dc8d49c95"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"密码认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#密码认证"}},[s._v("#")]),s._v(" 密码认证")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --location --request POST "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:9001/oauth/token'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--header "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/x-www-form-urlencoded'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'grant_type=password'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'client_id=client_demo'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'client_secret=secret_client_demo'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scope=all'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username=test'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--data-urlencode "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password=123456'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ0ZXN0Iiwic2NvcGUiOlsiYWxsIl0sInJvbGVzIjpbImFkbWluIiwicGVyc29uIl0sImV4cCI6MTU4NTU0MzE5MywidXNlciI6eyJnZW5kZXIiOiLnlLciLCJjcmVhdGVUaW1lIjoiTW9uIE1hciAzMCAxMTozOTo1MyBDU1QgMjAyMCIsInVzZXJOYW1lIjoiYWRtaW4ifSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6Ijc1OWFhMTY5LTM4YzYtNDg5Mi1iMzMxLWVhYTFlZTBkNWE4OCIsImNsaWVudF9pZCI6ImNsaWVudF9kZW1vIn0.WjY-rAfPggrzTSMfKD3aGpEbgZldbCoYew1pCQatZpxNa3PVN-e8tAnCAdzO3y0VPh8e5kAN5CIvtyvgo5GhiI1oiDvSECGj7wHEqMAEPcydV8xamItVQoY9c_dyoUxS-0kGTp6SSPInsSQgS8XMy0TInCAGjd7S3KP29LlU0M92OyZ2Osfi0Q0q9Z2R0zMvha-IsqkPMPmqmH70XWaPnxGZdKCG1wwbgc2M2TH-bl8q8lc5N5S3y9Yk3XoES1Tci-4gQgOrcGBNTloECDTH9QJcuDUonmL_x72TGmCUAaDGdAJZkUbdXzuwagp1w9HyTzdcTVcY2KfU6E8-kondkg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"token_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bearer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"refresh_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ0ZXN0Iiwic2NvcGUiOlsiYWxsIl0sInJvbGVzIjpbImFkbWluIiwicGVyc29uIl0sImF0aSI6Ijc1OWFhMTY5LTM4YzYtNDg5Mi1iMzMxLWVhYTFlZTBkNWE4OCIsImV4cCI6MTU4NTU0MzE5MywidXNlciI6eyJnZW5kZXIiOiLnlLciLCJjcmVhdGVUaW1lIjoiTW9uIE1hciAzMCAxMTozOTo1MyBDU1QgMjAyMCIsInVzZXJOYW1lIjoiYWRtaW4ifSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjlmYTc3YWEyLWQ0NzEtNDc3MC04YTdmLTBkMzVjMjI0NTQxNSIsImNsaWVudF9pZCI6ImNsaWVudF9kZW1vIn0.ZRt7cc8CemQOHwiiYifRXnXQe5HKwfN_unxpYlI596UZ9FllWNoK7abkPRifWJQXcCl652nPhoAEurwV2VQFrQ2DsxUZEihzuze0vXB41KWZpvWRNTvcHKWnaDJ-bp1CXIP1p_KjbEsgOL9Cwyq9psuUscaIVzgg1NglRGbYJp9XoHTzGwUAguL13bamZEGUHRL7-oEtUntvcjblJtDuHriZke0iIBqbeJppjt8fq0dsURA3laOLZB_PA72SDQksyXkBR-nLkjtplFnBpC6NzMqrK25iamEgzocTfvYQa-PKIe6hRzQUCb4YsVR1pCQYDQPB4R_JtHTcXHxNgFYj_w"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3599")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scope"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"roles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"person"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"user"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"gender"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"男"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"createTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mon Mar 30 11:39:53 CST 2020"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jti"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"759aa169-38c6-4892-b331-eaa1ee0d5a88"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"授权码认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#授权码认证"}},[s._v("#")]),s._v(" 授权码认证")]),s._v(" "),a("p",[s._v("获取授权码 : "),a("a",{attrs:{href:"http://127.0.0.1:9001/oauth/authorize?client_id=client_demo&redirect_uri=http://www.baidu.com&response_type=code&scope=all",target:"_blank",rel:"noopener noreferrer"}},[s._v("浏览器访问"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("curl --location --request GET 'http://127.0.0.1:9001/oauth/authorize?client_id=client_demo&redirect_uri=http://www.baidu.com&response_type=code&scope=all%0A'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("同意授权")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://www.baidu.com/?code=zBW1AD\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("拒绝授权")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://www.baidu.com/?error=access_denied&error_description=User denied access\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("授权码认证，授权码"),a("code",[s._v("zBW1AD")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("curl --location --request POST 'http://127.0.0.1:9001/oauth/token' \\\n--header 'Content-Type: application/x-www-form-urlencoded' \\\n--data-urlencode 'client_secret=secret_client_demo' \\\n--data-urlencode 'grant_type=authorization_code' \\\n--data-urlencode 'code=zBW1AD' \\\n--data-urlencode 'redirect_uri=http://www.baidu.com' \\\n--data-urlencode 'client_id=client_demo'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ0ZXN0Iiwic2NvcGUiOlsiYWxsIl0sInJvbGVzIjpbImFkbWluIiwicGVyc29uIl0sImV4cCI6MTU4NTU0Mzk3MSwidXNlciI6eyJnZW5kZXIiOiLnlLciLCJjcmVhdGVUaW1lIjoiTW9uIE1hciAzMCAxMTo1Mjo1MSBDU1QgMjAyMCIsInVzZXJOYW1lIjoiYWRtaW4ifSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjU0YWY0ZmJhLTBmNGQtNGRjYy04MDBiLTY5N2UyNzIwNDg4OCIsImNsaWVudF9pZCI6ImNsaWVudF9kZW1vIn0.Z9Sx0n7sHJhW759nE2KRfALo0XpD0Wb8pnaKempwTJbuoN7ixScp2T6_I3C9G283ZuG5BY0dl2cfdvJGYcNYCYiOlLJZcbduIZDq6sdkylMwfj_SUAQ_5gsi48HC81fWmognuLGLdZ9oSFMTv79gi3LQ866oU8By8556DudFqr5-IrEWJKlJkwivc0tt09RGlA7O8qsR_07A-vQREzeflfCpNFBfp_MkKpdYjQPUzSriWKg0KscUDoaIyBJsmEZ_laOxkLdPiwCT4TgEyJIW3W4vOcKH7D5pFi5ShzI6Dq0t59l29LkfnUndQuVPXCkYzSW7glo0epOwNzZE9OI57w"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"token_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bearer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"refresh_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ0ZXN0Iiwic2NvcGUiOlsiYWxsIl0sInJvbGVzIjpbImFkbWluIiwicGVyc29uIl0sImF0aSI6IjU0YWY0ZmJhLTBmNGQtNGRjYy04MDBiLTY5N2UyNzIwNDg4OCIsImV4cCI6MTU4NTU0Mzk3MSwidXNlciI6eyJnZW5kZXIiOiLnlLciLCJjcmVhdGVUaW1lIjoiTW9uIE1hciAzMCAxMTo1Mjo1MSBDU1QgMjAyMCIsInVzZXJOYW1lIjoiYWRtaW4ifSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6ImM4OWY1OTk2LTZlZjItNGE1ZS04MTkzLTJiNTZlZGM4MTQ5MSIsImNsaWVudF9pZCI6ImNsaWVudF9kZW1vIn0.ULelSo5532nqIl0pZG9uRoejb_1S69TYKUEWqym7z2f7I3kY3Kfh2180UE3F266fDR6XGf3AlMOFkdAaOqq1XaSNqyEwvoqynszXfVhMh9sK8_b5EhFbzRdXttkEYVGFGNImh9xinXR_BwF5aJkJABAT7IirPoapGKJwHpa88X5jNdhS2A9UQyDVXHrb5V_7tDC8kuWMMLhm1uBwiN7ZRvjrAW13DbBhZYFcfcAWt5YibEQu7wY3kym3YZwykFJvQh3sT5grpENU7CHMDaFSSJ84N-yhM6YZNXTAGQFOg5zalc0aRt-okd46iphOQPNKViDrFcXzd8PtmEUKqwke_A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3599")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scope"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"roles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"person"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"user"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"gender"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"男"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"createTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mon Mar 30 11:52:51 CST 2020"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"userName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jti"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"54af4fba-0f4d-4dcc-800b-697e27204888"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"资源访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源访问"}},[s._v("#")]),s._v(" 资源访问")]),s._v(" "),a("p",[s._v("受保护资源无权访问："),a("a",{attrs:{href:"http://127.0.0.1:9999/user",target:"_blank",rel:"noopener noreferrer"}},[s._v("资源访问"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("带token访问")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --location --request GET "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:9999/user'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--header "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNTg1NTQ0MTg5LCJhdXRob3JpdGllcyI6WyJjbGllbnRfeCJdLCJqdGkiOiJmM2IzYTcxOS1mYzdkLTQ5NzctYmViNi1kMTA3MWNkMGI4Y2UiLCJjbGllbnRfaWQiOiJjbGllbnRfZGVtbyJ9.SNOkMSlNgAIwEhw97mbihWCL86NO4Tf6ps1ZteCWYklGqbv1mBXm0Nk6DFZf2JYv8xqum-HuK5465kVM0TMCzsbKrLLL_3NS7YDOzpNx0hg618qL5nlpbrRcFZeRk4-T2V6KMroJ-rph4FbKMLW9vHl5JSsrxMbSaDjQCwWYNxiyI3PtHiBbX861AIb2QXADwlXXbbJvyPP1m7ajacQ_YooNgUkox1CDNZPXPThkUBR6aH9DBsVuBzmK_y0Ui6id8erA37Aekt-iTwjpeNjXKwXFEaqchyfcTdGstcPK6WwrNPHtmcdfOtalUZI2GBBh_sWRYVVVd4aBSqStcpjXgQ'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"httpbasic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpbasic"}},[s._v("#")]),s._v(" HttpBasic")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("oauth2认证授权的关键参数"),a("strong",[s._v("client_id")])]),s._v(" "),a("li",[s._v("默认是要求通过HttpBasic方式传参的，如下，")]),s._v(" "),a("li",[s._v("以上测试例子，项目配置了"),a("strong",[s._v("security.allowFormAuthenticationForClients(）")]),s._v("，支持作为parameter传参")]),s._v(" "),a("li",[s._v("可能和后续的token参数"),a("strong",[s._v("Authorization")]),s._v("，注意区分，避免覆盖")]),s._v(" "),a("li",[s._v("注意："),a("strong",[s._v("HttpBasic通过base64加密，是可逆")]),s._v("，不过比直接作为parameter暴露要好点")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" axios "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'axios'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" qs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'qs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'grant_type'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'client_credentials'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scope'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'all'")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 请求参数错误，浏览器会自动弹窗HttpBasic认证，免得误以为是后端的问题- -！")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  method"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:9001/oauth/token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//'Authorization': 'Basic ' + window.btoa(client_id + \":\" + client_secret)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Authorization'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Basic Y2xpZW50X2RlbW86c2VjcmV0X2NsaWVudF9kZW1v'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/x-www-form-urlencoded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Cookie'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'JSESSIONID=10879E8D734CB378DD345D654EE9C03B'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" data\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("axios")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);