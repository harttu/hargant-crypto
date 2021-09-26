if [ "$1" == "MINE" ]; then
curl http://localhost:${2}/mine
else
curl -X POST -i http://localhost:${2}/transaction -H "Content-Type: application/json" \
--data "{ \"amount\": $3,\"sender\": \"SENDER1\",\"recipient\": \"SENDER2\"}"
fi
