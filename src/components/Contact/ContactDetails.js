import { contactDetails } from "@/data/contact";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GoogleMap from "../GoogleMap/GoogleMap";

const { phone, phoneHref, email, title, text, address, contactIcon } =
  contactDetails;

const ContactDetails = () => {
  return (
    <section className="contact-details" style={{marginBottom:"100px"}}>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="contact-details__inner">
              <GoogleMap
                containerClassName="contact-details__map-box"
                mapClassName="contact-details__map"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.966895682464!2d55.138096076120526!3d25.069111136875335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cad99d6a37f%3A0x93c2a47150a13b98!2sAlmas%20Tower!5e0!3m2!1str!2saz!4v1704634615803!5m2!1str!2saz"
              />
              <div className="contact-details__content">
                <div className="contact-details__title-box">
                  <h4 className="contact-details__title">{title}</h4>
                  <p className="contact-details__text">{text}</p>
                </div>
                <p className="contact-details__address">{address}</p>
                <div className="contact-details__contact-info">
                  <div className="contact-details__contact-icon">
                    <span className={contactIcon}></span>
                  </div>
                  <h4 className="contact-details__contact-number-email">
                    <a
                      href={`tel:${phoneHref}`}
                      className="contact-details__contact-number"
                    >
                      {phone}
                    </a>
                    <a
                      href={`mailto:${email}`}
                      className="contact-details__contact-email"
                    >
                      {email}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactDetails;
