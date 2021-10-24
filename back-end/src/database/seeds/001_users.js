
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      const created_at = Date()
      const updated_at = Date()

      return knex('users').insert([
        {id: 1, name: 'username', email: 'login@email.com', password: 'password', created_at : created_at, updated_at : updated_at },
        {id: 2, name: 'username', email: 'login@email.com', password: 'password', created_at : created_at, updated_at : updated_at}
      ]);
    });
};
