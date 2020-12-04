class Player{
    constructor(){

    }
    
    getCount(){
    var playercountref = database.ref("playerCount");
    playercountref.on("value",function(data){
        playerCount = data.val()
    })

    }

    updateCount(count){
    database.ref('/').update({
        playerCount: count
    })
    }

    update(name){
        var playerIndex= "Player"+playerCount 
        database.ref(playerIndex).set({
        Name:  name
        })
    }

}