/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const users = [{ }];

exports.users = users;

exports.seed = async function(knex) {
  return knex('users').truncate()
    .then(() => {
      return knex('users').insert(users);
    });
};
