import Vue from "vue";

function format(name) {
  const editedName = name.split("-").join(" ");
  return editedName;
}

const splitWord = (value) => {
  return format(value);
};

Vue.filter("split", splitWord);
