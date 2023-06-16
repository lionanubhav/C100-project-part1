// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDBpMzE4A_P2zlPtt19y53-eIhEFJyEY0E",
    authDomain: "c100-project-7788b.firebaseapp.com",
    projectId: "c100-project-7788b",
    storageBucket: "c100-project-7788b.appspot.com",
    messagingSenderId: "265459217786",
    appId: "1:265459217786:web:8c24bd0dd2d0012b2192c3",
    measurementId: "G-5F4WKFSYRT"
  };

firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
 
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



