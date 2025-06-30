const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Data file path
const WALLET_DATA_FILE = path.join(__dirname, 'wallet_data.json');

// Helper function to read wallet data
async function readWalletData() {
    try {
        const data = await fs.readFile(WALLET_DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist, return empty object
        return {};
    }
}

// Helper function to write wallet data
async function writeWalletData(data) {
    try {
        await fs.writeFile(WALLET_DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error('Error writing wallet data:', error);
        return false;
    }
}

// Helper function to simulate AKM balance (in real app, this would query blockchain)
function generateAKMBalance() {
    return (Math.random() * 1000 + 100).toFixed(2);
}

// API Routes

// Connect wallet endpoint
app.post('/api/wallet/connect', async (req, res) => {
    try {
        const { name, type, address, connectedAt, network, balance, sessionId } = req.body;
        
        console.log(`🔗 Wallet Connection Request:`, {
            name,
            type,
            address: `${address.slice(0, 6)}...${address.slice(-4)}`,
            network
        });
        
        // Read existing data
        const walletData = await readWalletData();
        
        // Add/update wallet entry
        walletData[address] = {
            name,
            type,
            address,
            connectedAt,
            lastUpdated: new Date().toISOString(),
            network,
            balance: {
                matic: balance.matic,
                akm: generateAKMBalance()
            },
            sessionId,
            connectionCount: (walletData[address]?.connectionCount || 0) + 1,
            totalConnections: Object.keys(walletData).length + 1
        };
        
        // Save data
        await writeWalletData(walletData);
        
        console.log(`✅ Wallet connected successfully: ${address}`);
        console.log(`📊 Total connected wallets: ${Object.keys(walletData).length}`);
        
        res.json({
            success: true,
            message: 'Wallet connected successfully',
            data: walletData[address]
        });
        
    } catch (error) {
        console.error('❌ Error connecting wallet:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to connect wallet',
            error: error.message
        });
    }
});

// Disconnect wallet endpoint
app.post('/api/wallet/disconnect', async (req, res) => {
    try {
        const { address } = req.body;
        
        console.log(`🔌 Wallet Disconnection Request: ${address.slice(0, 6)}...${address.slice(-4)}`);
        
        // Read existing data
        const walletData = await readWalletData();
        
        if (walletData[address]) {
            // Update disconnect time instead of deleting
            walletData[address].disconnectedAt = new Date().toISOString();
            walletData[address].status = 'disconnected';
            
            await writeWalletData(walletData);
            
            console.log(`✅ Wallet disconnected: ${address}`);
            
            res.json({
                success: true,
                message: 'Wallet disconnected successfully'
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Wallet not found'
            });
        }
        
    } catch (error) {
        console.error('❌ Error disconnecting wallet:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to disconnect wallet',
            error: error.message
        });
    }
});

// Get wallet balance endpoint
app.get('/api/wallet/balance/:address', async (req, res) => {
    try {
        const { address } = req.params;
        
        // Read wallet data
        const walletData = await readWalletData();
        
        if (walletData[address]) {
            // Simulate balance updates
            const updatedBalance = {
                matic: (parseFloat(walletData[address].balance.matic) + (Math.random() - 0.5) * 0.1).toFixed(4),
                akm: (parseFloat(walletData[address].balance.akm) + Math.random() * 10).toFixed(2)
            };
            
            // Update stored balance
            walletData[address].balance = updatedBalance;
            walletData[address].lastUpdated = new Date().toISOString();
            
            await writeWalletData(walletData);
            
            res.json({
                success: true,
                balance: updatedBalance
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Wallet not found'
            });
        }
        
    } catch (error) {
        console.error('❌ Error fetching balance:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch balance',
            error: error.message
        });
    }
});

// Get all wallets endpoint (for admin/monitoring)
app.get('/api/wallets', async (req, res) => {
    try {
        const walletData = await readWalletData();
        
        // Return summary without sensitive data
        const summary = Object.entries(walletData).map(([address, data]) => ({
            address: `${address.slice(0, 6)}...${address.slice(-4)}`,
            name: data.name,
            type: data.type,
            network: data.network,
            connectedAt: data.connectedAt,
            lastUpdated: data.lastUpdated,
            balance: data.balance,
            connectionCount: data.connectionCount,
            status: data.status || 'connected'
        }));
        
        res.json({
            success: true,
            totalWallets: summary.length,
            connectedWallets: summary.filter(w => w.status !== 'disconnected').length,
            wallets: summary
        });
        
    } catch (error) {
        console.error('❌ Error fetching wallets:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch wallets',
            error: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'AKM Wallet Backend is running',
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log('🚀 AKM Wallet Backend Server Started');
    console.log(`📡 Server running on http://localhost:${PORT}`);
    console.log(`📊 API endpoints:`);
    console.log(`   - POST /api/wallet/connect`);
    console.log(`   - POST /api/wallet/disconnect`);
    console.log(`   - GET  /api/wallet/balance/:address`);
    console.log(`   - GET  /api/wallets`);
    console.log(`   - GET  /api/health`);
    console.log(`💾 Data file: ${WALLET_DATA_FILE}`);
    console.log('✅ Ready to accept wallet connections!');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down AKM Wallet Backend...');
    process.exit(0);
});
