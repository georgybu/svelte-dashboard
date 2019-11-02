<script>
    import UserInfo from '../widgets/UserInfo.svelte';
</script>
<style>
    .side-menu {
        background-color: #2f4050;
        display: flex;
        flex: 0 0 240px;
        flex-direction: column;
    }

    .expandable-menu {
        padding: 8px;
        color: #a7b1c2
    }

    .expandable-menu.expanded {
        background-color: #293846;
        border-left: 2px solid #19aa8d;
    }
</style>

<div class="side-menu">
    <UserInfo/>

    <div class="expandable-menu expanded">
        <i class="fas fa-th-large"></i>
        Dashboard
        <div class="expandable-menu-list-item">
            d1
        </div>
        <div class="expandable-menu-list-item">
            d2
        </div>
    </div>
<!--    <ExpandableMenu/>
    <ExpandableMenu/>
    <ExpandableMenu/>
    <ExpandableMenu/>
    <ExpandableMenu/>
    <ExpandableMenu/>-->
</div>
