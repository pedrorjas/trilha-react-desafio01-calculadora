import { ButtonContainer} from './styles';

const Button = ({label, onClick, fundo}) => {

    return (
        <ButtonContainer className={fundo} onClick={onClick}>
            {label}
        </ButtonContainer>
    )
}

export default Button;