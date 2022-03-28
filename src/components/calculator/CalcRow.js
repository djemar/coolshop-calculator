import {
  Button,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiCheck, FiSlash, FiTrash2 } from "react-icons/fi";

function CalcRow(props) {
  const { row, rowsOp, setRowsOp, setDirty } = props;
  const [value, setValue] = useState(row.value);
  const [positive, setPositive] = useState(row.positive);
  const [disable, setDisable] = useState(row.disabled);

  const getItemIndex = () => {
    return rowsOp.findIndex((item) => item.id === row.id);
  };

  const updateRows = (newRows) => {
    setRowsOp(newRows);
    setDirty(true);
  };

  const handleChange = (value) => {
    if (value === "") value = 0;
    setValue(value);
    var tmpRowsOp = [...rowsOp];
    var i = getItemIndex();
    tmpRowsOp[i].value = parseFloat(value);
    updateRows(tmpRowsOp);
  };

  const handleSignChange = (e) => {
    setPositive(JSON.parse(e.target.value));
    var tmpRowsOp = [...rowsOp];
    var i = getItemIndex();
    tmpRowsOp[i].positive = JSON.parse(e.target.value);
    updateRows(tmpRowsOp);
  };

  const handleDelete = () => {
    var tmpRowsOp = [...rowsOp];
    var i = getItemIndex();
    tmpRowsOp.splice(i, 1);
    updateRows(tmpRowsOp);
  };

  const toggleDisable = () => {
    setDisable(!disable);
    var tmpRowsOp = [...rowsOp];
    var i = getItemIndex();
    tmpRowsOp[i].disabled = !tmpRowsOp[i].disabled;
    updateRows(tmpRowsOp);
  };

  return (
    <Flex p={4} justify='center' className={`space-x-3 items-center`}>
      <Select
        maxWidth={24}
        variant='filled'
        onChange={handleSignChange}
        className={` ${disable ? "opacity-50" : ""}`}
        value={positive}>
        <option value={true}>+</option>
        <option value={false}>-</option>
      </Select>
      <NumberInput min={0} value={value} onChange={handleChange} className={`${disable ? "opacity-50" : ""}`}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button colorScheme='red' rightIcon={<FiTrash2 />} onClick={handleDelete}>
        Delete
      </Button>
      <Button
        variant='outline'
        colorScheme={`${disable ? "green" : ""}`}
        rightIcon={disable ? <FiCheck /> : <FiSlash />}
        onClick={toggleDisable}>
        {`${disable ? "Enable" : "Disable"}`}
      </Button>
    </Flex>
  );
}

export default CalcRow;
