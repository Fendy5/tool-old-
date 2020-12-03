<template>
  <div>
    <div class="row justify-center">
      <div class="col-6 col-lg-6 col-sm-6 col-md-8 col-xs-10">
        <div class="fd-card">
          <div class="content">
            <div class="fd-tile">随机字符串</div>
            <div class="string-select">
              <q-checkbox class="select-item" keep-color v-model="low" label="小写字母" color="teal" />
              <q-checkbox class="select-item" keep-color v-model="cap" label="大写字母" color="orange" />
              <q-checkbox class="select-item" keep-color v-model="spe" label="特殊字符" color="red" />
              <q-checkbox class="select-item" keep-color v-model="num" label="数字类型" color="cyan" />
            </div>
            <div class="len">
              <q-input color="purple-12" type="number" v-model="len" label="长度">
                <template v-slot:prepend>
                  <q-icon class="text-purple-12" name="eco" />
                </template>
              </q-input>
            </div>
            <div class="btn">
              <q-btn @click="onSubmit" color="purple" label="立刻生成" />
            </div>
            <div class="res">
              <div>{{res}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: true,
      low: true,
      cap: true,
      spe: true,
      len: 8,
      res: '结果'
    }
  },
  methods:{
    onSubmit() {
      let [len, num, low, cap, spe] = [this.len, this.num, this.low, this.cap, this.spe];
      let number = '1234567890',
        lowerCase = 'abcdefghijklmnopqrstuvwxyz',
        capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        special = '~!@#$%^&*()_+-=[]{}|<>?/';
      let res = '';
      let possible = (num ? number : '') + (low ? lowerCase : '') + (cap ? capital : '') + (spe ? special : '');
      for (let i = 0; i < len; i++)
        res += possible.charAt(Math.floor(Math.random() * possible.length));
      this.res = res;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
