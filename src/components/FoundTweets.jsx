import Title from "./Title";
import Table from "./Table";
import Container from "./Container";

function FoundTweets() {
  return (
    <Container className="tweets-container">
      <Title priority={4} className="tweets-title">
        Found Tweets
      </Title>
      <Table tHead={["News text", "Question", "Number of replies", "edit"]} />
    </Container>
  );
}

export default FoundTweets;
