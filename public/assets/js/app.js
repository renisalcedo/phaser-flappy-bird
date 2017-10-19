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
    // Adds Responsiveness to the game
    this.startResponsive();

    // Has on sprites on the game
    this.startSprites();

    // Starts physics
    this.startPhysics([this.bird, this.ground]);

    // Activates collision and gravity for bird
    this.bird.body.collideWorldBounds = true;

    // Activates collision for ground
    // this.ground.body.collideWorldBounds = true;

    // Makes the ground immovable when collided
    this.ground.body.immovable = true;

    // Register the keys
    this.spaceKey = Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },

  update: function() {
    if(Game.physics.arcade.collide(this.bird, this.ground)) {
      this.bird.destroy();
    }

    // Will make the bird fly
    if(this.spaceKey.isDown) {
      this.bird.body.velocity.y = -100;
    }

    // Will keep the world moving to the left
    this.ground.body.velocity.x = -200;

    // Will send bird back when outside of bounds
    // Game.world.wrap(this.bird, 0, true);
  },


  // Adds Physics and Gravity to game
  startPhysics: function(el, addGravity) {
    // Enables physics on element on game
    Game.physics.startSystem(Phaser.Physics.ARCADE);

    // Enable physics on certain elements
    Game.physics.enable(el, Phaser.Physics.ARCADE);

    // Add a value 500 gravity in the bird
    const gravityVal = 500;
    this.bird.body.gravity.y = gravityVal;
  },

  // Adds responsiveness to the game
  startResponsive: function() {
   // SHOW_ALL makes the game fit the screen but keeps aspect ratio
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },

  startSprites: function() {
    const infiniteMap = 1000000000;

    // Adds background to game
    this.background = this.game.add.sprite(0, 0, 'background');
    this.background.scale.setTo(3, 1.4);

    // Adds ground below background to game
    this.ground = this.game.add.tileSprite(0, 500, infiniteMap, 0, 'ground');
    this.ground.scale.setTo(2.5, 1);

    // The bird in the game
    this.bird = this.game.add.sprite(Game.height-400, Game.height/2, 'bird')
  }
};


Game.state.add('GameState', GameState);
Game.state.start('GameState');
