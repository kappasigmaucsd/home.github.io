import React from "react";
import Portrait from "./portrait";

import { StyledLeadership } from "./Leadership.styled";
import GT from "../../img/EC/tony.jpg";

const Leadership = () => {
  let EC = [
    {
      name: "Cade Kanzius",
      title: "Grand Master",
      img: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/249394628_2132286636914441_4732903829867319126_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=I1dhazQSongAX_1aLxk&_nc_ht=scontent-sjc3-1.xx&oh=00_AT94rVTfYlIaL4UyjKRnF7oR07kpjx61Kd2FDSwhbuvAng&oe=6214BF0E",
      link: "https://www.instagram.com/cadekanzius/?hl=en",
    },
    {
      name: "Tony De Alba",
      title: "Grand Procurator",
      img: GT,
      link: "https://www.instagram.com/t_de_alba/?hl=en",
    },
    {
      name: "Joe Garduno",
      title: "Grand Master of Ceremonies",
      img: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/269761378_455268586151794_1180962643866321409_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fe48Z-fNRvUAX9ECiGw&tn=qD8UuQeVV6tcFVHM&_nc_ht=scontent-sjc3-1.xx&oh=00_AT8csIJTtlHjSlOzlbYpEaHzCV2BefRvwWgbGO_DaXFofA&oe=6215C78C",
      link: "https://www.instagram.com/joe.garduno/?hl=en",
    },
    {
      name: "Cody Strange",
      title: "Grand Treasurer",
      img: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/178658334_602722317789969_8440263634620879728_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KzuZ2TEPh94AX_pJmQC&_nc_ht=scontent-sjc3-1.xx&oh=00_AT9PZt-oMMe79ur50CYnB3U1fdbrQSoXmSkqTr425KBb7w&oe=623561B7",
      link: "https://www.instagram.com/cody.strange/?hl=en",
    },
    {
      name: "Jacob Kaukani",
      title: "Grand Scribe",
      img: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/72596282_114623109951740_4586274324729561088_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1l7qOGCYzFIAX-VI6Hi&_nc_ht=scontent-sjc3-1.xx&oh=00_AT_tDfA-VccPU4DzZqXbuSufKEPGTFrhroeu-tQgTgYeZA&oe=623748E3",
      link: "https://www.instagram.com/kaukani487/?hl=en",
    },
  ];
  return (
    <StyledLeadership>
      <h2>2021 - 2022 Executive Board</h2>

      {EC &&
        EC.map(({ name, title, img, link }, i) => (
          <Portrait name={name} title={title} img={img} link={link} />
        ))}
    </StyledLeadership>
  );
};

export default Leadership;
