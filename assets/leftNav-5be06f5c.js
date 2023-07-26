import { _ as _export_sfc, r as ref, a as openBlock, c as createElementBlock, d as createBaseVNode, t as toDisplayString, F as Fragment, b as renderList, x as normalizeClass } from "./index-50c13dcf.js";
const leftNav_vue_vue_type_style_index_0_scoped_2b0a0f7d_lang = "";
const _hoisted_1 = {
  class: "leftNav"
};
const _hoisted_2 = {
  class: "title"
};
const _hoisted_3 = {
  class: "navs"
};
const _hoisted_4 = ["title", "onClick"];
const _sfc_main = {
  __name: "leftNav",
  props: {
    title: {
      type: String,
      default: "学习笔记"
    },
    nav_data: {
      type: Array,
      default: []
    },
    activeTitle: {
      type: String,
      default: ""
    }
  },
  emits: ["update:activeTitle", "changeXmind"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    let active_nav = ref(props.activeTitle);
    const turnToNote = function(item) {
      active_nav.value = item;
      emit("update:activeTitle", active_nav.value);
      emit("changeXmind", item);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("span", _hoisted_2, toDisplayString(__props.title), 1), createBaseVNode("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.nav_data, (item, index) => {
        return openBlock(), createElementBlock("span", {
          class: normalizeClass(["nav_word", __props.activeTitle === item ? "active_nav" : ""]),
          key: index,
          title: item.length >= 10 ? item : "",
          onClick: ($event) => turnToNote(item)
        }, toDisplayString(item), 11, _hoisted_4);
      }), 128))])]);
    };
  }
};
const leftNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b0a0f7d"]]);
export {
  leftNav as l
};
