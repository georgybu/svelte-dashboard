<script>
    import Badge from '../componetns/Badge.svelte';
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import {chevronUp, wrench, times} from 'svelte-awesome/icons';
    export let badge;

</script>

<style>
    .widget {
        margin: 14px;
        min-height: 100px;
        background-color: #fff;
        box-shadow: 0 -2px 0 lightgrey;
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .title {
        height: 50px;
        border-bottom: 1px solid #f1f2f4;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
    }

    .body {
        /*padding: 8px 16px;*/
    }

    .actions button {
        background: none;
        border: none;
        width: 22px;
        height: 22px;
        color: #c4c4c4;
        display: inline-block;
        margin: 0;
        padding: 0;
    }
</style>

<div class="widget">
    <div class="title">
        <slot name="title"></slot>
        {#if badge}
            <Badge message={'Monthly'}></Badge>
            >
        {:else}
            <div class="actions">
                <button>
                    <Icon data={chevronUp}></Icon>
                </button>
                <button>
                    <Icon data={wrench}></Icon>
                </button>
                <button>
                    <Icon data={times}></Icon>
                </button>
            </div>
        {/if}
    </div>
    <div class="body">
        <slot name="body"></slot>
    </div>
</div>
