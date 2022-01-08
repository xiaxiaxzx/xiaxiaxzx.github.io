var mySwiper = new Swiper('#mySwiper', {
  direction: 'vertical',
  on: {
    slideChange: function () {
      if (this.activeIndex != 0){
        $('#live2d-widget').fadeIn()
      } else {
        $('#live2d-widget').hide()
      }
      if (this.activeIndex == 1) {
        typing(0)
      } 
    },
  },
})

function typing(index){
  var index = index
        var str = titles[index]
        var i = 0
        var done = setInterval(function() {
          var name = '#title' + (index+1)
          $(name).html(str.slice(0, ++i))
          if (i >= str.length) {
            clearInterval(done)
          }
        }, 200)
}

var titles = ["《我想和你一起困告》","《马蒂尔餐厅》","《两耳之间》","《无间日记》","《安乐》","《蓝嘴唇》",]
var titleSwiper = new Swiper('#articleSwiper', {
  direction: 'horizontal',
  on: {
    slideChange: function() {
        typing(this.activeIndex)
    }
  }
})

var contents = ["阮总，柏总已经被你拉下马三年了。<br>他知道错了吗？<br>没有！，他不仅找了个温柔体贴器大活好的男朋友，而且还扬言要打爆你的狗头。"]
