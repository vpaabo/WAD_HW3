<template>
  <div>
    <h1>Contact us page</h1>
    <Button />
    <ResetButton />
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/button-counter.vue";
import ResetButton from "@/components/reset-button.vue";

export default {
  name: "Contact",
  components: {
    ResetButton,
    Button,
  },
};
</script>