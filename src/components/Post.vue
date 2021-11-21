<template>
  <div>
    <ul>
      <li class="item" v-for = "product in productListsale" :key="product.id">
        <span class="prof-icon"><img :src="product.proficon" alt="alt" /> </span> <br>
        <span class="timestamp"> {{product.timestamp}} </span> <br>
        <span class="caption"> {{product.caption}} </span> <br>
        <span class="content-img"><img :src="product.content" alt="alt"/> </span>
        <button-counter></button-counter>
      </li>
    </ul>
  </div>
</template>

<script>
import buttonCounter from './button-counter.vue'
export default {
  name: "posts",
  components: { buttonCounter },
  computed: {
    productListsale(){
      var postListsale = this.$store.state.postList.map(product => {
          return{ proficon: "** "+ product.proficon+ " **",
            timestamp: product.timestamp,
            caption: product.caption,
            content: product.content
          }
        }
      );
      return postListsale
    },
    productList(){
      return this.$store.state.productList
    }}
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