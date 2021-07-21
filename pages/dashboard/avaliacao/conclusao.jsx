import { Box, Button, Heading, List } from "grommet";
import QuestionarioLayout from "../../../components/QuestionarioLayout";

const notasAvaliacao = [
  { name: "Desempenho - Eficiência", nota: "5/5" },
  { name: "Desempenho - Eficácia", nota: "4/5" },
  { name: "Comportamento - Postura", nota: "3/5" },
  { name: "Comportamento - Resiliência", nota: "5/5" },
  { name: "Comportamento - Desafios", nota: "4/5" },
  { name: "Comportamento - Ética", nota: "4/5" },
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
    <QuestionarioLayout titulo="Resultado da avaliação">
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
          style={{textAlign: "center"}}
        >
          <Button label="IMPRIMIR RELATÓRIO EM PDF" primary href="/relatorio.pdf" />
          <Button label="IMPRIMIR RELATÓRIO EM DOC" primary={false} />
          <Button label="IMPRIMIR RELATÓRIO EM HTML" primary={false} />
        </Box>
      </Box>
    </QuestionarioLayout>
  );
};

export default Conclusao;