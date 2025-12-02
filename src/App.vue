<template>
  <div id="app">
    <Board/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Board from "@/components/Board.vue";

export default defineComponent({
  name: "App",
  components: {
    Board,
  }
});
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
