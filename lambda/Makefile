STACK_NAME=ybr-lambda-dev
BUCKET_NAME=ybr-backend-buildbucket.com
AWS_REGION=us-east-1

.PHONY: deploy

deploy:
	sam build \
		--region $(AWS_REGION) 
	sam package \
		--template-file template.yml \
		--s3-bucket $(BUCKET_NAME) \
		--output-template-file packaged.yaml
	aws cloudformation deploy \
			--region $(AWS_REGION) \
			--template-file packaged.yaml \
			--capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
			--stack-name $(STACK_NAME) \
			--parameter-overrides DatabaseName=$(DB_NAME) \
				DBAuroraClusterArn=$(DB_CLUSTER_ARN) \
				DBSecretsStoreArn=$(DB_SECRETS_ARN)
	aws cloudformation describe-stacks --stack-name $(STACK_NAME) --region $(AWS_REGION) --query 'Stacks[].Outputs'	