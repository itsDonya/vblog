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
        ><Button>New Post</Button></nuxt-link
      >
      <nuxt-link v-if="userLoggedIn" to="/auth"
        ><Button :filled="true">Login</Button></nuxt-link
      >
      <Button v-if="!userLoggedIn">Log out</Button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userLoggedIn: this.$store.state.userLoggedIn,
    };
  },
};
</script>
