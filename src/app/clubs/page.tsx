import {
  Column,
  Heading,
  Media,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, clubs, person } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: clubs.title,
    description: clubs.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(clubs.title)}`,
    path: clubs.path,
  });
}

export default function Clubs() {
  const structure = [
    {
      title: "Co-curricular Activities",
      display: clubs.activities?.display || false,
      items: clubs.activities?.experiences.map((experience) => experience.organization) || [],
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={clubs.title}
        description={clubs.description}
        path={clubs.path}
        image={`/api/og/generate?title=${encodeURIComponent(clubs.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${clubs.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {clubs.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={clubs} />
        </Column>
      )}
      <Column fillWidth horizontal="center">
        <Column fillWidth maxWidth={40}>

          {clubs.activities?.display && (
            <>
              <Heading as="h2" id={clubs.activities.title} variant="display-strong-s" marginBottom="m">
                {clubs.activities.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {clubs.activities.experiences.map((experience, index) => (
                  <Column key={`${experience.organization}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.organization} variant="heading-strong-l">
                        {experience.organization}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.organization}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={`${experience.organization}-image-${index}`}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

        </Column>
      </Column>
    </Column>
  );
}