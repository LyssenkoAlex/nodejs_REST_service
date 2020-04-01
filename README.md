# nodejs_REST_service
nodejs_REST_service

#get priject
npm -init

## start server
npm start
 you should get 'Express server currently running on port 4000'


sample json
GET
address
http://localhost:4000/accounts/

POST
address
http://localhost:4000/accounts/
body
{
	"id": 4,
	"username": "davesmith",
	"role": "admin"
}

PUT
address
http://localhost:4000/accounts/1
body
{
	"role": "guest"
}
