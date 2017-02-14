<template>
		<canvas class="snowf-canvas"></canvas>
</template>

<script>
	export default {
		props: {
			amount: {
				type: Number,
				default: 50
			},
			size: {
				type: Number,
				default: 5
			},
			speed: {
				type: Number,
				default: 1.5
			},
			wind: {
				type: Number,
				default: 0
			},
			color: {
				type: String,
				default: '#f00'
			},
			opacity: {
				type: Number,
				default: 0.8
			},
			swing: {
				type: Boolean,
				default: true
			},
			swingOffset: {
				type: Number,
				default: 1
			},
			image: {
				type: String,
				default: null
			},
			zIndex: {
				type: Number,
				default: null
			}
		},
		mounted() {

			var self = this;
			const HEIGHT = self.$el.offsetHeight;
			const WIDTH = self.$el.offsetWidth;
			const CONTEXT = self.$el.getContext('2d');
			var flakes = [];

			self.$el.height = HEIGHT;
			self.$el.width = WIDTH;
			if (self.zIndex) this.$el.style.zIndex = self.zIndex;

			function init() {
				for (var i = 0; i < self.amount; i++) {
					flakes.push({
						x: random(0, WIDTH),
						y: random(0, HEIGHT),
						r: random(self.size, self.size * 2) / 2,
						velX: 0,
						velY: random(self.speed, self.speed * 2),
						swing: random(0, 2*Math.PI),
						opacity: random(0, self.opacity)
					});
				}
				snow();
			}

			function snow() {
				var img;
				CONTEXT.clearRect(0, 0, WIDTH, HEIGHT);
				for (var i = 0; i < self.amount; i++) {
					var flake = flakes[i];

					if (!self.image) {
						CONTEXT.beginPath();
						CONTEXT.fillStyle = 'rgba(' + getRgb(self.color) + ',' + flake.opacity + ')';
						CONTEXT.arc(flake.x, flake.y, flake.r, 2*Math.PI, false);
						CONTEXT.fill();
						CONTEXT.closePath();
					}
					else {
						if (!img) {
							img = new Image();
							img.src = self.image;
						}
						CONTEXT.drawImage(img, flake.x - flake.r, flake.y - flake.r, 2 * flake.r, 2 * flake.r);
					}

					flake.velX = Math.abs(flake.velX) < Math.abs(self.wind) ? flake.velX + self.wind / 20 : self.wind;
					flake.y = flake.y + flake.velY * 0.5;
					flake.x = flake.x + (self.swing ? 0.4 * Math.cos(flake.swing += 0.03) * flake.opacity * self.swingOffset : 0) + flake.velX * 0.5;
					if (flake.x > WIDTH + flake.r || flake.x < -flake.r || flake.y > HEIGHT + flake.r || flake.y < -flake.r) {
						reset(flake);
					}
				}
				requestAnimationFrame(snow);
			}

			function reset(flake) {
				var prevR = flake.r;
				flake.r = random(self.size, self.size * 2) / 2;
				if (flake.x > WIDTH + prevR) {
					flake.x = -flake.r;
					flake.y = random(0, HEIGHT);
				}
				else if (flake.x < -prevR) {
					flake.x = WIDTH + flake.r;
					flake.y = random(0, HEIGHT);
				}
				else {
					flake.x = random(0, WIDTH);
					flake.y = -flake.r;
				}
				flake.velX = 0;
				flake.velY = random(self.speed, self.speed * 2);
				flake.swing = random(0, 2*Math.PI);
				flake.opacity = random(0, self.opacity);
			}

			init();
		}
	}

	function random(min, max) {
		var delta = max - min;
		return max === min ? min : Math.random() * delta + min;
	}

	function getRgb(str) {
		var rgb = '';
		if (str.indexOf('#') === 0) {
			rgb = str.length === 4 ? str.substr(1).split('').map(function(n) {return parseInt(n.concat(n), 16);}).join(',') :
						str.length === 7 ? [str.substr(1,2), str.substr(3,2), str.substr(5,2)].map(function(n) {return parseInt(n, 16);}).join(',') :
						'255,255,255';
		}
		else if (str.indexOf('rgb(') === 0) {
			rgb = str.substring(4, str.length - 1);
		}
		else {
			rgb = '255,255,255';
		}
		return rgb;
	}
</script>

<style>
	.snowf-canvas {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
</style>