<script>
    export let col;
</script>

<style>
    .col {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .col.double {
        flex: 2;
    }
</style>

<div class="col {col}">
    <slot></slot>
</div>
