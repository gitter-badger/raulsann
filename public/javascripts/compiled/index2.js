// Generated by CoffeeScript 1.3.1
(function() {
  var log;

  log = console.log.bind(console);

  window.CanvasManager = {
    mutex: false,
    ctx: null,
    canvas: null,
    height: 0,
    width: 0,
    inside: false,
    initCanvas: function(id) {
      var brush, canvas, ctx, height, inside, self, width;
      self = this;
      this.canvas = canvas = document.getElementById("" + id);
      canvas.clear = true;
      log('ppppppppp=========');
      canvas.width = $("#" + id).parent().outerWidth(true);
      canvas.height = $("#" + id).parent().outerHeight(true);
      this.ctx = ctx = canvas.getContext("2d");
      this.height = height = canvas.height;
      this.width = width = canvas.width;
      this.brush = brush = new sketchy(ctx);
      this.insid = inside = false;
      $(window).mouseenter(function(event) {
        self.inside = true;
        return self.brush.strokeStart(event.pageX, event.pageY);
      });
      $(window).mousemove(function(event) {
        var x, y, _ref;
        _ref = self.getPosition(event), x = _ref[0], y = _ref[1];
        log(inside);
        log(self.brush);
        if (inside) {
          return self.brush.stroke(event.pageX, event.pageY);
        } else {
          self.inside = true;
          return self.brush.strokeStart(event.pageX, event.pageY);
        }
      });
      return $(window).mouseout(function(event) {
        return self.brush.strokeEnd();
      });
    },
    getPosition: function(e) {
      var x, y;
      if (e.pageX || e.pageY) {
        x = e.pageX;
        y = e.pageY;
      } else {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      x -= this.canvas.offsetLeft;
      y -= this.canvas.offsetTop;
      return [x, y];
    }
  };

  $(document).ready(function() {
    return window.CanvasManager.initCanvas("bg_header");
  });

  log = console.log.bind(console);

  window.CanvasManager = {
    mutex: false,
    ctx: null,
    canvas: null,
    height: 0,
    width: 0,
    inside: false,
    initCanvas: function(id) {
      var brush, canvas, ctx, height, inside, self, width;
      self = this;
      this.canvas = canvas = document.getElementById("" + id);
      canvas.clear = true;
      log('ppppppppp=========');
      canvas.width = $("#" + id).parent().outerWidth(true);
      canvas.height = $("#" + id).parent().outerHeight(true);
      this.ctx = ctx = canvas.getContext("2d");
      this.height = height = canvas.height;
      this.width = width = canvas.width;
      this.brush = brush = new sketchy(ctx);
      this.insid = inside = false;
      $(window).mouseenter(function(event) {
        self.inside = true;
        return self.brush.strokeStart(event.pageX, event.pageY);
      });
      $(window).mousemove(function(event) {
        var x, y, _ref;
        _ref = self.getPosition(event), x = _ref[0], y = _ref[1];
        log(inside);
        log(self.brush);
        if (inside) {
          return self.brush.stroke(event.pageX, event.pageY);
        } else {
          self.inside = true;
          return self.brush.strokeStart(event.pageX, event.pageY);
        }
      });
      return $(window).mouseout(function(event) {
        return self.brush.strokeEnd();
      });
    },
    getPosition: function(e) {
      var x, y;
      if (e.pageX || e.pageY) {
        x = e.pageX;
        y = e.pageY;
      } else {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      x -= this.canvas.offsetLeft;
      y -= this.canvas.offsetTop;
      return [x, y];
    }
  };

  $(document).ready(function() {
    return window.CanvasManager.initCanvas("bg_header");
  });

}).call(this);
