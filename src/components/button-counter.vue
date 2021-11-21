<template>
<button v-on:click="count++">{{count}} likes</button>
</template>

<script>
export default {
  data: function(){
    return {
      count:0
  }}
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