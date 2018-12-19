import Layout from '../components/MyLayout.js'
import React, { Component } from 'react'

function getPosts(){
    return[{ id: '2018-famous-sneaker',
            img:'https://static.highsnobiety.com/wp-content/uploads/2018/01/16122913/Sneaker-Main-480x320.jpg', 
            title: '2018春夏波鞋特集：25個你要知的人氣波鞋牌子都在這！', 
            content: '修長簡單設計的波鞋款式已經不再是2018春夏的主打潮流，相反地設計較繁複而且帶點笨拙的Dad Sneakers就順利跑出成為熱門款式，說到最具人氣的爸爸運動鞋波鞋牌子，就一定要數Balenciaga與Adidas，Kendall Jenner與Bella Hadid早於上年年尾就穿上YEEZY BOOST 700 Wave Runner及Balenciaga的Triple S示人，還有不少時裝達人或KOL都紛紛投向Dad Sneakers的懷抱，所以如果你現在要買新波鞋，Dad Sneakers絕對是首選。',
            img2:'http://metropop-img.s3-website-ap-southeast-1.amazonaws.com/750/pop/uploads/2016/08/6245624521345.jpg',
            content2:'運動鞋的熱潮，不論在歐美、在國內或是香港都是大趨勢。近年來，各大運動鞋製造商更增加科研，大賣廣告，使消費者去到鞋店都可以見到五花八門、色彩繽紛、線條優美的「運動鞋」，要挑選一對合心意、款式雅致又合適操作參與運動，並且能夠充分協助發揮力量的運動鞋，真的不容易。所以筆者作為運動醫學的脊醫，藉此講述不同運動鞋種類及功能，並且介紹揀選適當「運動鞋」的要訣。',
            content3:'現在的運動鞋已經不是以前踢波、打籃球、跑步都是靠著一對「白飯魚」的時代。現時運動鞋的設計非常精確，每一款的運動鞋都強調特別針對於指定的運動項目功能而作設計，使雙腳得到最佳的保障，例如籃球鞋注重彈跳，加強避震功能；跑步鞋注重腳掌的伸展及腳踝關節的活動。所以打籃球時要穿籃球鞋，跑步時要穿跑步鞋，打網球時要穿網球鞋。看來是非常麻煩，但細想一下，每一種運動項目有不同的足部動作，為了雙腳得到保障，所以穿適當的運動鞋才是上策。'
        },
          { id: 'Nike-Air-Max-270',
            img:'https://pandulaju.com.my/converse-perkenal-kasut-mesra-motosikal-masih-kekalkan-gaya-klasik-chuck-taylor/converse-x-neighborhood-chuck-taylor-5/', 
            title: 'Nike Air Max 270 超級強勢登場 秒殺一切其他的存在', 
            content: '運動鞋的熱潮，不論在歐美、在國內或是香港都是大趨勢。近年來，各大運動鞋製造商更增加科研，大賣廣告，使消費者去到鞋店都可以見到五花八門、色彩繽紛、線條優美的「運動鞋」，要挑選一對合心意、款式雅致又合適操作參與運動，並且能夠充分協助發揮力量的運動鞋，真的不容易。所以筆者作為運動醫學的脊醫，藉此講述不同運動鞋種類及功能，並且介紹揀選適當「運動鞋」的要訣。',
            img2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10aCmyiDqf7-t_Hf3RhlwWEZPDwqYxfDKYbilfttwzdD3OFgc',
            content2:'運動鞋的熱潮，不論在歐美、在國內或是香港都是大趨勢。近年來，各大運動鞋製造商更增加科研，大賣廣告，使消費者去到鞋店都可以見到五花八門、色彩繽紛、線條優美的「運動鞋」，要挑選一對合心意、款式雅致又合適操作參與運動，並且能夠充分協助發揮力量的運動鞋，真的不容易。所以筆者作為運動醫學的脊醫，藉此講述不同運動鞋種類及功能，並且介紹揀選適當「運動鞋」的要訣。',
            content3:'現在的運動鞋已經不是以前踢波、打籃球、跑步都是靠著一對「白飯魚」的時代。現時運動鞋的設計非常精確，每一款的運動鞋都強調特別針對於指定的運動項目功能而作設計，使雙腳得到最佳的保障，例如籃球鞋注重彈跳，加強避震功能；跑步鞋注重腳掌的伸展及腳踝關節的活動。所以打籃球時要穿籃球鞋，跑步時要穿跑步鞋，打網球時要穿網球鞋。看來是非常麻煩，但細想一下，每一種運動項目有不同的足部動作，為了雙腳得到保障，所以穿適當的運動鞋才是上策。'
        
          },
          { id: 'Nike-Adidas',
          img:'https://hafizrahim.com/wp-content/uploads/2016/02/Puma-x-fall-winter-sneakers.jpg', 
          title: '潮鞋來襲 Nike Adidas再鬥法 2018年18對波鞋預告', 
          content: 'Nike 的聯乘系列一向大膽兼富玩味，這次的Kendrick Lamar與Nike的Crossover更加入粗口元素。Kendrick Lamar本為美國本土rapper一向大愛Nike旗下的Cortez系列，這次的聯乘加入Kendrick Lamar專屬的Damn字樣，以及鞋頭的「該死的」中文字，絕對是玩味的代表。',
          img2:'https://imgs.nmplus.hk/wp-content/uploads/2016/12/2017sneakers_web_122357225586734ab1ba66.png',
          content2:'上年經已推岀的Zoom Fly SP於18年再次上架。想不到如此機能性的鞋款竟獲潮人吹奏，很大機會是因為它被納入Off-White The Ten系列中。鞋頭的Nike大剔令用家留下深刻印象，這次上架的Zoom Fly SP 選用紫色為主色，流線型透明鞋身設計滲岀螢光橙色，令波鞋更添動感。',
          content3:'2017年推岀的Vapormax Flyknit 絕對是Nike非常成功的産品，充分展示Nike引以為傲的Air 技術。2018年，這對高襪筒型的全黑Vapormax Flyknit將現於眼前。改由索帶調控鞋身鬆緊度，全鞋設計比一般Vapormax 更簡約，潮流味更重。'
        
    }]
    
}

function findPost(id){
    for(let i =0 ;i<getPosts().length;i++){
        if (getPosts()[i].id === id)
            return getPosts()[i];
    }

    return null;
}

export default class extends Component {
  static getInitialProps ({ query: { id } }) {
    let content = findPost(id);
    return { postId: id ,content:content}
  }

  render () {
    return (
        <div>
            <Layout title = {this.props.content.title}>
            <div className="pure-g">
                <div className="pure-u-1-1">
                    
                    <div className="box" >
                        
                        <hr></hr>
                        <div className="box" >
                            <div >
                                <img  className="photo-img" src= {this.props.content.img}  ></img>
                            </div>
                        </div>
                        <div className="box">
                            <div className="texBox">
                                <h1 >
                                    {this.props.content.title}
                                </h1>
                                <h4 >
                                    {this.props.content.content}
                                </h4>
                                
                            </div>
                        </div>
                        <div className="box" >
                            <div >
                                <img  className="photo-img" src= {this.props.content.img2}  ></img>
                            </div>
                        </div>
                        <div className="box">
                            <div className="texBox">
                                <h4 >
                                    {this.props.content.content2}
                                </h4>
                                <h4 >
                                    {this.props.content.content3}
                                </h4>
                                
                            </div>
                        </div>
                        <hr></hr>
                        <div className="box" >
                            <div className="box" >
                                <div className="box-icon pure-u-1-2" >
                                    <div className="box">
                                        <img  className="photo-img-icon" src= 'https://prismic-nextjs-sample.cdn.prismic.io/new-demo/91515e0adafc360b1c38cb745042897f13a86776_avatar.jpg'  ></img>
                                        
                                    </div>
                                </div>
                                <div className=" pure-u-1-2" >
                                    <div className="box">
                                        
                                        <div className="text">
                                                作者：潮流達人 REX
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx >{`
     
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
    .text{
        margin-top:30px;
        margin-left:100px;
    }
    .photo-img-icon{
        overflow: hidden;
        object-fit: cover;
        width: 100%;
        height: 150px;

        width: 150px;

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
    .box-icon {
        box-sizing: border-box;
        width: 20%;
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
  `}</style>
        </Layout>
        </div>
    )
  }
}
