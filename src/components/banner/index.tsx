
 import React from 'react';
 import banner from '../../static/banner.jpg'
 import './index.scss'
// function Banner(){
//     return(
//         <div  className="header-layout">
//             <TabBanner></TabBanner>
//         </div>
//     )
// }

// function TabBanner(){
//     return(
//         <div className="banner"><img className="img" src={banner}/> </div>
//     )
// }
// export default Banner




import { Carousel, WingBlank } from 'antd-mobile';



class Banner extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height:'3rem' }}
            >
              <img
                src={banner}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}


export default Banner