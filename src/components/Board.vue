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
import { defineComponent } from "vue";
import Column from "./Column.vue";
import { IColumn, ICard } from "@/types";
import { getInitialData } from "@/mockData/mock";
import { StorageService } from "@/services/StorageService";

export default defineComponent({
  name: "Board",
  components: {
    Column
  },
  data() {
    return {
      columns: [] as IColumn[]
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData(): void {
      const columnsFromStorage = StorageService.loadFromStorage();
      this.columns = columnsFromStorage || getInitialData();
    },
    saveData(): void {
      StorageService.saveToStorage(this.columns);
    },
    addCard(): void {
      if (this.columns[0]) {
        const totalCardsCount = this.columns.reduce((sum, column) => sum + column.cards.length, 0);
        const newCard: ICard = {
          id: `card_${Date.now()}`,
          title: `Задача ${totalCardsCount + 1}`,
          description: `Описание ${totalCardsCount + 1}`,
        };

        this.columns[0].cards.push(newCard);
      }
    },
    resetCard(): void {
      this.columns = getInitialData();
    }
  },
  watch: {
    columns: {
      handler() {
        this.saveData();
      },
      deep: true
    }
  }
});
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
