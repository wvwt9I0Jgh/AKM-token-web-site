# AKM Wallet Backend

## Kurulum

1. Backend klasörüne gidin:
```bash
cd wallet-backend
```

2. Dependencies yükleyin:
```bash
npm install
```

3. Sunucuyu başlatın:
```bash
npm start
```

veya development mode için:
```bash
npm run dev
```

## API Endpoints

- `POST /api/wallet/connect` - Cüzdan bağlantısı
- `POST /api/wallet/disconnect` - Cüzdan bağlantısını kes
- `GET /api/wallet/balance/:address` - Bakiye sorgula
- `GET /api/wallets` - Tüm cüzdanları listele
- `GET /api/health` - Sağlık kontrolü

## Data Storage

Cüzdan verileri `wallet_data.json` dosyasında saklanır.