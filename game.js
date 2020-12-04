class Game{
    constructor(){

    }

    getState(){
        var gameStateref = database.ref("gameStates")
        gameStateref.on("value", function (data){
            gameState : data.val()
        })
    }
    Update(state){
database.ref('/').update({
gameStates: state
})
}

start(){
    if(gameState === 0){
        player = new Player();
        player.getCount ();
        form = new Form();
        form.display();
    }
}
    
}