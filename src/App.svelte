<script>
    import Col from './layout/Col.svelte';
    import Icons from './example/Icons.svelte';
    import SideMenu from './sideMenu/SideMenu.svelte';
    import Container from './layout/Container.svelte';
    import Row from './layout/Row.svelte';
    import Widget from './layout/Widget.svelte';
    import SimpleTrend from './widgets/SimpleTrend.svelte';
    import Messages from './widgets/Messages.svelte';
    import ProjectList from './widgets/ProjectList.svelte';
    import TodoList from './widgets/TodoList.svelte';
</script>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
    }

    :global(body),
    .app {
        display: flex;
        flex: 1;
        margin: 0;
        padding: 0;
        background-color: #f3f3f4;
        color: #676a6c;
    }
</style>

<div class="app">
    <SideMenu/>
    <Container>

        <Row>
            <Col>
                <Widget>
                    <div slot="title">Income</div>
                    <div slot="body">
                        <SimpleTrend />
                    </div>
                </Widget>
            </Col>
            <Col>
                <Widget>
                    <div slot="title">Orders</div>
                    <div slot="body">
                        <SimpleTrend />
                    </div>
                </Widget>
            </Col>
            <Col>
                <Widget>
                    <div slot="title">Visits</div>
                    <div slot="body">
                        <SimpleTrend />
                    </div>
                </Widget>
            </Col>
            <Col>
                <Widget>
                    <div slot="title">User activity</div>
                    <div slot="body">
                        <SimpleTrend />
                    </div>
                </Widget>
            </Col>
        </Row>

        <Row>
            <Col>
                <Widget>
                    <div slot="title">Orders</div>
                    <div slot="body">
                        <h1>Hello!</h1>
                        <Icons/>
                    </div>
                </Widget>
            </Col>
        </Row>

        <Row>
            <Col>
                <Widget>
                    <div slot="title">Messages</div>
                    <div slot="body"><Messages /></div>
                </Widget>
            </Col>
            <Col col={'double'}>
                <Row>
                    <Col>
                        <Widget>
                            <div slot="title">User project list</div>
                            <div slot="body"><ProjectList /></div>
                        </Widget>
                    </Col>
                    <Col>
                        <Widget>
                            <div slot="title">Small todo list</div>
                            <div slot="body"><TodoList /></div>
                        </Widget>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Widget>
                            <div slot="title">Transaction worldwide</div>
                            <div slot="body">Body</div>
                        </Widget>
                    </Col>
                </Row>
            </Col>
        </Row>

    </Container>
</div>
