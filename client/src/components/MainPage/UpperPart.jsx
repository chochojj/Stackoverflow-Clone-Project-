import styled from "styled-components";
import { AskQuestionBtn } from "../common/Buttons";
const UpperPart = () => {
  return (
    <Upper>
      <ContentTitle>All Questions</ContentTitle>
      <AskQuestionBtn />
    </Upper>
  );
};

const Upper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const ContentTitle = styled.p`
  font-size: 1.5rem !important;
`;

export default UpperPart;
