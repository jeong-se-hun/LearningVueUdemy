const app = Vue.createApp({
  data() {
    return {
      inputValue1: '',
      inputValue2: '',
    };
  },
  methods: {
    showAlert() {
      alert('show');
    },
    inputEvent1(e) {
      this.inputValue1 = e.target.value;
    },
    enterEvent(e) {
      this.inputValue2 = e.target.value;
    },
  },
});

app.mount('#assignment');
