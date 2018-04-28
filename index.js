'use strict'

const IOTA = require('iota.lib.js')
const iota = new IOTA({ 'provider': 'http://iotahosting.org:14265' })

//Create a new address and doesnt matter which one we choose because this is a 0 value transaction
const trytes = 'NIITLOVESIOTANIITLOVESIOTANIITLOVESIOTANIITLOVESIOTANIITLOVESIOTA999CHRISLAIVE999'

//We used a method from iota.utils called "toTrytes()" to convert our message to Trytes
let message = iota.utils.toTrytes('¡My first transaction to 0 IOTAS with NiiT UNMSM and @Chrislaive!')

//We create a transfer object with that data and set value in 0 for our free transaction
const transfers = [
    {
        value: 0,
        address: trytes,
        message: message,
		tag: 'CHRISLAIVELOVESIOTA'
    }
]

//In this part we send our object transfer with a callback and give some details
iota.api.sendTransfer(trytes, 3, 14, transfers, (error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log('\n Transaction Success!!')
		console.log('\n Details of the transaction: \n') 
		console.log(success)
		console.log('\n\n Encrypted message:\n')
		console.log(iota.utils.fromTrytes(message))
		console.log('\n Go to https://thetangle.org and paste this Hash for find your transaction in tangle: \n')
		console.log(success[0].hash)
    }
})
