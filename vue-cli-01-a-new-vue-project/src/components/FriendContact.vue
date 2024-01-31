<template>
  <li>
    <h2>
      {{ friend.name }}
    </h2>
    <button @click="onClickDetailButton">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
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
      id: String,
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
  },
};
</script>

<style></style>
