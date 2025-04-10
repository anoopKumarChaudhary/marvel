"use client"; // Mark as client-side

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Card from "./components/card.js";
import styles from "./page.module.css";
import Intro from "./components/Intro.js";

const CardSwiper = () => {
  const cards = [
    {
      id: 1,
      url: "./venom.webp",
      name: "VENOM",
      content: `Venom, in Marvel Comics, is an alien symbiote from the planet Klyntar,
        first appearing in The Amazing Spider-Man #252 (1984).`,
    },
    {
      id: 2,
      url: "./ironman.jpg",
      name: "IRON MAN",
      content: `Genius billionaire Tony Stark builds a high-tech suit, fights villains, leads Avengers, sacrifices himself to save universe.`,
    },

    {
      id: 3,
      url: "./thor.jpg",
      name: "THOR",
      content: `Norse god of thunder, wields Mjolnir, protects Asgard, battles Loki, joins Avengers, embraces heroism with humor and heart`,
    },
    {
      id: 4,
      url: "./captain.jpg",
      name: "CAPTAIN AMERICA",
      content: `Steve Rogers, super-soldier from WWII, wields shield, leads Avengers, fights for justice, embodies courage and honor.`,
    },
    {
      id: 5,
      url: "./spider.jpg",
      name: "SPIDER MAN",
      content: `Peter Parker, web-slinging teen, balances school and heroics, fights crime, learns responsibility, brings wit to Avengers’ missions.`,
    },
    {
      id: 6,
      url: "./panther.jpg",
      name: "BLACK PANTHER",
      content: `T’Challa, king of Wakanda, dons vibranium suit, defends nation, promotes unity, fights threats, embodies strength and wisdom.`,
    },
    {
      id: 7,
      url: "./hulk.jpg",
      name: "HULK",
      content: `Dr. Bruce Banner transforms into green giant, struggles with rage, smashes enemies, seeks peace, aids Avengers in battles`,
    },
  ];
  SwiperCore.use([Autoplay]);

  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        speed={1200}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {cards.map((card) => (
          <div key={card.id}>
            <SwiperSlide key={card.id + 20}>
              <div className={styles.main}>
                <Card url={card.url} name={card.name} content={card.content} />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <Intro url="/intro.mp4" />
      <Card
        url="/thanos.jpg"
        name="THANOS"
        content='I am... inevitable" and "Dread it. Run from it. Destiny arrives all the same'
      />
      <Intro url="/thor.mp4" />
      <Card
        url="/w1.jpg"
        name="Endgames"
        content="Heroes reunite post-snap, time-travel to reverse Thanos’ decimation, Tony sacrifices, Steve retires, epic conclusion unfolds."
      />
    </div>
  );
};

export default CardSwiper;
