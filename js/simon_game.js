var snd1 = new Audio("audio/simonSound1.mp3");
var snd2 = new Audio("audio/simonSound2.mp3");
var snd3 = new Audio("audio/simonSound3.mp3");
var snd4 = new Audio("audio/simonSound4.mp3");
var snd5 = new Audio("audio/pipe9.wav");
var snd6 = new Audio("audio/record-scratch-short.wav");


var LightPad = {
  template: "#light-pad",
  props: ["bg"]
};

Vue.component('modal', {
      template: '#modal'
});

var main = new Vue({
  el: "#simon-app",
  data: {
    nextInSequence: undefined,
    settingsEnabled: true,
    compEnabled: false,         // computer play enabled?
    userEnabled: false,         // user play enabled?
    gameEnabled: false,
    state: "Start",
    duration: 1200,             // duration of computer play
    counter: "00",
    level: 3,                   // initial value of level (change to 10)
    gameSequence: [],           // users sequence
    userSequence: [],
    strict: false,
    bg1: "#00a74a", // #2fc170
    bg2: "#9f0f17", // #c7202a
    bg3: "#cca707", // #e5c01f
    bg4: "#094a8f",  // #1d6abc
    showModal: false,
    error: false,
    success: false
  },
  components: {
    "light-pad": LightPad
  },
  methods: {
    startGame: function() {
      if(!this.gameEnabled) {
        this.settingsEnabled = false;
        this.compEnabled = true;
        this.gameEnabled = true;
        this.state = "Reset";
        this.compPlay();
      } else {
        this.reset();
      }
    },
    reset: function() {
      alert("reset");
    },
    compPlay: function() {
      var count = 1;
      this.setCounter(count);
      this.generateSequence();
      this.playSequence();
    },
    userPlay: function() {
      this.userEnabled = true;
    },
    playSequence: function() {
      this.nextInSequence = 0;
    },
    setCounter: function(cnt) {
      if(cnt < 10) {
        this.counter = "0" + cnt;
      } else {
        this.counter = cnt;
      }
    },
    generateSequence: function() {
      var x = 0;
      var temp;
      while( x < this.level ) {
        temp = Math.floor((Math.random() * 4)) + 1;
        this.gameSequence.push(temp);
        x++;
      }
    },
    showSettings: function() {
      if(this.settingsEnabled) {
        this.showModal = true;
      }
    },
    userActivatePad: function(pad) {
      if(this.userEnabled) {
        var temp = this.duration;
        this.duration = 100;
        this.activatePad(pad);
        this.duration = temp;
      }
    },
    activatePad: function(pad) {
      switch(pad) {
        case 1:
          this.bg1 = "#2fc170";
          snd1.play();
          console.log("pink");
          setTimeout(function() {
            main.bg1 = "#00a74a";
            main.handleCase(1);
          }, this.duration);
          break;
        case 2:
          this.bg2 = "#c7202a";
          snd2.play();
          setTimeout(function() {
            main.bg2 = "#9f0f17";
            main.handleCase(2);
          }, this.duration);
          break;
        case 3:
          this.bg3 = "#e5c01f";
          snd3.play();
          setTimeout(function() {
            main.bg3 = "#cca707";
            main.handleCase(3);
          }, this.duration);
          break;
        case 4:
          this.bg4 = "#1d6abc";
          snd4.play();
          setTimeout(function() {
            main.bg4 = "#094a8f";
            main.handleCase(4);
          }, this.duration);
      }
    },
    handleCase: function(caseNum) {
      if(main.compEnabled && main.nextInSequence < main.counter) {
        main.nextInSequence++;
      } else if(main.userEnabled && main.userSequence.length < main.counter) {
        main.userSequence.push(caseNum);
        main.checkUserChoice(caseNum);
      }
      if(main.nextInSequence == main.counter) {
        main.nextInSequence = undefined;
        main.compEnabled = false;
        main.userPlay();
      }
      if(main.userSequence.length == main.counter) {
        main.userEnabled = false;
        if(!main.error && main.counter < main.level) {
          main.setCounter(parseInt(main.counter, 10) + 1);
          main.compEnabled = true;
          setTimeout(function() {
            main.playSequence();
            main.userSequence = [];
          }, 1200);
        }
      }
      if(main.userSequence.length === main.level) {
        main.success = true;
      }
    },
    checkUserChoice: function(num) {
      if(num !== main.gameSequence[main.userSequence.length - 1]) {
        main.error = true;
        main.userEnabled = false;
        main.compEnabled = true;
        setTimeout(function() {
          main.playSequence();
          main.userEnabled = true;
          main.userSequence = [];
        }, 1500);
      } else {
        if(main.error) {
          main.error = false;
        }
      }
    }
  },
  watch: {
    nextInSequence: function() {
        this.activatePad(this.gameSequence[this.nextInSequence]);
    }
  }
});
