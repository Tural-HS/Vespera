import { newsSidebarSide, compliance_det } from "@/data/compliance_data";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Compliance from "./compliance";


const Compliance_details = () => {
  return (
    <section className="news-details">
      <Container>
        <Row>
          <Col  lg={12}>
            <Compliance news={compliance_det} />
          </Col>
          {/* <Col xl={4} lg={5}>
            <NewsSidebarSide {...newsSidebarSide} />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Compliance_details;
