export const config = {
  "dev": {
    "username": "udacitynazardb",
    "password": "udacitynazardb",
    "database": "udacitynazardb",
    "host": "udacitynazardb.cilnlaoudghq.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "eu-central-1",
    "aws_profile": "default",
    "aws_media_bucket": "udacity-nazar-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "bigSecret"
  }
}
