// Initial setup for the game
const Game = new Phaser.Game(840, 600, Phaser.AUTO);

let GameState = {
  // Loads the game assets before the game starts
  preload: function() {
    this.load.image('bird', 'assets/images/bird.png');
    this.load.image('background', 'assets/images/bg.png');
    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('tube1', 'assets/images/tube1.png');
    this.load.image('tube2', 'assets/images/tube2.png');
  },

  create: function() {
    // Adds Responsiveness to the game
    // SHOW_ALL makes the game fit the screen but keeps aspect ratio
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    // Adds background to game
    this.background = this.game.add.sprite(0, 0, 'background');
    this.background.scale.setTo(3, 1.4);

    // Adds ground below background to game
    this.ground = this.game.add.sprite(0, 500, 'ground');
    this.ground.scale.setTo(3, 1);

  },

  update: function() {

  }
};


Game.state.add('GameState', GameState);
Game.state.start('GameState');
