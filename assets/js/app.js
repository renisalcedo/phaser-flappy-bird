// Initial setup for the game
const Game = new Phaser.Game(840, 600, Phaser.AUTO);

const GameState = {
  // Loads the game assets before the game starts
  preload: function() {
    this.load.image('bird', 'assets/images/bird.png');
    this.load.image('background', 'assets/images/bg.png');
    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('tube1', 'assets/images/tube1.png');
    this.load.image('tube2', 'assets/images/tube2.png');
  },

  create: function() {
    const gravityVal = 500;
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

    // The bird in the game
    this.bird = this.game.add.sprite(Game.height-400, Game.height/2, 'bird')

    this.startPhysics([this.bird, this.ground]);

    // Activates collision and gravity for bird
    this.bird.body.collideWorldBounds = true;
    this.bird.body.gravity.y = gravityVal;

    // Activates collision for ground
    this.ground.body.collideWorldBounds = true;
    this.ground.checkCollision.up = false;
    this.ground.checkCollision.down = false;
    this.ground.body.immovable = true;
  },

  update: function() {
    Game.physics.arcade.collide(this.bird, this.ground);
  },


  // Adds Physics and Gravity to game
  startPhysics: function(el) {
    // Starts the physics on game and sets value for gravity
    Game.physics.startSystem(Phaser.Physics.ARCADE);
    // Enables physics on element on game
    Game.physics.enable(el, Phaser.Physics.ARCADE);
  }
};


Game.state.add('GameState', GameState);
Game.state.start('GameState');
