import { useState } from "react";
import Container from "./Container";
import Input from "./Input";
import Button from "./Button";
import DaysRange from "./DaysRange";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as CalendarIcon } from "../icons/calendar.svg";
import { countTime } from "../helpers";
import { getTweets } from "../api";

function SearchBar({ token }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [period, setPeriod] = useState(1);
  const [showPeriodSelect, setShowPeriodSelect] = useState(false);
  return (
    <Container className="searchbar-container">
      <Input
        placeholder="Type anything..."
        onChange={e => setSearchQuery(e.target.value)}
      >
        <CalendarIcon
          className="icon icon-calendar"
          onClick={() => setShowPeriodSelect(!showPeriodSelect)}
        />
      </Input>
      <Container className="search-button-container">
        <Button
          onClick={() =>
            searchQuery
              ? getTweets(
                  { term: searchQuery, start_date: countTime(period) },
                  token,
                )
              : alert("Please type any term")
          }
        >
          <SearchIcon className="icon icon-search" />
        </Button>
      </Container>
      <DaysRange
        onChange={(val, _) => setPeriod(val)}
        period={period}
        showPeriodSelect={showPeriodSelect}
      />
    </Container>
  );
}

export default SearchBar;
