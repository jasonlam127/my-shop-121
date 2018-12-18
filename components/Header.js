import Link from 'next/link'
import Head from 'next/head'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css" />

        </Head>

        <div className="nav">
            <div className="nav-header">
                <Link href="/">
                    <a className="nav-title">Sneaker Lover</a>
                </Link>
                
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
            <input type="checkbox" id="nav-check" />
            <div className="nav-links">
                <Link href="/products">
                    <a style={linkStyle}>人氣商品</a>
                </Link>
                <Link href="/blog">
                    <a style={linkStyle}>潮流BLOG</a>
                </Link>
            </div>
        </div>

        

        <style jsx>{`
            * {
                box-sizing: border-box;
            }
            
            body {
                margin: 0px;
                font-family: 'segoe ui';
            }
            
            .nav {
                height: 50px;
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
                padding: 12px 10px 12px 10px;
                text-decoration: none;
                color: #efefef;
            }
            
            .nav > .nav-links > a:hover {
                background-color: rgba(0, 0, 0, 0.3);
            }
            
            .nav > #nav-check {
                display: none;
            }
            
            @media (max-width:600px) {
                .nav > .nav-btn {
                display: inline-block;
                position: absolute;
                right: 0px;
                top: 0px;
                }
                .nav > .nav-btn > label {
                display: inline-block;
                width: 50px;
                height: 50px;
                padding: 13px;
                }
                .nav > .nav-btn > label:hover {
                background-color: rgba(0, 0, 0, 0.3);
                }
                .nav > .nav-btn > label > span {
                display: block;
                width: 25px;
                height: 10px;
                border-top: 2px solid #eee;
                }
                .nav > .nav-links {
                position: absolute;
                display: block;
                width: 100%;
                background-color: #333;
                height: 0px;
                transition: all 0.3s ease-in;
                overflow-y: hidden;
                top: 50px;
                left: 0px;
                }
                .nav > .nav-links > a {
                display: block;
                width: 100%;
                }
                .nav > #nav-check:not(:checked) + .nav-links {
                height: 0px;
                }
                .nav > #nav-check:checked + .nav-links {
                height: calc(100vh - 50px);
                overflow-y: auto;
                }
            }
        `}</style>
    </div>
)

export default Header