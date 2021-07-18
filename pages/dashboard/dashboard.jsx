import {
  Avatar,
  Box,
  Button,
  Header,
  Heading,
  Pagination,
  Text,
  TextInput
} from "grommet";
import { Menu, Search } from "grommet-icons";
import { useRouter } from "next/dist/client/router";
import React from "react";

let avaliacoes = [
  {
    name: "Sara Martins",
    gender: "female",
    date: "Hoje",
    status: "incompleta",
  },
  {
    name: "Cauã Saraiva",
    gender: "female",
    date: "Hoje",
    status: "incompleta",
  },
  {
    name: "Bernardo Braga",
    gender: "female",
    date: "Ontem",
    status: "completa",
  },
  {
    name: "Alessandra Oliveira",
    gender: "female",
    date: "Ontem",
    status: "completa",
  },
  {
    name: "Margarida Batista",
    gender: "female",
    date: "19/07/2021",
    status: "completa",
  },
  {
    name: "Bruna Barros",
    gender: "female",
    date: "19/07/2021",
    status: "completa",
  },
  {
    name: "Enzo Saraiva",
    gender: "female",
    date: "19/07/2021",
    status: "completa",
  },
  {
    name: "Silas Carvalho",
    gender: "female",
    date: "16/07/2021",
    status: "completa",
  },
];

const Dashboard = () => {
  const router = useRouter();

  const renderLine = ({ name, date, status }) => {
    return (
      <Box
        key={name}
        align="center"
        justify="start"
        direction="row"
        pad="xsmall"
        gap="medium"
        onClick={() =>
          router.push(
            `/dashboard/avaliacao/${status == "completa" ? "conclusao" : 7}`
          )
        }
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
        <Box align="start" justify="center">
          <Text>{name}</Text>
          <Text size="small" textAlign="start" color="text-weak">
            Avaliação {status}
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
            {date}
          </Text>
        </Box>
      </Box>
    );
  };

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
          {avaliacoes.map(renderLine)}
        </Box>
        <Pagination numberItems={27} />
      </Box>
      <Box align="end" justify="center" pad="medium">
        <Button
          label="Nova avaliação"
          primary
          onClick={() => {
            router.push("/dashboard/avaliacao/0");
          }}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
