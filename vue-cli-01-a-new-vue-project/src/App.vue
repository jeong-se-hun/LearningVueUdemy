<template>
  <header>
    <h1>My Friends</h1>
  </header>
  <NewFriend @addFriendData="addFriendData" />
  <ul>
    <FriendContact
      v-for="friend in friends"
      :key="friend"
      :friend="friend"
      @toggleFavorite="toggleFavorite"
      @deleteFriend="deleteFriend"
    />
  </ul>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

export default {
  components: {
    FriendContact,
    NewFriend,
  },
  data() {
    return {
      friends: [
        {
          id: 'manuel!',
          name: 'Manuel Lorenz',
          phone: '010 1234 1234',
          email: 'test1@test.com',
          isFavorite: true,
        },
        {
          id: 'julie!',
          name: 'Julie Jones',
          phone: '010 3456 3453',
          email: 'test2@test.com',
          isFavorite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(id) {
      const ChangeFavoriteFriendsData = this.friends.map(friend => {
        if (friend.id === id && id) {
          return { ...friend, isFavorite: !friend.isFavorite };
        } else {
          return friend;
        }
      });
      this.friends = ChangeFavoriteFriendsData;
    },
    addFriendData(data) {
      console.log(data);
      this.friends.push({ ...data, isFavorite: false });
    },
    deleteFriend(id) {
      this.friends = this.friends.filter(friend => friend.id !== id);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  margin: 0 0.3rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
