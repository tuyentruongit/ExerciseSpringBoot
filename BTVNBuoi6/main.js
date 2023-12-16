
async function getUser(){
    try{
        let getReS = await fetch("https://api.github.com/users")
        let data    = getReS.json();
        console.log(data);
        return data;
    }catch(error){
        console.log(error);
    }
}
getUser();

const table = document.getElementById('tbody');
async function printDis (){
    let arrUSer = await getUser();
    for( let i = 0 ; i< arrUSer.length ; i++){
        let tr = document.createElement('tr');
        let  user = arrUSer[i];
        tr.innerHTML= (`<td> ${i+1} </td>
        <td>
        <img src=" ${user.avatar_url}" alt="mojombo">
         </td>
         <td>${user.login}</td>
         <td>${user.html_url}</td>
        <td>${user.repos_url}</td>
        `)
        table.appendChild(tr);
    }
}
printDis();




