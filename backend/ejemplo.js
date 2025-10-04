function esperar(ms) {
    console.log('Pongo a freír papas');
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Papas fritas listas');
            resolve();
        }, ms);
    });
}

async function cocinar() {
    console.log('Empiezo a cocinar');
    const promesaPapas = esperar(3000);
    console.log('Pico cebolla (no esperé a las papas)');
    await promesaPapas; 
    console.log('Sigo cocinando después de las papas');
}

cocinar();

