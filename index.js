'use strict'

import {composeAPI} from '@iota/core'
import {asciiToTrytes,trytesToAscii} from '@iota/converter'

const iota = composeAPI({
    provider: 'https://nodes.thetangle.org:443'
})

//Create a new address and doesnt matter which one we choose because this is a 0 value transaction
const trytes = '9CHRISLAIVELOVESIOTA9CHRISLAIVELOVESIOTA9CHRISLAIVELOVESIOTA9CHRISLAIVELOVESIOTA9'

//We used a method from iota.utils called "toTrytes()" to convert our message to Trytes
let message = asciiToTrytes('My first transaction to 0 IOTAS with @Chrislaive!')

//We create a transfer object with that data and set value in 0 for our free transaction
const transfers = [
    {
        value: 0,
        address: trytes,
        message: message,
		tag: 'CHRISLAIVELOVESIOTA'
    }
]

//In this part we send our object transfer with some details

iota.prepareTransfers(trytes, transfers)
    .then(trytes1=>{
        return iota.sendTrytes(trytes1,3,14)
    })
    .then(bundle=>{
        console.log('\n Transaction Success!!')
		console.log('\n Details of the transaction: \n') 
		console.log('\n\n Encrypted message:\n')
		console.log(trytesToAscii(message))
		console.log('\n Go to https://thetangle.org and paste this Hash for find your transaction in tangle: \n')
		console.log(bundle[0].hash)
    })
    .catch(err=>{
        console.log('Something fail.')
    })