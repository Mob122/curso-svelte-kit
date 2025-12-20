// Record es una utilidad de TypeScript que permite definir un objeto con claves y valores específicos.

export const rates: Record<string, Record<string, number>> = {
    usd: {
        eur: 0.96,
        gpb: 0.8,
        usd: 1
    }, 
    eur: {
        eur: 1,
        gpb: 0.83,
        usd: 1.04
    },
    gpb: {
        eur: 1.21,
        gpb: 1,
        usd: 1.25
    }
}