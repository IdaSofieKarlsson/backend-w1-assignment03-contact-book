/*
You must build these functions:
• addContact(contact: Contact): void - klar
• listContacts(): void → print all contacts - pågår
• findByName(name: string): Contact[]
• removeById(id: number): boolean
*/

//interfaces needed
interface Contact {
id: number;
name: string; 
email?: string;
phone?: string;
tags?: string[]; // e.g. ['family','work']
};

interface NewContact {
    name: string; 
    email?: string;
    phone?: string;
    tags?: string[]; // e.g. ['family','work']
};

//since this will be public, I don't write the actual contact info
//the variables needed, with a little starting data
const contacts: Contact[] = [
    {id: 1, name: 'Mikael', email: 'a@x.y', phone: '123456', tags: ['friends', 'kk', 'career']}, 
    {id: 2, name: 'Agneta', email: 'x', phone: '234567', tags: ['friends', 'family']}, 
    {id: 3, name: 'Padde', email: 'b@x.y', phone: 'x', tags: ['kk']}, 
]; 

//function for adding contact
const addContact = (contact: NewContact): void => {
    ;
    const newContact = {...contact, id: contacts.length + 1};
    contacts.push(newContact);
};

//listContacts(): void → print all contacts
const listContacts = (contact: Contact): void => {
    for (let i: number = 1; i < contacts.length; i++) {
        console.log(`The contacts name is ${contact.name[i]}, email is ${contact.email[i]}, phone is ${contact.phone[i]} and they are ${contact.tags[i]}`);
    }
}

//testing the different functions

addContact({name: 'Ewa', email: 'x', phone: '456789', tags: ['friends']});
addContact({name: 'Stina', email: 'x', phone: '789789', tags: ['friends', 'family']});
addContact({name: 'Peter', email: 'x', phone: '14717', tags: ['friends']});

listContacts(contacts[]);

//checking contacts after adding
console.log(contacts); //varför kommer id sist? fixa senare
