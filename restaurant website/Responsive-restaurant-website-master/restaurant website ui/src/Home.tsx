import './css/Home.css'
import PagePanel from './PagePanel'
import DisplayProducts from './DisplayProducts'
import SocialMedia from './SocialMedia'


function Home(){
    const topProdList = [ { name:"tiramisu", src: "images/tiramisu.jpg", price:20}, 
        {name: "potato salad", src : "images/potato salad.jpg", price:15}, 
        { name:"donut", src: "images/sprinkled donut.jpg", price:20} ]

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
        <PagePanel names={["About Us", "Products"]}/>
        <p id="welcome_statement">
            Welcome to the world's best restaurant <img src={"images/rest_logo.png"} alt="restaurant logo" />
            <br /> <br /> <br />
        </p> 
        <div id="top_products">
            <p><u> TOP PRODUCTS </u></p>
            <DisplayProducts products={topProdList}></DisplayProducts>
        </div>
        <SocialMedia />
    </>
}

export default Home