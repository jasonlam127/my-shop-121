import Layout from '../components/MyLayout.js'
import {withRouter} from 'next/router'
import Link from 'next/link'

function getPosts () {
    return[{ id: '2018-famous-sneaker',
            img:'https://static.highsnobiety.com/wp-content/uploads/2018/01/16122913/Sneaker-Main-480x320.jpg', 
            title: '2018春夏波鞋特集：25個你要知的人氣波鞋牌子都在這！', 
            content: '修長簡單設計的波鞋款式已經不再是2018春夏的主打潮流，相反地設計較繁複而且帶點笨拙的Dad Sneakers就順利跑出成為熱門款式，說到最具人氣的爸爸運動鞋波鞋牌子，就一定要數Balenciaga與Adidas，Kendall Jenner與Bella Hadid早於上年年尾就穿上YEEZY BOOST 700 Wave Runner及Balenciaga的Triple S示人，還有不少時裝達人或KOL都紛紛投向Dad Sneakers的懷抱，所以如果你現在要買新波鞋，Dad Sneakers絕對是首選。 …'
          },
          { id: 'Nike-Air-Max-270',
            img:'https://pandulaju.com.my/converse-perkenal-kasut-mesra-motosikal-masih-kekalkan-gaya-klasik-chuck-taylor/converse-x-neighborhood-chuck-taylor-5/', 
            title: 'Nike Air Max 270 超級強勢登場 秒殺一切其他的存在', 
            content: 'Air Max 固然是Nike 歷久常新的鞋款，每年的3月26日更被Nike官方定為Air Max Day。本年度，Nike亦將於3月新推Nike Air Max 270鞋款，這推革命鞋款的設計充滿未來感，設計亦與Nike Air Max 93 相似，機能性亦較一般Air Max重，相信是未來的舒適之選。  …'
          },
          { id: 'Nike-Adidas',
          img:'https://hafizrahim.com/wp-content/uploads/2016/02/Puma-x-fall-winter-sneakers.jpg', 
          title: '潮鞋來襲 Nike Adidas再鬥法 2018年18對波鞋預告', 
          content: 'Nike 的聯乘系列一向大膽兼富玩味，這次的Kendrick Lamar與Nike的Crossover更加入粗口元素。Kendrick Lamar本為美國本土rapper一向大愛Nike旗下的Cortez系列，這次的聯乘加入Kendrick Lamar專屬的Damn字樣，以及鞋頭的「該死的」中文字，絕對是玩味的代表。  …'
    }]
    
}

const PostLink = ({post}) => (
    <Link
        href={{pathname: '/post', query: { id: post.id }}}
        as={`/b/${post.id}`}
      >
        <a  className ="pure-button button-style">閱讀更多</a>
      </Link>
    
)

export default withRouter((props) => (
  <Layout>
   
   <div className="box">
            <div className="box">
                <h1>潮流BLOG</h1>
                <hr></hr>
            </div>
    </div>

      {getPosts().map((post,i) => (
        <div key = {i} className="pure-g">
            <div className="pure-u-1-1">
                
                <div className="box" >
                    
                
                    <div className="box" >
                        <div >
                            <img key = {post.img} className="photo-img" src= {post.img}  ></img>
                        </div>
                    </div>
                    <div className="box">
                        <div className="texBox">
                            <h1 key = {post.title}>
                                {post.title}
                            </h1>
                            <h4 key = {post.content}>
                                {post.content}
                            </h4>
                            <PostLink key={post.id} post={post}>
                            </PostLink>
                            
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </div>
      ))}
    

   <style jsx global>{`
     
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
    .texBox {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 800px;
        padding-bottom:1em;
    }
    .button-style{
        background-color: #0404B4; 
        color: white;
        text-decoration: none;
    }
    h4{
        font-weight:normal;
    }
  `}</style>
  </Layout>
))