import Vue from "vue";

function format(text) {
  const editedText = text.substring(0, 120);
  return `${editedText}...`;
}

function formatText(value) {
  return format(value);
}

Vue.filter("substringText", formatText);
