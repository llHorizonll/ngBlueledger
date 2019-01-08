var faker = require('faker');

module.exports = () => {
  const result = {
    login: {
      "Active": true,
      "BuId": faker.random.uuid().toString(),
      "Bu": "torg",
      "DomainId": faker.random.uuid().toString(),
      "ExpireDateTime": faker.date.recent().toDateString(),
      "Firstname": "test",
      "IsAdminBu": true,
      "IsAdminOrganize": true,
      "Language": "En",
      "Lastname": "test",
      "Prefix": "tor",
      "SessionId": faker.random.uuid().toString(),
      "UserId": faker.random.uuid().toString(),
      "Username": "test"
    },
    listasdp: [],
    Income: [],
    Transaction: [],
    assetidddl: [],
    rec: []
  }
  return result
}
