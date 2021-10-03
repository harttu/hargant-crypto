if [ "$1" == "MINE" ]; then
curl http://localhost:${2}/mine
fi

if [ "$1" == "TRANS_1" ]; then
curl -X POST -i http://localhost:${2}/transaction -H "Content-Type: application/json" \
--data "{ \"amount\": $3,\"sender\": \"SENDER1\",\"recipient\": \"SENDER2\"}"
fi

if [ "$1" == "REG_NODE" ]; then
curl -X POST -H "Content-Type: application/json" --data "{\"newNodeUrl\": http://localhost:3002}" http://localhost:$2/register-node/
fi

if [ "$1" == "REG_AND_BROADCAST_NODE" ]; then
curl -X POST -H "Content-Type: application/json" --data "{\"newNodeUrl\": \"http://localhost:3004\"}" http://localhost:$2/register-and-broadcast-node/
fi

if [ "$1" == "REG_NODES_BULK" ]; then
curl -X POST -H "Content-Type: application/json" --data "{\"allNetworkNodes\": [\"http://localhost:3004\",\"http://localhost:3005\"]}" http://localhost:$2/register-nodes-bulk/
fi

if [ "$1" == "GET_BC" ]; then
curl -X GET http://localhost:$2/blockchain #> .tmp.output
#json_pp -json_opt pretty,canonical .tmp.output
fi
#"newNodeUrl": "http://localhost:3002:"
