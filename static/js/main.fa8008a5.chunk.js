(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={body:"currentweatherdetails_body__3wfSf",currentweatherdetails:"currentweatherdetails_currentweatherdetails__3fRHn",lines:"currentweatherdetails_lines__1LY9S",topic:"currentweatherdetails_topic__1x09H",text:"currentweatherdetails_text__3bqSf",twotext:"currentweatherdetails_twotext__1xJzK"}},2:function(e,t,a){e.exports={body:"hourlyweatherdetails_body__Tvb0z",lines:"hourlyweatherdetails_lines__3BTZV",topic:"hourlyweatherdetails_topic__1Lu_B",section:"hourlyweatherdetails_section__hLDD_",eachSection:"hourlyweatherdetails_eachSection__3Sxyq",eachSectionclicked:"hourlyweatherdetails_eachSectionclicked__37TTY",ExtraDetails:"hourlyweatherdetails_ExtraDetails__RFsmW",iconsection:"hourlyweatherdetails_iconsection__GTmDQ",smallicon:"hourlyweatherdetails_smallicon__3tIl1",icon:"hourlyweatherdetails_icon__zGqC_",text:"hourlyweatherdetails_text__1sC3K"}},22:function(e,t,a){e.exports={AppContainer:"AppContainer_AppContainer__2NJBC"}},24:function(e,t,a){e.exports=a(68)},29:function(e,t,a){},30:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),l=a.n(i),c=(a(29),a(4)),o=a(5),s=a(7),u=a(6),d=a(8),m=(a(30),a(22)),h=a.n(m),p=a(9),w=a.n(p),v=a(23),f=a.n(v),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).tempModal=r.a.createRef(),a.description=r.a.createRef(),a.maxmixtemp=r.a.createRef(),a.handleScroll=function(){window.scrollY>.1*window.innerWidth?(a.tempModal.current.style.width="100px",a.tempModal.current.style.height="100px",a.description.current.style.opacity="0",a.maxmixtemp.current.style.opacity="0"):(a.tempModal.current.style.width="250px",a.tempModal.current.style.height="250px",a.description.current.style.opacity="1",a.maxmixtemp.current.style.opacity="1")},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=a(35).getName;return r.a.createElement("div",null,this.props.weatherData?r.a.createElement("div",{ref:this.tempModal,className:w.a.tempModal,style:{color:"rgb(74,140,255)"}},r.a.createElement("div",{ref:this.description,className:w.a.description},r.a.createElement(f.a,{icon:"CLEAR_DAY",color:"rgb(74,140,255)",size:108,animate:!0}),r.a.createElement("br",null),this.props.weatherData.weather.map(function(e){return e.description.charAt(0).toUpperCase()+e.description.slice(1)})),r.a.createElement("div",{className:w.a.temp},(this.props.weatherData.main.temp-273.15).toFixed(2),"\xb0C",r.a.createElement("div",{ref:this.maxmixtemp,className:w.a.maxmixtemp},r.a.createElement("div",null,"\u2191",(this.props.weatherData.main.temp_max-273.15).toFixed(2),"\xb0C"),r.a.createElement("div",null,"\u2193",(this.props.weatherData.main.temp_min-273.15).toFixed(2),"\xb0C"))),r.a.createElement("div",{className:w.a.city},this.props.weatherData.name,", ",e("".concat(this.props.weatherData.sys.country)))):null)}}]),t}(n.Component),E=a(10),g=a.n(E),_=a(1),x=a.n(_),D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"getdatetime",value:function(e){var t=new Date(1e3*e),a=t.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],r=t.getDate(),i="0"+t.getHours(),l="0"+t.getMinutes(),c="0"+t.getSeconds();return r+" "+n+" "+a+" "+i.substr(-2)+":"+l.substr(-2)+":"+c.substr(-2)}},{key:"gettime",value:function(e){var t="am",a=new Date(1e3*e),n="0"+a.getHours(),r="0"+a.getMinutes();return n>12&&(n="0"+(n-12),t="pm"),n.substr(-2)+":"+r.substr(-2)+t}},{key:"render",value:function(){return r.a.createElement("div",{className:x.a.body},r.a.createElement("div",{className:x.a.currentweatherdetails},r.a.createElement("div",{className:x.a.topic},"Humidity"),r.a.createElement("div",{className:x.a.lines}),r.a.createElement("div",{className:x.a.text},this.props.CurrentweatherData.main.humidity," %")),r.a.createElement("div",{className:x.a.currentweatherdetails},r.a.createElement("div",{className:x.a.topic},"Pressure"),r.a.createElement("div",{className:x.a.lines}),r.a.createElement("div",{className:x.a.text},this.props.CurrentweatherData.main.pressure," hPa")),r.a.createElement("div",{className:x.a.currentweatherdetails},r.a.createElement("div",{className:x.a.topic},"Cloudiness"),r.a.createElement("div",{className:x.a.lines}),r.a.createElement("div",{className:x.a.text},this.props.CurrentweatherData.clouds.all,"%")),r.a.createElement("div",{className:x.a.currentweatherdetails},r.a.createElement("div",{className:x.a.topic},"Temperature"),r.a.createElement("div",{className:x.a.lines}),r.a.createElement("div",{className:x.a.twotext},r.a.createElement("div",null,"Min: \u2193",(this.props.CurrentweatherData.main.temp_min-273.15).toFixed(2),"\xb0C"),r.a.createElement("div",null,"Max: \u2191",(this.props.CurrentweatherData.main.temp_max-273.15).toFixed(2),"\xb0C"))),r.a.createElement("div",{className:x.a.currentweatherdetails},r.a.createElement("div",{className:x.a.topic},"Wind"),r.a.createElement("div",{className:x.a.lines}),r.a.createElement("div",{className:x.a.twotext},r.a.createElement("div",null,"Speed: ",this.props.CurrentweatherData.wind.speed," m/sec"),r.a.createElement("div",null,"Deg: ",this.props.CurrentweatherData.wind.deg,"\xb0"))),r.a.createElement("div",{className:x.a.currentweatherdetails},r.a.createElement("div",{className:x.a.twotext},r.a.createElement("div",null,"Sunrise: ",this.gettime(this.props.CurrentweatherData.sys.sunrise)),r.a.createElement("div",null,"Sunset: ",this.gettime(this.props.CurrentweatherData.sys.sunset)))))}}]),t}(n.Component),b=a(2),N=a.n(b),C=a(12),S=a.n(C),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ExtraDetails:[],clicked:!1},a.showExtraDetails=function(e){e===a.state.ExtraDetails?a.setState({clicked:!a.state.clicked}):a.setState({clicked:!0}),a.setState({ExtraDetails:e})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"gettime",value:function(e){var t="am",a=new Date(1e3*e),n="0"+a.getHours(),r="0"+a.getMinutes();return n>12&&(n="0"+(n-12),t="pm"),n.substr(-2)+":"+r.substr(-2)+t}},{key:"getday",value:function(e){var t=new Date(1e3*e);return["Monday","Tuesday","Wednesday","Thrusdy","Friday","Saturday","Sunday"][(0,a(62).get)(new Date(t.getFullYear(),t.getMonth(),t.getDate()),"America/Los_Angeles")]}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:N.a.body},r.a.createElement("div",{className:N.a.topic},"Hourly Forcast"),r.a.createElement("div",{className:N.a.lines}),r.a.createElement("div",{className:N.a.section},this.props.HourlyWeatherData.slice(0,96).map(function(t){return r.a.createElement("div",{className:e.state.clicked&&e.state.ExtraDetails===t?N.a.eachSectionclicked:N.a.eachSection,onClick:function(){return e.showExtraDetails(t)},key:t.dt},r.a.createElement(S.a,{name:"owm",className:N.a.smallicon,iconId:String(t.weather.map(function(e){return e.id})),flip:"horizontal",rotate:"90"}),r.a.createElement("br",null),r.a.createElement("div",null,(t.main.temp-273.15).toFixed(2),"\xb0C"),r.a.createElement("div",null,e.gettime(t.dt)))})),this.state.clicked?r.a.createElement("div",{className:N.a.ExtraDetails},r.a.createElement("div",{className:N.a.iconsection},r.a.createElement(S.a,{className:N.a.icon,name:"owm",iconId:String(this.state.ExtraDetails.weather.map(function(e){return e.id})),flip:"horizontal",rotate:"90"})),r.a.createElement("div",{className:N.a.text},r.a.createElement("div",null,"Temp: ",(this.state.ExtraDetails.main.temp-273.15).toFixed(2),"\xb0C"),r.a.createElement("div",null,"Max Temp: ",(this.state.ExtraDetails.main.temp_max-273.15).toFixed(2),"\xb0C"),r.a.createElement("div",null,"Min Temp: ",(this.state.ExtraDetails.main.temp_min-273.15).toFixed(2),"\xb0C"),r.a.createElement("div",null,"Pressure: ",this.state.ExtraDetails.main.pressure," hPa"),r.a.createElement("div",null,"Humidity: ",this.state.ExtraDetails.main.humidity," %"))):null,r.a.createElement("div",{className:N.a.lines}))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={latitude:null,longitude:null,API_KEY:"9ed5e07cc11f0ef0a18b03f79dde4029",weatherData:{base:"",clouds:{},cod:null,coord:{},dt:null,id:null,main:{},name:"",sys:{},visibility:null,weather:[],length:null,wind:{}},hourlyData:[],dailyData:[]},a.getlocation=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){console.log(e.coords.latitude),a.setState({latitude:e.coords.latitude,longitude:e.coords.longitude},function(){a.getWeather()})})},a.getWeather=function(){g.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a.state.latitude,"&lon=").concat(a.state.longitude,"&APPID=").concat(a.state.API_KEY)).then(function(e){var t=e.data;console.log(t),a.setState({weatherData:t},function(){})}).catch(function(e){console.log(e),a.setState({error:e})}),g.a.get("https://api.openweathermap.org/data/2.5/forecast/hourly?lat=".concat(a.state.latitude,"&lon=").concat(a.state.longitude,"&APPID=").concat(a.state.API_KEY)).then(function(e){var t=e.data.list;console.log(t),a.setState({hourlyData:t},function(){})}).catch(function(e){console.log(e),a.setState({error:e})}),g.a.get("https://api.openweathermap.org/data/2.5/forecast/daily?lat=".concat(a.state.latitude,"&lon=").concat(a.state.longitude,"&cnt=5&APPID=").concat(a.state.API_KEY)).then(function(e){var t=e.data.list;console.log(t),a.setState({dailyData:t},function(){})}).catch(function(e){console.log(e),a.setState({error:e})})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getlocation()}},{key:"render",value:function(){return r.a.createElement("div",{className:h.a.AppContainer},r.a.createElement(y,{weatherData:this.state.weatherData}),r.a.createElement(D,{CurrentweatherData:this.state.weatherData}),r.a.createElement(k,{HourlyWeatherData:this.state.hourlyData}))}}]),t}(n.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null))}}]),t}(n.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/weather-app","/service-worker.js");A?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):O(t,e)})}}()},9:function(e,t,a){e.exports={tempModal:"temperatureModal_tempModal__fja7a",temp:"temperatureModal_temp__3HBas",maxmixtemp:"temperatureModal_maxmixtemp__2JbEq",city:"temperatureModal_city__39b3F",description:"temperatureModal_description__1wMy3"}}},[[24,1,2]]]);
//# sourceMappingURL=main.fa8008a5.chunk.js.map