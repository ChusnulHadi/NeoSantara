import 'aos';
import Link from 'react-scroll/modules/components/Link';
import styled from 'styled-components'
// import data-aos from AOS
const Home = () => {
    return (
        <Wrapper id='home'>
            <Text>
                <h1 data-aos={'fade-up'}>
                    neo santara solusi
                </h1>
                <p data-aos={'fade-up'}>
                    internet service provider yang menyediakan layanan internet dedicated untuk memenuhi kebutuhan digital anda di era modern saat ini
                </p>
                <p data-aos={'fade-up'}>
                    perkembangan teknologi yang semakin pesat tentu saja harus diimbangi dengan penggunaan jaringan interent stabil agar pertukaran informasi dapat dijalankan dengan cepat tanpa ada jeda waktu yang mengganggu
                </p>
                <Link to='about' spy={true} smooth={true} offset={-128}>
                    <Button data-aos={'fade-up'}>Get In Touch</Button>
                </Link>
            </Text>
        </Wrapper>
    )
}

export default Home;

const Wrapper = styled.section`
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.125)),  url('./assets/images/home-img.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    padding-top: 5em;
`

const Text = styled.div`
    color: white;
    position: relative;
    padding: 2em;
    max-width: 1000px;
    margin: auto;

    text-align: center;

    h1 {
        text-transform: uppercase;
        font-family: 'MOONFARK', 'Rubik';
        font-weight: normal;
        font-size: 5em;
    }

    p {
        text-transform: capitalize;
        font-size: 1.25em;
        letter-spacing: 0.125em;
        line-height: 1.5em;
    }

    @media (max-width: 1000px) {
        h1 {
            font-size: 4em;
        }

        p {
            font-size: 1.125em;
        }
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 3em;
        }

        p {
            font-size: 1em;
        }
    }
`

const Button = styled.button`
    padding: 1em 2em;
    margin: 1em;
    background: black;
    color: white;
    border: none;
    border-radius: 0.625em;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;

    font-family: 'MOONFARK';

    &:hover {
        color:black;

        &::after {
            transform: skewX(-45deg) scale(1, 1);
            -webkit-transition: all 0.5s;
            transition: all 0.5s;
        }
    }

    &::after {
        content: "";
        background: white;
        position: absolute;
        z-index: -1;
        left: -20%;
        right: -20%;
        top: 0;
        bottom: 0;
        transform: skewX(-45deg) scale(0, 1);
        transition: all 0.5s;
    }
    
`