


  import { useState } from "react";
import styled from "styled-components";

const NoticeContainer = styled.div`
  width: 600px;
  border-bottom: 1px solid #d1d1d1;
  padding: 10px;
  margin-bottom: 10px;
`;

const NoticeTitle = styled.h3`
  color: #333;
`;

const NoticeContent = styled.p`
  padding-top: 8px;
  color: #666;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  border: none;
  width: 50px;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 2px 2px 2px 2px gray;
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Span = styled.span``;

const itemsPerPage = 5;

const Pagination = ({ data }) => {
  const notices = [
    { id: 1, title: '대전에 대한 소개 사이트입니다.', content: '2024.04.15' },
    { id: 2, title: '로미지안 가든(사이트)을 참고해서 만들어 보았습니다.', content: '2023.05.23' },
    { id: 3, title: '인사말', content: '2023.01.06' },
    { id: 4, title: '안녕하세요', content: '2023.05.23' },
    { id: 5, title: '인사말2', content: '2023.01.06' },
    { id: 6, title: '인사말3', content: '2023.01.06' },
    { id: 7, title: '안녕하세요', content: '2023.05.23' },
    { id: 8, title: '인사말2', content: '2023.01.06' },
    { id: 9, title: '인사말3', content: '2023.01.06' },
    { id: 10, title: '안녕하세요', content: '2023.05.23' },
    { id: 11, title: '인사말2', content: '2023.01.06' },
    { id: 12, title: '인사말3', content: '2023.01.06' },
    { id: 13, title: '안녕하세요', content: '2023.05.23' },
    { id: 14, title: '인사말2', content: '2023.01.06' },
    { id: 15, title: '인사말3', content: '2023.01.06' },
    { id: 16, title: '인사말2', content: '2023.01.06' },
    { id: 17, title: '인사말3', content: '2023.01.06' },
    { id: 18, title: '안녕하세요', content: '2023.05.23' },
    { id: 19, title: '인사말2', content: '2023.01.06' },
    { id: 20, title: '인사말3', content: '2023.01.06' },
    // { id: 21, title: '안녕하세요', content: '2023.05.23' },
    // { id: 22, title: '인사말2', content: '2023.01.06' },
    // { id: 23, title: '인사말3', content: '2023.01.06' },
    // { id: 24, title: '인사말3', content: '2023.01.06' },
    // { id: 25, title: '안녕하세요', content: '2023.05.23' },
    // { id: 26, title: '인사말2', content: '2023.01.06' },
    // { id: 27, title: '인사말3', content: '2023.01.06' },
    // { id: 28, title: '안녕하세요', content: '2023.05.23' },
    // { id: 29, title: '인사말2', content: '2023.01.06' },
    // { id: 30, title: '인사말3', content: '2023.01.06' },
    ];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(notices.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNotices = notices.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentNotices.map((notice) => (
        <NoticeContainer key={notice.id}>
          <NoticeTitle>{notice.title}</NoticeTitle>
          <NoticeContent>{notice.content}</NoticeContent>
        </NoticeContainer>
      ))}

      <PaginationContainer>
        {/* {currentPage > 1 && (
          <Button onClick={() => handlePageChange(currentPage - 1)}>이전</Button>
        )} */}

        {/* <Span>{currentPage} / {totalPages}</Span> */}

        {/* Render page numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
                  <Button key={index + 1} onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </Button>
        ))}
        {/* {currentPage < totalPages && (
          <Button onClick={() => handlePageChange(currentPage + 1)}>다음</Button>
        )}  */}

        
      </PaginationContainer>
    </div>
  );
};

export default Pagination;
