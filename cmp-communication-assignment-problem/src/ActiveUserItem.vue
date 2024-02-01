<template>
  <li>
    <span class="delete" @click="onClickDelete">x</span>
    <h2>USER INFO</h2>
    <span>name : {{ user.name }}</span>
    <span>age : {{ user.age }}</span>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      id: String,
      name: String,
      age: Number,
    },
  },
  methods: {
    onClickDelete() {
      this.$emit('removeUser', this.user.id);
    },
  },
};
</script>

<style>
li {
  position: relative;
  width: 60%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background-color: rgb(128, 101, 153);
  color: white;
  padding: 10px 20px 20px;
  margin: 10px;
  border: 3px solid rgb(86, 156, 236);
  border-radius: 10px;
}
li > .delete {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  padding: 0 10px;
  cursor: pointer;
  font-size: 20px;
}
li h2 {
  margin: 6px 0;
}
</style>
