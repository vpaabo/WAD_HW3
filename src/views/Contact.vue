<template>

  <div class="contactinfo">
    <h1>Contact us page</h1>
    <p>Find our contact info down below: </p>
    <p>Phone number: {{this.$store.state.contactNr}}</p>
    <p>Email: {{this.$store.state.contactMail}}</p>
    <p>Address: {{this.$store.state.contactAddress}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Contact",
  data(){
    return{
  }}
}
</script>