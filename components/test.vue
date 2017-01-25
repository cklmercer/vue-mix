<template>
<section id="test">
  <h1>Test</h1>
  <h2>{{ message }}<h2>
</section>
</template>

<script>
export default {
  name: 'test',

  store: ['message'],

  events: {
    test(message) {
      this.message = message
    }
  },

  mounted() {
    setTimeout(() => this.$events.fire('test', "You've received a message from test.vue"), 1500)
    setTimeout(() => this.$events.fire('test', "Now you've received another message test.vue"), 3000)
  }
}
</script>
