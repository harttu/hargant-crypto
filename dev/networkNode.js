const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const port = process.argv[2];
const rp = require('request-promise');

const nodeAddress = uuid().split('-').join(''); // get rid of dashes ---

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/blockchain', function(req,res) {
	res.send(bitcoin);
})

app.post('/transaction', function(req,res) {
	const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);

	res.json( { note: `Transaction will be added in block ${blockIndex}.`});

	
	//console.log(req.body);
	//res.send(`The amount of transaction is ${req.body.amount} bitcoin`);
	//res.send('It works!!!')

})

app.get('/mine', function(req,res) {
	const lastBlock = bitcoin.getLastBlock();
	const previousBlockHash = lastBlock['hash'];
	const currentBlockData = {
		transactions: bitcoin.pendingTransactions,
		index: lastBlock['index'] + 1
	};
	const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
	const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
	console.log(blockHash)

	bitcoin.createNewTransaction(12.5, "00", "", nodeAddress);
	const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
	

	

	res.json({ note:"New block mined successfully", block: newBlock });
})

// incoming calls are from new nodes that wants to be registered
app.post('/register-and-broadcast-node', function(req,res) {
	const newNodeUrl = req.body.newNodeUrl; 
	// add if not already added
	if (bitcoin.networkNodes.indexOf(newNodeUrl) == -1 ){ 
		bitcoin.networkNodes.push(newNodeUrl);
	}

	// broadcasting in async, so we will first save promises here
	const regNodesPromises = [];
	bitcoin.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri: networkNodeUrl + '/register-node',
			method: 'POST',
			body: { newNodeUrl: newNodeUrl},
			json: true
		};

		regNodesPromises.push(rp(requestOptions));

		// register-nodei
		//
	});

	Promise.all(regNodesPromises).then( data => {
		const bulkRegisterOptions = {
			uri: newNodeUrl + '/register-nodes-bulk',
			method: 'POST',
			body: allnetworkNodes: [ ...bitcoin.networkNodes, bitcoin.currentNodeUrl ],
			json:true
		};

		return rp(bulkRegisterOptions);
		}
	})
	.then(data => {
		res.json({note: 'New node registered with network successfully'});
	});
});

app.post('/register-node', function(req,res) {


});


app.post('/register-nodes-bulk', function(req,res) {

});

app.listen(port, function() {
	console.log(`Listening on port ${port}...`);
});