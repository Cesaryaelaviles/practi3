/**
 * @param {MessageEvent} evt mensaje recibido de la interfaz gráfica. La
 * property data tiene los datos enviados con hilo.postMessage(modelo). */
onmessage = evt => {
  // Calcula y envía de regreso la respuesta a la interfaz gráfica.
  // @ts-ignore
  var suma = parseInt(evt.data.calificacion1)+parseInt(evt.data.calificacion2)+parseInt(evt.data.calificacion3);
  var prom = suma/3;
  postMessage(`Nombre: ${evt.data.nombre1} Matricula: ${evt.data.nombre2} Promedio: `+ prom);
};
