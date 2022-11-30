import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    //background: #ff2626;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    //z-index: -1;

    

`
export const Content = styled.div`
    backgroun-color: #FFF;
    width: 40%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    //align-items: stretch;
`

export const Row1 = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 50px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-itens: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-itens: center;
    
`
/*
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
*/


