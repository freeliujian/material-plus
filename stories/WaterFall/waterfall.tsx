import React, { useEffect, useState, useContext } from 'react';
import Macy from 'macy'
import { ConfigContext } from '../config-provide';
import classnames from 'classnames';
import './waterfall.less';

const dataImages = [
  "https://picsum.photos/640/200/?random",
  "https://picsum.photos/360/640/?random",
  "https://picsum.photos/480/720/?random",
  "https://picsum.photos/480/640/?random",
  "https://picsum.photos/360/?random",
  "https://picsum.photos/360/520/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/520/360/?random",
]

interface IWaterFallProps {
  classname: string;
  source: string[];
};

const WaterFall = (props) => {
  const [masonry, setMasonry] = useState<any>();
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('waterfall');
  console.log(prefixCls);
  useEffect(() => {
    if (masonry) {
      masonry.reInit();
    } else {
      let masonry = new Macy({
        container: `.${prefixCls}`, // 图像列表容器
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader: false,
        debug: true,
        margin: { x: 10, y: 15 },    // 设计列与列的间距
        columns: 2,    // 设置列数
      })
      setMasonry(masonry);
    };
  }, []);

  return (
    <div className={classnames(prefixCls)}>
      {
        dataImages && dataImages.map((item: any, index: any) => {
          return (
            <img src={item} className="img_item" key={`${prefixCls}-img-index`} />
          )
        })
      }
    </div>
  )
}
export default WaterFall;


