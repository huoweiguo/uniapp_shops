"use strict";
const common_vendor = require("../../common/vendor.js");
const api_common = require("../../api/common.js");
const _sfc_main = {
  data() {
    return {
      currentIndex: 0,
      currentMount: 0,
      versionArr: []
    };
  },
  onLoad() {
    this.getRechargeList();
  },
  methods: {
    setCurrent(index, obj) {
      this.currentIndex = index;
      this.currentMount = obj.price.toFixed(2);
    },
    async getRechargeList() {
      const res = await api_common.tenantPackage();
      if (res.code === 0) {
        this.versionArr = res.data || [];
        if (this.versionArr.length > 0) {
          this.currentMount = this.versionArr[0].price.toFixed(2);
        }
      } else {
        common_vendor.index.showToast({
          icon: "none",
          title: res.msg
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.versionArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.price.toFixed(2)),
        c: item.id,
        d: $data.currentIndex === index ? 1 : "",
        e: common_vendor.o(($event) => $options.setCurrent(index, item), item.id)
      };
    }),
    b: common_vendor.t($data.currentMount)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2984a38c"]]);
wx.createPage(MiniProgramPage);
