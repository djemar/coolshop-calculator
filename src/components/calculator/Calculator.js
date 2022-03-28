import { Box, Button, ScaleFade, SlideFade, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CalcRow from "./CalcRow";
import Result from "./Result";
import { FiPlus } from "react-icons/fi";

const rowModel = { id: uuidv4(), positive: true, value: 0, disabled: false };

function Calculator(props) {
  const [rowsOp, setRowsOp] = useState([rowModel]);
  const [sum, setSum] = useState(0);
  const [dirty, setDirty] = useState(false);

  const handleAdd = () => {
    setRowsOp([...rowsOp, { id: uuidv4(), positive: true, value: 0, disabled: false }]);
  };

  useEffect(() => {
    if (dirty) {
      var tmpSum = 0;
      rowsOp.forEach((el) => {
        if (!el.disabled) {
          if (el.positive) tmpSum += el.value;
          else tmpSum -= el.value;
        }
      });
      setSum(tmpSum);
      setDirty(false);
    }
  }, [dirty]);

  return (
    <Box>
      <Box id='calculator' className=''>
        {rowsOp.map((r) => (
          <SlideFade offsetY='20px' in={true}>
            <CalcRow key={r.id} row={r} rowsOp={rowsOp} setRowsOp={setRowsOp} setDirty={setDirty} />
          </SlideFade>
        ))}
      </Box>
      <Button className='capitalize mt-8 mb-40' rightIcon={<FiPlus />} onClick={handleAdd}>
        Add Row
      </Button>
      <Result handleAdd={handleAdd} sum={sum} />
    </Box>
  );
}

export default Calculator;
