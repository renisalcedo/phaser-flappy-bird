const playState = {
  create: function() {
    // Adds Responsiveness to the game
    this.startResponsive();

    // Has on sprites on the game
    this.startSprites();

    // Game Score
    Game.score = 0;

    // Display Score
    Game.scoreLabel = Game.add.text(580, 65, `Score ${Game.score}`, {font: '50px Arial', fill: '#fff'});

    // Enables physics on game
    //Game.physics.startSystem(Phaser.Physics.ARCADE);

    // Starts physics on the objects
    this.startPhysics([this.bird, this.ground]);

    // Makes these objects inmmovable when collided
    this.setImmovable([this.ground]);

    // Adds gravity to the bird
    const gravityVal = 1000;
    this.bird.body.gravity.y = gravityVal;

    //this.bird.body.collideWorldBounds = true;

    // Activates collision for ground
    // this.ground.body.collideWorldBounds = true;

    // Register the keys
    this.spaceKey = Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },

  update: function() {
    // Bird dies on collision with ground or tubes
    if(Game.physics.arcade.collide(this.bird, this.ground)) {
      this.gameOver();
    }

    if(Game.physics.arcade.collide(this.bird, [this.tube1, this.tube2])) {
      this.gameOver();
    }

    // Ensures existence of tubes
    if(this.tube1 && this.tube2) {
      let distance = Math.floor(this.tube1.x);
      let nearBird = 230;

      if(distance >= 200 && distance <= 230) {
        console.log(distance, Game.bird.x);
      }
      // Updates score and text when bird crosses
      if(distance === nearBird) {
        Game.score += 1;
        Game.scoreLabel.setText(`Score ${Game.score}`, {font: '50px Arial', fill: '#fff'});
      }
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

  // Adds Physics to element in the game
  startPhysics: function(el) {
    // Enable physics on certain elements
    Game.physics.enable(el, Phaser.Physics.ARCADE);
  },

  // Adds responsiveness to the game
  startResponsive: function() {
   // SHOW_ALL makes the game fit the screen but keeps aspect ratio
    Game.scale.pageAlignHorizontally = true;
    Game.scale.pageAlignVertically = true;
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
    this.bird = this.game.add.sprite(Game.height-400, Game.height/2, 'bird');

    // Generate obstacles
    this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 50, this.addObstacles.bind(this));
  },

  setImmovable: function(immovable) {
    for(var i = 0; i < immovable.length; i++) {
      immovable[i].body.immovable = true;
    }
  },

  addObstacles: function() {
    // Generate obstacles
    this.tube1  = this.game.add.sprite(500, -240 + Math.random() * 200, 'tube1');
    this.tube2  = this.game.add.sprite(500, 240 + Math.random() * 200, 'tube2');

    let tubes = [this.tube1, this.tube2];

    // Sets the physics props for the tubes
    Game.physics.enable(tubes, Phaser.Physics.ARCADE);
    this.setImmovable(tubes)

    // Will give properties to the tubes
    this.setTubesProps(tubes);
  },

  // Setter for the properties of the tube
  setTubesProps: function(tubes) {
    for(let i = 0; i < tubes.length; i++) {
      tubes[i].body.velocity.x = -150;
      tubes[i].outOfBoundsKill = true;
    }
  },

  gameOver: function() {
    Game.state.start('over');
  }
};
