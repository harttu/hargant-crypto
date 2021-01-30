const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

console.log(bitcoin);

/*
const previousBlockHash = 'ASDFSADFSDF';
const currentBlockData = [
	{
		amount : 10,
		sender: 'DSAFSDFSDF',
		recipient: 'QWERWERWER',
	},
	{
		amount : 310,
		sender: 'WERDSAFSDFSDF',
		recipient: 'WERQWERWERWER',
	},
	{
		amount : 210,
		sender: 'DAFSDFSDG',
		recipient: 'QWERWERWER',
	}
];
// */
//const nonce = 100;
//console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData));

//console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,34806));

//console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce));



//bitcoin.createNewBlock(123,'ASDASD','QWQWE');
//bitcoin.createNewBlock(34,'ERTSD','YUIYUiE');
/*
bitcoin.createNewBlock(663,'XCVXCVSD','HJHJK');
bitcoin.createNewTransaction(100,'ALEX234ASDASD','JENDFGDFGDFG');

bitcoin.createNewBlock(123,"ERTERT","UIOPOI")

bitcoin.createNewTransaction(300,'ALEX234ASDASD','JENDFGDFGDFG');
bitcoin.createNewTransaction(600,'ALEX234ASDASD','JENDFGDFGDFG');

bitcoin.createNewBlock(11123,"QWEERTERT","QWEUIOPOI")
*/
console.log(bitcoin.chain[2]);
