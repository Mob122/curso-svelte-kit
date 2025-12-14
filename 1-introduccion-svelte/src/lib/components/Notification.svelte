<script lang="ts">
    const { notificacion, onremove , index} : {
        index: number,
        notificacion: {            
            id: string;
            title: string;
            body: string;
            date: number;            
        },
        onremove?: (id: string) => void;
    } = $props();

    console.log(index);
    

    const {id, title, body, date} = $derived(notificacion);
    const dateObject = $derived(new Date(date));
</script>

<div class="notificacion">
    <li>{title}</li>
    <p>{body}</p>
    <time datetime={dateObject.toISOString()}>
        {dateObject.toLocaleDateString()}
    </time>
    <div class="actions">
        <button 
        class="bg-red-500 px-2 py-1 rounded space-y-2"            
            onclick={() => {
            onremove?.(id);
        }}>
            Remove
        </button>
    </div>
</div>
