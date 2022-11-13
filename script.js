
    //* Highlights
    //? Queries
    // Todo Email
    //! Alert
   
   let previous = document.getElementById('previous');
    let next = document.getElementById('next');

    let arr = ["image/img5.jpg", "image/img6.jpg", "image/img7.jpg", "image/img8.jpg", "image/img9.jpg"];
   
    let i = 0;

    next.addEventListener('click', function () {
        i++;
        if (i > arr.length - 1) {
            i = 0;
        }
        document.getElementById('image').src = arr[i];
    })
   
    previous.addEventListener('click', function () {
        i--;
        if (i < 0) {
            i = arr.length - 1;
        }
        document.getElementById('image').src = arr[i];
    })

// * This is Slide Function
  function slide() {
    document.getElementById("image").src = arr[i];

    if (i < arr.length - 1) i++;
    else i = 0;
  }
  setInterval(slide, 2500);


let y= document.getElementById("login")
y.style.display="none"

function loginPage(){
    if(y.style.display=="none"){
        y.style.display="flex"
    }
    else{
        y.style.display="none"
    }
}


document.getElementById("btn1").addEventListener("click",conti);

function conti(){
confirm("do you want to login")



}
