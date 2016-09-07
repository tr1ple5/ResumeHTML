
//bio object
var bio = {
	name: "Derrick Ejan",
	role: "Software Developer",
	contacts: {
		mobile: "949-324-0324",
		email: "derrick.ejan@gmail.com",
		linkedin: "https://www.linkedin.com/in/derrickejan",
		location: "Orange County"
	},
	welcomeMessage: "Software Developer at Orange Coast Title Company",
	skills: ["Object Oriented","Visual Studios","WPF", "C#","SQL", "Java Script","XML"],
	biopic: "images/Me.jpg"
}


//JSON Education Object
var education = {
	"schools": [{
		"name": "DeVry University",
		"location": "Long Beach, CA, US",
		"degree": "Bachelor of Science",
		"major": "Computer Information Systems",
		"datesAttended": "2011 - 2014",
		"url": "http://DeVry.edu"
	}]
}

//JSON Work Object
var work = {
	"jobs": [{
		"employer": "Orange Coast Title Company",
		"title": "Junior Software Engineer",
		"location": "Santa Ana, CA, US",
		"datesWorked": "June 2015 - Present",
		"description": "Perform desktop application updates and fixed bugs.  Integration using webservices and SOAP.  blahblah blah blah blah blah."
	},
	{
		"employer": "Lead iD LLC",
		"title": "Junior Software Engineer",
		"location": "Newport Beach, CA, US",
		"datesWorked": "2015 - June 31, 2015",
		"description": "Perform or directed web site updates. Designed and developed a web application to support mid-path technology using ASP.NET MVC 5 and C#. "
	},
	{
		"employer": "Cox Communications",
		"title": "Sales Specialist",
		"location": "Rancho Santa Margarita, CA, US",
		"datesWorked": "2003 - May 31, 2014",
		"description": "Met and exceeded sales and revenue unit targets within a high-entensity sales function servicing inbound-calling customers, n a qouta, commission basis."
	}
	]
}

//Header Items
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
//Contact Items
var contactsArray = [];
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);
var formattedLinkedIn = formattedLinkedIn.replace("%dataLink%", bio.contacts.linkedin);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
contactsArray.push(formattedLocation,formattedLinkedIn,formattedMobile,formattedEmail);
//Add header items
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
//Loop through contact items
for(i in contactsArray){
	$("#topContacts").prepend(contactsArray[i]);
	$("#footerContacts").prepend(contactsArray[i]);
}
//Display Skills
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}
//Display Work History
if(work.jobs.length > 0){
	$("#workExperience").append(HTMLworkStart);
	//loop through jobs
	for(i in work.jobs){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
			
			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
	}
}

//Display Education 
if(education.schools.length > 0){
	$("#education").append(HTMLschoolStart);
	
	for(i in education.schools){
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
	}
}

