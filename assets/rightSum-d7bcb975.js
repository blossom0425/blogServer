import { _ as _export_sfc, u as useRouter, f as useMsgStore, r as ref, o as onMounted, g as unref, a as openBlock, c as createElementBlock, d as createBaseVNode, t as toDisplayString, j as createCommentVNode, p as pushScopeId, l as popScopeId } from "./index-de877cc2.js";
const _imports_0 = "/assets/self-2d228c34.jpeg";
const rightSum_vue_vue_type_style_index_0_scoped_2f436906_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-2f436906"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "rightSum"
};
const _hoisted_2 = {
  class: "selfInfo mycard"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "头像",
  class: "self"
}, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", {
  class: "name"
}, "Missy Zhao", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "content"
}, "头头崽努力变强的记录", -1));
const _hoisted_6 = {
  class: "sumInfo"
};
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", {
  class: "title"
}, "文章", -1));
const _hoisted_8 = {
  class: "count"
};
const _hoisted_9 = {
  class: "sum"
};
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", {
  class: "title"
}, "分类", -1));
const _hoisted_11 = {
  class: "count"
};
const _hoisted_12 = {
  class: "sum"
};
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", {
  class: "title"
}, "标签", -1));
const _hoisted_14 = {
  class: "count"
};
const _hoisted_15 = {
  class: "sum"
};
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", {
  class: "title"
}, "知识图谱", -1));
const _hoisted_17 = {
  class: "count"
};
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "aboutMe"
}, [/* @__PURE__ */ createBaseVNode("i", {
  class: "email"
}), /* @__PURE__ */ createBaseVNode("i", {
  class: "github"
})], -1));
const _sfc_main = {
  __name: "rightSum",
  setup(__props) {
    const router = useRouter();
    const msg = useMsgStore();
    let isShow = ref(true);
    onMounted(() => {
      msg.init();
      window.addEventListener("resize", () => {
        if (document.body.clientWidth < 1e3)
          isShow.value = false;
        else
          isShow.value = true;
      });
    });
    return (_ctx, _cache) => {
      return unref(isShow) ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [_hoisted_3, _hoisted_4, _hoisted_5, createBaseVNode("div", _hoisted_6, [createBaseVNode("div", {
        class: "sum",
        onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push("/timeline"))
      }, [_hoisted_7, createBaseVNode("span", _hoisted_8, toDisplayString(unref(msg).article_sum), 1)]), createBaseVNode("div", _hoisted_9, [_hoisted_10, createBaseVNode("span", _hoisted_11, toDisplayString(unref(msg).category_sum), 1)]), createBaseVNode("div", _hoisted_12, [_hoisted_13, createBaseVNode("span", _hoisted_14, toDisplayString(unref(msg).tag_sum), 1)]), createBaseVNode("div", _hoisted_15, [_hoisted_16, createBaseVNode("span", _hoisted_17, toDisplayString(unref(msg).knowledge_sum), 1)])]), _hoisted_18])])) : createCommentVNode("", true);
    };
  }
};
const rightSum = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f436906"]]);
export {
  rightSum as r
};
