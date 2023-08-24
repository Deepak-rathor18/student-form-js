
const btn=document.getElementById('generate')

btn.addEventListener("click",function1)

function function1(){
    let name=document.getElementById('name').value;
    // console.log(name); 
    document.getElementById("displayName").innerHTML="Name : " +name ;

    let age=document.getElementById('age').value
    document.getElementById("displayAge").innerHTML="Age : " + age;

    let section=document.getElementById('section').value
    document.getElementById("displaySection").innerHTML="Section : " + section;

    let rollNumber=document.getElementById('rollno').value
    document.getElementById("displayRollNumber").innerHTML="RollNO. : " + rollNumber;

    let contactNumber=document.getElementById('contactno').value
    document.getElementById("displayContactNumber").innerHTML="ContactNo. : " + contactNumber;
    
 

}
