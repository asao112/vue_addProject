<template>
  <div id="app">
    <div class="body">
      <div class="step-box">
        <span>STEP2</span>
        <h4>以下にお答えください</h4>
      </div>
      <div v-show="show >= 1">
        <div class="question-box">
          <p>-現在生命保険に加入されていますか?-</p>
          <label><input type="radio" v-model="radio" value="はい" @click="next()"/>はい</label>
          <label><input type="radio" v-model="radio" value="いいえ" @click="next()"/>いいえ</label>
        </div>
      </div>
      <br/>
      <div v-show="show >= 2">
        <div class="question-box">
          <p>-現在入院中ですか。または、最近3ヶ月以内に医師の診察、検査の結果、入院、手術を進められたことはありますか？-</p>
          <label><input type="radio" v-model="radio2" value="はい" @click="next()"/>はい</label>
          <label><input type="radio" v-model="radio2" value="いいえ" @click="next()"/>いいえ</label>
        </div>
      </div>
      <br/>
      <div v-show="show >= 3">
        <div class="question-box">
          <p>-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</p>
          <label><input type="radio" v-model="radio3" value="はい" @click="next()" />はい</label>
          <label><input type="radio" v-model="radio3" value="いいえ" @click="next()"/>いいえ</label>
        </div>
      </div>
    </div>
    <router-link to="/"><button class="back-btn button is-primary" id="back-btn"> 前へ戻る</button></router-link>
    <router-link to="/post"><button class="button is-primary" id="next-btn">次へ進む</button></router-link>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      show: 1,
    };
  },
  mounted(){
    this.nengoes = this.genereate();
  },
  methods:{
    next: function(){
      this.show++;
      if(this.show > 3){
        this.show = 3;
      }
    },
  },
  computed:{
    radio:{
      get(){
        return this.$store.getters.setRadio;
      },
      set(val){
        this.$store.commit("setRadio", val);
      },
    },
    ...mapGetters(["setRadio"]),
    radio2:{
      get(){
        return this.$store.getters.setRadio2;
      },
      set(val){
        this.$store.commit("setRadio2", val);
      },
    },
    ...mapGetters(["setRadio2"]),
    radio3:{
      get(){
        return this.$store.getters.setRadio3;
      },
      set(val){
        this.$store.commit("setRadio3", val);
      },
    },
    ...mapGetters(["setRadio3"]),
  },
};
</script>