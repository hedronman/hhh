import { reactive } from 'vue';

export function useGameState() {
  const state = reactive({
    enemy: {
      hp: 10,
      maxhp: 10,
      lvl: 1,
      uron: 0
    },
    player: {
      hp: 100,
      maxHp: 100,
      exp: 0,
      mylvl: 1,
      myuron: 0,
      skills: {
        strength: 1,
        agility: 1,
        intelligence: 1
      }
    },
    requiredExp: 10
  });

  function attack() {
    state.enemy.uron = rand(state.player.mylvl + state.player.skills.strength, (state.player.mylvl + state.player.skills.strength) * 2);
    state.enemy.hp -= state.enemy.uron;

    if (state.enemy.hp <= 0) {
      state.player.exp += state.enemy.lvl;
      state.enemy.lvl += 1;
      state.enemy.hp = state.enemy.lvl * 10;
      state.enemy.maxhp = state.enemy.hp;

      while (state.player.exp >= state.requiredExp) {
        state.player.mylvl += 1;
        state.player.exp -= state.requiredExp;
        state.requiredExp *= 2;
      }
    }
  }

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function upgradeSkill(skill) {
    if (state.player.exp >= 1) {
      state.player.skills[skill] += 1;
      state.player.exp -= 1;

      if (skill === 'strength') {
        state.player.maxHp += state.player.skills.strength * 10;
        state.player.hp = state.player.maxHp;
      }
    }
  }

  setInterval(() => {
    if (state.enemy.lvl > 0) {
      state.enemy.uron = rand(state.enemy.lvl, state.enemy.lvl * 2);
      state.player.hp -= state.enemy.uron;

      if (state.player.hp <= 0) {
        state.player.hp = state.player.maxHp;
        state.enemy.lvl = Math.max(1, state.enemy.lvl - 1);
      }
    }
  }, 1000);

  return { state, attack, upgradeSkill };
}