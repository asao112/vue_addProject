<template>
  <div id="app">
    <div class="body">
      <div class="step-box">
        <span>STEP1</span>
        <h4>お客様情報を入力してください</h4>
      </div>
      <div class="question-box">
        <p>-性別-</p>
        <div class="boxes">
          <label><input type="radio" v-model="gender" value="男性" />男性</label>
          <label><input type="radio" v-model="gender" value="女性" />女性</label>
        </div>
      </div>
      <br />
      <div class="question-box">
        <p>-生年月日-</p>
        <div class="boxes">
          <select id="year" v-model="year">
            <option v-for="number in years" :key="number.years" :value="number.year">
              {{ number.label }}
            </option>
          </select>
          <label>年</label>
          <select v-model="month" >
            <option v-for="n in 12" :value="n" :key="n">{{ n }}</option></select>月
          <select name="day" v-model="day">
            <option v-for="n in 31" :value="n" :key="n">{{ n }}</option></select>日
        </div>
      </div>
    </div>
    <router-link to="/about"><button class="button is-primary" id="next-btn">次へ進む</button></router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      years: [],
    };
  },
  mounted(){
    this.years = this.genereate();
  },

  methods:{
    genereate(){
      const years = [];
      for (let y = 2020; y > 1920; y--) {
        if (y > 2018) {
          years.push({ year: y, label: `${y} (令和${y - 2018}年)` });
        } else if (y > 1988) {
          years.push({ year: y, label: `${y} (平成${y - 1988}年)` });
        } else if (y > 1925) {
          years.push({ year: y, label: `${y} (昭和${y - 1925}年)` });
        } else if (y > 1911) {
          years.push({ year: y, label: `${y} (大正${y - 1911}年)` });
        }
      }
      return years;
    },
  },
  computed:{
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
