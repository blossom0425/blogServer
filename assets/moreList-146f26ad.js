import { _ as _export_sfc, E as useRoute, u as useRouter, i as inject, r as ref, f as useMsgStore, o as onMounted, a as openBlock, c as createElementBlock, d as createBaseVNode, t as toDisplayString, g as unref, F as Fragment, b as renderList, h as createVNode, w as withCtx, T as Transition, e as createBlock, k as withDirectives, v as vShow, m as createTextVNode, j as createCommentVNode, p as pushScopeId, l as popScopeId } from "./index-de877cc2.js";
import { n as noteCard } from "./noteCard-0bc10fb7.js";
const moreList_vue_vue_type_style_index_0_scoped_c4957dbc_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-c4957dbc"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "moreList"
};
const _hoisted_2 = {
  class: "titleContainer"
};
const _hoisted_3 = {
  class: "listTitle"
};
const _hoisted_4 = {
  style: {
    "color": "grey"
  }
};
const _hoisted_5 = {
  class: "mainContent"
};
const _hoisted_6 = {
  class: "leftList"
};
const _hoisted_7 = {
  class: "rightNav"
};
const _hoisted_8 = {
  class: "mycard"
};
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", {
  style: {
    "margin-bottom": "10px",
    "padding-bottom": "10px",
    "border-bottom": "1px solid",
    "font-weight": "400"
  }
}, "分类 ", -1));
const _hoisted_10 = ["onClick"];
const _hoisted_11 = {
  class: "num"
};
const _hoisted_12 = {
  class: "mycard"
};
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", {
  style: {
    "margin-bottom": "10px",
    "padding-bottom": "10px",
    "border-bottom": "1px solid",
    "font-weight": "400"
  }
}, [/* @__PURE__ */ createTextVNode(" 根据"), /* @__PURE__ */ createBaseVNode("strong", null, "标签"), /* @__PURE__ */ createTextVNode("分类 ")], -1));
const _hoisted_14 = ["onClick"];
const _hoisted_15 = {
  class: "num"
};
const _sfc_main = {
  __name: "moreList",
  setup(__props) {
    const route = new useRoute();
    useRouter();
    const request = inject("request"), message = inject("message"), api = inject("api");
    let name = ref(route.query.name), id = ref(route.query.id), type = ref(route.query.type);
    const blogs = ref([]);
    const msg = useMsgStore();
    const initData = function() {
      let final_api = api.blog.getMoreByCategory;
      if (type.value === "Tag")
        final_api = api.blog.getMoreByTag;
      request({
        url: final_api + `?id=${id.value}`
      }).then((res) => {
        console.log(res);
        blogs.value = res.data.rows;
        if (res.code != 200) {
          message.error(res.message);
        }
      }).catch((err) => {
        console.log(err);
      });
    };
    const isShow = ref(true);
    onMounted(() => {
      initData();
      window.addEventListener("resize", () => {
        if (document.body.clientWidth < 1e3)
          isShow.value = false;
        else
          isShow.value = true;
      });
    });
    const turnToDetail = function(id2) {
      window.open("#/detail?id=" + id2);
    };
    const turnToMoreCategory = function(category) {
      name.value = category.name;
      id.value = category.id;
      type.value = "Catogory";
      initData();
      document.documentElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };
    const turnToMoreTag = function(tag) {
      name.value = tag.name;
      id.value = tag.id;
      type.value = "Tag";
      initData();
      document.documentElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(unref(name)), 1), createBaseVNode("span", _hoisted_4, "共" + toDisplayString(blogs.value.length) + "篇", 1)]), createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [(openBlock(true), createElementBlock(Fragment, null, renderList(blogs.value, (blog) => {
        return openBlock(), createBlock(noteCard, {
          onTurnToMoreTag: turnToMoreTag,
          key: blog.id,
          blog,
          onClick: ($event) => turnToDetail(blog.id)
        }, null, 8, ["blog", "onClick"]);
      }), 128))]), createVNode(Transition, {
        name: "fade_right"
      }, {
        default: withCtx(() => [withDirectives(createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [_hoisted_9, (openBlock(true), createElementBlock(Fragment, null, renderList(unref(msg).categories, (category) => {
          return openBlock(), createElementBlock(Fragment, {
            key: category.id
          }, [category.name !== unref(name) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "nav",
            onClick: ($event) => turnToMoreCategory(category)
          }, [createTextVNode(toDisplayString(category.name), 1), createBaseVNode("span", _hoisted_11, toDisplayString(category.sum), 1)], 8, _hoisted_10)) : createCommentVNode("", true)], 64);
        }), 128))]), createBaseVNode("div", _hoisted_12, [_hoisted_13, (openBlock(true), createElementBlock(Fragment, null, renderList(unref(msg).tags, (tag) => {
          return openBlock(), createElementBlock(Fragment, {
            key: tag.id
          }, [tag.name !== unref(name) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "nav",
            onClick: ($event) => turnToMoreTag(tag)
          }, [createTextVNode(toDisplayString(tag.name), 1), createBaseVNode("span", _hoisted_15, toDisplayString(tag.sum), 1)], 8, _hoisted_14)) : createCommentVNode("", true)], 64);
        }), 128))])], 512), [[vShow, isShow.value]])]),
        _: 1
      })])]);
    };
  }
};
const moreList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4957dbc"]]);
export {
  moreList as default
};
