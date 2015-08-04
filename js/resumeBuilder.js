
var bio = {

	"Name":"Ricky Arora",
	"Role": "FRONTEND WEB DEVELOPER",
	"welcomeMessage": "Welcome to my website. Here you will find a copy of my resume. Link to my Contact Information, Github Account & Projects I have completed.",
	"Skills": ["Bootstrap", "HTML", "Javascript", "CSS", "jQuery", "HTML5", "bug Test"] ,
	"contact" : {

		"Cellphone" : "647-287-3777  ",
		"emailAddress" : "rickprogramming@gmail.com  ",
		"Github" : "https://github.com/RickArora/",
		"twitter" : "@RickProg  ",
		"location" : " Brampton, Ontario",
		"Biopic" : "Images/Twitcon.jpg"
	
	}
};

var formattedName = HTMLheaderName.replace("%data%", bio.Name);
var formattedRole = HTMLheaderRole.replace("%data%", "FRONTEND WEBDEVELOPER");
var formattedWel = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.Cellphone);
var formattedemail = HTMLemail.replace("%data%", bio.contact.emailAddress);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedgithub = HTMLgithub.replace("%data%", bio.contact.Github);
var formattedlocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedbipic = HTMLbioPic.replace("%data%", bio.contact.Biopic);
var formattedskills = HTMLskills.replace("%data%", bio.Skills);
var formattedskillsStart = HTMLskillsStart.replace("%data%", bio.Skills);

$("#header").prepend(formattedWel);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedemail);
$("#header").prepend(formattedtwitter);
$("#header").prepend(formattedgithub);
$("#header").prepend(formattedlocation);
$("#header").prepend(formattedbipic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var projects = {
	"Projects": [
		{
			"Title": "Portfolio Website",
			"Site": "RickyArora.com", 
			"Dates": "2015",
			"Description": "Built the basis of my portfolio website using bootstrap, html5 & css.",
		"Images": [
		"Images/p1.png"]

		}
	]
};


var work = {
	"jobs": [
	{
		"employer": "JH Computers",
		"title": "Computer Technician",
		"dates": "March 2015 - July 2015 (Co-Op Position)",
		"description": "Repaired Computers by testing hard drives, testing all the hardware, installing programs and reformatting Computers. Also assisted with customer service.",
		"location": "50 Kennedy Rd S, Brampton, ON L6W 3E7, Canada"
		}
	]
}

/* work.jobPos = "Computer Technician"

work.jobEmployer = "*******"

work.jobYear = "Feb 2015 - July 2015 (CO-OP Position)"

work.jobCity = "******"

work.jobDescript = "Repaired computer hardware, reinstalled OS's, dealt with customers."

*/

var education = {

	"schools" : [
		{
			"name": "Sheridan College",
			"degree": "Computers Systems Technician (Complete in - 2017)",
			"location": "Sheridan College, Brampton, Ontario, Canada",
			"major": "Computer programming",
			"dates": "2015-2017",

		},
	],
		"onlineCourses" : [
		{
			"title": "Intro to HTML & CSS",
			"school": "Udacity",
			"year": "2015",
			"url": "do later",

			"title":"How to use Git & Github",
			"school": "Udacity",
			"year": "2015",
			"url":"fill",

			"title": "Responsive Images" ,
			"school": "Udacity",
			"year": "2015",
			"url":"fill",


			"title": "Responsive Web Design Fundumentals",
			"school": "Udacity", 
			"year": "2015",
			"url":"fill",


			"title": "Javascript Basics",
			"school": "Udacity",
			"year": "2015",
			"url":"fill",

		}

	]	
};


if (bio.Skills.length > 0) { 
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.Skills[0]);
	$("#skills").append(formattedSkill);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.Skills[1]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.Skills[2]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.Skills[3]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.Skills[4]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.Skills[5]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.Skills[6]);
	}


for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDateDescription = formattedlocation + formattedDate + formattedDescription;
	$(".work-entry:last").append(
		formattedEmployerTitle);
	$(".work-entry:last").append(
		formattedDateDescription);
};

var displayWork = function(){

	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].Location);
	var formattedDateDescription = formattedLocation + formattedDate + formattedDescription;
	$(".work-entry:last").append(
		formattedEmployerTitle);
	$(".work-entry:last").append(
		formattedDateDescription);
}


}

//displayWork();

$(document).click(function(loc) { 

	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});



name = HTMLheaderName

function inName(name) {
	name = $("#name").text();
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];

}

$('#header').prepend(internationalizeButton)


	for (project in projects.Projects) {
		$('#projects').append(HTMLprojectStart)		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.Projects[project].Title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.Projects[project].Dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.Projects[project].Description);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.Projects[project].Images);
		var formattedDescriptionImage = formattedImage + formattedDates + formattedDescription + formattedTitle;

		$("#projects").append(formattedDescriptionImage); 
}

$('#mapDiv').append(googleMap);

$('#footerContacts').append(bio.contact.twitter);
$('#footerContacts').append(bio.contact.Cellphone);
$('#footerContacts').append(bio.contact.emailAddress);


$("#education").append(HTMLschoolStart)
var formattedName = HTMLschoolStart.replace("%data%", education.schools.name);
var formattedDegree = HTMLschoolStart.replace("%data%", education.schools.degree);
var formattedDates = HTMLschoolStart.replace("%data%", education.schools.dates);
var formattedLocation = HTMLschoolStart.replace("%data%", education.schools.location);
var formattedMajor = HTMLschoolStart.replace("%data%", education.schools.major);

var formattedSchool = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;

$('#education').append(formattedSchool);



var onlineCourse = function() { 
	for (onCourse in education.onlineCourses)
		$("education").append(HTMLonlineClasses)
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onCourse].title);
		var formattedtSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onCourse].school);
		var formattedtDate = HTMLonlineDates.replace("%data%",education.onlineCourses[onCourse].year);
		var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[onCourse].url);

		var formattedOnline = formattedTitle + formattedtSchool + formattedUrl + formattedDate;

$("#education").append(formattedOnline);

}





