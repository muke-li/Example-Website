import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import InventoryType from '../components/inventory-type';
import InventoryTableOne from '../components/inventory-table-1';
import InventoryTableTwo from '../components/inventory-table-2';
import InventoryTableThree from '../components/inventory-table-3';
import TabButton from '../components/TabButton';

const Inventory = () => {
    const theme = useTheme();
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            <h1>Inventory</h1>
            <div>
                <TabButton onClick={() => setActiveTab(1)}>Button 1</TabButton>
                <TabButton onClick={() => setActiveTab(2)}>Button 2</TabButton>
                <TabButton onClick={() => setActiveTab(3)}>Button 3</TabButton>
            </div>

            {/* {activeTab === 1 ? <InventoryTableOne /> : null} */}
            {activeTab === 1 && <InventoryTableOne />}
            {activeTab === 2 && <InventoryTableTwo />}
            {activeTab === 3 && <InventoryTableThree />}
        </div>
    );
}

export default Inventory;