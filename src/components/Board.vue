<template>
  <div class="board">
    <div class="board-header">
      <h1 class="board-header-title">Доска</h1>
      <div class="board-header-buttons">
        <button @click="addCard" class="button add-card-button">Новая карточка</button>
        <button @click="resetCard" class="button reset-button">Сбросить состояние</button>
      </div>
    </div>

    <div class="columns-container">
      <Column v-for="column in columns" :key="column.id" :column="column"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Column from "./Column.vue";
import { IColumn, ICard } from "@/types";
import { getInitialData } from "@/mockData/mock";

@Component({
  components: { Column }
})
export default class Board extends Vue {
  columns: IColumn[] = getInitialData();

  addCard(): void {
    if (this.columns[0]) {
      const newCard: ICard = {
        id: `card_${Date.now()}`,
        title: `Задача ${this.columns[0].cards.length + 1}`,
        description: `Описание ${this.columns[0].cards.length + 1}`,
        columnId: this.columns[0].id,
      };

      this.columns[0].cards.push(newCard);
    }
  }

  resetCard(): void {
    this.columns = getInitialData()
  }
}
</script>

<style scoped>
.board {
  padding: 20px;
}

.board-header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.board-header-title {
  align-self: center;
}

.board-header-buttons {
  display: flex;
  gap: 20px;
}

.columns-container {
  display: flex;
  gap: 20px;
}

.button {
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.add-card-button {
  background-color: green;
  color: white;
}

.reset-button {
  background-color: red;
  color: white;
}

</style>
