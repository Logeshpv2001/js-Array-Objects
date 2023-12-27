// Given JSON data
const jsonData = {
    name: "John Doe",
    age: 30,
    city: "New York",
    skills: ["JavaScript", "HTML", "CSS"]
  };
  
  // Using for loop
  console.log("Using regular for loop:");
  for (let i = 0; i < Object.keys(jsonData).length; i++) {
    const key = Object.keys(jsonData)[i];
    const value = jsonData[key];
    console.log(key, value);
  }
  
  // Using for...in loop
  console.log("\nUsing for...in loop:");
  for (let key in jsonData) {
    console.log(key, jsonData[key]);
  }
  
  // Using for...of loop (for arrays)
  console.log("\nUsing for...of loop:");
  for (let value of Object.values(jsonData)) {
    console.log(value);
  }
  
  // Using forEach (for arrays)
  console.log("\nUsing forEach:");
  Object.values(jsonData).forEach(value => {
    console.log(value);
  });
  


//   Create your own Resume DAte in Json Format


  {
    "name": "Logesh PV",
    "title": "Json Resume Data",
    "contact": {
      "email": "abcdef@gmail.com",
      "phone": "1234567890",
      "location": "Chennai"
    },
    "summary": "I am an aspiring full-stack developer eager to apply my front-end and back-end development skills to create innovative and user-friendly web applications. ",
    "education": [
      {
        "degree": "Mechanical Engineering",
        "school": "Srm University",
        "graduationYear": 2021
      },
      {
        "degree": "Mechanical Engineering",
        "school": "Srm University",
        "graduationYear": 2019
      }
    ],

    "skills": [
      "Html,Css",
      "Javascript",
      "Python",
      "React js",
      "Node js",
      "Mango db",
      "Problem Solving"

    ],
    "languages": [
      {
        "language": "English",
        "proficiency": "Fluent"
      },
      {
        "language": "Tamil",
        "proficiency": "Native"
      }
    ],

  }