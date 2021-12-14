const titleArray = ['Hello World', 'Hello Web', 'Hello Developer'];

const paragraphArray = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati voluptate consequatur saepe corrupti sit natus dolor reprehenderit culpa soluta non, est aut reiciendis delectus aliquid nemo quidem aliquam officiis! Qui.',
    'Quisque vitae lobortis diam, at interdum ipsum. Etiam tempus dolor at vulputate volutpat. Nullam eleifend turpis nec viverra bibendum. Vestibulum efficitur vulputate vehicula. Aliquam erat volutpat. Aliquam erat volutpat. Donec sed tellus elit. Vestibulum purus tortor, mattis in libero id, volutpat tempor felis. Aenean ornare lorem sed efficitur eleifend. Maecenas pretium mattis lectus in gravida. Sed id cursus erat, dictum convallis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec faucibus, erat vitae bibendum tincidunt, tellus odio rutrum neque, id dapibus nunc eros commodo felis.',
    'Donec porta turpis at ligula dignissim, id tristique mauris molestie. Quisque at purus dapibus ligula blandit porta sed vel est. Fusce volutpat fermentum auctor. Ut eu est magna. Nam sollicitudin eget risus ut molestie. Fusce vulputate risus vitae magna hendrerit imperdiet. Proin feugiat lectus id accumsan fermentum. Sed ac arcu ut eros aliquam molestie. Quisque et pharetra nisl, et dignissim metus. Duis sit amet libero sit amet justo vehicula gravida. Aenean hendrerit purus quis ante sollicitudin ultrices. Vivamus a ligula vel ligula porttitor gravida eget at eros.'
]

let currentIndex = 0;

const titleHTML = document.querySelector('.title');

const paragraphHTML = document.querySelector('.paragraph');

const buttonLeft = document.getElementById('button-left');

const buttonRight = document.getElementById('button-right');

titleHTML.innerHTML = titleArray[currentIndex];
paragraphHTML.innerHTML = paragraphArray[currentIndex];

buttonLeft.addEventListener('click', function(){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = titleArray.length - 1;
    }
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
})

buttonRight.addEventListener('click', function(){
    currentIndex++;
    if (currentIndex > titleArray.length-1){
        currentIndex = 0;
    }
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
})