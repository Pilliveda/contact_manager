// Step 2: Implement the ContactManager class
class ContactManager {
    constructor() {
        this.contacts = [];
    }
    // Add a new contact
    addContact(contact) {
        // Check if ID already exists
        if (this.getContactIndex(contact.id) !== -1) {
            console.log(`Error: Contact with ID ${contact.id} already exists.`);
            return;
        }
        this.contacts.push(contact);
        console.log(`Contact with ID ${contact.id} added successfully.`);
    }
    // View all contacts
    viewContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        }
        return this.contacts;
    }
    // Modify an existing contact
    modifyContact(id, updatedContact) {
        const index = this.getContactIndex(id);
        if (index === -1) {
            console.log(`Error: Contact with ID ${id} not found.`);
            return;
        }
        this.contacts[index] = Object.assign(Object.assign({}, this.contacts[index]), updatedContact);
        console.log(`Contact with ID ${id} modified successfully.`);
    }
    // Delete a contact
    deleteContact(id) {
        const index = this.getContactIndex(id);
        if (index === -1) {
            console.log(`Error: Contact with ID ${id} not found.`);
            return;
        }
        this.contacts.splice(index, 1);
        console.log(`Contact with ID ${id} deleted successfully.`);
    }
    // Helper method to find contact index without using findIndex()
    getContactIndex(id) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id === id) {
                return i;
            }
        }
        return -1;
    }
}
// Step 4: Testing
const manager = new ContactManager();
manager.addContact({ id: 1, name: "John Doe", email: "john@example.com", phone: "12345" });
manager.addContact({ id: 2, name: "Alice Smith", email: "alice@example.com", phone: "67890" });
console.log("Contacts:", manager.viewContacts());
manager.modifyContact(1, { email: "john.doe@example.com" });
console.log("Contacts after modification:", manager.viewContacts());
manager.deleteContact(2);
console.log("Contacts after deletion:", manager.viewContacts());
manager.deleteContact(3); // Testing error case
