import styled from 'styled-components'
 

export const Container = styled.div`
display: flex;
margin: 0;
padding: 0;
height: 100vh;

`

export const ControlImg = styled.div`
margin-top: 60px;
margin-left: 128px;
margin-right: 128px;
margin-bottom: 30px;
flex-direction: row;

img{
    height: 70px;  

}
`
export const Title = styled.div`
display: flex;
justify-content: center;
margin-top:20px;
margin-bottom: 20px;
h2{

color: #000000;
font-size: 16px;
font-family: Roboto;
}

`
export const ControlButton = styled.div`
display: flex;
flex-direction: column;
margin-top: 5em;
margin-bottom:5em;
background-color: #ff2d55;
border-radius: 5px;

button{
background-color: #e86e5a;
border: none;
cursor: pointer;
padding: 1em;
font-size: 16px;
color:#000000;
border-radius: 5px;
}
`
export const SpanControl = styled.div`
display: flex;
flex-direction: column;

span{
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    color: #000000;
}
 
`