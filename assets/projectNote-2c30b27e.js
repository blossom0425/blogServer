import { l as leftNav } from "./leftNav-be2fbb04.js";
import { r as rightNav } from "./rightNav-38c4fa73.js";
import { _ as _export_sfc, r as ref, q as resolveComponent, a as openBlock, c as createElementBlock, h as createVNode, g as unref, s as isRef, d as createBaseVNode } from "./index-c91ea524.js";
const projectNote_vue_vue_type_style_index_0_scoped_03f45ba8_lang = "";
const _hoisted_1 = {
  class: "projectNote"
};
const _hoisted_2 = {
  class: "mainArticle"
};
const _sfc_main = {
  __name: "projectNote",
  setup(__props) {
    const data_left_nav = ["HTML基础", "CSS基础", "CSS进阶", "JS基础", "JS DOM操作", "Node.js", "Promise", "Vue2", "Vue3", "Vue2和Vue3的对比", "测试一个特别特别特别特别特别特别特别长的标题", "Node.js", "Promise", "Vue2", "Vue3", "Vue2和Vue3的对比", "测试一个特别特别特别特别特别特别特别长的标题", "Node.js", "Promise", "Vue2", "Vue3", "Vue2和Vue3的对比", "测试一个特别特别特别特别特别特别特别长的标题"];
    let active_nav = ref("");
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(leftNav, {
        ref: "left-nav",
        activeTitle: unref(active_nav),
        "onUpdate:activeTitle": _cache[0] || (_cache[0] = ($event) => isRef(active_nav) ? active_nav.value = $event : active_nav = $event),
        title: "项目实践",
        nav_data: data_left_nav
      }, null, 8, ["activeTitle"]), createBaseVNode("div", _hoisted_2, [createVNode(_component_router_view)]), createVNode(rightNav, {
        title: unref(active_nav),
        nav_data: data_left_nav
      }, null, 8, ["title"])]);
    };
  }
};
const projectNote = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03f45ba8"]]);
export {
  projectNote as default
};
