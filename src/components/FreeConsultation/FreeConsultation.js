import { Container, Row, Col } from "react-bootstrap";
import { freeConsultation } from "@/data/freeConsultation";
import Image from "react-bootstrap/Image";
import { useEffect, useRef } from "react";

 

const { bg, marks, icon } = freeConsultation;

const FreeConsultation = () => {
  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerTop = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (containerTop < windowHeight) {
      const markItems = document.querySelectorAll(".mark-item")
      markItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("show");
        }, index * 200);
      });

      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="free-consultation " ref={containerRef}>
      <Container>
        <div className="marks-container">
          <Row>
            {marks.map((mark) => (
              <div key={mark.id} className="mark-item">
                <Image src={icon.src} alt="mark.svg" style={{ height: "200px", marginRight: "-80px" }} />
                <span>{mark.text}</span>
              </div>
            ))}
     
        <Image src={bg.src} alt="map.svg" style={{ width: "100%", height: "700px" }} />
        </Row>
        </div>
      </Container>
      
    </section>
  );
};

export default FreeConsultation;
