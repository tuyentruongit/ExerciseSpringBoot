// Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
const p = document.createElement("p");
p.innerText = " Trương Văn Tuyên";
p.style.color = "#777";
p.style.fontSize = "2rem";
p.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript"
// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
let listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "blue";
}
// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):

// <ul id="list">
//    <li>Item 1</li>
//    <li>Item 2</li>
//    <li>Item 3</li>
//    <li>Item 4</li>
//    <li>Item 5</li>
//    <li>Item 6</li>
//    <li>Item 7</li>
// </ul>

// Sử dụng javascript để thực hiện những công việc sau
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
let ul1 = document.getElementById("list");
console.log(ul1);
let li8 = document.createElement("li");
li8.innerText = "Item8";
let li9 = document.createElement("li");
li9.innerText = "Item9";
let li10 = document.createElement("li");
li10.innerText = "Item10";
ul1.appendChild(li8)
ul1.appendChild(li9)
ul1.appendChild(li10)
// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
let item1 = document.querySelector("#list li")
console.log(item1)
item1.style.color = "red";
// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
let item3 = document.getElementById("list").getElementsByTagName("li")[2];
console.log(item3)
item3.style.background = "blue";
// Remove thẻ <li> 4
let item4 = document.getElementById("list").getElementsByTagName("li")[3];
ul1.removeChild(item4)
// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
let newLi = document.createElement("li");
newLi.innerText = "TRương Văn Tuyên";
item3.insertAdjacentElement("afterend" , newLi);