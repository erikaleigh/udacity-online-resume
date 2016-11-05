
var bio = {
  "name" : "Erika LeBlanc",
  "role" : "Front-End Web Developer",
  "contacts" : {
    "mobile" : "(514)-xxx-xxxx",
    "email" : "erikalleblanc@gmail.com",
    "github" : "https://github.com/erikaleigh",
    "twitter" : "@erikalleigh",
    "location" : "Montréal"
  },
  "welcomeMessage" : "Hello there!",
  "biopic" : "images/erika.JPG",
  "skills" : ["HTML5", "CSS3", "Photoshop/InDesign", "Communications", "Administration", "Coordination"]
}

var work = {
  "jobs":[
    {
      "name" : "ELAN",
      "title" : "Communications Coordinator",
      "dates" : "January 2016 - August 2016",
      "location" : "Montréal, Québec",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit tortor et purus interdum, eget faucibus orci aliquam. Suspendisse ac lectus velit. Pellentesque sit amet laoreet nunc, ut lobortis risus. Sed vitae sagittis ipsum, quis congue neque. Nunc malesuada neque massa, at finibus nisi venenatis quis. In nibh quam, sagittis sed scelerisque et, suscipit hendrerit ipsum. Nulla a urna tellus. Donec dignissim egestas ornare. Aenean euismod urna urna. Cras auctor placerat erat vitae porta."
    },
    {
      "name" : "Rock Camp for Girls Montreal",
      "title" : "Treasurer, Board of Directors",
      "dates" : "November 2013 - November 2015",
      "location" : "Montréal, Québec",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit tortor et purus interdum, eget faucibus orci aliquam. Suspendisse ac lectus velit. Pellentesque sit amet laoreet nunc, ut lobortis risus. Sed vitae sagittis ipsum, quis congue neque. Nunc malesuada neque massa, at finibus nisi venenatis quis. In nibh quam, sagittis sed scelerisque et, suscipit hendrerit ipsum. Nulla a urna tellus. Donec dignissim egestas ornare. Aenean euismod urna urna. Cras auctor placerat erat vitae porta."
    }
  ]
}

var education = {
  "schools": [
    {
      "name" : "Concordia University",
      "dates" : "September 2012 - September 2013",
      "city" : "Montréal, Québec",
      "degree" : "Graduate Diploma",
      "major" : "Communications"
    },
    {
      "name" : "Acadia University",
      "dates" : "September 2002 - May 2006",
      "city" : "Wolfville, Nova Scotia",
      "degree" : "BA in Music",
      "major" : ["Music Technology", "Voice"],
      "minor" : "English"
    }
  ],
  "onlineCourses":
      {
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "Udacity",
        "url" : "http://www.udacity.com",
        "dates" : "October 1 2016 - Present"
      }
}

var projects = {
    "webProjects": [
      {
        "title" : "Rock Camp for Girls Website",
        "dates" : "October 2016",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image" : "images/rc-img.png"
      },
      {
        "title" : "Udacity Project: HTML/CSS Portfolio Page",
        "dates" : "October 2016",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image" : "images/portfolio-img.png"
      }
    ]
}

// name and role

function displayNameRole() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName, formattedRole);
}
displayNameRole();

// contact info

function displayContacts () {
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation, formattedBioPic, formattedWelcomeMsg);
}
displayContacts();

// skils info

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  $("#skills").append(formattedSkill);
}

// work info

  function displayWork() {
  for (var i = 0; i < work.jobs.length; i++) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].name);
  var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
  var formattedEmployerTitle = formattedEmployer + formattedworkTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
  $(".work-entry:last").append(formattedworkDates);
  var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
  $(".work-entry:last").append(formattedworkLocation);
  var formattedworkDescription = HTMLworkLocation.replace("%data", work.jobs[i].description);
  $(".work-entry:last").append(formattedworkDescription);
}
}

displayWork();

// projects

function displayProjects() {
$("#projects").append(HTMLprojectStart);
for (i = 0; i < projects.webProjects.length; i++) {

var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.webProjects[i].title);
$(".project-entry:last").append(formattedProjectTitle);
var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.webProjects[i].dates);
$(".project-entry:last").append(formattedProjectDates);
var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.webProjects[i].description);
$(".project-entry:last").append(formattedProjectDescription);
var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.webProjects[i].image);
$(".project-entry:last").append(formattedProjectImage);
}
}

displayProjects();

// map

$("#mapDiv").append(googleMap);

// other course stuff

// clicks

// $(document).click(function(loc) {
// var x = loc.pageX;
// var y = loc.pageY;
//
// logClicks(x,y);
// })

// internationalize button

// function inName (name) {
// name = name.trim().split(" ");
// console.log(name);
// name[1] = name[1].toUpperCase();
// name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//
// return name [0] +" "+ name[1];
//
// }
// $("#main").append(internationalizeButton);
