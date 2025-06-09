export default function InventoryTableTwo() {
  const data = [
    { id: 1, name: 'Jackson Husky', age: 48, email: 'solomon@example.com' },
    { id: 2, name: 'Mike Darpan', age: 64, email: 'jackson@example.com' },
    { id: 3, name: 'Michelle John', age: 75, email: 'robert@example.com' },
    { id: 4, name: 'Eric Solomon', age: 33, email: 'michelle@example.com' },
  ];

  return (
    <div>
      <h2>Simple Table 2</h2>
      
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