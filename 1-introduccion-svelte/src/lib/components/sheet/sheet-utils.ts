export type Celda = {
    value?: string,
    bgColor?: string,
    color?: string
}

 export function alfabeANumero(letras: string) {
    // Convierte letras de columna de Excel (A, B, ..., Z, AA, AB, ...) a número (1, 2, ..., 26, 27, 28, ...).
    return letras.split('').reduce((r, a) => r * 26 + parseInt(a, 36) - 9, 0);
 }

 export function celdaAIndice(celda: string) {
    const regex = new RegExp('([0-9]+)|([a-zA-Z]+)', 'g'); // 'g' para búsqueda global.
    const columnaFila = celda.match(regex);

    return {
        col: alfabeANumero(columnaFila?.[0] || ''),
        row: Number(columnaFila?.[1])
    }
 }

 const letras = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
 ]

 export function numeroAAlfabeto(index: number): string {
    index -= 1; // Ajustar para índice base 0.

    const coeficiente = Math.floor(index / 26); // Determina cuántas "vueltas" completas de 26 letras.

    if ( coeficiente > 0 ) {
        return numeroAAlfabeto(coeficiente) + letras[index % 26];
    }

    return letras[index % 26];
 }