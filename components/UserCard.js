import * as React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background: #ffff;
`;

const Title = styled.h1`
  margin: 0px;
  font-size: 24px;
`;

const SecondaryText = styled.p`
  margin: 0px;
  color: #6b6b6b;
`;

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${props => props.url});
  background-size: cover;
  margin-right: 10px;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`;
const CoverImage = styled.img`
  width: 80%;
  padding: 20px;
  border-radius: 6px 6px 0 0;
`;
const Content = styled.div`
  padding: 20px;
`;

export const UserCard = ({
  title,
  thumbnailUrl,
  secondaryText,
  coverImage,
}) => (
  <Container>
    {coverImage && <CoverImage src={coverImage} />}
    <Content>
      <TitleBar>
        {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
        <View>
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </View>
      </TitleBar>
    </Content>
  </Container>
)

