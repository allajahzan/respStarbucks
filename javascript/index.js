document.addEventListener('DOMContentLoaded', function () {

    const link1 = document.querySelector(".link1");
    // const link1style = window.getComputedStyle(link1);
    // const link1Color = link1style.getPropertyValue("border-bottom-color");
    const link2 = document.querySelector(".link2");
    const link3 = document.querySelector(".link3");
    const link4 = document.querySelector(".link4");
    const link5 = document.querySelector(".link5");

    link1.addEventListener('click', function(){
            link1.style.borderBottomColor = 'rgb(0, 117, 74)';
            link2.style.borderBottomColor = 'transparent';
            link3.style.borderBottomColor = 'transparent';
            link4.style.borderBottomColor = 'transparent';
            link5.style.borderBottomColor = 'transparent';
    });

    link2.addEventListener('click', function(){
            link1.style.borderBottomColor = 'transparent';
            link2.style.borderBottomColor = 'rgb(0, 117, 74)';
            link3.style.borderBottomColor = 'transparent';
            link4.style.borderBottomColor = 'transparent';
            link5.style.borderBottomColor = 'transparent';
    });

    link3.addEventListener('click', function(){
        link1.style.borderBottomColor = 'transparent';
        link2.style.borderBottomColor = 'transparent';
        link3.style.borderBottomColor = 'rgb(0, 117, 74)';
        link4.style.borderBottomColor = 'transparent';
        link5.style.borderBottomColor = 'transparent';
    });

    link4.addEventListener('click', function(){
        link1.style.borderBottomColor = 'transparent';
        link2.style.borderBottomColor = 'transparent';
        link3.style.borderBottomColor = 'transparent';
        link4.style.borderBottomColor = 'rgb(0, 117, 74)';
        link5.style.borderBottomColor = 'transparent';
    });

    link5.addEventListener('click', function(){
        link1.style.borderBottomColor = 'transparent';
        link2.style.borderBottomColor = 'transparent';
        link3.style.borderBottomColor = 'transparent';
        link4.style.borderBottomColor = 'transparent';
        link5.style.borderBottomColor = 'rgb(0, 117, 74)';
    });

});
