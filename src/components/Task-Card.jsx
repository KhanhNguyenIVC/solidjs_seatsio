import { Card, Button, Row, Col } from "solid-bootstrap";

const TaskCard = (props) => {
    const task = props.task ?? {}

    return (
        <Card class='card-planner'>
            <Card.Body>
                <Row>
                    <Col>{task.name}</Col>
                    <Col>
                        <span class="float-end"><i class="fa fa-check"></i></span>
                        <Button class="float-end me-2" onClick={[null, '']} size="sm" variant="primary"><i class="fa fa-trash-o"></i></Button>
                        <Button class="float-end me-2" onClick={[null, '']} size="sm" variant="primary"><i class="fa fa-pencil-square-o"></i></Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default TaskCard