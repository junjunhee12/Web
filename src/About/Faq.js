import { useState } from "react";
import styled from "styled-components";

const FaqContainer = styled.div`
    width: 100%;
    height: 100%;
    /* padding-top: 100px; */
    padding: 100px 0;
`;

const Faqcontent = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: #ccc; */
    display: flex;
    justify-content: center;
`;

const Faqcontentwrap = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 100%;
    /* background-color: yellow; */
    margin: 100px 0;
    border-top:1px solid black ;
`;

const Faqcontentwrapbox = styled.div`
    /* margin: 100px 0; */
    width: 100%;
    max-width: 1600px;
    height: 100%;
    /* background-color: dodgerblue; */
    position: relative;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    /* justify-content: ;
     */
     /* gap: 1rem; */
`;

const FaqcontentwrapboxQ = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 100px;
    padding-left: 48px ;
    background-color: black;
    color: white;
    /* border-top: 1px solid black; */
    font-size: 24px;
    display: flex;
    align-items: center;
    cursor: pointer; 
`;

const FaqcontentwrapboxF = styled.div`
    width: 100%;
    max-width: 1600px;
    padding-left: 48px;
    background-color: #B1B1C0;
    overflow: hidden;

    /* border-left:1px solid black ;
    border-right:1px solid black ; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    height: ${({ click }) => (click ? "400px" : "0")}; 
    transition: height 0.5s ease-in-out; 
`;

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const place = [
        ["Q 첫번째 질문", "내용1"],
        ["Q 두번째 질문", "내용2"],
        ["Q 세번째 질문", "내용3"],
        ["Q 네번째 질문", "내용4"]
    ]

    return (
        <FaqContainer>
            <Faqcontent>
                <Faqcontentwrap>
                        {place.map((content,index) =>(
                            
                            <Faqcontentwrapbox>
                                <FaqcontentwrapboxQ key={index} onClick={() => handleClick(index)}>
                                    {content[0]}
                                    
                                </FaqcontentwrapboxQ>
                                <FaqcontentwrapboxF click={activeIndex === index}>
                                    {content[1]}
                                </FaqcontentwrapboxF>
                            </Faqcontentwrapbox>
                                
                            
                        ))}
                        
                        
                </Faqcontentwrap>
            </Faqcontent>
        </FaqContainer>
    );
}

export default Faq;
