import {
  Avatar,
  Box,
  Button,
  Header,
  Heading,
  Paragraph,
  Select,
  Text,
  TextArea
} from "grommet";
import { LinkPrevious } from "grommet-icons";
import { useRouter } from "next/dist/client/router";

const Avaliacao = () => {
  const router = useRouter();

  return (
    <Box
      fill="vertical"
      overflow="auto"
      align="stretch"
      flex="grow"
      gap="small"
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
        <Text textAlign="center">Avaliação de desempenho - 1/13</Text>
      </Header>
      <Box align="stretch" justify="center" direction="column" pad="medium">
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
            <Text size="small" textAlign="start" color="text-weak">
              Avaliada
            </Text>
            <Text>Letícia Evelyn Castro</Text>
          </Box>
        </Box>
        <Box align="stretch" justify="center" gap="xxsmall">
          <Heading textAlign="start" level="2">
            Eficiência
          </Heading>
          <Paragraph fill>
            Dê uma nota para a eficiência do liderado em realizar entregas no
            prazo e dentro do orçamento estabelecido para a atividade (1 a 5)
          </Paragraph>
          <Select options={["Selecione", "1", "2", "3", "4", "5"]} />
        </Box>
        <Box
          align="center"
          justify="center"
          gap="xsmall"
          pad={{ top: "large", bottom: "medium" }}
        >
          <TextArea placeholder="Observações" />
        </Box>
      </Box>
      <Box align="center" justify="center" direction="row" gap="small">
        <Button label="<< Voltar" primary={false} reverse={false} />
        <Button
          label="Avançar >>"
          primary
          onClick={() => {
            router.push("/dashboard/conclusao");
          }}
        />
      </Box>
    </Box>
  );
};

export default Avaliacao;
