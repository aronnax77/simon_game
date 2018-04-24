var snd1 = new Audio("audio/simonSound1.mp3");
var snd2 = new Audio("audio/simonSound2.mp3");
var snd3 = new Audio("audio/simonSound3.mp3");
var snd4 = new Audio("audio/simonSound4.mp3");


var LightPad = {
  template: "#light-pad",
  props: ["bg"]
};

var main = new Vue({
  el: "#simon-app",
  data: {
    duration: 2000,
    bg1: "#00a74a", // #2fc170
    bg2: "#9f0f17", // #c7202a
    bg3: "#cca707", // #e5c01f
    bg4: "#094a8f"  // #1d6abc
  },
  components: {
    "light-pad": LightPad
  },
  methods: {
    activatePad: function(pad) {
      switch(pad) {
        case 1:
          this.bg1 = "#2fc170";
          snd1.play();
          setTimeout(function() {
            main.bg1 = "#00a74a";
          }, this.duration);
          break;
        case 2:
          this.bg2 = "#c7202a";
          snd2.play();
          setTimeout(function() {
            main.bg2 = "#9f0f17";
          }, this.duration);
          break;
        case 3:
          this.bg3 = "#e5c01f";
          snd3.play();
          setTimeout(function() {
            main.bg3 = "#cca707";
          }, this.duration);
          break;
        case 4:
          this.bg4 = "#1d6abc";
          snd4.play();
          setTimeout(function() {
            main.bg4 = "#094a8f";
          }, this.duration);
      }
    }
  }
});
