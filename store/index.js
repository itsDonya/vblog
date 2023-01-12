export const state = () => ({
  userLoggedIn: true,
  posts: [],
});

export const mutations = {
  addPost(state, post) {
    state.posts.push(post);
  },
  setPosts(state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    const res = await $axios.$get(
      "https://vblog-vue-default-rtdb.firebaseio.com/posts.json"
    );
    const postsArray = [];
    for (const key in res) {
      postsArray.push({ ...res[key] });
    }
    commit("setPosts", postsArray);
  },
  addPost({ state, commit }, postDetails) {
    // Post details => title, author, category, date, body, thumbnailLink
    const post = {
      id: state.posts.length + 1,
      ...postDetails,
    };

    this.$axios.$post(
      "https://vblog-vue-default-rtdb.firebaseio.com/posts.json",
      post
    );

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
