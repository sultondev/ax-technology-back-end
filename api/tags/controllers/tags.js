'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const {sanitizeEntity} = require("strapi-utils");
module.exports = {
  async findOne(ctx) {
    let entity = await strapi.services.tags.findOne({id: ctx.params.id, user: ctx.state.user.id})
    return sanitizeEntity(entity, { model: strapi.models.tags });
  },
  async create(ctx) {
    let entity;
    console.log(ctx)
    const tags = ctx.request.body;
    tags.user = ctx.state.user
    entity = await strapi.services.tags.create(tags);
    return sanitizeEntity(entity, { model: strapi.models.tags });
  },

  async find(ctx) {
    let entities;
    let query = {...ctx.query}
    query.user = ctx.state.user.id;
    entities = await strapi.services.tags.find(query);
    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.tags }));
  }
};
