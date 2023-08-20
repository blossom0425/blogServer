import { l as leftNav } from "./leftNav-16556ff4.js";
import { _ as _export_sfc, r as ref, i as inject, o as onMounted, a as openBlock, c as createElementBlock, h as createVNode, g as unref, s as isRef, y as request, z as nextTick, p as pushScopeId, l as popScopeId, d as createBaseVNode } from "./index-a340a0d1.js";
class IframeEventChannelController {
  constructor(iFrameController, domain = "*") {
    this.channel = new MessageChannel();
    this.eventIndex = 0;
    this.handlers = {};
    const iframe = iFrameController.getIframe();
    if (iframe.hasAttribute("data-event-channel-setup")) {
      throw new Error("An embed viewer instance already initialized on the iframe!");
    } else {
      iframe.setAttribute("data-event-channel-setup", "true");
    }
    this.channelSetupPromise = (async () => {
      await new Promise((resolve) => {
        iframe.addEventListener("load", () => {
          var _a;
          this.channel.port1.start();
          const port1Handler = (e) => {
            const [type] = e.data;
            if (type === "channel-ready") {
              e.preventDefault();
              this.channel.port1.removeEventListener("message", port1Handler);
              this.channel.port1.addEventListener("message", this.eventDispatcher.bind(this));
              resolve(void 0);
            }
          };
          this.channel.port1.addEventListener("message", port1Handler);
          (_a = iframe.contentWindow) == null ? void 0 : _a.postMessage(["setup-channel", { port: this.channel.port2 }], domain || "*", [this.channel.port2]);
        });
      });
    })();
  }
  eventDispatcher(e) {
    const [type, eventName, payload] = e.data || [];
    if (type === "event" && eventName && this.handlers[eventName]) {
      this.handlers[eventName].forEach((handler) => handler(payload));
    }
  }
  addEventListener(event, callback) {
    this.handlers[event] = this.handlers[event] || [];
    if (this.handlers[event].includes(callback))
      return;
    this.handlers[event].push(callback);
  }
  removeEventListener(event, callback) {
    if (!this.handlers[event])
      return;
    const index = this.handlers[event].findIndex((fn) => fn === callback);
    this.handlers[event].splice(index, 1);
  }
  async emit(event, payload) {
    await this.channelSetupPromise;
    const replyEvent = `xmind-embed-viewer#${this.eventIndex++}`;
    await new Promise((resolve) => {
      const handler = (e) => {
        const [message, payload2] = e.data;
        if (message === replyEvent) {
          this.channel.port1.removeEventListener("message", handler);
          resolve(payload2);
        }
      };
      this.channel.port1.addEventListener("message", handler);
      this.channel.port1.postMessage([event, payload, replyEvent]);
    });
  }
}
class IframeController {
  constructor(target, src) {
    let iframe;
    const element = typeof target === "string" ? document.querySelector(target) : target;
    if (element === null) {
      throw new Error("IFrame or mount element not found by selector " + target);
    }
    if (element instanceof HTMLIFrameElement) {
      iframe = element;
    } else {
      iframe = document.createElement("iframe");
      element.appendChild(iframe);
    }
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("allow", "allowfullscreen");
    iframe.setAttribute("crossorigin", "anonymous");
    iframe.setAttribute("src", src);
    this.iframe = iframe;
  }
  getIframe() {
    return this.iframe;
  }
  setStyles(styles) {
    const iframe = this.getIframe();
    for (const [styleKey, value] of Object.entries(styles)) {
      iframe.style[styleKey] = value;
    }
  }
}
class XMindEmbedViewer {
  /**
   * Initialize a iframe element from a div/iframe html element.
   */
  constructor(args) {
    this.internalState = {
      sheets: [],
      zoomScale: 100,
      currentSheetId: ""
    };
    const { file, el, styles = {
      "height": "350px",
      "width": "750px"
    }, isPitchModeDisabled } = args;
    const iframeController = new IframeController(el, `https://www.xmind.app/embed-viewer${isPitchModeDisabled ? "?pitch-mode=disabled" : ""}`);
    const iframeEventChannelController = new IframeEventChannelController(iframeController, "https://www.xmind.app");
    this.iframeController = iframeController;
    this.iframeEventChannelController = iframeEventChannelController;
    iframeEventChannelController.addEventListener("sheet-switch", (payload) => this.internalState.currentSheetId = payload);
    iframeEventChannelController.addEventListener("zoom-change", (payload) => this.internalState.zoomScale = payload);
    iframeEventChannelController.addEventListener("sheets-load", (payload) => this.internalState.sheets = payload);
    this.iframeController.setStyles(styles);
    if (file) {
      this.load(file);
    }
  }
  /**
   * Add event listener for embed viewer.
   *
   * Available events:
   * - map-ready
   * - zoom-change
   * - sheet-switch
   * - sheets-load
   *
   */
  addEventListener(event, callback) {
    this.iframeEventChannelController.addEventListener(event, callback);
  }
  removeEventListener(event, callback) {
    this.iframeEventChannelController.removeEventListener(event, callback);
  }
  /**
   * Update styles for created iframe element.
   */
  setStyles(styles) {
    this.iframeController.setStyles(styles);
  }
  /**
   * Load a file for embed viewer after iframe ready.
   */
  load(file) {
    this.iframeEventChannelController.emit("open-file", file);
  }
  setZoomScale(zoomScale) {
    this.iframeEventChannelController.emit("zoom", zoomScale);
  }
  setFitMap() {
    this.iframeEventChannelController.emit("fit-map");
  }
  switchSheet(sheetId) {
    this.iframeEventChannelController.emit("switch-sheet", sheetId);
  }
  get zoom() {
    return this.internalState.zoomScale;
  }
  get sheets() {
    return JSON.parse(JSON.stringify(this.internalState.sheets));
  }
  get currentSheetId() {
    return this.internalState.currentSheetId;
  }
}
const knowledgeGraph_vue_vue_type_style_index_0_scoped_f5467f4f_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-f5467f4f"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "knowledgeGraph"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  id: "showGraph"
}, null, -1));
const _sfc_main = {
  __name: "knowledgeGraph",
  setup(__props) {
    const knowledge_nav = ref([]);
    const message = inject("message");
    const api = inject("api");
    let present_viewer = null;
    let active_nav = ref("");
    const changeXmind = function(item) {
      request({
        url: api.blog.getXmindFile + `?name=${item}`,
        responseType: "blob"
      }).then((res) => {
        console.log(res);
        nextTick(() => {
          present_viewer.load(res);
        });
      }).catch((err) => {
        console.log(err);
      });
    };
    const initXmindContent = async function() {
      request({
        url: api.blog.getXmindList
      }).then((res) => {
        if (res.code === 200) {
          knowledge_nav.value = res.data;
          active_nav.value = knowledge_nav.value[0];
          changeXmind(active_nav.value);
        } else
          message.error(res.message);
      }).catch((err) => {
        console.log(err);
      });
    };
    onMounted(() => {
      initXmindContent();
      present_viewer = new XMindEmbedViewer({
        el: "#showGraph",
        styles: {
          height: "100%",
          width: "100%"
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(leftNav, {
        title: "我的图谱",
        nav_data: knowledge_nav.value,
        activeTitle: unref(active_nav),
        "onUpdate:activeTitle": _cache[0] || (_cache[0] = ($event) => isRef(active_nav) ? active_nav.value = $event : active_nav = $event),
        onChangeXmind: changeXmind
      }, null, 8, ["nav_data", "activeTitle"]), _hoisted_2]);
    };
  }
};
const knowledgeGraph = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5467f4f"]]);
export {
  knowledgeGraph as default
};
