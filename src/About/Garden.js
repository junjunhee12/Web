import { AboutDiv, AboutDivContainer, AboutH3, Aboutbody, AboutbodyContainer, Aboutbodyleft, Aboutbodyright, AboutbodyrightImg, AboutleftFoot, AboutleftFootBox } from "./About";
import Glamping from "../assets/글램핑.jpg"
function Garden(){
    return(
        <>
            <AboutbodyContainer>
                <Aboutbody>
                    <Aboutbodyleft>
                        <AboutH3>
                            남한의 중앙에 위치해 있으며,<br></br>
                            다섯번째로 인구가 많은 도시 <br></br>
                            대전광역시
                        </AboutH3>
                        <AboutDivContainer>
                        
                        
                         
                        
                            <AboutDiv>
                            
                            충청도 제1의 도시로 중부지방과 남부지방을 잇는 교통의 요지이자 <br></br>
                            대덕연구개발특구(대덕연구단지), 국제과학비즈니스벨트가<br></br>
                            조성된 한국 최대이자 전 세계에서도 손꼽히는 과학·연구도시다. <br></br>
                            또한 4년제 대학만 13곳이 소재한 교육도시다.<br></br>
                            </AboutDiv>
                            <AboutDiv>
                            정부대전청사와 다수의 국가기관 본사가 자리한 행정도시이며 <br></br>
                            3군 본부와 인접해 있고, 국군의 군사 교육 및 훈련 시설이 밀집한 자운대와 <br></br>
                            육군군수사령부, 국방과학연구소 등이 자리해 군사도시의 기능도 수행하고 있다.<br></br>
                            </AboutDiv>
                            <AboutDiv>
                                대한민국에서 철도로 가장 수혜를 많이 본 도시다. 철도 하나 덕분에 시골 깡촌에서<br></br>
                                한국 6대 광역시 중 한 곳까지 발전한 도시다. 대전조차장역의 경부선과 호남선 철도<br></br>
                                분기는 훗날 경제발전기에 경부고속도로와 호남고속도로의 분기로 이어졌고 남한의 중앙에 있는<br></br>
                                교통의 요지로 각종 국가적 시혜를 얻을 수 있었다. 또한 대전의 유명 관광 명소인 성심당도<br></br>
                                대전역이 없었으면 존재하지 않았을 것이다. 비록 고속철도 분기는 오송이 가져갔지만 아직도<br></br>
                                서대전역 경유 호남선 KTX가 상당수 운영하고 있어 철도의 분기점이라는 위상은 여전히 남아있다.<br></br>
                                또한, 한국철도공사와 국가철도공단과 그 외 자회사들의 본사가 대전에 있어서 <br></br>
                                관련 사진에 철도기관 공동사옥, KTX가 꼭 들어간다. 세월이 걸려 설립하게 되었습니다.
                            </AboutDiv>
                            <AboutDiv>
                            대전권과 충청도의 중추도시다. 대전권은 한국 도시권 중 권역 내 교류가 제일 활발한 편인데<br></br>
                            한 달에 한 번 대전광역시장, 세종특별자치시장, 충청북도지사, 충청남도지사들이 모여 간담회를<br></br>
                            진행할 정도고, 네 자치단체끼리 서로 엄청나게 밀어주고 끌어주고 있다. <br></br>
                            특히 세종과의 관계가 밀접한 편으로 세종시 출범 이후 대전세종연구원을 설립하고<br></br>
                            대전과 세종 협력 시범사업까지 자주 이뤄지고 있다. 대전의 인구는 지속적으로 감소 중이지만<br></br>
                            유출된 인구의 상당수는 세종이 흡수했기 때문에 대전권의 인구는 증가 추세에 있다.<br></br>
                            </AboutDiv>
                            <AboutDiv>
                                2019년 대한민국에서 살고 싶은 도시로 서울, 부산, 제주에 이어 4위를 차지하고<br></br>
                                2021년 전국 지방자치단체 평가에서 삶의 질, 보건, 환경, 교통, 행정역량지수에서 1등, <br></br>
                                재정과 행정이 포함된 종합부문에선 서울에 이어 2등이라는 쾌거를 달성할 정도로 <br></br>
                                지역 이미지는 대체로 좋은 편이다. 세월이 걸려 설립하게 되었습니다.
                            </AboutDiv>
                        </AboutDivContainer>
                        <AboutleftFoot>
                            <AboutleftFootBox>
                                나무위키 참조
                            </AboutleftFootBox>
                            <AboutleftFootBox>
                                OOO관광부
                            </AboutleftFootBox>
                            <AboutleftFootBox>
                                OO OOO 관광지
                            </AboutleftFootBox>
                        </AboutleftFoot>
                    </Aboutbodyleft>
                    <Aboutbodyright>
                        <AboutbodyrightImg src={Glamping}></AboutbodyrightImg>
                    </Aboutbodyright>
                </Aboutbody>
            </AboutbodyContainer>
        </>
    )
}

export default Garden