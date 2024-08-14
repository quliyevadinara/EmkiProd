import React from "react";
import "./sponsors.scss";
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
                clients in event broadcasting. Show your event to the world
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
          <div className="ourvaluesContainer">
            <h1>Our values</h1>
            <div className="ourvaluesItems">
              <div className="ourvaluesItem">
                <div className="valuesImg">
                  <img src="	https://www.emkiproduction.com/static/media/rectangle1.bfa8dab7d147fe4e9fb0aa72c4a6ca9e.svg" alt="" />
                </div>
                <div className="ourvaluesAbout">
                  <p>Trust</p>
                  <span>
                    We always give honest feedback and practical suggestions to
                    help you.
                  </span>
                </div>
              </div>
              <div className="ourvaluesItem">
                <div className="valuesImg">
                  <img src="https://www.emkiproduction.com/static/media/rectangle2.f1dcaa02e43c684875e14a0a870221f4.svg
" alt="" />
                </div>
                <div className="ourvaluesAbout">
                  <p>Transparency</p>
                  <span>
                  We help you understand everything by clearly presenting information
                  </span>
                </div>
              </div>
              <div className="ourvaluesItem">
                <div className="valuesImg">
                  <img src="	https://www.emkiproduction.com/static/media/rectangle3.d4439086c2e764fe232bbfdd79ed6555.svg
" alt="" />
                </div>
                <div className="ourvaluesAbout">
                  <p>Innovation</p>
                  <span>
                  Our events are carefully planned to meet the goals of modern businesses.
                  </span>
                </div>
              </div>
              <div className="ourvaluesItem">
                <div className="valuesImg">
                  <img src="https://www.emkiproduction.com/static/media/rectangle4.c163e44074fcf20421fcaf8a5e02283c.svg
" alt="" />
                </div>
                <div className="ourvaluesAbout">
                  <p>Collaboration</p>
                  <span>
                  We approach every engagement with confidence in our ability to forge a long-term relationships.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default page;
