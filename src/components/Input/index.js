import { InputContainer, InputContainerSub, IToogle} from './styles'

export const Input = ({value = '0'}) => {
    return (<>
        <InputContainer>
            <input disabled value={value}/>
        </InputContainer>
        </>
    )
}

export const InputSub = ({value}) => {
    return (<>
        <InputContainerSub>
            <input disabled value={value}/>
        </InputContainerSub>
        </>
    )
}

export const InputToogle = ({onClick}) => {
    return (<>
        <IToogle>
            <input type="checkbox" id="switch" onClick={onClick}/>
            <label for="switch"/>
        </IToogle>
        </>
    )
}
