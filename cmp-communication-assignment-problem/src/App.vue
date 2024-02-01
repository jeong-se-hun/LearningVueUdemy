<template>
  <section id="app">
    <ActiveUserList :users="users" @removeUser="removeUser"/>
    <UserDataForm @addUser="addUser"/>
  </section>
</template>
    
<script>
import ActiveUserList from './ActiveUserList.vue'
import UserDataForm from './UserDataForm.vue'

export default {
  components: {
    ActiveUserList,
    UserDataForm,
  },
  data(){
    return {
      users : []
    }
  },

  methods : {
    addUser(user) {
      this.users.push(user);
    }, 
    removeUser(id) {
      this.users = this.users.filter(user => user.id !== id)
    }
  }
}
</script>
    
<style>
* {
box-sizing: border-box;
margin: 0;
padding: 0;
}

#app {
  background-color: aliceblue;
  width: 100vw;
  height: 100vh;
}
</style>