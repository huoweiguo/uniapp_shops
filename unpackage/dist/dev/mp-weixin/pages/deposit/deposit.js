"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      top: 0,
      selectAmount: "",
      amount: "",
      currentIndex: 0,
      amountArr: [
        { id: 0, amount: 0.1 },
        { id: 1, amount: 1 },
        { id: 2, amount: 10 },
        { id: 3, amount: 50 },
        { id: 4, amount: 100 },
        { id: 5, amount: 300 },
        { id: 6, amount: 500 },
        { id: 7, amount: 1e3 }
      ]
    };
  },
  onLoad() {
    this.getSafeArea();
  },
  methods: {
    getSafeArea() {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          if (res.safeAreaInsets) {
            this.top = res.safeAreaInsets.top;
          }
        }
      });
    },
    setAmount(index, item) {
      this.currentIndex = index;
      this.selectAmount = item.amount;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s("padding-top:" + $data.top + "px"),
    b: common_vendor.f($data.amountArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item.amount),
        b: index,
        c: common_vendor.o(($event) => $options.setAmount(index, item), index),
        d: index === $data.currentIndex ? 1 : ""
      };
    }),
    c: $data.amount,
    d: common_vendor.o(($event) => $data.amount = $event.detail.value),
    e: common_assets._imports_0$1,
    f: common_assets._imports_1$1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-41eeec45"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/deposit/deposit.js.map
