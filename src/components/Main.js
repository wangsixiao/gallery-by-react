require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// 获取图片的相关信息
var imgDatas = require("../data/imgData.json");
//利用自执行函数 将图片名信息转成图片url路径信息
imgDatas = (function genImageURL(imgDataArr){
	for(var i = 0 ;j = imgDataArr.length;i<j;i++){
		var singleImageData = imgDataArr[k];
		singleImageData.imageURL = require("../images/" + singleImageData.fileName);
		imgDataArr[i] = singleImageData;
	}
	return imgDataArr;
})(imgDatas);

var ImgFigure = React.createClass({
  render:function(){
    return (
      <figure>
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2>{this.props.data.title}</h2>
        </figcaption>
      </figure>
      );
  }
});
var GalleryByReactApp = React.createClass({
  render:function(){
    var controllerUnits = [];
        imgFigures = [];
    imgDatas.forEach(function(value){
      imgFigures.push(<ImgFigure data={value}/>);
    });
    return (
      <section className='stage'>
        <section className='img-dev'>
          {imgFigures}
        </section>
        <nav className='controller-nav'>
          {controllerUnits}
        </nav>
      </section>
    )
  }
});
React.render(
  <GalleryByReactApp/>,
  document.getElementById("content")
);
module.exports = GalleryByReactApp;
AppComponent.defaultProps = {
};

export default AppComponent;
