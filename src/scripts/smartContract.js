
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



let index = 0
// console.log(web3.eth.getStorageAt(contractAddress, index))
// console.log('DEC:' +(web3.eth.getStorageAt(contractAddress, index).then(ttt=>console.log(ttt))))
var CoursesContract =   web3.eth.contract([
	{
		"constant": true,
		"inputs": [],
		"name": "status",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "rootHashIdentity",
				"type": "string"
			}
		],
		"name": "addIdentity",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "endorsedUsers",
		"outputs": [
			{
				"name": "endorser",
				"type": "address"
			},
			{
				"name": "endorsee",
				"type": "address"
			},
			{
				"name": "endorseeSince",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "numberOfEndorsees",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "userIdentityHash",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getIdentityHash",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "endorseeAddress",
				"type": "address"
			}
		],
		"name": "addEndorsee",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "numberOfUsers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "deactivate",
				"type": "bool"
			}
		],
		"name": "changeStatus",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "endorsedUserId",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "UserAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "rootIdentityHash",
				"type": "string"
			}
		],
		"name": "IdentityAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "Endorser",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "Endorsee",
				"type": "address"
			}
		],
		"name": "UserEndorsed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "UserAddress",
				"type": "address"
			}
		],
		"name": "EndorseeRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "Status",
				"type": "string"
			}
		],
		"name": "StatusChanged",
		"type": "event"
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
export var Courses = CoursesContract.at('0xe64ffab6f9500f1de8c422a36e1f9f2c2566790e')
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