const rango = document.querySelector(".rango");
const cienk = document.querySelector("#nombre");
const precio = document.querySelector("#precio");
let switche = document.querySelector("#switch");
let juego = document.querySelector("#imagen-juego")


    function printPageViews(){
        if(rango.value == "0"){
            juego.style.backgroundImage = "url('images/img-1.jpg')";
            cienk.textContent = "Game Boy";
            precio.textContent = "35.00";
        }else if(rango.value == "25"){
            juego.style.backgroundImage = "url('images/img-2.jpg')";
            cienk.textContent = "Play Station";
            precio.textContent = "75.00";
        }else if(rango.value == "50"){
            juego.style.backgroundImage = "url('images/img-3.jpg')";
            cienk.textContent = "Super Nintendo";
            precio.textContent = "85.00";
        }else if(rango.value == "75"){
            juego.style.backgroundImage = "url('images/img-4.jpg')";
            cienk.textContent = "Xbox";
            precio.textContent = "100.00";
        }else if(rango.value == "100"){
            juego.style.backgroundImage = "url('images/img-6.jpg')";
            cienk.textContent = "Nintendo Switch";
            precio.textContent = "419.00";
        }
    }
    rango.addEventListener("input",function (){
        let x = rango.value;
        let color = `linear-gradient(90deg, rgb(80, 172, 233) ${x}% ,hsl(0, 3%, 85%) ${x}% )`;
        rango.style.background = color;

        printPageViews()
        if(switche.checked == true){
            let x = precio.textContent*0.50;
            precio.textContent = precio.textContent - x;
        }else{
            printPageViews() 
        }
    });

    switche.addEventListener("input",function(){

        if(switche.checked == true){
            let x = precio.textContent*0.50;
            precio.textContent = precio.textContent - x;
        }else{
            printPageViews() 
        }
    })