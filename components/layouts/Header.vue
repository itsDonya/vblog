<template>
  <header class="px-4 py-6 bg-emerald-400 flex justify-between items-center">
    <!-- Logo -->
    <nuxt-link to="/">
      <Logo />
    </nuxt-link>

    <!-- Navbar -->
    <Navbar />

    <!-- Auth buttons -->
    <div class="flex items-center justify-center gap-4">
      <nuxt-link v-if="userLoggedIn" to="/new-post"
        ><UIButton>New Post</UIButton></nuxt-link
      >
      <nuxt-link v-if="userLoggedIn" to="/auth"
        ><UIButton :filled="true">Login</UIButton></nuxt-link
      >
      <UIButton v-if="!userLoggedIn">Log out</UIButton>
    </div>
  </header>
</template>

//
<script>
export default {
  data() {
    return {
      userLoggedIn: this.$store.state.userLoggedIn,
    };
  },
};
</script>
