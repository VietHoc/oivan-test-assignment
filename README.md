<h1>Live demo</h1>
<a href="https://short-est.herokuapp.com/">https://short-est.herokuapp.com/</a>

<br>

<h1>Project setup</h1>

<h3>1. Clone project</h3>
  
  `git clone git@github.com:VietHoc/oivan-test-assignment.git`

  
<h3>2. Docker</h3>

- Go to the root folder: `cd oivan-test-assignment`
- Make sure you started docker and build: `docker compose build`
- Start web app: `docker compose up -d`

<h3>3. Setup manual<h3>

  - 3.1 Frontend writer in angular 15
    - Node version >= 16.14.2
    - Install angular cli: `npm install angular-cli --latest`
    - Go to the root frontend project: `cd url-shortener-frontend`
    - Install packages: `npm install`
    - Start frontend: `npm start`

  - 3.2 Backend ruby on rails on MacOS
    - Install `rvm`: <a href="https://rvm.io/rvm/install>https://rvm.io/rvm/install">https://rvm.io/rvm/install</a>
    - Install ruby via rvm and postgressql: <a href="https://guides.rubyonrails.org/v5.1/getting_started.html">https://guides.rubyonrails.org/v5.1/getting_started.html</a>
    - Go to the root backend project: `cd url-shortener-backend`
    - Install gems: `bundle install`
    - Migration database: `rails db:setup:migration`
    - Start backend: `rails s`

<h3>4. Verify setup</h3>

- Go to local app: <a href="http://localhost:4200">http://localhost:4200</a> and do some tests.
- Import postman collection by file: `ShortenerURL.postman_collection.json` to manual test the api.
- Or can use curl:
  
  Encode url: 
  `curl --location 'localhost:3000/api/encode' \
--header 'Content-Type: application/json' \
--data '{
    "original_url": "http://www.example.com"
}'`

  Decode url:
  `curl --location --request GET 'localhost:3000/api/decode' \
--header 'Content-Type: application/json' \
--data '{
    "short_url": "http://localhost:3000/uoeYgw"
}'`

<h1>Potential attack vectors on the application</h1>

- Allow only self origin to request to server.
- Open only port needed like 3000 in server deploy
- Block ips is any request ips spam / DDOs server
- etc...

<h1>Features can implements when app scale up</h1>
  
- Add strong authenticator feature: jwt - 2fa
- Manager full link history of user if user logged in
- Add time expired for saved link for visiters to clean the records of url table.
- Add feature for user can custom uri - short url: for subscribed users
- etc...


## Authors
- My Linkedin profile [Viet Hoc Le](https://www.linkedin.com/in/le-viet-hoc-43205aa7/). 
