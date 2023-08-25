export const ContactsList= ({ contacts, onDelete })=> {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
