var chBox = {
  template: "#box",
  data: function() {
    return {
      checkedNames: []
    };
  },
  methods: {
    procData: function(v) {
      alert("in procData " + v);
      /*this.$emit("change", this.checkedNames);*/
    }
  }
};

new Vue({
  el: '#app',
  data: {
    arr: []
  },
  components: {
    "checkbox-comp": chBox
  }
});
