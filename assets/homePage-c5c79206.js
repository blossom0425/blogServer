import { _ as _export_sfc, u as useRouter, i as inject, r as ref, o as onMounted, a as openBlock, c as createElementBlock, b as renderList, d as createBaseVNode, t as toDisplayString, F as Fragment, e as createBlock, f as useMsgStore, n as normalizeStyle, g as unref, h as createVNode, w as withCtx, T as Transition, j as createCommentVNode, k as withDirectives, v as vShow, p as pushScopeId, l as popScopeId, m as createTextVNode } from "./index-de877cc2.js";
import { r as rightSum } from "./rightSum-d7bcb975.js";
import { n as noteCard } from "./noteCard-0bc10fb7.js";
const noteList_vue_vue_type_style_index_0_scoped_64b43050_lang = "";
const _hoisted_1$1 = {
  class: "mycard wholeTitle",
  style: {
    "display": "flex"
  }
};
const _hoisted_2$1 = ["onClick"];
const _hoisted_3$1 = {
  class: "noteList"
};
const _hoisted_4$1 = {
  class: "left"
};
const _sfc_main$1 = {
  __name: "noteList",
  setup(__props) {
    const router = useRouter();
    const request = inject("request");
    const api = inject("api");
    const message = inject("message");
    const showList = ref([]);
    const tagOptions = ref([]);
    const initData = function() {
      request({
        url: api.blog.showPart
      }).then((res) => {
        if (res.code === 200) {
          let tempList = res.data;
          console.log(res);
          for (let i = 0; i < tempList.length; i++) {
            for (let blog of tempList[i].blogs) {
              let tempTag = blog.tag_ids;
              let timeStamp = new Date(blog.create_time);
              blog.create_time = `${timeStamp.getFullYear()}-${timeStamp.getMonth() + 1}-${timeStamp.getDate()}`;
              blog.tag_ids = [];
              for (let tag of tagOptions.value) {
                console.log(tag);
                if (tempTag.indexOf(tag.value) > -1)
                  blog.tag_ids.push({
                    name: tag.label,
                    id: tag.value
                  });
              }
            }
          }
          showList.value = tempList;
        } else {
          message.error(res.message);
        }
      }).catch((err) => {
        console.log(err);
      });
    };
    const initTag = function() {
      return new Promise((resolve, reject) => {
        request({
          url: api.tag.getTag
        }).then((res) => {
          if (res.code === 200) {
            tagOptions.value = res.rows.map((item) => {
              return {
                label: item.name,
                value: item.id
              };
            });
            resolve();
          } else {
            message.error("类型列表初始化错误");
            reject();
          }
        }).catch((err) => {
          console.log(err);
          reject();
        });
      });
    };
    const turnToMore = function(category, id) {
      router.push(`/more?name=${category}&id=${id}&type=Catogory`);
    };
    const turnToDetail = function(id) {
      window.open("#/detail?id=" + id);
    };
    onMounted(() => {
      initTag().then(() => {
        initData();
      });
    });
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(showList.value, (item, index) => {
        return openBlock(), createElementBlock("div", {
          key: index
        }, [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("h2", null, toDisplayString(item.category), 1), createBaseVNode("span", {
          class: "more",
          onClick: ($event) => turnToMore(item.category, item.category_id)
        }, "更多", 8, _hoisted_2$1)]), createBaseVNode("div", _hoisted_3$1, [createBaseVNode("div", _hoisted_4$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.blogs, (blog) => {
          return openBlock(), createBlock(noteCard, {
            onClick: ($event) => turnToDetail(blog.id),
            blog
          }, null, 8, ["onClick", "blog"]);
        }), 256))])])]);
      }), 128);
    };
  }
};
const noteList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-64b43050"]]);
const homePage_vue_vue_type_style_index_0_scoped_6ef0d23d_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-6ef0d23d"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "homePage"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "span devIcon"
}, null, -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "头头崽努力变强的记录", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "content"
}, "记录学习前端、后端、机器学习和实践项目的笔记和导图。", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "content"
}, "整理自己常用的资源库", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "content"
}, [/* @__PURE__ */ createTextVNode("努力成为一个全栈大手子！"), /* @__PURE__ */ createBaseVNode("i", {
  class: "fighting"
})], -1));
const _hoisted_7 = [_hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6];
const _hoisted_8 = {
  key: 0,
  class: "span"
};
const _hoisted_9 = {
  key: 1,
  class: "categories"
};
const _hoisted_10 = ["onClick"];
const _hoisted_11 = {
  class: "contentContainer"
};
const _hoisted_12 = {
  class: "left"
};
const _hoisted_13 = {
  class: "right",
  style: {
    "margin-top": "50px"
  }
};
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  class: "bg"
}, null, -1));
const _sfc_main = {
  __name: "homePage",
  setup(__props) {
    const msg = useMsgStore();
    let titleShow = ref(false);
    const turnToNext = function() {
      let aimDom = document.getElementsByTagName("h2")[0];
      aimDom.scrollIntoView({
        behavior: "smooth"
      });
    };
    const turnToNote = function(title) {
      let aimDoms = document.getElementsByTagName("h2");
      for (let i = 0; i < aimDoms.length; i++)
        if (aimDoms[i].innerText === title) {
          aimDoms[i].scrollIntoView({
            behavior: "smooth"
          });
          break;
        }
    };
    onMounted(() => {
      msg.init();
      setTimeout(() => {
        titleShow.value = true;
      }, 800);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", _hoisted_1, [_hoisted_2, createBaseVNode("div", {
        class: "title",
        style: normalizeStyle(!unref(titleShow) ? "padding:0;" : "")
      }, [createVNode(Transition, {
        name: "titleShow"
      }, {
        default: withCtx(() => [withDirectives(createBaseVNode("div", null, _hoisted_7, 512), [[vShow, unref(titleShow)]])]),
        _: 1
      })], 4), unref(titleShow) ? (openBlock(), createElementBlock("div", _hoisted_8)) : createCommentVNode("", true), unref(titleShow) ? (openBlock(), createElementBlock("div", _hoisted_9, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(msg).categories, (category) => {
        return openBlock(), createElementBlock("div", {
          class: "category",
          onClick: ($event) => turnToNote(category.name)
        }, toDisplayString(category.name), 9, _hoisted_10);
      }), 256))])) : createCommentVNode("", true), unref(titleShow) ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: "start",
        onClick: turnToNext
      }, "开始阅读")) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createVNode(noteList)]), createBaseVNode("div", _hoisted_13, [createVNode(rightSum)])]), _hoisted_14], 64);
    };
  }
};
const homePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6ef0d23d"]]);
export {
  homePage as default
};
