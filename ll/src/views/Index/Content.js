import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import myImage from "../../media/launch-crew.png";
import introVideo from "../../media/intro_video_480p.mp4";
import "./Content.css";

const heroImage = require("../../media/5070701.jpg");
const profileImage = require("../../media/Sid_Thakur.jpg");
const mindmap = require("../../media/idea-launch-lab-map.png");
const flow = require("../../media/idea-lab-flow.png");
const prodLifecycle = require("../../media/product-lifecycle.png");
function Content() {
  const CustomForm = ({ status, message, onValidated }) => {
    let email, phone;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        PHONE: phone.value,
        tags: "4339278",
      });

    return (
      <div
        style={{
          borderRadius: 5,
          padding: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {status === null ? (
          <div
            style={{
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <div>
              <input
                style={{
                  borderRadius: 5,
                  flex: 1,
                  fontSize: "1em",
                  marginRight: 10,
                  padding: 5,
                  margin: 5,
                }}
                ref={(node) => (email = node)}
                type="email"
                placeholder="Your email"
              />
              <input
                style={{
                  borderRadius: 5,
                  flex: 1,
                  fontSize: "1em",
                  marginRight: 10,
                  padding: 5,
                  margin: 5,
                  size: 25,
                }}
                ref={(node) => (phone = node)}
                type="phone"
                placeholder="Your phone"
              />
              <button
                style={{
                  borderRadius: 5,
                  fontSize: "1em",
                  padding: 5,
                  margin: 5,
                }}
                onClick={submit}
              >
                Submit
              </button>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              The information you provide will be kept private and will not shared.
            </div>
          </div>
        ) : (
          <div style={{ color: "white", paddingLeft: 5 }}>
            {status === "sending" && <div>Sending...</div>}
            {status === "error" && (
              <div dangerouslySetInnerHTML={{ __html: message }} />
            )}
            {status === "success" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: "Thank you for signing up! ",
                }}
              />
            )}
          </div>
        )}
      </div>
    );
  };
  return (
    <div>
      <div class="container">
        <div class="row" style={{ marginBottom: 25 }}>
          <div
            class="col-lg-5"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <div
                style={{
                  color: "#006666",
                  fontSize: "1.3em",
                  fontWeight: "500",
                  marginBottom: 10,
                }}
              >
                Unlock Your Child's Inner Innovator
              </div>
              <div style={{ fontSize: "0.95em", marginBottom: 15 }}>
                <span style={{ backgroundColor: "#ffffe0" }}>
                  {/* A workshop for young innovators, designed to empower them to
                  craft innovative solutions for challenges they encounter in
                  their lives, communities, and the world! */}
                  A workshop designed for young innovators, empowering them to
                  build innovative solutions for challenges they face in their
                  lives, communities, and the world!
                </span>{" "}
                This fun workshop teaches essential product skills, including
                evaluating and pitching ideas, product development, and
                launching a product!
              </div>

              <div>
                <span
                  style={{
                    color: "red",
                    fontWeight: "600",
                  }}
                >
                  New sessions coming soon.. Sign up below to stay tuned.
                </span>
              </div>
              {/* <div
                style={{ borderRadius: 6, background: "#ffffff", padding: 0 }}
              >
                <span
                  style={{
                    color: "red",
                    fontWeight: "600",
                  }}
                >
                  Register for upcoming workshop, click link below:
                </span>
                <br/>
                <a href="https://tinyurl.com/uwtpe873">https://tinyurl.com/uwtpe873</a>
              </div> */}
              <hr />
              <div
                style={{ borderRadius: 6, background: "#429ea3", padding: 10 }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    paddingLeft: 10,
                  }}
                >
                  Sign up to receive updates
                </span>
                <MailchimpSubscribe
                  url={process.env.REACT_APP_MAILCHIMP_KEY}
                  render={({ subscribe, status, message }) => (
                    <CustomForm
                      status={status}
                      message={message}
                      onValidated={(formData) => subscribe(formData)}
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div class="my-col col-lg-7">
            <img
              src={myImage}
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80%",
              }}
            />
          </div>
        </div>
        <div class="row">
          <Player playsInline src={introVideo} width={600} />
        </div>
        <div class="row">&nbsp;</div>
        <div class="row" style={{ marginBottom: 5, marginTop: -20 }}>
          <div style={{ color: "#006666" }}>
            <div
              class="my-col col-lg-12"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div>
                <a id="topics">
                  <h4>Topics Covered</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="row"
          style={{
            border: "none",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div className="col-lg-3">
            <div className="card">
              <div class="features-icons-icon">
                <i class="icon-puzzle" style={{ fontSize: "1.3rem" }}></i>
              </div>
              <div className="topic-header">Problem Identification</div>
              <div className="text-center light-sub-text">
                Evaluate the problem
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div class="features-icons-icon ">
                <i class="icon-people" style={{ fontSize: "1.3rem" }}></i>
              </div>
              <div className="topic-header">User Research</div>
              <div className="text-center light-sub-text">
                Understand the users
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div class="features-icons-icon ">
                <i class="icon-bulb" style={{ fontSize: "1.3rem" }}></i>
              </div>
              <div className="topic-header">Product Design</div>
              <div className="text-center light-sub-text">
                Conceptualize and Design
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div className="col-lg-3">
            <div className="card">
              <div class="features-icons-icon ">
                <i class="icon-chemistry" style={{ fontSize: "1.3rem" }}></i>
              </div>
              <div className="topic-header">Prototyping</div>
              <div className="text-center light-sub-text">
                Build prototypes
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div class="features-icons-icon">
                <i class="icon-rocket" style={{ fontSize: "1.3rem" }}></i>
              </div>
              <div className="topic-header">Launch</div>
              <div className="text-center light-sub-text">
                Pitch and Launch
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div class="features-icons-icon ">
                <i class="icon-bubble" style={{ fontSize: "1.3rem" }}></i>
              </div>
              <div className="topic-header">Evaluate</div>
              <div className="text-center light-sub-text">
                Test and Refine Solution
              </div>
            </div>
          </div>
        </div>
        <br /> */}
        <div className="row">
          <div className="col-lg-12">
            <div style={{ textAlign: "center" }}>
              <a href={flow} target="_blank">
                <img src={flow} style={{ maxWidth: "100%", height: "auto" }} />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="skills-container">
              Skills
              <div className="skills">Critical thinking</div>
              <div className="skills">Problem solving</div>
              <div className="skills">Prototyping</div>
              <div className="skills">Presenting</div>
            </div>
          </div>
        </div> */}
        <br />
        <div class="row" style={{ marginBottom: 5 }}>
          <div style={{ color: "#006666" }}>
            <div
              class="my-col col-lg-12"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div>
                <a id="faq">
                  <h4>FAQ</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div className="col-lg-12">
            <div className="text-about">
              <div
                style={{
                  fontSize: "0.95em",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ padding: 5 }}>
                  <ul>
                    <li>
                      <strong> Who is the workshop for?</strong>
                      <br />
                      The workshop is for middle school and older children.
                    </li>
                    <li>
                      <strong> How long is the workshop?</strong>
                      <br /> The workshop will happen in a one 2-hr session.
                    </li>
                    <li>
                      <strong> When and where will it be held?</strong>
                      <br /> The worksop is planned for Q1 2024. Location will
                      be in Morrisville/Cary area.
                    </li>
                    <li>
                      <strong>What will it cost?</strong>
                      <br /> Please sign up to stay tuned.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row" style={{ marginBottom: 5 }}>
          <div style={{ color: "#006666" }}>
            <div
              class="my-col col-lg-12"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div>
                <a id="about">
                  <h4>About the Instructor</h4>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div className="col-lg-12">
            <div className="text-about">
              <div
                style={{
                  fontSize: "0.95em",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ padding: 5 }}>
                  <p>
                    Hello, I'm Sid, a computer and cognitive scientist, artist,
                    inventor, instructor, and community volunteer. I've worked
                    and taught at UNC Chapel Hill and NC State Universities and
                    occasionally teach paper cutting art at local libraries. As
                    a principal product designer in my current role and while
                    developing my own web apps, I've gained extensive experience
                    in product development. I actively volunteer in various
                    community initiatives, including{" "}
                    <a href="https://www.safetyclub.org">SafetyClub</a>, a
                    non-profit committed to eliminating child abuse.
                  </p>
                  <p>
                    Through this workshop, my aim is to empower creative and
                    innovative young minds to build solutions that create a
                    positive impact on their lives and their world!
                  </p>
                </div>
                <div
                  style={{ alignItems: "center", display: "flex", padding: 5 }}
                >
                  <img
                    src={profileImage}
                    width={"80px"}
                    style={{ borderRadius: 50, marginRight: 15 }}
                  />
                  <div>
                    Sid Thakur, Ph.D.
                    <br />
                    Cary, NC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div
          style={{
            border: "1px solid lightgray",
            borderRadius: 6,
            backgroundColor: "#429ea333",
            padding: 10,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                paddingLeft: 10,
              }}
            >
              <i class="icon-rocket "></i> Signup to learn more
            </span>
            <MailchimpSubscribe
              url={process.env.REACT_APP_MAILCHIMP_KEY}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Content;
