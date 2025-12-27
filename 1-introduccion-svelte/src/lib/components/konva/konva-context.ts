import type Konva from "konva";
import { getContext, setContext } from "svelte";

const escenarioKey = Symbol('konva-escenario');
const capaKey = Symbol('konva-capa');

export  function setEscenarioContext(getEscenario: () => Konva.Stage) {
    setContext(escenarioKey, getEscenario);
}

export function getEscenarioContext() {
    const getEscenario = getContext<() => Konva.Stage>(escenarioKey);

    if (!getEscenario) {
        throw new Error('Una capa debe estar dentro de un Escenario');
    }
    
    const escenario = getEscenario();
    
    return escenario;
}

export function setCapaContext(capa: Konva.Layer) {
    setContext(capaKey, capa);
}

export function getCapaContext() {
    const capa = getContext<Konva.Layer>(capaKey);
    
    if (!capa) {
        throw new Error('Un componente debe estar dentro de una Capa como padre');
    }

    return capa;
}