import React, { useEffect, useState, useContext,FC } from 'react';
import Macy from 'macy'
import { ConfigContext } from '../config-provide';
import classnames from 'classnames';
import './waterfall.less';

export interface IWaterFallProps {
  /**
   * 添加额外的classname
   */
  classname?: string;
  /**
   * 添加额外的classname
   */
  source: string[];
};

const WaterFall:FC<IWaterFallProps> = (props) => {
  const {classname, source=[]} = props;
  const [masonry, setMasonry] = useState<any>();
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('waterfall');

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
    <div className={classnames(prefixCls,classname)}>
      {
        source && source.map((item: any, index: any) => {
          return (
            <img src={item} className="img_item" key={`${prefixCls}-img-${index}`} />
          )
        })
      }
    </div>
  )
}
export default WaterFall;


