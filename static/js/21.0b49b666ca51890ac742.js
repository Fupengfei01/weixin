webpackJsonp([21,13],{

/***/ 39:
/***/ function(module, exports) {

	import Vue from 'vue';
	import fancyBox from './fancyBox.vue';
	
	const FancyBoxConstructor = Vue.extend(fancyBox);
	
	Vue.directive('fancybox-thumbnail', {
		inserted (el, binding) {
			let style = el.getBoundingClientRect(),
				width = binding.value[0], height = binding.value[1],
				radio = style.width / style.height,
				type = width / height > radio ? 'height' : 'width';
	
			el.firstElementChild.style[type] = '100%';
		}
	});
	
	export default (el, imageList) => {
	
		imageList.forEach((n) => {
	
			let hRatio = window.innerWidth / n.width;
			let vRatio = window.innerHeight / n.height;
			
			n.scaleWidth = window.innerWidth;
			n.fitRatio = hRatio < vRatio ? hRatio : vRatio;
		});
	
		let instance = new FancyBoxConstructor({
			el: document.createElement('div')
		});
	
		document.body.appendChild(instance.$el);
	
		Vue.nextTick(() => {
	
			let parent = el.parentNode;
	
			instance.thumbnails = parent.parentNode.children;
			instance.visible = true;
			instance.imageItems = imageList;
			instance.imageIndex = Number(parent.dataset.index);
			instance.activeUrl = instance.imageItems[instance.imageIndex].url;
	
			let zoom = instance.getZoomTransform(el);
			let boundingClientRect = parent.getBoundingClientRect();
	
			instance.activeStyle = {
				webkitTransform: `translate3d(${boundingClientRect.left}px, ${boundingClientRect.top}px, 0px) scale(${zoom})`
			}
	
			if (instance.imageItems[instance.imageIndex].width < window.innerWidth) {
				instance.activeImageStyle = {
					width: '100%'
				}
			}
	
			setTimeout(() => {
	
				instance.activeImageStyle = {
					width: `${instance.getCenter().w}px`
				}
	
				instance.activeStyle = {
					webkitTransform: `translate3d(${instance.getCenter().x}px, ${instance.getCenter().y}px, 0px) scale(1)`
				}
	
				instance.initDom();
			}, 300);
		});
	}

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(39);

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)(true);
	// imports
	
	
	// module
	exports.push([module.id, ".cs-bjxq-dailog{top:108px;right:0;position:absolute;background:#fff;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.3);box-sizing:border-box}.cs--bjxq-dialog__footer{bottom:0;position:absolute;right:20px}.cs-bjxq-dailog__body{margin-bottom:60px;overflow-x:hidden;overflow-y:auto}.fancy-box-image-wrapper{top:0;right:0;left:0;position:fixed;width:100%;height:100%;z-index:33}.fancy-box-image-wrapper div{top:0;right:0;left:0;position:absolute;width:100%;height:100%;transform-origin:left top 0;transition:transform .3s cubic-bezier(.4,0,.22,1)}.fancy-box-image-wrapper img{max-width:100%;max-height:100%}.fancy-box-mask{top:0;right:0;left:0;position:fixed;width:100%;height:100%;background-color:#333;z-index:9999}.fancy-enter,.fancy-leave-active{opacity:0}.fancy-enter-active,.fancy-leave-active{transition:.2s}.cs-bjxq-dailog__body h5{background:#ccc;line-height:20px;padding-left:10px}.cs-bjxq-dailog .image{height:100px}", "", {"version":3,"sources":["C:/Users/Administrator/Desktop/demo/vue4/SLS/vue2/src/pages/wlf/bjxq.vue"],"names":[],"mappings":"AACA,gBACI,UAAU,AACV,QAAW,AACX,kBAAmB,AACnB,gBAAiB,AACjB,kBAAmB,AACnB,oCAAqC,AACrC,qBAAuB,CAC1B,AACD,yBACI,SAAY,AACZ,kBAAmB,AACnB,UAAY,CACf,AACD,sBACI,mBAAoB,AACpB,kBAAmB,AACnB,eAAe,CAClB,AAID,yBAA0B,MAAM,QAAQ,OAAO,eAAe,WAAW,YAAY,UAAU,CAC9F,AACD,6BAA8B,MAAM,QAAQ,OAAO,kBAAkB,WAAW,YAAY,4BAA4B,iDAAmD,CAC1K,AACD,6BAA8B,eAAe,eAAe,CAC3D,AACD,gBAAiB,MAAM,QAAQ,OAAO,eAAe,WAAW,YAAY,sBAAsB,YAAc,CAC/G,AACD,iCAAkC,SAAS,CAC1C,AACD,wCAAyC,cAAc,CACtD,AAED,yBACI,gBAAiB,AACjB,iBAAkB,AAClB,iBAAmB,CACtB,AACD,uBACI,YAAc,CACjB","file":"bjxq.vue","sourcesContent":["\n.cs-bjxq-dailog{\r\n    top:108px;\r\n    right: 0px;\r\n    position: absolute;\r\n    background: #fff;\r\n    border-radius: 2px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,.3);\r\n    box-sizing: border-box;\n}\n.cs--bjxq-dialog__footer{\r\n    bottom: 0px;\r\n    position: absolute;\r\n    right: 20px;\n}\n.cs-bjxq-dailog__body{\r\n    margin-bottom: 60px;\r\n    overflow-x: hidden;\r\n    overflow-y:auto\n}\n.cs-bjxq-dailog .fcs_video{\r\n    /* height: 200px; */\n}\n.fancy-box-image-wrapper {top:0;right:0;left:0;position:fixed;width:100%;height:100%;z-index:33\n}\n.fancy-box-image-wrapper div {top:0;right:0;left:0;position:absolute;width:100%;height:100%;transform-origin:left top 0;transition:transform .3s cubic-bezier(0.4,0,0.22,1)\n}\n.fancy-box-image-wrapper img {max-width:100%;max-height:100%\n}\n.fancy-box-mask {top:0;right:0;left:0;position:fixed;width:100%;height:100%;background-color:#333;z-index: 9999;\n}\n.fancy-enter,.fancy-leave-active {opacity:0\n}\n.fancy-enter-active,.fancy-leave-active {transition:.2s\n}\r\n/* .cs-index-container .video-js{font-size: 5px} */\n.cs-bjxq-dailog__body h5{\r\n    background: #ccc;\r\n    line-height: 20px;\r\n    padding-left: 10px;\n}\n.cs-bjxq-dailog .image{\r\n    height: 100px;\n}\r\n"],"sourceRoot":""}]);
	
	// exports


/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(314);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/.0.27.3@css-loader/index.js?sourceMap!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-2d4dde3a!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./bjxq.vue", function() {
				var newContent = require("!!../../../node_modules/.0.27.3@css-loader/index.js?sourceMap!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-2d4dde3a!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./bjxq.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(400)
	
	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(728),
	  /* template */
	  __webpack_require__(519),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },

/***/ 519:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow_bjxq),
	      expression: "isShow_bjxq"
	    }],
	    staticClass: "el-dialog__wrapper"
	  }, [_c('div', {
	    staticClass: "cs-bjxq-dailog",
	    style: (_vm.mapStyle)
	  }, [_c('div', {
	    staticClass: "el-dialog__header"
	  }, [_c('span', {
	    staticClass: "el-dialog__title"
	  }, [_vm._v("报警详情")]), _vm._v(" "), _c('div', {
	    staticClass: "el-dialog__headerbtn",
	    on: {
	      "click": _vm.hideBJXQModel
	    }
	  }, [_c('i', {
	    staticClass: "el-dialog__close el-icon el-icon-close"
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "el-dialog__body cs-bjxq-dailog__body",
	    style: (_vm.dialogMainStyle)
	  }, [_c('el-collapse', {
	    model: {
	      value: (_vm.activeNames),
	      callback: function($$v) {
	        _vm.activeNames = $$v
	      },
	      expression: "activeNames"
	    }
	  }, [_c('el-collapse-item', {
	    attrs: {
	      "title": "报警人信息",
	      "name": "1"
	    }
	  }, [_c('div', [_vm._v("报警人：" + _vm._s(_vm.jqfb_list_detail.alertUserRealname))]), _vm._v(" "), _c('div', [_vm._v("电话：" + _vm._s(_vm.jqfb_list_detail.cellphone))]), _vm._v(" "), _c('div', [_vm._v("报警时间：" + _vm._s(_vm.jqfb_list_detail.alertTime))])]), _vm._v(" "), _c('el-collapse-item', {
	    attrs: {
	      "title": "警情信息",
	      "name": "3"
	    }
	  }, [_c('div', [_vm._v("报警地点：" + _vm._s(_vm.jqfb_list_detail.address))]), _vm._v(" "), _c('div', [_vm._v("报警内容：" + _vm._s(_vm.jqfb_list_detail.description))])]), _vm._v(" "), _c('el-collapse-item', {
	    attrs: {
	      "title": "图像信息",
	      "name": "4"
	    }
	  }, [_c('el-row', {
	    attrs: {
	      "gutter": 10
	    }
	  }, _vm._l((_vm.imageList), function(n, index) {
	    return (n.url ? true : false) ? _c('el-col', {
	      attrs: {
	        "span": 6,
	        "data-index": index
	      }
	    }, [_c('img', {
	      staticClass: "image",
	      attrs: {
	        "src": n.url
	      },
	      on: {
	        "click": function($event) {
	          _vm.open($event)
	        }
	      }
	    })]) : _vm._e()
	  })), _vm._v(" "), _c('el-row', _vm._l((_vm.songList), function(song, index) {
	    return (song ? true : false) ? _c('el-col', [_c('audio', {
	      ref: "audios",
	      refInFor: true,
	      attrs: {
	        "controls": "false"
	      }
	    }, [_c('source', {
	      attrs: {
	        "src": song
	      }
	    })])]) : _vm._e()
	  })), _vm._v(" "), _c('el-row', {
	    attrs: {
	      "gutter": 10
	    }
	  }, _vm._l((_vm.videoList), function(video, index) {
	    return (video ? true : false) ? _c('el-col', {
	      attrs: {
	        "span": 6
	      }
	    }, [(video ? true : false) ? _c('span', {
	      on: {
	        "click": function($event) {
	          _vm.playvideo(video)
	        }
	      }
	    }, [_vm._v("视频" + _vm._s(1 + index))]) : _vm._e()]) : _vm._e()
	  }))], 1), _vm._v(" "), _c('el-collapse-item', {
	    attrs: {
	      "title": "处理流程",
	      "name": "5"
	    }
	  }, _vm._l((_vm.jqfb_list_detail.logs), function(log, index) {
	    return _c('div', {
	      staticClass: "el-steps is-vertical"
	    }, [_c('div', {
	      staticClass: "el-step is-vertical",
	      staticStyle: {
	        "margin-right": "0px",
	        "min-height": "100px"
	      }
	    }, [_c('div', {
	      staticClass: "el-step__head is-finish is-text",
	      staticStyle: {
	        "width": "30px"
	      }
	    }, [_c('div', {
	      staticClass: "el-step__line is-vertical",
	      staticStyle: {
	        "margin-right": "0px"
	      }
	    }, [_c('i', {
	      staticClass: "el-step__line-inner",
	      staticStyle: {
	        "transition-delay": "0ms",
	        "height": "50%"
	      }
	    })]), _vm._v(" "), _c('span', {
	      staticClass: "el-step__icon"
	    }, [_c('div', [_vm._v(_vm._s(index + 1))])])]), _vm._v(" "), _c('div', {
	      staticClass: "el-step__main",
	      staticStyle: {
	        "margin-left": "0px"
	      }
	    }, [_c('div', {
	      staticClass: "el-step__title is-finish"
	    }, [_vm._v(_vm._s(log.createTime))]), _vm._v(" "), _c('div', {
	      staticClass: "el-step__description is-finish"
	    }, [_c('div', [_vm._v(_vm._s(log.realname))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(log.title))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(log.description))])])])])])
	  }))], 1)], 1), _vm._v(" "), _c('div', {
	    staticClass: "el-dialog__footer cs--bjxq-dialog__footer"
	  }, [_c('div', {
	    staticClass: "dialog-footer"
	  }, [(false) ? _c('button', {
	    staticClass: "el-button el-button--default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.showsblb
	    }
	  }, [_c('span', [_vm._v("上报")])]) : _vm._e(), _vm._v(" "), (false) ? _c('button', {
	    staticClass: "el-button el-button--default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.showwplb
	    }
	  }, [_c('span', [_vm._v("委派")])]) : _vm._e(), _vm._v(" "), (_vm.jqfb_list_detail.status == 0) ? _c('button', {
	    staticClass: "el-button el-button--default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.showjcjb
	    }
	  }, [_c('span', [_vm._v("解除警报")])]) : _vm._e(), _vm._v(" "), (false) ? _c('button', {
	    staticClass: "el-button el-button--default",
	    attrs: {
	      "type": "button"
	    }
	  }, [_c('span', [_vm._v("视频通话")])]) : _vm._e()])])])])
	},staticRenderFns: []}

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vueFancybox = __webpack_require__(40);
	
	var _vueFancybox2 = _interopRequireDefault(_vueFancybox);
	
	var _vueVideoPlayer = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	
	        mapHeight: {
	            type: Number,
	            default: 600
	        },
	        isShow_bjxq: {
	            type: Boolean,
	            default: false
	        }
	    },
	    components: {
	        videoPlayer: _vueVideoPlayer.videoPlayer
	    },
	    close: function close() {
	        console.log("myclose");
	    },
	    data: function data() {
	        return {
	            dialogMainHeight: 500,
	            audio_state: false,
	            mapStyle: {
	                width: '40%',
	                height: this.mapHeight + 'px'
	            },
	            activeNames: ['1', "2"],
	            jqfb_list_detail: {},
	            dialog_size: "large",
	            formLabelWidth: '120px',
	            imageList: [],
	            songList: [],
	            videoList: []
	        };
	    },
	    methods: {
	        hideBJXQModel: function hideBJXQModel() {
	            var Bus = global.eventHub;
	            Bus.$emit('doto_hide_bjxq');
	        },
	        showjcjb: function showjcjb() {
	            var Bus = global.eventHub;
	            Bus.$emit('doto_show_jcjb', this.jqfb_list_detail.alertId, this.jqfb_list_detail.alertCategory, this.jqfb_list_detail.remark);
	        },
	        showsblb: function showsblb() {
	            this.$emit('doto_showsblb');
	        },
	        showwplb: function showwplb() {
	            this.$emit('doto_showwplb');
	        },
	        addMarker: function addMarker(point, src) {
	            var BMap = this.$BMap2;
	            var marker = new BMap.Marker(point, { icon: new BMap.Icon(src, new BMap.Size(42, 50)) });
	
	            this.map.addOverlay(marker);
	        },
	        createJQMap: function createJQMap() {
	            var BMap = this.$BMap2;
	            var map2 = new BMap.Map("current_position");
	            var local = this.jqfb_list_detail.location.split(",");
	            map2.centerAndZoom(new BMap.Point(local[0], local[1]), 15);
	            map2.enableScrollWheelZoom();
	            this.map = map2;
	            this.addMarker(new BMap.Point(local[0], local[1]), "./src/img/icon/jingqing1.png");
	        },
	        initSmallMap: function initSmallMap() {
	
	            this.$BMap2 = global.BMap;
	            console.log("==========");
	            console.log(this.$BMap2);
	        },
	        open: function open(e) {
	            (0, _vueFancybox2.default)(e.target, this.imageList);
	        },
	
	        playvideo: function playvideo(video) {
	            var Bus = global.eventHub;
	
	            if (video) {
	                Bus.$emit('doto_show_jqshiping', video);
	            }
	        }
	    },
	    created: function created() {
	        this.dialogMainHeight = this.mapHeight - 100;
	        this.dialogMainStyle = {
	            height: this.dialogMainHeight + 'px'
	        };
	        var that = this;
	        var Bus = global.eventHub;
	        Bus.$on('detail_bjxq', function (msg) {
	            if (msg) {
	                that.jqfb_list_detail = msg;
	                if (msg.imgs) {
	                    var imgarr = [];
	                    var arr = msg.imgs.split(",");
	                    arr.forEach(function (value, index, array) {
	                        imgarr.push({ width: 900, height: 675, url: value });
	                    });
	                    that.imageList = imgarr;
	                }
	                if (msg.videos) {
	                    that.videoList = msg.videos.split(",");
	                } else {
	                    that.videoList = [];
	                }
	                if (msg.voices) {
	                    that.songList = msg.voices.split(",");
	                } else {
	                    that.songList = [];
	                }
	            }
	        });
	    },
	    mounted: function mounted() {}
	
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }

});
//# sourceMappingURL=21.0b49b666ca51890ac742.js.map