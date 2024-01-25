const app = Vue.createApp({
  data() {
    return {
      taskList: [],
      taskInputValue: '',
      isTaskListVisible: true,
    };
  },

  methods: {
    addTask() {
      this.taskList.push(this.taskInputValue);
      this.taskInputValue = '';
      this.$nextTick(() => {
        this.$refs.taskInputV.focus();
      });
    },
    toggleTaskListVisibility() {
      this.isTaskListVisible = !this.isTaskListVisible;
    },
  },
});

app.mount('#assignment');
