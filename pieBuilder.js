'use strict';

var pie = null;
var d3pieSource = null;
var d3pieData = null;
var d3pieDataTotal = null;

function clearPie() {
  if(pie && pie.destroy) pie.destroy();
  pie = null;
  d3pieSource = null;
  d3pieData = null;
  d3pieDataTotal = null;
}

function makePie(country) {
  if(pie) clearPie();

  // sort data for a country and assign colors
  var colors = ["#f30000","#0600f3","#00b109","#14e4b4","#0fe7fb","#67f200","#ff7e00","#8fe4fa","#ff5300","#640000","#3854d1","#d00ed8","#7890ff","#01664d","#04231b","#e9f117","#f3228e","#7ce8ca","#ff5300","#ff5300","#7eff30","#9a8cf6","#79aff9","#bfbfbf","#56b510","#00e2f6","#ff4141","#61ff41"];
  d3pieSource = csvData.countryCategories.filter(cat => cat[1] === currentCountryName);
  if(!d3pieSource.length) {
    return;
  }
  d3pieData = d3pieSource.map(item => {
    return {
      "label": item[2],
      "value": item[0]
    }
  });
  d3pieData.sort((a,b) => parseFloat(b.value) - parseFloat(a.value));
  d3pieData.forEach((obj, idx) => obj.color = colors[idx] || '#ff000')
  d3pieDataTotal = d3pieData.reduce((accum, item) => {
    accum += parseFloat(item.value);
    return accum;
  }, 0)

  pie = new d3pie("pieChart", {
    "header": {
      "title": {
        "text": country + " Unicorn Valuations: $" + d3pieDataTotal.toFixed(1) + "B",
        "fontSize": 36,
        "font": "open sans",
        "color": "#FFF"
      },
      "subtitle": {
        "color": "#999999",
        "fontSize": 12,
        "font": "open sans"
      },
      "location": "top-left",
      "titleSubtitlePadding": 9
    },
    "footer": {
      "color": "#999999",
      "fontSize": 10,
      "font": "open sans",
      "location": "bottom-left"
    },
    "size": {
      "canvasHeight": 700,
      "canvasWidth": 700,
      "pieOuterRadius": "70%"
    },
    "data": {
      "sortOrder": "value-desc",
      "content": d3pieData
      // "content": [
      //   {
      //     "label": "JavaScript",
      //     "value": 264131,
      //     "color": "#f30000"
      //   },
      //   {
      //     "label": "Ruby",
      //     "value": 218812,
      //     "color": "#0600f3"
      //   },
      //   {
      //     "label": "Java",
      //     "value": 157618,
      //     "color": "#00b109"
      //   },
      //   {
      //     "label": "PHP",
      //     "value": 114384,
      //     "color": "#14e4b4"
      //   },
      //   {
      //     "label": "Python",
      //     "value": 95002,
      //     "color": "#0fe7fb"
      //   },
      //   {
      //     "label": "C+",
      //     "value": 78327,
      //     "color": "#67f200"
      //   },
      //   {
      //     "label": "C",
      //     "value": 67706,
      //     "color": "#ff7e00"
      //   },
      //   {
      //     "label": "Objective-C",
      //     "value": 36344,
      //     "color": "#8fe4fa"
      //   },
      //   {
      //     "label": "Shell",
      //     "value": 28561,
      //     "color": "#ff5300"
      //   },
      //   {
      //     "label": "Cobol",
      //     "value": 24131,
      //     "color": "#640000"
      //   },
      //   {
      //     "label": "C#",
      //     "value": 100,
      //     "color": "#3854d1"
      //   },
      //   {
      //     "label": "Coldfusion",
      //     "value": 68,
      //     "color": "#d00ed8"
      //   },
      //   {
      //     "label": "Fortran",
      //     "value": 218812,
      //     "color": "#7890ff"
      //   },
      //   {
      //     "label": "Coffeescript",
      //     "value": 157618,
      //     "color": "#01664d"
      //   },
      //   {
      //     "label": "Node",
      //     "value": 114384,
      //     "color": "#04231b"
      //   },
      //   {
      //     "label": "Basic",
      //     "value": 95002,
      //     "color": "#e9f117"
      //   },
      //   {
      //     "label": "Cola",
      //     "value": 36344,
      //     "color": "#f3228e"
      //   },
      //   {
      //     "label": "Perl",
      //     "value": 32170,
      //     "color": "#7ce8ca"
      //   },
      //   {
      //     "label": "Dart",
      //     "value": 28561,
      //     "color": "#ff5300"
      //   },
      //   {
      //     "label": "Go",
      //     "value": 264131,
      //     "color": "#ff5300"
      //   },
      //   {
      //     "label": "Groovy",
      //     "value": 218812,
      //     "color": "#7eff30"
      //   },
      //   {
      //     "label": "Processing",
      //     "value": 157618,
      //     "color": "#9a8cf6"
      //   },
      //   {
      //     "label": "Smalltalk",
      //     "value": 114384,
      //     "color": "#79aff9"
      //   },
      //   {
      //     "label": "Scala",
      //     "value": 95002,
      //     "color": "#bfbfbf"
      //   },
      //   {
      //     "label": "Visual Basic",
      //     "value": 78327,
      //     "color": "#56b510"
      //   },
      //   {
      //     "label": "Scheme",
      //     "value": 67706,
      //     "color": "#00e2f6"
      //   },
      //   {
      //     "label": "Rust",
      //     "value": 36344,
      //     "color": "#ff4141"
      //   },
      //   {
      //     "label": "FoxPro",
      //     "value": 32170,
      //     "color": "#61ff41"
      //   }
      // ]
    },
    "labels": {
      "outer": {
        "pieDistance": 32
      },
      "inner": {
        "hideWhenLessThanPercentage": 3
      },
      "mainLabel": {
        "fontSize": 16,
        "color": "#FFF",
      },
      "percentage": {
        "color": "#ffffff",
        "fontSize": 16,
        "decimalPlaces": 0
      },
      "value": {
        "color": "#adadad",
        "fontSize": 11
      },
      "lines": {
        "enabled": true
      },
      "truncation": {
        "enabled": true
      }
    },
    "effects": {
      "pullOutSegmentOnClick": {
        "effect": "linear",
        "speed": 400,
        "size": 60
      }
    },
    "misc": {
      "gradient": {
        "enabled": true,
        "percentage": 100
      }
    },
    "callbacks": {
      "onMouseoverSegment": null,
      "onMouseoutSegment": null,
      "onClickSegment": (seg) => {

        if(seg.expanded) {
          var myNode = document.getElementById("bottom-right");
          while (myNode.firstChild) {
              myNode.removeChild(myNode.firstChild);
          }
        }
        else {
          let fullPie = csvData.data[currentCountryName];
          let sorted = fullPie.filter(entry => entry.category === seg.data.label);
          let strings = sorted.reduce((accum,entry) => {
            return accum + `<br><strong>$${entry.val} ${entry.name}</strong> ${entry.date} ${entry.investors}`
          }, `<div id="title">${sorted[0].category}</div><br>`)

          var div = document.createElement("div");
          div.innerHTML = strings; 
          document.getElementById("bottom-right").appendChild(div);
        }
      }
      }
    });
  }
