const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel!',
          name: 'Manuel Lorenz',
          phone: '010 1234 1234',
          email: 'test@test.com',
        },
        {
          id: 'julie!',
          name: 'Julie Jones',
          phone: '010 3456 3453',
          email: 'test@test.com',
        },
      ],
    };
  },
});

app.component('friend-contact', {
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails">
        {{detailsAreVisible ? 'Hide': 'Show'}} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}} </li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel!',
        name: 'Manuel Lorenz',
        phone: '010 1234 1234',
        email: 'test@test.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount('#app');
