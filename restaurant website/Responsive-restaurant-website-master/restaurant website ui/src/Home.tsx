import './css/Home.css'
import rest_logo from './images/rest_logo.png'
import ButtonPanel from './ButtonPanel'

function Home(){
    

    return <>
        <div id="header">
            <div id="contact">
                phone number: +1 (647) 205-7439 <br />
                email: DankuEthan@franks.wings.ca 
            </div>
            <div id="restaurant_name">
                Frank's Food & Wings
            </div>
            <div id="working_hours">
                Working Hours:
                Monday - Sunday
                9:00am - 8:00pm
            </div>
        </div>
        <ButtonPanel names={["About Us", "Products"]}/>
        <div id="welcome_statement">
            <p> Welcome to the world's best restaurant </p>
            <img src={rest_logo} alt="restaurant logo" />
        </div>
        <div id="top_products">
            <p><u> TOP PRODUCTS </u></p>
        </div>
    </>
}

export default Home