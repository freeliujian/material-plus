// import React, { Component, useEffect, useState } from 'react';
// import Macy from 'macy'

    
// interface IState {
// 	masonry: any;
// }
// const dataImages = [
// 	  "https://picsum.photos/640/200/?random",
// 	  "https://picsum.photos/360/640/?random",
// 	  "https://picsum.photos/480/720/?random",
// 	  "https://picsum.photos/480/640/?random",
// 	  "https://picsum.photos/360/?random",
// 	  "https://picsum.photos/360/520/?random",
// 	  "https://picsum.photos/520/360/?random",
// 	  "https://picsum.photos/520/360/?random",
// 	  "https://picsum.photos/520/360/?random",
//  ]

// const News = () =>  {
// 	const [masonry, setMasonry] = useState<any>()
// 	useEffect(() => {
// 		if (masonry) {
// 			masonry.reInit()
// 		} else {
// 			let masonry = new Macy({
// 				container: '.macy-container', // 图像列表容器
// 				trueOrder: false,
// 				waitForImages: false,
// 				useOwnImageLoader: false,
// 				debug: true,
// 				margin: { x: 10, y: 15 },    // 设计列与列的间距
// 				columns: 2,    // 设置列数
// 			})
// 			setMasonry(masonry)
// 		}
// 	},[])

// 	return (
// 		<div className="macy-container">
// 		{
// 			dataImages && dataImages.map((item:any,index:any)=>{
// 				return (
// 					<img src={item} alt="" className="img_item" key={index}/>
// 				)
// 			})
// 		}
// 	</div>
// 	)
// }
// export default News

// const dataImages = [
// 	  "https://picsum.photos/640/200/?random",
// 	  "https://picsum.photos/360/640/?random",
// 	  "https://picsum.photos/480/720/?random",
// 	  "https://picsum.photos/480/640/?random",
// 	  "https://picsum.photos/360/?random",
// 	  "https://picsum.photos/360/520/?random",
// 	  "https://picsum.photos/520/360/?random",
// 	  "https://picsum.photos/520/360/?random",
// 	  "https://picsum.photos/520/360/?random",
//  ]
// export default class ListImg extends Component<any,IState> {

		
// 	constructor(props:any){
// 		super(props);

// 		this.state={
// 			masonry:null
// 		}
// 	}


// 	componentDidMount() {
// 		this.getMacy()
// 	}
	
// 	//实现瀑布流的方法啊
// 	getMacy = () => {
// 	   if (this.state.masonry) {
// 	     this.state.masonry.reInit()
// 	   } else {
// 	     let masonry = new Macy({
// 	       container: '.macy-container', // 图像列表容器
// 	       trueOrder: false,
// 	       waitForImages: false,
// 	       useOwnImageLoader: false,
// 	       debug: true,
// 	       margin: { x: 10, y: 15 },    // 设计列与列的间距
// 	       columns: 2,    // 设置列数
// 	     })
// 	     this.setState({ masonry })
// 	   }
// 	 }

// 	render(){
// 		return(
// 			// 这个类名macy-container就是要和getMacy方法里面new Macy()里的配置项对起来哦，这样就在这里面瀑布了（多余的解释，相信你肯定懂。那阵子～～）
// 			<div className="macy-container">
//             {
//               dataImages && dataImages.map((item:any,index:any)=>{
//                 return (
//                   <img src={item} alt="" className="img_item" key={index}/>
//                 )
//               })
//             }
//           </div>
// 		)
// 	}
// }
