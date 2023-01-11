<template>
  <article class="w-full h-full pt-10 flex items-center justify-center">
    <AuthForm />
  </article>
</template>

<script>
import AuthForm from "../components/auth/AuthForm.vue";
export default {
  components: {
    AuthForm,
  },
};
</script>
