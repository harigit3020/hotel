import React from 'react';
import './clock24.css';
import $ from 'jquery';
class Clock24 extends React.Component{
    render(){
        return(<div class="digital-clock">00:00:00</div>);
    
    }
    componentDidMount(){
        $(document).ready(function() {
            clockUpdate();
            setInterval(clockUpdate, 1000);
          })
          
          function clockUpdate() {
            var date = new Date();
            $('.digital-clock').css({'color': '#fff', 'text-shadow': '0 0 6px #ff0'});
            function addZero(x) {
              if (x < 10) {
                return x = '0' + x;
              } else {
                return x;
              }
            }
          
            function twentyfourHour(x) {
              if (x > 24) {
                return x = x - 24;
              } else if (x == 0) {
                return x = 24;
              } else {
                return x;
              }
            }
          
            var h = addZero(twentyfourHour(date.getHours()));
            var m = addZero(date.getMinutes());
            var s = addZero(date.getSeconds());
          
            $('.digital-clock').text(h + ':' + m + ':' + s)
          }
    }
}
export default Clock24;