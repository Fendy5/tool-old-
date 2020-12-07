<template>
  <div>
    <div class="row justify-center">
      <div class="col-6 col-lg-6 col-sm-6 col-md-8 col-xs-10">
        <div class="fd-card">
          <div class="content">
            <div class="fd-tile">随机字符串</div>
            <div class="string-select">
              <q-checkbox v-model="low" class="select-item" keep-color label="小写字母" color="teal" />
              <q-checkbox v-model="cap" class="select-item" keep-color label="大写字母" color="orange" />
              <q-checkbox v-model="spe" class="select-item" keep-color label="特殊字符" color="red" />
              <q-checkbox v-model="num" class="select-item" keep-color label="数字类型" color="cyan" />
            </div>
            <div class="len">
              <q-input v-model="len" color="purple-12" type="number" label="长度">
                <template #prepend>
                  <q-icon class="text-purple-12" name="eco" />
                </template>
              </q-input>
            </div>
            <div class="btn">
              <q-btn color="purple" label="立刻生成" @click="onSubmit" />
            </div>
            <div class="res">
              <div>{{ res }}</div>
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
  methods: {
    onSubmit () {
      const [len, num, low, cap, spe] = [this.len, this.num, this.low, this.cap, this.spe]
      const number = '1234567890'
      const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
      const capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const special = '~!@#$%^&*()_+-=[]{}|<>?/'
      let res = ''
      const possible = (num ? number : '') + (low ? lowerCase : '') + (cap ? capital : '') + (spe ? special : '')
      for (let i = 0; i < len; i++) { res += possible.charAt(Math.floor(Math.random() * possible.length)) }
      this.res = res
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
