import styled from 'styled-components';

const Card = (props) => {
    const title = props.title;
    const body = props.body;
    const buttonText = props.buttonText;
    const className = props.className;
    return (
        <>
            <Cardboard className={className}>
                <div className='card-details'>
                    <p className='title'>{title}</p>
                    <p className='body'>{body}</p>
                </div>
                <button className='button' href="mailto:external@neosantarasolusi.net">
                    {buttonText}
                </button>
            </Cardboard>
            {/* <div className='popup'>

        </div> */}
        </>
    )
}

const Carrer = () => {
    return (
        <Wrapper id='carreer'>
            <Text>
                <h3>Menjadi bagian dari kami</h3>
                <p>kami memberikan peluang ke generasi bangsa untuk dapat bergabung bersama kami mengembangkan pelayanan yang dapat bermanfaat untuk masyarakat</p>
            </Text>
            <Content>
                <Card className='marketing' title='Marketing' body='Fresh graduate yang ingin berkarir di bidang marketing' buttonText='Make Call' image='./assets/images/visi-img.webp' />
            </Content>
        </Wrapper>
    );
}

export default Carrer;

const Wrapper = styled.section`
    width: 100vw;
    height: 500px;
    display: flex;
    flex-direction: row;
    padding: 3em 0;

    background: linear-gradient(to left, #0000000f, #0000000f), url('./assets/images/carrer-img.webp');
    background-size: cover;

    @media screen and (max-width:600px) {
        flex-direction: column;
        height: auto;
    }
    
    `

const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding : 1em 3em;
    font-size: 1.5em;
    color: #ffffff;
    text-transform: capitalize;

    @media screen and (max-width: 600px) {
        width: 100%;
        height : auto;
    }
`

const Content = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: safe;
    /* margin: auto; */
    height: 100%;
    /* padding: 0em 3em; */
    
    width: 50%;

    .marketing {
        background: linear-gradient(#00000040, #00000040), url('./assets/images/marketing-img.webp') no-repeat center !important;
        background-size: cover !important;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        justify-content: center;
    }
`

const Cardboard = styled.div`
        width: 15em;
        height: 25em;
        border-radius: 20px;
        position: relative;
        padding: 1.8rem;
        border: 2px solid #c3c6ce;
        transition: 0.5s ease-out;
        overflow: visible;


        .card-details {
            color: black;
            height: 100%;
            gap: .5em;
            display: grid;
            place-content: center;

            .body {
                color: #ffffff;
            }

            .title {
                font-size: 1.5em;
                font-weight: bold;
            }
        }

        .button {
            transform: translate(-50%, 125%);
            width: 60%;
            border-radius: 1rem;
            border: none;
            background-color: #008bf8;
            color: #fff;
            font-size: 0.75rem;
            padding: .5rem 1rem;
            position: absolute;
            left: 50%;
            bottom: 0;
            opacity: 0;
            transition: 0.3s ease-out;
        }

        &:hover {
            border-color: #008bf8;
            box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
            
            .button {
                transform: translate(-50%, 50%);
                opacity: 1;
                cursor: pointer;
            }
        }



        /* .popup {
            display: flex;
            position: fixed;
            width: 80vw;
            height: 80vh
        } */
    `

