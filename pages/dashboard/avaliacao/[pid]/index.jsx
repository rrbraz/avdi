import {
  Box,
  Button,
  Heading,
  Layer,
  Paragraph,
  Select,
  Text,
  TextArea,
} from "grommet";
import { useRouter } from "next/router";
import { useState } from "react";
import QuestionarioLayout from "../../../../components/QuestionarioLayout";
import { perguntas } from "../../../../lib/perguntas";

const Avaliacao = () => {
  const router = useRouter();
  let { pid } = router.query;
  pid = parseInt(pid);
  const pergunta = perguntas[pid];
  const ehUltimaPergunta = pid == perguntas.length - 1;

  const [showModal, setShowModal] = useState();

  const onClickNext = () => {
    if (ehUltimaPergunta) setShowModal(true);
    else router.push(`/dashboard/avaliacao/${pid + 1}`);
  };

  const onClickPrev = () => {
    router.push(`/dashboard/avaliacao/${pid - 1}`);
  };

  const modal = (
    <Layer
      onEsc={() => setShowModal(false)}
      onClickOutside={() => setShowModal(false)}
    >
      <Box direction="column" width={{ with: "small" }} pad="medium" gap="medium" align="center" justify="center" height="100%">
        <Text>Tem certeza que deseja finalizar a avaliação individual?</Text>
        <Box direction="row" gap="medium">
          <Button
            pad="medium"
            onClick={() => setShowModal(false)}
            label="Voltar"
          />
          <Button
            primary={true}
            label="Finalizar"
            onClick={() => router.push("/dashboard/avaliacao/conclusao")}
          />
        </Box>
      </Box>
    </Layer>
  );

  return (
    <QuestionarioLayout
      titulo={`Avaliação de desempenho - ${pid + 1}/${perguntas.length}`}
    >
      <Box align="stretch" justify="center" gap="xxsmall">
        <Heading textAlign="start" level="2">
          {pergunta?.titulo}
        </Heading>
        <Paragraph fill>{pergunta?.descricao}</Paragraph>
        <Select
          key={`sl-${pid}`}
          placeholder="Selecione"
          options={[
            "1 - muito ruim",
            "2 - ruim",
            "3 - médio",
            "4 - bom",
            "5 - excelente",
          ]}
        />
      </Box>
      <Box
        align="center"
        justify="center"
        gap="xsmall"
        pad={{ top: "large", bottom: "medium" }}
      >
        <TextArea key={`ta-${pid}`} placeholder="Observações" />
      </Box>
      <Box align="center" justify="center" direction="row" gap="small">
        <Button
          label="<< Voltar"
          primary={false}
          reverse={false}
          disabled={pid <= 0}
          onClick={onClickPrev}
        />
        <Button
          label={ehUltimaPergunta ? "Finalizar" : "Avançar >>"}
          primary
          onClick={onClickNext}
        />
      </Box>
      {showModal && modal}
    </QuestionarioLayout>
  );
};

export default Avaliacao;
