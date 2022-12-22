import Input from "../components/Input";
import Container from "../components/Container";
import FoundTweets from "../components/FoundTweets";

function DiscoverView() {
  return (
    <Container tag="section">
      <Container className="found-tweets-container">
        <FoundTweets />
      </Container>
    </Container>
  );
}

export default DiscoverView;
