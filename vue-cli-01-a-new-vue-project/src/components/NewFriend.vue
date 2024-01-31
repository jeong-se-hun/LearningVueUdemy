<template>
  <form @submit.prevent class="friend-form">
    <h3>add Friend!</h3>
    <label>
      <span> name: </span>
      <input type="text" v-model="name" />
    </label>
    <label>
      <span> phone: </span>
      <input type="text" v-model="phone" />
    </label>
    <label>
      <span> email: </span>
      <input type="text" v-model="email" />
    </label>
    <button @click="submitFriendData">add Contact</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
    };
  },

  methods: {
    submitFriendData() {
      if (!this.name || !this.phone || !this.email) {
        alert('required data check');
      } else {
        this.$emit('addFriendData', {
          id: this.getId(),
          name: this.name,
          phone: this.phone,
          email: this.email,
        });
      }
    },
    getId() {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
  },
};
</script>

<style>
.friend-form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #3f9261;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.friend-form label {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.friend-form label span {
  width: 20%;
}
.friend-form label input {
  width: 80%;
}

.friend-form button {
  width: 50%;
  margin: 10px;
  border-radius: 5px;
}
</style>
