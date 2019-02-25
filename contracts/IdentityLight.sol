pragma solidity >=0.4.22 <0.6.0;
contract IdentityLight {
address public owner;
uint public numberOfUsers;
    uint public numberOfEndorsees;
    bool public status;    
    
 mapping (address => string) public userIdentityHash;
    mapping (address => uint) public endorsedUserId;
    
    Endorse[] public endorsedUsers;




    event IdentityAdded(address UserAddress,string rootIdentityHash);
    event UserEndorsed(address Endorser, address Endorsee);
    event EndorseeRemoved(address UserAddress);
    event StatusChanged(string Status);


    struct Endorse {
        address endorser;
        address endorsee;
         
        uint endorseeSince;
    }
    
    
     modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    
    
    function changeStatus (bool deactivate) onlyOwner public {
        if (deactivate)
        {status = false;}
      emit   StatusChanged("Smart Contract Deactivated");
    }
    
    
    function addIdentity (string memory rootHashIdentity) public
    {
        userIdentityHash[msg.sender]=rootHashIdentity;
        emit IdentityAdded(msg.sender,rootHashIdentity);
    }
 


 function getIdentityHash() view public returns (string memory){
     return userIdentityHash[msg.sender];
 }


 function addEndorsee(address endorseeAddress)  public {
        uint eid = endorsedUserId[endorseeAddress];
        if (eid == 0) {
            endorsedUserId[endorseeAddress] = endorsedUsers.length;
            eid = endorsedUsers.length++;
        }
        endorsedUsers[eid] = Endorse({endorser: msg.sender, endorsee: endorseeAddress,  endorseeSince: now});
       emit  UserEndorsed(msg.sender, endorseeAddress);
        numberOfEndorsees++;
    }



//  function setInstructor(string memory _fName, uint _age) public {
//   fName = _fName;
//   age = _age;
//   emit Instructor (_fName, _age); 
//  }
 
//  function getInstructor()   public view returns (string memory, uint ) {
     
//   return (fName, age);
//  }
 
  
}
