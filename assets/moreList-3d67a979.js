import { _ as _export_sfc, E as useRoute, u as useRouter, i as inject, r as ref, f as useMsgStore, o as onMounted, a as openBlock, c as createElementBlock, d as createBaseVNode, t as toDisplayString, g as unref, n as normalizeStyle, F as Fragment, b as renderList, h as createVNode, w as withCtx, T as Transition, e as createBlock, k as withDirectives, v as vShow, m as createTextVNode, j as createCommentVNode, p as pushScopeId, l as popScopeId } from "./index-35704616.js";
import { n as noteCard } from "./noteCard-4324f94f.js";
const moreList_vue_vue_type_style_index_0_scoped_a647425f_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-a647425f"), n = n(), popScopeId(), n);
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
  class: "rightNav"
};
const _hoisted_7 = {
  class: "mycard"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", {
  style: {
    "margin-bottom": "10px",
    "padding-bottom": "10px",
    "border-bottom": "1px solid",
    "font-weight": "400"
  }
}, "分类 ", -1));
const _hoisted_9 = ["onClick"];
const _hoisted_10 = {
  class: "num"
};
const _hoisted_11 = {
  class: "mycard"
};
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", {
  style: {
    "margin-bottom": "10px",
    "padding-bottom": "10px",
    "border-bottom": "1px solid",
    "font-weight": "400"
  }
}, [/* @__PURE__ */ createTextVNode(" 根据"), /* @__PURE__ */ createBaseVNode("strong", null, "标签"), /* @__PURE__ */ createTextVNode("分类 ")], -1));
const _hoisted_13 = ["onClick"];
const _hoisted_14 = {
  class: "num"
};
const cardsize = 210;
const _sfc_main = {
  __name: "moreList",
  setup(__props) {
    const route = new useRoute();
    useRouter();
    const request = inject("request"), message = inject("message"), api = inject("api");
    let name = ref(route.query.name), id = ref(route.query.id), type = ref(route.query.type);
    const blogs = ref([]);
    const showBlogs = ref([]);
    const msg = useMsgStore();
    let listHeight = ref(0);
    let paddingTop = ref(0);
    let paddingBottom = ref(0);
    let leftList = ref();
    const handleScroll = function(event) {
      let start = document.documentElement.scrollTop;
      let offsetTop = leftList.value.offsetTop - 50;
      let starti = start - leftList.value.offsetTop > 0 ? parseInt((start - leftList.value.offsetTop) / cardsize) : 0;
      let endi = parseInt((window.innerHeight + start) / cardsize);
      let count = parseInt(window.innerHeight / cardsize);
      if (endi >= blogs.value.length) {
        paddingTop.value = listHeight.value - window.innerHeight;
        endi = blogs.value.length - 1;
        starti = endi - count;
      }
      paddingTop.value = start - offsetTop > 0 ? start - leftList.value.offsetTop : 0;
      paddingBottom.value = (blogs.value.length - 1 - endi) * cardsize;
      showBlogs.value = blogs.value.slice(starti, endi);
    };
    document.addEventListener("scroll", handleScroll);
    const initData = function() {
      let final_api = api.blog.getMoreByCategory;
      if (type.value === "Tag")
        final_api = api.blog.getMoreByTag;
      request({
        url: final_api + `?id=${id.value}`
      }).then((res) => {
        blogs.value = res.data.rows;
        listHeight.value = res.data.rows.length * cardsize;
        handleScroll();
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
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(unref(name)), 1), createBaseVNode("span", _hoisted_4, "共" + toDisplayString(blogs.value.length) + "篇", 1)]), createBaseVNode("div", _hoisted_5, [createBaseVNode("div", {
        class: "leftList",
        ref_key: "leftList",
        ref: leftList,
        style: normalizeStyle(`padding-top:${unref(paddingTop)}px;padding-bottom:${unref(paddingBottom)}px;height:${unref(listHeight)}px`)
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(showBlogs.value, (blog) => {
        return openBlock(), createBlock(noteCard, {
          onTurnToMoreTag: turnToMoreTag,
          key: blog.id,
          blog,
          onClick: ($event) => turnToDetail(blog.id)
        }, null, 8, ["blog", "onClick"]);
      }), 128))], 4), createVNode(Transition, {
        name: "fade_right"
      }, {
        default: withCtx(() => [withDirectives(createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [_hoisted_8, (openBlock(true), createElementBlock(Fragment, null, renderList(unref(msg).categories, (category) => {
          return openBlock(), createElementBlock(Fragment, {
            key: category.id
          }, [category.name !== unref(name) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "nav",
            onClick: ($event) => turnToMoreCategory(category)
          }, [createTextVNode(toDisplayString(category.name), 1), createBaseVNode("span", _hoisted_10, toDisplayString(category.sum), 1)], 8, _hoisted_9)) : createCommentVNode("", true)], 64);
        }), 128))]), createBaseVNode("div", _hoisted_11, [_hoisted_12, (openBlock(true), createElementBlock(Fragment, null, renderList(unref(msg).tags, (tag) => {
          return openBlock(), createElementBlock(Fragment, {
            key: tag.id
          }, [tag.name !== unref(name) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "nav",
            onClick: ($event) => turnToMoreTag(tag)
          }, [createTextVNode(toDisplayString(tag.name), 1), createBaseVNode("span", _hoisted_14, toDisplayString(tag.sum), 1)], 8, _hoisted_13)) : createCommentVNode("", true)], 64);
        }), 128))])], 512), [[vShow, isShow.value]])]),
        _: 1
      })])]);
    };
  }
};
const moreList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a647425f"]]);
export {
  moreList as default
};
