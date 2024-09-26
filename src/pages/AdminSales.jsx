import {Card} from "./Card.jsx";

const AdminSales = () => {
    const monthlySales = 15000;
    const yearlySales = 180000;
    const salesData = [
        { id: 1, date: "2024-09-01", amount: 100, product: "Producto A" },
        { id: 2, date: "2024-09-02", amount: 200, product: "Producto B" },
    ];

    return (
        <div className="sales-view">
            <div className="sales-cards">
                <Card title="Ventas Mensuales" value={`$${monthlySales}`} />
                <Card title="Ventas Anuales" value={`$${yearlySales}`} />
            </div>
            <div className="sales-table">
                <h2>Últimas 10 Ventas</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Monto</th>
                        <th>Producto</th>
                    </tr>
                    </thead>
                    <tbody>
                    {salesData.map((sale) => (
                        <tr key={sale.id}>
                            <td>{sale.date}</td>
                            <td>{sale.amount}</td>
                            <td>{sale.product}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminSales;