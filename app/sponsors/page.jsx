import React from "react";
import "./sponsors.scss";
import OurValues from "@/components/OurValues";
function page() {
  return (
    <>
      <main>
        <section id="heroSponsors">
          <div className="sponsorsContainer">
            <div className="sponsorsAbout">
              <h1>Have A Project?</h1>
              <p>
                Show your event to the world through any platform. We are
                leaders in streaming and broadcast services for events, offering
                consulting services and development of complete systems for our
                clients in event broadcasting.Show your event to the world
                through any platform. We are leaders in streaming and broadcast
                services for events, offering consulting services and
                development of complete systems for our clients in event
                broadcasting.
              </p>
            </div>
            <div className="sponsorsImg">
              <img
                src="https://emkistorage.blob.core.windows.net/web/Untitled%20design%20(2)20231021064958090.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <section id="sponsorsSec">
          <div className="sponsorsCtn">
            <h1>Sponsors</h1>

            <div className="sponsorsImgs">
              <div>
                <img
                  src="https://emkistorage.blob.core.windows.net/web/Layer_120231021145414459.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://emkistorage.blob.core.windows.net/web/ALDE-LOGO-PNG-V1%20120231021145420501.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section id="ourvaluesSec">
          <div className="our-values-container">
            <OurValues />
          </div>
        </section>
      </main>
    </>
  );
}

export default page;
