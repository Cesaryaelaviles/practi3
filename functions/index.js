// Este texto se ejecuta en el servidor.
/** Se importa el objeto functions de la librería "firebase-functions". */
const functions = require('firebase-functions');
 
/* Se exporta la función sobre https llamada "saludo". */
exports.saludo = functions.https.onRequest(
  /** Código para la función saludo.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
      // verifica que el parámetro nombre1 recibido del navegador esté correcto.
      if (!request.query.nombre1) {
        // Entra aquí si el nombre1 es null, undefined o ""
        throw new Error("Falta Nombre");
      } else if (!request.query.nombre2) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta Matricula");
      }else if (!request.query.calificacion1) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta la calificacion 1");
      }else if (!request.query.calificacion2) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta la calificacion 2");
      }else if (!request.query.calificacion3) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta la calificacion 3");
      }
      /* Solo se llega a esta parte si nombre1 y nombre 2 tienen un texto.
       * Devuelve un saludo. */
       var suma = parseInt(request.query.calificacion1)+parseInt(request.query.calificacion2)+parseInt(request.query.calificacion3);
       var prom = suma/3;
      response.send(
        `Nombre: ${request.query.nombre1}   Matricula: ${request.query.nombre2}   Promedio: ` 
        + prom);
    } catch (e) {
      // Devuelve un texto de error.
      response.send(e.message);
    }
  });
