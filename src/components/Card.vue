<template>
  <div class="card">
    <div class="card-content">
      <h4>{{ card.title }}</h4>
      <p>{{ card.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ICard } from "@/types";

@Component
export default class Card extends Vue {
  @Prop({ required: true }) card!: ICard;
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 6px;
  padding: 15px;
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.card-content h4 {
  margin: 0 0 10px 0;
  color: black;
}

.card-content p {
  margin: 0;
  color: dimgray;
  font-size: 14px;
}
</style>
