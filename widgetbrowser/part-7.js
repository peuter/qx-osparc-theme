!function(){var t={dependsOn:{"qx.Class":{usage:"dynamic",require:!0},"widgetbrowser.pages.AbstractPage":{construct:!0,require:!0},"qx.ui.container.Composite":{construct:!0},"qx.ui.layout.Grid":{construct:!0},"qx.ui.tabview.TabView":{},"qx.lang.Function":{},"qx.ui.tabview.Page":{},"qx.ui.layout.VBox":{},"qx.ui.basic.Label":{}}};qx.Bootstrap.executePendingDefers(t),qx.Class.define("widgetbrowser.pages.Tab",{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.constructor.call(this),this.__grid=new qx.ui.container.Composite(new qx.ui.layout.Grid(10,20)),this.add(this.__grid),this.initWidgets()},members:{__grid:null,initWidgets:function(){var t=this._widgets,i=this.__getTabView();i.setBarPosition("top"),this.__grid.add(i,{row:0,column:0}),t.push(i);var e=this.__getTabView();e.setBarPosition("bottom"),this.__grid.add(e,{row:0,column:1}),t.push(e);var a=this.__getTabView();a.setBarPosition("left"),this.__grid.add(a,{row:1,column:0}),t.push(a);var s=this.__getTabView();s.setBarPosition("right"),this.__grid.add(s,{row:1,column:1}),t.push(s)},toggleOverflow:function(t,i){if(i)this.addTabPages(t);else for(var e=t.getChildren(),a=e.length-1;0<=a;a--)t.remove(e[a]);this.addTabPages(t)},__getTabView:function(){var t=new qx.ui.tabview.TabView;return t.toggleOverflow=qx.lang.Function.bind(this.toggleOverflow,this),t.setWidth(400),t.setHeight(200),this.addTabPages(t),t},addTabPages:function(t){var i=new qx.ui.tabview.Page("Layout","icon/16/apps/utilities-terminal.png");i.setLayout(new qx.ui.layout.VBox),i.add(new qx.ui.basic.Label("Layout-Settings…")),t.add(i);var e=new qx.ui.tabview.Page("Notes","icon/16/apps/utilities-notes.png");e.setLayout(new qx.ui.layout.VBox),e.add(new qx.ui.basic.Label("Notes…")),t.add(e);var a=new qx.ui.tabview.Page("Calculator","icon/16/apps/utilities-calculator.png");a.setLayout(new qx.ui.layout.VBox),a.add(new qx.ui.basic.Label("Calculator…")),t.add(a)}}}),widgetbrowser.pages.Tab.$$dbClassInfo=t}();
//# sourceMappingURL=part-7.js.map