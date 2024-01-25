Vue.createApp({
  data() {
    return {
      textInput: '',
      backgroundInput: '',
      ParagraphIsVisible: true,
    };
  },

  computed: {
    ParagraphClass() {
      return {
        user1: this.textInput === 'user1',
        user2: this.textInput === 'user2',
        visible: this.ParagraphIsVisible,
        hidden: !this.ParagraphIsVisible,
      };
    },
  },

  methods: {
    ParagraphToggle() {
      this.ParagraphIsVisible = !this.ParagraphIsVisible;
    },
  },
}).mount('#assignment');
