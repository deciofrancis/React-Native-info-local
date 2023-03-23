import { db } from "./SQLite";

export function criaTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXIST " + 
            "Notas " + 
            "(id INTEGER PRIMERY KEY AUTOINCREMENT, titulo TEXT, cetegoria TEXT, texto TEXT);")
    })
}