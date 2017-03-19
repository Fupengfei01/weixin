webpackJsonp([20,13],{

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

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)(true);
	// imports
	
	
	// module
	exports.push([module.id, ".cs-bjxq-dailog{top:108px;right:0;position:absolute;background:#fff;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.3);box-sizing:border-box}.cs--bjxq-dialog__footer{bottom:0;position:absolute;right:20px}.cs-bjxq-dailog__body{margin-bottom:60px;overflow-x:hidden;overflow-y:auto}.cs-bjxq-hd{padding:0 0 20px}.cs-map-bjxq{width:100%;height:200px}.bjxq-dialog-footer{display:-moz-box;display:-webkit-box;display:box;display:-moz-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;padding:20px 0 0;-ms-flex-pack:end;justify-content:flex-end}.image{width:100%;display:block}.fancy-box-image-wrapper{top:0;right:0;left:0;position:fixed;width:100%;height:100%;z-index:33}.fancy-box-image-wrapper div{top:0;right:0;left:0;position:absolute;width:100%;height:100%;transform-origin:left top 0;transition:transform .3s cubic-bezier(.4,0,.22,1)}.fancy-box-image-wrapper img{max-width:100%;max-height:100%}.fancy-box-mask{top:0;right:0;left:0;position:fixed;width:100%;height:100%;background-color:#333;z-index:9999}.fancy-enter,.fancy-leave-active{opacity:0}.fancy-enter-active,.fancy-leave-active{transition:.2s}", "", {"version":3,"sources":["C:/Users/Administrator/Desktop/demo/vue4/SLS/vue2/src/pages/wlf/bjxq2.vue"],"names":[],"mappings":"AACA,gBAAiB,UAAU,QAAU,kBAAkB,gBAAgB,kBAAkB,oCAAoC,qBAAsB,CAClJ,AACD,yBAA0B,SAAW,kBAAkB,UAAW,CACjE,AACD,sBAAuB,mBAAmB,kBAAkB,eAAe,CAC1E,AACD,YAAY,gBAAkB,CAC7B,AACD,aAAa,WAAY,YAAc,CACtC,AACD,oBAAoB,iBAAkB,AAAC,oBAAqB,AAAE,YAAa,kBAAmB,oBAAqB,aAAc,uBAAwB,mBAAoB,AAAE,mBAAoB,AAAE,eAAgB,uBAAwB,mBAAoB,iBAAkB,kBAAkB,wBAAyB,CAC7T,AACD,OAAQ,WAAW,aAAc,CAChC,AACD,yBAA0B,MAAM,QAAQ,OAAO,eAAe,WAAW,YAAY,UAAU,CAC9F,AACD,6BAA8B,MAAM,QAAQ,OAAO,kBAAkB,WAAW,YAAY,4BAA4B,iDAAmD,CAC1K,AACD,6BAA8B,eAAe,eAAe,CAC3D,AACD,gBAAiB,MAAM,QAAQ,OAAO,eAAe,WAAW,YAAY,sBAAsB,YAAc,CAC/G,AACD,iCAAkC,SAAS,CAC1C,AACD,wCAAyC,cAAc,CACtD","file":"bjxq2.vue","sourcesContent":["\n.cs-bjxq-dailog {top:108px;right:0px;position:absolute;background:#fff;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.3);box-sizing:border-box;\n}\n.cs--bjxq-dialog__footer {bottom:0px;position:absolute;right:20px;\n}\n.cs-bjxq-dailog__body {margin-bottom:60px;overflow-x:hidden;overflow-y:auto\n}\n.cs-bjxq-hd{padding: 0 0 20px;\n}\n.cs-map-bjxq{width: 100%;height: 200px;\n}\n.bjxq-dialog-footer{display: -moz-box; display: -webkit-box;  display: box;display: -moz-flex;display: -ms-flexbox;display: flex;-ms-flex-direction: row;flex-direction: row;  -ms-flex-wrap: wrap;  flex-wrap: wrap;-ms-flex-flow: row wrap;flex-flow: row wrap;padding: 20px 0 0;-ms-flex-pack:end;justify-content:flex-end;\n}\n.image {width:100%;display:block;\n}\n.fancy-box-image-wrapper {top:0;right:0;left:0;position:fixed;width:100%;height:100%;z-index:33\n}\n.fancy-box-image-wrapper div {top:0;right:0;left:0;position:absolute;width:100%;height:100%;transform-origin:left top 0;transition:transform .3s cubic-bezier(0.4,0,0.22,1)\n}\n.fancy-box-image-wrapper img {max-width:100%;max-height:100%\n}\n.fancy-box-mask {top:0;right:0;left:0;position:fixed;width:100%;height:100%;background-color:#333;z-index: 9999;\n}\n.fancy-enter,.fancy-leave-active {opacity:0\n}\n.fancy-enter-active,.fancy-leave-active {transition:.2s\n}\r\n\r\n"],"sourceRoot":""}]);
	
	// exports


/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(329);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/.0.27.3@css-loader/index.js?sourceMap!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7c859268!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./bjxq2.vue", function() {
				var newContent = require("!!../../../node_modules/.0.27.3@css-loader/index.js?sourceMap!../../../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7c859268!../../../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./bjxq2.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(417)
	
	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(729),
	  /* template */
	  __webpack_require__(539),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },

/***/ 539:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "cs-bjxq2-page",
	    style: (_vm.mapStyle)
	  }, [_c('div', {
	    staticClass: "cs-bjxq-hd"
	  }, [_c('span', {
	    staticClass: "el-dialog__title"
	  }, [_vm._v("报警详情")]), _vm._v(" "), _c('div', {
	    staticClass: "el-dialog__headerbtn",
	    on: {
	      "click": _vm.hideModel
	    }
	  }, [_c('i', {
	    staticClass: "el-dialog__close el-icon el-icon-close"
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "cs-collapse-main"
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
	      "title": "位置信息",
	      "name": "2"
	    }
	  }, [_c('div', {
	    staticClass: "cs-map-bjxq",
	    attrs: {
	      "id": "current_position"
	    }
	  })]), _vm._v(" "), _c('el-collapse-item', {
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
	      staticClass: "cs-box el-step is-vertical",
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
	    staticClass: "bjxq-dialog-footer"
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
	  }, [_c('span', [_vm._v("视频通话")])]) : _vm._e()])])
	},staticRenderFns: []}

/***/ },

/***/ 729:
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
	        jqfb_list_detail: {
	            type: Object,
	            default: null
	        },
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
	
	            mapStyle: {
	                width: '100%',
	                height: this.mapHeight - 80 + 'px'
	            },
	            activeNames: ['1', '2'],
	
	            dialog_size: "large",
	            formLabelWidth: '120px',
	            imageList: [],
	            songList: [],
	            videoList: []
	        };
	    },
	    methods: {
	        hideModel: function hideModel() {
	            this.$emit('hidden_bjxq');
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
	            var that = this;
	            var BMap = this.$BMap2;
	            var convertor = new BMap.Convertor();
	            var pointArr = [];
	            pointArr.push(point);
	            convertor.translate(pointArr, 3, 5, translateCallback);
	            function translateCallback(data) {
	                if (data.status === 0) {
	                    var marker = new BMap.Marker(data.points[0], { icon: new BMap.Icon(src, new BMap.Size(21, 25)) });
	                    var map2 = new BMap.Map("current_position");
	                    map2.centerAndZoom(data.points[0], 15);
	                    map2.enableScrollWheelZoom();
	                    that.map = map2;
	                    that.map.addOverlay(marker);
	                }
	            }
	        },
	        createJQMap: function createJQMap() {
	            var BMap = this.$BMap2;
	            var local = this.jqfb_list_detail.location.split(",");
	            this.addMarker(new BMap.Point(local[0], local[1]), "./src/img/icon/jingqing1.png");
	        },
	        initSmallMap: function initSmallMap() {
	
	            this.$BMap2 = global.BMap;
	
	            this.createJQMap();
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
	    },
	    mounted: function mounted() {
	        this.initSmallMap();
	        var that = this;
	        var msg = this.jqfb_list_detail;
	        var obj = { width: 900, height: 675 };
	        if (msg.imgs) {
	            var arr = msg.imgs.split(",");
	            arr.forEach(function (value, index, array) {
	                that.imageList.push({ width: 900, height: 675, url: value });
	            });
	        }
	        if (msg.videos) {
	            that.videoList = msg.videos.split(",");
	        }
	        if (msg.voices) {
	            that.songList = msg.voices.split(",");
	            console.log(that.songList);
	        }
	    },
	    watch: {
	        jqfb_list_detail: function jqfb_list_detail() {
	            this.initSmallMap();
	            var imgarr = [];
	            var that = this;
	            var msg = this.jqfb_list_detail;
	            var obj = { width: 900, height: 675 };
	            if (msg.imgs) {
	                var arr = msg.imgs.split(",");
	                arr.forEach(function (value, index, array) {
	                    imgarr.push({ width: 900, height: 675, url: value });
	                });
	            }
	            that.imageList = imgarr;
	            if (msg.videos) {
	                that.videoList = msg.videos.split(",");
	            } else {
	                that.videoList = [];
	            }
	            if (msg.voices) {
	                that.songList = msg.voices.split(",");
	                console.log(that.songList);
	            } else {
	                that.songList = [];
	            }
	        }
	    }
	
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }

});
//# sourceMappingURL=20.72159e47815255b28eb4.js.map