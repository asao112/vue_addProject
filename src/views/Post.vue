<template>
<div id="app">
    <div class="body">
        <div class="step-box">
            <span>STEP3</span>
            <h4>ご相談内容を入力してください</h4>
        </div>
        <div class="question-box">
            <p>-ご相談内容-</p>
            <textarea class="messageBox" name="form" v-model="form"></textarea>
        </div>
    </div>
    <router-link to="/about"><button class="back-btn button is-primary" id="next-btn">前へ戻る </button></router-link>
    <router-link to="/postshow"><button class="button is-primary" id="next-btn">次へ進む</button></router-link>
</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
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
  },
};
</script>