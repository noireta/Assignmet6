// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', func_first); 

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
function func_first(){
    let btn = document.getElementById('btnAddEmployee');
    btn.addEventListener('click', add_emp);
}
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP

 function add_emp(){
    window.open('add-employee.html','add-employee','width=300,height=300');

 }


