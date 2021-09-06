<template>
<div id="app">
    <div class="body">
      <div class="step-box">
        <span>STEP4</span>
        <h4>以下の内容をご確認ください</h4>
      </div>
      <div class="question-box">
        <p>-性別-</p>
        {{ setGender }}
        <p>-生年月日-</p>
        <span>{{ setYear }}年{{ setMonth }}月{{ setDay }}日</span>
        <p>-現在生命保険に加入されていますか-</p>
        {{ setRadio }}
        <p>-現在入院中ですか、または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められた事
          はありますか？-
        </p>
        {{ setRadio2 }}
        <p>-過去５年以内に、病気や怪我で、手術を受けたことまたは継続して七日以上の入院をしたことがありますか？-</p>
        {{ setRadio3 }}
        <p>-ご相談内容-</p>
        {{ setForm }}
      </div>
    </div>
    <router-link to="/post"><button class="back-btn button is-primary" id="next-btn">前へ戻る</button></router-link>
    <button class="button is-primary">送信</button>
</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  neme:"gender",
  computed:{
    form:{
      get(){
        return this.$store.getters.setForm;},
      set(val){
        this.$store.commit("setForm", val);},
    },
    ...mapGetters(["setForm"]),
    day:{
      get(){
        return this.$store.getters.setDay;
      },
      set(val){
        this.$store.commit("setDay", val);
      },
    },
    ...mapGetters(["setDay"]),
    year:{
      get(){
        return this.$store.getters.setYear;
      },
      set(val){
        this.$store.commit("setYear", val);
      },
    },
    ...mapGetters(["setYear"]),
    month:{
      get(){
        return this.$store.getters.setMonth;
      },
      set(val){
        this.$store.commit("setMonth", val);
      },
    },
    ...mapGetters(["setMonth"]),
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
    gender:{
      get(){
        return this.$store.getters.setGender;
      },
      set(val){
        this.$store.commit("setGender", val);
      },
    },
    ...mapGetters(["setGender"]),
  },
};
</script>