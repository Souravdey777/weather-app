(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={body:"currentweatherdetails_body__3wfSf",currentweatherdetails:"currentweatherdetails_currentweatherdetails__3fRHn",lines:"currentweatherdetails_lines__1LY9S",topic:"currentweatherdetails_topic__1x09H",text:"currentweatherdetails_text__3bqSf"}},18:function(e,t,a){e.exports={AppContainer:"AppContainer_AppContainer__2NJBC"}},21:function(e,t,a){e.exports=a(52)},26:function(e,t,a){},27:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),c=a.n(i),o=(a(26),a(3)),l=a(4),s=a(6),d=a(5),u=a(7),m=(a(27),a(18)),p=a.n(m),h=a(8),w=a.n(h),v=a(19),f=a.n(v),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).tempModal=r.a.createRef(),a.description=r.a.createRef(),a.icon=r.a.createRef(),a.handleScroll=function(){window.scrollY>30?(a.tempModal.current.style.width="100px",a.tempModal.current.style.height="100px",a.description.current.style.opacity="0",a.icon.current.style.opacity="0"):(a.tempModal.current.style.width="250px",a.tempModal.current.style.height="250px",a.description.current.style.opacity="1",a.icon.current.style.opacity="1")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.weatherData?r.a.createElement("div",{ref:this.tempModal,className:w.a.tempModal,style:{color:"rgb(198, 102, 0)"}},r.a.createElement("div",{ref:this.icon,className:w.a.description},r.a.createElement(f.a,{icon:"CLOUDY",color:"rgb(198, 102, 0)",size:64,animate:!0})),r.a.createElement("div",{ref:this.description,className:w.a.description},this.props.weatherData.weather.map(function(e){return e.description.charAt(0).toUpperCase()+e.description.slice(1)})),r.a.createElement("div",{className:w.a.temp},(this.props.weatherData.main.temp-273.15).toFixed(2),"\xb0C"),r.a.createElement("div",{className:w.a.city},this.props.weatherData.name,",",this.props.weatherData.sys.country)):null)}}]),t}(n.Component),E=a(20),_=a.n(E),b=a(1),g=a.n(b),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:g.a.body},r.a.createElement("div",{className:g.a.currentweatherdetails},r.a.createElement("div",{className:g.a.topic},"Humidity"),r.a.createElement("div",{className:g.a.lines}),r.a.createElement("div",{className:g.a.text},this.props.CurrentweatherData.main.humidity," %")),r.a.createElement("div",{className:g.a.currentweatherdetails},r.a.createElement("div",{className:g.a.topic},"Pressure"),r.a.createElement("div",{className:g.a.lines}),r.a.createElement("div",{className:g.a.text},this.props.CurrentweatherData.main.pressure," hPa")),r.a.createElement("div",{className:g.a.currentweatherdetails},r.a.createElement("div",{className:g.a.topic},"Min Temperature"),r.a.createElement("div",{className:g.a.lines}),r.a.createElement("div",{className:g.a.text},(this.props.CurrentweatherData.main.temp_min-273.15).toFixed(2),"\xb0C")),r.a.createElement("div",{className:g.a.currentweatherdetails},r.a.createElement("div",{className:g.a.topic},"Max Temperature"),r.a.createElement("div",{className:g.a.lines}),r.a.createElement("div",{className:g.a.text},(this.props.CurrentweatherData.main.temp_max-273.15).toFixed(2),"\xb0C")),r.a.createElement("div",{className:g.a.currentweatherdetails},r.a.createElement("div",{className:g.a.topic},"Wind Speed"),r.a.createElement("div",{className:g.a.lines}),r.a.createElement("div",{className:g.a.text},this.props.CurrentweatherData.wind.speed," m/sec")))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={latitude:null,longitude:null,API_KEY:"9ed5e07cc11f0ef0a18b03f79dde4029",weatherData:{base:"",clouds:{},cod:null,coord:{},dt:null,id:null,main:{},name:"",sys:{},visibility:null,weather:[],length:null,wind:{}}},a.getlocation=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){console.log(e.coords.latitude),a.setState({latitude:e.coords.latitude},function(){a.setState({longitude:e.coords.longitude},function(){a.getWeather()})})})},a.getWeather=function(){_.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a.state.latitude,"&lon=").concat(a.state.longitude,"&APPID=").concat(a.state.API_KEY)).then(function(e){var t=e.data;console.log(t),a.setState({weatherData:t},function(){console.log(a.state.weatherData)})}).catch(function(e){console.log(e),a.setState({error:e})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getlocation()}},{key:"render",value:function(){return r.a.createElement("div",{className:p.a.AppContainer},r.a.createElement(y,{weatherData:this.state.weatherData}),r.a.createElement(N,{CurrentweatherData:this.state.weatherData}))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports={tempModal:"temperatureModal_tempModal__fja7a",temp:"temperatureModal_temp__3HBas",city:"temperatureModal_city__39b3F",description:"temperatureModal_description__1wMy3"}}},[[21,1,2]]]);
//# sourceMappingURL=main.3782f2cc.chunk.js.map