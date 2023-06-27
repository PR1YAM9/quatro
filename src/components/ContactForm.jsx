import React, { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "tally-js";
    script.src = "https://tally.so/widgets/embed.js";
    document.body.appendChild(script);
  }, []);
  return (
    <div className="d-flex justify-content-center" style={{marginBottom:'157px'}}>
      <iframe
        data-tally-src="https://tally.so/embed/n07l60?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="80%"
        height="292"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title=" "
    
      ></iframe>
    </div>
  );
}

export default ContactForm;
