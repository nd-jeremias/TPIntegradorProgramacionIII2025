const submitBtn = document.getElementById("submitBtn");
const pass = document.getElementById("formPassword");

submitBtn.addEventListener("click", async function(event){
    event.preventDefault()
    console.log("Pass: ", pass.value) // -- ACA ARMAR FETCH
});


// document.addEventListener('DOMContentLoaded', () => {
    
// });

    // import Swal from '../node_modules/sweetalert2/src/sweetalert2.js'

// const btn = document.getElementById('btnAlert');

// btn.addEventListener('click',()=> {

//     Swal.fire({
//         title: 'Error!',
//         text: 'Do you want to continue',
//         icon: 'error',
//         confirmButtonText: 'Cool'
//       })
// })
// Confirmacion de borrar
// Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire({
//       title: "Deleted!",
//       text: "Your file has been deleted.",
//       icon: "success"
//     });
//   }
// });