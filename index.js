'use strict'

const IOTA = require('iota.lib.js')
const iota = new IOTA({ 'provider': 'http://node02.iotatoken.nl:14265' })

//Creamos nuestra address, esta es inventada y no tiene importancia al ser una address para demo y de valor 0
const trytes = 'NIITLOVESIOTAANDARDUINONIITLOVESIOTAANDARDUINONIITLOVESIOTAANDARDUINO99CHRISLAIVE'

//Hacemos uso de la libreria de IOTA con el método 'toTrytes()' para convertir nuestro mensaje a trytes
let message = iota.utils.toTrytes('Mi primera transacción de valor 0 IOTAS en el ArduinoDay Perú!')

//Creamos un objeto transferencia con los valores anteriores y asignamos 'value': cero, al ser una transacción sin valor
const transfers = [
    {
        value: 0,
        address: trytes,
        message: message,
		tag: 'ARDUINODAYPERU'
    }
]

//Realizamos la transferencia con el método asyncrono con el callback
iota.api.sendTransfer(trytes, 3, 14, transfers, (error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Se realizó la transacción con exito!')
		console.log('\n Detalle de la transacción:\n\n') 
		console.log(success)
    }
})