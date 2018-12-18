import Layout from '../components/MyLayout.js'
import Link from 'next/link'


const PostLink = ({post}) => (
    <Link
        href={{pathname: '/product', query: { id: post.id }}}
        as={`/p/${post.id}`}
      >
        <a  className ="button-style"> {post.title}</a>
      </Link>
    
)

function getProductRelated () {

    return[
        { id: 'Adidas-POD-S3.1',
        img:'https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/1/4/14-12-2018_adidas_pod-s3.1_coreblack_reflectivesilver_bd7737_gh_1.jpg', 
        title: 'Adidas POD-S3.1', 
        content: 'Core Black & Reflective Silver',
        price: 'HK$825',
        discriptions: 'Bringing back the best of 90s cushioning for the sneakerheads of today, adidas present their P.O.D. – Point of Deflection – system this season. Fusing elements from 3-Stripes heritage with sock-like mesh uppers, this pair of futuristic POD-S3.1 sneakers deliver stability and style in equal measure.',
        points: ['Knit Uppers','TPU Overlays','Nubuck Heel Pull Tab','3M Detailing','EVA Forefoot'],
        
      },
      { id: 'Adidas-Campus',
        img:'https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/1/5/15-06-2017_adidas_campus_greythree_chalkwhite_bz0085_sp_1.jpg', 
        title: 'Adidas Campus', 
        content: 'Grey Three & Chalk White',
        price: 'HK$669',
        discriptions: 'Updating an old-school court favourite with luxe materials, adidas Originals celebrate the Campus silhouette with pigskin nubuck uppers this season. Keeping things classic, these sneakers stay true to the original and its legendary style. To the outsole, streamlined rubber cupsoles update this archival style, while a reinforced toe cap and serrated leather three-stripes keep it firmly rooted in adidas heritage.',
        points: ['Pigskin Nubuck Uppers','Trefoil Branding','Serrated 3-Stripes','Reinforced Toe Cap','OrthoLite® Sockliner'],
        
      },
      { id: 'Nike-Air-Max-Plus-OG',
        img:'https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/1/2/12-12-2018_nike_airmaxplusog_blacktotalorangevoltagepurple_bq4629-002_ka_1.jpg', 
        title: 'Nike Air Max Plus OG', 
        content: 'Black, Orange & Purple',
        price: 'HK$1,309',
        discriptions: 'Tuning in to the TN as the street culture icon turns 20, the signature hexagonal branding is also back in all of its glory at the tongue. Keeping the ‘Tuned’ Air of the original, this next generation version gets a fresh makeover with a durable synthetic and textile upper, while the famed system is firmly embedded in the sole unit.',
        points: ['Textile Uppers','Synthetic Overlays','Fitcounter Heel','Rubber Outsole','boost™ Cushioning'],
        
      }, 
    ]
}

export default () => (
  <Layout>
    <div className="pure-g box">

        <div className="pure-g">
            <div className="pure-u-1-1 box">
                <div className="box" >
                    <div className="texbox" >
                        <h2 className="texboxPadding">
                            A sneaker shop for startup people who are making the world a better place
                        </h2>
                    </div>
                </div>     
            </div>
        </div>

        <div className="pure-u-1-1 pure-u-lg-3-4">
                      
            <div className="box" >
                <div className="box" >
                    <div >
                        <img  className="photo-img" src= 'http://www.cup.com.hk/wp-content/uploads/2017/08/rsz_shutterstock_276711206.jpg'  ></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="pure-u-1-1 pure-u-lg-1-4">
                      
            <div className="box" >
                <div className="box" >
                    <div className="boxBG ">
                    <h3 className="text-white">
                    Sneaker, reimagined. Enjoy your shoes like you never did before. We're disrupting the shoes industry, changing the way people order, use and play with shoes forever.

                    Powered by AI, blockchain, machine learning and SEO.
                    </h3>
                    </div>
                </div>
            </div>
        </div>

        <div className="pure-g">
            <div className="pure-u-1-1 box">
                <div className="box" >
                    <div className="texbox" >
                        <h3 className="texboxPadding">
                        Our smart algorithms pick the most contextually relevant sneaker ever possible
                        </h3>
                        <Link href="/products">
                            <a className="pure-button button-style">進入商店</a>
                        </Link>
                    </div>
                </div>     
            </div>
            <div className="pure-u-1-1 box">
                <div className="box" >
                    {getProductRelated().map((product,i) => (
            
                            <div key ={i} className="pure-u-1-1 pure-u-sm-1-2 pure-u-lg-1-3">
                                
                                <div className="box" >
                                
                            
                                    <div className="box" >
                                        <div >
                                            <img key = {product.img} className="photo-img" src= {product.img}  ></img>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="texBox">
                                                
                                            <PostLink key={product.id} post={product}>
                                            </PostLink>
                                            <h4 className="greyColor" key = {product.content}>
                                                {product.content}
                                            </h4>
                                            <h4  key = {product.price}>
                                                {product.price}
                                            </h4>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    ))}
                </div>
            </div>
        </div>

        <div className="pure-u-1-1 pure-u-lg-3-4">
                      
            <div className="box" >
                <div className="box" >
                    <div >
                        <img  className="photo-img" src= 'https://assets.thevalue.com/d39ba7d4ca34629fa30df396d9c9d0138b586a66/web/c2221b485cb26c919e12d4bf41b20cc3531853df.jpg?1533638821'  ></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="pure-u-1-1 pure-u-lg-1-4">
                      
            <div className="box" >
                <div className="box" >
                    <div className="boxBG ">
                    <h2 className="text-white">
                    Our story
                    </h2>
                    <h3 className="text-white">
                    It all started back in 1999, on a rainy September day.
                    We want to sell best shoes to our best customers. Its our preasure to serve you.
                    </h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="pure-g">
            <div className="pure-u-1-1 box">
                <div className="box" >
                    <div className="texbox" >
                        <hr></hr>
                        <h1 className="texboxPadding">
                            Philosophy
                        </h1>
                        <h3 className="texbox">
                        We believe that having a good pair of sneaker in the morning is the most important thing in the world. We're committed to working hard and applying the advanced modern-day technology to bring you the best sneaker there is.
                        </h3>
                        <h1 className="texboxPadding">
                            
                        </h1>
                    </div>
                </div>     
            </div>
        </div>
    </div>

    <style jsx >{`
       
       .texboxPadding{
           padding:2em 0;
       }
       .photo-img{
          overflow: hidden;
          object-fit: cover;
          width: 100%;
          min-height: 250px;
  
          max-height: 500px;
          max-width: 800px;
  
          display: block;
          margin-left: auto;
          margin-right: auto;
          
      }
      .box {
          box-sizing: border-box;
          width: 95%;
          margin-left: auto;
          margin-right: auto;
      }
      .boxBG {
        box-sizing: border-box;
        width: 100%;
        height:100%;
        min-height:200px;
        max-height:600px;
        min-width:300px;
        margin-left: auto;
        margin-right: auto;
        background: black;
        display: block;
        float: right;
        opacity: 0.7;


        
    }
    .text-white{
        padding-left: 1em;
        padding-right: 0.5em;
        color: white;
        opacity: 1;
    }
      .texBox {
          display: block;
          margin-left: auto;
          margin-right: auto;
          max-width: 800px;
          padding-bottom:1em;
          padding-top:1em;
      }
      .button-style{
            background-color: #0404B4; 
            color: white;
            text-decoration: none;
          cursor: pointer;
          float: right;
      }
      h4{
          font-weight:normal;
      }
      .greyColor{
        color: grey;
      }
    `}</style>
  </Layout>
)