import Banner from "../../assets/YouTube-Logo.png";

import {
  Container,
  ImageBanner,
  TitleContainer,
  ChanelImage,
  TextContainer,
  Title,
  TextCard,
} from "./styles";

function VideoComponent() {
  return (
    <Container>
      <ImageBanner>
        <img
          style={{ cursor: "pointer", width: "100px", height: "100px" }}
          src={Banner}
          alt="Banner"
        />
      </ImageBanner>

      <TitleContainer>
        <ChanelImage>FR</ChanelImage>
        <TextContainer>
          <Title>Video Title</Title>
          <TextCard>Channel Name</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  );
}

export default VideoComponent;
