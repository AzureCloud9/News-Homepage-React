import mainImage from './assets/images/image-web-3-mobile.jpg'

export default function MainSection () {
    return (
        <div className="mainSection">
            <img className="mainImage" src={mainImage} alt=""/>
            <div className="mainHeader">
                <h1>The Bright <br/>Future of Web <br/> 3.0?</h1>
                <p>We dive into the next evolution of the web that <br/> claims to put the power of the platforms back <br/> into the hands of the people. But is it really <br/> fulfilling its promise?</p>
                <div className='btn1'>READ MORE</div>
            </div>
            
        </div>
    )
}