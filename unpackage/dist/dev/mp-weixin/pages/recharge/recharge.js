"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentIndex: 0,
      currentMount: 0,
      versionArr: [
        { id: 1343, label: "极速版", text: "夫妻店开单收银", price: 599 },
        { id: 1344, label: "基础版", text: "夫妻店开单收银", price: 1099 },
        { id: 1345, label: "高级版", text: "夫妻店开单收银", price: 1599 }
      ]
    };
  },
  computed: {
    currentMount: {
      get() {
        return this.versionArr[this.currentIndex].price.toFixed(2);
      }
    }
  },
  methods: {
    setCurrent(index, obj) {
      this.currentIndex = index;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.versionArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: common_vendor.t(item.text),
        c: item.id,
        d: $data.currentIndex === index ? 1 : "",
        e: common_vendor.o(($event) => $options.setCurrent(index, item), item.id)
      };
    }),
    b: common_vendor.t($options.currentMount)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2984a38c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/recharge/recharge.js.map
