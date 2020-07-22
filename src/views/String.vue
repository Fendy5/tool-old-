<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-card shadow="always">
          <div class="string">
            <h3>生成随机字符串</h3>
            <el-form ref="form" :model="form" label-width="150px">
              <el-form-item label="字符串选项:">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="小写字母" name="type"></el-checkbox>
                  <el-checkbox label="大写字母" name="type"></el-checkbox>
                  <el-checkbox label="特殊字符" name="type"></el-checkbox>
                  <el-checkbox label="数字" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="字符串长度:">
                <el-input type="number" v-model="form.len"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即生成</el-button>
              </el-form-item>
            </el-form>
            <div class="res">
              <el-alert v-show="res" center :closable="false" :title="res" type="success"></el-alert>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        len: 8,
        type: ["小写字母","大写字母","特殊字符","数字"],
      },
      res: ''
    }
  },
  methods:{
    onSubmit() {
      let [len, type] = [this.form.len, this.form.type];
      let number = '1234567890',
        lowerCase = 'abcdefghijklmnopqrstuvwxyz',
        capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        special = '~!@#$%^&*()_+-=[]{}|<>?/';
      let possible = (type.includes('数字') ? number : '') + (type.includes('小写字母') ? lowerCase : '') +  (type.includes('大写字母') ? capital : '') +  (type.includes('特殊字符') ? special : ''),
        res = '';
      for (let i = 0; i < len; i++)
        res += possible.charAt(Math.floor(Math.random() * possible.length));
      this.res = res;
    }
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    margin: 15px;
    text-align: center;
  }
  .string {
    max-width: 400px;
    margin: 0 auto;
  }
  .res {
    margin: 15px;
  }
</style>
