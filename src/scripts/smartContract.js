
const Web3 = require('web3');
// const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/7b3a02e10a0043feb895438cb1ad9230"));
// web3.eth.getBlock("latest", (error, result) => {
//   console.log('error:', error);
//   console.log('results', result);
// });


if (window.ethereum) {
	web3 = new Web3(window.ethereum);
	try { 
	   window.ethereum.enable().then(function() {
		   // User has allowed account access to DApp...
	   });
	} catch(e) {
	   // User has denied account access to DApp...
	}
 }
 // Legacy DApp Browsers
 else if (window.web3) {
	 web3 = new Web3(web3.currentProvider);
 }
 // Non-DApp Browsers
 else {
	 alert('You have to install MetaMask !');
 }



let contractAddress = '0xf1f5896ace3a78c347eb7eab503450bc93bd0c3b'
let index = 0
// console.log(web3.eth.getStorageAt(contractAddress, index))
// console.log('DEC:' +(web3.eth.getStorageAt(contractAddress, index).then(ttt=>console.log(ttt))))
var CoursesContract =   web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fName",
				"type": "string"
			},
			{
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setInstructor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "age",
				"type": "uint256"
			}
		],
		"name": "Instructor",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInstructor",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
);
web3.version.getNetwork((err, netId) => {
	switch (netId) {
	  case "1":
		console.log('This is mainnet')
		break
	  case "2":
		console.log('This is the deprecated Morden test network.')
		break
	  case "3":
		console.log('This is the ropsten test network.')
		break
	  case "4":
		console.log('This is the Rinkeby test network.')
		break
	  case "42":
		console.log('This is the Kovan test network.')
		break
	  default:
		console.log('This is an unknown network.')
	}
  })


web3.eth.defaultAccount = web3.eth.accounts[0]
// personal.unlockAccount(web3.eth.defaultAccount)
export var Courses = CoursesContract.at('0xfb29057caab019f20b905b9b6acd5854fd18489c')
//  Courses.setInstructor("Stephen Hawking", 76,function(data){
// 	 console.log('iam in setINstructoe :',data);
//  })
// Courses.getInstructor(function(error, result){
// 	if(!error){
//  	  console.log(result);
// 	  }
//    else
// 	 console.error(error);
//    });
// Courses.setInstructor('Stephen Hawking', 76)