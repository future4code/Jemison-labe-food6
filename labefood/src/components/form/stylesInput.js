import styled from 'styled-components'



export const InputControl = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1em;


label{
    margin: 0.8em;
    font-weight:#e5e5ea;
}

input{
    padding: 1.5em;
    border: 2px #d1d1d6 solid;
    border-radius: 5px;
    text-decoration:none;
    font-size: 12px;
    
}
::placeholder{ 
    background-color: red;
    color: #b8b8b8;
    font-size: 12px;

}
`