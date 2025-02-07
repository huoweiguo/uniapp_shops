"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  name: "orderItem",
  data() {
    return {
      goodsNumber: 1,
      indicatorDots: true,
      duration: 500
    };
  },
  methods: {
    callPhone(phoneNumber) {
      common_vendor.index.makePhoneCall({
        phoneNumber,
        // 电话号码
        success: function() {
          common_vendor.index.__f__("log", "at components/orderItem.vue:111", "拨打电话成功");
        },
        fail: function(err) {
          common_vendor.index.__f__("log", "at components/orderItem.vue:114", "拨打电话失败：", err);
        }
      });
    },
    changeNumber(value) {
      common_vendor.index.__f__("log", "at components/orderItem.vue:120", value, "haha");
    }
  },
  options: {
    styleIsolation: "shared"
  }
};
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  (_easycom_uni_number_box2 + _easycom_uni_collapse_item2 + _easycom_uni_collapse2)();
}
const _easycom_uni_number_box = () => "../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_collapse_item = () => "../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
if (!Math) {
  (_easycom_uni_number_box + _easycom_uni_collapse_item + _easycom_uni_collapse)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$3,
    b: common_vendor.o(($event) => $options.callPhone("18721586596")),
    c: common_assets._imports_1$2,
    d: common_vendor.o(($event) => $options.callPhone("18721586596")),
    e: common_assets._imports_1$2,
    f: common_assets._imports_2,
    g: common_assets._imports_3,
    h: $data.indicatorDots,
    i: $data.duration,
    j: common_vendor.o($options.changeNumber),
    k: common_vendor.p({
      value: $data.goodsNumber
    }),
    l: common_vendor.p({
      title: "展开收起信息",
      ["title-border"]: "false",
      border: false,
      ["show-animation"]: true
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f8ab5a84"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/orderItem.js.map
