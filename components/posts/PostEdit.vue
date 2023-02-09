<template>
  <form-base form-title="Edit post" :on-submit="onSubmit">
    <!-- Title -->
    <FormInput
      input-label="Post title"
      input-name="title"
      input-type="text"
      :modelValue="editedPost"
      validation-rules="required"
    />

    <!-- Author -->
    <FormInput
      input-label="Author name"
      input-name="author"
      input-type="text"
      :modelValue="editedPost"
      validation-rules="required"
    />

    <!-- Category -->
    <FormSelect
      input-label="Category"
      input-name="category"
      :options="categories"
      :modelValue="editedPost"
      :selectedOption="category"
      validation-rules="required"
    />

    <!-- Content -->
    <FormTextArea
      input-label="Content"
      input-name="body"
      rows="10"
      :modelValue="editedPost"
      validation-rules="required|min:50"
    />

    <!-- Thumbnail link -->
    <FormInput
      input-label="Thumbnail link"
      input-name="thumbnailLink"
      input-type="url"
      :modelValue="editedPost"
    />

    <button
      type="submit"
      class="w-full py-2 text-white bg-emerald-500 rounded-lg font-bold"
    >
      Save
    </button>
  </form-base>
</template>

<script>
import categories from "../../static/categories";
export default {
  data() {
    return {
      editedPost: {
        fbID: this.fbID,
        title: this.title,
        body: this.body,
        author: this.author,
        category: this.category,
        date: this.date,
        thumbnailLink: this.thumbnailLink,
      },
      categories: categories,
    };
  },
  props: {
    fbID: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    thumbnailLink: {
      type: String,
      required: true,
    },
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("editPost", this.editedPost);
      this.$router.push("/posts");
    },
  },
};
</script>
