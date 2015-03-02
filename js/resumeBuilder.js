
var work = {
	"jobs":
		[
			{
				"employer": "Employer 1",
				"title": "Home Educator",
				"location": "Powell, OH",
				"dates": "2005 - present",
				"description": "Description 1"
			},
			{
				"employer": "Employer 2",
				"title": "Home Educator",
				"location": "Powell, OH",
				"dates": "2005 - present",
				"description": "Description 2"
			},
			{
				"employer": "Employer 3",
				"title": "Home Educator",
				"location": "Powell, OH",
				"dates": "2005 - present",
				"description": "Description 3"
			}
		]
};

var projects = {
	"project":
		[
			{
				"title": "project 1",
				"dates": "1900",
				"description": "description text 1",
				"images": ["http://placehold.it/100x100",
							"http://placehold.it/100x100",
							"http://placehold.it/100x100"]
			},
			{
				"title": "project 2",
				"dates": "1900",
				"description": "description text 2",
				"images": ["http://placehold.it/100x100",
							"http://placehold.it/100x100",
							"http://placehold.it/100x100"]
			},
			{
				"title": "project 3",
				"dates": "1900",
				"description": "description text 3",
				"images": ["http://placehold.it/100x100",
							"http://placehold.it/100x100",
							"http://placehold.it/100x100"]
			}
		]
}

var bio = {
	"name": "Connie Skomra",
	"role": "Founder",
	"contacts": {
		"mobile": "740-525-5327",
		"email": "connie@cskomra.com",
		"github": "cskomra",
		"twitter": "#connie.skomra",
		"location": "Powell, OH"
	},
	"welcomeMessage": "Welcome!",
	"skills": ["Software Development",
		"Project Management",
		"Training",
		"Strategic Planning",
		"Analysis",
		"Product Development",
		"Innovation",
		"Mentoring",
		"Robotics"
	],
	"biopic": "images/197x148.gif"
};

var education = {
	"schools":
	[
		{
			"name": "Udacity",
			"location": "Mountain View, CA",
			"degree": "Front End Web Developer Nanodegree",
			"major": "",
			"dates": 2015,
			"url": "http://www.udacity.com"
		},
		{
			"name": "Virginia Tech",
			"location": "Blacksburg, VA",
			"degree": "MIS",
			"major": "",
			"dates": 2011,
			"url": "http://www.vt.edu"
		},
		{
			"name": "Muskingum University",
			"location": "New Concord, OH",
			"degree": "MISST",
			"major": "",
			"dates": 2008,
			"url": "http://muskingum.edu"
		}
	],
	"onlineCourses":
	[
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/course/ud804"
		},
		{
			"title": "Intro to Computer Science",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/course/ud804"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/course/ud804"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/course/ud804"
		},
		{
			"title": "Strategic Leadership in Tech-Based Organizations",
			"school": "Virgina Tech",
			"dates": 2011,
			"url": "http://www.vt.edu"
		}
	]
}


function formatImages(imagesArray){
	var formattedImages = "";
	for (image in imagesArray){
		formattedImages = formattedImages +
		HTMLprojectImage.replace("%data%", imagesArray[image])
	}
	return formattedImages.trim();
}