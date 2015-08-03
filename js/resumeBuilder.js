
var bio = {

	"Name":"Ricky Arora",
	"Role": "FRONTEND WEB DEVELOPER",
	"welcomeMessage": "Hi, welcome to my website. Here you will find a copy of my resume, link to my Github account, projects and person tools I use.",
	"Skills": ["Bootstrap", "HTML", "Javascript", "CSS", "jQuery", "HTML5", "bug Test"] ,
	"contacts": [
		{

		"Cellphone": "fakenumber",
		"emailAddress": "professional@email.com",
		"twitter": "Twitter@twitter.com",
		"Location": "****,Ontario,Canada.", 
		"Github": "Link to github",
		"Twitter": "Link to twitter",
		"location": "brampton, Ontario, Canada"
	}
	]

};

var formattedName = HTMLheaderName.replace("%data%", bio.Name);
var formattedRole = HTMLheaderRole.replace("%data%", "FRONTEND WEBDEVELOPER");

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
		"Images/fry.jpg"]

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
		"Location": "Brampton,Ontario,Canada"
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
			"name": "Private School",
			"city": "Private City",
			"credential": "highschooldiploma"
		},
	],
		"onlineCourses" : [
		{
			"title": "Intro to HTML & CSS",
			"school": "Udacity",
			"year": "2015",
			"url": "do later"
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
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].Location);
	var formattedDateDescription = formattedLocation + formattedDate + formattedDescription;
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




