<!--
 * @Descripttion: 
 * @Author: SUI
 * @Date: 2022-05-03 11:45:38
 * @LastEditors: SUI
 * @LastEditTime: 2022-05-03 23:34:49
 * @FilePath: \2022.5.3\vue2-word-hunt\src\views\Result.vue
-->
<template>
  <div class="definitions">
    <!-- 输入框没有值 -->
    <div class="tip" v-if="!resultContent">Start by typing a word in search ...</div>
    <!-- 输入框结果未匹配 -->
    <div class="tip" v-else-if="resultContent && result.length === 0">Sorry, the definition of this word was not found.</div>
    <!-- 输入框结果 -->
    <div v-else class="definition" v-for="(definition, index) in result" :key="index">
      <!-- 音标读音 -->
      <div style="display: flex" v-if="definition.phonetics.length > 0 && definition.phonetics[0].audio">
        <div class="phonetics" v-for="(phonetic, i) in definition.phonetics" :key="i">
          <span class="phonetic" @click="handleClick(phonetic.audio)">
            {{ phonetic.text }}
          </span>
          <!-- <i class="iconfont icon-yangshengqi" @click="handleClick(index)"></i> -->
        </div>
      </div>
      <div class="meanings">
        <div class="meaning" v-for="(meaning, i) in definition.meanings" :key="i">
          <span class="partOfSpeech">{{ meaning.partOfSpeech }}</span>
          <span class="word-meaning">
            {{ meaning.definitions.map((definition) => definition.definition).join('   ') }}
          </span>
        </div>
      </div>
    </div>
    <!-- 播放语音 -->
    <audio class="audio_box" :src="audioSrc" ref="audio"></audio>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Result',
  data() {
    return {
      resultContent: '',
      result: [],
      audioSrc: ''
    }
  },

  mounted() {
    $bus.$on('searchWord', (value) => {
      this.resultContent = value
      if (value) this.getData(value)
      else this.result = []
    })
  },

  methods: {
    // 查询输入框结果
    async getData(value) {
      let that = this
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
      that.result = []
      try {
        const res = await axios.get(url)
        if (res.status === 200) {
          // console.log(res.data)
          that.result = res.data
        } else {
          console.log(res)
        }
      } catch (err) {
        console.log(err)
      }
    },

    // 播放
    handleClick(audio) {
      let that = this
      // console.log(audio)
      if (audio) {
        that.$nextTick(() => {
          this.audioSrc = audio
        })
        setTimeout(() => {
          that.$refs.audio.play()
        }, 100)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.definitions {
  padding: 15px;
  box-sizing: border-box;
  height: 65vh;
  overflow: scroll;
  gap: 5px;
  border-radius: 10px;
  border: 10px solid #696969;

  .tip {
    font-size: 18px;
  }

  .definition {
    margin-bottom: 10px;

    .phonetics {
      margin-bottom: 10px;

      .phonetic {
        cursor: pointer;
        border-radius: 5px;

        margin-right: 10px;
        &:hover {
          opacity: 0.8;
        }
      }

      .iconfont {
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }

    &:last-child {
      .meanings {
        border-bottom: none;
      }
    }

    .meanings {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #c5bcbc;

      div.meaning {
        .partOfSpeech {
          margin-right: 10px;
          background-color: #3b3e45;
          opacity: 0.8;
          display: inline-block;
          padding-block: 3px;
          padding-inline: 5px;
          font-size: 14px;
          border-radius: 5px;
          line-height: 25px;
        }
        .word-meaning {
          line-height: 25px;
        }
      }
    }
  }

  .audio_box {
    position: fixed;
    bottom: 0;
    right: 0;
    // opacity: 0;
  }
}
</style>
