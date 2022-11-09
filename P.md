    let prev = document.getElementById('previous');
    let next = document.getElementById('next');

    let arr = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];

    let i = 0;

    //next btn
    next.addEventListener('click', function () {
        i++;
        if (i > arr.length - 1) {
            i = 0;
        }
        document.getElementById('image').src = arr[i];
    })

    //prev btn
    prev.addEventListener('click', function () {
        i--;
        if (i < 0) {
            i = arr.length - 1;
        }
        document.getElementById('image').src = arr[i];
    })