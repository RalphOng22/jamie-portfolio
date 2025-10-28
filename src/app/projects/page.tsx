import {
  Column,
  Heading,
  Media,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, projectsContent, person } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import { Projects as ProjectsComponent } from "@/components/work/Projects";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: projectsContent.title,
    description: projectsContent.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(projectsContent.title)}`,
    path: projectsContent.path,
  });
}

export default function Projects() {
  const structure = [
    {
      title: "Case Competitions & Achievements",
      display: projectsContent.competitions?.display || false,
      items: projectsContent.competitions?.achievements.map((achievement) => achievement.name) || [],
    },
    {
      title: "SMUX Consulting Projects",
      display: true,
      items: [],
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={projectsContent.title}
        description={projectsContent.description}
        path={projectsContent.path}
        image={`/api/og/generate?title=${encodeURIComponent(projectsContent.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${projectsContent.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {projectsContent.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={projectsContent} />
        </Column>
      )}
      <Column fillWidth horizontal="center">
        <Column fillWidth maxWidth={40}>

          {projectsContent.competitions?.display && (
            <>
              <Heading as="h2" id={projectsContent.competitions.title} variant="display-strong-s" marginBottom="m">
                {projectsContent.competitions.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {projectsContent.competitions.achievements.map((achievement, index) => (
                  <Column key={`${achievement.name}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={achievement.name} variant="heading-strong-l">
                        {achievement.name}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {achievement.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {achievement.achievement}
                    </Text>
                    <Text variant="body-default-m" marginBottom="m">
                      {achievement.description}
                    </Text>
                    {achievement.images && achievement.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {achievement.images.map((image, index) => (
                          <Row
                            key={`${achievement.name}-image-${index}`}
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

          <Heading as="h2" variant="display-strong-s" marginBottom="m">
            SMUX Consulting Projects
          </Heading>
          <ProjectsComponent />

        </Column>
      </Column>
    </Column>
  );
}