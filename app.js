// let x =prompt("Whats Your Name");
// let y=prompt("Whats your membershib(Student/Regular)");

// if (y=="Student")
//     {

// alert("Hello" +" "+ x +" "+ "Scholar");
//     }

//     else if(y=="Regular")
//     {

// alert("Hello" +" "+ x +" "+ "Member");

//     }

//     else
//         alert("Hello" +" "+ x +" "+ y);

//     let favoriteGenre = prompt("What's your favorite genre (fiction/non-fiction)?");
//     let reserve= prompt("Which book would you like to reserve?");
//     alert("The book he requested is being reserved.");
//    console.log(x + " " + reserve);

function memberShip()
{
    let member=1;
    while(member)
{
    let askUser=String(prompt("ARE YOU A STUDENT OR REGULAR?? ANSWER (STUDENT/REGULAR) JUST"))

    if(askUser=="REGULAR")
        {
alert("HELLO MR MEMBER");
break
        }

 else if(askUser=="STUDENT")
        {
alert("HELLO MR SCHOLAR");
break
        }
else
    {member++}

}
return askUser;
}

function userData()
{
const data=[];
let userNmae=String(prompt("WHAT IS YOUR NAME"));
data.push(userNmae)

let memberShipReader=memberShip();
 data.push(memberShipReader);

let bookGenre =String(prompt("WHAT IS YOUR bookGenre"));
data.push(bookGenre)

let bookTitle =String(prompt("WHAT IS YOUR bookTitle"));
data.push(bookTitle)
return data;
}

function readData()
{
let readerData=userData() 
for(let i=0;i<readerData.length;i++)
{
let read=(readerData[i])
console.log(read)

}


}


