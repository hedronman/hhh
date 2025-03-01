<template>
    <div v-if="activeTab === 'dead'" class="tab-content">
      <h2>ВЫ ПРОИГРАЛИ</h2>
    </div>
    <div v-else class="tab-content">
      <h2>Уровень врага: {{ state.enemy.lvl }}</h2>
      <h1>{{ state.enemy.hp }} / {{ state.enemy.maxhp }}</h1>
      <h2>Нанесенный урон: {{ state.enemy.uron }}</h2>
      <button class="attack-button" @click="attack">Атака</button>
      <h2>Мое здоровье: {{ state.player.hp }} / {{ state.player.maxHp }}</h2>
      <h2>Полученный урон: {{ state.enemy.uron }}</h2>
      <h2>Опыт: {{ state.player.exp }} / {{ state.requiredExp }}</h2>
      <h2>Мой уровень: {{ state.player.mylvl }}</h2>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useGameState } from '@/components/gameState';
  
  const { state, attack } = useGameState();
  const activeTab = ref('game');
  </script>
  
  <style scoped>
  /* Стили для компонента Game */
  .attack-button {
    margin-top: 20px;
    padding: 30px 60px;
    font-size: 32px;
    border: 2px solid #ffffff;
    background-color: #9c27b0;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  
  .attack-button:hover {
    background-color: #7b1fa2;
  }
  </style>