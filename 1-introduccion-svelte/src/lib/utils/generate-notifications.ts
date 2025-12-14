import { loremIpsum } from "lorem-ipsum";
import { v4 as uuidv4 } from "uuid";

export function generateNotifications(length: number = 10) {
    return Array(length)
    .fill(null) // Crear un array con 'length' elementos, todos inicializados a null.
    .map((n, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i); // Establecer la fecha sumando 'i' días a la fecha actual.

        return {
            id: uuidv4(), // Generar un ID único para cada notificación.
            title: loremIpsum({
                count: 1, sentenceLowerBound: 5, sentenceUpperBound: 10
            }), // Generar un título con Lorem Ipsum, count = 1 oración, con entre 5 y 10 palabras.
            body: loremIpsum({
                count: 1, sentenceLowerBound: 20, sentenceUpperBound: 25
            }), // Generar un cuerpo con Lorem Ipsum, count = 1 oración, con entre 20 y 25 palabras.
            date: date.getTime() // Obtener la representación en milisegundos de la fecha.            
        }
    })
}