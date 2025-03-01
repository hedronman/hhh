<template>
    <div class="game-container">
      <!-- Табы -->
      <div class="tabs">
        <button 
          :class="{ active: activeTab === 'game' }" 
          @click="activeTab = 'game'"
        >
          Игра
        </button>
        <button 
          :class="{ active: activeTab === 'skills' }" 
          @click="activeTab = 'skills'"
        >
          Навыки
        </button>
        <button 
          :class="{ active: activeTab === 'shop' }" 
          @click="activeTab = 'shop'"
        >
          Магазин
        </button>
      </div>
  
      <!-- Содержимое табов -->
      <GameComponent v-if="activeTab === 'game'" />
      <SkillsComponent v-if="activeTab === 'skills'" />
      <ShopComponent v-if="activeTab === 'shop'" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import GameComponent from './components/GameComponent.vue';
  import SkillsComponent from './components/SkillsComponent.vue';
  import ShopComponent from './components/ShopComponent.vue';
  
  const activeTab = ref('game');
  </script>
  
  <style scoped>
  /* Фиолетовый фон для контейнера игры */
  .game-container {
    background-color: #6a0dad;
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Стили для табов */
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .tabs button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: #2e7d32; /* Темно-зеленый цвет */
    color: white;
    cursor: pointer;
    border-radius: 5px;
    margin: 0 10px;
    transition: background-color 0.3s ease;
  }
  
  .tabs button.active {
    background-color: #388e3c; /* Ярко-зеленый цвет для активного таба */
  }
  
  .tabs button:hover {
    background-color: #1b5e20; /* Темнее зеленый при наведении */
  }
  </style>