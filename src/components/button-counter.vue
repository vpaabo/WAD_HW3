<template>
  <button v-on:click="this.addLike">{{this.likes}} likes</button>
</template>

<script>
export default {
  props:['id', 'likes'],
  data: function(){
    return {}
  },
  mounted() {
    this.$root.$on('resetLikes', () => {
      console.log("Signal received.");
      this.$store.commit('reset', this.id);
      return {}
    })
  },
  methods: {
    addLike() {
      this.$store.commit('increment', this.id);
    }
  }
};
</script>

<style scoped>
button{
  background-color: rgb(252, 100, 100);
  border: black;
  padding: 15px 32px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: "Comic Sans MS";
  font-size: 16px;
  width: 150px;
  border-radius: 8px;
}
</style>