const express = require('express')
const app = express()
const port = 3000
const sql = require('mssql'); // MS Sql Server client

// Connection string parameters.
const sqlConfig = {
    user: 'seguin_admin',
    password: 'Admin1234!',
    server: 'mysql-seguin.alwaysdata.net',
    database: 'seguin_chaisemusicale'
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/meubles', function (req, res) {
  sql.connect(sqlConfig, function() {
      const request = new sql.Request();
      console.log(request)
      request.query('select * from Meubles', function(err, recordset) {
          if(err) console.log(err);
          res.end(JSON.stringify(recordset)); // Result in JSON format
          console.log("je teste des trucs");
          console.log(recordset['Meubles']);
      });
  });
})

