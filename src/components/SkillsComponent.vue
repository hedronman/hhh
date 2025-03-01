<template>
    <div class="tab-content">
      <h2>Навыки</h2>
      <p>Текущий опыт: {{ state.player.exp }}</p>
      <div>
        <label>Сила: {{ state.player.skills.strength }}</label>
        <button @click="click1()" :disabled="state.player.exp < 1">+</button>
      </div>
      <div>
        <label>Ловкость: {{ state.player.skills.agility }}</label>
        <button @click="upgradeSkill('agility')" :disabled="state.player.exp < 1">+</button>
      </div>
      <div>
        <label>Интеллект: {{ state.player.skills.intelligence }}</label>
        <button @click="upgradeSkill('intelligence')" :disabled="state.player.exp < 1">+</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useGameState } from '@/components/gameState';
  
  const { state, upgradeSkill } = useGameState();

  function click1 () {
    console.log ('123')
  }
  </script>
  
  <style scoped>
  /* Стили для кнопок навыков */
  .tab-content button {
    margin-left: 10px;
    padding: 5px 10px;
    font-size: 16px;
    border: none;
    background-color: #9c27b0;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .tab-content button:disabled {
    background-color: #7b1fa2;
    cursor: not-allowed;
  }
  </style>