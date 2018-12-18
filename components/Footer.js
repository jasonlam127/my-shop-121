import Link from 'next/link'



const Footer = () => (
    <div>
        <div className="nav">
            <div className="nav-header">
                <Link href="/">
                    <a className="nav-title">Sneaker Lover</a>
                </Link>
                </div>
            <div className="nav-links">
                <Link href="/products">
                    <a >Products</a>
                </Link>
                <Link href="/blog">
                    <a >Blog</a>
                </Link>
            </div>

            <div> </div>
            <span className='container'></span>
            <span className='container'>
                <a href="https://facebook.com"><img src='https://prismic-nextjs-sample.cdn.prismic.io/new-demo%2F3671bfbe-1e95-4e55-8737-d2686675e6e2_facebook-icon.svg' /></a>
            </span>
            <span className='container'>
                <a href="https://twitter.com"><img src='https://prismic-nextjs-sample.cdn.prismic.io/new-demo%2F3d1071ef-2097-4b1b-864f-0622f22eb2a7_twitter-icon.svg' /></a>
            </span>
            <span className='container'>
                <a href="https://instagram.com"><img src='https://prismic-nextjs-sample.cdn.prismic.io/new-demo%2F63696393-0ecc-4cfa-9804-759123883179_instagram-icon.svg' /></a>
            </span>
        </div>

        

        <style jsx>{`
            * {
                box-sizing: border-box;
            }
            
            .container{
                display: inline-block;
                padding: 5px;
            }
            body {
                margin: 0px;
                font-family: 'segoe ui';
            }
            
            .nav {
                height: 100px;
                width: 100%;
                background-color: #0404B4;
                position: relative;
            }
            
            .nav > .nav-header {
                display: inline;
            }
            
            .nav-title {
                display: inline-block;
                font-size: 22px;
                color: #fff;
                text-decoration: none;
                padding: 12px 10px 12px 10px;
                color: #efefef;
            }

            .nav-title:hover {
                background-color: rgba(0, 0, 0, 0.3);
            }
            
            .nav > .nav-btn {
                display: none;
            }
            
            .nav > .nav-links {
                display: inline;
                float: right;
                font-size: 18px;
            }
            
            .nav > .nav-links > a {
                display: inline-block;
                padding: 14px 10px 14px 10px;
                text-decoration: none;
                color: #efefef;
            }
            
            .nav > .nav-links > a:hover {
                background-color: rgba(0, 0, 0, 0.3);
            }
            
            .nav > #nav-check {
                display: none;
            }
            
        `}</style>
    </div>
)
export default Footer