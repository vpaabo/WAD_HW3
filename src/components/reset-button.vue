<template>
  <section>
    <button v-on:click="this.resetSignal">Reset</button>
  </section>
</template>

<script>
export default {
  data: function(){
    return {
      name: "xd"
  }},
  methods: {
    resetSignal() {
      this.$root.$emit('resetLikes');
      console.log("Signal sent");
    }
  }
};
</script>

<style scoped>
button{
  background-color: red;
  border: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: "Comic Sans MS";
  font-size: 16px;
  border-radius: 8px;
}
</style>