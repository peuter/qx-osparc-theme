(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Theme.define("osparc.theme.osparcdark.Font", {
    fonts: {
      "default": {
        size: 13,
        family: ["sans-serif"],
        color: "text",
        sources: [{
          family: "Roboto",
          source: ["resource/osparc/font/roboto-v18-latin_latin-ext-regular.eot", "resource/osparc/font/roboto-v18-latin_latin-ext-regular.woff2", "resource/osparc/font/roboto-v18-latin_latin-ext-regular.woff", "resource/osparc/font/roboto-v18-latin_latin-ext-regular.ttf"]
        }]
      },

      "bold": {
        size: 13,
        family: ["sans-serif"],
        bold: true,
        color: "text",
        sources: [{
          family: "Roboto",
          source: ["resource/osparc/font/roboto-v18-latin_latin-ext-700.eot", "resource/osparc/font/roboto-v18-latin_latin-ext-700.woff2", "resource/osparc/font/roboto-v18-latin_latin-ext-700.woff", "resource/osparc/font/roboto-v18-latin_latin-ext-700.ttf"]
        }]
      },

      "headline": {
        size: 24,
        family: ["sans-serif"],
        color: "text",
        sources: [{
          family: "Roboto",
          source: ["resource/osparc/font/roboto-v18-latin_latin-ext-regular.eot", "resource/osparc/font/roboto-v18-latin_latin-ext-regular.woff2", "resource/osparc/font/roboto-v18-latin_latin-ext-regular.woff", "resource/osparc/font/roboto-v18-latin_latin-ext-regular.ttf"]
        }]
      },

      "small": {
        size: 12,
        family: ["sans-serif"],
        color: "text",
        sources: [{
          family: "Roboto",
          source: ["resource/osparc/font/roboto-v18-latin_latin-ext-regular.eot", "resource/osparc/font/roboto-v18-latin_latin-ext-regular.woff2", "resource/osparc/font/roboto-v18-latin_latin-ext-regular.woff", "resource/osparc/font/roboto-v18-latin_latin-ext-regular.ttf"]
        }]
      },

      "monospace": {
        size: 13,
        family: ["monospace"],
        color: "text",
        sources: [{
          family: "Roboto Mono",
          source: ["resource/osparc/font/roboto-mono-v6-latin_latin-ext-regular.eot", "resource/osparc/font/roboto-mono-v6-latin_latin-ext-regular.woff2", "resource/osparc/font/roboto-mono-v6-latin_latin-ext-regular.woff", "resource/osparc/font/roboto-mono-v6-latin_latin-ext-regular.ttf"]
        }]
      }
    }
  });
  osparc.theme.osparcdark.Font.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Font.js.map?dt=1552033884116