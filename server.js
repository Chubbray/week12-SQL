const mysql = require('mysql2');

// Creates the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3001,
  // Your MySQL username
  user: "Chubbray",
  // Your MySQL password
  password: " ",
  database: "employeeManeger"
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  afterConnection();
});

afterConnection = () => {
  connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};