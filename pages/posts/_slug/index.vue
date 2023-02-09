<template>
  <article class="w-full py-4 flex flex-col items-center justify-center">
    <LoaderIcon v-if="isLoading" />
    <PostPreview v-if="post" v-bind="post" />
  </article>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
export default {
  data() {
    return {
      post: null,
      isLoading: false,
    };
  },
  methods: {
    getPost() {
      this.isLoading = true;
      const postId = this.$route.params.slug;
      const firebaseConfig = {
        databaseURL: "https://vblog-vue-default-rtdb.firebaseio.com",
      };
      const app = initializeApp(firebaseConfig);
      const db = getDatabase(app);
      const postRef = ref(db, `posts/${postId}`);
      onValue(postRef, async (snapshot) => {
        const postDetails = await snapshot.val();
        this.post = { fbID: postId, ...postDetails };
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>
