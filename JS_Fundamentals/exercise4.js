let suspects = [ "Mr. White", "Ms. Scarlet", "Col. Mustard" ];

let createSuspect = (suspect) => ({
	name: suspect,
	color: suspect.split(" ")[1],
	say() 
	{
		console.log(`hi i am ${suspect}`);
	}
});

let _ = {
	each(list, callback) {
		if(Array.isArray(list))
			for(let item of list) {
				callback(item);
			}
		else
			for(let item in list) {
				callback(item);
			};
	}
};

_.each(suspects, (thing) => {
	console.log(`${thing}`);
});
