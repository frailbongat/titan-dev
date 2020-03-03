const clientsProject = document.querySelectorAll(".clients-project");
const clientsTitle = document.querySelector(".clients-title");
const clientsDescription = document.querySelector(".clients-description");

clientsProject[0].addEventListener("mouseover", function() {
  clientsTitle.innerHTML =
    '<img src="img/enkelt.png" width="400px" height="400px">';

  clientsDescription.innerHTML =
    "Designed and developed a web-based asset maintenance & management system for their clients.";
});
clientsProject[0].addEventListener("mouseout", function() {
  clientsTitle.innerHTML = "Clients & Project";
  clientsDescription.innerHTML =
    "We don't want to push our ideas on to customers, we simply want to make what they want.";
});

clientsProject[1].addEventListener("mouseover", function() {
  clientsTitle.innerHTML =
    '<img src="img/bluewater.png" width="400px" height="400px">';

  clientsDescription.innerHTML =
    "Developed a web-based asset management system for their oil and gas rigs.";
});

clientsProject[1].addEventListener("mouseout", function() {
  clientsTitle.innerHTML = "Clients & Project";
  clientsDescription.innerHTML =
    "We don't want to push our ideas on to customers, we simply want to make what they want.";
});

clientsProject[2].addEventListener("mouseover", function() {
  clientsTitle.innerHTML =
    '<img src="img/arnlea.png" width="400px" height="400px">';

  clientsDescription.innerHTML =
    "Assisted in developing operations management and material management systems that runs in mobile, desktop and web.";
});

clientsProject[2].addEventListener("mouseout", function() {
  clientsTitle.innerHTML = "Clients & Project";
  clientsDescription.innerHTML =
    "We don't want to push our ideas on to customers, we simply want to make what they want.";
});

clientsProject[3].addEventListener("mouseover", function() {
  clientsTitle.innerHTML =
    '<img src="img/greenkleen.png" width="400px" height="400px">';

  clientsDescription.innerHTML =
    "Designed and developed GreenKleen's official website.";
});

clientsProject[3].addEventListener("mouseout", function() {
  clientsTitle.innerHTML = "Clients & Project";
  clientsDescription.innerHTML =
    "We don't want to push our ideas on to customers, we simply want to make what they want.";
});

clientsProject[4].addEventListener("mouseover", function() {
  clientsTitle.innerHTML =
    '<img src="img/herbidoor.png" width="400px" height="400px">';

  clientsDescription.innerHTML = "Commissioned to design the company's logo.";
});

clientsProject[4].addEventListener("mouseout", function() {
  clientsTitle.innerHTML = "Clients & Project";
  clientsDescription.innerHTML =
    "We don't want to push our ideas on to customers, we simply want to make what they want.";
});

clientsProject[5].addEventListener("mouseover", function() {
  clientsTitle.innerHTML =
    '<img src="img/amandarose.png" width="400px" height="400px">';

  clientsDescription.innerHTML =
    "Commissioned to design company's logo and graphics for their social media accounts.";
});

clientsProject[5].addEventListener("mouseout", function() {
  clientsTitle.innerHTML = "Clients & Project";
  clientsDescription.innerHTML =
    "We don't want to push our ideas on to customers, we simply want to make what they want.";
});
