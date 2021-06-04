<template>
  <div id="clock-main">
    <div id="block1">
      <div id="clockampm">{{ ap }}</div>
    </div>
    <div id="block2">
      <div id="clocktime">{{ time }}</div>
      <div id="clockdate">
        <span style="font-size: 1.2vw">{{date}}</span> / <span style="font-size: 0.5vw">{{ daysInMonth }}</span>
        <span style="margin-left: 30px;font-size: 1.2vw">{{ day }}</span>
      </div>
      </div>
    </div>


    <div id="block3">
      <div id="greetings">
        {{ greet }}, Northes
      </div>
      <div id="quote">{{ greetSentence }}
      </div>
      <div id="author">-- Nameless</div>
    </div>

  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "Clock",
  data() {
    return {
      time: null,
      ap: null,
      date: null,
      hour: -1,
      daysInMonth: null,
      day: null,
      greet: 'Hello',
      greetSentence: 'Nice to meet you.'
    }
  },
  created() {
    this.setTime()
    setInterval(this.setTime, 1000)
  },
  methods: {
    setTime() {
      var oldHour = this.hour
      this.time = this.dayjs().format('hh·mm·ss')
      this.hour = this.dayjs().get('hour')
      this.ap = this.dayjs().format('A')
      this.date = this.dayjs().format('YYYY  MM  DD')
      this.daysInMonth = this.dayjs().daysInMonth()
      this.day = this.getDay(this.dayjs().day())
      if (oldHour !== this.hour) {
        this.getGreeting()
      }
    },
    getDay(num) {
      switch (num) {
        case 1:
          return '星期一'
        case 2:
          return '星期二'
        case 3:
          return '星期三'
        case 4:
          return '星期四'
        case 5:
          return '星期五'
        case 6:
          return '星期六'
        case 7:
          return '星期日'
      }
    },
    getGreeting() {
      var vm = this
      axios.get('https://apihut.net/greet').then(res => {
        // console.log(res.data)
        vm.greet = res.data.data.words
        vm.greetSentence = res.data.data.sentence
      })
    }
  }
}
</script>

<style scoped>
#clock-main {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  color: #f1f3f5;
}

#block1 {
  text-align: left;
  width: 75%;
  left: 12.5%;
  margin: auto;
}

#clockampm {
  letter-spacing: 1px;
  font-weight: bold;
  animation: fadein 2s;
  -moz-animation: fadein 2s;
  -webkit-animation: fadein 2s;
  -o-animation: fadein 2s;
}


#block2 {
  text-align: center;
  width: 100%;
  margin-top: -40px;
}

#clocktime {
  font-size: 20vw;
  font-weight: bold;
  display: inline;
  text-transform: uppercase;
  letter-spacing: -1px;
  animation: fadein 3s;
  -moz-animation: fadein 3s;
  -webkit-animation: fadein 3s;
  -o-animation: fadein 3s;
  font-family: 'Helvetica', sans-serif;
  -webkit-text-stroke: 2px #fff;
  color: #fff;
  opacity: 0.8;
}

#clockdate {
  /*font-size: 1.2vw;*/
  /*margin-top: -20px;*/
  position: relative;
  top: -25px;
  animation: fadein 3s;
  -moz-animation: fadein 3s;
  -webkit-animation: fadein 3s;
  -o-animation: fadein 3s;
}


#block3 {
  text-align: left;
  width: 75%;
  left: 12.5%;
  margin: auto;
}

#greetings {
  letter-spacing: 1px;
  animation: fadein 4s;
  -moz-animation: fadein 4s;
  -webkit-animation: fadein 4s;
  -o-animation: fadein 4s;
  z-index: 999;
  padding: 0 0 5px 0;
  font-size: 1.8vw;
  font-weight: 300;
}


#quote {
  text-align: left;
  width: 53%;
  animation: fadein 6s;
  -moz-animation: fadein 6s;
  -webkit-animation: fadein 6s;
  -o-animation: fadein 6s;
  padding: 0 0 5px 0;
}

#author {
  letter-spacing: 1px;
  animation: fadein 7s;
  -moz-animation: fadein 7s;
  -webkit-animation: fadein 7s;
  -o-animation: fadein 7s;
}

@keyframes fadein {
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
}
@-moz-keyframes fadein { /* Firefox */
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
}
@-o-keyframes fadein { /* Opera */
  from {
    opacity:0;
  }
  to {
    opacity: 1;
  }
}

</style>
