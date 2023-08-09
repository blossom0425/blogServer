import { r as rightSum } from "./rightSum-1ed58ad6.js";
import { _ as _export_sfc, i as inject, r as ref, o as onMounted, a as openBlock, c as createElementBlock, d as createBaseVNode, F as Fragment, b as renderList, g as unref, h as createVNode, y as request, t as toDisplayString } from "./index-c91ea524.js";
const timeLine_vue_vue_type_style_index_0_scoped_9a943aea_lang = "";
const _hoisted_1 = {
  class: "timeLine"
};
const _hoisted_2 = {
  class: "timeBlocks mycard"
};
const _hoisted_3 = {
  class: "timeTitle"
};
const _hoisted_4 = {
  class: "record"
};
const _hoisted_5 = ["onClick"];
const _hoisted_6 = {
  class: "record_item_time",
  style: {
    "margin-right": "10px"
  }
};
const _hoisted_7 = {
  class: "record_item_title"
};
const _sfc_main = {
  __name: "timeLine",
  setup(__props) {
    const api = inject("api");
    let timeBlockArr = /* @__PURE__ */ new Map();
    let blogsArr = ref([]);
    const initData = function() {
      request({
        url: api.blog.timeline
      }).then((res) => {
        let temp = res.blogs;
        for (let blog of temp) {
          let y_m = blog.create_time.slice(0, 7);
          if (!timeBlockArr.get(y_m))
            timeBlockArr.set(y_m, []);
          timeBlockArr.get(y_m).push(blog);
        }
        for (let key of timeBlockArr.keys())
          blogsArr.value.push([key, timeBlockArr.get(key)]);
      }).catch((err) => {
        console.log(err);
      });
    };
    onMounted(() => {
      initData();
    });
    const checkDetail = function(id) {
      window.open("#/detail?id=" + id);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(blogsArr), (blogs) => {
        return openBlock(), createElementBlock("div", {
          class: "timeBlock",
          key: blogs[0]
        }, [createBaseVNode("h2", _hoisted_3, toDisplayString(blogs[0]), 1), createBaseVNode("ul", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(blogs[1], (blog) => {
          return openBlock(), createElementBlock("li", {
            class: "record_item",
            key: blog.id,
            onClick: ($event) => checkDetail(blog.id)
          }, [createBaseVNode("span", _hoisted_6, toDisplayString(blog.create_time.slice(0, 10)), 1), createBaseVNode("span", _hoisted_7, toDisplayString(blog.title), 1)], 8, _hoisted_5);
        }), 128))])]);
      }), 128))]), createVNode(rightSum)]);
    };
  }
};
const timeLine = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9a943aea"]]);
export {
  timeLine as default
};
