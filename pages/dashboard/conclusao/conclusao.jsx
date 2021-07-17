import { Avatar, Box, Button, Header, Heading, List, Text } from "grommet";
import { LinkPrevious } from "grommet-icons";

const notasAvaliacao = [
  { name: "Desempenho - Eficiência", nota: "5/5" },
  { name: "Desempenho - Eficácia", nota: "4/5" },
  { name: "Comportamento - Postura", nota: "3/5" },
  { name: "Comportamento - Resiliência", nota: "5/5" },
  { name: "Comportamento - Desafios", nota: "5/5" },
  { name: "Comportamento - Ética", nota: "5/5" },
  {
    name: "Habilidade sociais e pessoais - Resolução de problemas",
    nota: "5/5",
  },
  {
    name: "Habilidade sociais e pessoais - Comunicação",
    nota: "5/5",
  },
  {
    name: "Habilidade sociais e pessoais - Proatividade",
    nota: "5/5",
  },
  {
    name: "Habilidade sociais e pessoais - Relacionamento interpessoal",
    nota: "5/5",
  },
  {
    name: "Habilidade sociais e pessoais - Colaboração com a equipe",
    nota: "5/5",
  },
  {
    name: "Habilidade sociais e pessoais - Relacionamento com a equipe",
    nota: "5/5",
  },
  {
    name: "Habilidade sociais e pessoais - Valores e diretrizes da empresa",
    nota: "5/5",
  },
];
const Conclusao = () => {

  return (
    <Box
      overflow="scroll"
      align="stretch"
      gap="none"
      direction="column"
      justify="start"
      flex="grow"
      fill="vertical"
    >
      <Header
        align="center"
        direction="row"
        flex={false}
        justify="start"
        gap="medium"
        background={{ color: "brand" }}
        pad="small"
      >
        <Button icon={<LinkPrevious />} plain />
        <Text textAlign="center">Conclusão da avaliação</Text>
      </Header>
      <Box
        align="center"
        justify="start"
        direction="row"
        pad="medium"
        gap="small"
        flex="grow"
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
          <Text size="small" textAlign="start" color="text-weak">
            Avaliada
          </Text>
          <Text>Letícia Evelyn Castro</Text>
        </Box>
      </Box>
      <Box
        align="stretch"
        justify="start"
        direction="column"
        gap="none"
        flex="grow"
      >
        <Heading
          level="3"
          truncate={false}
          margin={{ horizontal: "small", vertical: "small" }}
        >
          Resumo da avaliação
        </Heading>
        <List
          data={notasAvaliacao}
          secondaryKey="nota"
          primaryKey="name"
          pad="small"
        />
      </Box>
      <Box
        align="center"
        justify="start"
        direction="column"
        flex="grow"
        pad={{ top: "medium" }}
      >
        <Box
          align="stretch"
          justify="center"
          direction="column"
          gap="small"
          pad="xsmall"
          width="medium"
        >
          <Button label="IMPRIMIR RELATÓRIO EM PDF" primary reverse={false} />
          <Button label="IMPRIMIR RELATÓRIO EM DOC" primary={false} />
          <Button label="IMPRIMIR RELATÓRIO EM HTML" primary={false} />
        </Box>
      </Box>
    </Box>
  );
};

export default Conclusao;
