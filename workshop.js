console.log("We're IN!")

//Question 1

var Multiplier =  {  
	currentValue: currentValue = 1,
	
	multiply: function(number) {
		currentValue = currentValue * number
	},

	getCurrentValue: function() {
		return currentValue
	}
}

//Question 2

function Album() {
	
	this.albumPhotos = [""]
	
	this.addPhoto = function(photo) {
		this.albumPhotos.splice(this.albumPhotos.length, 0, photo)
	}
	
	this.listPhotos = function() {
		this.n = 0
		this.x = this.albumPhotos.length
		while (this.n < this.x) {
			console.log(this.albumPhotos[this.n])
			this.n += 1
		}
	}

	this.whichPhoto = function(number) {
		console.log(this.albumPhotos[number-1])
	}

}

function Photo(name, location) {

 	this.name = name
 	this.location = location

}

