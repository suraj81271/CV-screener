console.log('cv screen project');

const cvScreener =[
    {
        name: "suraj",
        age : "25",
        language : "JavaScript",
        FrameWork: "Nodejs",
        city :"Delhi",
        image : "https://randomuser.me/api/portraits/men/15.jpg"
    },

    {
        name: "VIkas",
        age : "24",
        language : "C#",
        FrameWork: ".Net",
        city :"Allahabad",
        image : "https://randomuser.me/api/portraits/men/53.jpg"
    },
    {
        name: "Nitish",
        age: "23",
        language : "Python",
        Framework: "Django",
        city :"Patna",
        image : "https://randomuser.me/api/portraits/men/23.jpg"
    },

    {
        name: "Anaysha",
        age : "24",
        language : "Java",
        FrameWork: "Spring",
        city :"Shilong",
        image : "https://randomuser.me/api/portraits/women/15.jpg"
    }
]


//cv iterator
function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next: function (){
            return nextIndex<profiles.length ?
            {value:profiles[nextIndex++], 
            done : false } :
            {done:true}
        }
    };

}

const candidates = cvIterator(cvScreener);
nextCV();
   
//button listner for next button
const next = document.getElementById("next");
next.addEventListener('click', nextCV);
function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined){
    image.innerHTML = `<img src = '${currentCandidate.image}'>`;
    
    profile.innerHTML = `<ul class = "list-group">
    <li class= "list-group-item"> Name: ${currentCandidate.name}</li>
    <li class= "list-group-item"> ${currentCandidate.age} years old</li>
    <li class= "list-group-item"> Primarily works on: ${currentCandidate.language}</li>
    <li class= "list-group-item"> with ${currentCandidate.FrameWork}</li>
    <li class= "list-group-item"> lives in: ${currentCandidate.city}</li>
       
    </ul>
    `
    }
    else{
        alert ('End of Candidate Applications');
        window.location.reload();
    }
}
