import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillExclamationCircleFill,BsCaretDownFill ,BsCaretUpFill} from 'react-icons/bs';
import {BiArchiveIn} from 'react-icons/bi';

// eslint-disable-next-line
import {saveAs} from 'file-saver';

const Container=styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2vw;

  padding:28px;
  
  width: 90%;

  background-color: ${({theme})=>theme.colors.orange};
  color:${({theme})=>theme.colors.white};
  box-shadow:0px 3px 5px #0000002f;

  border-radius: 50px;
`;
const Header=styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;

  flex-wrap: wrap;
  gap:1vw;

  .headerIcon{
    margin:0px;
  }

  .headerText{
    font-size: ${({theme})=>theme.fonts.dealWithPest.toggleHeader};
    font-weight: ${({theme})=>theme.fontsWeights.dealWithPest.header};
    letter-spacing: 0.1vw;
  }
`;

const ToggleDiv=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
  gap:0px;

  cursor: pointer;

  color:${({theme})=>theme.colors.white};
  background-color: transparent;
  border-radius: 50px;

  font-size: ${({theme})=>theme.fonts.dealWithPest.toggleHeader};
  font-weight: ${({theme})=>theme.fontsWeights.toggle};
`;
const ToggleDivHeader=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;

  width:100%;
  padding:18px;
  
  flex-wrap: wrap;
  gap:3vw;

  color:${({theme})=>theme.colors.white};
  background-color: transparent;
  border-radius: 50px;

  font-weight: ${({theme})=>theme.fontsWeights.dealWithPest.toggleHeader};

  &:hover{
    background-color: ${({theme})=>theme.colors.white} !important;
    color:${({theme})=>theme.colors.orange} !important;
    box-shadow:0px 3px 5px #0000002f !important;
    transition: background-color 0.2s !important;

    .icon {
      color:${({theme})=>theme.colors.orange} !important;
      transition: color 0.2s !important;
    }
  }
  .toggleHeader{
    display: flex;
    flex-direction: row;
    width: 100%;
    
    justify-content: space-between !important;
    align-items: center;

  }
  .icon{
    width:${({theme})=>theme.icons.downFill};
    height:${({theme})=>theme.icons.downFill};
    margin:0px;

    color:${({theme})=>theme.colors.white};
  }
`;

const ToggleContent=styled.div`
  flex-direction: column;
  padding:1vw;

  width: 100%;

  background-color: ${({theme})=>theme.colors.lightorange};
  color:${({theme})=>theme.colors.orange};
  border-radius: 15px;
  box-shadow:0px 3px 5px #0000002f;

  font-weight: ${({theme})=>theme.fontsWeights.toggle};
`;
const ToggleContentAdd=styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top:1vw;

  flex-wrap: wrap;
  gap: 1vw;

  color:${({theme})=>theme.colors.orange};

  font-size:${({theme})=>theme.fontSizes.dealwithpestAdd};
`;
const ToggleContentDownload=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  gap:0.2vw;
  width: 100%;
  padding : 0.5vw;

  background-color: ${({theme})=>theme.colors.white};
  color:${({theme})=>theme.colors.orange};

  border-radius: 15px;

  font-size: ${({theme})=>theme.fontSizes.downloadButton};

  .icon{
    margin: 0px;
  }
`;

function DealWithPest() {
  const [isToggledPesticide,setIsToggledPesticide]=useState(false);
  const [isToggled01, setIsToggled01] = useState(false);
  const [isToggled02, setIsToggled02] = useState(false);

  const handleTogglePesticide = () => {
      setIsToggledPesticide(prevState => !prevState);
  };

  const handleToggle01 = () => {
      setIsToggled01(prevState => !prevState);
  };

  const handleToggle02 = () => {
    setIsToggled02(prevState => !prevState);
};

  return (
    <>
      <Container>
        <Header>
          <BsFillExclamationCircleFill className='headerIcon'/>
          <span className='headerText'>톱다리개미허리노린재 대처법</span>
        </Header>

        <ToggleDiv onClick={handleTogglePesticide}>
          <ToggleDivHeader 
            style={{ 
              background: isToggledPesticide ? 'white' : 'inherit',
              color: isToggledPesticide ? '#FF6A4A' : 'inherit',
              boxShadow: isToggledPesticide ? '0px 3px 5px #0000002f' : 'inherit'
              }}>
            <div className='toggleHeader'>
              농약 추천
              {isToggledPesticide ?
                  <BsCaretUpFill 
                    style={{
                      color:isToggledPesticide ? '#FF6A4A' : 'inherit'
                    }}
                    className='icon' /> :
                  <BsCaretDownFill className='icon'/>
              }
            </div>
          </ToggleDivHeader>
          {isToggledPesticide && (
            <ToggleContent>
              농약 컴포넌트 입니다.
              <ToggleContentAdd>
                <p>추가 정보는 아래 엑셀을 다운 받아서 확인해주세요!</p>
                <ToggleContentDownload>
                  <BiArchiveIn className='icon'/>
                  <span>농약 제품 목록 엑셀 다운 받기</span>
                </ToggleContentDownload>
              </ToggleContentAdd>
            </ToggleContent>
          )}
          {!isToggledPesticide && (<></>)}
        </ToggleDiv>

        <ToggleDiv onClick={handleToggle01}>
          <ToggleDivHeader 
            style={{ 
              background: isToggled01 ? 'white' : 'inherit',
              color: isToggled01 ? '#FF6A4A' : 'inherit' }}>
            <div className='toggleHeader'>
              대처법 01
              {isToggled01 ?
                  <BsCaretUpFill 
                    style={{
                      color:isToggled01 ? '#FF6A4A' : 'inherit'
                    }}
                    className='icon' /> :
                  <BsCaretDownFill className='icon'/>
              }
            </div>
          </ToggleDivHeader>
          {isToggled01 && (
            <ToggleContent>
              대처법 01 컴포넌트 입니다.
            </ToggleContent>
          )}
          {!isToggled01 && (<></>)}
        </ToggleDiv>

        <ToggleDiv onClick={handleToggle02}>
          <ToggleDivHeader 
            style={{ 
              background: isToggled02 ? 'white' : 'inherit',
              color: isToggled02 ? '#FF6A4A' : 'inherit' }}>
            <div className='toggleHeader'>
              대처법 02
              {isToggled02 ?
                  <BsCaretUpFill 
                    style={{
                      color:isToggled02 ? '#FF6A4A' : 'inherit'
                    }}
                    className='icon' /> :
                  <BsCaretDownFill className='icon'/>
              }
            </div>
          </ToggleDivHeader>
          {isToggled02 && (
            <ToggleContent>
              대처법 02 컴포넌트 입니다.
            </ToggleContent>
          )}
          {!isToggled02 && (<></>)}
        </ToggleDiv>

      </Container>
    </>
  )
};

export default DealWithPest;
