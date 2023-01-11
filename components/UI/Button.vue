<template>
  <button
    :class="{ filled: filled }"
    class="bg-inherit border-2 border-white px-4 py-1 font-semibold rounded text-white hover:bg-white/60 transition-all"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    filled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.filled {
  color: #34d399;
  background-color: white;
}
.filled:hover {
  box-shadow: 0px 0px 1rem 6px #00000010;
}
</style>
