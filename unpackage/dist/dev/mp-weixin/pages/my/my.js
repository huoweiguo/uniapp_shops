"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      top: 0,
      list: [
        { icon: common_assets.dataIcon, title: "经营数据", url: "" },
        { icon: common_assets.orderIcon, title: "全部订单", url: "" }
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
    }
  }
};
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s("padding-top:" + $data.top + "px"),
    b: common_assets._imports_0,
    c: common_assets._imports_1,
    d: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.title),
        c: index,
        d: "2f1ef635-1-" + i0 + ",2f1ef635-0",
        e: common_vendor.p({
          index
        })
      };
    }),
    e: common_vendor.p({
      column: 4,
      highlight: true,
      ["show-border"]: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f1ef635"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
