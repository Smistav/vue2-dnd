<template>
  <div class="column">
    <div class="column-header">
      <h3>{{ column.title }}</h3>
      <span class="card-count">{{ column.cards.length }}</span>
    </div>
    <draggable
        :list="column.cards"
        group="cards"
        class="cards-list"
        :animation="200"
    >
      <Card
          v-for="card in column.cards"
          :key="card.id"
          :card="card"
      />
    </draggable>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import draggable from "vuedraggable";
import Card from "./Card.vue";
import { IColumn } from "@/types";

export default defineComponent({
  name: "Column",
  components: {
    Card,
    draggable
  },
  props: {
    column: {
      type: Object as PropType<IColumn>,
      required: true
    }
  }
});
</script>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 15px;
  min-height: 500px;
  border: 2px dashed transparent;
  position: relative;
}

.column:has(.sortable-ghost) {
  border-color: #4299e1;
  background-color: rgba(66, 153, 225, 0.05);
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid lightgray;
}

.card-count {
  background: lightgray;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 14px;
}

.cards-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

</style>
