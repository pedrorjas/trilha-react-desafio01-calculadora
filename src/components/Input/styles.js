import styled from 'styled-components';

export const InputContainer = styled.div`
    //width: 100%;
    height: 75px;
    background-color: #4d4d4d;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    align-items: stretch;
    
    input {
        width: 100%;
        height: 75px;
        background-color: #4d4d4d;
        color: #FFF;
        border: transparent;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border: 2px solid #5c5c5c;
        text-align: right;
        padding: 0 10px;
        font-size: 2rem;
    }

`

export const InputContainerSub = styled.div`
    //width: 100%;
    height: 35px;
    background-color: #4d4d4d;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    align-items: stretch;
    margin-bottom: 5px; 
    
    input {
        width: 100%;
        height: 35px;
        background-color: #4d4d4d;
        color: #FFF;
        border: transparent;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border: 2px solid #5c5c5c;
        text-align: right;
        padding: 0 10px;
        font-size: 1rem;
    }
`

export const IToogle = styled.div`

    label {
        width: 3rem;
        height: 1.75rem;
        position: relative;
        display: block;
        background: #EBEBEB;
        border-radius: 1rem;
        box-shadow: inset 0rem .05rem .15rem #00000080, inset 0rem -.05rem .15rem #00000080;
        cursor: pointer;
        transition: 0.5s;
    }

    label:after {
        content: "";
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: .1rem;
        left: .1rem;
        background: linear-gradient(180deg, #FFCC89, #D8860B);
        border-radius: 16px;
        box-shadow: inset 0rem .05rem .15rem #00000020;
        transition: 0.5s;
    }

    input {
        width: 0;
        height: 0;
        visibility: hidden;
    }

    input:checked + label {
        background: #242424;
    }

    input:checked + label:after {
        left: 2.9rem;
        transform: translateX(-100%);
        background: linear-gradient(180deg, #777, #3a3a3a);
    }

    label:active:after {
        width: 1.7rem;
    }
`