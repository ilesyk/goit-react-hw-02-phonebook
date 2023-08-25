import { List, ListItem } from './ContactElement.styled';

export const ContactElement = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </ListItem>
        );
      })}
    </List>
  );
};
