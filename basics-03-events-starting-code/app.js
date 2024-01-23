const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },

  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    ReduceCounter(num) {
      this.counter = this.counter - num;
    },
    setName(e) {
      this.name = e.target.value;
    },
  },
});

app.mount('#events');
