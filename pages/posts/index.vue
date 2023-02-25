<template>
  <article class="min-h-full py-6 flex items-center justify-center">
    <PostList v-if="posts" :posts="posts" />
    <LoaderIcon v-else />
  </article>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
  mounted() {
    // if (!this.$store.state.fetched) {
    //   this.$store.dispatch("fetchPosts");
    // }
    const post = {
      title: "Anything you should know about the cats",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, optio soluta illum nobis provident debitis qui sint quos possimus blanditiis culpa, quas ipsa dolores quae iure praesentium est sit ea dignissimos hic modi! Nesciunt ratione natus itaque repudiandae veritatis? Dignissimos dolorem est velit nulla libero nobis fuga, obcaecati dolor eius sint. Cumque nesciunt dignissimos natus inventore ad iusto voluptatibus at. At quia praesentium atque sed nihil officiis, amet distinctio asperiores, accusamus et aut vel molestias sunt repudiandae temporibus autem labore quasi reiciendis quisquam! Amet, perspiciatis temporibus. Repellendus animi, distinctio similique quaerat quas totam vero, dolor laboriosam ut ipsam neque! Odio enim perspiciatis ab omnis mollitia velit tenetur dolor consectetur inventore placeat, nostrum quasi reiciendis et quas. Quo, culpa. Deserunt tempora ducimus eius maxime ipsa aliquid enim fuga at corrupti, nemo exercitationem nesciunt asperiores laborum est dolorum recusandae autem tempore praesentium molestiae. Veniam impedit tenetur cum beatae delectus fugit. Laudantium eos dolorum libero officia, suscipit blanditiis harum voluptatem nesciunt minima voluptas temporibus assumenda aliquid excepturi aliquam facere reiciendis tenetur, sed impedit at quisquam quam. Aut ducimus odit laudantium tenetur, nobis odio reiciendis enim sed perferendis nam nemo, quas, molestiae repellendus. Nostrum, incidunt! Voluptate nemo blanditiis quaerat ut sapiente voluptas veniam sint!",
      authorUsername: "Donya Davoodi",
      category: "animals",
      date: "Thu Dec 18 2022 01:02:01 GMT+0330 (Iran Standard Time)",
      thumbnailLink:
        "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=400",
    };
    fetch(`https://vblog-vue-default-rtdb.firebaseio.com/posts.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  },
};
</script>
