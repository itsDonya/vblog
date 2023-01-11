import Vue from "vue";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function format(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDay();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const fullDate = `${month} ${day}, ${year}`;
  return fullDate;
}

const formatDate = (value) => {
  return format(value);
};

Vue.filter("filterDate", formatDate);
