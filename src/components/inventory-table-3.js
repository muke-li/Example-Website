export default function InventoryTableThree() {
  const data = [
    { id: 1, name: 'Jared Smith', age: 48, email: 'jared@example.com' },
    { id: 2, name: 'Gurmol sing', age: 64, email: 'gurmol@example.com' },
    { id: 3, name: 'Lucas Brown', age: 75, email: 'lucads@example.com' },
    { id: 4, name: 'Fatima Rozhan', age: 33, email: 'fatima@example.com' },
  ];

  return (
    <div>
      <h2>Simple Table 3</h2>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}