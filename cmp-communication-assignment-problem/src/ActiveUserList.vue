<template>
  <ul>
    <ActiveUserItem v-for="user in users" :key="user.id" :user="user" @removeUser="removeUser" />
  </ul>
</template>

<script>
import ActiveUserItem from './ActiveUserItem.vue';
export default {
  components: {
    ActiveUserItem,
  },
  props: {
    users: {
      type: Array,
    },
  },

  methods: {
    removeUser(id) {
      this.$emit('removeUser', id); 
    },
  },
};
</script>

<style>
ul {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
  max-height: 700px;
  overflow-y: auto;
}
</style>
