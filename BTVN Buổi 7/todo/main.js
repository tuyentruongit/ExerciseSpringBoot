let todo = [];
let API_URl ="http://localhost:2310/todos"
const input = document.getElementById('input-todo');
const btn = document.getElementById('btn-add');
const ulElement = document.querySelector('ul');
const inputSearch = document.getElementById('search-input-todo');
const btnSearch = document.getElementById('btn-search');

// Gọi Api lấy dữ liệu từ sever 
const getTodo = async ()=>{
    try{
        let reponse = await fetch(API_URl);
        let data  = await reponse.json();
        console.log(data);
        todo = data;
        renderTodo(todo);
    }catch(err){
        console.log(err);
    }
}


function renderTodo (todo){
    ulElement.innerHTML = "";
    if(todo.length === 0){
        ulElement.insertAdjacentHTML('afterbegin' ,"<li> Danh sách công việc rỗng </li>");
        return;
    }

    let html = "";
    todo.forEach(todo => {
        html += ` <li>
                     <input type="checkbox" ${todo.status ? "checked" : ""} onchange = "toggleStatus(${todo.id}) " >
                     <span class="${todo.status ? "active" : "" }  ">${todo.title}</span>
                     <button onclick = "editTodo(${todo.id})">Edit</button>
                     <button onclick = "deleteTodo(${todo.id})">Delete</button>
                   </li>`;


        
        // if(todo.status){
        //     html += `
        //  <li>
        //  <input type="checkbox" checked>
        //  <span class="active">${todo.title}</span>
        //  <button>Edit</button>
        //  <button>Delete</button>
        //  </li>
        //     `
        // }else{
        //     html+= `
        //     <li>
            
        //     <input type="checkbox">
        //     <span>${todo.title}</span>
        //     <button>Edit</button>
        //     <button>Delete</button> 

        //     </li>
        //     `
        // }
    });
    ulElement.innerHTML =html;
}
// input.addEventListener('keydown',(e) =>{
//     if(e.keyCode === 13 ){
//         renderTodo();
//     }
// })
renderTodo(todo);


// tìm kiếm Todo
btnSearch.addEventListener('click', ()=>{
    const valueInp = inputSearch.value;
    if(valueInp.trim()===''){
        alert('Vui lòng nhập công việc mà bạn muôn tìm kiếm ');
        return;
    }
    let todoSearch = todo.filter((e) => e.title.toLowerCase().includes(valueInp.trim()));
    if(todoSearch.length==0){
        alert('Không có công việc nào như bạn vừa nhập');
        return;
    }
    renderTodo(todoSearch);
})
inputSearch.addEventListener('input' , ()=>{
    const valueIn = inputSearch.value;
    if(valueIn===''){
        renderTodo(todo);
    }
})



// thêm công việc
btn.addEventListener('click', async () =>{
    // lấy giá trị từ input 
    const value = input.value;
    if(value.trim()===''){
        alert('Vui lòng nhập công việc mới');
        return ;
    }
    const newTodo = {
        title :`${value}`,
        status : false
    };
    try{
        let reponse = await fetch(API_URl, {
            method: 'POST', 
            body: JSON.stringify(newTodo), 
            headers:{
              'Content-Type': 'application/json'
            }
          })
        let data = await reponse.json();
        console.log(data);
    }catch(er){
        console.log(er)
    }
    todo.push(newTodo);
    renderTodo(todo);
    input.value = "";
});
// xóa công viêc
const deleteTodo = async (id)=>{
    const confirm = window.confirm("Bạn có chắc là muốn xoacoong việc này hay không ?");
    if(!confirm){
        return;
    }
    try{
        let reponse = await fetch(`${API_URl}/${id}`, {
            method: 'DELETE'
          })
    }catch(er){
        console.log(er)
    }
    todo = todo.filter((todo)=> todo.id != id);
    
    renderTodo(todo);
}
const editTodo= async (id)  =>{
    let toD = todo.find((todo) => todo.id == id)
    let name  = window.prompt("Nhập tên công việc ", toD.title);
    console.log(name)
    if(name===null){
        return ; 
    }
    if(name.trim() === ""){
        alert('Không được để trống ');
        return;
    } 
    const  data     = {
        title: name,
        status : todo.status
    }
    
    try{
        let reponse = await fetch(`${API_URl}/${id}`, {
            method: 'PUT', 
            body: JSON.stringify(data), 
            headers:{
              'Content-Type': 'application/json'
            }
          })
        if(reponse.ok){
            toD.title = name;
        }
    }catch(er){
        console.log(er)
    }
     
        todo.forEach((e)=>{
            if(id===e.id){
                e.title = name;
                renderTodo(todo)
            }
        })

    console.log(id)
}
const toggleStatus =(id)=>{
    todo.forEach((e) =>{
        if(id==e.id){
            e.status = !e.status;
        }
    })

    console.log(todo);
    renderTodo(todo);
}








getTodo();