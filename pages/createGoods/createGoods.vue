<template>
  <view class="goods-content">
    <!-- <view class="goods-scan">
      <uni-icons type="scan" size="18" color="#0990e2"></uni-icons>
      <text>扫条形码快速录入商品</text>
    </view> -->
    <view class="goods-context">
      <view class="goods-form">
        <!-- 基础用法，不包含校验规则 -->
        <uni-forms ref="baseForm" :rules="rules" label-width="160rpx" :modelValue="productSaveReqVO">
          <uni-forms-item label="商品名称" required name="name">
            <uni-easyinput v-model="productSaveReqVO.name" placeholder="请输入商品名称" />
          </uni-forms-item>
          <uni-forms-item label="商品分类" required name="categoryId">
            <uni-data-select v-model="productSaveReqVO.categoryId" :localdata="range" @change="change"></uni-data-select>
          </uni-forms-item>
          <uni-forms-item label="图片" required name="pic">
            <view class="upload_file" @tap="chooseImage">
              <image v-if="productSaveReqVO.pic" class="upload-image" :src="productSaveReqVO.pic"></image>
              <uni-icons v-else type="plusempty" size="30"></uni-icons>
            </view>
          </uni-forms-item>
          <uni-forms-item label="商品条码" required name="barCode">
            <uni-easyinput v-model="productSaveReqVO.barCode" placeholder="请输入商品条码" />
          </uni-forms-item>
          <uni-forms-item label="产品状态" required>
            <switch @change="switchRule" :checked="productSaveReqVO.status == 0 ? false : true" style="transform:scale(0.8)"/>
          </uni-forms-item>
          <uni-forms-item label="单位编号" required name="unitId">
            <uni-easyinput v-model="productSaveReqVO.unitId" placeholder="请输入单位编号" />
          </uni-forms-item>
          <uni-forms-item label="采购价" required name="purchasePrice">
            <uni-easyinput v-model="productSaveReqVO.purchasePrice" placeholder="请输入采购价格" />
          </uni-forms-item>
          <uni-forms-item label="销售价" required name="salePrice">
            <uni-easyinput v-model="productSaveReqVO.salePrice" placeholder="请输入销售价" />
          </uni-forms-item>
          <uni-forms-item label="最低价" required name="minPrice">
            <uni-easyinput v-model="productSaveReqVO.minPrice" placeholder="请输入最低价" />
          </uni-forms-item>
          <uni-forms-item label="预警库存" required name="warningStock">
            <uni-easyinput v-model="productSaveReqVO.warningStock" placeholder="请输入预警库存" />
          </uni-forms-item>
          <uni-forms-item label="供应商" required name="supplier">
            <uni-easyinput v-model="productSaveReqVO.supplier" placeholder="请输入供应商" />
          </uni-forms-item>
          <uni-forms-item label="货架码">
            <uni-easyinput v-model="productSaveReqVO.shelfCode" placeholder="请输入货架码" />
          </uni-forms-item>
          <uni-forms-item label="基础重量">
            <uni-easyinput v-model="productSaveReqVO.weight" placeholder="请输入基础重量" />
          </uni-forms-item>
          <uni-forms-item label="规格">
            <uni-easyinput v-model="productSaveReqVO.standard" placeholder="请输入规格" />
          </uni-forms-item>
          <uni-forms-item label="保质期天数">
            <uni-easyinput v-model="productSaveReqVO.standard" placeholder="请输入保质期天数" />
          </uni-forms-item>
          <uni-forms-item label="备注">
            <uni-easyinput v-model="productSaveReqVO.remark" placeholder="请输入备注" />
          </uni-forms-item>
        </uni-forms>
      </view>
    </view>
    
    <view class="fixed-save"><button type="primary" size="mini" @tap="submit('baseForm')" style="width: 100%;">保存</button></view>
  </view>
</template>

<script>
  import { categoryList, uploadImage, productAdd, productInfo, productUpdate } from '@/api/common.js'
  export default {
    data() {
      return {
        productSaveReqVO: {
          name: '',
          id: 1,
          categoryId: '',
          pic: 'http://p0.meituan.net/scproduct/5c514789adb4b5df6acdbb97e44f22f7653855.gif',
          status: 1,
          standard: '',
          unitId: '',
          barCode: '',
          expiryDay: '',
          shelfCode: '',
          purchasePrice: '',
          minPrice: '',
          warningStock: '',
          supplier: '',
          weight: ''
        },
        listReqVO: {
          name: '',
          status: ''
        },
        range: [],
        rules: {
          name: {
            rules: [{ required: true, errorMessage: '请输入商品名称' }]
          },
          categoryId: {
            rules: [{ required: true, errorMessage: '请选择分类' }]
          },
          pic: {
            rules: [{ required: true, errorMessage: '请上传商品图片' }]
          },
          barCode: {
            rules: [{ required: true, errorMessage: '请输入商品条码' }]
          },
          purchasePrice: {
            rules: [{ required: true, errorMessage: '请输入采购价格' }]
          },
          salePrice: {
            rules: [{ required: true, errorMessage: '请输入销售价' }]
          },
          minPrice: {
            rules: [{ required: true, errorMessage: '请输入最低价格' }]
          },
          warningStock: {
            rules: [{ required: true, errorMessage: '请输入库存预警数' }]
          },
          supplier: {
            rules: [{ required: true, errorMessage: '请输入供应商' }]
          },
          unitId: {
            rules: [{ required: true, errorMessage: '请输入单位编号' }]
          }
        }
      }
    },
    onLoad (options) {
      this.getCategoryList()
      if (options.id) {
        this.getGoodsInfo(options.id)
      }
    },
    methods: {
      change (e) {},
      chooseImage () {
        uni.chooseImage({
        	count: 1,
        	success: function(res) {
            if (res.errMsg === 'chooseImage:ok') {
              console.log(res, '123')
            }
          }
        });
      },
      switchRule (e) {
        this.productSaveReqVO.status = e.target.value
      },
      
      async getCategoryList () {
        const res = await categoryList(this.listReqVO)
        if (res.code === 0) {
          let data = res.data || []
          data.map(item => {
            this.range.push({
              text: item.name,
              value: item.id
            })
          })
        } else {
          uni.showToast({
            icon: 'none',
            title: res.msg
          })
        }
      },
      
      async getGoodsInfo (id) {
        const res = await productInfo(id)
        if (res.code === 0) {
          this.productSaveReqVO = res.data || {}
        } else {
          uni.showToast({
            icon: 'none',
            title: res.msg
          })
        }
      },
      
      submit (ref) {
        this.$refs[ref].validate().then(async (res) => {
          if (this.productSaveReqVO.id) {
            // 修改
            const result = await productUpdate(this.productSaveReqVO)
            if (result.code === 0) {
              uni.showToast({
                icon: 'none',
                title: '修改商品成功'
              })
              setTimeout(() => {
                uni.navigateBack()
              }, 1000)
            } else {
              uni.showToast({
                icon: 'none',
                title: res.msg
              })
            }
          } else {
            // 新增
            const result = await productAdd(this.productSaveReqVO)
            if (result.code === 0) {
              uni.showToast({
                icon: 'none',
                title: '新增商品成功'
              })
              this.$refs[ref].resetFields()
            } else {
              uni.showToast({
                icon: 'none',
                title: res.msg
              })
            }
          }
          
        }).catch(err => {
          console.log('err', err);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goods-content {
    min-height: 100vh;
    background-color: #f1f4f9;
    padding: 20rpx;
    box-sizing: border-box;
    margin-bottom: 20rpx;
    .goods-scan {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80rpx;
      background-color: #fff;
      border-radius: 10rpx;
      color: #0990e2;
      font-size: 28rpx;
      font-weight: bold;
      margin-bottom: 20rpx;
      text {
        margin-left: 10rpx;
      }
    }
  }
  .goods-context {
    padding-bottom: 100rpx;
    .goods-form {
      background-color: #fff;
      padding: 20rpx;
      border-radius: 10rpx;
    }
  }
  .fixed-save {
    display: flex;
    align-items: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0rpx;
    padding: 0 20rpx;
    height: 100rpx;
    box-sizing: border-box;
    z-index: 100;
    background-color: #fff;
  }
  .upload-image {
    width: 150rpx;
    height: 150rpx;
  }
</style>
