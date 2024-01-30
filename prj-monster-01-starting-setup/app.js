const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      logMessages: [],
      specialAttackCount: 0,
      winner: null,
      monsterMessages: [],
      playerMessages: [],
    };
  },

  methods: {
    attackPlayer() {
      const attackValue = getRandomValue(5, 20);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster', 'attack', attackValue);
      if (this.playerHealth <= 0) this.playerHealth = 0;
    },

    attackMonster() {
      const attackValue = getRandomValue(5, 15);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      if (this.monsterHealth <= 0) this.monsterHealth = 0;
      this.nextRound();
    },

    specialAttackMonster() {
      if (this.specialAttackCount > 0) return;

      this.specialAttackCount = 4;
      const attackValue = getRandomValue(15, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'special-attack', attackValue);
      if (this.monsterHealth <= 0) this.monsterHealth = 0;
      this.nextRound();
    },

    surrender() {
      this.winner = 'monster';
    },

    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.logMessages = [];
      this.winner = null;
      this.specialAttackCount = 0;
    },

    healPlayer() {
      const healValue = getRandomValue(8, 20);
      let finalHealValue = healValue;
      if (this.playerHealth + healValue > 100) {
        finalHealValue = 100 - this.playerHealth;
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage('player', 'heal', finalHealValue);
      this.nextRound();
    },

    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },

    nextRound() {
      this.attackPlayer();
      if (this.specialAttackCount > 0) this.specialAttackCount--;
    },

    getActionByClass(actionBy) {
      return actionBy === 'player' ? 'log--player' : 'log--monster';
    },
  },

  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      return { width: this.playerHealth + '%' };
    },
  },

  watch: {
    playerHealth(value) {
      if (value === 0 && this.monsterHealth === 0) {
        this.winner = 'draw';
      } else if (value === 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value === 0 && this.playerHealth === 0) {
        this.winner = 'draw';
      } else if (value === 0) {
        this.winner = 'player';
      }
    },
  },
});

app.mount('#game');
