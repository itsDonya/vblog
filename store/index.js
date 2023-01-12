export const state = () => ({
  userLoggedIn: true,
  posts: [
    {
      id: 1,
      title: "My amazing post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, optio soluta illum nobis provident debitis qui sint quos possimus blanditiis culpa, quas ipsa dolores quae iure praesentium est sit ea dignissimos hic modi! Nesciunt ratione natus itaque repudiandae veritatis? Dignissimos dolorem est velit nulla libero nobis fuga, obcaecati dolor eius sint. Cumque nesciunt dignissimos natus inventore ad iusto voluptatibus at. At quia praesentium atque sed nihil officiis, amet distinctio asperiores, accusamus et aut vel molestias sunt repudiandae temporibus autem labore quasi reiciendis quisquam! Amet, perspiciatis temporibus. Repellendus animi, distinctio similique quaerat quas totam vero, dolor laboriosam ut ipsam neque! Odio enim perspiciatis ab omnis mollitia velit tenetur dolor consectetur inventore placeat, nostrum quasi reiciendis et quas. Quo, culpa. Deserunt tempora ducimus eius maxime ipsa aliquid enim fuga at corrupti, nemo exercitationem nesciunt asperiores laborum est dolorum recusandae autem tempore praesentium molestiae. Veniam impedit tenetur cum beatae delectus fugit. Laudantium eos dolorum libero officia, suscipit blanditiis harum voluptatem nesciunt minima voluptas temporibus assumenda aliquid excepturi aliquam facere reiciendis tenetur, sed impedit at quisquam quam. Aut ducimus odit laudantium tenetur, nobis odio reiciendis enim sed perferendis nam nemo, quas, molestiae repellendus. Nostrum, incidunt! Voluptate nemo blanditiis quaerat ut sapiente voluptas veniam sint!",
      thumbnailLink:
        "https://images.unsplash.com/photo-1672181256696-43f7c75ea4a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      author: "Mike Jackson",
      date: "Thu Jan 10 2023 01:02:01 GMT+0330 (Iran Standard Time)",
      category: "technology",
    },
    {
      id: 2,
      title: "A nice post without thumbnail",
      body: "Est sit ea dignissimos hic modi! Nesciunt ratione natus itaque repudiandae veritatis? Dignissimos dolorem est velit nulla libero nobis fuga, obcaecati dolor eius sint. Cumque nesciunt dignissimos natus inventore ad iusto voluptatibus at. At quia praesentium atque sed nihil officiis, amet distinctio asperiores, accusamus et aut vel molestias sunt repudiandae temporibus autem labore quasi reiciendis quisquam! Amet, perspiciatis temporibus. Repellendus animi, distinctio similique quaerat quas totam vero, dolor laboriosam ut ipsam neque! Odio enim perspiciatis ab omnis mollitia velit tenetur dolor consectetur inventore placeat, nostrum quasi reiciendis et quas. Quo, culpa. Deserunt tempora ducimus eius maxime ipsa aliquid enim fuga at corrupti, nemo exercitationem nesciunt asperiores laborum est dolorum recusandae autem tempore praesentium molestiae. Veniam impedit tenetur cum beatae delectus fugit. Laudantium eos dolorum libero officia, suscipit blanditiis harum voluptatem nesciunt minima voluptas temporibus assumenda aliquid excepturi aliquam facere reiciendis tenetur, sed impedit at quisquam quam. Aut ducimus odit laudantium tenetur, nobis odio reiciendis enim sed perferendis nam nemo, quas, molestiae repellendus. Nostrum, incidunt! Voluptate nemo blanditiis quaerat ut sapiente voluptas veniam sint!",
      author: "Ginny luv",
      date: "Thu Feb 22 2017 01:02:01 GMT+0330 (Iran Standard Time)",
      category: "animals",
    },
    {
      id: 3,
      title: "I really hate football :(",
      body: "Suscipit blanditiis harum voluptatem nesciunt minima voluptas temporibus assumenda aliquid excepturi aliquam facere reiciendis tenetur, sed impedit at quisquam quam. Aut ducimus odit laudantium tenetur, nobis odio reiciendis enim sed perferendis nam nemo, quas, molestiae repellendus. Nostrum, incidunt! Voluptate nemo blanditiis!",
      thumbnailLink:
        "https://images.unsplash.com/photo-1672803949246-85b33371c7ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1269&q=80",
      author: "Someone",
      date: "Thu Jan 18 2020 01:02:01 GMT+0330 (Iran Standard Time)",
      category: "sports",
    },
    {
      id: 4,
      title: "Who is cat/dog person?",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, optio soluta illum nobis provident debitis qui sint quos possimus blanditiis culpa, quas ipsa dolores quae iure praesentium est sit ea dignissimos hic modi! Nesciunt ratione natus itaque repudiandae veritatis? Dignissimos dolorem est velit nulla libero nobis fuga, obcaecati dolor eius sint. Cumque nesciunt dignissimos natus inventore ad iusto voluptatibus at. At quia praesentium atque sed nihil officiis, amet distinctio asperiores, accusamus et aut vel molestias sunt repudiandae temporibus autem labore quasi reiciendis quisquam! Amet, perspiciatis temporibus. Repellendus animi, distinctio similique quaerat quas totam vero, dolor laboriosam ut ipsam neque! Odio enim perspiciatis ab omnis mollitia velit tenetur dolor consectetur inventore placeat, nostrum quasi reiciendis et quas. Quo, culpa. Deserunt tempora ducimus eius maxime ipsa aliquid enim fuga at corrupti, nemo exercitationem nesciunt asperiores laborum est dolorum recusandae autem tempore praesentium molestiae. Veniam impedit tenetur cum beatae delectus fugit. Laudantium eos dolorum libero officia, suscipit blanditiis harum voluptatem nesciunt minima voluptas temporibus assumenda aliquid excepturi aliquam facere reiciendis tenetur, sed impedit at quisquam quam. Aut ducimus odit laudantium tenetur, nobis odio reiciendis enim sed perferendis nam nemo, quas, molestiae repellendus. Nostrum, incidunt! Voluptate nemo blanditiis quaerat ut sapiente voluptas veniam sint!",
      author: "Donya Davoodi",
      date: "Thu Dec 18 2023 01:02:01 GMT+0330 (Iran Standard Time)",
      category: "animals",
    },
  ],
});

export const mutations = {
  addPost(state, post) {
    state.posts.push(post);
  },
};

export const actions = {
  addPost({ state, commit }, postDetails) {
    // Post details => title, author, category, date, body, thumbnailLink
    const post = {
      id: state.posts.length + 1,
      ...postDetails,
    };
    commit("addPost", post);
  },
};

export const getters = {
  getPosts(state) {
    return state.posts;
  },
  getPostById: (state) => (id) => {
    return state.posts.find((post) => post.id == id);
  },
  getPostByCategory: (state) => (categoryName) => {
    return state.posts.filter((post) => post.category === categoryName);
  },
};
