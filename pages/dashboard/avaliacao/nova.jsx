import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Header,
  Heading,
  ResponsiveContext,
  Text,
  TextInput,
} from "grommet";
import { LinkPrevious, Search } from "grommet-icons";
import { useRouter } from "next/router";
import React from "react";

const colaboradores = [
  "Letícia Evelyn Castro",
  "Rafael Alves",
  "Juvenal Alves",
  "Julia Silva",
  "Daniel Guilherme Ian Bernardes",
  "Breno Antonio André Drumond",
  "Otávio Jorge Baptista",
  "Miguel Sebastião Renan Aragão",
  "Eloá Tatiane Nogueira",
  "Beatriz Lorena Nunes",
  "Caroline Sarah Beatriz da Silva",
  "Hadassa Vitória Rezende",
  "Isaac Ruan Breno Teixeira",
  "Murilo Isaac Cavalcanti",
  "Larissa Fabiana Raquel Aparício",
  // "Rafaela Analu Natália Cardoso",
];

const NovaAvaliacao = () => {
  const router = useRouter();
  const size = React.useContext(ResponsiveContext);

  const renderCard = (name) => {
    const onClick = () => {
      router.push("/dashboard/avaliacao/0");
    };
    if (size === "small") {
      return (
        <Box
          width="100%"
          direction="row"
          align="center"
          gap="medium"
          margin="small"
          onClick={onClick}
        >
          <Avatar
            align="center"
            flex={false}
            justify="center"
            overflow="hidden"
            round="full"
            src={`https://avatars.dicebear.com/api/initials/${encodeURI(
              name
            )}.svg`}
          />
          <Text size="small" textAlign="center">
            {name}
          </Text>
        </Box>
      );
    }
    return (
      <Card
        margin="xsmall"
        width="small"
        align="center"
        pad="small"
        onClick={onClick}
      >
        <CardHeader>
          <Avatar
            align="center"
            flex={false}
            justify="center"
            overflow="hidden"
            round="full"
            src={`https://avatars.dicebear.com/api/initials/${encodeURI(
              name
            )}.svg`}
          />
        </CardHeader>
        <CardBody pad="small">
          <Text size="small" textAlign="center">
            {name}
          </Text>
        </CardBody>
      </Card>
    );
  };

  return (
    <Box
      fill="vertical"
      overflow="auto"
      align="stretch"
      flex="grow"
      gap="small"
    >
      <Header
        justify="center"
        align="center"
        background={{ color: "brand" }}
        pad="small"
      >
        <Box width="xlarge" direction="row" gap="medium" justify="start">
          <Button
            icon={<LinkPrevious />}
            plain
            onClick={() => router.push("/dashboard")}
          />
          <Text textAlign="center">Nova Avaliação</Text>
        </Box>
      </Header>
      <Box align="center" justify="start" pad="medium" flex="grow">
        <Box width={{ width: "xlarge" }} direction="column">
          <Heading
            level="3"
            textAlign="start"
            size="small"
            margin={{ left: "small" }}
          >
            Selecione o colaborador a ser avaliado:
          </Heading>
          <Box pad={{ bottom: "medium" }}>
            <TextInput
              placeholder="Pesquisar colaborador"
              type="search"
              icon={<Search />}
              background
            />
          </Box>

          <Box direction="row" wrap justify="center">
            {colaboradores.map(renderCard)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NovaAvaliacao;
