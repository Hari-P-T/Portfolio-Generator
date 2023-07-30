document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => updatePortfolio(data))
      .catch(error => console.error("Error fetching data:", error));
  });
  
  function updatePortfolio(data) {
    document.getElementById("name").textContent = data.name;
    document.getElementById("age").textContent = "Age: " + data.age;
    document.getElementById("profession").textContent = "Profession: " + data.profession;
    document.getElementById("experience").textContent = "Experience: " + data.experience;
  
    const skillsList = document.getElementById("skills");
    skillsList.children[0].textContent = "Skill 1: " + data.skill1;
    skillsList.children[1].textContent = "Skill 2: " + data.skill2;
    skillsList.children[2].textContent = "Skill 3: " + data.skill3;
  
    document.getElementById("profile").textContent = "Profile: " + data.profile;
    document.getElementById("contact").textContent = "Contact: " + data.mobile + " | " + data.email;
  }
  
