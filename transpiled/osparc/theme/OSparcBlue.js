(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "osparc.theme.osparcblue.Color": {
        "require": true
      },
      "osparc.theme.osparcdark.Decoration": {
        "require": true
      },
      "osparc.theme.osparcdark.Font": {
        "require": true
      },
      "osparc.theme.osparcdark.Appearance": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Theme.define("osparc.theme.OSparcBlue", {
    title: "OSparc Blue Theme",
    meta: {
      color: osparc.theme.osparcblue.Color,
      decoration: osparc.theme.osparcdark.Decoration,
      font: osparc.theme.osparcdark.Font,
      appearance: osparc.theme.osparcdark.Appearance,
      icon: qx.theme.icon.Tango
    }
  });
  osparc.theme.OSparcBlue.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=OSparcBlue.js.map?dt=1552033883617