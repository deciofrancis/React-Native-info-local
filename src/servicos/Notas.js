import { db } from "./SQLite";

export function criaTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXIST " + 
            "Notas " + 
            "(id INTEGER PRIMERY KEY AUTOINCREMENT, titulo TEXT, cetegoria TEXT, texto TEXT);")
    })
}

export async function adicionaNota(nota) {
    return new Promise((resolve) => {
      db.transaction((transaction) => {
        transaction.executeSql("INSERT INTO Notas (titulo, categoria, texto) VALUES (?, ?, ?);", [nota.titulo, nota.categoria, nota.texto], () => {
          resolve("Nota adicionada com sucesso!")
        })
      })
    })
  }

export async function buscaNotas() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Notas;", [], (transaction, resultado) => {
                resolve(resultado.rows._array)
            })
        })
    })
}