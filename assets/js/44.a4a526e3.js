(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{484:function(t,e,a){"use strict";a.r(e);var s=a(50),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"demo-alluxio-tieredstore-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo-alluxio-tieredstore-configuration"}},[t._v("#")]),t._v(" Demo - Alluxio Tieredstore Configuration")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Alluxio/alluxio",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alluxio"),a("OutboundLink")],1),t._v(" is one of the distributed cache engines leveraged by Fluid.\nIt supports tieredstores to store cached data in different location, for example different directories with different storage types.\nBy appropriate configurations on tieredstores, users can get better I/O throughput from Fluid and eliminate bottlenecks when accessing data.")]),t._v(" "),a("p",[t._v("The guide introduces you how to configure Alluxio's tieredstore in a declarative way in Fluid.")]),t._v(" "),a("p",[t._v("To get more tech detail about Alluxio's tieredstore, please refer to "),a("a",{attrs:{href:"https://docs.alluxio.io/ee/user/stable/en/core-services/Caching.html?q=tieredstore#configuring-alluxio-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cache-related docs offered by Alluxio"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/fluid-cloudnative/fluid",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fluid"),a("OutboundLink")],1),t._v("(version >= 0.3.0)")])]),t._v(" "),a("p",[t._v("Please refer to "),a("a",{attrs:{href:"https://github.com/fluid-cloudnative/fluid/blob/master/docs/en/userguide/install.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fluid installation documentation"),a("OutboundLink")],1),t._v(" to complete installation.")]),t._v(" "),a("h2",{attrs:{id:"single-tier-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-tier-configuration"}},[t._v("#")]),t._v(" Single-Tier Configuration")]),t._v(" "),a("p",[t._v("Here is an typical example for an AlluxioRuntime:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dataset\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tieredstore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /dev/shm\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MEM\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quota")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2Gi\n")])])]),a("p",[a("code",[t._v("spec.tieredstore.levels")]),t._v(" contains only one level, so Alluxio will run with single tieredstore.")]),t._v(" "),a("p",[t._v("A brief description for each property involved in the above-mentioned example is as follows:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("path")]),t._v(": where data cache actually stores")]),t._v(" "),a("li",[a("code",[t._v("mediumtype")]),t._v(": one of the three values("),a("code",[t._v("MEM")]),t._v(", "),a("code",[t._v("SSD")]),t._v(", "),a("code",[t._v("HDD")]),t._v("), used to specify medium for "),a("code",[t._v("path")])]),t._v(" "),a("li",[a("code",[t._v("quota")]),t._v(": maximium cache capacity for the level")])]),t._v(" "),a("h2",{attrs:{id:"single-tier-multi-directory-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-tier-multi-directory-configuration"}},[t._v("#")]),t._v(" Single-Tier Multi-Directory Configuration")]),t._v(" "),a("p",[t._v("The best way to demonstrate such configuration is to give an example like this:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dataset\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tieredstore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /mnt/ssd0/cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("/mnt/ssd1/cache\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SSD\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quota")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4Gi\n")])])]),a("p",[t._v("To use multiple directories as  Alluxio's tieredstore,\nthe only difference is to add more directories in "),a("code",[t._v("path")]),t._v(' with comma(",") as their separator.\nTake the yaml above as an example, with '),a("code",[t._v("path")]),t._v(' containing both "/mnt/ssd0/cache" and "/mnt/ssd1/cache",\nAlluxio will use these two directories as its cache store in the meantime.')]),t._v(" "),a("p",[t._v('The example also implies some best practices about when you might want to use such configuration: If there is a bottleneck\nintroduced by storage device itself(e.g. limited by Hard disk I/O throughput), using multiple storage devices("/mnt/ssd0" and "/mnt/ssd1" in the example above) as Alluxio\'s tieredstore\ncan reduce load on each device and get a higher I/O throughput.')]),t._v(" "),a("blockquote",[a("p",[t._v("Note: For now, Fluid only support tieredstores with homogeneous medium type.\nThat is, it is not allowed to use different hybrid storages in a tieredstore in Fluid.")])]),t._v(" "),a("p",[t._v("Also please note that, if multi-directory tieredstore is enabled, "),a("code",[t._v("quota")]),t._v(" will be divided equally to each directory.\nTake the yaml above as an example, with "),a("code",[t._v("quota")]),t._v(' setting to "4Gi", each directory in '),a("code",[t._v("path")]),t._v(' will have a cache capacity of "2Gi"(i.e. 4Gi / 2)')]),t._v(" "),a("p",[t._v("If that's not your desired way, Fluid also provides "),a("code",[t._v("quotaList")]),t._v(" to configure cache capacity for each directory:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dataset\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [default property in fluid]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# alluxio.worker.allocator.class: alluxio.worker.block.allocator.MaxFreeAllocator")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tieredstore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /mnt/ssd0/cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("/mnt/ssd1/cache\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SSD\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#quota: 4Gi")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quotaList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3Gi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("2Gi\n")])])]),a("p",[a("code",[t._v("quotaList")]),t._v(" allows you to set maximum cache capacity for each directory.\nThe "),a("code",[t._v("quotaList")]),t._v(" will distributed its values into directories in the same order you defined in "),a("code",[t._v("path")]),t._v(",\nso the number of "),a("code",[t._v("quotaList")]),t._v(" must be in consistent with the number of "),a("code",[t._v("path")]),t._v('. For example, with the yaml above,\n"/mnt/ssd0/cache" has a maximum cache capacity of "3Gi", while "/mnt/ssd1/cache" has capacity of "2Gi".')]),t._v(" "),a("p",[t._v("Another Alluxio property related to multi-directory tieredstore is "),a("code",[t._v("alluxio.worker.allocator.class")]),t._v(".\nAll the supported values are described as follows:")]),t._v(" "),a("ul",[a("li",[t._v('"MaxFreeAllocator": Always try to allocate the cache to the storage directory that currently has the most availability')]),t._v(" "),a("li",[t._v('"RoundRobinAllocator": On each tier, maintain a Round Robin order of storage directories. Try to allocate the new cache into a directory following the Round Robin order, and if that does not work, go to the next lower tier.')]),t._v(" "),a("li",[t._v('"GreedyAllocator": Always try to put the new cache into the first directory that can contain it.')])]),t._v(" "),a("p",[t._v('By default, Fluid uses "MaxFreeAllocator" to decide where to store a new cache. Users can feel free to change this behavior by setting corresponding allocator to the Alluxio property.\nFor example, users can change '),a("code",[t._v("alluxio.worker.allocator.class")]),t._v(' to "alluxio.worker.block.allocator.RoundRobinAllocator" to choose round robin strategy.')]),t._v(" "),a("h2",{attrs:{id:"multi-tier-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-tier-configuration"}},[t._v("#")]),t._v(" Multi-Tier Configuration")]),t._v(" "),a("p",[t._v("Here is an example for multi-tier configuration:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dataset\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tieredstore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /dev/shm\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MEM\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quota")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2Gi\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /mnt/ssd0/cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("/mnt/ssd1/cache\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SSD\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quotaList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3Gi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("2Gi\n")])])]),a("p",[t._v("Multiple tieredstores are just tieredstores with some order. Take the yaml above as an example,\nwe specify two tieredstores: the first level uses memory for high-speed data access and the second one uses\nSSD to get bigger cache capacity.")]),t._v(" "),a("p",[t._v("Level order defined in "),a("code",[t._v("spec.tieredstore.levels")]),t._v(" will not affect the actual level order used by Alluxio.\nBefore Alluxio launched, Fluid will firstly sort the levels according to "),a("code",[t._v("mediumtype")]),t._v(', and storages with higher I/O throughput will get higher priority.\nThat is, Fluid will sort tieredstores in the following orders: "MEM" < "SSD" < "HDD".')]),t._v(" "),a("blockquote",[a("p",[t._v("Note: Alluxio uses a different way to report its capacity usage when using multi-tier configuration.\nFor now, this will lead to some inaccuracy when showing "),a("code",[t._v("Dataset.Cached")]),t._v(" and "),a("code",[t._v("Dataset.CachedPercentage")]),t._v(" in Fluid.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);