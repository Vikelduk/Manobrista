canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 

carroWidth = 100; 
carroHeight = 90;

backgroundImage = "parkingLot.jpg";
carroImage = "car2.png";

carroX = 10; 
carroY = 220;


function add() 
{
    backgroundImgTag = new Image(); 
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;
    
    carroImgTag = new Image();
    carroImgTag.onload = uploadcarro;
    carroImgTag.src = carroImage;
}


function uploadBackground()
{
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height); 
} 


function uploadcarro() 
{
    ctx.drawImage(carroImgTag, carroX, carroY, carroWidth, carroHeight); 
}


window.addEventListener("keydown", myKeyDown); 

function myKeyDown(e) 
{ 
    keyPressed = e.keyCode; 
    console.log(keyPressed); 
    
    if(keyPressed == '38') 
    { 
        up(); 
        console.log("cima"); 
    } 
    
    if(keyPressed == '40') 
    {
         down(); 
         console.log("baixo"); 
    } 
    
    if(keyPressed == '37') 
    { 
        left(); 
        console.log("esquerda"); 
    } 
    
    if(keyPressed == '39') 
    { 
        right(); console.log("direita"); 
    }
}


function up() 
{
     if(carroY >=0) 
     {
         carroY = carroY - 10; 
         console.log("Quando direcional cima for pressionada, x = " + carroX + " | y = " + carroY); 
         uploadBackground(); 
         uploadcarro();
         console.log(carroY);
         console.log(carroX);
    } 
}


function down() 
{
    if(carroY <=380) 
    { 
        carroY =carroY+ 10; 
        console.log("Quando direcional baixo for pressionada, x = " + carroX + " | y = " +carroY); 
        uploadBackground(); 
        uploadcarro();
        console.log(carroY);
        console.log(carroX);
    } 
}


function left() 
{ 
    if(carroX >= 0) 
    { 
        carroX =carroX - 10; 
        console.log("Quando direcional esquerda for pressionada, x = " + carroX + " | y = " +carroY); 
        uploadBackground(); 
        uploadcarro();
        console.log(carroY);
        console.log(carroX);
    }
}


function right() 
{
    if(carroX <= 780) 
    { 
        carroX =carroX + 10; 
        console.log("Quando direcional direita for pressionada, x = " + carroX + " | y = " +carroY); 
        uploadBackground(); 
        uploadcarro();
        console.log(carroY);
        console.log(carroX); 
    }         
}

if ((carroY == 100)|| (carroX == 420))
{
   carroY = 220;
   carroX = 10;
   document.getElementById("parabens").value = "Parabéns, você conseguiu!";
}




