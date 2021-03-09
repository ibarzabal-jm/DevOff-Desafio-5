import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { getMoveByName } from "../../api/getMoveByName";
import PropTypes from "prop-types";

const AddMoves = ({ setMoves }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const moveName = inputValue.replace(/ /g, "-").toLowerCase();

    if (moveName.length > 1) {
      await getMoveByName(moveName)
        .then((move) => {
          setLoading(false);
          setMoves((moves) => [move, ...moves]);
          setInputValue("");
        })
        .catch((error) => {
          setLoading(false);
          setError(`${inputValue} not found.`);
        });
    } else {
      setLoading(false);
      setError("Move name to short");
    }
  };

  return (
    <Stack>
      <form onSubmit={handleSubmit}>
        <InputGroup variant="filled">
          <InputLeftElement
            children={<SearchIcon color="black" />}
            onClick={handleSubmit}
            cursor="pointer"
          />
          <Input
            placeholder="Search Move (example: Ember, Thunder, Rain-Dance, Swords-Dance etc)"
            type="text"
            isInvalid={error}
            errorBorderColor="crimson"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </InputGroup>
      </form>
      {error && <Text textColor="crimson">{error}</Text>}
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.85s"
          emptyColor="blue.200"
          color="black"
          size="xl"
        />
      )}
    </Stack>
  );
};

export default AddMoves;

AddMoves.propType = {
  setMoves: PropTypes.func.isRequired,
};
