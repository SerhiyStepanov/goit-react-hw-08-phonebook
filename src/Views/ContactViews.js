import ContactForm from "../Components/Form";
import Filter from "../Components/Filter";
import Stats from "../Components/Stats";
import ContactList from "../Components/ContactList";
import ThumbRepeat from "../Components/ThumbRepeat/ThumbRepeat";

export default function ContactViews() {
  return (
    <div>
      <ThumbRepeat>
        <h1
          style={{
            margin: "0px",
            fontSize: "42px",
            fontFamily: "Unkempt",
            textAlign: "center",
            color: "#fffadc",
          }}
        >
          Phonebook
        </h1>
      </ThumbRepeat>

      <ContactForm />
      <h2
        style={{ fontFamily: "Unkempt", textAlign: "center", color: "#303030" }}
      >
        Find contact
      </h2>
      <Filter />
      <h2
        style={{ fontFamily: "Unkempt", textAlign: "center", color: "#303030" }}
      >
        Contacts
      </h2>
      <ContactList />

      <Stats />
    </div>
  );
}
