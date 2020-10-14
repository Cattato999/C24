class dustbin {
    constructor(x,y,width,height,options){
        var options = {
            isStatic: true, restitution: 0.3, friction: 0.5, density: 1.2
        }
    }
}
display(){
    rect(250, 610, 20, 100, {isStatic:true});
	fill(255);

	rect(430, 610, 20, 100, {isStatic:true});
	fill(255);
	
	rect(340, 650, 200, 20, {isStatic:true});
	fill(255);
	
}