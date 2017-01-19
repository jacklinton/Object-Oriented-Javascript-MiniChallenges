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
		console.log(this.albumPhotos[number])
	}

}

function Photo(name, location) {

 	this.name = name
 	this.location = location

}

var GDTour = new Album()

var firstPic = new Photo("philandfriends.jpg", "Redrocks Amphitheater")
var secondPic = new Photo("ratdog.jpg", "Asbury Park")
var thirdPic = new Photo("Further", "The Mann")

GDTour.addPhoto(firstPic)
GDTour.addPhoto(secondPic)
GDTour.addPhoto(thirdPic)

console.log("The photos in the album include:")
console.log(GDTour.listPhotos())


console.log("The second photo entered was:")
console.log(GDTour.whichPhoto(2))
console.log("The third photo entered was:")
console.log(GDTour.whichPhoto(3))


// Question 3

function Person(name, birthday, language, country) {

	this.name = name
	this.birthday = birthday
	this.language = language 
	this.country = country

}

function Student(fulltime, GPA, financialsupport) {

	this.fulltime = fulltime
	this.GPA = GPA
	this.financialsupport = financialsupport

}

function Teacher(specialization, degree, tenure) {

	this.specialization = specialization
	this.degree = degree
	this.tenure = tenure

}

Student.prototype = new Person()
Teacher.prototype = new Person()

function School(name, location, university, students, faculty) {

	this.name = name
	this.location = location
	this.university = university
	this.students = students
	this.faculty = faculty

}

var std1 = new Student()
std1.name = "Fred Johnson"
std1.birthday = "10/30/1998"
std1.language = "English"
std1.country = "USA"
std1.fulltime = true
std1.GPA = "2.8"
std1.financialsupport = true

var std2 = new Student()
std2.name = "Althea Rose"
std2.birthday = "2/22/2002"
std2.language = "French"
std2.country = "France"
std2.fulltime = true
std2.GPA = "3.6"
std2.financialsupport = false

var std3 = new Student()
std3.name = "Standing Bull"
std3.birthday = "6/03/1999"
std3.language = "Cherokee"
std3.country = "USA"
std3.fulltime = true
std3.GPA = "3.9"
std3.financialsupport = true

var tch1 = new Teacher()
tch1.name = "China Doll"
tch1.birthday = "4/027/1963"
tch1.language = "Mandarin"
tch1.country = "China"
tch1.specialization = "Abnormal Psychology"
tch1.degree = "Masters"
tch1.tenure = true

var tch2 = new Teacher()
tch2.name = "Lucius Tarkinton"
tch2.birthday = "8/07/1951"
tch2.language = "English"
tch2.country = "USA"
tch2.specialization = "Computer Science"
tch2.degree = null
tch2.tenure = false

var sch1 = new School
sch1.name = "NYCDA"
sch1.location = "Swiss Alps"
sch1.university = false
sch1.students = [std1, std2, std3]
sch1.faculty = [tch1, tch2]

console.log("Student #1 is:", std1.name)
console.log("All the students at ", sch1.name, " are: ", sch1.students)
console.log("The faculty at ", sch1.name, " are:",sch1.faculty)
console.log("The GPA of ", std3.name, " was ", std3.GPA)

