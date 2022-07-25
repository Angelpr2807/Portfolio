# Fake shop app

This web page is a simulation of an online store made with html, css, javasctripy and a bit of php.

## How to use?

You will need to install <a href="https://www.apachefriends.org/es/download.html" target="_blank" rel="noopener noreferrer">Xampp</a>, <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">Nodejs</a> and <a href="https://phoenixnap.com/kb/install-node-js-npm-on-windows" target="_blank" rel="noopener noreferrer">npm </a>.

you can clone the folder with the following command

```
git clone https://github.com/Angelpr2807/Portfolio.git
```

Once Xampp is installed, go to the xamp folder that in windows is usually found in the path "C:\xampp" enter the folder "htdocs", then to "dashboard" and clone or move this folder (fake-shop) here ( "C:\xampp\htdocs\dashboard").

For the following steps you should be in the "fake-shop" folder, if you don't know where it is, you can open your terminal and run the "pwd" command and it should look something like this:

```
"C:\xampp\htdocs\dashboard\fake-shop"
```

already located here. in your bash or powershell terminal run the following commands:

```
npm install -g json-server
```

```
json-server -w fake-db/db.json
```

then there will be Xampp and start the Apache and MySQL module.
Copy this url into your browser: https://localhost/dashboard/fake-shop and you are good to go.
