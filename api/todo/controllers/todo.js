'use strict';
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  
  async create(ctx) {
    let entity;
    console.log(ctx)
    const todo = ctx.request.body;
    todo.user = ctx.state.user
    entity = await strapi.services.todo.create(todo);
    return sanitizeEntity(entity, { model: strapi.models.todo });
  },

  async find(ctx) {
    let entities;
    let query = {...ctx.query}
    query.user = ctx.state.user.id;
    entities = await strapi.services.todo.find(query);
    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.todo }));
  }

};
