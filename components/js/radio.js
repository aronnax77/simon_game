var radio = {
  template: "#radio",
  props: ["picked"]
}

new Vue({
  el: "#app",
  data: {
    picked: ""
  },
  components: {
    "radio-group": radio
  }
});
