var work = {
	"jobs":
		[
			{
				"employer": "Strategic Personal Finance, LLC",
				"title": "Founder",
				"location": "Powell, OH",
				"dates": "2005 - present",
				"description": "Preparing to help millions of people grow their finances through apps and mobile computing, SPF creates tools that bring financial planning services to non-consumers and over-serviced existing financial planning clients."
			},
			{
				"employer": "TeMeDa, LLC",
				"title": "Manager Edge Systems",
				"location": "Chicago, IL",
				"dates": "May, 2013 - March, 2014",
				"description": "Managing TeMeDa's human-to-machine interface.  TeMeDa, a Morey Corporation skunkworks startup, short for Telematics Meta Data, exits to enable the measurement of meaning facts at a distance."
			},
			{
				"employer": "Edward Jones",
				"title": "Financial Advisor",
				"location": "Parkersburg, WV",
				"dates": "2010",
				"description": "Helping clients determine and solve their financial planning needs and objectives."
			},
			{
				"employer": "Skomra Academy",
				"title": "Home Educator",
				"location": "Powell, OH",
				"dates": "2008 - present",
				"description": ""
			}
		]
};

var projects = {
	"project":
		[
			{
				"title": "Search Engine",
				"dates": "2015",
				"description": "Search engine with key components including a crawler, an index, and a page rank algorithm",
				"images": ["http://placehold.it/100x100"]
			},
			{
				"title": "Social Network",
				"dates": "2015",
				"description": "Relationships organized into a social network",
				"images": ["http://placehold.it/100x100"]
			},
			{
				"title": "Udacity Mug",
				"dates": "2015",
				"description": "Web page based on design mockup PDF-file using HTML and CSS",
				"images": ["http://placehold.it/100x100",
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
	"biopic": "images/connie02.gif"
};

var education = {
	"schools":
	[
		{
			"name": "Udacity",
			"location": "Mountain View, CA",
			"degree": "",
			"major": "Front End Web Developer Nanodegree",
			"dates": 2015,
			"url": "http://www.udacity.com"
		},
		{
			"name": "Virginia Tech",
			"location": "Blacksburg, VA",
			"degree": "",
			"major": "MIS",
			"dates": 2011,
			"url": "http://www.vt.edu"
		},
		{
			"name": "Muskingum University",
			"location": "New Concord, OH",
			"degree": "",
			"major": "MISST",
			"dates": 2008,
			"url": "http://muskingum.edu"
		},
		{
			"name": "Marietta College",
			"location": "Marietta, OH",
			"degree": "B.A.",
			"major": "Music, Business",
			"dates": "1988 - 1990",
			"url": "http://marietta.edu"
		},
		{
			"name": "Capital University",
			"location": "Bexley, OH",
			"degree": "B.A.",
			"major": "Music",
			"dates": "1986 - 1988",
			"url": "http://capital.edu"
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
		},
		{
			"title": "Software Engineering",
			"school": "Virginia Tech",
			"dates": 2011,
			"url": "http://www.vt.edu"
		},
		{
			"title": "JAVA",
			"school": "Virginia Tech",
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