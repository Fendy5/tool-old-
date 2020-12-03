<template>
  <div class="row justify-center">
    <div class="col-6 col-lg-5 col-sm-6 col-md-5 col-xs-10">
      <div class="fd-card">
        <div class="origin">
          <div class="row justify-center">
            <div class="col-8 q-my-md">
              <q-select color="purple-12" v-model="origin" :options="originList" label="选择进制">
<!--                <template v-slot:prepend>-->
<!--                  <ion-icon name="compass-outline"></ion-icon>-->
<!--                </template>-->
              </q-select>
            </div>
            <div class="col-8 q-my-md">
              <q-input color="purple-12" v-model="value" label="数值" value="">
<!--                <template v-slot:prepend>-->
<!--                  <q-icon class="text-purple-12" name="book-outline" />-->
<!--                </template>-->
              </q-input>
            </div>
          </div>
        </div>
        <div class="notice">
          转
        </div>
        <div class="row justify-center">
          <div class="col-6">
            <q-select color="purple-12" v-model="target" :options="targetList" label="目标进制">
<!--              <template v-slot:prepend>-->
<!--                <q-icon class="text-purple-12"  name="less-than" />-->
<!--              </template>-->
            </q-select>
          </div>
        </div>
        <div class="btn">
          <q-btn @click="onSubmit" color="purple" label="立刻转换" />
        </div>
        <div class="res">
          <div>{{res}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      origin: null,
      originList: [
        '2进制', '8进制', '10进制', '16进制', '32进制'
      ],
      target: null,
      targetList: [
        '2进制', '8进制', '10进制', '16进制', '32进制'
      ],
      res: '结果',
      value: '',
    }
  },
  methods: {
    onSubmit() {
      let [a, value, b] = [this.filter(this.origin), this.value, this.filter(this.target)];
      let ten = parseInt(value, a);
      this.res = ten.toString(b);
    },
    filter(args) {
      return args.slice(0, -2);
    }
  }
}
</script>

<style lang="scss" scoped>
  .fd-card {

  }
  .notice {
    margin: 15px 0;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
  }
</style>
