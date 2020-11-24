
import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './mhead.scss'
import {banner} from '../../serve/api'

type BannerItem = {
    [key: string]: any
}

type State = {
    data: [BannerItem] | never[],
    imgHeight: Number|String
}

class Banner extends React.Component<{}, State> {
    state = {
      data: [],
      imgHeight: 176,
    }
    componentDidMount() {
      // simulate img loading
    
      banner().then((res:any)=>{
          console.log(res)
          this.setState({
              data:res.data.banners
          })
      }).catch(res=>{
        console.log(res)
      })
    }
    render() {
      return (
        <div className="header-layout">
            <div className="header">
        <WingBlank>
          <Carousel
            autoplay={false}
            cellSpacing={10}
          >
            {this.state.data.map((val:BannerItem,key:number) => (
              <a
                key={key}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height:'3rem' }}
              >
                <img
                  src={`${val.pic}`}
                  alt=""
                  style={{ width: '100%' ,height:'100%', verticalAlign: 'top' }}
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
            </div>
        </div>
      );
    }
  }
export default Banner