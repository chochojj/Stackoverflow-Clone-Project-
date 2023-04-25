import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { ButtonCompo } from "../../common/Buttons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function EditRight() {
  //현재 저장된 값을 지정(서버에서 가져와야 함!)-토큰으로 해야할 수도!
  let { id } = useParams;
  const [inputValue, setInputValue] = useState("hoinleekk");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //서버에 PATCH로 보내기 useParam을 사용해서 id number를 가져와야 한다.(현재는 일단 고정된 형태!)
    axios
      .patch(`${process.env.REACT_APP_API_URL}/users/${id}/info`, {
        post: inputValue,
      })
      .then((res) => {
        console.log("Post submitted successfully");
        setInputValue("");
      })
      .catch((error) => {
        console.error("Error submitting post:", error);
      });
  };
  return (
    <EditSection>
      <div className="edit-sec">Edit your profile</div>
      <div className="line-between"></div>
      <div className="public-info">
        Public information
        <form onSubmit={handleSubmit}>
          <div className="wrapper">
            <div className="profile-img">
              <UserImg />
            </div>
            <div className="feature">Display name</div>
            <input
              className="edit-name"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            ></input>
          </div>
          <ButtonCompo type="submit">Save Profile</ButtonCompo>
        </form>
      </div>
    </EditSection>
  );
}

const EditSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  /* border: 1px solid black; */
  .edit-sec {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  .line-between {
    border-top: 1px solid black;
    margin-bottom: 2rem;
  }
  .profile-img {
    margin-top: 2rem;
  }
  .wrapper {
    margin-top: 1.8rem;
    border: 0.2px solid black;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .confirm-btn {
    margin-top: 1rem;
  }
  .feature {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1rem auto;
  }
`;

const UserImg = styled(CgProfile)`
  font-size: 7rem;
`;

export default EditRight;
