var LightPad = {
  template: "#light-pad",
  props: ["bg"]
};

var main = new Vue({
  el: "#simon-app",
  data: {
    bg1: "#00a74a", // #2fc170
    bg2: "#9f0f17", // #c7202a
    bg3: "#cca707", // #e5c01f
    bg4: "#094a8f"  // #1d6abc
  },
  components: {
    "light-pad": LightPad
  },
  methods: {
    handleUser: function(pad) {
      switch(pad) {
        case 1:
          this.bg1 = "#2fc170";
          break;
        case 2:
          this.bg2 = "#c7202a";
          break;
        case 3:
          this.bg3 = "#e5c01f";
          break;
        case 4:
          this.bg4 = "#1d6abc";
      }
    }
  }
});
