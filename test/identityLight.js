var IdentityLight = artifacts.require("./IdentityLight.sol");
contract("IdentityLight", function (accounts) {
    it("testForTest", function () {
        return IdentityLight.deployed().then(function (app) {
            return app.numberOfEndorsees();
        }).then(function (num) {
            assert.equal(num, 3);
        })
    })
})