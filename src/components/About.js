import styled from 'styled-components';
import 'aos';
const About = () => {
    return (
        <Wrapper id='about'>
            <h1 data-aos={'fade-up'}>kami berfokus pada anda!</h1>
            <p data-aos={'fade-up'}>
                bagi kami, pelanggan adalah prioritas utama
            </p>
            <p data-aos={'fade-up'}>
                kami menyediakan pelayanan yang terbaik dan relevan untuk meningkatkan kebutuhan digital anda
            </p>
            <p data-aos={'fade-up'}>
                terus berkomitmen untuk memberikan anda pengalaman terbaik dalam berjelajah internet menggunakan layanan kami
            </p>
            <p data-aos={'fade-up'}>
                pelayanan dan pengalaman kami untuk memastikan kenyamanan anda
            </p>
            <Title data-aos={'fade-up'}>
                <h1>Tentang Kami</h1>
            </Title>
            <CompanyProfile>
                <h1 data-aos={'fade-up'}>Company Profile</h1>
                <div>
                    <Left data-aos={'fade-up'}>
                        <img src='./assets/images/company-img.webp' alt='company profiles' />
                    </Left>
                    <Right data-aos={'fade-up'}>
                        <p>
                            <important>NEO SANTARA SOLUSI</important> adalah perusahan yang bergerak di bidang penyedia layanan internet dan mengatasi masalah IT di indonesia. 
                            <br />
                            <important>NEO SANTARA SOLUSI</important> menyediakan produk dan layanan untuk kebutuhan IT meliputi: penyediaan layanan internet, computer support, pengembangan software, konfigurasi jaringan 
                        </p>
                        <p>
                            kami berdedikasi untuk menyediakan layanan terbaik untuk memenuhi kebutuhan digital anda. kami akan terus memberikan inovasi-inovasi baru untuk memastikan kualitas teknologi yang anda gunakan bukan hanya dapat dinikmati di kota besar di indonesia
                        </p>
                    </Right>
                </div>
            </CompanyProfile>
            <Visi>
                <h1 data-aos={'fade-up'}>Visi dan Misi</h1>
                <div>
                    <Left data-aos={'fade-up'}>
                        <h2>Visi</h2>
                        <p>
                            visi kami adalah merealisasikan sebuah jaringan internet untuk mendukung perkembangan dari teknologi digital di seluruh pelosok negeri
                        </p>
                        <h2>Misi</h2>
                        <p>
                            misi kita adalah menyediakan akses digital teknologi untuk masyarakat luas.
                            <br /><br />
                            membangun hubungan baik dengan komunitas lokal untuk meningkatkan potensi dari komunitas individu
                            <br /><br />
                            menyediakan penawaran dan pelayanan untuk bisnis anda
                            <br /><br />
                            mendukung pemerintah untuk mengembangkan teknologi digital
                        </p>
                    </Left>
                    <Right data-aos={'fade-up'}>
                        <img src='./assets/images/visi-img.webp' alt='visi & misi' />
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
        width: 100%;
        letter-spacing: 0.125em;
    }

    @media (max-width: 600px) {
        p {
            text-align: justify;
            padding: 0 2em;
        }
    }

`

const Title = styled.div`
    width: 100vw;
    height:300px;

    margin-top: 5em;
    padding-top:5em;

    text-align: center;
    color:white;
    
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./assets/images/about-img.webp');
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
        p {
            padding: 0;
        }
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
        p {
            padding:0;
        }
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