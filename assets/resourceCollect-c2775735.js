import { _ as _export_sfc, A as reactive, a as openBlock, c as createElementBlock, d as createBaseVNode, t as toDisplayString, F as Fragment, b as renderList, h as createVNode, w as withCtx, k as withDirectives, v as vShow, T as Transition, g as unref, j as createCommentVNode, p as pushScopeId, l as popScopeId, r as ref, x as normalizeClass, s as isRef, e as createBlock, B as resolveDynamicComponent } from "./index-fe9d6c27.js";
const resourceComponent_vue_vue_type_style_index_0_scoped_dc7656a4_lang = "";
const _hoisted_1$4 = {
  class: "resourceComponent resourceRight"
};
const _hoisted_2$2 = {
  class: "title"
};
const _hoisted_3$1 = ["item", "onMouseenter"];
const _hoisted_4$1 = {
  class: "title"
};
const _hoisted_5$1 = {
  class: "describe"
};
const _hoisted_6$1 = {
  class: "describe"
};
const _hoisted_7$1 = ["href"];
const _hoisted_8$1 = ["src"];
const _sfc_main$6 = {
  __name: "resourceComponent",
  props: {
    dataList: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const reactive_list = reactive(props.dataList);
    const openPreview = function(index) {
      for (let i = 0; i < reactive_list.length; i++) {
        if (i === index)
          reactive_list[i].show = true;
        else
          reactive_list[i].show = false;
      }
    };
    const closeAllPreview = function() {
      for (let i = 0; i < reactive_list.length; i++) {
        reactive_list[i].show = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [createBaseVNode("h2", _hoisted_2$2, toDisplayString(__props.title), 1), createBaseVNode("div", {
        class: "tabComponent",
        onMouseleave: closeAllPreview
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(reactive_list, (item, index) => {
        return openBlock(), createElementBlock("div", {
          class: "colorLink",
          item: index,
          onMouseleave: closeAllPreview,
          onMouseenter: ($event) => openPreview(index)
        }, [createBaseVNode("h3", _hoisted_4$1, toDisplayString(item.name), 1), createBaseVNode("div", _hoisted_5$1, toDisplayString(item.describe), 1), createBaseVNode("div", _hoisted_6$1, [createBaseVNode("a", {
          href: item.url,
          target: "_blank"
        }, toDisplayString(item.url), 9, _hoisted_7$1)]), createVNode(Transition, {
          name: "previewShow"
        }, {
          default: withCtx(() => [withDirectives(createBaseVNode("img", {
            src: item.imgSrc,
            alt: "",
            class: "preview"
          }, null, 8, _hoisted_8$1), [[vShow, item.show && item.imgSrc]])]),
          _: 2
        }, 1024)], 40, _hoisted_3$1);
      }), 256))], 32)]);
    };
  }
};
const resourceComponent = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-dc7656a4"]]);
const _hoisted_1$3 = {
  class: "webDesign"
};
const _sfc_main$5 = {
  __name: "webDesign",
  setup(__props) {
    let color_link_list = [{
      name: "中国色色谱",
      describe: "中国经典颜色",
      url: "http://zhongguose.com/#shizhuhong",
      imgSrc: "/images/color1.png",
      show: false
    }, {
      name: "日本色色谱",
      describe: "日本经典颜色",
      url: "https://nipponcolors.com/",
      imgSrc: "/images/color2.png",
      show: false
    }, {
      name: "ColorDraop",
      describe: "包括调色盘、颜色版、渐变色工具和扫描图片获取颜色等功能",
      url: "https://colordrop.io/",
      imgSrc: "/images/color3.png",
      show: false
    }, {
      name: "uiGradients",
      describe: "渐变色工具，有很多好看的渐变色",
      url: "https://uigradients.com/#Alive",
      imgSrc: "/images/color4.png",
      show: false
    }, {
      name: "colorSupply",
      describe: "收集了世界各地设计师的色彩搭配方案，适合扁平化UI设计使用",
      url: "https://colorsupplyyy.com/app/",
      imgSrc: "/images/color5.png",
      show: false
    }, {
      name: "Color Lisa",
      describe: "由世界知名画作提取配色",
      url: "https://colorlisa.com/",
      imgSrc: "/images/color6.png",
      show: false
    }, {
      name: "Color Claim",
      describe: "收集了许多独特的颜色",
      url: "https://vanschneider.com/colors",
      imgSrc: "/images/color7.png",
      show: false
    }, {
      name: "colllor",
      describe: "输入颜色可以得到许多它的邻近色",
      url: "http://colllor.com/",
      imgSrc: "/images/color8.png",
      show: false
    }, {
      name: "flatuicolorpicker",
      describe: "收集了许多颜色",
      url: "https://www.flatuicolorpicker.com/",
      imgSrc: "/images/color9.png",
      show: false
    }, {
      name: "photokit",
      describe: "渐变颜色工具",
      url: "https://photokit.com/colors/color-gradient/?lang=zh",
      imgSrc: "/images/color10.png",
      show: false
    }, {
      name: "webgradients",
      describe: "提供了许多渐变色的选择",
      url: "https://webgradients.com",
      imgSrc: "/images/color11.png",
      show: false
    }, {
      name: "ShapeFactory",
      describe: "提供了颜色、渐变色等工具",
      url: "https://shapefactory.co/",
      imgSrc: "/images/color12.png",
      show: false
    }];
    let icon_link_list = [{
      name: "iconfont",
      describe: "大名鼎鼎的阿里巴巴矢量库，太好用啦",
      url: "https://www.iconfont.cn/",
      imgSrc: "/images/icon_link/icon1.png",
      show: false
    }, {
      name: "寻图标",
      describe: "不是完全免费的图标库，不过图标都还挺有设计感",
      url: "https://icon.52112.com/",
      imgSrc: "/images/icon_link/icon2.png",
      show: false
    }, {
      name: "ICONFINDER",
      describe: "包含数以百万计的icon、插图和3D效果",
      url: "https://www.iconfinder.com/",
      imgSrc: "/images/icon_link/icon3.png",
      show: false
    }, {
      name: "ICONSVG",
      describe: "可以可视化调节颜色尺寸并得到代码的SVG工具",
      url: "https://iconsvg.xyz/",
      imgSrc: "/images/icon_link/icon4.png",
      show: false
    }];
    let image_link_list = [{
      name: "coverr",
      describe: "包含各类高清视频和图片资源，很适合用来做背景",
      url: "https://coverr.co/",
      imgSrc: "/images/image_link/image1.png",
      show: false
    }, {
      name: "Unsplash",
      describe: "许多高清的各类图片，由世界各地的创作者提供",
      url: "https://unsplash.com/",
      imgSrc: "/images/image_link/image2.png",
      show: false
    }, {
      name: "html5up",
      describe: "提供好多漂亮的网站模板，可以提高审美（先暂时分类到这里啦）",
      url: "https://html5up.net/",
      imgSrc: "/images/image_link/image3.png",
      show: false
    }];
    let css_link_list = [{
      name: "bennettfeely",
      describe: "Bennett Feely的网站，包含了他的许多css作品，包括css控制形状、渐变色等等，大佬一枚！",
      url: "https://bennettfeely.com/",
      imgSrc: "/images/css_link/css1.png",
      show: false
    }, {
      name: "csslayout",
      describe: "收集了许多CSS制作的流行的布局和图案",
      url: "https://csslayout.io/",
      imgSrc: "/images/css_link/css2.png",
      show: false
    }, {
      name: "animate.css",
      describe: "这个太有名啦，经典、简单、好用的CSS效果（ps:虽然可以引入但是只用一两个动画的话感觉复制过来也很简单）",
      url: "https://animate.style/",
      imgSrc: "/images/css_link/css3.png",
      show: false
    }, {
      name: "Neumorphism",
      describe: "可视化操控css边框和阴影样式",
      url: "https://neumorphism.io/#e0e0e0",
      imgSrc: "/images/css_link/css4.png",
      show: false
    }, {
      name: "Hover.css",
      describe: "提供了许多hover效果",
      url: "http://ianlunn.github.io/Hover/",
      imgSrc: "/images/css_link/css5.png",
      show: false
    }, {
      name: "tailwindcss",
      describe: "通过修改类名直接调用它的样式",
      url: "https://www.tailwindcss.cn/",
      imgSrc: "/images/css_link/css6.png",
      show: false
    }];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(resourceComponent, {
        dataList: unref(color_link_list),
        title: "配色"
      }, null, 8, ["dataList"]), createVNode(resourceComponent, {
        dataList: unref(icon_link_list),
        title: "图标库"
      }, null, 8, ["dataList"]), createVNode(resourceComponent, {
        dataList: unref(image_link_list),
        title: "图片视频资源库"
      }, null, 8, ["dataList"]), createVNode(resourceComponent, {
        dataList: unref(css_link_list),
        title: "css样式库"
      }, null, 8, ["dataList"])]);
    };
  }
};
const uiComponent_vue_vue_type_style_index_0_scoped_3749bb7f_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-3749bb7f"), n = n(), popScopeId(), n);
const _hoisted_1$2 = {
  class: "uiComponent"
};
const _hoisted_2$1 = {
  class: "title"
};
const _hoisted_3 = {
  class: "uiCard"
};
const _hoisted_4 = {
  class: "uiTitle"
};
const _hoisted_5 = ["href"];
const _hoisted_6 = {
  class: "content"
};
const _hoisted_7 = {
  key: 0,
  class: "github_link"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "github"
}, null, -1));
const _hoisted_9 = ["href"];
const _sfc_main$4 = {
  __name: "uiComponent",
  props: {
    dataList: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [createBaseVNode("h2", _hoisted_2$1, toDisplayString(__props.title), 1), createBaseVNode("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.dataList, (item, index) => {
        return openBlock(), createElementBlock("div", {
          class: "uiPart",
          key: index
        }, [createBaseVNode("h3", _hoisted_4, [createBaseVNode("a", {
          href: item.url,
          target: "_blank"
        }, toDisplayString(item.name), 9, _hoisted_5)]), createBaseVNode("div", _hoisted_6, toDisplayString(item.describe), 1), item.github ? (openBlock(), createElementBlock("div", _hoisted_7, [_hoisted_8, createBaseVNode("a", {
          class: "link",
          href: item.github,
          target: "_blank"
        }, toDisplayString(item.github), 9, _hoisted_9)])) : createCommentVNode("", true)]);
      }), 128))])]);
    };
  }
};
const uiComponent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3749bb7f"]]);
const _hoisted_1$1 = {
  class: "uiResource"
};
const _sfc_main$3 = {
  __name: "uiResource",
  setup(__props) {
    let ui_link_list = [{
      name: "Element-UI",
      describe: "饿了么UI组件库，轻便好用，适用于Vue2",
      github: "https://github.com/ElemeFE/element",
      url: "https://element.eleme.cn/#/zh-CN"
    }, {
      name: "Element-Plus",
      describe: "Element-UI的进阶版，适用于Vue3，更国际化了不少~",
      github: "https://github.com/element-plus/element-plus",
      url: "https://element-plus.org/zh-CN/"
    }, {
      name: "naive-ui",
      describe: "适用于Vue3的组件库，内容很丰富",
      github: "https://github.com/tusen-ai/naive-ui",
      url: "https://www.naiveui.com/zh-CN/os-theme"
    }, {
      name: "Ant Design",
      describe: "适用于React的组件库，久仰大名，等学完React我也来试试",
      github: "https://github.com/ant-design/ant-design",
      url: "https://ant.design/index-cn"
    }, {
      name: "Vant 4",
      describe: "移动端组件库，适用于Vue3，Vue2查看Vant 2文档",
      github: "https://github.com/youzan/vant",
      url: "https://vant-contrib.gitee.io/vant/#/zh-CN"
    }, {
      name: "Flat UI",
      describe: "扁平风格的ui工具包",
      github: "https://github.com/designmodo/Flat-UI",
      url: "http://designmodo.github.io/Flat-UI/"
    }, {
      name: "NUTUI",
      describe: "京东风格的移动端组件库",
      github: "https://github.com/jdf2e",
      url: "https://nutui.jd.com/#/"
    }, {
      name: "uView",
      describe: "uni-app生态下的UI框架",
      github: "https://github.com/umicro/uView",
      url: "https://v1.uviewui.com/"
    }];
    let slot_link_list = [{
      name: "Swiper",
      describe: "轮播图插件",
      github: "https://github.com/nolimits4web/swiper",
      url: "https://swiper.com.cn/"
    }, {
      name: "GreenSock",
      describe: "JS动画插件",
      github: "https://github.com/greensock/GSAP",
      url: "https://greensock.com/gsap/"
    }, {
      name: "video.js",
      describe: "视频播放器插件",
      github: "https://github.com/videojs/video.js",
      url: "https://videojs.com/"
    }, {
      name: "Bootcdn",
      describe: "前端开源项目cdn加速服务",
      github: "",
      url: "https://www.bootcdn.cn/"
    }, {
      name: "Ueditor",
      describe: "富文本编辑器,比较有历史了，界面也很复古",
      github: "https://github.com/fex-team/ueditor",
      url: "http://fex.baidu.com/ueditor/"
    }, {
      name: "CKEditor",
      describe: "富文本编辑器，功能齐全，支持可视化自定义和自定义功能",
      github: "https://github.com/ckeditor/ckeditor5",
      url: "https://ckeditor.com/docs/index.html"
    }, {
      name: "WangEditor",
      describe: "国内的富文本编辑器，对中文兼容很好，且开发人员在b站有很多相关视频可以参考",
      github: "https://github.com/wangeditor-team/wangEditor",
      url: "https://www.wangeditor.com/"
    }, {
      name: "prism",
      describe: "代码高亮工具",
      github: "https://github.com/PrismJS/prism",
      url: "https://prismjs.com/"
    }];
    let frame_link_list = [{
      name: "Uniapp",
      describe: "使用Vue.js开发所有前端应用的框架",
      github: "",
      url: "https://www.dcloud.io/"
    }, {
      name: "React Native",
      describe: "面向React应用的移动应用开发框架",
      github: "https://github.com/facebook/react-native",
      url: "https://www.reactnative.cn/"
    }, {
      name: "CORDOVA",
      describe: "使用HTML，CSS和JS构建移动应用的平台",
      github: "https://github.com/apache/cordova-android",
      url: "https://cordova.apache.org/"
    }, {
      name: "Electron",
      describe: "使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架",
      github: "https://github.com/electron/electron",
      url: "https://www.electronjs.org/zh/docs/latest/tutorial/quick-start"
    }, {
      name: "Express",
      describe: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
      github: "https://github.com/expressjs/express",
      url: "https://www.expressjs.com.cn/"
    }, {
      name: "Koa",
      describe: "由Express原班人马打造的新框架，通过利用async函数，Koa丢弃回调函数，并有力地增强错误处理。",
      github: "https://github.com/koajs/koa",
      url: "https://koa.bootcss.com/"
    }];
    let see_link_list = [{
      name: "Echarts",
      describe: "经典的可视化工具，从基本的图标到3d图应有尽有",
      github: "https://github.com/apache/echarts",
      url: "https://echarts.apache.org/zh/index.html"
    }, {
      name: "Antv",
      describe: "包括多类型的图表工具，一个字，丰富！",
      github: "https://github.com/antvis/antvis.github.io",
      url: "https://antv.vision/zh"
    }];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(uiComponent, {
        title: "组件库",
        dataList: unref(ui_link_list)
      }, null, 8, ["dataList"]), createVNode(uiComponent, {
        title: "插件库",
        dataList: unref(slot_link_list)
      }, null, 8, ["dataList"]), createVNode(uiComponent, {
        title: "框架",
        dataList: unref(frame_link_list)
      }, null, 8, ["dataList"]), createVNode(uiComponent, {
        title: "可视化工具",
        dataList: unref(see_link_list)
      }, null, 8, ["dataList"])]);
    };
  }
};
const _sfc_main$2 = {
  __name: "officialText",
  setup(__props) {
    let official_link_list = [
      {
        name: "Typescript",
        describe: "js的超集，为js增加强类型效果",
        github: "https://github.com/Microsoft/TypeScript",
        url: "https://www.tslang.cn/index.html"
      },
      {
        name: "Pinia",
        describe: "vue3的数据管理工具,类似vue2的vuex",
        github: "https://github.com/vuejs/pinia",
        url: "https://pinia.web3doc.top/#%E4%B8%80%E4%B8%AA%E6%9B%B4%E7%8E%B0%E5%AE%9E%E7%9A%84%E4%BE%8B%E5%AD%90"
      },
      {
        name: "vue-router",
        describe: "vue的路由管理工具",
        github: "https://github.com/vuejs/router",
        url: "https://router.vuejs.org/zh/guide/"
      },
      {
        name: "node.js",
        describe: "js服务器脚本工具",
        github: "https://github.com/nodejs/nodejs.dev",
        url: "https://nodejs.dev/zh-cn/"
      },
      {
        name: "Less",
        describe: "css的预编译工具",
        github: "https://github.com/less/less.js",
        url: "https://less.nodejs.cn/"
      },
      {
        name: "Sass",
        describe: "css的预编译工具",
        github: "https://github.com/sass/node-sass",
        url: "https://www.sass.hk/"
      },
      {
        name: "Axios",
        describe: "基于Promise的网络请求库",
        github: "https://github.com/axios/axios",
        url: "https://www.axios-http.cn/docs/intro"
      },
      {
        name: "Webpack",
        describe: "很重要的打包工具",
        github: "https://github.com/webpack/webpack",
        url: "https://www.webpackjs.com/"
      },
      {
        name: "Promise接口参考文档",
        describe: "Promise接口参考文档",
        github: "https://github.com/then/promise",
        url: "https://www.apiref.com/javascript-zh/Reference/Global_Objects/Promise.htm"
      },
      {
        name: "Nuxt.js",
        describe: "通过对客户端/服务端基础架构的抽象组织，关注应用的 UI 渲染 。",
        github: "https://github.com/nuxt/nuxt",
        url: "https://nuxt.com/"
      }
      // {
      //     name:"",
      //     describe:"",
      //     github:"",
      //     url:""
      // },
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [createVNode(uiComponent, {
        title: "官方文档",
        dataList: unref(official_link_list)
      }, null, 8, ["dataList"])]);
    };
  }
};
const _sfc_main$1 = {
  __name: "studyResource",
  setup(__props) {
    let study_link_list = [
      {
        name: "learngitbranching",
        describe: "可视化学习git指令",
        github: "https://github.com/pcottle/learnGitBranching",
        url: "https://learngitbranching.js.org/?lacale=zh_CN&locale=zh_CN"
      },
      {
        name: "菜鸟工具-正则表达式在线测试",
        describe: "在线测试正则表达式可用性，很适合正则小白！",
        github: "",
        url: "https://c.runoob.com/front-end/854/"
      },
      {
        name: "github",
        describe: "一切尽在不言中",
        github: "",
        url: "https://github.com/"
      },
      {
        name: "npm",
        describe: "包管理器",
        github: "",
        url: "https://www.npmjs.com/"
      },
      {
        name: "codepen",
        describe: "很多前端大佬炫技的地方~",
        github: "",
        url: "https://codepen.io/"
      },
      {
        name: "stackoverflow",
        describe: "有问题就来查一查",
        github: "",
        url: "https://stackoverflow.com/"
      },
      {
        name: "gitee",
        describe: "一站式研发效能平台",
        github: "",
        url: "https://gitee.com/"
      },
      {
        name: "LaTeX",
        describe: "笔记工具",
        github: "",
        url: "https://www.overleaf.com/"
      },
      {
        name: "MDN",
        describe: "查api的好地方，描述的很清晰，有一些接口还有图解",
        github: "",
        url: "https://developer.mozilla.org/zh-CN/"
      }
      // {
      //     name: "",
      //     describe: "",
      //     github: "",
      //     url: ""
      // },
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [createVNode(uiComponent, {
        dataList: unref(study_link_list),
        title: "学习网站"
      }, null, 8, ["dataList"])]);
    };
  }
};
const resourceCollect_vue_vue_type_style_index_0_scoped_f0ae244b_lang = "";
const _hoisted_1 = {
  class: "resourceCollect"
};
const _hoisted_2 = {
  class: "tabTitles"
};
const _sfc_main = {
  __name: "resourceCollect",
  setup(__props) {
    let activeTab = ref("design");
    let activeComponent = ref(_sfc_main$5);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("div", {
        class: normalizeClass(["tabTitle", unref(activeTab) === "design" ? "active" : ""]),
        onClick: _cache[0] || (_cache[0] = ($event) => {
          isRef(activeTab) ? activeTab.value = "design" : activeTab = "design";
          isRef(activeComponent) ? activeComponent.value = _sfc_main$5 : activeComponent = _sfc_main$5;
        })
      }, "页面设计", 2), createBaseVNode("div", {
        class: normalizeClass(["tabTitle", unref(activeTab) === "component" ? "active" : ""]),
        onClick: _cache[1] || (_cache[1] = ($event) => {
          isRef(activeTab) ? activeTab.value = "component" : activeTab = "component";
          isRef(activeComponent) ? activeComponent.value = _sfc_main$3 : activeComponent = _sfc_main$3;
        })
      }, "组件库", 2), createBaseVNode("div", {
        class: normalizeClass(["tabTitle", unref(activeTab) === "official" ? "active" : ""]),
        onClick: _cache[2] || (_cache[2] = ($event) => {
          isRef(activeTab) ? activeTab.value = "offical" : activeTab = "offical";
          isRef(activeComponent) ? activeComponent.value = _sfc_main$2 : activeComponent = _sfc_main$2;
        })
      }, "官方文档", 2), createBaseVNode("div", {
        class: normalizeClass(["tabTitle", unref(activeTab) === "study" ? "active" : ""]),
        onClick: _cache[3] || (_cache[3] = ($event) => {
          isRef(activeTab) ? activeTab.value = "study" : activeTab = "study";
          isRef(activeComponent) ? activeComponent.value = _sfc_main$1 : activeComponent = _sfc_main$1;
        })
      }, "学习资料", 2)]), (openBlock(), createBlock(resolveDynamicComponent(unref(activeComponent)), {
        dataList: _ctx.color_link_list
      }, null, 8, ["dataList"]))]);
    };
  }
};
const resourceCollect = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f0ae244b"]]);
export {
  resourceCollect as default
};
