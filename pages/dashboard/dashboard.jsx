import {
  Avatar, Box, Button,
  Header,
  Heading, Pagination, Text, TextInput
} from "grommet";
import { Menu, Search } from "grommet-icons";
import { useRouter } from "next/dist/client/router";
import React from "react";

const Dashboard = () => {
  const router = useRouter();

  return (
    <Box
      fill="vertical"
      overflow="auto"
      align="stretch"
      flex="grow"
      width={{ max: "100%", width: "100%" }}
    >
      <Header
        align="center"
        direction="row"
        flex={false}
        justify="between"
        gap="medium"
        background={{ color: "brand" }}
        pad="small"
      >
        <Box align="center" justify="center" />
        <Button icon={<Menu />} plain />
        <TextInput placeholder="Pesquisar" icon={<Search />} />
      </Header>
      <Box align="center" justify="start" flex="grow">
        <Box
          align="stretch"
          justify="center"
          direction="column"
          pad={{ horizontal: "medium", bottom: "small" }}
          width={{ width: "xlarge" }}
        >
          <Heading
            level="3"
            textAlign="start"
            size="small"
            margin={{ left: "small" }}
          >
            Ultimas avaliações realizadas
          </Heading>
          <Box
            align="center"
            justify="start"
            direction="row"
            pad="xsmall"
            gap="medium"
          >
            <Avatar
              align="center"
              flex={false}
              justify="center"
              overflow="hidden"
              round="full"
              src="https://i.pravatar.cc/100?img=49"
            />
            <Box align="start" justify="center">
              <Text>Letícia Evelyn Castro</Text>
              <Text size="small" textAlign="start" color="text-weak">
                Avaliação incompleta
              </Text>
            </Box>
            <Box
              align="end"
              justify="start"
              direction="column"
              flex="grow"
              fill="vertical"
            >
              <Text size="small" textAlign="end">
                Hoje
              </Text>
            </Box>
          </Box>
          <Box
            align="center"
            justify="start"
            direction="row"
            pad="xsmall"
            gap="medium"
          >
            <Avatar
              align="center"
              flex={false}
              justify="center"
              overflow="hidden"
              round="full"
              src="https://i.pravatar.cc/100?img=49"
            />
            <Box align="start" justify="center">
              <Text>Letícia Evelyn Castro</Text>
              <Text size="small" textAlign="start" color="text-weak">
                Avaliação incompleta
              </Text>
            </Box>
            <Box
              align="end"
              justify="start"
              direction="column"
              flex="grow"
              fill="vertical"
            >
              <Text size="small" textAlign="end">
                Hoje
              </Text>
            </Box>
          </Box>
          <Box
            align="center"
            justify="start"
            direction="row"
            pad="xsmall"
            gap="medium"
          >
            <Avatar
              align="center"
              flex={false}
              justify="center"
              overflow="hidden"
              round="full"
              src="https://i.pravatar.cc/100?img=49"
            />
            <Box align="start" justify="center">
              <Text>Letícia Evelyn Castro</Text>
              <Text size="small" textAlign="start" color="text-weak">
                Avaliação incompleta
              </Text>
            </Box>
            <Box
              align="end"
              justify="start"
              direction="column"
              flex="grow"
              fill="vertical"
            >
              <Text size="small" textAlign="end">
                Hoje
              </Text>
            </Box>
          </Box>
          <Box
            align="center"
            justify="start"
            direction="row"
            pad="xsmall"
            gap="medium"
          >
            <Avatar
              align="center"
              flex={false}
              justify="center"
              overflow="hidden"
              round="full"
              src="https://i.pravatar.cc/100?img=49"
            />
            <Box align="start" justify="center">
              <Text>Letícia Evelyn Castro</Text>
              <Text size="small" textAlign="start" color="text-weak">
                Avaliação incompleta
              </Text>
            </Box>
            <Box
              align="end"
              justify="start"
              direction="column"
              flex="grow"
              fill="vertical"
            >
              <Text size="small" textAlign="end">
                Hoje
              </Text>
            </Box>
          </Box>
          <Box
            align="center"
            justify="start"
            direction="row"
            pad="xsmall"
            gap="medium"
          >
            <Avatar
              align="center"
              flex={false}
              justify="center"
              overflow="hidden"
              round="full"
              src="https://i.pravatar.cc/100?img=49"
            />
            <Box align="start" justify="center">
              <Text>Letícia Evelyn Castro</Text>
              <Text size="small" textAlign="start" color="text-weak">
                Avaliação incompleta
              </Text>
            </Box>
            <Box
              align="end"
              justify="start"
              direction="column"
              flex="grow"
              fill="vertical"
            >
              <Text size="small" textAlign="end">
                Hoje
              </Text>
            </Box>
          </Box>
          <Box
            align="center"
            justify="start"
            direction="row"
            pad="xsmall"
            gap="medium"
          >
            <Avatar
              align="center"
              flex={false}
              justify="center"
              overflow="hidden"
              round="full"
              src="https://i.pravatar.cc/100?img=49"
            />
            <Box align="start" justify="center">
              <Text>Letícia Evelyn Castro</Text>
              <Text size="small" textAlign="start" color="text-weak">
                Avaliação incompleta
              </Text>
            </Box>
            <Box
              align="end"
              justify="start"
              direction="column"
              flex="grow"
              fill="vertical"
            >
              <Text size="small" textAlign="end">
                Hoje
              </Text>
            </Box>
          </Box>
          <Box
            align="center"
            justify="start"
            direction="row"
            pad="xsmall"
            gap="medium"
          >
            <Avatar
              align="center"
              flex={false}
              justify="center"
              overflow="hidden"
              round="full"
              src="https://i.pravatar.cc/100?img=49"
            />
            <Box align="start" justify="center">
              <Text>Letícia Evelyn Castro</Text>
              <Text size="small" textAlign="start" color="text-weak">
                Avaliação incompleta
              </Text>
            </Box>
            <Box
              align="end"
              justify="start"
              direction="column"
              flex="grow"
              fill="vertical"
            >
              <Text size="small" textAlign="end">
                Hoje
              </Text>
            </Box>
          </Box>
          <Box
            align="center"
            justify="start"
            direction="row"
            pad="xsmall"
            gap="medium"
          >
            <Avatar
              align="center"
              flex={false}
              justify="center"
              overflow="hidden"
              round="full"
              src="https://i.pravatar.cc/100?img=49"
            />
            <Box align="start" justify="center">
              <Text>Letícia Evelyn Castro</Text>
              <Text size="small" textAlign="start" color="text-weak">
                Avaliação incompleta
              </Text>
            </Box>
            <Box
              align="end"
              justify="start"
              direction="column"
              flex="grow"
              fill="vertical"
            >
              <Text size="small" textAlign="end">
                Hoje
              </Text>
            </Box>
          </Box>
        </Box>
        <Pagination numberItems={27} />
      </Box>
      <Box align="end" justify="center" pad="medium">
        <Button label="Nova avaliação" primary onClick={() => {router.push("/dashboard/avaliacao")}}/>
      </Box>
    </Box>
  );
};

export default Dashboard;
