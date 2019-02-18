module.exports = function main(distance, waitTime) {
    console.log("Debug Info");
    if(distance>2){
    	if(distance>8){
    		return Math.floor(6+0.8*(8-2)+1.5*(distance-8)+0.25*waitTime);
    	}
    	return Math.floor(6+0.8*(distance-2)+0.25*waitTime);
    };
    return (distance==0)?Math.floor(0.25*waitTime):Math.floor(6+0.25*waitTime);
};