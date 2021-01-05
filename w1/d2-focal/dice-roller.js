function diceroller(num){
	for (let i = 0; i <= num-1;  i++) {
		let dice = Math.floor(6*Math.random())+1;
		console.log(dice)
	};
};
diceroller(3);