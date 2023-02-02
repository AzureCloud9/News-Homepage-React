import img1 from './assets/images/image-retro-pcs.jpg'
import img2 from './assets/images/image-top-laptops.jpg'
import img3 from './assets/images/image-gaming-growth.jpg'


export default function BlogSection () {
    return (
        <div className="blogSection">
            <div className="blogBox">
                <div className="img">
                    <img className='imgBlog' src={img1} alt=""/>
                </div>
                <div className='blogInfo'>
                    <h1>01</h1>
                    <h2>Reviving Retro PCs</h2>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>

            <div className="blogBox">
                <div className="img">
                    <img className='imgBlog' src={img2} alt=""/>
                </div>
                <div className='blogInfo'>
                    <h1>01</h1>
                    <h2>Reviving Retro PCs</h2>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>

            <div className="blogBox">
                <div className="img">
                    <img className='imgBlog' src={img3} alt=""/>
                </div>
                <div className='blogInfo'>
                    <h1>01</h1>
                    <h2>Reviving Retro PCs</h2>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
        </div>
    )
}