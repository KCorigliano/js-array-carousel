const titleArray = ['Hello World', 'Hello Web', 'Hello Developer', 'Hello Reader', 'Hello Curious'];

const paragraphArray = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati voluptate consequatur saepe corrupti sit natus dolor reprehenderit culpa soluta non, est aut reiciendis delectus aliquid nemo quidem aliquam officiis! Qui.',
    'Quisque vitae lobortis diam, at interdum ipsum. Etiam tempus dolor at vulputate volutpat. Nullam eleifend turpis nec viverra bibendum. Vestibulum efficitur vulputate vehicula. Aliquam erat volutpat. Aliquam erat volutpat. Donec sed tellus elit. Vestibulum purus tortor, mattis in libero id, volutpat tempor felis. Aenean ornare lorem sed efficitur eleifend. Maecenas pretium mattis lectus in gravida. Sed id cursus erat, dictum convallis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec faucibus, erat vitae bibendum tincidunt, tellus odio rutrum neque, id dapibus nunc eros commodo felis.',
    'Donec porta turpis at ligula dignissim, id tristique mauris molestie. Quisque at purus dapibus ligula blandit porta sed vel est. Fusce volutpat fermentum auctor. Ut eu est magna. Nam sollicitudin eget risus ut molestie. Fusce vulputate risus vitae magna hendrerit imperdiet. Proin feugiat lectus id accumsan fermentum. Sed ac arcu ut eros aliquam molestie. Quisque et pharetra nisl, et dignissim metus. Duis sit amet libero sit amet justo vehicula gravida. Aenean hendrerit purus quis ante sollicitudin ultrices. Vivamus a ligula vel ligula porttitor gravida eget at eros.',
    'Praesent tincidunt elit est, feugiat egestas odio sollicitudin eget. Curabitur mollis molestie dolor vitae venenatis. Maecenas tincidunt mi ut pulvinar semper. Vestibulum orci nunc, ullamcorper ac arcu vel, suscipit iaculis ante. Nulla eu scelerisque tellus. Vivamus imperdiet et augue et ultricies. Integer fringilla est ac lorem elementum, ut porttitor ante semper. Nunc pretium nunc tempus aliquet dictum. Vivamus at iaculis erat, sit amet iaculis lectus.',
    'Nullam ac lorem ac ante pretium congue quis quis sem. In a odio tempor, sodales quam eleifend, cursus lectus. Quisque sed nisi et ipsum rutrum dictum. Aliquam erat volutpat. Quisque faucibus elit sit amet tortor tempus iaculis. Fusce viverra lacinia porttitor. Sed ut suscipit est. Nam vel ipsum sed arcu elementum posuere. Nulla eu lectus eget magna laoreet congue at eu ante. Phasellus laoreet dolor nisi, at sodales nisi commodo ut.'
];

const colorArray = ['cornflowerblue', 'Olive', 'Coral', 'Darkkhaki', 'Grey']

let currentIndex = 0;

const titleHTML = document.querySelector('.title');

const paragraphHTML = document.querySelector('.paragraph');

const buttonLeft = document.getElementById('button-left');

const buttonRight = document.getElementById('button-right');

const buttonRefresh = document.querySelector('.refresh');

const circleOne = document.querySelector('.first-circle');
const circleTwo = document.querySelector('.second-circle');
const circleThree = document.querySelector('.third-circle');
const circleFour = document.querySelector('.fourth-circle');
const circleFive = document.querySelector('.fifth-circle');

titleHTML.innerHTML = titleArray[currentIndex];
paragraphHTML.innerHTML = paragraphArray[currentIndex];

if (currentIndex === 0){
    circleOne.style.backgroundColor = 'chartreuse';
} else {
    circleOne.style.backgroundColor = 'white';
}

buttonLeft.addEventListener('click', function(){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = titleArray.length-1;
    }
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    circleOne.addEventListener('click', function(){
        currentIndex === 0;
    });
    
    circleTwo.addEventListener('click', function(){
        currentIndex === 1;
    });
    
    circleThree.addEventListener('click', function(){
        currentIndex === 2;
    });
    
    circleFour.addEventListener('click', function(){
        currentIndex === 3;
    });
    
    circleFive.addEventListener('click', function(){
        currentIndex === 4;
    });   

    if (currentIndex === 0){
        circleOne.style.backgroundColor = 'chartreuse';
    } else{
        circleOne.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 1){
        circleTwo.style.backgroundColor = 'chartreuse';
    } else{
        circleTwo.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 2){
        circleThree.style.backgroundColor = 'chartreuse';
    } else{
        circleThree.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 3){
        circleFour.style.backgroundColor = 'chartreuse';
    } else{
        circleFour.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 4){
        circleFive.style.backgroundColor = 'chartreuse';
    } else{
        circleFive.style.backgroundColor = 'white';
    }
});

buttonRight.addEventListener('click', function(){
    currentIndex++;
    if (currentIndex > titleArray.length-1){
        currentIndex = 0;
    }
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    circleOne.addEventListener('click', function(){
        currentIndex === 0;
    });
    
    circleTwo.addEventListener('click', function(){
        currentIndex === 1;
    });
    
    circleThree.addEventListener('click', function(){
        currentIndex === 2;
    });
    
    circleFour.addEventListener('click', function(){
        currentIndex === 3;
    });
    
    circleFive.addEventListener('click', function(){
        currentIndex === 4;
    });

    if (currentIndex === 0){
        circleOne.style.backgroundColor = 'chartreuse';
    } else{
        circleOne.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 1){
        circleTwo.style.backgroundColor = 'chartreuse';
    } else{
        circleTwo.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 2){
        circleThree.style.backgroundColor = 'chartreuse';
    } else{
        circleThree.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 3){
        circleFour.style.backgroundColor = 'chartreuse';
    } else{
        circleFour.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 4){
        circleFive.style.backgroundColor = 'chartreuse';
    } else{
        circleFive.style.backgroundColor = 'white';
    }
});

buttonRefresh.addEventListener('click', function(){
    currentIndex = 0;
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];
    
    if (currentIndex === 0){
        circleOne.style.backgroundColor = 'chartreuse';
    } else{
        circleOne.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 1){
        circleTwo.style.backgroundColor = 'chartreuse';
    } else{
        circleTwo.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 2){
        circleThree.style.backgroundColor = 'chartreuse';
    } else{
        circleThree.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 3){
        circleFour.style.backgroundColor = 'chartreuse';
    } else{
        circleFour.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 4){
        circleFive.style.backgroundColor = 'chartreuse';
    } else{
        circleFive.style.backgroundColor = 'white';
    }
});

circleOne.addEventListener('click', function(){
    currentIndex = 0;
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    if (currentIndex === 0){
        circleOne.style.backgroundColor = 'chartreuse';
    } else{
        circleOne.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 1){
        circleTwo.style.backgroundColor = 'chartreuse';
    } else{
        circleTwo.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 2){
        circleThree.style.backgroundColor = 'chartreuse';
    } else{
        circleThree.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 3){
        circleFour.style.backgroundColor = 'chartreuse';
    } else{
        circleFour.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 4){
        circleFive.style.backgroundColor = 'chartreuse';
    } else{
        circleFive.style.backgroundColor = 'white';
    }
});

circleTwo.addEventListener('click', function(){
    currentIndex = 1;
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    if (currentIndex === 0){
        circleOne.style.backgroundColor = 'chartreuse';
    } else{
        circleOne.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 1){
        circleTwo.style.backgroundColor = 'chartreuse';
    } else{
        circleTwo.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 2){
        circleThree.style.backgroundColor = 'chartreuse';
    } else{
        circleThree.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 3){
        circleFour.style.backgroundColor = 'chartreuse';
    } else{
        circleFour.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 4){
        circleFive.style.backgroundColor = 'chartreuse';
    } else{
        circleFive.style.backgroundColor = 'white';
    }
});

circleThree.addEventListener('click', function(){
    currentIndex = 2;
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    if (currentIndex === 0){
        circleOne.style.backgroundColor = 'chartreuse';
    } else{
        circleOne.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 1){
        circleTwo.style.backgroundColor = 'chartreuse';
    } else{
        circleTwo.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 2){
        circleThree.style.backgroundColor = 'chartreuse';
    } else{
        circleThree.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 3){
        circleFour.style.backgroundColor = 'chartreuse';
    } else{
        circleFour.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 4){
        circleFive.style.backgroundColor = 'chartreuse';
    } else{
        circleFive.style.backgroundColor = 'white';
    }
});

circleFour.addEventListener('click', function(){
    currentIndex = 3;
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    if (currentIndex === 0){
        circleOne.style.backgroundColor = 'chartreuse';
    } else{
        circleOne.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 1){
        circleTwo.style.backgroundColor = 'chartreuse';
    } else{
        circleTwo.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 2){
        circleThree.style.backgroundColor = 'chartreuse';
    } else{
        circleThree.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 3){
        circleFour.style.backgroundColor = 'chartreuse';
    } else{
        circleFour.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 4){
        circleFive.style.backgroundColor = 'chartreuse';
    } else{
        circleFive.style.backgroundColor = 'white';
    }
});

circleFive.addEventListener('click', function(){
    currentIndex = 4; 
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    if (currentIndex === 0){
        circleOne.style.backgroundColor = 'chartreuse';
    } else{
        circleOne.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 1){
        circleTwo.style.backgroundColor = 'chartreuse';
    } else{
        circleTwo.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 2){
        circleThree.style.backgroundColor = 'chartreuse';
    } else{
        circleThree.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 3){
        circleFour.style.backgroundColor = 'chartreuse';
    } else{
        circleFour.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 4){
        circleFive.style.backgroundColor = 'chartreuse';
    } else{
        circleFive.style.backgroundColor = 'white';
    }
});

const clickMe = document.querySelector('.click-me');
const middleContainer = document.querySelector('.middle-container');
let counterClick = 0;



clickMe.addEventListener('click', function(){
    middleContainer.style.backgroundColor = colorArray[currentIndex];
    if (counterClick % 2 === 0){
        middleContainer.style.display="flex";
    } else{
        middleContainer.style.display="none";
    }
    counterClick++;
});