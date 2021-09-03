<template>
<div id="app">
    <div class="body">
      <div class="step-box">
        <span>STEP4</span>
        <h4>以下の内容をご確認ください</h4>
      </div>
      <div class="question-box">
        <p>-性別-</p>
        {{ set_gender }}
        <p>-生年月日-</p>
        <span>{{ set_year }}年{{ set_month }}月{{ set_day }}日</span>
        <p>-現在生命保険に加入されていますか-</p>
        {{ set_radio }}
        <p>-現在入院中ですか、または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められた事
          はありますか？-
        </p>
        {{ set_radio2 }}
        <p>-過去５年以内に、病気や怪我で、手術を受けたことまたは継続して七日以上の入院をしたことがありますか？-</p>
        {{ set_radio3 }}
        <p>-ご相談内容-</p>
        {{ set_form }}
      </div>
    </div>
    <router-link to="/post"><button class="back-btn button is-primary" id="next-btn">前へ戻る</button></router-link>
    <button class="button is-primary">送信</button>
</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  neme: "gender",
  computed: {
    form: {
      get() {
        return this.$store.getters.set_form;
      },
      set(val) {
        this.$store.commit("setForm", val);
      },
    },
    ...mapGetters(["set_form"]),
    day: {
      get() {
        return this.$store.getters.set_day;
      },
      set(val) {
        this.$store.commit("setDay", val);
      },
    },
    ...mapGetters(["set_day"]),
    year: {
      get() {
        return this.$store.getters.set_year;
      },
      set(val) {
        this.$store.commit("setYear", val);
      },
    },
    ...mapGetters(["set_year"]),
    month: {
      get() {
        return this.$store.getters.set_month;
      },
      set(val) {
        this.$store.commit("setMonth", val);
      },
    },
    ...mapGetters(["set_month"]),
    radio: {
      get() {
        return this.$store.getters.set_radio;
      },
      set(val) {
        this.$store.commit("setRadio", val);
      },
    },
    ...mapGetters(["set_radio"]),
    radio2: {
      get() {
        return this.$store.getters.set_radio2;
      },
      set(val) {
        this.$store.commit("setRadio2", val);
      },
    },
    ...mapGetters(["set_radio2"]),
    radio3: {
      get() {
        return this.$store.getters.set_radio3;
      },
      set(val) {
        this.$store.commit("setRadio3", val);
      },
    },
    ...mapGetters(["set_radio3"]),
    gender: {
      get() {
        return this.$store.getters.set_gender;
      },
      set(val) {
        this.$store.commit("setGender", val);
      },
    },
    ...mapGetters(["set_gender"]),
  },
};
</script>