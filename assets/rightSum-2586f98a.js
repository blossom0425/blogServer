import { _ as _export_sfc, u as useRouter, f as useMsgStore, r as ref, o as onMounted, q as resolveComponent, a as openBlock, c as createElementBlock, g as unref, d as createBaseVNode, t as toDisplayString, j as createCommentVNode, h as createVNode, w as withCtx, s as isRef, m as createTextVNode, F as Fragment, b as renderList, p as pushScopeId, l as popScopeId } from "./index-fe9d6c27.js";
const _imports_0 = "/assets/self-2d228c34.jpeg";
const rightSum_vue_vue_type_style_index_0_scoped_5113052b_lang = "";
const rightSum_vue_vue_type_style_index_1_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-5113052b"), n = n(), popScopeId(), n);
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
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", {
  class: "title"
}, "分类", -1));
const _hoisted_10 = {
  class: "count"
};
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", {
  class: "title"
}, "标签", -1));
const _hoisted_12 = {
  class: "count"
};
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", {
  class: "title"
}, "知识图谱", -1));
const _hoisted_14 = {
  class: "count"
};
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "aboutMe"
}, [/* @__PURE__ */ createBaseVNode("i", {
  class: "email"
}), /* @__PURE__ */ createBaseVNode("i", {
  class: "github"
})], -1));
const _hoisted_16 = {
  class: "container"
};
const _hoisted_17 = ["onClick"];
const _hoisted_18 = {
  class: "container"
};
const _hoisted_19 = ["onClick"];
const _sfc_main = {
  __name: "rightSum",
  setup(__props) {
    const router = useRouter();
    const msg = useMsgStore();
    let isShow = ref(true);
    let showCategory = ref(false);
    let showTag = ref(false);
    let category_list = ref([]), tag_list = ref([]);
    const handleCategory = function() {
      showCategory.value = true;
      if (msg.categories.length > 0)
        category_list.value = msg.categories;
    };
    const chooseCategory = function(category) {
      let aim = new router.resolve({
        path: "/more",
        query: {
          name: category.name,
          id: category.id,
          type: "Category"
        }
      });
      window.open(aim.href, "_target");
    };
    const chooseTag = function(tag) {
      let aim = new router.resolve({
        path: "/more",
        query: {
          name: tag.name,
          id: tag.id,
          type: "Tag"
        }
      });
      window.open(aim.href, "_target");
    };
    const handleTag = function() {
      showTag.value = true;
      if (msg.tags.length > 0)
        tag_list.value = msg.tags;
    };
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
      const _component_n_button = resolveComponent("n-button");
      const _component_n_modal = resolveComponent("n-modal");
      return openBlock(), createElementBlock(Fragment, null, [unref(isShow) ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [_hoisted_3, _hoisted_4, _hoisted_5, createBaseVNode("div", _hoisted_6, [createBaseVNode("div", {
        class: "sum",
        onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push("/timeline"))
      }, [_hoisted_7, createBaseVNode("span", _hoisted_8, toDisplayString(unref(msg).article_sum), 1)]), createBaseVNode("div", {
        class: "sum",
        onClick: handleCategory
      }, [_hoisted_9, createBaseVNode("span", _hoisted_10, toDisplayString(unref(msg).category_sum), 1)]), createBaseVNode("div", {
        class: "sum",
        onClick: handleTag
      }, [_hoisted_11, createBaseVNode("span", _hoisted_12, toDisplayString(unref(msg).tag_sum), 1)]), createBaseVNode("div", {
        class: "sum",
        onClick: _cache[1] || (_cache[1] = ($event) => unref(router).push("/knowledge"))
      }, [_hoisted_13, createBaseVNode("span", _hoisted_14, toDisplayString(unref(msg).knowledge_sum), 1)])]), _hoisted_15])])) : createCommentVNode("", true), createVNode(_component_n_modal, {
        show: unref(showCategory),
        "onUpdate:show": _cache[3] || (_cache[3] = ($event) => isRef(showCategory) ? showCategory.value = $event : showCategory = $event),
        preset: "card",
        title: "分类",
        class: "modalclass",
        "auto-focus": false
      }, {
        footer: withCtx(() => [createVNode(_component_n_button, {
          onClick: _cache[2] || (_cache[2] = ($event) => isRef(showCategory) ? showCategory.value = false : showCategory = false)
        }, {
          default: withCtx(() => [createTextVNode("关闭")]),
          _: 1
        })]),
        default: withCtx(() => [createBaseVNode("ul", _hoisted_16, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(category_list), (item) => {
          return openBlock(), createElementBlock("li", {
            class: "tag",
            key: item.id,
            onClick: ($event) => chooseCategory(item)
          }, toDisplayString(item.name) + "(" + toDisplayString(item.sum) + ")", 9, _hoisted_17);
        }), 128))])]),
        _: 1
      }, 8, ["show"]), createVNode(_component_n_modal, {
        show: unref(showTag),
        "onUpdate:show": _cache[5] || (_cache[5] = ($event) => isRef(showTag) ? showTag.value = $event : showTag = $event),
        preset: "card",
        title: "分类",
        class: "modalclass",
        "auto-focus": false
      }, {
        footer: withCtx(() => [createVNode(_component_n_button, {
          onClick: _cache[4] || (_cache[4] = ($event) => isRef(showTag) ? showTag.value = false : showTag = false)
        }, {
          default: withCtx(() => [createTextVNode("关闭")]),
          _: 1
        })]),
        default: withCtx(() => [createBaseVNode("ul", _hoisted_18, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(tag_list), (item) => {
          return openBlock(), createElementBlock("li", {
            class: "tag",
            key: item.id,
            onClick: ($event) => chooseTag(item)
          }, toDisplayString(item.name) + "(" + toDisplayString(item.sum) + ")", 9, _hoisted_19);
        }), 128))])]),
        _: 1
      }, 8, ["show"])], 64);
    };
  }
};
const rightSum = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5113052b"]]);
export {
  rightSum as r
};
