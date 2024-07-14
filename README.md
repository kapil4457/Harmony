# Steps to run this Project

- Clone this repo using `git clone https://github.com/kapil4457/Harmony.git .` 
- Change your current directory to the project location : `cd ./harmony`
- Install all the dependencies using : `npm install`
- Create a .env file with the following variables and fill in their values :
```
#NEXT
NEXT_PUBLIC_SITE_URL=http://localhost:3000

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
NEXT_APPWRITE_KEY=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=sandbox
PLAID_PRODUCTS=auth,transactions,identity
PLAID_COUNTRY_CODES=IN,US

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```
- Now you are all good to start the project. You can launch the project using  : `npm run dev`
- The project start on your localhost on port 3000.

# Working Flow for various functions

![image](https://github.com/user-attachments/assets/a8a7c7f1-e2a2-49c9-a660-9f96acdbd109)

![image](https://github.com/user-attachments/assets/cb3eaca7-c37a-4c83-bddf-c73534aca9c5)

