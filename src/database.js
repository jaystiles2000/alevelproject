var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
class Database{
    constructor(){

    }
    createuser(name, password, url){
        db.run(`INSERT INTO users(name, password, url) VALUES('jay', 123, 'none')`)
    }
    getuser(){

    }
    getpassword(){

    }
}

db.serialize(function() {
  db.run("CREATE TABLE users (name TEXT, password TEXT, url TEXT)");
 
  db.run(`INSERT INTO users(name, password, url) VALUES('jay', 123, 'none')`)
 
  db.each("SELECT * FROM users", function(err, row) {
      console.log(row.id + ": " + row.name);
  });
});
db.close();0

