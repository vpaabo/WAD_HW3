<template>
  <section>
    <div v-for = "post in postList" :key="post.id" :id="post.id">
      <img :src=post.proficon alt="alt" class="prof-icon"/>
      <span class="timestamp"> {{post.timestamp}} </span> <br>
      <img :src="post.content" alt="alt" class="content-img"/>
      <span class="caption"> {{post.caption}} </span> <br>
      <button-counter :id="post.id" :likes="post.likes"></button-counter>
    </div>
  </section>
</template>

<script>
import buttonCounter from './button-counter.vue'
export default {
  name: "posts",
  components: { buttonCounter },
  computed: {
    postList(){
      var postListsale = this.$store.state.postList.map(post => {
          return{ proficon: post.proficon,
            timestamp: post.timestamp,
            caption: post.caption,
            content: post.content,
            id: post.id,
            likes: post.likes
          }
        }
      );
      return postListsale
    }
  }
}
</script>


<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 30px auto;
}

div {
  flex-grow: 10;
  background-color: #d4d4d4;
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
  float: left;
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