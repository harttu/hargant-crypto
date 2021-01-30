const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

//bitcoin.createNewBlock(123,'ASDASD','QWQWE');
//bitcoin.createNewBlock(34,'ERTSD','YUIYUiE');

bitcoin.createNewBlock(663,'XCVXCVSD','HJHJK');
bitcoin.createNewTransaction(100,'ALEX234ASDASD','JENDFGDFGDFG');

bitcoin.createNewBlock(123,"ERTERT","UIOPOI")

bitcoin.createNewTransaction(300,'ALEX234ASDASD','JENDFGDFGDFG');
bitcoin.createNewTransaction(600,'ALEX234ASDASD','JENDFGDFGDFG');

bitcoin.createNewBlock(11123,"QWEERTERT","QWEUIOPOI")

console.log(bitcoin.chain[2]);
