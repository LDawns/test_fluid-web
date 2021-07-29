(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{473:function(e,s,t){"use strict";t.r(s);var a=t(50),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("p",[e._v("You may encounter various problems during installation or development in Fluid. Usually, logs are useful for debugging. But the Runtime containers where Fluid's underlying Distributed Cache Engine is running, are distributed on different hosts under distributed environment, so it's quite annoying to collect these logs one by one. To make this troublesome work easier, we provided a "),t("a",{attrs:{href:"https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("shell script"),t("OutboundLink")],1),e._v(" to help users collect logs more quickly. This document describes how to use that script.")]),e._v(" "),t("h2",{attrs:{id:"diagnose-fluid-using-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diagnose-fluid-using-script"}},[e._v("#")]),e._v(" Diagnose Fluid using Script")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Make sure that script is executable")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" a+x diagnose-fluid.sh\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Get help message")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ ./diagnose-fluid.sh \nUsage:\n    ./diagnose-fluid.sh COMMAND "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("OPTIONS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nCOMMAND:\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v("\n        Display this "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" message.\n    collect\n        Collect pods logs of controller and runtime.\nOPTIONS:\n    -r, --name name\n        Set the name of runtime.\n    -n, --namespace name\n        Set the namespace of runtime.\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Collect logs")]),e._v(" "),t("p",[e._v("You can collect all the Runtime container logs for given name and namespace with:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ ./diagnose-fluid.sh collect --name cifar10 --namespace default\n")])])]),t("blockquote",[t("p",[t("strong",[e._v("NOTES")]),e._v(":")]),e._v(" "),t("p",[e._v("As you can see from above command and help message, option "),t("code",[e._v("--name")]),e._v(" and "),t("code",[e._v("--namespace")]),e._v(" specified the name and namespace of Alluxio Runtime respectively.")])]),e._v(" "),t("p",[e._v("All the logs will be packed in a package under execution path.")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);