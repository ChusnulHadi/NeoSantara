import styled from 'styled-components';

const Services = () => {
    return (
        <Wrapper id='services'>
            <Title>
                <h1>Produk Kami</h1>
            </Title>
            <Products>
                <Card className='dedicated'>
                    <div className='card-info'>
                        <p className='title'>Dedicated Internet</p>
                        <p className='subtitle'>Koneksi Internet 1:1</p>
                    </div>
                    <div className='card-bio'>
                        <p>Kami menyediakan internet dedicated 1:1 untuk memenuhi kebutuhan internet bisnis agar dapat berjalan dengan baik</p>
                    </div>
                </Card>
                <Card className='ip'>
                    <div className='card-info'>
                        <p className='title'>Ip Public</p>
                        <p className='subtitle'>Akses dari manapun</p>
                    </div>
                    <div className='card-bio'>
                        <p>Dukungan ip public yang memungkinkan anda mengakses perangkat anda dari mana saja</p>
                    </div>
                </Card>
                <Card className='web-server'>
                    <div className='card-info'>
                        <p className='title'>Cloud Web Server</p>
                        <p className='subtitle'>Web Server virtual untuk anda</p>
                    </div>
                    <div className='card-bio'>
                        <p>memungkinkan anda untuk memiliki web server yang berjalan secara clouds</p>
                    </div>
                </Card>
                <Card className='it-support'>
                    <div className='card-info'>
                        <p className='title'>IT Supports</p>
                        <p className='subtitle'>menyediakan kebutuhan anda dalam keperluan IT</p>
                    </div>
                    <div className='card-bio'>
                        <p>kami melakukan pengadaan peralatan komputer untuk kebutuhan kantor anda</p>
                    </div>
                </Card>
                <Card className='software-dev'>
                    <div className='card-info'>
                        <p className='title'>Software development</p>
                        <p className='subtitle'>web kustom sesuai kebutuhan anda</p>
                    </div>
                    <div className='card-bio'>
                        <p>kami melayani jasa pembuatan web untuk meningkatkan produktivitas bisnis anda</p>
                    </div>
                </Card>
            </Products>
        </Wrapper>
    );
}

export default Services;

const Wrapper = styled.section`
    width: 100vw;
`

const Title = styled.div`
    width: 100vw;
    height: 300px;
    background: url('./assets/images/products-img.webp');
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 7.5em;


    h1 {
        text-align: center;
        margin: auto;
        padding: 1em;

        font-family: 'MOONFARK';
        background: #38383860;
    }

`

const Products = styled.div`
    width: calc(100%);
    max-width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    padding: 2em;
    background-color: #ebebeb;
    border-radius: 0.625em;

    text-transform: capitalize;

    .dedicated {
        background: linear-gradient(rgba(200,200,200,0.125), rgba(200,200,200,0.125)), url('./assets/images/dedicated-img.webp') !important;
        background-position-x: 250px !important;
    }

    .ip {
        background: linear-gradient(rgba(200,200,200,0.125), rgba(200,200,200,0.125)), url('./assets/images/ip-public-img.webp') !important;
        background-position-x: 250px !important;
    }
    .web-server {
        background: linear-gradient(rgba(200,200,200,0.125), rgba(200,200,200,0.125)), url('./assets/images/cloud-server.webp') !important;
        background-position-x: -200px !important;
    }
    .it-support {
        background: linear-gradient(rgba(200,200,200,0.125), rgba(200,200,200,0.125)), url('./assets/images/it-support-img.webp') !important;
    }
    .software-dev {
        background: linear-gradient(rgba(200,200,200,0.125), rgba(200,200,200,0.3)), url('./assets/images/software-dev.webp') !important;
        background-position-x: 350px !important;
    }
`
const Card = styled.div`
    width: 12.5em;
    height: 20em;
    margin: 2em;
    position: relative;
    outline: .5em solid #383838;
    background: #ff930f;
    background: -webkit-gradient(linear, left bottom, left top, from(#ff930f), to(#fffa5c));
    background: linear-gradient(to top, #ff930f 0%, #fffa5c 100%);

    background-size: contain;
    background-position: center;

    border-radius: 0.625em;
    overflow: hidden;

    box-shadow: 20px 20px 10px #3838384f;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 4;
        background-color: rgba(80, 64, 44, 0);
        -webkit-transition: background-color 1s;
        transition: background-color 1s;
    }

    .card-info {
        bottom: 0;
        position: absolute;
        width: 100%;
        padding: 1.5em;
        text-align: center;
        -webkit-transition: -webkit-transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860);
        transition: -webkit-transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860);
        transition: transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860);
        transition: transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860), -webkit-transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860);

        .title {
            font-size: 1.3em;
            font-weight: bold;

            &::after {
                content: "";
                display: block;
                width: 50%;
                height: 2px;
                margin: 0 auto 4%;
                background-color: #000;
            }
        }

        .subtitle {
            font-weight: 400;
            line-height: 1em;  
        }
    }

    .card-bio {
        padding: 0 0.5em;
        text-align: center;
        -webkit-transform: translate(100%,40%);
            -ms-transform: translate(100%,40%);
                transform: translate(100%,40%);
        -webkit-transition: -webkit-transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860);
        transition: -webkit-transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860);
        transition: transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860);
        transition: transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860), -webkit-transform 1s cubic-bezier(0.785, 0.135, 0.150, 0.860);
        p {
            font-size: 16px;
            font-weight: 600;
            line-height: 1.5em;
        }
    }

    &:hover {
        &::before {
            background-color: rgba(200, 200, 200, 0.5);
        }
        .card-info {
            -webkit-transform: translateX(-100%);
                -ms-transform: translateX(-100%);
                    transform: translateX(-100%);
        }

        .card-bio {
            -webkit-transform: translate(0,40%);
                -ms-transform: translate(0,40%);
                    transform: translate(0,40%);
            opacity: 1;
        }
    }
`