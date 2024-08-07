<p align="center">
  <h1 align="center">
    <a href="https://github.com/server-ok/rudetext/">
      <img alt="RUDETEXT" src="https://rudetext.vercel.app/api?text=RUDETEXT&font_size=128&font=punky&height=128&anchor=middle"/>
      <br/>
      <img alt="text with character" src="https://rudetext.vercel.app/api?text=text+with+character&font=punky&font_size=32&animation=rainbow&duration=10&text_color=00000000&delay=0.5&anchor=middle"/>
    </a>
  </h1>
</p>
<p align="center">
  <a href="https://github.com/server-ok/">
    <img alt="GitHub commit activity" src="https://img.shields.io/badge/i_love-milk-black?style=for-the-badge&labelColor=FFFFFF"/>
  </a>
  <a href="https://github.com/server-ok/rudetext/">
    <img alt="GitHub commit activity" src="https://img.shields.io/badge/this_TEXT-is_very_RUDE-black?style=for-the-badge&labelColor=FFFFFF&color=000000"/>
  </a>
  <a href="https://github.com/server-ok/rudetext/commits/">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/t/server-ok/rudetext?style=for-the-badge&label=COMMITS&labelColor=FFFFFF&color=000000"/>
  </a>
  <a href="https://github.com/server-ok/rudetext/graphs/contributors">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/contributors/server-ok/rudetext?style=for-the-badge&label=CONTRIBUTORS&labelColor=FFFFFF&color=000000"/>
  </a>
  <a href="https://github.com/server-ok/rudetext/issues/">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/issues/server-ok/rudetext?style=for-the-badge&label=ISSUES&labelColor=FFFFFF&color=000000"/>
  </a>
  <a href="https://github.com/server-ok/rudetext/pulls/">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/issues-pr/server-ok/rudetext?style=for-the-badge&label=PULL+REQUESTS&labelColor=FFFFFF&color=000000"/>
  </a>
</p>

##### Rudetext is a animated svg text generator with a goal to make your readmes feel more alive. It's [powered by Vercel](https://vercel.com), so it can be used without hosting it yourself by accessing it with it's current domain: https://rudetext.vercel.app/api. If you wish to host it yourself, you can fork it and make /src/ a root directory in Vercel.  

# ![Overview](https://rudetext.vercel.app/api?text=Overview&font=Segoe+UI&font_size=32&animation=rainbow&duration=10&height=32)
  - [Using RUDETEXT](#using-rudetext)
  - [Text + SVG](#text--svg)
    - [Customizations](#text-customizations)
  - [Animations](#animations)
    - [Customizations](#animation-customizations)

# Using RUDETEXT
To use RUDETEXT in markdown, you use markdown's `![alt text](image)`. For example, `![Rainbow Text](https://rudetext.vercel.app/api?text=Rainbow+Text&animation=rainbow&height=16&width=96&dominant_baseline=auto)` shows up as ![Rainbow Text](https://rudetext.vercel.app/api?text=Rainbow+Text&animation=rainbow&height=16&width=96&dominant_baseline=auto). Query parameters are separated by `&`. Spaces can be added with `+` or `%20`. + sign can be added with `%2b`. So, you should consider escaping your strings before using them in RUDETEXT.
  
# Text + SVG
Text can be passed to RUDETEXT by using `text` query parameter.  
As RUDETEXT cannot access DOM to calculate text width and height, default SVG sizes are `width = font_size * (text.length + 2) / 2` and `height = font_size * 1.5`.  
You can set your width and height in pixels manually by passing the `width` and `height` query parameters.  
  
# Text customizations
`text_color` - Text color in RGB HEX. (#FFFFFF by default)  
`font` - Font of the text. Is a string. (`Segoe UI` by default)  
`font_size` - Font size of the text in pixels. (16 by default)  
`anchor` - Anchor of the text. `start`, `middle`, `end` etc. (`start` by default)  
`dominant_baseline` - dominant baseline of the text. `auto`, `middle`, `hanging`. (`middle` by default.)
  
# Animations
There are multiple animations in RUDETEXT. You can choose the animation by passing `animation` query parameter.  

Oneshot animations: `fall`.  
Repeating animations: `rainbow, wave`.  
  
`fall` animation example:  
`![RAHH!!](https://rudetext.vercel.app/api?text=RAHH!!&animation=fall&iteration_count=infinite&dominant_baseline=hanging)`  
![RAHH!!](https://rudetext.vercel.app/api?text=RAHH!!&animation=fall&iteration_count=infinite&dominant_baseline=hanging)  

`rainbow` animation example:  
`![Rainbowy Rainbows :3](https://rudetext.vercel.app/api?text=Rainbowy+Rainbows+:3&animation=rainbow&duration=3)`  
![Rainbowy Rainbows :3](https://rudetext.vercel.app/api?text=Rainbowy+Rainbows+:3&animation=rainbow&duration=3)  
  
`wave` animation example:  
`![Wavy Wavies ~u~](https://rudetext.vercel.app/api?text=Wavy+Wavies+~u~&animation=wave&duration=5)`  
![Wavy Wavies ~u~](https://rudetext.vercel.app/api?text=Wavy+Wavies+~u~&animation=wave&duration=5)  

# Animation customizations
`delay` - Delay of the animation. Can be used to "chain" multiple RUDETEXT SVGs. (`0` by default)  
`duration` - Duration of the animation in seconds. Can be used to speed up or slow down animations. (`0.5` by default)  
`iteration_count` - Number of times the animation is repeated. Can be `infinite` to loop it forever. (`1` for oneshot animations, `infinite` for repeating animations by default)
`amplitude` - Amplitude of the `wave` animation. In pixels. Only specific to the `wave` animation for now. (`height / 10` by default)
