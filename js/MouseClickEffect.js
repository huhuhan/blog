var a_idx = 0

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const EFFECT_INFO = []
// .concat(["富强民主", "文明和谐", "自由平等", "公正法治", "爱国敬业", "诚信友善"])
  .concat(["好奇就尝试", "喜欢就坚持", "勇敢去表达", "热爱生活", "坚持自律", "梦想暴富"])

jQuery(document).ready(function ($) {
  $("body").click(function (e) {
    let $i = $("<span/>").text(EFFECT_INFO[getRandom(EFFECT_INFO.length - 1, 0)])
    let x = e.pageX,
      y = e.pageY
    $i.css({
      "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": `rgb(${getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)})`,
      "user-select": 'none',
      "cursor": 'default'
    })
    $("body").append($i)
    $i.animate({
        "top": y - 180,
        "opacity": 0
      },
      1500,
      function () {
        $i.remove()
      })
  })
})
