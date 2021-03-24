// HANDLE THE LOAD EVENT OF THE WINDOW

window.addEventListener('load', (e) => {

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
let width = 800;
let height = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width, height);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
   window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
 

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

    let btnCancel = document.getElementById( 'cancel');
        btnCancel.addEventListener('click' , func_cancel);

  // HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
  let formEmp = document.getElementById('empForm');
      formEmp.addEventListener('submit', (e) => {
              e.preventDefault();

        let empId = document.getElementById('id');
        let empName = document.getElementById('name');
        let empExten = document.getElementById('extension');
        let empEmail = document.getElementById('email');
        let empDep = document.getElementById('department');
      
       
// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
        let id;
        let name;
        let ext;
        let email;
        let dept;

// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
       
        id    = empId.value;
        name  = empName.value;
        ext   = empExten.value;
        email = empEmail.value;
        dept  = empDep.value;


// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
let parentoutput = window.opener.document.getElementById('loginDetails');
   

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

      parentoutput.innerHTML = '<br> ID:' + id + '\n' + '<br>Name:' + name + '\n' + '<br>Extention:' + ext + '\n' +
     '<br>Email:' + email + '\n' + '<br> Department:' + dept ;

     

// CLOSE THE POPUP
  window.close()

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE

      });
});

function func_cancel(){
    window.close();

}