"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
import { Text, Column } from "@once-ui-system/core";
import Link from "next/link";
import styles from "./CaseCompetitionsClubsCarousel.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Achievement {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  backgroundPosition?: string;
}

interface CaseCompetitionsClubsCarouselProps {
  achievements: Achievement[];
}

export function CaseCompetitionsClubsCarousel({ achievements }: CaseCompetitionsClubsCarouselProps) {
  return (
    <Column fillWidth gap="m">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Parallax]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        parallax={true}
        loop={true}
        className={styles.swiper}
      >
        {achievements.map((achievement) => (
          <SwiperSlide key={achievement.title}>
            <Link href={achievement.link} className={styles.slideLink}>
              <div
                className={styles.backgroundImage}
                data-swiper-parallax="-23%"
                style={{
                  backgroundImage: `url(${achievement.image})`,
                  backgroundPosition: achievement.backgroundPosition || "center"
                }}
              />
              <div className={styles.overlay}>
                <div className={styles.content}>
                  <Text
                    variant="heading-strong-l"
                    className={styles.overlayText}
                    data-swiper-parallax="-300"
                  >
                    {achievement.title}
                  </Text>
                  <Text
                    variant="heading-default-m"
                    className={styles.companyText}
                    data-swiper-parallax="-200"
                  >
                    {achievement.subtitle}
                  </Text>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Column>
  );
}