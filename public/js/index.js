var mySwiper = new Swiper('#mySwiper',{
  direction: 'vertical',
})

var book = function () {
	var e = $('.flipbook')
	e.turn({
		elevation: 50,
		gradients: !1,
		autoCenter: !0,
		duration: 500,
		page: 2,
		when: {
			turning: function (e, n) {
				switch (
					(
					$('.lastpage').css('display', 'none'),
					$('.nav_contianer a').on('click', function () {
						MShare.report({ monitor: 'press_mozhou_btn', desc: '\u9b54\u5492\u7684\u7ffb\u9875' })
					}),
					n)
				) {
					case 10:
							$('.lastpage').css('display', 'block'),
							setTimeout(function () {
								$('.book_pop').fadeIn()
							}, 500),
							setTimeout(function () {
								$('.book_pop').fadeOut()
							}, 3e3),
							$('.book_pop').click(function () {
								$('.book_pop').fadeOut()
							})
				}
			},
		},
	}),
		e.bind('start', function (e, n) {
			2 == n.page && e.preventDefault(), $('.book_click').hide()
		}),
		e.bind('turning', function (e, n) {
			1 == n && e.preventDefault()
		}),
		$('.book_next').on('click', function () {
			e.turn('next')
		}),
		$('.book_prev').on('click', function () {
			e.turn('previous')
		})
	var n = !0,
		o = void 0
	;(n = !1),
		(o = 0),
		$('.lastpage').on('touchstart', function (e) {
			e.preventDefault()
		}),
		$('.lastpage').on('touchend', function (e) {
			e.preventDefault()
		}),
		window.getSelection().removeAllRanges()
}
book()


var M = (function Manager() {
	var mo = {}
	function define(name,deps,impl) {
		for(var i =0 ;i < deps.length; i++){
			deps[i] = mo[deps[i]]
		}
		mo[name] = impl.apply({},deps)
	}
	function get(name) {
		return mo[name]
	}
	return {
		define: define,
		get: get
	}
})()

M.define("bar", [], function(){
	function hello(who) {
		return who
	}
	console.log(this)
	return {
		hello: hello
	}
})
M.define("foo", ["bar"], function(){
	var f = "f"
	function awe(){
		console.log(bar.hello(f).toUpperCase())
	}
	return {
		awe: awe
	}
})
console.log(M.get("bar"))
var bar = M.get("bar")
var foo = M.get('foo')
console.log(bar.hello("me"))
console.log(foo.awe())