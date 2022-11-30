import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 8px;
    border: 1px solid #3C3C3C;
    border-radius: 8px;
    margin: 2px;
    color: #3c3c3c;
    font-size: 1.5rem;
    //background-color: #3689e6;
    transition-duration: 0.2s;
    cursor: pointer;
    font-weight: 900;
    flex: 1;

    &:hover {
        //opacity: 0.6;
        background-color: #8cd5ff;
        //color: white;
    }

    &.red {
        background-color: #ff2626;
        &:hover{
            background-color: #ff8c82;
        }
    }

    &.green {
        background-color: #9bdb4d;
        &:hover{
            background-color: #d1ff82;
        }
    }

    &.orange {
        background-color: #ffa154;
        &:hover{
            background-color: #ffc27d;
        }
    }

`


