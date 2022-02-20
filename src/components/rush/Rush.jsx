import React from "react";

import { StyledRush } from "./Rush.styled";
import { Icon } from "../icons";
import Timer from "./timer";
import Vimeo from "@u-wave/react-vimeo";

const Rush = () => {
  let contact = [
    // {
    //   name: "Snapchat",
    //   url: "https://www.facebook.com/ucsdkappasig/",
    //   username: "roach_2117",
    // },
    {
      name: "Instagram",
      url: "https://www.instagram.com/robert2d2/",
      username: "robert2d2",
      chair: "Robert Roach",
    },
  ];

  let events = [
    {
      name: "Meet the chapters",
      date: "4/3",
      time: "6pm PST",
      location: "",
    },
    {
      name: "Bubble soccer",
      date: "4/4",
      time: "6pm PST",
      location: "",
    },
    {
      name: "Night of 1k wings",
      date: "4/5",
      time: "6pm PST",
      location: "",
    },
    {
      name: "Poker night",
      date: "4/6",
      time: "6pm PST",
      location: "",
    },
    {
      name: "Ring of fire (invite only)",
      date: "4/7",
      time: "",
      location: "",
    },
  ];
  return (
    <StyledRush>
      <h2>Rush Kappa Sigma</h2>
      <Timer />

      <div className="signup">
        <a href="https://forms.gle/1Zo6HvkRMziWQemKA">
          Click here to sign up for rush
        </a>
      </div>

      <Vimeo
        video="https://vimeo.com/524583682"
        autoplay
        muted
        height="300"
        width="375"
      />

      <div className="rush-events">
        <h2>Events: </h2>
        <ul>
          {events &&
            events.map(({ name, date, time, location }, i) => (
              <li key={i}>
                {date}: {name} {time} {location}
              </li>
            ))}
        </ul>
      </div>

      <div className="rush-contact">
        <h2>Rush Chair:</h2>
        <ul>
          {contact &&
            contact.map(({ name, url, username, chair }, i) => (
              <li key={i}>
                <p>{chair}</p>
                <a href={url} aria-label={name}>
                  <Icon name={name} /> {username}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </StyledRush>
  );
};

export default Rush;
