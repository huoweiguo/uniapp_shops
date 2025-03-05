"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentIndex: 0,
      navArr: ["全部", "充值", "消费", "退款"]
    };
  },
  methods: {
    setCurrentIndex(index) {
      this.currentIndex = index;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.navArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: $data.currentIndex === index ? 1 : "",
        c: common_vendor.o(($event) => $options.setCurrentIndex(index))
      };
    }),
    b: common_vendor.f(6, (item, index, i0) => {
      return {
        a: index
      };
    }),
    c: $data.currentIndex === 0,
    d: common_vendor.f(4, (item, index, i0) => {
      return {
        a: index
      };
    }),
    e: $data.currentIndex === 1,
    f: common_vendor.f(8, (item, index, i0) => {
      return {
        a: index
      };
    }),
    g: $data.currentIndex === 2,
    h: common_vendor.f(6, (item, index, i0) => {
      return {
        a: index
      };
    }),
    i: $data.currentIndex === 3
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-72eafd73"]]);
wx.createPage(MiniProgramPage);
