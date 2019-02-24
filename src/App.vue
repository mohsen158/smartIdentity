<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <router-view/>
    <sui-divider style="width:900px;margin-left:auto; margin-right:auto" inverted/>
    <p></p>
    <sui-divider style="width:800px;margin-left:auto; margin-right:auto" horizontal inverted>
      <span style="color: #ffffff;">Last log of smart contract</span>
    </sui-divider>
    <div style="width:800px;margin-left:auto; margin-right:auto; height:250px;">
      <!-- <div v-bind:key="item" v-for="item in logs">{{item}}</div> -->
      <sui-message style="width:500px;margin-left:auto; margin-right:auto;" success>
        <sui-message-header>Changes in Service</sui-message-header>
        <p>
          We updated our privacy policy here to better service our customers.
          We recommend reviewing the changes.
        </p>
      </sui-message>

      
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Courses } from "./scripts/smartContract";

export default {
  name: "app",
  data: function() {
    return {
      logs: [12]
    };
  },
  components: {
    HelloWorld
  },
  mounted: function() {
    var instructorEvent = Courses.Instructor();
    var that = this;
    Courses.getInstructor(function(error, result) {
      if (!error) {
        console.log("event recieved:", result);
      } else console.error(error);
    });

    instructorEvent.watch(function(error, result) {
      if (!error) {
        // TODO real time logs :|
        // that.logs.push(result)
        console.log("inja ke kheili naze:", this.logs);
        console.log("event watch recieved:", result);
      } else {
        console.log(error);
      }
    });

    this.$nextTick(function() {});
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin: auto; */
}
</style>
