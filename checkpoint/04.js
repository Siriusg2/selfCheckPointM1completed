// 4️⃣ ***** EJERCICIO 4 RECURSIÓN***** - atenderClientes() 4️⃣
//
//
// Implementar la función 👨‍👨‍👦 atenderClientes() 👨‍👨‍👧, la cual recibirá por parámetros un objeto
// de clientes que estarán esperando ser atendidos. Recursivamente debes eliminar los clientes hasta dejar el objeto vacío
//
//
// EJEMPLOS:
// Dado el siguiente objeto de clientes:
// {
//  1: "Franco",
//  2: "María",
//  3: "Alejo"
// }
//
// atenderClientes(clientes) Devuelve ➡ {}
//
// REQUISITOS:
//  🟢 Vaciar recursivamente el objeto de clientes y retornar el objeto vacío
// 
// Tip: Podés usar el operador delete para los objetos.

function atenderClientes(clientes) {
  // Tu código aquí:
  let arr = [];

  for (const key in clientes) {
   arr.push(key)   
    }

   
if (clientes[arr[0]] == clientes[arr[0]]){
delete clientes[arr[0]];
arr.shift();}

if (arr.length) return atenderClientes(clientes)
return clientes
  }
  

  


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  atenderClientes,
};