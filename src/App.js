import { Container, Content, Row } from "./style";
import Input from "./components/Input";
import NumberButton from "./components/Button";
import { useState, useEffect } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleNumber = (number) => {
    setCurrentNumber((previa) => `${previa === "0" ? "" : previa}${number}`);
  };

const handleSum = useCallback(() => {
  if (firstNumber === "0") {
    setFirstNumber(String(currentNumber));
    setCurrentNumber("0");
    setOperation("+");
  } else {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum));
    setOperation("");
  }
}, [firstNumber, currentNumber]);

  const handleLess = useCallback(() => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const less = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(less));
      setOperation("");
    }
  }, [firstNumber, currentNumber]);

  const handleMult = useCallback(() => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation("");
    }
  }, [firstNumber, currentNumber]);

  const handleDiv = useCallback(() => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation("");
    }
  }, [firstNumber, currentNumber]);

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "") {
      switch (operation) {
        case "+": handleSum(); break;
        case "-": handleLess(); break;
        case "*": handleMult(); break;
        case "/": handleDiv(); break;
        default: break;
      }
      setFirstNumber("0")
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key } = e;

      if (!isNaN(key) && key !== " ") return handleNumber(key);

      switch (key) {
        case "+": return handleSum();
        case "-": return handleLess();
        case "*": return handleMult();
        case "/":
          e.preventDefault();
          return handleDiv();
        case "Enter":
        case "=": return handleEquals();
        case "Backspace": return handleNumber("");
        case "Escape": return handleClear();
        default: break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentNumber, firstNumber, operation]);


  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Row>
            <NumberButton label="x" onCLick={() => handleMult()} />
            <NumberButton label="\" onCLick={() => handleDiv()} />
            <NumberButton label="C" onCLick={() => handleClear()} />
            <NumberButton label="Del" onCLick={() => handleNumber("")} />
          </Row>
          <Row>
            <NumberButton label="7" onCLick={() => handleNumber("7")} />
            <NumberButton label="8" onCLick={() => handleNumber("8")} />
            <NumberButton label="9" onCLick={() => handleNumber("9")} />
            <NumberButton label="-" onCLick={() => handleLess()} />
          </Row>
          <Row>
            <NumberButton label="4" onCLick={() => handleNumber("4")} />
            <NumberButton label="5" onCLick={() => handleNumber("5")} />
            <NumberButton label="6" onCLick={() => handleNumber("6")} />
            <NumberButton label="+" onCLick={() => handleSum()} />
          </Row>
          <Row>
            <NumberButton label="1" onCLick={() => handleNumber("1")} />
            <NumberButton label="2" onCLick={() => handleNumber("2")} />
            <NumberButton label="3" onCLick={() => handleNumber("3")} />
            <NumberButton label="=" onCLick={() => handleEquals()} />
          </Row>
        </Content>
      </Container>
    </div>
  );
}

export default App;