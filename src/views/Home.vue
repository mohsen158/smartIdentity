<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  <!-- 
  <div class="home" >
    
    <router-link   to="/about">
  <button>sdfdfsd</button>
</router-link>
    
  </div>-->
  <div>
    <h1 style="    text-align: center;
    font-size: 87pt;    color: white;">Identity Light</h1>
    <h2 style=" text-align: center; color: white;">
      Source code has available in
      <a
        href="https://github.com/mohsen158/smartIdentity"
      >https://github.com/mohsen158/smartIdentity</a>
    </h2>
    <h3
      style=" text-align: center; color: white;"
    >Smart contract addresses in Ropsten testnet: 0xe64ffab6f9500f1de8c422a36e1f9f2c2566790e</h3>
    <sui-grid divided="vertically" style="  margin: auto; max-width: 1500px; margin-top:50px">
      <sui-grid-row :columns="4">
        <sui-grid-column>
          <sui-card-group :items-per-row="3">
            <sui-card style="width:auto ">
              <sui-dimmer-dimmable
                @mouseenter.native="addIdentityActive = true"
                @mouseleave.native="addIdentityActive = false"
              >
                <sui-image :src="require('../assets/addIdentity.jpg')"/>
                <sui-dimmer blurring :active="addIdentityActive">
                  <router-link to="/page1">
                    <sui-button inverted>Enter</sui-button>
                  </router-link>
                </sui-dimmer>
              </sui-dimmer-dimmable>
              <sui-card-content>
                <sui-card-header>Add identity</sui-card-header>
                <!-- <sui-card-meta>Create in Sep 2014</sui-card-meta> -->
              </sui-card-content>
              <sui-card-content extra>
                <sui-image
                  style="width:35px; margin-right:5px"
                  :src="require('../assets/icon.png')"
                />Add identity for current user
              </sui-card-content>
            </sui-card>
          </sui-card-group>
        </sui-grid-column>
        <sui-grid-column>
          <sui-card-group :items-per-row="3">
            <sui-card style="width:auto ">
              <sui-dimmer-dimmable
                @mouseenter.native="verifyIdentityActive = true"
                @mouseleave.native="verifyIdentityActive = false"
              >
                <sui-image :src="require('../assets/verifyIdentity.jpg')"/>
                <sui-dimmer blurring :active="verifyIdentityActive">
                  <router-link to="/page2">
                    <sui-button inverted>Enter</sui-button>
                  </router-link>
                </sui-dimmer>
              </sui-dimmer-dimmable>
              <sui-card-content>
                <sui-card-header>Verifying identity</sui-card-header>
                <!-- <sui-card-meta>Create in Sep 2014</sui-card-meta> -->
              </sui-card-content>
              <sui-card-content extra>
                <sui-image
                  style="width:35px; margin-right:5px"
                  :src="require('../assets/icon.png')"
                />Compare merkle tree root of identity
              </sui-card-content>
            </sui-card>
          </sui-card-group>
        </sui-grid-column>
        <sui-grid-column>
          <sui-card-group :items-per-row="3">
            <sui-card style="width:auto ">
              <sui-dimmer-dimmable
                @mouseenter.native="endorseAccountActive = true"
                @mouseleave.native="endorseAccountActive = false"
              >
                <sui-image :src="require('../assets/endorseIdentity.jpg')"/>
                <sui-dimmer blurring :active="endorseAccountActive">
                  <router-link to="/page3">
                    <sui-button inverted>Enter</sui-button>
                  </router-link>
                </sui-dimmer>
              </sui-dimmer-dimmable>
              <sui-card-content>
                <sui-card-header>Endorsing request</sui-card-header>
                <!-- <sui-card-meta>Create in Sep 2014</sui-card-meta> -->
              </sui-card-content>
              <sui-card-content extra>
                <sui-image
                  style="width:35px; margin-right:5px"
                  :src="require('../assets/icon.png')"
                />Endorsing other account
              </sui-card-content>
            </sui-card>
          </sui-card-group>
        </sui-grid-column>

        <sui-grid-column>
          <sui-card-group :items-per-row="3">
            <sui-card style="width:auto ">
              <sui-dimmer-dimmable
                @mouseenter.native="QRCodeGenerationActive = true"
                @mouseleave.native="QRCodeGenerationActive = false"
              >
                <sui-image :src="require('../assets/QRCode.jpg')"/>
                <sui-dimmer blurring :active="QRCodeGenerationActive">
                  <router-link to="/page4">
                    <sui-button inverted>Enter</sui-button>
                  </router-link>
                </sui-dimmer>
              </sui-dimmer-dimmable>
              <sui-card-content>
                <sui-card-header>QR Code</sui-card-header>
                <!-- <sui-card-meta>Create in Sep 2014</sui-card-meta> -->
              </sui-card-content>
              <sui-card-content extra>
                <sui-image
                  style="width:35px; margin-right:5px"
                  :src="require('../assets/icon.png')"
                />Generate QRcode for mobile app verification
              </sui-card-content>
            </sui-card>
          </sui-card-group>

          <!-- <sui-card class="raised link">
            <sui-card-content>
              <sui-card-header>Cute Dog</sui-card-header>
              <sui-image src="/static/images/wireframes/paragraph.png"/>
            </sui-card-content>
            <sui-card-content extra>
              <span slot="right">
                <sui-image src="/static/images/avatar/small/matt.jpg" shape="circular" size="mini"/>identity in privecy mode
              </span>
            </sui-card-content>
          </sui-card>-->
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
    <!-- <div>
    <sui-card class="raised link">
      <sui-card-content>
        <sui-card-header>Cute Dog</sui-card-header>
        <sui-card-meta>Animals</sui-card-meta>
        <sui-image src="/static/images/wireframes/paragraph.png" />
      </sui-card-content>
      <sui-card-content extra>
        <span slot="right">
          <sui-image src="/static/images/avatar/small/matt.jpg" shape="circular" size="mini" /> Matt
        </span>
      </sui-card-content>
    </sui-card>
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Courses } from "../scripts/smartContract";

// Courses.getInstructor(function(error, result){
// 	if(!error){
//  	  console.log('event recieved:',result);
// 	  }
//    else
// 	 console.error(error);
//    });

export default {
  name: "home",
  data() {
    return {
      addIdentityActive: false,
      verifyIdentityActive: false,
      endorseAccountActive: false,
      QRCodeGenerationActive: false
    };
  }
};
</script>
