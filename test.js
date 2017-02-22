var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');
var app = require('./app.js')
console.log(app.problem1())

describe("For loop tests", function () {
  describe("Problem 1", function () {
    it("should output an array of 1-10", function () {
      expect(app.problem1()).to.have.members([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    });
  });

  describe("Problem 2", function () {
    it("should output an array of 10-1", function () {
      expect(app.problem2()).to.have.members([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    });
  });

  describe("Problem 3", function () {
    it("should output an array of odd numbers from 1-10", function () {
      expect(app.problem3()).to.have.members([1, 3, 5, 7, 9])
    });
  });

  describe("Problem 4", function () {
    it("should output an array of even numbers from 1-10", function () {
      expect(app.problem4()).to.have.members([2, 4, 6, 8, 10])
    });
  });

  describe("Problem 5", function () {
    it("should output an array of the muliples of 3 that are less than 10", function () {
      expect(app.problem5()).to.have.members([3, 6, 9])
    });
  });

  describe("Problem 6", function () {
    it("outputs an array of names starting with 'J'", function () {
      expect(app.problem6(['Amy', 'Jim', 'James', 'John', 'Sarah'])).to.have.members(["Jim", "James", "John"])
    });
  });

  describe("Problem 7", function () {
    it("outputs the total of all numbers in the array added together", function () {
      expect(app.problem7([1, 2, 3, 4])).to.equal(10);
    });
  });

  describe("Problem 8", function () {
    it("outputs the alphabet from a to z in UPPERCASE", function () {
      expect(app.problem8()).to.have.members(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]);
    });
  });

  describe("Problem 9", function () {
    it("outputs the alphabet from z to a in UPPERCASE", function () {
      expect(app.problem9()).to.have.members(['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A']);
    });
  });

  describe("Problem 10", function () {
    it("returns a string containing all of the array elements joined with a space", function () {
      expect(app.problem10(['a', 'b', 'c', 'd'])).to.equal('a b c d');
    });
  });

  describe("Problem 11", function () {
    it("returns a string containing all of the array elements alternating uppercase and lowercase starting with the first element being uppercase", function () {
      expect(app.problem11(['a', 'p', 'p', 'l', 'e'])).to.equal('ApPlE');
    });
  });

  describe("Problem 12", function () {
    it("returns a string containing all of the array elements alternating uppercase and lowercase starting with the first element being uppercase", function () {
      expect(app.problem12(['a', 'p', 'p', 'l', 'e'])).to.equal('aPpLe');
    });
  });

  describe("Problem 13", function () {
    it("returns a an array containing an array of odd elements as index 0 and another array containing even elements", function () {
      expect(app.problem13([1, 2, 3, 4])).to.deep.include.members([[1, 3], [2, 4]]);
    });
  });

  describe("Problem 14", function () {
    it("returns an array that contains all of the elements from both arrays", function () {
      expect(app.problem14(['a', 'p', 'p', 'l', 'e'], ['j', 'a', 'm'])).to.have.members(['a', 'p', 'p', 'l', 'e', 'j', 'a', 'm']);
    });
  });

  describe("Problem 15", function () {
    it("returns an array containing all of the first letters from the words in the string", function () {
      expect(app.problem15(['apple', 'orchards'])).to.have.members(['a', 'o']);
    });
  });

  describe("Problem 16", function () {
    it("returns an array containing all of the last letters from the words in the string", function () {
      expect(app.problem16(['apple', 'orchards'])).to.have.members(['e', 's']);
    });
  });

  describe("Problem 17", function () {
    it("returns index 1 to n multiplied by the number at index 0", function () {
      expect(app.problem17([2, 1, 2, 3])).to.have.members([2, 2, 4, 6]);
    });
  });

  describe("Problem 18", function () {
    it("returns index 1 to n divided by the number at index 0", function () {
      expect(app.problem18([2, 2, 4, 6])).to.have.members([2, 1, 2, 3]);
    });
  });

  describe("Problem 19", function () {
    it("returns an array with index 0 appeneded to all instances of that character", function () {
      expect(app.problem19(['a', 'apple', 'grape', 'peach', 'banana'])).to.have.members(['a', 'aapple', 'graape', 'peaach', 'baanaanaa']);
    });
  });

  describe("Problem 20", function () {
    it("returns an array containing values based on the step of the for loop given in the parameters", function () {
      expect(app.problem20(0, 10, 1)).to.have.members([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

});
