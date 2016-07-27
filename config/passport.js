/**
 * Passport configuration
 *
 * This is the configuration for your Passport.js setup and where you
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  // bearer: {
  //   strategy: require('passport-http-bearer').Strategy
  // },

  twitter: {
    name: 'Twitter',
    protocol: 'oauth',
    strategy: require('passport-twitter').Strategy,
    options: {
      consumerKey: 'RW51qhVM86nIbHGWOv6E5vntG',
      consumerSecret: 'SqauvIv4wW1hW1Od2Ta03Ky6BBj2gSyzAo9aP2GhrCUjLyNY8X'
    }
  },

  // github: {
  //   name: 'GitHub',
  //   protocol: 'oauth2',
  //   strategy: require('passport-github').Strategy,
  //   options: {
  //     clientID: 'your-client-id',
  //     clientSecret: 'your-client-secret'
  //   }
  // },

  facebook: {
    name: 'Facebook',
    protocol: 'oauth2',
    strategy: require('passport-facebook').Strategy,
    options: {
      clientID: '220971638302599',
      clientSecret: 'e1cac0630d5cdecfc4bea1efe31fd7a0',
      scope: ['email','public_profile'] /* email is necessary for login behavior */,
      profileFields: ['id','emails', 'name']
    }
  },

  // google: {
  //   name: 'Google',
  //   protocol: 'oauth2',
  //   strategy: require('passport-google-oauth').OAuth2Strategy,
  //   options: {
  //     clientID: 'your-client-id',
  //     clientSecret: 'your-client-secret'
  //   }
  // },

  // cas: {
  //   name: 'CAS',
  //   protocol: 'cas',
  //   strategy: require('passport-cas').Strategy,
  //   options: {
  //     ssoBaseURL: 'http://your-cas-url',
  //     serverBaseURL: 'http://localhost:1337',
  //     serviceURL: 'http://localhost:1337/auth/cas/callback'
  //   }
  // }
};
