"use strict";
const common_vendor = require("../../common/vendor.js");
const api_common = require("../../api/common.js");
const _sfc_main = {
  data() {
    return {
      type: "center",
      goodsInfo: {}
    };
  },
  onLoad(options) {
    this.getGoodsInfo(options.id);
  },
  methods: {
    toggle(type) {
      this.type = type;
      this.$refs.popup.open(type);
    },
    async getGoodsInfo(id) {
      const res = await api_common.productInfo(id);
      if (res.code === 0) {
        this.goodsInfo = res.data || {};
      } else {
        common_vendor.index.showToast({
          icon: "none",
          title: res.msg
        });
      }
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
    a: common_vendor.t($data.goodsInfo.name),
    b: common_vendor.t($data.goodsInfo.id),
    c: common_vendor.t($data.goodsInfo.categoryName),
    d: common_vendor.t($data.goodsInfo.barCode),
    e: $data.goodsInfo.pic,
    f: common_vendor.o(($event) => $options.toggle("center")),
    g: common_vendor.t($data.goodsInfo.purchasePrice),
    h: common_vendor.t($data.goodsInfo.salePrice),
    i: common_vendor.t($data.goodsInfo.warningStock),
    j: common_vendor.t($data.goodsInfo.standard),
    k: common_vendor.t($data.goodsInfo.status == 0 ? "下架" : "上架"),
    l: common_vendor.t($data.goodsInfo.unitName),
    m: $data.goodsInfo.pic,
    n: common_vendor.sr("popup", "c35cc779-0"),
    o: common_vendor.p({
      type: "message"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c35cc779"]]);
wx.createPage(MiniProgramPage);
