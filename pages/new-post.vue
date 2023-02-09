<template>
  <article class="py-8 flex items-center justify-center">
    <form-base form-title="New Post" :on-submit="onSubmit">
      <!-- Title -->
      <FormInput
        :modelValue="post"
        input-label="Post title"
        input-name="title"
        input-type="text"
        validation-rules="required"
      />

      <!-- Author -->
      <FormInput
        :modelValue="post"
        input-label="Author name"
        input-name="author"
        input-type="text"
        validation-rules="required"
      />

      <!-- Category -->
      <FormSelect
        :modelValue="post"
        :options="categories"
        input-label="Category"
        input-name="category"
        validation-rules="required"
      />

      <!-- Content -->
      <FormTextArea
        :modelValue="post"
        rows="10"
        input-label="Content"
        input-name="body"
        validation-rules="required|min:50"
      />

      <!-- Thumbnail link -->
      <FormInput
        :modelValue="post"
        input-label="Thumbnail link"
        input-name="thumbnailLink"
        input-type="url"
      />

      <button
        type="submit"
        class="w-full py-2 font-bold text-white bg-emerald-500 rounded hover:shadow-lg transition-all"
      >
        Post
      </button>
    </form-base>
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
      categories: categories,
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("addPost", this.post);
      this.$router.push("/posts");
    },
  },
};
</script>
