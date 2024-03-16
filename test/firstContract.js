const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("FirstContract", function () {
  async function deployContractFixture() {
    const [owner, account2] = await ethers.getSigners();
    const FirstContract = await ethers.getContractFactory("FirstContract");
    const contract = await FirstContract.deploy();

    return { owner, contract, account2 };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { owner, contract } = await loadFixture(deployContractFixture);
      const contractOwner = await contract.owner();

      expect(contractOwner).to.equal(owner.address);
    });

    it("Should return the right owner", async function () {
      const { owner, contract } = await loadFixture(deployContractFixture);
      const contractOwner = await contract.getOwner();

      expect(contractOwner).to.equal(owner.address);
    });
  });

  describe("Add Lender", function () {
    it("Should revert with correct error in case of other account", async function () {
      const { contract, account2 } = await loadFixture(deployContractFixture);

      await expect(contract.connect(account2).addLender())
        .to.be.revertedWith("Only owner can add lender");
    });
  });

    it("Should add a lender", async function () {
      const { owner, contract } = await loadFixture(deployContractFixture);
      const lender = "0x";
    });
});
