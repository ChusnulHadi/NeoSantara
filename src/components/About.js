import styled from 'styled-components';
const About = () => {
    return (
        <Wrapper>
            <h1>kami berfokus pada anda!</h1>
            <p>
                bagi kami, pelanggan adalah prioritas utama
            </p>
            <p>
                kami menyediakan pelayanan yang terbaik dan relevan untuk meningkatkan kebutuhan digital anda
            </p>
            <p>
                terus berkomitmen untuk memberikan anda pengalaman terbaik dalam berjelajah internet menggunakan layanan kami
            </p>
            <p>
                pelayanan dan pengalaman kami untuk memastikan kenyamanan anda
            </p>
            <Title data-aos={'fade-up'}>
                <h1>Tentang Kami</h1>
            </Title>
            <CompanyProfile data-aos={'fade-up'}>
                <h1>Company Profile</h1>
                <div data-aos={'fade-up'}>
                    <Left>
                        <img src='./assets/images/company-img.jpg' alt='company profiles' />
                    </Left>
                    <Right>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                        </p>
                    </Right>
                </div>
            </CompanyProfile>
            <Visi>
                <h1>Visi dan Misi</h1>
                <div>
                    <Left>
                        <h2>Visi</h2>
                        <p>
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;
                        </p>
                        <h2>Misi</h2>
                        <p>
                            and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish
                        </p>
                    </Left>
                    <Right>
                        <img src='./assets/images/visi-img.jpg' alt='visi & misi' />
                    </Right>
                </div>
            </Visi>
        </Wrapper>
    );
}

export default About;

const Wrapper = styled.section`
    text-align: center;
    font-size: 1.25em;
    text-transform: capitalize;
    h1 {
        font-family: 'MOONFARK';
        font-weight: normal;
    }

    p {
        margin: 1em auto;
        max-width: 1000px;
        letter-spacing: 0.125em;
    }

`

const Title = styled.div`
    width: 100vw;
    height:300px;

    margin-top: 5em;
    padding-top:5em;

    text-align: center;
    color:white;
    
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./assets/images/about-img.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    h1 {

    }
`

const CompanyProfile = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 2em;

    div {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 600px) {
        text-align: center;
        div {
            flex-direction: column;
            padding: 0;
        }
    }
`;

const Left = styled.div`
    display: flex;
    flex-basis: 50%;
    flex-direction: column !important;
    width: 50%;
    padding: 2em;
    padding-left: 0;

    p {
        font-size: 1em;
        text-align: justify;
        letter-spacing: 0;
    }

    h2 {
        margin: 0;
    }

    img {
        width: 100%;
        border-radius: 0.625em;
    }

    @media (max-width: 600px) {
        width: 100%;
    }

`

const Right = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column !important;
    padding: 2em;
    padding-right: 0;

    p {

        font-size: 1em;
        letter-spacing: 0;
        text-align: justify;
    }

    h2 {
        margin: 0;
    }

    img {
        width: 100%;
        border-radius: 0.625em;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`

const Visi = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    padding: 2em;

    div {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 600px) {
        text-align: center;
        div {
            padding : 0;
            flex-direction: column;
        }
    }
`;