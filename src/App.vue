<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Main from './views/Main.vue'

@Component({
  components: {
    Main
  }
})
/**
 * Componente de arranque de la aplicacion
 */
export default class App extends Vue {}
</script>

<style lang="scss"></style>
