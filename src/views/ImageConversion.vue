<template>
  <div class="row justify-center">
    <q-ajax-bar ref="bar" position="bottom" color="accent" size="5px" skip-hijack />
    <div class="col-6 col-lg-6 col-sm-6 col-md-8 col-xs-10">
      <div class="fd-card">
        <div class="content">
          <div class="fd-tile">图片转换</div>
          <div class="row justify-center">
            <div class="col-10">
              <q-uploader
                :url="this.server+'upload'"
                label="上传图片"
                color="purple"
                square
                flat
                auto-upload
                bordered
                hide-upload-btn
                field-name="image"
                max-files="1"
                class="q-my-lg"
                style="width: auto"
                @uploaded="uploaded"
              />

              <q-select v-model="imageType" class="q-my-lg" color="purple-12" :options="imageTypeList" label="转换类型">
                <template #prepend>
                  <q-icon name="event" />
                </template>
              </q-select>

              <q-select v-if="imageType==='ico'" v-model="imageSize" color="purple-12" :options="imageSizeList" label="尺寸">
                <template #prepend>
                  <q-icon name="event" />
                </template>
              </q-select>

              <q-input v-if="imageType==='ico'" v-model="imageName" class="q-my-lg" label="生成图片名称" color="purple-12" />
            </div>
          </div>
          <div class="btn">
            <q-btn color="purple" label="立刻转换" @click="convert" />
          </div>
          <div v-if="download" class="res">
            <div>
              <a :href="download" @click="downloadImage">点击下载</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request, result } from '@/utils'
import { Notify } from 'quasar'

export default {
  data() {
    return {
      download: '',
      imageType: '',
      imageTypeList: ['png', 'jpeg', 'webp', 'ico', 'bmp'],
      imageSize: '',
      imageSizeList: ['16*16', '32*32', '64*64', '128*128', '256*256', '512*512'],
      imageName: 'favicon.ico',
      imageURL: ''
    }
  },
  methods: {
    convert() {
      if (this.imageURL) {
        if (this.imageType) {
          this.$refs.bar.start()
          request('post', 'convert', {
            imageURL: this.imageURL,
            imageType: this.imageType,
            imageSize: this.imageSize
          }).then(value => {
            const res = result(value)
            this.$refs.bar.stop()
            if (res) this.download = this.server + 'download-image?imageName=' + value.data.imageName + '&downloadName=' + this.imageName
          })
        } else {
          Notify.create({
            type: 'warning',
            message: '请选择图片类型！'
          })
        }
      } else {
        Notify.create({
          type: 'warning',
          message: '请选择图片！'
        })
      }
    },
    uploaded(info) {
      this.imageURL = info.xhr.response
    },
    downloadImage() {
      this.download = ''
      // request('get','download-image',{imageName:this.download,downloadName:this.imageName})
    }
  }
}
</script>

<style lang="scss" scoped>
  .upload {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
  .res {
    a {
      //cursor: pointer;
      color: blue;
      font-weight: 600;
    }
  }
</style>
