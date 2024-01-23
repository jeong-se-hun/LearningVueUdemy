const { createApp } = Vue;

createApp(
  {
    data() {
      return {
        courseGoalA: 'Finish the course and learn Vue!',
        courseGoalB: '<h3>Master Vue and build amazing apps</h3>',
        vueLink: 'https://vuejs.org'
      }
    },
    methods: {
      outPutGoal() {
        const randomNumber = Math.random()
        if (randomNumber < 0.5) {
          return this.courseGoalA
        } else {
          return this.courseGoalB
        }
      }
    }
  }
).mount("#user-goal")