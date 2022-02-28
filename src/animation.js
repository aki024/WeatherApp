const animate = () => {
    const divs = document.querySelectorAll('.info');
    const bg = document.querySelector('.container');

    if (bg.classList.contains('fade-in3')) {
        bg.classList.remove('fade-in3');

    } else {

        bg.classList.add('fade-in3');
    }
    Array.from(divs).forEach((div) => {
        if (div.classList.contains('fade-in2')) {
            div.classList.remove('fade-in2');
            div.classList.add('fade-in1');
        } else {
            div.classList.remove('fade-in1');
            div.classList.add('fade-in2');
        }
    })
}


export { animate };