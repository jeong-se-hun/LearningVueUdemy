const app = Vue.createApp({
  data() {
    return {
      enterFoalValue: '',
      goals: [],
    };
  },

  methods: {
    addGoal() {
      if (this.enterFoalValue) {
        this.goals.push(this.enterFoalValue);
        this.enterFoalValue = '';
        this.$nextTick(() => {
          this.$refs.goalInput.focus();
        });
      }
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
    resetGoals() {
      this.goals = [];
    },
  },
});

app.mount('#user-goals');
