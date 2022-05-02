import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <Title>
                <h1>neo santara solusi</h1>
            </Title>
            <Links>
                <button className='cta' href="mailto:external@neosantarasolusi.net">
                    <span className='underline-animation'>Email</span>
                </button>
            </Links>
            <Call>
                <button href="tel:+628113300901">
                    +62 811 3300 901
                </button>
            </Call>
            <Credits>
                <p>&trade; Neo Santara Solusi est. 2021</p>
            </Credits>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.footer`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    
    background-color: #ebebeb;

    border-top: 3px solid black;
`

const Title = styled.div`
width: 100%;
text-transform: uppercase;
font-family: 'MOONFARK';
`
const Links = styled.div`
width: 100%;

button {
    background: none;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.125em;
    transition: all 0.3s;

    margin: 0..5em;

    &:hover {
        cursor: pointer;
        font-weight: bold;

    }
}
`
const Call = styled.div`
width: 100%;
button {
    background: none;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.125em;
    transition: 0.3s;

    margin: 0.5em;

    &:hover {
        cursor: pointer;
        font-weight: bold;
        transition: 0.3s;
    }
}
`
const Credits = styled.div`
width: 100%;
`