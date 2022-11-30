import {Input, InputSub, InputToogle} from './components/Input';
import Button from './components/Button';
import { Container, Content, Row, Row1} from './styles'
import { useState} from 'react';

const  App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [result, setResult] = useState('');
  const [hello, setHello] = useState('');
  const pedro = 'Pedro Henrique (dev.pedro.rjas@gmail.com)';

  const html = document.querySelector('html');
  const [darkMode, setDarkMode] = useState(true);

  const handleOnClear = () => {
    setCurrentNumber('');
    setResult('');
    setHello('');
  }

  const backspace = () => {
    setCurrentNumber(currentNumber.length === 1 ? '' : currentNumber.slice(0, -1));
    setResult('');
  }

  const handleAddNumber = (num) => {
    if(num !== ''){
      setHello('');
    }
    setCurrentNumber(currentNumber.concat(num));
  }

  const calculate = () => {

    if (currentNumber !== ''){
      try {
        // eslint-disable-next-line no-eval
        setResult(eval(currentNumber.toString()));
      } catch (error) {
        setResult("Error");
      }
    }
  }

  const helloWorld = () => {
    setHello('Hello World, Dio!');
    setResult('');
    setCurrentNumber('');
  }


const changeTheme = () => {
  darkMode ? html.classList.add("dark-mode") : html.classList.remove("dark-mode");
}

  return (
    <Container>
      <Row1>
        <InputToogle onClick={() => changeTheme(setDarkMode(!darkMode))}/>
      </Row1>
      <Content>
        <Input value={hello !== "" ? hello : currentNumber === '' ? '0' : currentNumber} />
        <InputSub value={hello !== "" ? pedro : result !== '' ? result : 'Aguardando o cálculo!'} />
        <Row>
          <Button label={"😍"} onClick={helloWorld}/>
          <Button fundo={'red'} label={"Clear"} onClick={handleOnClear}/>
          <Button fundo={'orange'} label={"<_"} onClick={backspace}/>
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber('7')}/>
          <Button label={"8"} onClick={() => handleAddNumber('8')}/>
          <Button label={"9"} onClick={() => handleAddNumber('9')}/>
          <Button fundo={'green'} label={"/"} onClick={() => handleAddNumber('/')}/>
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber('4')}/>
          <Button label={"5"} onClick={() => handleAddNumber('5')}/>
          <Button label={"6"} onClick={() => handleAddNumber('6')}/>
          <Button fundo={'green'} label={"x"} onClick={() => handleAddNumber('*')}/>
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber('1')}/>
          <Button label={"2"} onClick={() => handleAddNumber('2')}/>
          <Button label={"3"} onClick={() => handleAddNumber('3')}/>
          <Button fundo={'green'} label={"-"} onClick={() => handleAddNumber('-')}/>
        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber('0')}/>
          <Button label={"."} onClick={() => handleAddNumber('.')}/>
          <Button label={"="} onClick={calculate}/>
          <Button fundo={'green'} label={"+"} onClick={() => handleAddNumber('+')}/>
        </Row>
      </Content>
    </Container>
  );


}

export default App;
