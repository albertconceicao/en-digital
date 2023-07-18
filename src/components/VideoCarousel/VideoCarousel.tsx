import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Container } from './VideoCarousel.styles';
import 'bootstrap/dist/css/bootstrap.css';

export function VideoCarousel() {
  useEffect(() => {
    // Carrega a API do YouTube Player
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Função de callback para a criação do player do YouTube
    window.onYouTubeIframeAPIReady = function () {
      // Cria os players do YouTube
      new window.YT.Player('video1', {
        width: 500,
        videoId: 'R_HCSdrRCtM',
        events: {
          onReady: onPlayerReady
        }
      });

      new window.YT.Player('video2', {
        width: 500,
        videoId: '3NUAHnHc7GI',
        events: {
          onReady: onPlayerReady
        }
      });
    };

    function onPlayerReady(event) {
      // Define o modo de tela cheia como disponível nos players do YouTube
      event.target.setOption('playerVars', {
        fs: 1
      });
    }
    const iframe = document.getElementById('youtube-video1');

    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const style = document.createElement('style');
      style.innerHTML = '.ytp-chrome-controls { max-width: 480px !important; }';
      iframeDoc.head.appendChild(style);
    }
  }, []);

  return (
    <Container>
      <Carousel interval={null} controls>
        <Carousel.Item key={1}>
          <div id="video1" />
        </Carousel.Item>
        <Carousel.Item key={2}>
          <div id="video2" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
