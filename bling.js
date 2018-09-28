// Bling
(function(global) {
  function bling(el, conf) {
    // 检查bling是否仍在运行
    if (el.settedBling) {
      return
    }
    conf = conf || {};
    var halfCycle = conf.duration || 300;
    var eventName = conf.event;
    var middleClass = conf.middle || 'bling-middle';
    var shining = conf.shining;
    // 记录动画class
    el.middleClass = middleClass;
    el.addEventListener(eventName || 'click', function() {
      // 检查bling是否仍在运行
      if (el.settedBling) {
        return
      }
      el.settedBling = true;
      el.classList.add(middleClass);
      if (shining) {
        el.blingtimer = setInterval(function() {
          el.classList.toggle(middleClass);
        }, halfCycle)
      } else {
        setTimeout(function() {
          el.settedBling = false;
          el.classList.remove(middleClass);
        }, halfCycle)
      }
    })
  }
  bling.stopshining = function(el) {
    clearInterval(el.blingtimer)
    el.settedBling = false;
    el.classList.remove(el.middleClass);
  }
  global.bling = bling;
})(window)