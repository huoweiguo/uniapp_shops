"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      top: 0,
      balance: "0.00",
      list: [
        { icon: "../../static/data.png", title: "经营数据", url: "/pages/businessSituation/businessSituation" },
        { icon: "../../static/order.png", title: "全部订单", url: "/pages/index/index" }
      ]
    };
  },
  onLoad() {
    this.getSafeArea();
    this.getWalletInfo();
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
    changeMall() {
      common_vendor.index.navigateTo({
        url: "/pages/changeMall/changeMall"
      });
    },
    // 获取用户余额
    async getWalletInfo() {
      const res = await api_user.getWallet();
      if (res.code === 0) {
        common_vendor.index.__f__("log", "at pages/my/my.vue:81", res.data);
        this.balance = res.data.balance.toFixed(2);
      } else {
        common_vendor.index.showToast({
          icon: "none",
          title: res.msg
        });
      }
    },
    login() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    },
    toLinks(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_icons2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_grid_item + _easycom_uni_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s("padding-top:" + $data.top + "px"),
    b: common_vendor.p({
      type: "loop",
      size: "18",
      color: "#78cf7e"
    }),
    c: common_vendor.o((...args) => $options.changeMall && $options.changeMall(...args)),
    d: common_assets._imports_0,
    e: common_vendor.o((...args) => $options.login && $options.login(...args)),
    f: common_vendor.t($data.balance),
    g: common_assets._imports_1,
    h: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.title),
        c: index,
        d: common_vendor.o(($event) => $options.toLinks(item.url), index),
        e: "2f1ef635-2-" + i0 + ",2f1ef635-1",
        f: common_vendor.p({
          index
        })
      };
    }),
    i: common_vendor.p({
      column: 4,
      highlight: true,
      ["show-border"]: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f1ef635"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
