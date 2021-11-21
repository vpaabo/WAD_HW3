<template>
  <div class="home">
    <reset-button></reset-button>
    <post></post>
    
  </div>
</template>
<script>
import Post from "../components/Post";
import ResetButton from '../components/reset-button.vue';
export default {
  components: { Post, ResetButton }
}
</script>