(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{520:function(a,e,s){"use strict";s.r(e);var t=s(50),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"示例-数据容忍污点调度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-数据容忍污点调度"}},[a._v("#")]),a._v(" 示例 - 数据容忍污点调度")]),a._v(" "),s("h2",{attrs:{id:"背景介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍"}},[a._v("#")]),a._v(" 背景介绍")]),a._v(" "),s("p",[a._v("节点亲和性是 Kubernetes Pod 的一种属性，它使 Pod 被吸引到一类特定的节点。 这可能出于一种偏好，也可能是硬性要求。 Taint（污点）则相反，它使节点能够排斥一类特定的 Pod。")]),a._v(" "),s("p",[a._v("容忍度（Tolerations）是应用于 Pod 上的，允许（但并不要求）Pod 调度到带有与之匹配的污点的节点上。")]),a._v(" "),s("p",[a._v("污点和容忍度（Toleration）相互配合，可以用来避免 Pod 被分配到不合适的节点上。 每个节点上都可以应用一个或多个污点，这表示对于那些不能容忍这些污点的 Pod，是不会被该节点接受的。")]),a._v(" "),s("p",[a._v("而在Fluid中，考虑到"),s("code",[a._v("Dataset")]),a._v("的可调度性，资源对象中也需要定义toleration，这意味着你能够像调度你的Pod一样调度缓存在Kubernetes集群上的存放位置。\n本文档将向你简单地展示上述特性")]),a._v(" "),s("h2",{attrs:{id:"新建工作环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建工作环境"}},[a._v("#")]),a._v(" 新建工作环境")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("any-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/tolerations\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("any-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/tolerations\n")])])]),s("h2",{attrs:{id:"运行示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行示例"}},[a._v("#")]),a._v(" 运行示例")]),a._v(" "),s("p",[s("strong",[a._v("查看全部节点")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get no\nNAME                       STATUS   ROLES    AGE    VERSION\ncn-beijing.192.168.1.146   Ready    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   200d   v1.16.9-aliyun.1\n")])])]),s("p",[a._v("kubectl taint nodes node1 key=value:NoSchedule")]),a._v(" "),s("p",[s("strong",[a._v("为节点配置污点（taint）")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl taint nodes cn-beijing.192.168.1.146 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("hbase")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true:NoSchedule\n")])])]),s("p",[a._v("在接下来的步骤中，我们将看到节点上的污点配置")]),a._v(" "),s("p",[s("strong",[a._v("再次查看节点")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get node cn-beijing.192.168.1.146 -oyaml "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" taints -A3\n  taints:\n  - effect: NoSchedule\n    key: hbase\n    value: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"true"')]),a._v("\n")])])]),s("p",[a._v("目前，节点增加了taints配置NoSchedule，这样默认数据集就无法放置到该节点上")]),a._v(" "),s("p",[s("strong",[a._v("检查待创建的Dataset资源对象")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ cat"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("dataset.yaml")]),a._v('\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\n  tolerations:\n    - key: hbase \n      operator: Equal \n      value: "true" \nEOF')]),a._v("\n")])])]),s("p",[a._v("在该"),s("code",[a._v("Dataset")]),a._v("资源对象的"),s("code",[a._v("spec")]),a._v("属性中，我们定义了一个"),s("code",[a._v("tolerations")]),a._v("的属性，该子属性要求数据缓存可以放置到配置污点的节点")]),a._v(" "),s("p",[s("strong",[a._v("创建Dataset资源对象")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl create -f dataset.yaml\ndataset.data.fluid.io/hbase created\n")])])]),s("p",[s("strong",[a._v("检查待创建的AlluxioRuntime资源对象")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ cat"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("runtime.yaml")]),a._v('\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF')]),a._v("\n")])])]),s("p",[a._v("该配置文件片段中，包含了许多与Alluxio相关的配置信息，这些信息将被Fluid用来启动一个Alluxio实例。上述配置片段中的"),s("code",[a._v("spec.replicas")]),a._v("属性被设置为1,这表明Fluid将会启动一个包含1个Alluxio Master和1个Alluxio Worker的Alluxio实例")]),a._v(" "),s("p",[s("strong",[a._v("创建AlluxioRuntime资源并查看状态")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl create -f runtime.yaml\nalluxioruntime.data.fluid.io/hbase created\n\n$ kubectl get pod -o wide\nNAME                 READY   STATUS    RESTARTS   AGE   IP              NODE                       NOMINATED NODE   READINESS GATES\nhbase-fuse-n4tnc     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          63m   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.146   cn-beijing.192.168.1.146   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nhbase-master-0       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          85m   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.146   cn-beijing.192.168.1.146   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nhbase-worker-qs26l   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          63m   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.146   cn-beijing.192.168.1.146   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("在此处可以看到，AlluxioWorker被启动，并且运行在具有污点的节点之上。")]),a._v(" "),s("p",[s("strong",[a._v("检查AlluxioRuntime状态")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get alluxioruntime hbase -o wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE     AGE\nhbase   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("               "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("                 Ready          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("               "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("                 Ready   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("             "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("               Ready   4m3s\n")])])]),s("p",[s("strong",[a._v("查看待创建的应用")])]),a._v(" "),s("p",[a._v("我们提供了一个样例应用来演示Fluid是如何进行数据缓存亲和性调度的，首先查看该应用：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ cat"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("app.yaml")]),a._v('\napiVersion: apps/v1beta1\nkind: StatefulSet\nmetadata:\n  name: nginx\n  labels:\n    app: nginx\nspec:\n  replicas: 1\n  serviceName: "nginx"\n  podManagementPolicy: "Parallel"\n  selector: # define how the deployment finds the pods it manages\n    matchLabels:\n      app: nginx\n  template: # define the pods specifications\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      tolerations:\n      - key: hbase \n        operator: Equal \n        value: "true" \n      containers:\n        - name: nginx\n          image: nginx\n          volumeMounts:\n            - mountPath: /data\n              name: hbase-vol\n      volumes:\n        - name: hbase-vol\n          persistentVolumeClaim:\n            claimName: hbase\nEOF')]),a._v("\n")])])]),s("p",[s("strong",[a._v("运行应用")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl create -f app.yaml\nstatefulset.apps/nginx created\n")])])]),s("p",[s("strong",[a._v("查看应用运行状态")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl get pod -o wide -l "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nginx\nNAME      READY   STATUS    RESTARTS   AGE    IP              NODE                       NOMINATED NODE   READINESS GATES\nnginx-0   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          2m5s   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.146   cn-beijing.192.168.1.146   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("可以看到Nginx Pod成功启动，并且运行在配置taint的节点之上")]),a._v(" "),s("h2",{attrs:{id:"环境清理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境清理"}},[a._v("#")]),a._v(" 环境清理")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ kubectl delete -f "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n\n$ kubectl taint nodes cn-beijing.192.168.1.146 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("hbase")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true:NoSchedule-\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);