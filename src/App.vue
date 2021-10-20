<template>
  <MDXProvider v-bind:components="components">
    <Example/>
  </MDXProvider>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

import {MDXProvider} from '@mdx-js/vue'
import Example from './example.mdx'

console.log(Example);

@Options({
  data() {
    return {components: {h1: "h2"}};
  },
  components: {
    MDXProvider,
    Example,
  },
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
