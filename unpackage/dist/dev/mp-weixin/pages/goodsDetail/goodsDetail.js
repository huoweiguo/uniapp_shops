"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      type: "center"
    };
  },
  methods: {
    toggle(type) {
      this.type = type;
      this.$refs.popup.open(type);
    }
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_2,
    b: common_vendor.o(($event) => $options.toggle("center")),
    c: common_assets._imports_2,
    d: common_assets._imports_2,
    e: common_assets._imports_2,
    f: common_assets._imports_2,
    g: common_vendor.sr("popup", "c35cc779-0"),
    h: common_vendor.p({
      type: "message"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c35cc779"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goodsDetail/goodsDetail.js.map
