"use strict";

var address = undefined;

if (dao.members && dao.members.founder && dao.members.founder.address) {
  address = dao.members.founder.address;
}

console.log(address);