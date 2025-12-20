class ConvertidorMoneda {
    #valorBase: number | undefined = $state(1);
    #monedaActual = $state('usd');
    #tasaCambioActual: Record<string, number> = $state({});
    #monedaObjetivo = $state('eur');
    #valorObjetivo: number | undefined = $state(0);
    // monedasPromesa = fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
    //     .then(response => response.json());
    monedas = $state({});
    cargando = $state(true);
    error: string | undefined = $state(undefined);
    inicialMonedaActual: string | undefined = undefined
    inicialMonedaObjetivo: string | undefined = undefined
    inicialValorBase: number | undefined = undefined

    get valorBase() {
        return this.#valorBase;
    }

    set valorBase(v) {
        this.#valorBase = v && v < 0 ? 0: v;
        this.#valorObjetivo = this.#calularValorObjetivo();
    }

    get monedaActual() {
        return this.#monedaActual;
    }

    set monedaActual(v) {
        this.#monedaActual = v;
        this.#fetchTasasCambio();
    } 

    get valorObjetivo() {
        return this.#valorObjetivo;
    }

    set valorObjetivo(v) {            
        this.#valorObjetivo = v;
        this.#valorBase = this.#calularValorBase();
    }
    
    get tasaCambioActual() {
        return this.#tasaCambioActual;
    }

    set tasaCambioActual(v) {
        this.#tasaCambioActual = v;
        this.#valorObjetivo = this.#calularValorObjetivo();
    }

    get monedaObjetivo() {
        return this.#monedaObjetivo;
    }

    set monedaObjetivo(v) {
        this.#monedaObjetivo = v;
        this.#valorObjetivo = this.#calularValorObjetivo(); 
    }

    constructor(valorBase: number, monedaActual: string, monedaObjetivo: string) {
        this.valorBase = valorBase;
        this.monedaActual = monedaActual;
        this.monedaObjetivo = monedaObjetivo;
        this.inicialValorBase = valorBase;
        this.inicialMonedaActual = monedaActual;
        this.inicialMonedaObjetivo = monedaObjetivo;
        this.#cargarMonedas();

        // $effect(() => {
        //     this.#fetchTasasCambio();
        // })

        this.#fetchTasasCambio();
    }

    async #fetchTasasCambio() {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/' + this.monedaActual + '.json');
        const responseJSON = await response.json();
        this.tasaCambioActual = responseJSON[this.monedaActual];
    }

    async #cargarMonedas() {
        this.cargando = true;
        this.error = undefined;

        try {
            const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
                .then(response => response.json());
            this.monedas = response;
        } catch {
            this.error = 'Error al cargar las monedas';
        } finally {
            this.cargando = false;
        }        
    }

    #calularValorObjetivo() {
        return this.valorBase && this.tasaCambioActual[this.monedaObjetivo] && +(this.valorBase * this.tasaCambioActual[this.monedaObjetivo]).toFixed(3);
    }

    #calularValorBase() {
        return this.valorObjetivo && this.tasaCambioActual[this.monedaObjetivo] && +(this.valorObjetivo / this.tasaCambioActual[this.monedaObjetivo]).toFixed(3);
    }

    get tasa() {
        return this.tasaCambioActual[this.monedaObjetivo];
    }

    switch () {
        const base = this.monedaActual;
        this.monedaActual = this.monedaObjetivo;
        this.monedaObjetivo = base;
    }

    reset() {
        this.valorBase = this.inicialValorBase;
        this.monedaActual = this.inicialMonedaActual || '';
        this.monedaObjetivo = this.inicialMonedaObjetivo || '';
    }
}

export default ConvertidorMoneda;