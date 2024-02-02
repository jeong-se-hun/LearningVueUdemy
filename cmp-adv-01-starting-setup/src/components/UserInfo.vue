<template>
  <section>
    <BaseCard>
      <template #header>
        <h3>{{ fullName }}</h3>
        <BaseBadge :type="role" :caption="role.toUpperCase()"></BaseBadge>
      </template>
      <p>{{ infoText }}</p>
    </BaseCard>
  </section>
</template>

<script>

export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>

</style>