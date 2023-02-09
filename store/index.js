// Dependecies
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

export const state = () => ({
  userLoggedIn: true,
  fetched: false,
  posts: null,
  // posts: [
  // {
  //   title: "Anything you should know about the cats",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, optio soluta illum nobis provident debitis qui sint quos possimus blanditiis culpa, quas ipsa dolores quae iure praesentium est sit ea dignissimos hic modi! Nesciunt ratione natus itaque repudiandae veritatis? Dignissimos dolorem est velit nulla libero nobis fuga, obcaecati dolor eius sint. Cumque nesciunt dignissimos natus inventore ad iusto voluptatibus at. At quia praesentium atque sed nihil officiis, amet distinctio asperiores, accusamus et aut vel molestias sunt repudiandae temporibus autem labore quasi reiciendis quisquam! Amet, perspiciatis temporibus. Repellendus animi, distinctio similique quaerat quas totam vero, dolor laboriosam ut ipsam neque! Odio enim perspiciatis ab omnis mollitia velit tenetur dolor consectetur inventore placeat, nostrum quasi reiciendis et quas. Quo, culpa. Deserunt tempora ducimus eius maxime ipsa aliquid enim fuga at corrupti, nemo exercitationem nesciunt asperiores laborum est dolorum recusandae autem tempore praesentium molestiae. Veniam impedit tenetur cum beatae delectus fugit. Laudantium eos dolorum libero officia, suscipit blanditiis harum voluptatem nesciunt minima voluptas temporibus assumenda aliquid excepturi aliquam facere reiciendis tenetur, sed impedit at quisquam quam. Aut ducimus odit laudantium tenetur, nobis odio reiciendis enim sed perferendis nam nemo, quas, molestiae repellendus. Nostrum, incidunt! Voluptate nemo blanditiis quaerat ut sapiente voluptas veniam sint!",
  //   author: "Donya Davoodi",
  //   category: "animals",
  //   date: "Thu Dec 18 2022 01:02:01 GMT+0330 (Iran Standard Time)",
  //   thumbnailLink:
  //     "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=400",
  // },
  // ],
});

export const mutations = {
  addPost(state, post) {
    if (state.fetched) {
      state.posts.unshift(post);
    }
  },
  setPosts(state, posts) {
    state.posts = posts;
    state.fetched = true;
  },
};

export const actions = {
  fetchPosts({ commit }) {
    const firebaseConfig = {
      databaseURL: "https://vblog-vue-default-rtdb.firebaseio.com",
    };
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    const postsRef = ref(db, `posts`);
    let receivedPosts = [];
    onValue(postsRef, (snapshot) => {
      const posts = snapshot.val();
      for (let postID in posts) {
        const postDetails = posts[postID];
        receivedPosts.unshift({
          fbID: postID,
          ...postDetails,
        });
      }
      commit("setPosts", receivedPosts);
    });
  },

  addPost({ commit }, postDetails) {
    // Send post details to firebase
    this.$axios.$post(
      `https://vblog-vue-default-rtdb.firebaseio.com/posts.json`,
      postDetails
    );

    commit("addPost", postDetails);
  },

  editPost(editedPost) {
    this.$axios.$patch(
      `https://vblog-vue-default-rtdb.firebaseio.com/posts/${editedPost.fbID}.json`,
      { ...editedPost, edited: true, editDate: new Date() }
    );
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
    const posts = state.posts.filter((post) => post.category === categoryName);
    return posts.length;
  },
};
