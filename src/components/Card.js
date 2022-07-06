import React from 'react';
import styled from 'styled-components';
import video from '../img/videoUpload.png';
import dog from '../img/coolDog.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999999;
`;

const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`;

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999999;
`;

const Text = styled.div``;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`;

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 9px 0px;
`;

const Info = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
        <Container>
            <Image src={video} />
            <Details>
                <ChannelImage src={dog} />
                <Text>
                    <Title>Test Video</Title>
                    <ChannelName>MeTube</ChannelName>
                    <Info>123,456 views * 1 day ago</Info>
                </Text>
            </Details>
        </Container>
    </Link>
  )
}

export default Card