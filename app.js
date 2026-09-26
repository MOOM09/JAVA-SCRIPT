const submitButton=document.getElementById("submitBtn")
submitButton.addEventListener("click", function() {
    const userName=document.getElementById("userName").value
    const student=document.getElementById("student")
    const regular=document.getElementById("regular")
    const bookGenre=document.getElementById("bookGenre").value
    const bookTitle=document.getElementById("bookTitle").value
    let membership;
    if(student.checked)
     {
      membership="STUDENT";
     }
     else if (regular.checked)
     { membership="REGULAR"}
     else
     {alert("wrong")
        return;
     }
let StudentData = [userName, membership, bookGenre, bookTitle];

let resultCard=document.getElementById("resultCard")
function renderData(StudentData)
{
for(let i=0;i<StudentData.length;i++)
{

resultCard.innerHTML+=StudentData[i]+"<br>"

}


}

renderData(StudentData);


});



