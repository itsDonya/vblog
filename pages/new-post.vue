<template>
  <article class="py-8 flex items-center justify-center">
    <UIBaseForm class="w-96">
      <!-- Post title -->
      <label class="w-full flex flex-col items-start gap-1">
        <span class="text-zinc-600">Post title</span>
        <input
          type="text"
          v-model="post.title"
          class="w-full bg-inherit rounded px-2 border-[1px] border-emerald-500 focus:outline-none focus:ring-4 ring-emerald-500/20"
        />
      </label>
      <!-- Author name -->
      <label class="w-full flex flex-col items-start gap-1">
        <span class="text-zinc-600">Author name</span>
        <input
          type="text"
          v-model="post.author"
          class="w-full bg-inherit rounded px-2 border-[1px] border-emerald-500 focus:outline-none focus:ring-4 ring-emerald-500/20"
        />
      </label>
      <!-- Category -->
      <label class="w-full flex flex-col items-start gap-1">
        <span class="text-zinc-600">Category</span>
        <select
          name="category"
          v-model="post.category"
          class="w-full py-0.5 bg-inherit rounded px-2 border-[1px] border-emerald-500 focus:outline-none focus:ring-4 ring-emerald-500/20"
        >
          <option value="" selected disabled>Choose a category</option>
          <option
            v-for="(category, i) of categories"
            :value="category"
            :key="i"
          >
            {{ category }}
          </option>
        </select>
      </label>
      <!-- Content -->
      <label class="w-full flex flex-col items-start gap-1">
        <span class="text-zinc-600">Content</span>
        <textarea
          type="text"
          rows="10"
          v-model="post.body"
          class="w-full bg-inherit rounded px-2 border-[1px] border-emerald-500 focus:outline-none focus:ring-4 ring-emerald-500/20"
        ></textarea>
      </label>
      <!-- Thumbnail link -->
      <label class="w-full flex flex-col items-start gap-1">
        <span class="text-zinc-600">Thumbnail link</span>
        <input
          v-model="post.thumbnailLink"
          type="text"
          class="w-full bg-inherit rounded px-2 border-[1px] border-emerald-500 focus:outline-none focus:ring-4 ring-emerald-500/20"
        />
      </label>

      <button
        @click.prevent="addPost"
        class="w-full py-2 font-bold text-white bg-emerald-500 rounded hover:shadow-lg transition-all"
      >
        Post
      </button>
    </UIBaseForm>
  </article>
</template>

<script>
import categories from "../static/categories";
export default {
  data() {
    return {
      post: {
        title: "",
        author: "",
        category: "",
        body: "",
        date: new Date(),
        thumbnailLink: "",
      },
    };
  },
  computed: {
    categories() {
      return categories;
    },
  },
  methods: {
    addPost() {
      this.$store.dispatch("addPost", this.post);
      this.$router.push("/posts");
    },
  },
};
</script>
