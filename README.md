## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

npm run dev

Make sure app is running, then CTRL-C to continue to next steps.

Create the Prisma client for your NodeJS application:

npx prisma init

Create a database and user for production and another for development. (They can be the same database server for convinience).
For both production and development databases, create a user and grant that user full access to the database.

The prisma init command created a directory in root called prisma/ and also created a .env file if not already present.

Edit the .env file with the cruedentials of your DEVELOPMENT server. This string after the DATABASE_URL= is your DSN.

Visit the Github Project repo and add the DATABASE_URL secret with the PRODUCTION values database DSN.

If using a MySQL or MariaDB, modify the prisma/schama.prisma file to reflect mysql, not the default postgresql value.

Reference the SAMPLES folder for an example schema for setting up your database locally. This Scheme will also get replicated to your production server on Github Deployments.
Copy the contents as needed to YOUR scheme.prisma file as you see fit. Reference Prisma.io's website for further on designing a database schema for all your tables.

Edit the .github/workflows/deploy.yml and remove the 3 comment out lines referring to the DATABASE_URL and running the prisma command after builds. This will enable production database table schema's to stay in sync with development.