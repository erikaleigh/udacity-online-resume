// bio section
var bio = {
    "name": "Erika LeBlanc",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "(514)-xxx-xxxx",
        "email": "erikalleblanc@gmail.com",
        "github": "https://github.com/erikaleigh",
        "twitter": "@erikalleigh",
        "location": "Montréal"
    },
    "welcomeMessage": "Hello! Welcome to my online resume!",
    "skills": ["HTML5", "CSS3", "Photoshop & InDesign", "Communications", "Administration", "Coordination"],
    "biopic": "images/erika.JPG",
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();


// education section

var education = {
    "schools": [{
        "name": "Concordia University",
        "location": "Montréal, Québec",
        "degree": "Graduate Diploma",
        "majors": ["Communications"],
        "dates": "September 2012 - September 2013",
        "url": "http://concordia.ca"
    }, {
        "name": "Acadia University",
        "location": "Wolfville, Nova Scotia",
        "degree": "BA in Music",
        "majors": ["Music Technology", " Voice"],
        "dates": "September 2002 - May 2006",
        "url": "http://www.acadiau.ca"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "October 1 2016 - Present",
        "url": "http://www.udacity.com"
    }]
};

function displayEducation() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    }

    $("#education").append(HTMLonlineClasses);
    for (var index = 0; index < education.onlineCourses.length; index++) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
        var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTitleSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
}

displayEducation();


// work section

var work = {
    "jobs": [{
        "employer": "ELAN",
        "title": "Communications Coordinator",
        "location": "Montréal, Québec",
        "dates": "January 2016 - August 2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit tortor et purus interdum, eget faucibus orci aliquam. Suspendisse ac lectus velit. Pellentesque sit amet laoreet nunc, ut lobortis risus. Sed vitae sagittis ipsum, quis congue neque. Nunc malesuada neque massa, at finibus nisi venenatis quis. In nibh quam, sagittis sed scelerisque et, suscipit hendrerit ipsum. Nulla a urna tellus. Donec dignissim egestas ornare. Aenean euismod urna urna. Cras auctor placerat erat vitae porta."
    }, {
        "employer": "Rock Camp for Girls Montreal",
        "title": "Treasurer, Board of Directors",
        "location": "Montréal, Québec",
        "dates": "November 2013 - November 2015",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit tortor et purus interdum, eget faucibus orci aliquam. Suspendisse ac lectus velit. Pellentesque sit amet laoreet nunc, ut lobortis risus. Sed vitae sagittis ipsum, quis congue neque. Nunc malesuada neque massa, at finibus nisi venenatis quis. In nibh quam, sagittis sed scelerisque et, suscipit hendrerit ipsum. Nulla a urna tellus. Donec dignissim egestas ornare. Aenean euismod urna urna. Cras auctor placerat erat vitae porta."
    }]
};

function displayWork() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedworkTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedworkDates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedworkLocation);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedworkDescription);
    }
}

displayWork();


// projects section

var projects = {
    "projects": [{
        "title": "Rock Camp for Girls Website",
        "dates": "October 2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit tortor et purus interdum, eget faucibus orci aliquam. Suspendisse ac lectus velit. Pellentesque sit amet laoreet nunc, ut lobortis risus. Sed vitae sagittis ipsum, quis congue neque. Nunc malesuada neque massa, at finibus nisi venenatis quis. In nibh quam, sagittis sed scelerisque et, suscipit hendrerit ipsum. Nulla a urna tellus. Donec dignissim egestas ornare. Aenean euismod urna urna. Cras auctor placerat erat vitae porta.",
        "images": ["images/rc-img.png", "images/portfolio-img.png"]
    }, {
        "title": "Udacity Project: HTML/CSS Portfolio Page",
        "dates": "October 2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit tortor et purus interdum, eget faucibus orci aliquam. Suspendisse ac lectus velit. Pellentesque sit amet laoreet nunc, ut lobortis risus. Sed vitae sagittis ipsum, quis congue neque. Nunc malesuada neque massa, at finibus nisi venenatis quis. In nibh quam, sagittis sed scelerisque et, suscipit hendrerit ipsum. Nulla a urna tellus. Donec dignissim egestas ornare. Aenean euismod urna urna. Cras auctor placerat erat vitae porta.",
        "images": ["images/portfolio-img.png", "images/rc-img.png"]
    }]
};

function displayProjects() {
    $("#projects").append(HTMLprojectStart);
    for (i = 0; i < projects.projects.length; i++) {

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);

        for (index = 0; index < projects.projects[i].images.length; index++) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[index]);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }
}

displayProjects();

// Google map

$("#mapDiv").append(googleMap);
