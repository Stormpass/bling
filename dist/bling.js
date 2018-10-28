// Bling
;(function(global) {
  function bling(conf) {
    if(!conf || typeof conf !== 'object') return
    var el;
    if(bling._isDOM(conf)){
      el = conf
    } else {
      el = conf.el;
    }
    if (el.settedBling) {
      bling.stopLoop(el);
    }
    conf.animationProperty = conf.animationProperty || 'all'
    conf.halfCycle = Number(conf.halfCycle || 300);
    conf.edgeClass = conf.edgeClass || 'bling-middle';
    conf.animationFunction = conf.animationFunction || 'ease-in-out';
    conf.animationDelay = Number(conf.animationDelay || 0);
    // 记录动画class
    el.dataset.edgeClass = conf.edgeClass;
    // 设置动画时长
    el.style.setProperty(
      'transition',
      [
        conf.animationProperty,
        conf.halfCycle / 1000 + 's', 
        conf.animationFunction ,
        conf.animationDelay / 1000 + 's'
      ].join(' ')
    );
    conf.event
    ? el['on' + conf.event] = function() {
      bling._startAnimation(el,conf);
    }
    : bling._startAnimation(el,conf)
  }
  bling.stopLoop = function(el) {
    clearInterval(el.dataset.blingtimer)
    el.settedBling = false;
    el.classList.remove(el.dataset.edgeClass);
  }
  bling._isDOM = function(obj){
    return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
  }
  bling._startAnimation = function(el, config){
    el.settedBling = true;
    el.classList.add(el.dataset.edgeClass);
    if (config.loop) {
      el.dataset.blingtimer = setInterval(function() {
        el.classList.toggle(el.dataset.edgeClass);
      }, config.halfCycle + (config.animationDelay || 0));
    } else {
      setTimeout(function() {
        el.settedBling = false;
        el.classList.remove(el.dataset.edgeClass);
      }, config.halfCycle + (config.animationDelay || 0));
    }
  }
  // 创建默认的css
  ;(function(){
    var style = document.createElement('style');
    style.innerHTML = '.bling-middle{transform: scale3d(1.2,1.2,1)}';
    document.getElementsByTagName('head')[0].appendChild(style);
  })()

  global.Bling = bling;

})(window)