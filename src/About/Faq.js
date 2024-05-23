import { useState } from "react";
import styled from "styled-components";

const FaqContainer = styled.div`
    width: 100%;
    height: 100%;
    /* padding-top: 100px; */
    padding: 100px 0;
    .header{
        display: flex;
        justify-content: center;
    }
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
    .qes{
        padding-right: 32px;
    }
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
    font-size: 48px;
`;

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const place = [
        ["Q", "참고한 Site ?", "로미지안 가든을 보면서 만들었으며 height, font-size, font-weight, font-family 이외에는 전부 제가 생각해서 만들었습니다."],
        ["Q", "내용을 대전에 대한 소개로 만들어준 이유?", "처음에는 전부 똑같이 만들어 주었지만 만들고 나서 이대로 사용이 가능한가? 생각이 들었기 때문에 내용은 다르게 주었으며 레이아웃을 살짝 다르게 만들었습니다.( 모든 곳이 다르진 않음! )."],
        ["Q", "메인화면 상단에 클릭버튼을 만든 이유?", " 애니메이션을 한번 만들어 보고 싶었고 적용시켜 보았습니다... ㅎㅎ"],
        ["Q", "만족하지 못하는 부분이 있는지?", " 랜더링과 변수명 그리고 컴포넌트로 쪼개는 힘이 아직 부족한거 같아 다음에는 그 부분을 조금 더 신경쓰고 공부하면서 만들어야겠다고 생각했습니다."],
        ["Q", "사이트를 총 만들어 준 시간?", " 4월 22일 ~ 5월 13일 총 22일"],
        ["Q", "디자인도 참고하고 웹사이트만 만들어 주었는데 시간이 오래걸린 이유? ", `1. 아직 실력이 부족합니다. 2. 최대한 공부하면서 만들어 주었습니다. 3. 하드코딩으로 작성후 코드를 줄일 수 있는 부분을  생각하는 시간을 가졌습니다.`],
        ["Q", "반응형이 되어있지 않은데 적용 시킬 수 있는지?", " 현재 만들어준 사이트에서는 잘모르겠습니다. ㅎㅎ;; 다음에 만들려고 하는 사이트에서는 반응형까지 만들어보겠습니다."],
        ["Q", "깃허브로 바로가기 ", " https://github.com/junjunhee12/Web "],
        
    ]

    return (
        <FaqContainer>
            <div className="header">질문에 대한 답변을 작성한 곳 입니다.</div>
            <Faqcontent>
                <Faqcontentwrap>
                        {place.map((content,index) =>(
                            
                            <Faqcontentwrapbox>
                                <FaqcontentwrapboxQ key={index} onClick={() => handleClick(index)}>
                                    <div className="qes">
                                        {content[0]}
                                    </div>
                                    {content[1]}
                                    
                                </FaqcontentwrapboxQ>
                                {/* <FaqcontentwrapboxF click={activeIndex === index}>
                                    {content[2]}
                                    
                                </FaqcontentwrapboxF> */}
                                <FaqcontentwrapboxF click={activeIndex === index}>
                                    {index === place.length - 1 ? (
                                        <a href="https://github.com/junjunhee12/Web">{content[2]}</a>
                                    ) : (
                                        content[2]
                                    )}
                                </FaqcontentwrapboxF>
                            </Faqcontentwrapbox>
                                
                            
                        ))}
                        
                        
                </Faqcontentwrap>
            </Faqcontent>
        </FaqContainer>
    );
}

export default Faq;
