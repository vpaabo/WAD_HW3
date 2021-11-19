<template>
  <div>
    <img class='prof-icon' id='profile-pic1' src = {{ proficon }}>
    <span class="timestamp">{{ timestamp }}</span>
    <img class="content-img" src = {{ content }}>
    <span class="caption">{{ caption }}</span>
    <button-counter />
  </div>
</template>

<script>
import buttonCounter from './button-counter.vue'
export default {
  components: { buttonCounter },
}
</script>


<style scoped lang="scss">
div {
  flex-grow: 10;
  background-color: #FFFFFF;
  display: block;
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
  border-radius: 8px;
}

.timestamp{
  float: right;
  margin: 15px;
}

.prof-icon{
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 50%;
}

.caption{
  margin: 5px;
  font-weight: normal;
  font-size: large;
}

.content-img{
  display: block;
  width: 500px;
}
</style>