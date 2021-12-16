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

// selezione degli elementi HTML
const titleHTML = document.querySelector('.title');
const paragraphHTML = document.querySelector('.paragraph');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
const buttonRefresh = document.querySelector('.refresh');
const clickMe = document.querySelector('.click-me');
const middleContainer = document.querySelector('.middle-container');

// selezione dei vari radio button
const circleOne = document.querySelector('.first-circle');
const circleTwo = document.querySelector('.second-circle');
const circleThree = document.querySelector('.third-circle');
const circleFour = document.querySelector('.fourth-circle');
const circleFive = document.querySelector('.fifth-circle');

// variabile del titolo e del paragrafo
titleHTML.innerHTML = titleArray[currentIndex];
paragraphHTML.innerHTML = paragraphArray[currentIndex];

// stato iniziale dei radio button
if (currentIndex === 0){
    circleOne.style.backgroundColor = 'chartreuse';
} else {
    circleOne.style.backgroundColor = 'white';
}

// funzioni per i radio button
function radioButtonClick (radio1, radio2, radio3, radio4, radio5){
    radio1.addEventListener('click', function(){
        currentIndex === 0;
    });
    
    radio2.addEventListener('click', function(){
        currentIndex === 1;
    });
    
    radio3.addEventListener('click', function(){
        currentIndex === 2;
    });
    
    radio4.addEventListener('click', function(){
        currentIndex === 3;
    });
    
    radio5.addEventListener('click', function(){
        currentIndex === 4;
    });   
}

function radioButtonChange (radio1, radio2, radio3, radio4, radio5){
    if (currentIndex === 0){
        radio1.style.backgroundColor = 'chartreuse';
    } else{
        radio1.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 1){
        radio2.style.backgroundColor = 'chartreuse';
    } else{
        radio2.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 2){
        radio3.style.backgroundColor = 'chartreuse';
    } else{
        radio3.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 3){
        radio4.style.backgroundColor = 'chartreuse';
    } else{
        radio4.style.backgroundColor = 'white';
    }
    
    if (currentIndex === 4){
        radio5.style.backgroundColor = 'chartreuse';
    } else{
        radio5.style.backgroundColor = 'white';
    } 
}

// inizio degli eventi click della pagina 
buttonLeft.addEventListener('click', function(){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = titleArray.length-1;
    }
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    let radioButtonsClick = radioButtonClick(circleOne, circleTwo, circleThree, circleFour, circleFive);   
    let radioButtonsChange = radioButtonChange(circleOne, circleTwo, circleThree, circleFour, circleFive);
});

buttonRight.addEventListener('click', function(){
    currentIndex++;
    if (currentIndex > titleArray.length-1){
        currentIndex = 0;
    }
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    let radioButtonsClick = radioButtonClick(circleOne, circleTwo, circleThree, circleFour, circleFive);   
    let radioButtonsChange = radioButtonChange(circleOne, circleTwo, circleThree, circleFour, circleFive);
});

buttonRefresh.addEventListener('click', function(){
    currentIndex = 0;
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];
       
    let radioButtonsChange = radioButtonChange(circleOne, circleTwo, circleThree, circleFour, circleFive);
});

circleOne.addEventListener('click', function(){
    currentIndex = 0;
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    let radioButtonsChange = radioButtonChange(circleOne, circleTwo, circleThree, circleFour, circleFive);
});

circleTwo.addEventListener('click', function(){
    currentIndex = 1;
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    let radioButtonsChange = radioButtonChange(circleOne, circleTwo, circleThree, circleFour, circleFive);
});

circleThree.addEventListener('click', function(){
    currentIndex = 2;
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    let radioButtonsChange = radioButtonChange(circleOne, circleTwo, circleThree, circleFour, circleFive);
});

circleFour.addEventListener('click', function(){
    currentIndex = 3;
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    let radioButtonsChange = radioButtonChange(circleOne, circleTwo, circleThree, circleFour, circleFive);
});

circleFive.addEventListener('click', function(){
    currentIndex = 4; 
    titleHTML.innerHTML = titleArray[currentIndex];    
    paragraphHTML.innerHTML = paragraphArray[currentIndex];
    middleContainer.style.backgroundColor = colorArray[currentIndex];

    let radioButtonsChange = radioButtonChange(circleOne, circleTwo, circleThree, circleFour, circleFive);
});

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