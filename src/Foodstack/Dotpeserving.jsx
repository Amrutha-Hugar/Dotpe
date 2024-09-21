import React from "react";
import "../Assets/Styles/Dotpeserving.css";
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from "@coreui/react";
import { Carousel } from "react-bootstrap";

const Dotpeserving = () => {
  return (
    <div className="serving-container">
      <div className="serving-content">
        <h1
          style={{
            fontSize: "56px",
            color: "#000000",
            fontWeight: "bold",
            lineHeight: "56px",
          }}
        >
          DotPe works for you,
          <br />
          no matter what you're serving.
        </h1>
      </div>
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <CTabs activeItemKey={1}>
          <CTabList
            variant="pills"
            className="bg-secondary w-100 d-flex justify-content-around p-3 rounded-5"
          >
            <CTab
              aria-controls="home-tab-pane"
              itemKey={1}
              style={{ color: "black" }}
            >
              Quick Services
            </CTab>
            <CTab
              aria-controls="profile-tab-pane"
              itemKey={2}
              style={{ color: "black" }}
            >
              Dine-in
            </CTab>
            <CTab
              aria-controls="contact-tab-pane"
              itemKey={3}
              style={{ color: "black" }}
            >
              Pubs, Bars & Breweries
            </CTab>
            <CTab
              aria-controls="contact-tab-pane"
              itemKey={4}
              style={{ color: "black" }}
            >
              Cloud Kitchen
            </CTab>
            <CTab
              aria-controls="contact-tab-pane"
              itemKey={5}
              style={{ color: "black" }}
            >
              Hotel & In-room Dining
            </CTab>
          </CTabList>
          <CTabContent>
            <CTabPanel
              className="quicksservice p-3 text-start"
              aria-labelledby="home-tab-pane"
              itemKey={1}
            >
              <h4> Quick Services</h4>
              <p>
                Say goodbye to long wait times. With DotPe, Your staff can keep
                service moving efficiently no matter  how busy it gets.
              </p>
              <div>
                <ul className="list-item" style={{ listStyle: "none" }}>
                  <li>Keep lines moving with our POS</li>
                  <li>Keep tickets accurate &amp; synced with KDS</li>
                  <li>Online Web-store for Digital Ordering</li>
                </ul>
              </div>
              <Carousel>
                <Carousel.Item>
                  <Carousel.Caption>
                    <h3>Quick Service 1</h3>
                    <p>Details about Quick Service 1.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <h3>Quick Service 2</h3>
                    <p>Details about Quick Service 2.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </CTabPanel>
            <CTabPanel
              className="p-3"
              aria-labelledby="profile-tab-pane"
              itemKey={2}
            >
              <h5>Content for Dine-in</h5>
              {/* Add Carousel or other content for Dine-in here */}
            </CTabPanel>
            <CTabPanel
              className="p-3"
              aria-labelledby="contact-tab-pane"
              itemKey={3}
            >
              <h5>Content for Pubs, Bars & Breweries</h5>
              {/* Add Carousel or other content for Pubs, Bars & Breweries here */}
            </CTabPanel>
            <CTabPanel
              className="p-3"
              aria-labelledby="contact-tab-pane"
              itemKey={4}
            >
              <h5>Content for Cloud Kitchen</h5>
              {/* Add Carousel or other content for Cloud Kitchen here */}
            </CTabPanel>
            <CTabPanel
              className="p-3"
              aria-labelledby="contact-tab-pane"
              itemKey={5}
            >
              <h5>Content for Hotel & In-room Dining</h5>
              {/* Add Carousel or other content for Hotel & In-room Dining here */}
            </CTabPanel>
          </CTabContent>
        </CTabs>
        <br/>
        <br/>
      </div>

    </div>
  );
};

export default Dotpeserving;
