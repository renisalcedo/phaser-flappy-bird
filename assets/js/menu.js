const menuState = {
  create: function() {
    // Will start the responsiveness on the menu
    playState.startResponsive();

    // Start Sprites
    this.startSprites();

    // Start physics on the objects
    playState.startPhysics([Game.bird, Game.ground]);

    //this.background = this.game.add.sprite(0, 0, 'start');

    let nameLabel = Game.add.text(170, 180, "Press spacebar to Play!",
                                 {font: '50px Arial', fill: '#fff'});

    // allow p key usage on game
    spaceKey = Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    // sets p key as key to start game
    spaceKey.onDown.addOnce(this.start, this);
  },

  update: function() {
    // Will keep the world moving to the left
    Game.ground.body.velocity.x = -200;
  },

  startSprites: function() {
    const infiniteMap = 1000000000;

    // Adds background to game
    Game.background = Game.add.sprite(0, 0, 'background');
    Game.background.scale.setTo(3, 1.4);

    // Adds ground below background to game
    Game.ground = Game.add.tileSprite(0, 500, infiniteMap, 0, 'ground');
    Game.ground.scale.setTo(2.5, 1);

    // The bird in the game
    Game.bird = Game.add.sprite(Game.height-400, Game.height/2, 'bird');
  },

  start: function() {
    Game.state.start('play');
  },
};
