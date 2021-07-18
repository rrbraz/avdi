import { Avatar, Box, Button, Header, Text } from "grommet";
import { LinkPrevious } from "grommet-icons";
import { useRouter } from "next/router";

const QuestionarioLayout = ({titulo, ...props}) => {
  const router = useRouter();

  const boxAvaliado = (
    <Box align="center" justify="start" direction="row" gap="medium">
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
  );

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
        <Button icon={<LinkPrevious />} plain onClick={() => router.push("/dashboard")}/>
        <Text textAlign="center">{titulo}</Text>
      </Header>
      <Box align="center" justify="center" pad="medium" flex="grow">
        <Box width={{ width: "xlarge" }} direction="column">
          {boxAvaliado}
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionarioLayout;
