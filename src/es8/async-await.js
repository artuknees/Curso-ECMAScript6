const heladeria = (dinero) => {
    return new Promise((resolve, reject) => {
        if (dinero > 500) {
            console.log('Estamos preparando tu helado');
            setTimeout(() => resolve('Acá está tu helado'),3000)
        } else {
            reject('No tenés suficiente dinero');
        }
    })
}

const vamos_a_pedir = async (monedas) => {
    try {
        console.log('Bienvenido a la heladeria.')
        const comprar = await heladeria(monedas);
        console.log(comprar);
        console.log('Gracias por tu compra!')
    } catch (error) {
        console.log(error);
    }// prueba ejecutar algo y si no puede, hace el catch.
}

vamos_a_pedir(500);



