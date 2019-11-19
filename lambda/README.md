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
sam local invoke ApplicationsFunction --event ./api/test/applications_event.json --template template.yml --log-file ./api/test/sam.log
sam local invoke HelloFunction --event ./api/test/applications_event.json --template template.yml --log-file ./api/test/sam.log

