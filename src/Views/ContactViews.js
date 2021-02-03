import ContactForm from "../Components/Form";
import Filter from "../Components/Filter";
import Stats from "../Components/Stats";
import ContactList from "../Components/ContactList";

export default function ContactViews() {
  return (
    <div>
      <h1 style={{ fontFamily: "Unkempt" }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ fontFamily: "Unkempt" }}>Contacts</h2>
      <Filter />
      <Stats />
      <ContactList />
    </div>
  );
}
