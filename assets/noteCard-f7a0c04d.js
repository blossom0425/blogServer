import { _ as _export_sfc, u as useRouter, E as useRoute, a as openBlock, c as createElementBlock, d as createBaseVNode, t as toDisplayString, F as Fragment, b as renderList, G as withModifiers } from "./index-c91ea524.js";
const noteCard_vue_vue_type_style_index_0_scoped_8ce8c6c3_lang = "";
const _hoisted_1 = {
  class: "mycard noteCard"
};
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  class: "noteRight"
};
const _hoisted_4 = {
  class: "title"
};
const _hoisted_5 = {
  class: "abstract"
};
const _hoisted_6 = {
  class: "bottom"
};
const _hoisted_7 = {
  class: "time"
};
const _hoisted_8 = {
  class: "tags"
};
const _hoisted_9 = ["onClick"];
const _sfc_main = {
  __name: "noteCard",
  props: {
    blog: {
      type: Object,
      default: {}
    }
  },
  emits: ["turnToMoreTag"],
  setup(__props, {
    emit: emits
  }) {
    const router = useRouter(), route = useRoute();
    const turnToMoreByTag = function(tag) {
      if (route.path !== "/more")
        router.push(`/more?name=${tag.name}&id=${tag.id}&type=Tag`);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("img", {
        src: __props.blog.img_src,
        alt: "",
        class: "noteImg"
      }, null, 8, _hoisted_2), createBaseVNode("div", _hoisted_3, [createBaseVNode("h3", _hoisted_4, toDisplayString(__props.blog.title), 1), createBaseVNode("div", _hoisted_5, toDisplayString(__props.blog.describe), 1), createBaseVNode("div", _hoisted_6, [createBaseVNode("span", _hoisted_7, toDisplayString(__props.blog.create_time), 1), createBaseVNode("span", _hoisted_8, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.blog.tag_ids, (tag) => {
        return openBlock(), createElementBlock("span", {
          class: "tag",
          onClick: withModifiers(($event) => turnToMoreByTag(tag), ["stop"])
        }, toDisplayString(tag.name), 9, _hoisted_9);
      }), 256))])])])]);
    };
  }
};
const noteCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8ce8c6c3"]]);
export {
  noteCard as n
};
