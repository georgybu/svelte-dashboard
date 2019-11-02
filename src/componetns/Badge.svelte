<script>
    export let message;
</script>

<style>
    .badge {
        background-color: #1c84c6;
        border-radius: 4px;
    }
</style>

<div class="badge">
    {message || 'badge'}
</div>
