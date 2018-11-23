import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'John',
    },
  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'Doe',
    },
  },
  address: {
    label: 'address',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'WSU Vancouver',
    },
  },
  phone: {
    label: 'phone',
    type: Number,
    optional: false,
    autoform: {
      group: 'Stuff',
      placeholder: '555-555-5555',
    },
  },
  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'johndoe@wsu.edu',
    },
  },
});

Stuff.attachSchema(StuffSchema);
