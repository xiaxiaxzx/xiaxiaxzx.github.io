var mySwiper = new Swiper('#mySwiper', {
  direction: 'vertical',
  on: {
    slideChange: function () {
      if (this.activeIndex != 0) {
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

function typing(index) {
  var index = index
  var str = titles[index]
  var i = 0
  var done = setInterval(function () {
    var name = '#title' + (index + 1)
    $(name).html(str.slice(0, ++i))
    if (i >= str.length) {
      clearInterval(done)
    }
  }, 200)
}

var titles = ['《我想和你一起困告》', '《两耳之间》', '《无间日记》', '《蓝嘴唇》', '《马蒂尔餐厅》']
var titleSwiper = new Swiper('#articleSwiper', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      typing(this.activeIndex)
    },
  },
})

var contents = [
  "阮总，柏总已经被你拉下马三年了。<br />他知道错了吗？<br />没有！他不仅找了个温柔体贴器大活好的男朋友，而且还扬言要打爆你的狗头。这是一个伪心理医师&病人，实正直刑警&美人金融大佬的故事。<p class='littleWidth'>他们互相伤害、互相欺骗、互相套路也互相救赎，当一个人既是毒药又是镇痛剂时，这个人给你的痛苦越深，其镇痛剂之价值也就越高。<br />有甜有虐有车，HE，已完结。<br />已出有声剧，两个男主的声音好听到要怀孕。</p>",
  "性，在两耳之间，不在两腿之间。<br />我叫吴邪，我的人生就是一个大写的悲催。<br />正是年轻力壮如狼似虎一日千里的年纪，我他妈竟然患上了性功能障碍！！！<br />谈过好几个漂亮的女朋友，全都因为在最后一步败下阵来而分手！<p class='littleWidth'>我内心的悲愤交加简直无法用言语来形容。在接受国正规治疗和各种小偏方无果后，我终于接受了医生的建议，约见了一个性治疗师。</p>",
  "这是一个，卧底讲相声，最后卧成公司老大的故事。<br />记者：“主任，我有一个好消息和一个坏消息，你想先听哪一个？”<br />主任想了一下：“先听坏消息吧。”<br />记者说：“坏消息是我老板竟然想睡我。”<br />“那好消息呢？”<br />“好消息是咱俩出柜了。”<br />“出轨？”<br />“出柜！”<br />“谁出柜？”<br />“咱俩。”<br />“咱俩怎么了？”<br />“出柜了。<p class='littleWidth'>主任脸瞬间黑了：“这他妈算哪门子的好消息！！谁他妈要跟你出柜了？！！”</p>",
  "藤墨开了一家情趣用品店，最近一个常来买伟哥的男人引起了他的注意。<br />伍十弦：你给我吃了什么？<br />藤墨：印度神药。这个可比万艾可好使多了，副作用小，持续时间还长。<br />伍十弦：有多长？<br />藤墨：不出意外的话，三天吧。<p class='littleWidth'>伍十弦：你是说，我得这个样子硬三天？？？<br />藤墨：emmmm意思是这么个意思。<br />伍十弦：你个老畜生，你死定了！</p>",
  "小变态遇上大变态，两个变态对着骚。<br />闻知实习的酒店餐厅，食物总有奇怪的味道。后来有一天深夜，他发现酒店老板在餐厅厨房脱了裤子，并且拿出了一根胡萝卜。<br />什么，你问然后？<br />然后闻知就被打晕了，<p class='littleWidth'>一睁眼发现自己被绑在了一张大床上。<br />颜青柳：喂，吃橘子吗？<br />闻知：不吃。<br />颜青柳：你不张嘴的话，我就把橘子从你下面的嘴里塞进去哦，你懂我的意思吧？我真的会塞的。你刚刚在厨房，不是已经看我塞过了吗？</p>",
]
for (let i = 0; i < $('.content').length; i++) {
  $('#content' + (i + 1)).html(contents[i])
}
