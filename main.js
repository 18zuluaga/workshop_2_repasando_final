// Ejercicio 1

// let respuestaGlobalScope = prompt(`// Global Scope\n
// var globalVariable = "Soy una variable global.";\n \n

// function testScope() {\n
//   // Function Scope\n
//   var functionVariable = "Soy una variable local.";\n\n

//   if (true) {\n
//     // Block Scope\n
//     let blockVariable = "Soy una variable de bloque.";\n
//     console.log("Dentro del bloque:", blockVariable);\n
//   }\n\n

//   console.log("Dentro de la función:", functionVariable);\n
// }\n\n

// console.log("Fuera de la función:", globalVariable);\n
// testScope();\n\n

// ¿La variable globalVariable se puede acceder correctamente en la linea de codigo:console.log("Fuera de la función:", globalVariable) si o no y porque? \n
// si tu respuesta es afirmativa tiene que empezar por si por que
// `).toLowerCase()


// let respuestaFuctionScope = prompt(`// Global Scope\n
// var globalVariable = "Soy una variable global.";\n \n

// function testScope() {\n
//   // Function Scope\n
//   var functionVariable = "Soy una variable local.";\n\n

//   if (true) {\n
//     // Block Scope\n
//     let blockVariable = "Soy una variable de bloque.";\n
//     console.log("Dentro del bloque:", blockVariable);\n
//   }\n\n

//   console.log("Dentro de la función:", functionVariable);\n
// }\n\n

// console.log("Fuera de la función:", globalVariable);\n
// testScope();\n\n

// ¿La variable functionVariable se puede acceder correctamente en la linea de codigo:console.log("Dentro de la función:", functionVariable); si o no y porque? \n
// si tu respuesta es afirmativa tiene que empezar por si por que
// `).toLowerCase()

// let respuestaBlockScope = prompt(`// Global Scope\n
// var globalVariable = "Soy una variable global.";\n \n

// function testScope() {\n
//   // Function Scope\n
//   var functionVariable = "Soy una variable local.";\n\n

//   if (true) {\n
//     // Block Scope\n
//     let blockVariable = "Soy una variable de bloque.";\n
//     console.log("Dentro del bloque:", blockVariable);\n
//   }\n\n

//   console.log("Dentro de la función:", functionVariable);\n
// }\n\n

// console.log("Fuera de la función:", globalVariable);\n
// testScope();\n\n

// ¿La variable blockVariable se puede acceder correctamente en la linea de codigo:console.log("Dentro del bloque:", blockVariable); si o no y porque? \n
// si tu respuesta es afirmativa tiene que empezar por si por que
// `).toLowerCase()

// if(respuestaGlobalScope.includes("si por que")){
//     alert(`Correcto puede acceder correctamente ya que la variable globalVariable  es una variable var`);
// }else{
//     alert("incorrecto ya que se puede acceder correcta mente ala variable globalVariable  ya que esta inicializada con var y puede acceder a todo el codigo");
// }
// if(respuestaFuctionScope.includes("si por que")){
//     alert(`Correcto puede acceder correctamente ya que la variable fuctionVariable es llamada y inicializada dentro de la mismas funcion`);
// }else{
//     alert(`incorrecto ya que puede acceder a toda la funcion donde fue inicializada y el console.log con el que llamamos la variable esta dentro de la misma funcion de la varible si estuviera por fuera de la funcion tu respuesta seria correcta `);
// }
// if(respuestaBlockScope.includes("si por que")){
//     alert(`Correcto ya que la variable es let y la estas llamado dentro del mismo bloque`);
// }else{
//     alert(`Incorrecto ya que el console.log con el que llamamos la variable esta dentro del mismo bloque en el que la inicializamos si la llamaramos por fuera del bloque tu respuesta seria correcta`);
// }

//Ejercicio 2
// console.log(`// vars call\n
// console.log("Valor de a:", a);\n
// console.log("Valor de b:", b);\n
// console.log("Valor de c:", c);\n\n

// // functions call\n
// console.log("Resultado de funcionDeclarada:", funcionDeclarada());\n
// console.log("Resultado de funcionExpresada:", funcionExpresada());\n\n

// // vars declaration\n
// var a = 1;\n
// let b = 2;\n
// const c = 3;\n\n

// // functions declarations\n
// function funcionDeclarada() {\n
//   return "Función declarada ha sido llamada.";\n
// }\n\n

// const funcionExpresada = function () {\n
//   return "Función expresada ha sido llamada.";\n
// };`)

// let respuesta1 = prompt("ingrese la opccion que crees que mostraria console.log('Valor de a:', a);\n 1='valor de a:1'\n 2='valor de a:undefind' \n3='valor de a:2' \n4='valor de a:3'")
// if(respuesta1 == 2){
//     alert("Correto ya que a es una variable var y si la llamamos antes de inicializarla mostraria undefind")
// }else{
//     alert("Incorrecto ya que la variable es var y no se puede llamar antes de inicializarla la respuesta correcta seria la 2")
// }
// let respuesta2 = prompt("ingrese la opccion que crees que mostraria console.log('Valor de b:', b);\n 1=Uncaught ReferenceError: can't access lexical declaration 'b' before initialization\n 2='valor de b:undefind' \n3='valor de b:2' \n4=Ninguna de las anteriores")
// if(respuesta2 == 1){
//     alert("Correcto mostraria un error en la consola ya que no podemos llamar una varible let antes de inicializarla")
// }else{
//     alert("Incorrecto ya que mostraria un error por que no podemos llamar una varible antes de inicilizarla entonces la respuesta correcta seria 1")
// }
// let respuesta3 = prompt("ingrese la opccion que crees que mostraria console.log('Valor de c:', c);\n 1=Uncaught ReferenceError: can't access lexical declaration 'b' before initialization\n 2='valor de c:6' \n3='valor de c:3' \n4=Uncaught ReferenceError: can't access lexical declaration 'c' before initialization")
// if(respuesta3 == 4){
//     alert("Correcto mostraria un error en la consola ya que no podemos llamar una varible const antes de inicializarla")
// }else{
//     alert("Incorrecto ya que mostraria un error por que no podemos llamar una varible antes de inicilizarla entonces la respuesta correcta seria 4")
// }
// let respuesta4 = prompt("ingrese la opccion que crees que mostraria console.log('Resultado de funcionDeclarada:', funcionDeclarada());\n 1=Uncaught ReferenceError: can't access lexical declaration 'b' before initialization\n 2='Función declarada ha sido llamada.' \n3=ninguna de las anteriores \n4='Función expresada ha sido llamada.'")
// if(respuesta4 == 2){
//     alert("Correcto por que si es una funcion declarada el hosting hace que se suba pro encima del codigo entonce se iniciliza primero y despues se llamaria")
// }else{
//     alert("Incorrecto ya que las funciones declaradas se pueden llamar antes de ser inicializadas gracias al hosting entonces la respuesta correta seria 2")
// }
// let respuesta5 = prompt("ingrese la opccion que crees que mostraria console.log('Resultado de funcionExpresada:', funcionExpresada());\n 1='hola mundo'\n 2='valor de a:2\n3=Uncaught ReferenceError: can't access lexical declaration 'funcionExpresada' before initialization\n4='Función expresada ha sido llamada.'")
// if(respuesta5 == 3){
//     alert("Correcto mostraria un error por que no puedes llamar una funcion expresada antes de inicializarla ")
// }else{
//     alert("Incorrecto por que no puedes llamar una funcion expresada antes de inicializarla entonces la respuesta correcta es 3")
// }

// Ejercicio 3

// function crearSumador(elemnt){
//     let Number = 3
//     return sumar(Number)
//     function sumar(Number){
//         return elemnt + Number
//     }
// }

// let sumarCinco = crearSumador(5);
// console.log(sumarCinco)

// ¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?
// Respuesta: por que las funciones hijas eredan las variables de las funciones padres
// ¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closures?
// Respuesta: Si se realizan muchos closures se podria ver afectada la memoria ya que se almacenaria las variables de todas las fuciones padres


// Ejercicio 4
// console.log(
//     "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
//   );
//   try {
//     console.log(funcionDeclarada());
//   } catch (error) {
//     console.log("Error:", error.message);
//   }

//   console.log(
//     "Intentando llamar a 'funcionExpresada' antes de su declaración:"
//   );
//   try {
//     console.log(funcionExpresada());
//   } catch (error) {
//     console.log("Error:", error.message);
//   }

//   // Declaración de una función declarada
//   function funcionDeclarada() {
//     return "Función declarada ha sido llamada.";
//   }

//   // Declaración de una función expresada
//   const funcionExpresada = function () {
//     return "Función expresada ha sido llamada.";
//   };

//   console.log("Llamando a 'funcionDeclarada' después de su declaración:");
//   console.log(funcionDeclarada());

//   console.log("Llamando a 'funcionExpresada' después de su declaración:");
//   console.log(funcionExpresada());

//   ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
// Respuesta: si es declarada muestra la respuesta si es expresada da error
// ¿Cómo difieren los resultados entre la función declarada y la función expresada?
// Respuesta:si es declaradas funcionaria con normalidad gracias al hosting si son expresadas entonces nos daria un error 

// ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
// Respuesta: Esto muestra que las funciones declaras puedes ser mas versatiles y no tan estrictas como las expresadas 
// Ejercicio 5


// function manejarAsincronia(callback){
//   new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       if(true){
//         resolve(callback())
//       }else {
//         reject('error')
//       }
//     },2000);
//   });
  
// }

// function callback(){
//   console.log("¡Promesa cumplida y callback ejecutado!")
// }

// manejarAsincronia(callback).then(result => result()).catch(err => console.log(err));

// ¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo? 
// Respuesta: el callback tambien se demoraria mas ya que esta dentro de setTimeout 

// ¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
// Respuesta: en este caso la estamos controlando con el .catch y mostraria un errro por la consola

// ¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
// Respuesta: si al callback le psaramos un paramatro podriamos modificar ese paramatreo dependiendo si es reslve o reject


// ejercicio 6 

// console.log("Mensaje 1: Inmediatamente")

// setTimeout(() => {
//   console.log("Mensaje 2: Con timeout de 0 segundos")
// }, 0 )

// setTimeout(() => {
//   console.log("Mensaje 3: Con timeout de 1 segundos")
// }, 1000 )

// ¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?
// respuesta: Por que setTimeOut es una api y es una macro tarea tiene que esperar a que todo el codigo se ejecute para que despues se ejecuten ellas

// ¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?
// respuesta: en js existe un orden para ejecutar cada parte del codigo para volver mas efectivo el codigo

// ejercicio 7 


// let orden = prompt(`1)console.log("Inicio del script");\n\n

// setTimeout(() => {\n
//   2)console.log("Primer setTimeout");\n
// }, 0);\n\n

// setTimeout(() => {\n
//   3)console.log("Segundo setTimeout");\n
// }, 0);\n\n

// 4)Promise.resolve("Promesa resuelta").then(console.log);\n\n

// 5)console.log("Fin del script");\n\n 

// Predice el orden en el que creas que se va  mostra los mensajes en la consola ejemplo 1,2,3,4,5
// `)


// let ordenCorrecto = ["1","5","4","2","3"]

// let ordenUser  = orden.split(",")
// let correcion ;

// ordenUser.forEach((elemento,index) => {
//   ordenCorrecto.forEach((element,inde) => {
//     if(inde == index && elemento != element && index == 0){
//       correcion += "recuerda que los console.log se ejecutan primero y de manera de cascada \n"
//     }else if(inde == index && elemento != element && index == 1){
//       correcion += "recuerda que los console.log se ejecutan primero y de manera de cascada no importa si esta al final del codigo \n"
//     }else if(inde == index && elemento != element && index == 2){
//       correcion += "recuerda que los promesas son microtareas y se ejecutarian despues de que el call stack este basio pero antes que las las macro tareas\n"
//     }else if(inde == index && elemento != element && index == 3){
//       correcion += "recuerda que los setTimeOut se ejecutan desdes de que no tenga mas micro tareas y el call stack este basio \n"
//     }else if(inde == index && elemento != element && index == 4){
//       correcion += "recuerda que los setTimeOut se ejecutan desdes de que no tenga mas micro tareas y el call stack este basio\n"
//     }
//   });
// });

// if(!correcion){
//   correcion += "felicidades lograste aprender event loop"
// }

// console.log(correcion);

// Ejercicio 8
// let cont = 0;
// while(true){
//   let op = confirm("desea aumentar el contador ok=si cancel=no")
  
//   if(op){
//     contador()
//   }else{
//     break
//   }

// }

// function contador (){
//   let num1 = 1
//   function aumentador(){
//     return cont += num1
//   }
//   return aumentador()
// }

// console.log(cont)

// Ejercicio 9

// let tiempo = Number(prompt("escriba cuanto tiempi deseas demorarte"))

// setTimeout(() =>{
//   console.log(`Despues de ${tiempo} segundos`)
// },tiempo*1000);

// fetch('https://jsonplaceholder.typicode.com/posts').then(Element => Element.json())  


//ejercicio 10

// ¿Qué tareas se consideran macrotareas y cuáles son microtareas?
// Respuesta Macrotareas = setTimeout Microtareas = PromesaS

// ¿Cómo se relacionan las macrotareas y microtareas con el event loop?
//  Respuesta: el event loop organiza para que primero se ejecuten las micho tareas despues las macro tareas

// ¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
// Respuestas: pirmero se pasa como macro tarea espera a que se ejecuten todas las micro tareas despues entra a esa macron tarea la desglosa y pasa a microtarea y se detiene las macro tareas

// ¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
// Respuesta: Las promesas son microtareas y los setTimeOut son macro tareas

// seccion5

const url = "data.json"; // Cambiar por la ruta correcta
    
        // Función para cargar y mostrar el contenido de data.json
        function cargarYMostrarData() {
            // Retorna una nueva promesa que se resuelve después del setTimeout
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Realiza la solicitud fetch dentro del setTimeout
                    fetch(url)
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error("Error al cargar los datos.");
                            }
                            return response.json();
                        })
                        .then((data) => {
                            // console.log("Habitaciones:", data.rooms);
                            // console.log("Tipos de Habitaciones:", data.roomTypes);
                            resolve(data); // Resuelve la promesa con los datos cargados
                        })
                        .catch((error) => {
                            console.error(error);
                            reject(error); // Rechaza la promesa si hay un error
                        });
                }, 0);
            });
        }
        1

        console.log(cargarYMostrarData())
    
        // Llamar a la función para cargar y mostrar el contenido de data.json
        cargarYMostrarData()
            .then(({ rooms, roomTypes }) => {
                let reservas = []
                console.log("holas")
                while(true){
                    let op = prompt("Seleccion una opcion\n 1=Reservar una habitacion")
                    
                    if(op == 1){                        

                        let numeroPersonas = prompt("ingrese cuantas persona se van a quedar en la habitacion"); 
                        let arrayPersonas = roomTypes.filter((Element) => Element.capacity >= numeroPersonas).map(Element => Element.id)
                        const userFechaI = new Date(prompt("Ingrese la fecha de inicio de esta mandea año-mes-dia"))
                        const userFechaF = new Date(prompt("Ingrese la fecha de salida de esta mandea año-mes-dia"))
                        let arrayDisponibles = rooms.filter((room) =>{
                            const reservasMismoRangoFechasHabitacionActual = reservas
                                    .filter((reserva) => {
                                    const isSameRange = userFechaI >= reserva.fechaI  && userFechaF <= reserva.fechaF
                                    return isSameRange && reserva.number === room.number
                                })
                            return arrayPersonas.includes(room.roomTypeId) && !reservasMismoRangoFechasHabitacionActual.length
                        })
                        const userInput = prompt(
                            "Ingrese el numero de habitacion a reservar: " +
                            arrayDisponibles
                                .map((room) => {
                                        return `\nRoom Number: ${room.number} (${roomTypes.find((type) => type.id === room.roomTypeId).name})`;
                                })
                                .join(", ")
                        );
                        let verificacion = arrayDisponibles.map(Element => Element.number)
                        if(!verificacion.includes(Number(userInput))){
                            alert("no ingresaste un numero valido")
                            continue
                        }

                        let nombreUser = prompt("ingrese su nombre para la reserva")

                        
                        let reservaDisponible = rooms.find((Element) => Number(userInput) == Element.number)
                        
                        let reserva = {
                            roomId : reservaDisponible.number,
                            fechaI : userFechaI,
                            fechaF : userFechaF,
                            nombre : nombreUser,
                        }
                        reservas.push(reserva)
                    }
                    console.log(reservas)
                }
                // Mostrar el contenido de las habitaciones después de cargar los datos
                
                // ... Continuar con la lógica de la app
            })
            .catch((error) => {
                console.error("Error al manejar la promesa:", error);
            });
