"use strict";
const common_vendor = require("../../common/vendor.js");
const api_common = require("../../api/common.js");
const orderItem = () => "../../components/orderItem.js";
const _sfc_main = {
  components: {
    orderItem
  },
  data() {
    return {
      orderStatus: ["全部", "拣货中", "配送中", "已完成", "已取消"],
      // 3: 拣货中 4:配送中 5: 已取消 1: 已完成
      current: 0,
      pageSize: 10,
      allNum: 1,
      waitPickNum: 1,
      pickedNum: 1,
      finishNum: 1,
      cancelNum: 1,
      allStatus: "more",
      waitPickedStatus: "more",
      pickedStatus: "more",
      finishStatus: "more",
      cancelStatus: "more",
      allTotal: 0,
      waitPickedTotal: 0,
      pickedTotal: 0,
      finishTotal: 0,
      cancelTotal: 0,
      allList: [],
      waitPickedList: [],
      pickedList: [],
      finishList: [],
      cancelList: []
    };
  },
  onLoad() {
    this.getOrderList({
      sourceStatus: "",
      pageNo: this.allNum,
      pageSize: this.pageSize
    });
    this.getOrderList({
      sourceStatus: 3,
      pageNo: this.waitPickNum,
      pageSize: this.pageSize
    });
    this.getOrderList({
      sourceStatus: 4,
      pageNo: this.pickedNum,
      pageSize: this.pageSize
    });
    this.getOrderList({
      sourceStatus: 1,
      pageNo: this.finishNum,
      pageSize: this.pageSize
    });
    this.getOrderList({
      sourceStatus: 5,
      pageNo: this.cancelNum,
      pageSize: this.pageSize
    });
  },
  methods: {
    search(e) {
    },
    async getOrderList(params) {
      const res = await api_common.orderList(params);
      if (res.code === 0) {
        const data = res.data.list || [];
        if (params.sourceStatus == "") {
          this.allList = [...this.allList, ...data];
          this.allTotal = res.data.total || 0;
          if (this.allNum * this.pageSize >= this.allTotal) {
            this.allStatus = "noMore";
          } else {
            this.allStatus = "more";
          }
        } else if (params.sourceStatus == "3") {
          this.waitPickedList = [...this.waitPickedList, ...data];
          common_vendor.index.__f__("log", "at pages/index/index.vue:131", 3, this.waitPickedList);
          this.waitPickedTotal = res.data.total || 0;
          if (this.waitPickNum * this.pageSize >= this.waitPickedTotal) {
            this.waitPickedStatus = "noMore";
          } else {
            this.waitPickedStatus = "more";
          }
        } else if (params.sourceStatus == "4") {
          this.pickedList = [...this.pickedList, ...data];
          this.pickedTotal = res.data.total || 0;
          if (this.pickedNum * this.pageSize >= this.pickedTotal) {
            this.pickedStatus = "noMore";
          } else {
            this.pickedStatus = "more";
          }
        } else if (params.sourceStatus == "1") {
          this.finishList = [...this.finishList, ...data];
          this.finishTotal = res.data.total || 0;
          if (this.finishNum * this.pageSize >= this.finishTotal) {
            this.finishStatus = "noMore";
          } else {
            this.finishStatus = "more";
          }
        } else if (params.sourceStatus == "5") {
          this.cancelList = [...this.cancelList, ...data];
          this.cancelTotal = res.data.total || 0;
          if (this.cancelNum * this.pageSize >= this.cancelTotal) {
            this.cancelStatus = "noMore";
          } else {
            this.cancelStatus = "more";
          }
        }
      } else {
        common_vendor.index.showToast({
          icon: "none",
          title: res.msg
        });
      }
    },
    handleTap(index) {
      this.current = index;
    },
    scrolltolower() {
      switch (this.current) {
        case 0:
          if (this.allNum * this.pageSize < this.allTotal) {
            this.allNum++;
            this.allStatus = "loading";
            this.getOrderList({
              sourceStatus: "",
              pageNo: this.allNum,
              pageSize: this.pageSize
            });
          }
          break;
        case 1:
          if (this.waitPickNum * this.pageSize < this.waitPickedTotal) {
            this.waitPickNum++;
            this.waitPickedStatus = "loading";
            this.getOrderList({
              sourceStatus: 3,
              pageNo: this.waitPickNum,
              pageSize: this.pageSize
            });
          }
          break;
        case 2:
          if (this.pickedNum * this.pageSize < this.pickedTotal) {
            this.pickedNum++;
            this.pickedStatus = "loading";
            this.getOrderList({
              sourceStatus: 4,
              pageNo: this.pickedNum,
              pageSize: this.pageSize
            });
          }
          break;
        case 3:
          if (this.finishNum * this.pageSize < this.finishTotal) {
            this.finishNum++;
            this.finishStatus = "loading";
            this.getOrderList({
              sourceStatus: 1,
              pageNo: this.finishNum,
              pageSize: this.pageSize
            });
          }
          break;
        case 4:
          if (this.cancelNum * this.pageSize < this.cancelTotal) {
            this.cancelNum++;
            this.cancelStatus = "loading";
            this.getOrderList({
              sourceStatus: 5,
              pageNo: this.cancelNum,
              pageSize: this.pageSize
            });
          }
          break;
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _component_orderItem = common_vendor.resolveComponent("orderItem");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_search_bar2 + _component_uni_section + _component_orderItem + _easycom_uni_load_more2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.search),
    b: common_vendor.p({
      placeholder: "请输入订单编号",
      bgColor: "#efefef"
    }),
    c: common_vendor.f($data.orderStatus, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: $data.current === index ? 1 : "",
        c: common_vendor.o(($event) => $options.handleTap(index))
      };
    }),
    d: common_vendor.f($data.allList, (item, index, i0) => {
      return {
        a: "32d5319c-2-" + i0,
        b: common_vendor.p({
          list: item
        }),
        c: index
      };
    }),
    e: $data.current === 0,
    f: $data.current === 0,
    g: common_vendor.p({
      status: $data.allStatus
    }),
    h: common_vendor.f($data.waitPickedList, (item, index, i0) => {
      return {
        a: "32d5319c-4-" + i0,
        b: common_vendor.p({
          list: item
        }),
        c: index
      };
    }),
    i: $data.current === 1,
    j: $data.current === 1,
    k: common_vendor.p({
      status: $data.waitPickedStatus
    }),
    l: common_vendor.f($data.pickedList, (item, index, i0) => {
      return {
        a: "32d5319c-6-" + i0,
        b: common_vendor.p({
          list: item
        }),
        c: index
      };
    }),
    m: $data.current === 2,
    n: $data.current === 2,
    o: common_vendor.p({
      status: $data.pickedStatus
    }),
    p: common_vendor.f($data.finishList, (item, index, i0) => {
      return {
        a: "32d5319c-8-" + i0,
        b: common_vendor.p({
          list: item
        }),
        c: index
      };
    }),
    q: $data.current === 3,
    r: $data.current === 3,
    s: common_vendor.p({
      status: $data.finishStatus
    }),
    t: common_vendor.f($data.cancelList, (item, index, i0) => {
      return {
        a: "32d5319c-10-" + i0,
        b: common_vendor.p({
          list: item
        }),
        c: index
      };
    }),
    v: $data.current === 4,
    w: $data.current === 4,
    x: common_vendor.p({
      status: $data.cancelStatus
    }),
    y: common_vendor.o((...args) => $options.scrolltolower && $options.scrolltolower(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
