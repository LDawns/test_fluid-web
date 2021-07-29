(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{528:function(t,a,s){"use strict";s.r(a);var n=s(50),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"示例-使用fluid访问非root用户的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-使用fluid访问非root用户的数据"}},[t._v("#")]),t._v(" 示例 - 使用Fluid访问非root用户的数据")]),t._v(" "),s("p",[t._v("如果用户的数据只能以特定uid访问时，需要通过设置Runtime的RunAs参数指定特定用户运行分布式数据缓存引擎以访问底层数据。")]),t._v(" "),s("p",[t._v("本文档将通过一个简单的例子演示上述特性")]),t._v(" "),s("h2",{attrs:{id:"前提条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/fluid-cloudnative/fluid",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fluid"),s("OutboundLink")],1),t._v("(version >= 0.3.0)")])]),t._v(" "),s("p",[t._v("请参考"),s("a",{attrs:{href:"https://github.com/fluid-cloudnative/fluid/blob/master/docs/zh/userguide/install.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fluid安装文档"),s("OutboundLink")],1),t._v("完成安装")]),t._v(" "),s("h2",{attrs:{id:"运行示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行示例"}},[t._v("#")]),t._v(" 运行示例")]),t._v(" "),s("p",[s("strong",[t._v("创建一个非root用户")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ groupadd -g 1201 fluid-user-1 && \\\nuseradd -u 1201 -g fluid-user-1 fluid-user-1\n")])])]),s("p",[t._v("上述命令创建了一个非root用户"),s("code",[t._v("fluid-user-1")])]),t._v(" "),s("p",[s("strong",[t._v("创建属于该用户的目录")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ mkdir -p /mnt/nonroot/user1_data && \\\necho "This is fluid-user-1\'s data" > /mnt/nonroot/user1_data/data1 && \\\nchown -R fluid-user-1:fluid-user-1 /mnt/nonroot/user1_data && \\\nchmod -R 0750 /mnt/nonroot/user1_data\n')])])]),s("p",[t._v("上述命令在"),s("code",[t._v("/mnt/nonroot")]),t._v("目录下创建了属于"),s("code",[t._v("fluid-user-1")]),t._v("的目录"),s("code",[t._v("user1_data")]),t._v(", 我们将以"),s("code",[t._v("user1_data")]),t._v("目录下的"),s("code",[t._v("data1")]),t._v("文件来模拟专属于"),s("code",[t._v("fluid-user-1")]),t._v("的数据")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ls -ltR /mnt/nonroot\n")])])]),s("p",[t._v("使用上述命令，你将看到以下结果：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/mnt/nonroot/:\ntotal 4\ndrwxr-x--- 2 fluid-user-1 fluid-user-1 4096 9月  27 16:45 user1_data\n\n/mnt/nonroot/user1_data:\ntotal 4\n-rwxr-x--- 1 fluid-user-1 fluid-user-1 28 9月  27 16:45 data1\n")])])]),s("p",[s("strong",[t._v("创建Dataset和AlluxioRuntime资源对象")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("$ cat<<EOF "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("dataset.yaml\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Dataset\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nonroot\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定刚才建立的目录作为挂载位置")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("///mnt/nonroot/\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nonroot\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保数据缓存被放置在存在/mnt/nonroot目录的结点上")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeAffinity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeSelectorTerms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchExpressions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nonroot\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("operator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" In\n              "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nonroot\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tieredstore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SSD\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /var/lib/docker/alluxio\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quota")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2Gi\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("high")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.95"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("low")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.7"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以fluid-user-1的用户身份启动Alluxio")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runAs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1201")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1201")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fluid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fuse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" fuse\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fuse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("opts=kernel_cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("max_read=131072"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("attr_timeout=7200"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("entry_timeout=7200"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("max_readahead=0\nEOF\n")])])]),s("p",[t._v("在上述yaml配置文件中，我们将以挂载主机目录的方式挂载我们刚才创建的目录("),s("code",[t._v("/mnt/nonroot")]),t._v(")，更多有关Fluid挂载主机目录的信息，请参考"),s("RouterLink",{attrs:{to:"/zh/samples/hostpath.html"}},[t._v("示例 - 用Fluid加速主机目录")])],1),t._v(" "),s("p",[t._v("另外，在"),s("code",[t._v("spec.runAs")]),t._v("中我们设置了"),s("code",[t._v("uid")]),t._v("等用户信息，这意味着我们将以"),s("code",[t._v("fluid-user-1")]),t._v("的用户身份启动缓存引擎，提供分布式缓存能力")]),t._v(" "),s("p",[s("strong",[t._v("标记结点")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ kubectl label node <node> nonroot=true\n")])])]),s("p",[t._v("使用"),s("code",[t._v("nonroot=true")]),t._v("对刚才创建的"),s("code",[t._v("/mnt/nonroot")]),t._v("目录所在结点进行标记，确保缓存引擎在该结点上启动，使得其能够正确挂载指定的主机目录")]),t._v(" "),s("p",[s("strong",[t._v("创建Dataset和AlluxioRuntime资源对象")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ kubectl create -f dataset.yaml\n")])])]),s("p",[s("strong",[t._v("查看PV,PVC")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ kubectl get pv,pvc\n")])])]),s("p",[t._v("待缓存引擎正常启动后，上述命令将得到如下结果：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NAME                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM             STORAGECLASS   REASON   AGE\npersistentvolume/nonroot   100Gi      RWX            Retain           Bound    default/nonroot                           3m18s\n\nNAME                            STATUS   VOLUME    CAPACITY   ACCESS MODES   STORAGECLASS   AGE\npersistentvolumeclaim/nonroot   Bound    nonroot   100Gi      RWX                           3m18s\n")])])]),s("p",[s("strong",[t._v("创建应用使用Dataset")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("$ cat<<EOF "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("app.yaml\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IfNotPresent\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /data\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nonroot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("vol\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("securityContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runAsUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1201")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runAsGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1201")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" tail\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("f\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /dev/null \n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nonroot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("vol\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persistentVolumeClaim")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("claimName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nonroot\nEOF\n")])])]),s("p",[t._v("上述配置意味着我们将以"),s("code",[t._v("uid")]),t._v("为1201的用户身份启动该应用, 并通过Fluid创建出的PVC将数据挂载到Pod上")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ kubectl create -f app.yaml\n")])])]),s("p",[s("strong",[t._v("登录应用")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ kubectl exec -it nginx -- bash\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ id\n")])])]),s("p",[t._v("上述命令将得到以下结果：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("uid=1201 gid=1201 groups=1201\n")])])]),s("p",[t._v("这表明我们以"),s("code",[t._v("uid")]),t._v("为1201的用户身份启动了该应用")]),t._v(" "),s("p",[s("strong",[t._v("访问数据")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ls -ltR /data\n")])])]),s("p",[t._v("上述命令将得到以下结果：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/data/:\ntotal 1\ndrwxr-xr-x 1 root root 1 Sep 27 08:45 nonroot\n\n/data/nonroot:\ntotal 1\ndrwxr-x--- 1 1201 1201 1 Sep 27 08:45 user1_data\n\n/data/nonroot/user1_data:\ntotal 1\n-rwxr-x--- 1 1201 1201 28 Sep 27 08:45 data1\n")])])]),s("p",[t._v("可以看到，Fluid能够以"),s("strong",[t._v("透传")]),t._v("的方式将所属某个非root用户的数据暴露给需要这些数据的应用，用户数据的各文件信息不会发生改变")]),t._v(" "),s("p",[t._v("当然，该用户可以自由地访问这些数据：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ cat /data/nonroot/user1_data/data1\n")])])]),s("p",[t._v("上述命令将得到以下结果：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("This is fluid-user-1's data\n")])])]),s("h2",{attrs:{id:"环境清理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境清理"}},[t._v("#")]),t._v(" 环境清理")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ kubectl delete -f .\n$ rm -rf /mnt/nonroot\n$ userdel fluid-user-1\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);