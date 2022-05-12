export const myMixin = {
  data() {
    return {
      title: 'Mixins are cool',
      copyright: 'All rights reserved. Product of super awesome people'
    };
  },
  created: function() {
    this.greetings();
  },
  methods: {
    greetings: function() {
      console.log('Howdy my good fellow!');
    }
  }
};