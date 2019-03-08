(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "construct": true,
        "require": true
      },
      "qx.log.appender.Native": {},
      "qx.log.appender.Console": {},
      "iconfont.material.Load": {},
      "qx.ui.layout.Dock": {},
      "qx.ui.container.Composite": {},
      "widgetbrowser.view.Header": {},
      "qx.ui.container.Scroll": {},
      "widgetbrowser.view.TabView": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("widgetbrowser.Application", {
    extend: qx.application.Standalone,

    construct: function construct() {
      qx.application.Standalone.constructor.call(this);
    },

    members: {
      __header: null,

      __tabs: null,

      __scroll: null,

      main: function main() {
        widgetbrowser.Application.prototype.main.base.call(this);

        // Enable logging in debug variant
        {
          // support native logging capabilities, e.g. Firebug for Firefox
          qx.log.appender.Native;
          // support additional cross-browser console. Press F7 to toggle visibility
          qx.log.appender.Console;
        }
        iconfont.material.Load;
        var doc = this.getRoot();
        var dockLayout = new qx.ui.layout.Dock();
        var dockLayoutComposite = new qx.ui.container.Composite(dockLayout);
        doc.add(dockLayoutComposite, { edge: 0 });

        this.__header = new widgetbrowser.view.Header();
        dockLayoutComposite.add(this.__header, { edge: "north" });

        var scroll = this.__scroll = new qx.ui.container.Scroll();
        dockLayoutComposite.add(scroll);

        this.__tabs = this._createTabView();
        this.__tabs.set({
          minWidth: 700,
          padding: 15
        });
        scroll.add(this.__tabs);
      },

      _createTabView: function _createTabView() {
        this.__tabs = new widgetbrowser.view.TabView();
        return this.__tabs;
      },

      getScroll: function getScroll() {
        return this.__scroll;
      }
    }
  });
  widgetbrowser.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1552033883672