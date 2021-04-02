const accountRepository = require('../repositories/account.repository');
const bcrypt = require('bcryptjs');

exports.register = async (account) =>  {
    account.password = await bcrypt.hash(account.password, 8)
    return await accountRepository.add(account)
}
