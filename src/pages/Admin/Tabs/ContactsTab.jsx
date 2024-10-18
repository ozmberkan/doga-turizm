import { useState } from "react";
import { useSelector } from "react-redux";
import { contactsTableTitles } from "~/data/data";

const ContactsTab = () => {
  const [search, setSearch] = useState("");

  const { contacts } = useSelector((store) => store.contacts);

  const filteredContacts = contacts.filter((contact) => {
    return contact.id.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="bg-white dark:bg-gray-800 p-3 border  dark:border-gray-700 rounded-md shadow-md">
      <div>
        <div className="flex gap-x-2 items-center justify-start ">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md dark:bg-transparent dark:border-gray-700 dark:text-white py-1 px-4 outline-none border"
            placeholder="Ara..."
          />
        </div>
        <div className="overflow-x-auto">
          <table className="border w-full mt-5 dark:border-gray-700 ">
            <thead className="bg-zinc-100 dark:text-white dark:bg-gray-900">
              <tr className="sm:grid flex sm:grid-cols-6 grid-cols-1 place-items-center p-4 gap-5">
                {contactsTableTitles.map((title) => (
                  <th
                    key={title.id}
                    className={`flex items-center gap-x-2  ${
                      title.title === "Mesaj" ? " col-span-2 w-full" : ""
                    }`}
                  >
                    {title.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-zinc-50/5 max-h-96 overflow-y-auto block w-full divide-y">
              {filteredContacts?.map((contact) => (
                <tr
                  key={contact.id}
                  className="sm:grid flex sm:grid-cols-6 grid-cols-1 place-items-center dark:text-white p-4 gap-5"
                >
                  <td className="w-full">{contact.id}</td>
                  <td>{contact.email}</td>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td className="col-span-2 w-full">{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactsTab;
