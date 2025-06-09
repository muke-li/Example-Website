export default function InventoryTableOne() {
  const data = [
    { id: 1, productName: 'Wireless Mouse', price: 28, amount: 10 },
    { id: 2, productName: 'Mechanical Keyboard', price: 34, amount: 20 },
    { id: 3, productName: '1080p Webcam', price: 45, amount: 30 },
    { id: 4, productName: '	Laptop Stand', price: 23, amount: 50 },
  ];

  return (
    <div>
      <h2>Computer Accessories</h2>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.productName}</td>
              <td>{person.price}</td>
              <td>{person.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}