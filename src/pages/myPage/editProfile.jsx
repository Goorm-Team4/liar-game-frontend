import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Input from '../../components/shared/input';
import Button from '../../components/shared/button';
import ProfileImg from '../../components/shared/profile/ProfileImg';
import { iconList } from '../../assets/images/iconlist';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "./styles.css";
import { editUserInfo } from '../../api/users';

function EditProfile({ setTab }) {

  const [myIconList, setMyIconList] = useState(iconList);
  const [myIcon, setmyIcon] = useState();
  const [myNickname, setMyNickname] = useState("귀여운아기사슴");

  const editProfileHandler = () => {
    const formData = new FormData();
    formData.append("username", myNickname);
    formData.append("image", myIcon);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    };

    // editUserInfo(FormData);
    setTab("main")
  }

  useEffect(() => {
    console.log(myNickname)
    return () => {

    };
  }, [myNickname]);

  return (
    <EditContainer>
      <SwiperContainer>
        <span>프로필 선택</span>
        <Swiper
          centeredSlides={true}
          slidesPerView={5}
          centerInsufficientSlides={true}
          controller={{
            inverse: true
          }}
          navigation={true}
          loop={true}
          modules={[Navigation]}
        >
          {myIconList.map((data) => (
            <SwiperSlide>
              <Slide><ProfileImg src={data} /></Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
      <InputContainer>
        <span> 닉네임</span>
        <Input value={myNickname} onChange={(e) => setMyNickname(e.target.value)} />
      </InputContainer>
      <ButtonContainer>
        <Button size={"small"} children={"변경"} onClick={editProfileHandler} />
        <Button size={"small"} children={"취소"} onClick={() => setTab("main")} />
      </ButtonContainer>
    </EditContainer>
  )
}

export default EditProfile;

const EditContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10%;
  gap: 40px;
  `;

const SwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    margin-left: 5%;
    font-size: 28px;
  } 
`;

const Slide = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
  `;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  font-size : 28px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 90%;
  gap: 20px;
`;