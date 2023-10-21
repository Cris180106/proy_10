//hecho por Juan Bernal y Cristian Pimiento

/*Este código en JavaScript crea un prototipo de aplicación utilizando unalínea de comandos que presenta un menú con el que la gente puede interactuiar,
 el menú ofrece varias opciones, como agregar productos, mostrar listas d los productos, y otras mas 
 para que funcione la interacciuon , se usan funciones como mostrarMenu y pausa  que le permiten al usuario seleccionar una
  opción y pausar la ejecucion para poder ver el resultado de la opcion seleccionada*/


// Importación del módulo readline para interactuar con el usuario a través de la línea de comandos.
const readline = require('readline');

// Función para mostrar el menú principal
function mostrarMenu() {
    return new Promise((resolve) => {
        // Crea una interfaz readline para entrada y salida estándar.
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        // Encabezado del menú
        console.log('\n************************************');
        console.log('      Menú Principal');
        console.log('************************************\n');

        // Opciones del menú
        console.log('1. Agregar un producto nuevo');
        console.log('2. Lista de productos');
        console.log('3. Lista de clientes');
        console.log('4. Lista de pedidos');
        console.log('5. pedidos a domicilio');
        console.log('6. eliminar pedido');
        console.log('0. salir\n');

        // Pregunta al usuario por su selección
        rl.question('Seleccione una opción: ', (opt) => {
            rl.close();  // Cierra la interfaz readline.
            resolve(opt);  // Resuelve la promesa con la opción seleccionada por el usuario.
        });
    });
}

// Función para pausar y esperar a que el usuario presione Enter
function pausa() {
    return new Promise((resolve) => {
        // Crea una interfaz readline para entrada y salida estándar.
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        // Pregunta al usuario que presione Enter
        console.log('');
        rl.question('Presione Enter para continuar...', (opt) => {
            rl.close();  // Cierra la interfaz readline.
            resolve();  // Resuelve la promesa cuando el usuario presiona Enter.
        });
    });
}

// Función principal (utiliza una función asíncrona autoinvocada)
(async () => {
    let opt = '';
    do {
        opt = await mostrarMenu();  // Espera a que el usuario seleccione una opción del menú.

        // Realiza acciones según la opción seleccionada por el usuario.
        switch (opt) {
            case '1':
                console.log('Opción 1 seleccionada: Crear un nuevo producto.');
                break;
            case '2':
                console.log('Opción 2 seleccionada: Listar productos.');
                break;
            case '3':
                console.log('Opción 3 seleccionada: Listar clientes.');
                break;
            case '4':
                console.log('Opción 4 seleccionada: Listar pedidos.');
                break;
            case '5':
                console.log('Opción 5 seleccionada: Enviar pedidos.');
                break;
            case '6':
                console.log('Opción 6 seleccionada: Borrar pedido.');
                break;
            case '0':
                console.log('Saliendo...');  // Muestra un mensaje de salida.
                break;
            default:
                console.log('Opción no válida. Intente de nuevo.');  // Muestra un mensaje de opción no válida.
                break;
        }

        if (opt !== '0') await pausa();  // Espera a que el usuario presione Enter para continuar, a menos que la opción sea salir (0).
    } while (opt !== '0');  // Repite el bucle hasta que el usuario elija salir (0).
})();

// Exporta las funciones mostrarMenu y pausa para su uso en apps o en otros lados
module.exports = { mostrarMenu, pausa };
