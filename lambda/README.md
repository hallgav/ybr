## Available Scripts
In the project directory, you can run:


## API structure
<root>/ybr
<root>/ybr/:id
<root>/ybr/:id/server
<root>/ybr/:id/application

## Test
run this from the lambda folder:

ApplicationsFunction
sam local invoke ApplicationsFunction --event ./test/applications_event.json --template template.yml --log-file ./test/sam.log

Servers Function
sam local invoke ServersFunction --event ./test/servers_event.json --template template.yml --log-file ./test/sam.log

Config Function
sam local invoke ConfigFunction --event ./test/config_event.json --template template.yml --log-file ./test/sam.log

Client Function
sam local invoke ClientFunction --event ./test/client_event.json --template template.yml --log-file ./test/sam.log

The following environment variables need to be set
DB_CLUSTER_ARN
DB_NAME
DB_SECRETS_ARN

Hello Function
sam local invoke HelloFunction --event ./test/applications_event.json --template template.yml --log-file ./test/sam.log

