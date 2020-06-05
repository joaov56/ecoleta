// import sqlite3
const sqlite= require('sqlite3').verbose();


// create database operation
const db= new sqlite.Database("./src/database/database.db")

module.exports= db
//using db
db.serialize(()=>{
    //creating a table
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

//     //insert data
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES(
//         ?,?,?,?,?,?,?
//     );
// `
//     const values=  [
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj",
//         "Papersider",
//         "Guilherme Gemballa, Gramado",
//         "Numero 259",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papelão e papeis"
//     ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err);
            
//         }
//         console.log("Cadastrado com sucesso");
//         console.log(this);
//     }

//     db.run(query, values, afterInsertData)


    
//     //consult data
//     db.all(`SELECT * FROM places`, function(err, rows){
//         if(err){
//             return console.log(err);
            
//         }
    
//         console.log(rows)
        
//     })
    
    
    //delete data
    // db.run(`DELETE FROM places WHERE id=?`, [7])
})

