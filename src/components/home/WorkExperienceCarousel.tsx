"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
import { Text, Column } from "@once-ui-system/core";
import Link from "next/link";
import styles from "./WorkExperienceCarousel.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface WorkExperience {
  company: string;
  role: string;
  images?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

interface WorkExperienceCarouselProps {
  experiences: WorkExperience[];
}

export function WorkExperienceCarousel({ experiences }: WorkExperienceCarouselProps) {
  const experiencesWithImages = experiences.filter(exp => exp.images && exp.images.length > 0);

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
        {experiencesWithImages.map((experience) => (
          <SwiperSlide key={experience.company}>
            <Link href={`/work#${experience.company}`} className={styles.slideLink}>
              <div
                className={styles.backgroundImage}
                data-swiper-parallax="-23%"
                style={{
                  backgroundImage: `url(${
                    experience.company === "Keppel Data Centres"
                      ? experience.images!.find(img => img.src.includes("keppel2"))?.src || experience.images![0].src
                      : experience.company === "Unilever International"
                      ? experience.images!.find(img => img.src.includes("unilever4"))?.src || experience.images![0].src
                      : experience.images![0].src
                  })`
                }}
              />
              <div className={styles.overlay}>
                <div className={styles.content}>
                  <Text
                    variant="heading-strong-l"
                    className={styles.overlayText}
                    data-swiper-parallax="-300"
                  >
                    {experience.role}
                  </Text>
                  <Text
                    variant="heading-default-m"
                    className={styles.companyText}
                    data-swiper-parallax="-200"
                  >
                    @ {experience.company}
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