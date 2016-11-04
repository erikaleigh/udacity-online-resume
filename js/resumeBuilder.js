
var bio = {
  "name" : "Erika LeBlanc",
  "role" : "Front-End Web Developer",
  "contact" : {
    "mobile" : "(514)-xxx-xxxx",
    "email" : "erikalleblanc@gmail.com",
    "github" : "https://github.com/erikaleigh",
    "twitter" : "@erikalleigh",
    "location" : "Montréal"
  },
  "biopic" : "images/erika.JPG",
  "welcome" : "Hello there!",
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
    "webDevProjects": [
      {
        "title" : "Rock Camp for Girls Website",
        "dates" : "October 2016",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image" : "images/rc-img.png"
      },
      {
        "name" : "Udacity Project: HTML/CSS Portfolio Page",
        "dates" : "October 2016",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image" : "images/portfolio-img.png"
      }
    ]
}

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


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName, formattedRole);

// work info

  for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].name);
  var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  var formattedworkDescription = HTMLworkLocation.replace("%data", work.jobs[job].description);
  var formattedEmployerTitle = formattedEmployer + formattedworkTitle;

  $(".work-entry:last").append(formattedEmployerTitle, formattedworkDates, formattedworkLocation, formattedworkDescription);
  }



// contact info

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);

$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation, formattedBioPic, formattedWelcomeMsg);
