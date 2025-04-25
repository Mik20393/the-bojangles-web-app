export default function Basket ({ items }) {
    return (
        <div>
            {items.length > 0 ? (
                <div>
                    <h2>Your Basket</h2>
                    {items.map((item) => (
                        <div key={item.id}>
                            <h3>{item.product.name}</h3>
                            <p>Size: {item.size}</p>
                            <p>Price: £{item.product.price}.00</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <h2>Your basket is empty</h2>
            )}
        </div>
    )
}