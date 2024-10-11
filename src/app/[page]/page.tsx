/* eslint-disable check-file/folder-naming-convention */
import { Box } from "@/components/box/box";
import { Card } from "@/components/card/card";
import { Link } from "@/components/link/link";
import { List } from "@/components/list/list";
import { Page } from "@/components/page/page";
import { Text } from "@/components/text/text";

export default function Home() {
  return (
    <Page>
      <Page.Title>Blog</Page.Title>
      <Page.Description
        description={[
          "Occasional posts on JavaScript, WordPress, and front end development.",
        ]}
      />
      <Box as="section">
        <List>
          <List.Item>
            <Card>
              <Card.Header key="header">
                <Link href="/javascript" variant="overline">
                  JavaScript
                </Link>
                <Card.Title href="/blog/dynamic-data-merge-fields">
                  Inject dynamic data into static content with merge fields
                </Card.Title>

                <Card.Meta date="March 08, 2021" timeToRead={9} />
              </Card.Header>
              <Text key="content">
                Last year, I worked on upgrading one of our consumer-facing
                applications from a standard Angular application with static
                content hard-coded…
              </Text>
            </Card>
          </List.Item>
        </List>
      </Box>
    </Page>
  );
}
