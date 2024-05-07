import styled from 'styled-components';
import { useContext, useState } from 'react';
import { PrContent } from './coentexts/prContent';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: yellow; */
  /* position: relative; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  button{
    border: none;
    width: 100px;
    height: 50px;
    border-radius: 8px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    /* background-color: black; */
    background-color: ${(porps) => porps.btn ? "white" :"black"};
    color: ${({btn}) => btn ? "black" :"white"};
    border: 1px solid white;
    /* display: ${({false1}) => (false1 ? "none" : "")}; */
    z-index: ${({false1}) => false1 ? "0" : "200"};
  }
  /* overflow: hidden; */
  /* overflow-x: hidden; */
`
const ContainerContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  
`
const ContainerHead = styled.div`
  width: 100%;
  height: 50vh;
  background-color: black;
  position: absolute;
  left: 0;
  /* top: ${(props) => (props.movie ? "0" : "-100%")}; */
  top: ${({movie}) => (movie ? "-100%" : "0")};
  /* transform: rotate(30deg); */
  transition: all 3s linear;
  z-index: 99;
`
const ContainerFoot = styled.div`
  width: 100%;
  height: 50vh;
  background-color: white;
  position: absolute;
  left: 0;
  bottom: ${({movie}) => (movie ? "-100%" : "0")};
  transition: all 3s linear;
  /* top: 100%; */
  z-index: 99;
`
const ContainerHead1 = styled.div`
  width: 50%;
  height: 100vh;
  background-color: white;
  /* transition: all 1s linear 3s; */
  transition: ${({btn}) => btn ? "all 1s linear 3s" : " all 0.1s linear"};
  position: absolute;
  left: ${(props) => (props.movie1 ? "-50%" : "0")};
  z-index: 88;
  top: 0;
`
const ContainerFoot1 = styled.div`
  width: 50%;
  height: 100vh;
  background-color: white;
  /* transition: all 1s linear 3s; */
  transition: ${({btn}) => (btn ? "all 1s linear 3s" : " all 0.1s linear")};
  position: absolute;
  z-index: 88;
  right: ${(props) => (props.movie1 ? "-50%" : "0")};
  top: 0;
`
const ContainerHead2 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  transition: all 3s linear ;
  position: absolute;
  left: 0;
  top: ${({movie}) => (movie ? "-100%" : "0")};
  transform: ${({movie}) => (movie ? "0" : "rotate(-45deg)")};
  transition: all 3s linear;
  z-index: 199;
`
const ContainerFoot2 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: absolute;
  left: 0;
  transform: ${({movie}) => (movie ? "0" : "rotate(45deg)")};
  bottom: ${({movie}) => (movie ? "-100%" : "0")};
  transition: all 3s linear;
  /* top: 100%; */
  z-index: 199;
`
const ContainerHead3 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  transition: all 3s linear ;
  position: absolute;
  left: 0;
  top: ${({movie}) => (movie ? "-100%" : "0")};
  transform: ${({movie}) => (movie ? "0" : "rotate(45deg)")};
  transition: all 3s linear;
  z-index: 199;
`
const ContainerFoot3 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: absolute;
  left: 0;
  transform: ${({movie}) => (movie ? "0" : "rotate(-45deg)")};
  bottom: ${({movie}) => (movie ? "-100%" : "0")};
  transition: all 3s linear;
  /* top: 100%; */
  z-index: 199;
`

const ArrBox = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  background-color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`

const ArrBoxwrap = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Div = styled.div`
  width: 400px;
  height: 400px;
  /* background-color: ${({dis}) => (dis ? "transparent" : "transparent")}; */
  background-color: transparent;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.01s linear 2s;
  border-radius: 50%;
  z-index: ${({dis}) => (dis ? "-1" : "200")};
`

const H1 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;

`
function Cover(){
    const temp = useContext(PrContent)
    const {false1} = temp
    console.log(false1);
    const [movie, setMovie] = useState(false)
  const [movie1, setMovie1] = useState(false)
  const [dis, setDis] = useState(false)
  const [btn, setBtn] = useState(false)
  const [index, setIndex] = useState()

  const handleIndexChange = (newindex) =>{
    setIndex(newindex);
  }

  const content2 = [
    "바뀌었음",
    "바뀌었음",
    "바뀌었음",
    "바뀌었음",
    "바뀌었음",
  ]
  const content = [
    "안녕하세요",
    "안녕하세요",
    "안녕하세요",
    "안녕하세요",
    "안녕하세요"
  ]
  const handleOnclick = () =>{
    setMovie(!movie)
    setMovie1(!movie1)
    setDis(!dis)
    setBtn(!btn)
    setIndex()
  }
    return(
        <>
<Container>
        
        <button false1={false1} btn={btn} onClick={handleOnclick}>클릭</button>
        <ContainerContainer>
          <ContainerHead movie={movie} >
            
            </ContainerHead>
            <ContainerFoot movie={movie}>
    
            </ContainerFoot>
            
            <ContainerHead1 btn={btn} movie1={movie1}>
    
            </ContainerHead1>
            <ContainerFoot1 btn={btn} movie1={movie1}>
    
            </ContainerFoot1>
    
            <ContainerHead2 movie={movie}>
    
            </ContainerHead2>
            <ContainerFoot2 movie={movie}>
    
            </ContainerFoot2>
    
            <ContainerHead3 movie={movie}>
    
            </ContainerHead3>
            <ContainerFoot3 movie={movie}>
    
            </ContainerFoot3>
            <Div dis={dis}>
              우측하단을 클릭하면 이미지가 나옵니다.
            </Div>
        </ContainerContainer>
        
        {/* <ArrBox>
          {content.map((content,index) =>(
            <div key={index} onClick={() => handleIndexChange(index)}>
              <ArrBoxwrap>{content}</ArrBoxwrap>
            </div>
            
          ))}
          <div>
        {content2[index]}
          </div>
        </ArrBox> */}
      </Container>
        </>
    )
}

export default Cover;