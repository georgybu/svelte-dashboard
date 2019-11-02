<script>
    const messages = [
        {
            title: 'Monica Smith',
            timeAgo: '1m ago',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
            received: 'Today 5:60 - 12.06.2014'
        }
    ];

    const messageDuplicates = [...Array(5).keys()];
</script>
<style>
    .messages {

    }

    .new-messages {
        background-color: #f3f6fb;
        padding: 16px;
    }

    .new-messages .title {

    }

    .details {

    }

    .message-list {
        padding: 0;
        margin: 0;
    }

    .message-item {
        list-style: none;
        border-bottom: 1px solid #f1f2f4;
        padding-bottom: 8px;
        margin-bottom: 8px;
    }

    .message-item .title {
        display: flex;
        justify-content: space-between;
    }

    .message-item .body {
    }

    .message-item .time {

    }
</style>

<div class="messages">

    <div class="new-messages">
        <div class="title">New Messages</div>
        <div class="details">You have 22 new messages and 16 waiting in draft folder</div>
    </div>

    <ul class="message-list">
        {#each messageDuplicates as messageIndex}
            <li class="message-item">
                <span class="title">
                    {messages[0].title}
                    <span class="time-ago">
                        {messages[0].timeAgo}
                    </span>
                </span>
                <span class="body">
                    {messages[0].description}
                </span>
                <span class="time">
                    {messages[0].received}
                </span>
            </li>
        {/each}
    </ul>
</div>
