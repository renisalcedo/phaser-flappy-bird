const loadState = {
  preload: function() {
    // Loading text with styles
    let loadingLabel = Game.add.text(80, 150, 'loading...', 
                                    {font: '30px Courier', fill: '#ffffff'});

    // All preloading assets
    this.load.image('bird', 'assets/images/bird.png');
    this.load.image('background', 'assets/images/bg.png');
    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('tube1', 'assets/images/tube1.png');
    this.load.image('tube2', 'assets/images/tube2.png');
    this.load.image('start', 'assets/images/start.png');
    // Music from http://opengameart.org
    this.load.audio('gameplay', 'assets/sound/gameplay.ogg');
    this.load.audio('point', 'assets/sound/point.wav');
  },

  create: function() {
    playState.startResponsive();
    // Call the menu state
    Game.state.start('menu');
  }
};
