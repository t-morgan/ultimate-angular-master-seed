function ContactsController($filter, $state) {
  var ctrl = this;
  var contacts = ctrl.contacts;

  ctrl.goToContact = function (event) {
    $state.go('contact', {
      id: event.contactId
    });
  };

  ctrl.filteredContacts = $filter('contactsFilter')(contacts, ctrl.filter);
}

angular
  .module('components.contact')
  .controller('ContactsController', ContactsController);
