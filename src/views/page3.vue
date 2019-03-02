<template>
  <div style="  margin:  auto; width: 800px;padding-top:250px">
    <router-link to="/">
      <sui-button>Back</sui-button>
    </router-link>
    <sui-segment stacked="tall">
      <sui-form>
        <sui-form-field>
          <label>Endorser account</label>
          <span>{{endorserAccount}}</span>
        </sui-form-field>
        <sui-form-field>
          <label>Endorsee account address</label>
          <input v-model="endorsee" placeholder="endorsee">
        </sui-form-field>
        <sui-form-field></sui-form-field>
        <sui-button v-on:click="save" type="submit">endorse(create transaction for endorse)</sui-button>
      </sui-form>
    </sui-segment>
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { Courses } from "../scripts/smartContract";
const Web3 = require("web3");

import MerkleTree from "merkletreejs";
import SHA256 from "crypto-js/sha256";
//TODO change account of metamask  realtime
export default {
  name: "home",
  data: function() {
    return { endorsee: "", endorserAccount: Courses._eth.accounts[0] };
  },
  methods: {
    save: function() {
      if (this.endorsee != "") {
        //TODO Endorse things

        Courses.addEndorsee(this.endorsee, function(err) {
          if (err) alert(err.message);
        });
      }
    }
  }
};
</script>
