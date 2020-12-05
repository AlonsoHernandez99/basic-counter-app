import { useState } from "react";
import { Button } from "@material-ui/core";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import { Container, Row, Col } from "styled-bootstrap-grid";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div class="animated fadeIn">
      <Container>
        <Row>
          <Col col xl="1" lg="1" md="1" sm="6">
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCount(count + 1)}
              size="large"
              startIcon={<PlusOneIcon />}
            ></Button>
          </Col>
          <Col col xl="10" lg="10" md="10" sm="6">
            <h1 class="center">{count}</h1>
          </Col>
          <Col col xl="1" lg="1" md="1" sm="6">
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCount((count === 0 ? 0 : count - 1))}
              size="large"
              startIcon={<ExposureNeg1Icon />}
            ></Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
