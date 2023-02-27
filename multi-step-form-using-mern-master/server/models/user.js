const mongoose = require('mongoose');
const { NULL } = require('node-sass');

const userSchema = mongoose.Schema(
  {
    cname: String,
    sname: String,
    email: String,
    countryc: String,
    region: String,
    first_name: {
      type: String,
      required: true,
      trim: true
    },
    last_name: {
      type: String,
      required: true,
      trim: true
    },
    org_name: {
      type: String,
      required: true,
      trim: true
    },
    org_url: {
      type: String,
      required: true,
      trim: true
    },
    ind_name: {
      type: Array,
      required: true,
      trim: true
    },
    deciding_roles: {
      type: String,
      required: true,
      trim: true
    },
    roles: {
      type: String,
      required: true,
      trim: true
    },
    news_tags: {
      type: String,
      required: true,
      trim: true
    },
    user_email: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
          throw new Error('Email is not valid.');
        }
      }
    },
    user_password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6
    },
    country: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
