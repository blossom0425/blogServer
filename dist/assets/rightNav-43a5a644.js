import { _ as _export_sfc, r as ref, a as openBlock, c as createElementBlock, d as createBaseVNode, t as toDisplayString, F as Fragment, b as renderList, x as normalizeClass, g as unref, j as createCommentVNode } from "./index-17611780.js";
const rightNav_vue_vue_type_style_index_0_scoped_f03ea064_lang = "";
const _hoisted_1 = {
  key: 0,
  class: "rightNav"
};
const _hoisted_2 = {
  class: "title"
};
const _hoisted_3 = {
  class: "navs"
};
const _hoisted_4 = ["title", "onClick"];
const _sfc_main = {
  __name: "rightNav",
  props: {
    title: {
      type: String,
      default: ""
    },
    nav_data: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    let activeTitle = ref("");
    const turnToNotePos = function(item) {
      activeTitle.value = item;
    };
    return (_ctx, _cache) => {
      return __props.title ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("span", _hoisted_2, toDisplayString(__props.title), 1), createBaseVNode("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.nav_data, (item, index) => {
        return openBlock(), createElementBlock("span", {
          class: normalizeClass(["nav_word", unref(activeTitle) === item ? "active_nav" : ""]),
          key: index,
          title: item.length >= 10 ? item : "",
          onClick: ($event) => turnToNotePos(item)
        }, toDisplayString(item), 11, _hoisted_4);
      }), 128))])])) : createCommentVNode("", true);
    };
  }
};
const rightNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f03ea064"]]);
export {
  rightNav as r
};
