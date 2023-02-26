'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const {sanitizeEntity} = require("strapi-utils");
module.exports = {
  async findOne(ctx) {
    let entity = await strapi.services.contacts.findOne({id: ctx.params.id, user: ctx.state.user.id})
    return sanitizeEntity(entity, { model: strapi.models.contacts });
  },

  async create(ctx) {
    let entity;
    console.log(ctx)
    const contacts = ctx.request.body;
    contacts.user = ctx.state.user
    entity = await strapi.services.contacts.create(contacts);
    return sanitizeEntity(entity, { model: strapi.models.contacts });
  },

  async find(ctx) {
    let entities;
    let query = {...ctx.query}
    query.user = ctx.state.user.id;
    entities = await strapi.services.contacts.find(query);
    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.contacts }));
  }
};
