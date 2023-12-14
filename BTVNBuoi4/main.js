let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]
// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
// Cập nhật số lượng total box trong thẻ <span> có class “points”
// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5


let totalBox = 0 ;
let ContainerBox = document.querySelector('.boxes');
let button = document.getElementById('btn')


function renderBox(){
    for( let i = 0; i<5;i++){
        let box = document.createElement('div');
        totalBox++;
        box.classList.add('box');
        box.style.backgroundColor = colors[i]; 
        box.addEventListener('click',function(){
            ContainerBox.removeChild(this);
            totalBox--;
            points.textContent=totalBox;
        })
        ContainerBox.appendChild(box);
        let points = document.querySelector('.points');
        points.textContent = totalBox;
       
    }
}
renderBox();
button.addEventListener('click' , renderBox);
