import React, { useState } from "react";
import photo from "../media/photo.jpg";
import grid from "../media/grid.jpg";
import Description from "../components/Description";
import NavButton from "../components/NavButton";

const AboutPage = () => {
  const [photoImgLoaded, setPhotoImgLoaded] = useState(false);
  const [gridImgLoaded, setGridImgLoaded] = useState(false);

  if (photoImgLoaded && gridImgLoaded) {
    return (
      <div className="d-flex flex-column align-items-center pt-5">
        <img src={photo} alt="Clara Campos" className="photo rounded-circle" />
        <h1 className="large-text mt-2">Hi!</h1>
        <div className="mt-3 description">
          <h2 className="description-text">
            I'm Clara, a software developer based in PEI, Canada.
          </h2>
          <h2 className="description-text">
            I learn fast, think creatively and create with passion.
          </h2>
          <h2 className="description-text">
            When I'm not programming, you can find me at the library or on a
            road trip with bad coffee and good music.
          </h2>
        </div>
        <Description heading="I LOVE programming">
          I'm <i>extremely</i> passionate about what I do -- I love solving
          problems and turning ideas into reality through code. I also love how
          collaborative programming is; even when you're building something from
          scratch on your own, you're using tools that were developed by other
          people. There's always someone else's code running in the background.
          I see that as a powerful legacy.
        </Description>
        <Description heading="My unusual career trajectory:">
          <p>
            My love of languages didn't start with Python: I have a Bachelor's
            degree in English with an Emphasis in Translation Studies (which is
            surprisingly useful when dealing with programming syntax).
          </p>
          <p>
            I started my own business at 21, teaching private English classes in
            Brazil. Once I got tired of the tropical heat and the big city life,
            I moved to Charlottetown, PEI, and got a job at a local eCommerce
            company. I started working with customer service, but being a quick
            learner and having a knack for finding patterns, I was soon
            transitioned into Search Engine Marketing instead.
          </p>
          During that period, I began to learn to program in my free time out of
          sheer curiosity. What started as a hobby turned into a full-blown
          passion, so I eventually quit my job to pursue that as a career.
          Because I used to be a teacher and love figuring things out, I decided
          that self-teaching was the path for me. So here we are!
        </Description>
        <Description heading="What I've been up to">
          <p>
            In the past few months, I've been focusing on learning Computer
            Science fundamentals and putting them into practice with{" "}
            <b>React and Node.js</b>, so I could get my hands dirty with both
            front-end and back-end development. I built projects using{" "}
            <b>MongoDB, Firebase, Socket.io and third-party APIs</b> and learned
            a lot from those experiences. My programming journey is documented
            on my blog:{" "}
            <a href="https://claralearnstocode.wordpress.com" target="blank">
              Clara Learns To Code
            </a>
            .
          </p>
          On a more social note, I've been attending PEI Devs (our local
          developer meet-up) for a year now and also take part in their book
          club - which is an endless source of knowledge and fun. Meetings are
          held every month for both groups and I always look forward to them.
        </Description>
        <div className="p-4"></div>
        <NavButton url="/portfolio" label="> Porfolio" />
        <NavButton url="/" label="< Home" />
        <img src={grid} alt="Blue light grid" className="w-100 vh-25" />
      </div>
    );
  }

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <p className="text-terminal">Loading...</p>
      <div className="d-none">
        <img
          src={photo}
          alt="Clara Campos"
          onLoad={() => setPhotoImgLoaded(true)}
          loading="eager"
        />
        <img
          src={grid}
          alt="Blue light grid"
          onLoad={() => setGridImgLoaded(true)}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default AboutPage;
