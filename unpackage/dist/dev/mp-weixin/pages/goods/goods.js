"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      classify: "",
      delArr: [],
      dataTree: [
        { text: "数学", value: "sx" },
        { text: "语文", value: "yw" },
        { text: "英语", value: "yy" },
        { text: "物理", value: "wl" },
        { text: "化学", value: "hx" },
        { text: "历史", value: "ls" },
        { text: "数学1", value: "sx1" },
        { text: "语文1", value: "yw1" },
        { text: "英语1", value: "yy1" },
        { text: "物理1", value: "wl1" },
        { text: "化学1", value: "hx1" },
        { text: "历史1", value: "ls1" },
        { text: "数学2", value: "sx2" },
        { text: "语文2", value: "yw2" },
        { text: "英语2", value: "yy2" },
        { text: "物理2", value: "wl2" },
        { text: "化学2", value: "hx2" },
        { text: "历史2", value: "ls2" }
      ]
    };
  },
  methods: {
    search(value) {
      console.log(value);
    },
    bindClick(options) {
      console.log(options);
    },
    onnodeclick(e) {
      console.log(e);
    },
    onpopupopened(e) {
      console.log("popupopened");
    },
    onpopupclosed(e) {
      console.log("popupclosed");
    },
    onchange(e) {
      console.log("onchange:", e);
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_uni_search_bar2 + _component_uni_section + _easycom_uni_data_picker2 + _easycom_uni_icons2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_data_picker = () => "../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_data_picker + _easycom_uni_icons + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.search),
    b: common_vendor.p({
      placeholder: "名称/规格/条形码",
      bgColor: "#efefef"
    }),
    c: common_vendor.o($options.onchange),
    d: common_vendor.o($options.onnodeclick),
    e: common_vendor.o($options.onpopupopened),
    f: common_vendor.o($options.onpopupclosed),
    g: common_vendor.o(($event) => $data.classify = $event),
    h: common_vendor.p({
      placeholder: "全部类别",
      ["popup-title"]: "选择类别",
      localdata: $data.dataTree,
      modelValue: $data.classify
    }),
    i: common_vendor.p({
      type: "plus",
      size: "20"
    }),
    j: common_assets._imports_2,
    k: common_vendor.o(($event) => $options.bindClick({
      position: "right",
      content: {
        text: "编辑"
      }
    })),
    l: common_vendor.o(($event) => $options.bindClick({
      position: "right",
      content: {
        text: "删除"
      }
    })),
    m: common_assets._imports_2,
    n: common_vendor.o(($event) => $options.bindClick({
      position: "right",
      content: {
        text: "编辑"
      }
    })),
    o: common_vendor.o(($event) => $options.bindClick({
      position: "right",
      content: {
        text: "删除"
      }
    }))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7e2880f6"]]);
wx.createPage(MiniProgramPage);
