<template>
  <form @submit.prevent id="user-form">
    <div>
      <label>
        <span>name : </span>
        <input type="text" v-model="name" />
      </label>
      <label>
        <span>age : </span>
        <input type="number" v-model="age" />
      </label>
    </div>

    <button @click="onClickAddUser">add user</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: null,
    };
  },

  methods: {
    onClickAddUser() {
      if (!this.name || !this.age) {
        alert('input check');
        return;
      }
      this.$emit('addUser', { id: this.getId(), name: this.name, age: this.age });
      this.name = '';
      this.age = null;
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
#user-form {
  position: fixed;
  bottom: 0;
  padding: 20px;
  background-color: rgb(72, 137, 139);
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
}

#user-form div {
  width: 30%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  color: white;
}

#user-form label {
  display: flex;
  justify-content: space-between;
  color: white;
}

#user-form label span {
  width: 20%;
  flex-shrink: 0;
  height: 20px;
  line-height: 20px;
}
#user-form label input {
  flex-grow: 1;
  border-width: 0 0 1px;
  outline: none;
  border-radius: 5px;
  height: 22px;
  padding: 6px;
}
#user-form button {
  padding: 20px;
  border-radius: 10px;
  background-color: #7ec07f;
  border: none;
  color: white;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}

#user-form button:hover {
  background-color: #45a049;
}
</style>
