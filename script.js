// Modal Functionality - MAIN SETUP
window.addEventListener('load', function() {
    console.log('Page loaded, setting up all modals...');
    
    // FEATURES MODAL
    const featuresModal = document.getElementById('featuresModal');
    const featuresOverlay = document.getElementById('featuresOverlay');
    const featuresClose = document.querySelector('.features-close');
    
    console.log('Features modal:', featuresModal);
    console.log('Features overlay:', featuresOverlay);
    
    // Find ALL features links
    const featuresLinks = document.querySelectorAll('a[href="#features"]');
    console.log('Found features links:', featuresLinks.length);
    
    // Add click listeners to all features links
    featuresLinks.forEach((link, index) => {
        console.log(`Adding listener to features link ${index + 1}:`, link);
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Features link clicked! Opening modal...');
            
            if (featuresModal && featuresOverlay) {
                featuresModal.style.display = 'block';
                featuresOverlay.style.display = 'block';
                
                setTimeout(() => {
                    featuresModal.classList.add('active');
                    featuresOverlay.classList.add('active');
                }, 10);
                
                document.body.style.overflow = 'hidden';
                console.log('Features modal opened successfully!');
            } else {
                console.error('Features modal elements not found!');
            }
        });
    });
    
    // Close features modal function
    function closeFeaturesModal() {
        console.log('Closing features modal...');
        if (featuresModal && featuresOverlay) {
            featuresModal.classList.remove('active');
            featuresOverlay.classList.remove('active');
            
            setTimeout(() => {
                featuresModal.style.display = 'none';
                featuresOverlay.style.display = 'none';
            }, 300);
            
            document.body.style.overflow = 'auto';
            console.log('Features modal closed!');
        }
    }
    
    // Features modal close events
    if (featuresClose) {
        featuresClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeFeaturesModal();
        });
    }
    
    if (featuresOverlay) {
        featuresOverlay.addEventListener('click', function() {
            closeFeaturesModal();
        });
    }
    
    // HOW TO BUY MODAL
    const howtoModal = document.getElementById('howtoModal');
    const howtoOverlay = document.getElementById('howtoOverlay');
    const howtoClose = document.querySelector('.howto-close');
    
    console.log('How to Buy modal:', howtoModal);
    console.log('How to Buy overlay:', howtoOverlay);
    
    // Find ALL how-to-buy links
    const howtoLinks = document.querySelectorAll('a[href="#how-to-buy"]');
    console.log('Found how-to-buy links:', howtoLinks.length);
    
    // Add click listeners to all how-to-buy links
    howtoLinks.forEach((link, index) => {
        console.log(`Adding listener to how-to-buy link ${index + 1}:`, link);
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('How to Buy link clicked! Opening modal...');
            
            if (howtoModal && howtoOverlay) {
                howtoModal.style.display = 'block';
                howtoOverlay.style.display = 'block';
                
                setTimeout(() => {
                    howtoModal.classList.add('active');
                    howtoOverlay.classList.add('active');
                }, 10);
                
                document.body.style.overflow = 'hidden';
                console.log('How to Buy modal opened successfully!');
            } else {
                console.error('How to Buy modal elements not found!');
            }
        });
    });
    
    // Close how-to-buy modal function
    function closeHowtoModal() {
        console.log('Closing how to buy modal...');
        if (howtoModal && howtoOverlay) {
            howtoModal.classList.remove('active');
            howtoOverlay.classList.remove('active');
            
            setTimeout(() => {
                howtoModal.style.display = 'none';
                howtoOverlay.style.display = 'none';
            }, 300);
            
            document.body.style.overflow = 'auto';
            console.log('How to Buy modal closed!');
        }
    }
    
    // How-to-buy modal close events
    if (howtoClose) {
        howtoClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeHowtoModal();
        });
    }
    
    if (howtoOverlay) {
        howtoOverlay.addEventListener('click', function() {
            closeHowtoModal();
        });
    }
    
    // TOKENOMICS MODAL
    const tokenomicsModal = document.getElementById('tokenomicsModal');
    const tokenomicsOverlay = document.getElementById('tokenomicsOverlay');
    const tokenomicsClose = document.querySelector('.tokenomics-close');
    
    console.log('Tokenomics modal:', tokenomicsModal);
    console.log('Tokenomics overlay:', tokenomicsOverlay);
    
    // Find ALL tokenomics links
    const tokenomicsLinks = document.querySelectorAll('a[href="#tokenomics"]');
    console.log('Found tokenomics links:', tokenomicsLinks.length);
    
    // Add click listeners to all tokenomics links
    tokenomicsLinks.forEach((link, index) => {
        console.log(`Adding listener to tokenomics link ${index + 1}:`, link);
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Tokenomics link clicked! Opening modal...');
            
            if (tokenomicsModal && tokenomicsOverlay) {
                tokenomicsModal.style.display = 'block';
                tokenomicsOverlay.style.display = 'block';
                
                setTimeout(() => {
                    tokenomicsModal.classList.add('active');
                    tokenomicsOverlay.classList.add('active');
                }, 10);
                
                document.body.style.overflow = 'hidden';
                console.log('Tokenomics modal opened successfully!');
            } else {
                console.error('Tokenomics modal elements not found!');
            }
        });
    });
    
    // Close tokenomics modal function
    function closeTokenomicsModal() {
        console.log('Closing tokenomics modal...');
        if (tokenomicsModal && tokenomicsOverlay) {
            tokenomicsModal.classList.remove('active');
            tokenomicsOverlay.classList.remove('active');
            
            setTimeout(() => {
                tokenomicsModal.style.display = 'none';
                tokenomicsOverlay.style.display = 'none';
            }, 300);
            
            document.body.style.overflow = 'auto';
            console.log('Tokenomics modal closed!');
        }
    }
    
    // Tokenomics modal close events
    if (tokenomicsClose) {
        tokenomicsClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeTokenomicsModal();
        });
    }
    
    if (tokenomicsOverlay) {
        tokenomicsOverlay.addEventListener('click', function() {
            closeTokenomicsModal();
        });
    }
    
    // GAME MODAL
    const gameModal = document.getElementById('gameModal');
    const gameOverlay = document.getElementById('gameOverlay');
    const gameClose = document.querySelector('.game-close');
    
    console.log('Game modal:', gameModal);
    console.log('Game overlay:', gameOverlay);
    
    // Find ALL game links
    const gameLinks = document.querySelectorAll('a[href="#game"]');
    console.log('Found game links:', gameLinks.length);
    
    // Add click listeners to all game links
    gameLinks.forEach((link, index) => {
        console.log(`Adding listener to game link ${index + 1}:`, link);
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Game link clicked! Opening modal...');
            
            if (gameModal && gameOverlay) {
                gameModal.style.display = 'block';
                gameOverlay.style.display = 'block';
                
                setTimeout(() => {
                    gameModal.classList.add('active');
                    gameOverlay.classList.add('active');
                }, 10);
                
                document.body.style.overflow = 'hidden';
                console.log('Game modal opened successfully!');
            } else {
                console.error('Game modal elements not found!');
            }
        });
    });
    
    // Close game modal function
    function closeGameModal() {
        console.log('Closing game modal...');
        if (gameModal && gameOverlay) {
            gameModal.classList.remove('active');
            gameOverlay.classList.remove('active');
            
            setTimeout(() => {
                gameModal.style.display = 'none';
                gameOverlay.style.display = 'none';
            }, 300);
            
            document.body.style.overflow = 'auto';
            console.log('Game modal closed!');
        }
    }
    
    // Game modal close events
    if (gameClose) {
        gameClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeGameModal();
        });
    }
    
    if (gameOverlay) {
        gameOverlay.addEventListener('click', function() {
            closeGameModal();
        });
    }
    
    // CONTACT MODAL
    const contactModal = document.getElementById('contactModal');
    const contactOverlay = document.getElementById('contactOverlay');
    const contactClose = document.querySelector('.contact-close');
    
    console.log('Contact modal:', contactModal);
    console.log('Contact overlay:', contactOverlay);
    
    // Find ALL contact links
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    console.log('Found contact links:', contactLinks.length);
    
    // Add click listeners to all contact links
    contactLinks.forEach((link, index) => {
        console.log(`Adding listener to contact link ${index + 1}:`, link);
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Contact link clicked! Opening modal...');
            
            if (contactModal && contactOverlay) {
                contactModal.style.display = 'block';
                contactOverlay.style.display = 'block';
                
                setTimeout(() => {
                    contactModal.classList.add('active');
                    contactOverlay.classList.add('active');
                }, 10);
                
                document.body.style.overflow = 'hidden';
                console.log('Contact modal opened successfully!');
            } else {
                console.error('Contact modal elements not found!');
            }
        });
    });
    
    // Close contact modal function
    function closeContactModal() {
        console.log('Closing contact modal...');
        if (contactModal && contactOverlay) {
            contactModal.classList.remove('active');
            contactOverlay.classList.remove('active');
            
            setTimeout(() => {
                contactModal.style.display = 'none';
                contactOverlay.style.display = 'none';
            }, 300);
            
            document.body.style.overflow = 'auto';
            console.log('Contact modal closed!');
        }
    }
    
    // Contact modal close events
    if (contactClose) {
        contactClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeContactModal();
        });
    }
    
    if (contactOverlay) {
        contactOverlay.addEventListener('click', function() {
            closeContactModal();
        });
    }
    
    // ESCAPE KEY HANDLER FOR ALL MODALS
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (featuresModal && featuresModal.classList.contains('active')) {
                closeFeaturesModal();
            }
            if (howtoModal && howtoModal.classList.contains('active')) {
                closeHowtoModal();
            }
            if (tokenomicsModal && tokenomicsModal.classList.contains('active')) {
                closeTokenomicsModal();
            }
            if (gameModal && gameModal.classList.contains('active')) {
                closeGameModal();
            }
            if (contactModal && contactModal.classList.contains('active')) {
                closeContactModal();
            }
        }
    });
    
    // Initialize all modals as hidden
    if (featuresModal) {
        featuresModal.style.display = 'none';
        featuresModal.classList.remove('active');
    }
    if (featuresOverlay) {
        featuresOverlay.style.display = 'none';
        featuresOverlay.classList.remove('active');
    }
    if (howtoModal) {
        howtoModal.style.display = 'none';
        howtoModal.classList.remove('active');
    }
    if (howtoOverlay) {
        howtoOverlay.style.display = 'none';
        howtoOverlay.classList.remove('active');
    }
    if (tokenomicsModal) {
        tokenomicsModal.style.display = 'none';
        tokenomicsModal.classList.remove('active');
    }
    if (tokenomicsOverlay) {
        tokenomicsOverlay.style.display = 'none';
        tokenomicsOverlay.classList.remove('active');
    }
    if (gameModal) {
        gameModal.style.display = 'none';
        gameModal.classList.remove('active');
    }
    if (gameOverlay) {
        gameOverlay.style.display = 'none';
        gameOverlay.classList.remove('active');
    }
    if (contactModal) {
        contactModal.style.display = 'none';
        contactModal.classList.remove('active');
    }
    if (contactOverlay) {
        contactOverlay.style.display = 'none';
        contactOverlay.classList.remove('active');
    }
    
    console.log('All modals setup complete!');
});

// Smooth scrolling for navigation links (exclude modal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Don't prevent default for modal links
        if (this.getAttribute('href') === '#features' || 
            this.getAttribute('href') === '#how-to-buy' || 
            this.getAttribute('href') === '#tokenomics' ||
            this.getAttribute('href') === '#game' ||
            this.getAttribute('href') === '#contact') {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');

// Add mobile menu button
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.classList.add('mobile-menu-btn');
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
navbar.appendChild(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Wallet connection simulation - FIXED
const connectBtn = document.querySelector('.connect-btn');
let isConnected = false;

// Backend API endpoint
const API_BASE_URL = 'http://localhost:3000/api';

// Wallet Modal Elements - DEFINE EARLY
const walletModal = document.getElementById('walletModal');
const walletOverlay = document.getElementById('walletOverlay');
const walletClose = document.querySelector('.wallet-close');
const walletItems = document.querySelectorAll('.wallet-item');

console.log('Wallet modal elements check:');
console.log('- walletModal:', walletModal);
console.log('- walletOverlay:', walletOverlay);
console.log('- walletClose:', walletClose);
console.log('- walletItems:', walletItems.length);

// Connect button click handler - FIXED
if (connectBtn) {
    connectBtn.addEventListener('click', () => {
        console.log('Connect button clicked!');
        console.log('isConnected:', isConnected);
        
        if (!isConnected) {
            // Open wallet modal
            console.log('Opening wallet modal...');
            if (walletModal && walletOverlay) {
                walletModal.classList.add('active');
                walletOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                console.log('Wallet modal opened successfully!');
            } else {
                console.error('Wallet modal elements not found!');
                console.error('walletModal:', walletModal);
                console.error('walletOverlay:', walletOverlay);
            }
        } else {
            // Show disconnect confirmation
            if (confirm('Are you sure you want to disconnect your wallet?')) {
                disconnectWallet();
            }
        }
    });
} else {
    console.error('Connect button not found!');
}

// Close wallet modal function
function closeWalletModal() {
    console.log('Closing wallet modal...');
    if (walletModal && walletOverlay) {
        walletModal.classList.remove('active');
        walletOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('Wallet modal closed!');
    }
}

// Close modal event listeners
if (walletClose) {
    walletClose.addEventListener('click', closeWalletModal);
    console.log('Wallet close button listener added');
}

if (walletOverlay) {
    walletOverlay.addEventListener('click', closeWalletModal);
    console.log('Wallet overlay listener added');
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && walletModal && walletModal.classList.contains('active')) {
        closeWalletModal();
    }
});

// Wallet data storage object
const walletStorage = {
    save: async function(walletData) {
        try {
            // Save to localStorage for immediate access
            localStorage.setItem('akm_wallet_data', JSON.stringify(walletData));
            console.log('Wallet data saved to localStorage:', walletData);
            
            // Try to send to backend API (optional - will work without backend)
            try {
                const response = await fetch(`${API_BASE_URL}/wallet/connect`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(walletData)
                });
                
                if (response.ok) {
                    const result = await response.json();
                    console.log('Wallet data saved to backend:', result);
                    return result;
                } else {
                    console.warn('Backend not available, using localStorage only');
                }
            } catch (backendError) {
                console.warn('Backend not available:', backendError.message);
            }
            
            return walletData;
        } catch (error) {
            console.error('Error saving wallet data:', error);
        }
    },
    
    load: function() {
        try {
            const data = localStorage.getItem('akm_wallet_data');
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error loading wallet data:', error);
            return null;
        }
    },
    
    clear: async function() {
        try {
            const walletData = this.load();
            if (walletData) {
                // Try to remove from backend (optional)
                try {
                    await fetch(`${API_BASE_URL}/wallet/disconnect`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ address: walletData.address })
                    });
                } catch (backendError) {
                    console.warn('Backend not available for disconnect');
                }
            }
            
            localStorage.removeItem('akm_wallet_data');
            console.log('Wallet data cleared');
        } catch (error) {
            console.error('Error clearing wallet data:', error);
        }
    }
};

// Real wallet connection functions - UPDATED FOR REAL CONNECTIONS
const walletConnectors = {
    metamask: async function() {
        if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({ 
                    method: 'eth_requestAccounts' 
                });
                
                if (accounts.length === 0) {
                    throw new Error('No accounts found. Please unlock MetaMask.');
                }
                
                // Switch to Polygon network
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x89' }], // Polygon Mainnet
                    });
                } catch (switchError) {
                    // If Polygon network is not added, add it
                    if (switchError.code === 4902) {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: '0x89',
                                chainName: 'Polygon Mainnet',
                                nativeCurrency: {
                                    name: 'MATIC',
                                    symbol: 'MATIC',
                                    decimals: 18
                                },
                                rpcUrls: ['https://polygon-rpc.com/'],
                                blockExplorerUrls: ['https://polygonscan.com/']
                            }]
                        });
                    } else {
                        throw switchError;
                    }
                }
                
                // Get balance
                const balance = await window.ethereum.request({
                    method: 'eth_getBalance',
                    params: [accounts[0], 'latest']
                });
                
                const maticBalance = (parseInt(balance, 16) / Math.pow(10, 18)).toFixed(4);
                
                return {
                    address: accounts[0],
                    balance: {
                        matic: maticBalance,
                        akm: '0.00'
                    }
                };
            } catch (error) {
                console.error('MetaMask connection error:', error);
                if (error.code === 4001) {
                    throw new Error('User rejected the connection request');
                } else if (error.code === -32002) {
                    throw new Error('MetaMask is already processing a request. Please wait.');
                }
                throw error;
            }
        } else {
            // Redirect to MetaMask website
            window.open('https://metamask.io/download/', '_blank');
            throw new Error('MetaMask not installed - redirecting to installation page');
        }
    },
    
    binance: async function() {
        // Check if Binance Chain Wallet is available
        if (typeof window.BinanceChain !== 'undefined') {
            try {
                // Request account access for Binance Chain Wallet
                const accounts = await window.BinanceChain.request({ 
                    method: 'eth_requestAccounts' 
                });
                
                if (accounts.length === 0) {
                    throw new Error('No accounts found. Please unlock Binance Wallet.');
                }
                
                // Get balance
                const balance = await window.BinanceChain.request({
                    method: 'eth_getBalance',
                    params: [accounts[0], 'latest']
                });
                
                const bnbBalance = (parseInt(balance, 16) / Math.pow(10, 18)).toFixed(4);
                
                return {
                    address: accounts[0],
                    balance: {
                        matic: bnbBalance,
                        akm: '0.00'
                    }
                };
            } catch (error) {
                console.error('Binance Wallet connection error:', error);
                if (error.code === 4001) {
                    throw new Error('User rejected the connection request');
                }
                throw error;
            }
        } else {
            // Redirect to Binance Wallet website
            window.open('https://www.binance.com/en/my/wallet/account/main', '_blank');
            throw new Error('Binance Wallet not installed - redirecting to Binance');
        }
    },
    
    trustwallet: async function() {
        // Trust Wallet connection logic
        if (window.ethereum?.isTrust || window.trustwallet) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({ 
                    method: 'eth_requestAccounts' 
                });
                
                if (accounts.length === 0) {
                    throw new Error('No accounts found. Please unlock Trust Wallet.');
                }
                
                // Get balance
                const balance = await window.ethereum.request({
                    method: 'eth_getBalance',
                    params: [accounts[0], 'latest']
                });
                
                const maticBalance = (parseInt(balance, 16) / Math.pow(10, 18)).toFixed(4);
                
                return {
                    address: accounts[0],
                    balance: {
                        matic: maticBalance,
                        akm: '0.00'
                    }
                };
            } catch (error) {
                console.error('Trust Wallet connection error:', error);
                if (error.code === 4001) {
                    throw new Error('User rejected the connection request');
                }
                throw error;
            }
        } else {
            // Redirect to Turkish Trust Wallet website
            window.open('https://trustwallet.com/tr', '_blank');
            throw new Error('Trust Wallet not installed - redirecting to Trust Wallet Turkish site');
        }
    },
    
    coinbase: async function() {
        // Coinbase Wallet connection logic
        if (window.ethereum?.isCoinbaseWallet) {
            try {
                // Request account access
                const accounts = await window.ethereum.request({ 
                    method: 'eth_requestAccounts' 
                });
                
                if (accounts.length === 0) {
                    throw new Error('No accounts found. Please unlock Coinbase Wallet.');
                }
                
                // Get balance
                const balance = await window.ethereum.request({
                    method: 'eth_getBalance',
                    params: [accounts[0], 'latest']
                });
                
                const maticBalance = (parseInt(balance, 16) / Math.pow(10, 18)).toFixed(4);
                
                return {
                    address: accounts[0],
                    balance: {
                        matic: maticBalance,
                        akm: '0.00'
                    }
                };
            } catch (error) {
                console.error('Coinbase Wallet connection error:', error);
                if (error.code === 4001) {
                    throw new Error('User rejected the connection request');
                }
                throw error;
            }
        } else {
            // Redirect to Coinbase Wallet help page
            window.open('https://help.coinbase.com/en/wallet', '_blank');
            throw new Error('Coinbase Wallet not installed - redirecting to Coinbase Wallet help');
        }
    },
    
    walletconnect: async function() {
        // For WalletConnect, we need to implement the actual WalletConnect protocol
        // For now, redirect to learn more
        window.open('https://walletconnect.network/', '_blank');
        throw new Error('WalletConnect integration coming soon - redirecting to WalletConnect Network');
    },
    
    ledger: async function() {
        // Ledger requires hardware connection through Ledger Live
        window.open('https://www.ledger.com/', '_blank');
        throw new Error('Please connect your Ledger device via Ledger Live and use MetaMask integration');
    },
    
    trezor: async function() {
        // Trezor requires hardware connection through Trezor Suite
        window.open('https://trezor.io/trezor-suite', '_blank');
        throw new Error('Please connect your Trezor device via Trezor Suite and use MetaMask integration');
    },
    
    phantom: async function() {
        // Phantom wallet (Solana) - Real connection
        if (window.solana && window.solana.isPhantom) {
            try {
                const response = await window.solana.connect();
                
                if (!response.publicKey) {
                    throw new Error('Failed to connect to Phantom wallet');
                }
                
                return {
                    address: response.publicKey.toString(),
                    balance: {
                        matic: '0.00', // Phantom is for Solana, not Polygon
                        akm: '0.00'
                    }
                };
            } catch (error) {
                console.error('Phantom Wallet connection error:', error);
                if (error.code === 4001) {
                    throw new Error('User rejected the connection request');
                }
                throw error;
            }
        } else {
            window.open('https://phantom.com/', '_blank');
            throw new Error('Phantom Wallet not installed - redirecting to Phantom website');
        }
    }
};

// Generate unique session ID
function generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Function to update connect button with wallet info
function updateConnectButton(walletData) {
    if (walletData) {
        const shortAddress = `${walletData.address.slice(0, 6)}...${walletData.address.slice(-4)}`;
        connectBtn.innerHTML = `${walletData.name}<br><small>${shortAddress}</small>`;
        connectBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        connectBtn.style.border = 'none';
        connectBtn.style.fontSize = '0.9rem';
        connectBtn.style.lineHeight = '1.2';
        connectBtn.title = `Connected to ${walletData.name}\nAddress: ${walletData.address}\nMATIC: ${walletData.balance.matic}\nAKM: ${walletData.balance.akm}`;
        isConnected = true;
        console.log('Connect button updated with wallet info:', walletData);
    } else {
        connectBtn.innerHTML = 'Connect Wallet';
        connectBtn.style.background = 'var(--gradient-raspberry)';
        connectBtn.style.border = 'none';
        connectBtn.style.fontSize = '1rem';
        connectBtn.style.lineHeight = '1';
        connectBtn.title = 'Connect your wallet';
        isConnected = false;
        console.log('Connect button reset to default state');
    }
}

// Function to disconnect wallet
async function disconnectWallet() {
    await walletStorage.clear();
    updateConnectButton(null);
    console.log('Wallet disconnected and data cleared');
}

// Function to check and restore wallet connection on page load
function restoreWalletConnection() {
    const savedWallet = walletStorage.load();
    if (savedWallet) {
        console.log('Restoring wallet connection:', savedWallet);
        updateConnectButton(savedWallet);
        
        // Check connection time (optional - disconnect after 24 hours)
        const connectionTime = new Date(savedWallet.connectedAt);
        const now = new Date();
        const hoursDiff = (now - connectionTime) / (1000 * 60 * 60);
        
        if (hoursDiff > 24) {
            console.log('Wallet connection expired, disconnecting...');
            disconnectWallet();
        }
    }
}

// Enhanced wallet connection handling with better error messages
console.log('Setting up wallet item listeners...');
walletItems.forEach((item, index) => {
    console.log(`Setting up listener for wallet item ${index + 1}:`, item);
    
    item.addEventListener('click', async () => {
        const walletType = item.getAttribute('data-wallet');
        const walletName = item.querySelector('.wallet-name').textContent;
        
        console.log(`Attempting to connect to ${walletName} (${walletType})`);
        
        // Add connecting state
        item.classList.add('connecting');
        
        try {
            let connectionResult;
            
            // Try to connect to specific wallet
            if (walletConnectors[walletType]) {
                connectionResult = await walletConnectors[walletType]();
            } else {
                throw new Error('Wallet type not supported');
            }
            
            // Validate connection result
            if (!connectionResult || !connectionResult.address) {
                throw new Error('Failed to get wallet address');
            }
            
            // Create wallet data object
            const walletData = {
                name: walletName,
                type: walletType,
                address: connectionResult.address,
                connectedAt: new Date().toISOString(),
                network: walletType === 'phantom' ? 'Solana' : 'Polygon Mainnet',
                balance: connectionResult.balance,
                sessionId: generateSessionId(),
                isAuthenticated: true // Mark as successfully authenticated
            };
            
            // Save wallet data
            await walletStorage.save(walletData);
            
            // Update UI
            item.classList.remove('connecting');
            item.classList.add('success');
            updateConnectButton(walletData);
            
            console.log('Wallet connected successfully:', walletData);
            
            // Show success message
            showNotification(`✅ Successfully connected to ${walletName}!`, 'success');
            
            // Close modal after success
            setTimeout(() => {
                closeWalletModal();
                item.classList.remove('success');
            }, 2000);
            
        } catch (error) {
            item.classList.remove('connecting');
            console.error('Wallet connection failed:', error);
            
            // Handle different types of errors
            if (error.message.includes('not installed') || error.message.includes('redirecting')) {
                // Don't show alert for redirect cases, just log
                console.log(`Redirected to ${walletName} installation page`);
                showNotification(`${walletName} not found. Redirecting to installation...`, 'info');
                
                // Close modal after redirect
                setTimeout(() => {
                    closeWalletModal();
                }, 2000);
            } else if (error.message.includes('rejected')) {
                showNotification('Connection request was rejected by user', 'warning');
            } else if (error.message.includes('already processing')) {
                showNotification('Wallet is already processing a request. Please check your wallet.', 'warning');
            } else {
                // Show alert for actual connection errors
                showNotification(`Failed to connect to ${walletName}: ${error.message}`, 'error');
            }
        }
    });
});

// Add notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10002;
        max-width: 350px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease-out;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            break;
        case 'warning':
            notification.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add CSS for notifications
const notificationCSS = `
@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOut {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}
`;

const notificationStyle = document.createElement('style');
notificationStyle.textContent = notificationCSS;
document.head.appendChild(notificationStyle);

// Enhanced wallet connection validation
function validateWalletConnection(walletData) {
    if (!walletData) return false;
    if (!walletData.address) return false;
    if (!walletData.isAuthenticated) return false;
    
    // Check if connection is recent (within 24 hours)
    const connectionTime = new Date(walletData.connectedAt);
    const now = new Date();
    const hoursDiff = (now - connectionTime) / (1000 * 60 * 60);
    
    return hoursDiff < 24;
}

// Enhanced restore wallet connection function
function restoreWalletConnection() {
    const savedWallet = walletStorage.load();
    if (savedWallet && validateWalletConnection(savedWallet)) {
        console.log('Restoring valid wallet connection:', savedWallet);
        updateConnectButton(savedWallet);
        showNotification(`Welcome back! Connected to ${savedWallet.name}`, 'success');
    } else if (savedWallet) {
        console.log('Wallet connection expired or invalid, clearing...');
        walletStorage.clear();
        showNotification('Previous wallet session expired', 'info');
    }
}

// Listen for wallet account changes
if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
            // User disconnected wallet
            console.log('Wallet disconnected by user');
            disconnectWallet();
            showNotification('Wallet disconnected', 'info');
        } else {
            // Account changed
            const savedWallet = walletStorage.load();
            if (savedWallet && savedWallet.address !== accounts[0]) {
                console.log('Wallet account changed');
                showNotification('Wallet account changed. Please reconnect.', 'warning');
                disconnectWallet();
            }
        }
    });
    
    window.ethereum.on('chainChanged', (chainId) => {
        console.log('Network changed:', chainId);
        const savedWallet = walletStorage.load();
        if (savedWallet) {
            if (chainId !== '0x89' && savedWallet.type !== 'phantom') { // Not Polygon and not Phantom
                showNotification('Please switch to Polygon network', 'warning');
            }
        }
    });
}

// Animated counter for stats
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        if (element.textContent.includes('M')) {
            element.textContent = `$${(value / 1000000).toFixed(1)}M+`;
        } else if (element.textContent.includes('%')) {
            element.textContent = `${value}%`;
        } else if (element.textContent.includes('/')) {
            element.textContent = '24/7';
        } else {
            element.textContent = `${value.toLocaleString()}+`;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate stats counters
            if (entry.target.classList.contains('stats')) {
                const statNumbers = entry.target.querySelectorAll('.stat-item h3');
                statNumbers.forEach((stat, index) => {
                    const targets = [2500000, 15000, 999, 247]; // Target values
                    setTimeout(() => {
                        animateCounter(stat, 0, targets[index], 2000);
                    }, index * 200);
                });
            }
        }
    });
}, { threshold: 0.3 });


// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Price update simulation
function updatePrice() {
    const priceElement = document.querySelector('.price');
    const changeElement = document.querySelector('.change');
    
    if (priceElement && changeElement) {
        const currentPrice = parseFloat(priceElement.textContent.replace('$', ''));
        const change = (Math.random() - 0.5) * 0.002; // Random change between -0.001 and 0.001
        const newPrice = Math.max(0.001, currentPrice + change);
        const percentChange = ((newPrice - currentPrice) / currentPrice * 100);
        
        priceElement.textContent = `$${newPrice.toFixed(4)}`;
        
        if (percentChange > 0) {
            changeElement.textContent = `+${percentChange.toFixed(2)}%`;
            changeElement.className = 'change positive';
        } else {
            changeElement.textContent = `${percentChange.toFixed(2)}%`;
            changeElement.className = 'change negative';
        }
    }
}

// Update price every 5 seconds
setInterval(updatePrice, 5000);

// Tokenomics chart placeholder
const canvas = document.getElementById('tokenChart');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;    // Simple pie chart representation
    const data = [
        { label: 'Liquidity', value: 30, color: '#f97316' },
        { label: 'Marketing', value: 25, color: '#ea580c' },
        { label: 'Development', value: 20, color: '#fb923c' },
        { label: 'Team', value: 15, color: '#0f0f0f' },
        { label: 'Reserve', value: 10, color: '#1a1a1a' }
    ];
    
    let currentAngle = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;
    
    data.forEach(segment => {
        const sliceAngle = (segment.value / 100) * 2 * Math.PI;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = segment.color;
        ctx.fill();
        
        // Add labels
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
        const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${segment.label}`, labelX, labelY);
        ctx.fillText(`${segment.value}%`, labelX, labelY + 15);
        
        currentAngle += sliceAngle;
    });
}

// Particle background effect
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.classList.add('particles');
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particleContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Add particles CSS
const particlesCSS = `
.particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: var(--primary-raspberry);
    border-radius: 50%;
    opacity: 0.5;
    animation: particleFloat linear infinite;
}

@keyframes particleFloat {
    0% {
        transform: translateY(100vh) scale(0);
        opacity: 0;
    }
    10% {
        opacity: 0.5;
    }
    90% {
        opacity: 0.5;
    }
    100% {
        transform: translateY(-100vh) scale(1);
        opacity: 0;
    }
}
`;

const style = document.createElement('style');
style.textContent = particlesCSS;
document.head.appendChild(style);

// Console welcome message
console.log(`
🍑 AKM Koin Platform Loaded!
🐺 Turkish warrior power activated
🚀 Ready for moon mission!
`);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add scroll indicator
const scrollIndicator = document.createElement('div');
scrollIndicator.classList.add('scroll-indicator');
scrollIndicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
document.querySelector('.hero').appendChild(scrollIndicator);

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (scrolled > 100) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
});

// Add scroll indicator CSS
const scrollCSS = `
.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color: var(--primary-raspberry);
    font-size: 2rem;
    animation: bounce 2s infinite;
    cursor: pointer;
    transition: opacity 0.3s ease;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
    }
    40% {
        transform: translateX(-50%) translateY(-10px);
    }
    60% {
        transform: translateX(-50%) translateY(-5px);
    }
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--primary-raspberry);
    font-size: 1.5rem;
    cursor: pointer;
}

@media (max-width: 768px) {
    .mobile-menu-btn {
        display: block;
    }
    
    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--black);
        flex-direction: column;
        padding: 1rem;
        border-top: 1px solid var(--medium-gray);
    }
    
    .nav-menu.active {
        display: flex;
    }
}

.change.negative {
    color: #ef4444;
}
`;

const scrollStyle = document.createElement('style');
scrollStyle.textContent = scrollCSS;
document.head.appendChild(scrollStyle);

// Copy contract address function
function copyContract() {
    const contractAddress = '0x123456789abcdef...';
    navigator.clipboard.writeText(contractAddress).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        copyBtn.style.background = '#10b981';
          setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.style.background = 'var(--gradient-turkish)';
        }, 2000);
    }).catch(() => {
        alert('Contract address copied to clipboard!');
    });
}

// Countdown Timer Functionality
function updateCountdown() {
    // Target date: 2 days, 18 hours, 53 minutes, 37 seconds from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(targetDate.getHours() + 18);
    targetDate.setMinutes(targetDate.getMinutes() + 53);
    targetDate.setSeconds(targetDate.getSeconds() + 37);
    
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        // Launch completed
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Simulate user token amounts (for demo purposes)
function simulateUserStats() {
    const purchasedElement = document.getElementById('purchased-akm');
    const stakeableElement = document.getElementById('stakeable-akm');
    
    if (purchasedElement && stakeableElement) {
        // Simulate random increases
        let purchased = parseInt(localStorage.getItem('purchased-akm') || '0');
        let stakeable = parseInt(localStorage.getItem('stakeable-akm') || '0');
        
        // Random small increases every 10 seconds
        if (Math.random() > 0.7) {
            purchased += Math.floor(Math.random() * 100);
            stakeable += Math.floor(Math.random() * 50);
            
            localStorage.setItem('purchased-akm', purchased.toString());
            localStorage.setItem('stakeable-akm', stakeable.toString());
        }
        
        purchasedElement.textContent = `= ${purchased.toLocaleString()}`;
        stakeableElement.textContent = `= ${stakeable.toLocaleString()}`;
    }
}

// Update user stats every 10 seconds
setInterval(simulateUserStats, 10000);
simulateUserStats(); // Initial call

// Wolf icon animation enhancement
function enhanceWolfIcon() {
    const wolfIcon = document.querySelector('.wolf-icon');
    if (wolfIcon) {
        wolfIcon.style.fontSize = '2rem';
        wolfIcon.style.animation = 'wolfHowl 3s ease-in-out infinite';
    }
}

// Add wolf howl animation
const wolfCSS = `
@keyframes wolfHowl {
    0%, 100% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.1) rotate(-2deg); }
    50% { transform: scale(1.2) rotate(0deg); }
    75% { transform: scale(1.1) rotate(2deg); }
}
`;

const wolfStyle = document.createElement('style');
wolfStyle.textContent = wolfCSS;
document.head.appendChild(wolfStyle);

// Initialize wolf enhancement
setTimeout(enhanceWolfIcon, 1000);

// Enhanced wallet connection simulation
connectBtn.addEventListener('click', () => {
    if (!isConnected) {
        // Don't open modal here, it's handled above
    } else {
        // Show disconnect confirmation
        if (confirm('Are you sure you want to disconnect your wallet?')) {
            connectBtn.innerHTML = 'Connect Wallet';
            connectBtn.style.background = 'var(--gradient-raspberry)';
            connectBtn.style.border = 'none';
            isConnected = false;
            console.log('Wallet disconnected');
        }
    }
});