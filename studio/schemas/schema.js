/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// import custom schemas
import blog from './documents/blog';
import author from './documents/author';

// import custom objects
import customImage from './objects/customImage';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blog, author, customImage]),
});
