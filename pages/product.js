import Layout from '../components/MyLayout.js'
import React, { Component } from 'react'
import Link from 'next/link'

function getProduct () {
    return[{ id: 'Adidas-Ultra-Boost-W',
            img:'https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/0/5/05-06-2018_adidas_ultraboostw_white_bb6308_mo_1.jpg', 
            title: 'Adidas Ultra Boost W', 
            content: 'white',
            price: 'HK$1,545',
            discriptions: 'Dressed in white, this women’s iteration of the Ultra Boost from adidas fuse comfort and high-quality performance technology for a best-ever-run-feeling. Crafted from primeknit textile uppers, this pair are designed to adapt to the changing shape of your foot as you run, sat atop midsole cushioning and a flexible outsole which delivered a smooth ride with each wear.',
            points: ['Primeknit Uppers','Midfoot Cage','Fitcounter Heel','boost™ Cushioning','boost™ Cushioning'],
            
          },
          { id: 'Adidas-Ultra-Boost-4.0',
            img:'https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/1/2/12-09-2018_adidas_ultraboost40_greytwocoreblack_bb6167_th_1.jpg', 
            title: 'Adidas Ultra Boost 4.0', 
            content: 'Grey Two & Core Black',
            price: 'HK$1,445',
            discriptions: 'The latest in the Ultra Boost evolution, adidas release the fourth version of their popular runner. Here, a refined Primeknit upper sits atop of boost™ cushioned soles, delivering an energised run with every stride. Pushing you to the finish line, the TORSION® SYSTEM, Fitcounter moulded heel and engineered knit work seamlessly to keep you locked down with targeted support.',
            points: ['Primeknit Uppers','Midfoot Cage','Fitcounter Heel','boost™ Cushioning','boost™ Cushioning'],
            
          },
          { id: 'Adidas-Stan-Smith',
            img:'https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/0/6/06-11-2018_adidas_stansmith_runningwhitefairway_m20324_gh_1.jpg', 
            title: 'Adidas Stan Smith', 
            content: 'Running White & Fairway',
            price: 'HK$649',
            discriptions: 'The latest in the Ultra Boost evolution, adidas release the fourth version of their popular runner. Here, a refined Primeknit upper sits atop of boost™ cushioned soles, delivering an energised run with every stride. Pushing you to the finish line, the TORSION® SYSTEM, Fitcounter moulded heel and engineered knit work seamlessly to keep you locked down with targeted support.',
            points: ['Leather Uppers','Synthetic Leather Lining','Stan Smith Print','Perforated 3-Stripes','Trefoil Branding'],
            
          },
          { id: 'Nike-Air-Max-1',
            img:'https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/1/7/17-12-2018_nikeairmax1_wheatgoldrustpinkbrown_cd7861-700_gh_1.jpg', 
            title: 'Nike Air Max 1', 
            content: 'Wheat Gold, Rust Pink & Brown',
            price: 'HK$1,019',
            discriptions: 'With the spotlight shining on the 70s this season, Nike dress the icon that started it all with distinct colourings from that golden era. Boasting a combination of textiles on the uppers, the primarily beige base of this Air Max 1 sees rose chenille on the Swooshes and tongue, with orange corduroy overlays and brown suedes throughout. The first shoe to ever feature visible air pockets in the midsole, underfoot sports the cushioning that made its first waves back in 1987, while the original outsole has been swapped out for a crepe finish.',
            points: ['Leather Uppers','Corduroy Overlays','Chenille Swoosh Branding','Max Air Cushioning','Foam Midsole'],
            
          },
          { id: 'Adidas-x-White-Mountaineering-Terrex-Two-GTX',
            img:'https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/1/1/11-12-2018_adidasxwhitemountaineering_terrextwogtx_black_db3006_mo_1.jpg', 
            title: 'Adidas x White Mountaineering Terrex Two GTX', 
            content: 'Black',
            price: 'HK$1,639',
            discriptions: 'Destined to defy the cold both this winter and next, adidas and White Mountaineering present their collaborative Terrex Two sneaker. Lined with a trusty GORE-TEX® membrane for waterproof and breathable performance, this outdoor-ready pair are designed to take on all terrains with ease, allowing you to stride out confidently onto uneven ground. Fitted with one-touch bungee laces, these shoes are styled with both form and function in mind and the whole monochromatic look is signed off with printed dual branding throughout.',
            points: ['Mesh Uppers','Bungee Lacing','Heel Pull Tab','GORE-TEX® Lining','EVA Midsole'],
            
          },
          { id: 'Air-Jordan-3-Retro',
            img:'https://media.endclothing.com/media/f_auto,q_auto,w_760,h_760/prodmedia/media/catalog/product/1/3/13-12-2018_nike_airjordan3retro_whitedarkmochachrome_mo_136064-122_flat_1.jpg', 
            title: 'Air Jordan 3 Retro', 
            content: 'White, Dark Mocha & Chrome',
            price: 'HK$1,999',
            discriptions: 'A Nike Jordan model with a caffeine kick, power through the game with an adrenaline rush from the Air Jordan 3 ‘Mocha’. The perfect blend of white tumbled leathers and mocha overlays, this hardwood great brings back the design cues of the 2001 original. Featuring an elephant print across the heel and toe, the AJ3 champions the same rich hue across its sole and the coveted Jumpman logo. Hitting Air with Nike’s revolutionary technology underfoot, the sneaker’s sole gives way to a legacy in supreme hardwood comfort.',
            points: ['Tumbled Leather Uppers','Elephant Print Overlays','Jumpman Branding','Air Cushioning','Rubber Outsole'],
            
          },
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
function getShippingInfo(){
    return[
        {shipping1:['HK$2.95 via DPD 2-3 Day Standard Service',
            'Order within 10 hours and 17 minutes to receive your order between Thu 20 Dec and Fri 21 Dec'],
        shipping2:['FREE DPD 2-3 Day Standard Service on orders over HK$150.00',
            'Order within 10 hours and 17 minutes to receive your order between Thu 20 Dec and Fri 21 Dec']
    }]
}


function findProduct(id){
    for(let i =0 ;i<getProduct().length;i++){
        if (getProduct()[i].id === id)
            return getProduct()[i];
    }

    return null;
}
const AddToCart = ({post}) => (
    <Link
        href={{pathname: '/post', query: { id: post.id }}}
        as={`/b/${post.id}`}
      >
        <a  className ="pure-button button-style">加入購物車</a>
      </Link>
    
)

const PostLink = ({post}) => (
    <Link
        href={{pathname: '/product', query: { id: post.id }}}
        as={`/p/${post.id}`}
      >
        <a  className ="button-style-link"> {post.title}</a>
      </Link>
    
)

export default class extends Component {
    static getInitialProps ({ query: { id } }) {
      let content = findProduct(id);
      return { postId: id ,content:content}
    }
  
    render () {
      return (
          <div>
              <Layout title = {this.props.content.title}>
              <div className="pure-g box">
                  <div className="pure-u-1-1 pure-u-lg-1-2">
                      
                      <div className="box" >
                          <div className="box" >
                              <div >
                                  <img  className="photo-img" src= {this.props.content.img}  ></img>
                              </div>
                          </div>
                      </div>
                  </div>
                
                  <div className="pure-u-1-1 pure-u-lg-1-2">
                        <div className="box">
                            <div className="texBox">
                                <h1 >
                                    {this.props.content.title}
                                </h1>
                                <h2 >
                                    {this.props.content.content}
                                </h2>
                                {
                                    this.props.content.points.map((point,i) => (
                                        <li key ={i}>
                                            {point}
                                        </li>
                                    ))
                                }

                                <h3 >
                                    Shipping:
                                </h3>
                                {
                                    getShippingInfo().map((point,i) => (
                                        <div key ={i}>
                                            <ul >
                                                {point.shipping1}
                                            </ul>
                                            <ul >
                                                {point.shipping2}
                                            </ul>
                                        </div>
                                    ))
                                }

                                <h3 >
                                    Price: {this.props.content.price }
                                </h3>

                                <AddToCart key={this.props.content.id} post={this.props.content}>
                                </AddToCart>

                                
                            </div>
                        </div>
                  </div>

                  <div className="pure-g">
                    <div className="pure-u-1-1 ">
                        <div className="box" >
                            <div className="texbox" >
                                <h3 >
                                    Descriptions:
                                </h3>
                                <h4 >
                                    {this.props.content.discriptions}
                                </h4>
                            </div>
                        </div>     
                    </div>

                    <div className="pure-u-1-1 ">
                        <div className="box" >
                            <div className="texbox" >
                                <hr ></hr>
                                <h2 >
                                    猜你喜歡：
                                </h2>
                            </div>
                            
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
                  
              </div>
              <style jsx global>{`
       
       .photo-img{
          overflow: hidden;
          object-fit: cover;
          width: 100%;
          min-height: 250px;
  
          max-height: 500px;
          max-width: 600px;
  
          display: block;
          margin-left: auto;
          margin-right: auto;
          
      }
      .text{
          margin-top:30px;
          margin-left:100px;
      }
      .box {
          box-sizing: border-box;
          width: 95%;
          margin-left: auto;
          margin-right: auto;
      }
      .texBox {
          display: block;
          margin-left: auto;
          margin-right: auto;
          max-width: 800px;
          padding-bottom:1em;
      }
      h4{
          font-weight:normal;
      }
      .button-style{
        background-color: #0404B4; 
        color: white;
        text-decoration: none;
      }
      .button-style-link{
        color: black;
        text-decoration: underline;
        cursor: pointer;
        font-weight:bold;
    }
    `}</style>
          </Layout>
          </div>
      )
    }
  }
  