<script module>
    // your script goes here.

    let allVideos: Set<HTMLVideoElement> = new Set();

    export function getAllVideo() {
        return allVideos;
    }

    export function playAll() {
        allVideos.forEach(video => video.play());
    }

    export function pauseAll() {
        allVideos.forEach(video => video.pause());
    }
</script>

<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

    let { src }: {src: string} = $props();

    let duracion = $state(0);
    let tiempoActual = $state(0);
    let pausado = $state(true);
    let seeking = $state(false); // seeking quiere decir "buscando".
    let tasaReproduccion = $state(1);
    let volumen = $state(1);
    let buffered = $state([{start: 0, end: 0}]) // Arreglo de objetos con start y end.


    let video: HTMLVideoElement;

    onMount(() => {
        allVideos.add(video);
    })

    onDestroy(() => {
        allVideos.delete(video);
    })
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<video class="max-w-full" src={src} controls
bind:this={video}
    bind:duration={duracion}
    bind:currentTime={tiempoActual}
    bind:paused={pausado}
    bind:seeking={seeking}
    bind:playbackRate={tasaReproduccion}
    bind:volume={volumen}
    bind:buffered={buffered}

    onplay={() => {
        allVideos.forEach(_video => {
            if (_video !== video) {
                _video.pause()
            }
        })
    }}
></video>

<ul>
    <li>Duración: {duracion}</li>
    <li>Tiempo actual: {tiempoActual}</li>
    <li>Pausado: {pausado ? 'Sí' : 'No'}</li>
    <li>Buscando: {seeking ? 'Sí' : 'No'}</li>
    <li>Tasa de reproducción: {tasaReproduccion}</li>
    <li>Volumen: {volumen}</li>
    <li>Buffered:
        <ul>
            {#each buffered as range, i}
                <li>Rango {i}: {range.start} - {range.end}</li>
            {/each}
        </ul>
    </li>
</ul>