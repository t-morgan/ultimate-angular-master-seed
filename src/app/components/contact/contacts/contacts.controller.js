function ContactsController($filter, $state) {
  var ctrl = this;
  var contacts = ctrl.contacts;
  ctrl.contactsFilter = $filter('contactsFilter');

  // The line below is supposed to work... and yet it does not
  //ctrl.filteredContacts = $filter('contactsFilter')(contacts, ctrl.filter);

  ctrl.goToContact = function (event) {
    $state.go('contact', {
      id: event.contactId
    });
  };
}

angular
  .module('components.contact')
  .controller('ContactsController', ContactsController);
