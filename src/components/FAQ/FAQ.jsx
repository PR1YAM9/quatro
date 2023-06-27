import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div style={{ minHeight: "fit-content", marginBottom: "100px" }} id="FAQ">
      <div className="d-flex justify-content-center">
        <h3
          style={{
            color: "#E1D9C7",
            fontWeight: "800",
            fontSize: "35px",
            marginBottom: "25px",
          }}
        >
          FAQ
        </h3>
      </div>
      <div
        className="accordion accordion-flush container acc-width"
        id="accordionFlushExample"
        style={{ color: "#E1D9C7", padding: "0px" }}
      >
        <div
          className="accordion-item"
          style={{
            color: "#E1D9C7",
            backgroundColor: "#292929",
            marginBottom: "6px",
            border: "none",
          }}
        >
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{
                color: "#E1D9C7",
                backgroundColor: "#292929",
                fontWeight: "800",
              }}
            >
              What is your Pricing model ?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                color: "#E1D9C7",
                backgroundColor: "#292929",
                textAlign: "left",
                fontFamily: "Inter",
              }}
            >
              Our pricing model is tailored to each project. Let's have a chat
              to understand your requirements and provide you with personalized
              pricing options. Contact us to get started.
            </div>
          </div>
        </div>

        <div
          className="accordion-item"
          style={{
            color: "#E1D9C7",
            backgroundColor: "#292929",
            marginBottom: "6px",
            border: "none",
          }}
        >
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={{
                color: "#E1D9C7",
                backgroundColor: "#292929",
                fontWeight: "800",
              }}
            >
              What types of projects do you take ?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                color: "#E1D9C7",
                backgroundColor: "#292929",
                fontFamily: "Inter",
              }}
            >
              We handle various projects, including business websites,
              portfolios, personal sites, and more. Share your requirements with
              us to bring your unique idea to life. Contact us today to get
              started.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            color: "#E1D9C7",
            backgroundColor: "#292929",
            marginBottom: "6px",
            border: "none",
          }}
        >
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
              style={{
                color: "#E1D9C7",
                backgroundColor: "#292929",
                fontWeight: "800",
              }}
            >
              What is the scale of projects you can handle?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                color: "#E1D9C7",
                backgroundColor: "#292929",
                fontFamily: "Inter",
              }}
            >
              We are capable of designing and developing projects of any size,
              from single-page websites to complete multi-page solutions.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            color: "#E1D9C7",
            backgroundColor: "#292929",
            marginBottom: "6px",
            border: "none",
          }}
        >
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
              style={{
                color: "#E1D9C7",
                backgroundColor: "#292929",
                fontWeight: "800",
              }}
            >
              What is the estimated delivery time for projects?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{ color: "#E1D9C7", backgroundColor: "#292929" }}
            >
              Delivery timeframes vary depending on the project's specific
              requirements. Let's have a discussion to understand your project
              in detail, and we'll provide you with a tailored delivery
              timeline.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            color: "#E1D9C7",
            backgroundColor: "#292929",
            marginBottom: "6px",
            border: "none",
          }}
        >
          <h2 className="accordion-header" id="flush-headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
              style={{
                color: "#E1D9C7",
                backgroundColor: "#292929",
                fontWeight: "800",
              }}
            >
              Do you provide deployment assistance for projects ?
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                color: "#E1D9C7",
                backgroundColor: "#292929",
                fontFamily: "Inter",
              }}
            >
              Yes, we can provide deployment assistance. Let's have a chat to
              discuss your specific needs and explore the available deployment
              options.
            </div>
          </div>
        </div>
      </div>
      <div
        className="faq-end"
        style={{
          justifyContent: "center",
          color: "#E1D9C7",
          fontSize: "18px",
          marginTop: "20px",
        }}
      >
        For further assistance, please feel free to reach out to us via
        <a
          href="mailto:quatro.help@gmail.com.com"
          style={{
            color: "#2CB67D",
            textDecoration: "none",
            display: "inline",
            marginLeft: "5px",
          }}
        >
          email
        </a>
        .
      </div>
    </div>
  );
};

export default FAQ;
