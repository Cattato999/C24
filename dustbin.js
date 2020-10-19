class dustbin {
    constructor(x,y,width,height,options){
        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=213;
        this.wallThickness=20;
        var options = {
            isStatic: true
        }
        this.leftBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
    
        this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
        
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbin, this.wallThickness, {isStatic:true});

        Bodies.rectangle
        
    }
}
display(){
	rect(x,y,width,height,options);
}
