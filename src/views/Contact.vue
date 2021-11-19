<template>
  <div>
    <h1>Contact us page</h1>
    <Button />
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/button-counter.vue";

export default {
  name: "Contact",
  components: {
    Button,
  },
};
</script>