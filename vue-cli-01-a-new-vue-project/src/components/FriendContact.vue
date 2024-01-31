<template>
  <li>
    <h2>{{ friend.name }} {{ friend.isFavorite ? '(Favorite)' : '' }}</h2>

    <button @click="onClickToggleFavoriteButton">toggleFavorite</button>
    <button @click="onClickDetailButton">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="onClickDeleteButton">delete</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone: {{ friend.phone }}</strong>
      </li>
      <li>
        <strong>email: {{ friend.email }}</strong>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    friend: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      isFavorite: {
        type: Boolean,
        required: true,
      },
    },
  },
  emit: {
    toggleFavorite: function (id) {
      if (id) {
        return true;
      } else {
        console.warn('id is not');
        return false;
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    onClickDetailButton() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    onClickToggleFavoriteButton() {
      this.$emit('toggleFavorite', this.friend.id);
    },
    onClickDeleteButton() {
      this.$emit('deleteFriend', this.friend.id);
    },
  },
};
</script>

<style></style>
