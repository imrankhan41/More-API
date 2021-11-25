const loadBuddies = () =>{
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => displayData(data))
}
loadBuddies()
const displayData =data =>{
    const buddies = data.results;
    const buddiesContainer = document.getElementById("buddies");
    for(const buddy of buddies){
        const p = document.createElement("p");
        p.innerText = `email:${buddy.email} name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;
        buddiesContainer.appendChild(p)

    }
}