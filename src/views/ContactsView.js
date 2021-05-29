import React, { Component } from 'react';
import ContactList from '../component/contactList/ContactList';
import ContactForm from '../component/contactForm/ContactForm';
import Container from '../component/container/Container';

class ContactsView extends Component {
    render() {
        return (
            <Container>
                <ContactForm />
                <ContactList />
            </Container>
        );
    }
}

export default ContactsView;
