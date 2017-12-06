const gameOver = {
  create: function() {
    playState.startResponsive();
    console.log('YOU Lost!');
  },

  restart: function() {
    Game.state.start('menu');
  }
}
