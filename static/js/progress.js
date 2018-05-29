export default function () {
  // alert(1)
  let particleNo = 25

  // requestAnimationFram兼容写法
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60)
      }
  })()

  var canvas = document.getElementsByTagName('canvas')[0]
  var ctx = canvas.getContext('2d')

  var counter = 0
  var particles = []
  var w = 400
  var h = 200
  canvas.width = w
  canvas.height = h

  function reset () {
    ctx.fillStyle = '#272822'
    ctx.fillRect(0, 0, w, h)

    ctx.fillStyle = '#171814'
    ctx.strokeStyle = 'transparent'
    var widths = this.widths
    drawRoundRect(ctx, 25, 80, widths, 18, 9)
  }

  // 进度条
  function Progressbar () {
    this.widths = 0
    this.hue = 0

    this.draw = function () {
      ctx.fillStyle = 'hsla(' + this.hue + ', 100%, 40%, 1)'
      ctx.strokeStyle = 'transparent'
      var widths = this.widths
      drawRoundRect(ctx, 25, 80, widths, 18, 9)
      var grad = ctx.createLinearGradient(0, 0, 0, 130)
      grad.addColorStop(0, 'transparent')
      grad.addColorStop(1, 'rgba(0,0,0,0.5)')
      ctx.fillStyle = grad
      ctx.strokeStyle = 'transparent'
      drawRoundRect(ctx, 25, 80, widths, 18, 9)
    }
  }

  // 绘制圆角
  function drawRoundRect (cxt, x, y, width, height, radius) {
    cxt.beginPath()
    cxt.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2)
    cxt.lineTo(width - radius + x, y)
    cxt.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2)
    cxt.lineTo(width + x, height + y - radius)
    cxt.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2)
    cxt.lineTo(radius + x, height + y)
    cxt.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI)
    cxt.closePath()
    cxt.stroke()
    cxt.fill()
  }

  // 散射点阵
  function Particle () {
    this.x = 23 + bar.widths
    this.y = 82

    this.vx = 0.8 + Math.random() * 1
    this.v = Math.random() * 5
    this.g = 1 + Math.random() * 3
    this.down = false

    this.draw = function () {
      ctx.fillStyle = 'hsla(' + (bar.hue + 0.3) + ', 100%, 40%, 1)'
      var size = Math.random() * 2
      ctx.fillRect(this.x, this.y, size, size)
    }
  }

  // 心形线函数
  // function getHeartPoint (angle) {
  //   var t = angle / Math.PI
  //   var x = 19.5 * (16 * Math.pow(Math.sin(t), 3))
  //   var y = -20 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))
  //   return [x, y]
  // }

  var bar = new Progressbar()

  function draw () {
    reset()
    counter++

    bar.hue += 0.8

    bar.widths += 2
    if (bar.widths > 350) {
      if (counter > 215) {
        reset()
        bar.hue = 0
        bar.widths = 0
        counter = 0
        particles = []
      } else {
        bar.hue = 126
        bar.widths = 351
        bar.draw()
      }
    } else {
      bar.draw()
      for (var i = 0; i < particleNo; i += 10) {
        particles.push(new Particle())
      }
    }
    update()
  }

  function update () {
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i]
      p.x -= p.vx
      if (p.down === true) {
        p.g += 0.1
        p.y += p.g
      } else {
        if (p.g < 0) {
          p.down = true
          p.g += 0.1
          p.y += p.g
        } else {
          p.y -= p.g
          p.g -= 0.1
        }
      }
      p.draw()
    }
  }

  function animloop () {
    draw()
    window.requestAnimFrame(animloop)
  }

  animloop()
}
