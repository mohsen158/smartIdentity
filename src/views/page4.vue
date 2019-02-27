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
  <!-- <sui-grid divided="vertically" style="  margin:250px auto; width: 50%;"  > -->
  <div style="  margin:  auto; width: 700px;padding-top:250px">
    <router-link to="/">
      <sui-button>Back</sui-button>
    </router-link>

    <sui-segment stacked="tall">
      <sui-form>
        <sui-grid :columns="2" divided>
          <sui-grid-row stretched>
            <sui-grid-column>
              <sui-form-field>
                <label>First Name</label>
                <input v-model="firstName" placeholder="First Name">
                <sui-checkbox style="margin-top:10px" label="Privecy mode" toggle v-model="p1"/>
              </sui-form-field>
              <sui-form-field>
                <label>Last Name</label>
                
                <input v-model="lastName" placeholder="Last Name">
                <sui-checkbox style="margin-top:10px" label="Privecy mode" toggle v-model="p2"/>
              </sui-form-field>
              <sui-button v-on:click="generate" type="submit">Generate(generate QR code)</sui-button>
            </sui-grid-column>
            <sui-grid-column>
              <qrcode-vue :value="value" :size="size"></qrcode-vue>
            </sui-grid-column>
          </sui-grid-row>
        </sui-grid>
      </sui-form>
    </sui-segment>
    <!-- </sui-grid> -->
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

import MerkleTree from "merkletreejs";
import SHA256 from "crypto-js/sha256";
// const SHA256 = require('crypto-js/sha256')
import QrcodeVue from "qrcode.vue";
// var Courses = CoursesContract.at('0xbB92a826526f7B5de92434811Eb6EFaE289A5A06');
// Courses.setInstructor('Stephen Hawking', 76)
export default {
  name: "home",
  data: function() {
    return {
      firstName: "",
      lastName: "",
      value: [23, 33].toString(),
      size: 250,

      p1: false,
      p2: false
    };
  },
  methods: {
    generate: function() {
      if (this.firstName != "" && this.lastName != "") {
        let identityArray = [];
        if (this.p1) {
          const hFirstName = SHA256(this.firstName);
          this.firstName = "[HIDDEN]";
          identityArray[0] = hFirstName;
          identityArray[2] = true;
        } else {
          identityArray[2] = false;

          identityArray[0] = this.firstName;
        }

        if (this.p2) {
          const hLastName = SHA256(this.lastName);
          this.lastName = "[HIDDEN]";
          identityArray[1] = hLastName;
          identityArray[3] = true;
        } else {
          identityArray[3] = false;
          identityArray[1] = this.lastName;
        }
        identityArray[4] = Courses._eth.accounts[0];
        console.log(identityArray);

        this.value = identityArray.toString();
      }
      // const leaves = [this.firstName, this.lastName].map(x => SHA256(x));
      // const tree = new MerkleTree(leaves, SHA256);
      // const root = tree.getRoot().toString("hex");
      // const leaf = SHA256("a");
      // const proof = tree.getProof(leaf);
      // console.log("tree1:"); // true
      // Courses.setInstructor(root, 23, function() {});

      // console.log(this.firstName);
    }
  },

  components: {
    QrcodeVue
  }
};
</script>
