<template>
<button v-on:click="$refs.counter.reset">Reset</button>
</template>

<script>
export default {
  data: function(){
    return {
      name: "xd"
  }}
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
}
</style>