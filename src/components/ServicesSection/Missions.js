import { Missions_Data } from "@/data/Missions_Data";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import Missions_One from "./Missions_One";

const { tagline, title, services } = Missions_Data;

const Missions = ({ id = "", hideTitle = false, serviceCount }) => {
  const ref = useActive(id);

  return (
    <section ref={ref} className="services-one" id={id}>
      <Container>
        {!hideTitle && (
          <Title title={title} tagline={tagline} className="text-center" />
        )}
        <Row>
          {services.slice(0, serviceCount).map((service) => (
            <Col
              xl={4}
              lg={4}
              md={hideTitle ? 6 : undefined}
              key={service.id}
              className="animated fadeInUp"
            
        
            >
              <Missions_One service={service}  />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Missions;
