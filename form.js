class Form{
    constructor(){

    }
    display(){
        var title = createElement ("h2");
        title.html ("Car Racing Game")
        title.position (160,120)

        var input = createInput("name")
        var button = createButton("Play")
        var greeting = createElement("h3")

        input.position(130,160)
        button.position(250,200)
        
        button.mousePressed(function (){
            input.hide()
            button.hide()

            var name = input.value ()
            playerCount++
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Welcome To The Game"+name)
            greeting.position (130,130)

        })
    }
}