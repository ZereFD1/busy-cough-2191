    let previous = document.getElementById('previous');
    let next = document.getElementById('next');

    let arr = ["image/img1.jpg", "image/img2.jpg", "image/img3.jpg", "image/img4.jpg"];
   
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

  function slide() {
    document.getElementById("image").src = arr[i];

    if (i < arr.length - 1) i++;
    else i = 0;
  }
  setInterval(slide, 1500);