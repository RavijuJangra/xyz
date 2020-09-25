class ground{
    constructor(x, y, width, height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display(){
        rectMode(CENTER);
        var position = this.body.position;
        fill("red");
        rect(position.x, position.y, this.width, this.height);

    }
    


}