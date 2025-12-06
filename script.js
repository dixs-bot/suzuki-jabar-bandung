// Data produk mobil Suzuki
const products = [
    {
        id: "ertiga",
        name: "All New Ertiga",
        category: "passenger",
        image: "https://images.unsplash.com/photo-1593539315669-e8b21a9a2a9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        variants: [
            {
                id: "gl-mt",
                name: "GL MT",
                otr: 265350000,
                specs: {
                    "Mesin": "K15B, 1462 cc",
                    "Tenaga": "104.7 PS @ 6000 rpm",
                    "Torsi": "138 Nm @ 4400 rpm",
                    "Transmisi": "Manual 5-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "45 L",
                    "Kapasitas Penumpang": "7 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD"
                }
            },
            {
                id: "gx-at",
                name: "GX AT",
                otr: 276400000,
                specs: {
                    "Mesin": "K15B, 1462 cc",
                    "Tenaga": "104.7 PS @ 6000 rpm",
                    "Torsi": "138 Nm @ 4400 rpm",
                    "Transmisi": "Otomatis 4-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "45 L",
                    "Kapasitas Penumpang": "7 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD"
                }
            },
            {
                id: "cruise-at",
                name: "Cruise AT",
                otr: 294800000,
                specs: {
                    "Mesin": "K15B, 1462 cc",
                    "Tenaga": "104.7 PS @ 6000 rpm",
                    "Torsi": "138 Nm @ 4400 rpm",
                    "Transmisi": "Otomatis 4-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "45 L",
                    "Kapasitas Penumpang": "7 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD, ESP"
                }
            }
        ]
    },
    {
        id: "xl7",
        name: "New XL7",
        category: "passenger",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        variants: [
            {
                id: "zeta-mt",
                name: "Zeta MT",
                otr: 269900000,
                specs: {
                    "Mesin": "K15B, 1462 cc",
                    "Tenaga": "104.7 PS @ 6000 rpm",
                    "Torsi": "138 Nm @ 4400 rpm",
                    "Transmisi": "Manual 5-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "45 L",
                    "Kapasitas Penumpang": "7 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD, ESP"
                }
            },
            {
                id: "zeta-at",
                name: "Zeta AT",
                otr: 280000000,
                specs: {
                    "Mesin": "K15B, 1462 cc",
                    "Tenaga": "104.7 PS @ 6000 rpm",
                    "Torsi": "138 Nm @ 4400 rpm",
                    "Transmisi": "Otomatis 4-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "45 L",
                    "Kapasitas Penumpang": "7 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD, ESP"
                }
            },
            {
                id: "alpha-at",
                name: "Alpha AT",
                otr: 298000000,
                specs: {
                    "Mesin": "K15B, 1462 cc",
                    "Tenaga": "104.7 PS @ 6000 rpm",
                    "Torsi": "138 Nm @ 4400 rpm",
                    "Transmisi": "Otomatis 4-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "45 L",
                    "Kapasitas Penumpang": "7 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD, ESP, Hill Hold Control"
                }
            }
        ]
    },
    {
        id: "ignis",
        name: "New Ignis",
        category: "passenger",
        image: "https://images.unsplash.com/photo-1619705254930-7e9226174b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        variants: [
            {
                id: "gl-mt",
                name: "GL MT",
                otr: 239500000,
                specs: {
                    "Mesin": "K12M, 1197 cc",
                    "Tenaga": "82 PS @ 6000 rpm",
                    "Torsi": "113 Nm @ 4200 rpm",
                    "Transmisi": "Manual 5-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "32 L",
                    "Kapasitas Penumpang": "5 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD"
                }
            },
            {
                id: "gx-ag",
                name: "GX AGS",
                otr: 259500000,
                specs: {
                    "Mesin": "K12M, 1197 cc",
                    "Tenaga": "82 PS @ 6000 rpm",
                    "Torsi": "113 Nm @ 4200 rpm",
                    "Transmisi": "Auto Gear Shift 5-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "32 L",
                    "Kapasitas Penumpang": "5 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD"
                }
            }
        ]
    },
    {
        id: "baleno",
        name: "New Baleno Hatchback",
        category: "passenger",
        image: "https://images.unsplash.com/photo-1583121274608-343299974db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        variants: [
            {
                id: "mt",
                name: "MT",
                otr: 285000000,
                specs: {
                    "Mesin": "K12N, 1197 cc",
                    "Tenaga": "90 PS @ 6000 rpm",
                    "Torsi": "118 Nm @ 4400 rpm",
                    "Transmisi": "Manual 5-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "37 L",
                    "Kapasitas Penumpang": "5 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD, ESP"
                }
            },
            {
                id: "at",
                name: "AT",
                otr: 298000000,
                specs: {
                    "Mesin": "K12N, 1197 cc",
                    "Tenaga": "90 PS @ 6000 rpm",
                    "Torsi": "118 Nm @ 4400 rpm",
                    "Transmisi": "Otomatis CVT",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "37 L",
                    "Kapasitas Penumpang": "5 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD, ESP"
                }
            }
        ]
    },
    {
        id: "swift",
        name: "All New Swift",
        category: "passenger",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        variants: [
            {
                id: "mt",
                name: "MT",
                otr: 319000000,
                specs: {
                    "Mesin": "K12N, 1197 cc",
                    "Tenaga": "90 PS @ 6000 rpm",
                    "Torsi": "118 Nm @ 4400 rpm",
                    "Transmisi": "Manual 5-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "37 L",
                    "Kapasitas Penumpang": "5 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD, ESP"
                }
            },
            {
                id: "at",
                name: "AT",
                otr: 332000000,
                specs: {
                    "Mesin": "K12N, 1197 cc",
                    "Tenaga": "90 PS @ 6000 rpm",
                    "Torsi": "118 Nm @ 4400 rpm",
                    "Transmisi": "Otomatis CVT",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "37 L",
                    "Kapasitas Penumpang": "5 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD, ESP"
                }
            }
        ]
    },
    {
        id: "jimny",
        name: "New Jimny",
        category: "passenger",
        image: "https://images.unsplash.com/photo-1617654112368-307921291f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        variants: [
            {
                id: "mt",
                name: "MT",
                otr: 475000000,
                specs: {
                    "Mesin": "K15B, 1462 cc",
                    "Tenaga": "104.7 PS @ 6000 rpm",
                    "Torsi": "138 Nm @ 4400 rpm",
                    "Transmisi": "Manual 5-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "40 L",
                    "Kapasitas Penumpang": "4 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD, ESP, Hill Hold Control"
                }
            },
            {
                id: "at",
                name: "AT",
                otr: 485000000,
                specs: {
                    "Mesin": "K15B, 1462 cc",
                    "Tenaga": "104.7 PS @ 6000 rpm",
                    "Torsi": "138 Nm @ 4400 rpm",
                    "Transmisi": "Otomatis 4-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "40 L",
                    "Kapasitas Penumpang": "4 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS, EBD, ESP, Hill Hold Control"
                }
            }
        ]
    },
    {
        id: "carry",
        name: "New Carry Pickup",
        category: "commercial",
        image: "https://images.unsplash.com/photo-1583121274608-343299974db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        variants: [
            {
                id: "fd",
                name: "Flat Deck",
                otr: 175500000,
                specs: {
                    "Mesin": "G15A, 1493 cc",
                    "Tenaga": "96.5 PS @ 6000 rpm",
                    "Torsi": "135 Nm @ 4400 rpm",
                    "Transmisi": "Manual 5-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "43 L",
                    "Daya Angkut": "1 Ton",
                    "Dimensi Bak": "Panjang 2500 mm, Lebar 1750 mm"
                }
            },
            {
                id: "wd",
                name: "Wide Deck",
                otr: 177500000,
                specs: {
                    "Mesin": "G15A, 1493 cc",
                    "Tenaga": "96.5 PS @ 6000 rpm",
                    "Torsi": "135 Nm @ 4400 rpm",
                    "Transmisi": "Manual 5-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "43 L",
                    "Daya Angkut": "1 Ton",
                    "Dimensi Bak": "Panjang 2500 mm, Lebar 1850 mm"
                }
            }
        ]
    },
    {
        id: "apv",
        name: "APV Arena",
        category: "commercial",
        image: "https://images.unsplash.com/photo-1554224154-260325c0594e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        variants: [
            {
                id: "sgx",
                name: "SGX",
                otr: 258000000,
                specs: {
                    "Mesin": "G15A, 1493 cc",
                    "Tenaga": "92 PS @ 6000 rpm",
                    "Torsi": "127 Nm @ 4000 rpm",
                    "Transmisi": "Manual 5-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "46 L",
                    "Kapasitas Penumpang": "7 Kursi",
                    "Keselamatan": "SRS Airbag, ABS"
                }
            },
            {
                id: "luxury",
                name: "Luxury",
                otr: 273000000,
                specs: {
                    "Mesin": "G15A, 1493 cc",
                    "Tenaga": "92 PS @ 6000 rpm",
                    "Torsi": "127 Nm @ 4000 rpm",
                    "Transmisi": "Otomatis 4-percepatan",
                    "Bahan Bakar": "Bensin",
                    "Kapasitas Tangki": "46 L",
                    "Kapasitas Penumpang": "7 Kursi",
                    "Keselamatan": "Dual SRS Airbag, ABS"
                }
            }
        ]
    }
];

// Variabel global
let currentProduct = null;
let currentVariant = null;
let activeFilter = 'all';

// Fungsi untuk format Rupiah
function formatRupiah(angka) {
    if (!angka && angka !== 0) return "0";
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Fungsi untuk parse Rupiah kembali ke angka
function parseRupiah(str) {
    return Number(str.toString().replace(/\./g, ""));
}

// Fungsi untuk menghitung cicilan
function calculateInstallment(price, dp, tenor, interest) {
    // Rumus flat rate sederhana
    // TODO: Ganti sesuai SOP perusahaan
    const principal = price - dp;
    const monthlyInterest = (interest / 100) / 12;
    const monthlyInstallment = principal / tenor + (principal * monthlyInterest);
    
    return {
        totalDp: dp,
        monthly: monthlyInstallment,
        total: dp + (monthlyInstallment * tenor)
    };
}

// Inisialisasi saat DOM dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Setup navbar
    setupNavbar();
    
    // Render produk
    renderProducts();
    
    // Setup filter
    setupFilter();
    
    // Setup simulasi kredit
    setupSimulation();
    
    // Setup modal
    setupModal();
    
    // Setup form kontak
    setupContactForm();
    
    // Setup input Rupiah
    setupRupiahInput();
});

// Setup navbar responsif
function setupNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Tutup menu saat link diklik
    document.querySelectorAll('.nav-menu ul li a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Render produk ke grid
function renderProducts(filter = 'all') {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Membuat kartu produk
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productId = product.id;
    
    // Ambil harga terendah dan tertinggi
    const prices = product.variants.map(v => v.otr);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    
    // Hitung cicilan estimasi (DP 30%, tenor 60 bulan, bunga 8%)
    const dp = minPrice * 0.3;
    const installment = calculateInstallment(minPrice, dp, 60, 8);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <span class="category">${product.category}</span>
            <p class="variants">Tersedia ${product.variants.length} tipe</p>
            <div class="price-info">
                <span class="price">Rp ${formatRupiah(minPrice)} - ${formatRupiah(maxPrice)}</span>
                <span class="installment">Cicilan: Rp ${formatRupiah(Math.round(installment.monthly))}/bln</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', function() {
        openProductModal(product);
    });
    
    return card;
}

// Setup filter kategori
function setupFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter produk
            activeFilter = this.dataset.filter;
            renderProducts(activeFilter);
        });
    });
}

// Setup simulasi kredit di halaman utama
function setupSimulation() {
    const carSelect = document.getElementById('sim-car');
    const variantSelect = document.getElementById('sim-variant');
    const priceInput = document.getElementById('sim-price');
    const calculateBtn = document.getElementById('calculate-sim');
    
    // Isi dropdown mobil
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        carSelect.appendChild(option);
    });
    
    // Event listener untuk perubahan mobil
    carSelect.addEventListener('change', function() {
        const productId = this.value;
        const product = products.find(p => p.id === productId);
        
        // Reset dan isi dropdown variant
        variantSelect.innerHTML = '<option value="">-- Pilih Tipe --</option>';
        variantSelect.disabled = !product;
        
        if (product) {
            product.variants.forEach(variant => {
                const option = document.createElement('option');
                option.value = variant.id;
                option.textContent = variant.name;
                variantSelect.appendChild(option);
            });
        }
        
        // Reset harga
        priceInput.value = '';
    });
    
    // Event listener untuk perubahan variant
    variantSelect.addEventListener('change', function() {
        const productId = carSelect.value;
        const variantId = this.value;
        
        if (productId && variantId) {
            const product = products.find(p => p.id === productId);
            const variant = product.variants.find(v => v.id === variantId);
            
            // Update harga
            priceInput.value = `Rp ${formatRupiah(variant.otr)}`;
        } else {
            priceInput.value = '';
        }
    });
    
    // Event listener untuk tombol hitung
    calculateBtn.addEventListener('click', function() {
        calculateSimulation();
    });
}

// Fungsi untuk menghitung simulasi kredit
function calculateSimulation() {
    const priceText = document.getElementById('sim-price').value;
    const dpText = document.getElementById('sim-dp').value;
    const tenor = parseInt(document.getElementById('sim-tenor').value);
    const interest = parseFloat(document.getElementById('sim-interest').value);
    
    if (!priceText || !dpText) {
        alert('Mohon lengkapi data mobil dan DP');
        return;
    }
    
    const price = parseRupiah(priceText.replace('Rp ', ''));
    const dp = parseRupiah(dpText);
    
    if (dp >= price) {
        alert('DP harus lebih kecil dari harga mobil');
        return;
    }
    
    const result = calculateInstallment(price, dp, tenor, interest);
    
    // Tampilkan hasil
    document.getElementById('result-total-dp').textContent = `Rp ${formatRupiah(Math.round(result.totalDp))}`;
    document.getElementById('result-monthly').textContent = `Rp ${formatRupiah(Math.round(result.monthly))}`;
    document.getElementById('result-total').textContent = `Rp ${formatRupiah(Math.round(result.total))}`;
    
    document.getElementById('simulation-result').style.display = 'block';
}

// Setup modal produk
function setupModal() {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close');
    
    // Tutup modal saat tombol close diklik
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Tutup modal saat area luar modal diklik
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Setup tab
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update active tab pane
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === `${tabId}-tab`) {
                    pane.classList.add('active');
                }
            });
        });
    });
    
    // Setup tombol hitung di modal
    document.getElementById('calculate-modal').addEventListener('click', function() {
        calculateModalSimulation();
    });
}

// Fungsi untuk membuka modal produk
function openProductModal(product) {
    currentProduct = product;
    currentVariant = product.variants[0]; // Default ke variant pertama
    
    const modal = document.getElementById('product-modal');
    
    // Update header modal
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-image').src = product.image;
    
    // Render variant buttons
    renderVariantButtons();
    
    // Update harga dan spesifikasi
    updateModalDetails();
    
    // Tampilkan modal
    modal.style.display = 'block';
}

// Render tombol variant
function renderVariantButtons() {
    const container = document.getElementById('variant-buttons');
    container.innerHTML = '';
    
    currentProduct.variants.forEach(variant => {
        const button = document.createElement('button');
        button.className = 'variant-btn';
        button.textContent = variant.name;
        
        if (variant.id === currentVariant.id) {
            button.classList.add('active');
        }
        
        button.addEventListener('click', function() {
            // Update active variant
            currentVariant = variant;
            
            // Update active button
            document.querySelectorAll('.variant-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Update detail modal
            updateModalDetails();
        });
        
        container.appendChild(button);
    });
}

// Update detail modal (harga dan spesifikasi)
function updateModalDetails() {
    // Update harga
    document.getElementById('modal-price').textContent = `Rp ${formatRupiah(currentVariant.otr)}`;
    document.getElementById('modal-car-price').value = `Rp ${formatRupiah(currentVariant.otr)}`;
    
    // Update spesifikasi
    const specsList = document.getElementById('specs-list');
    specsList.innerHTML = '';
    
    for (const [key, value] of Object.entries(currentVariant.specs)) {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        
        specItem.innerHTML = `
            <div class="spec-label">${key}</div>
            <div class="spec-value">${value}</div>
        `;
        
        specsList.appendChild(specItem);
    }
    
    // Update WhatsApp button
    const waBtn = document.getElementById('modal-wa-btn');
    waBtn.href = `https://wa.me/628123456789?text=Halo%20saya%20tertarik%20dengan%20${currentProduct.name}%20${currentVariant.name}`;
}

// Fungsi untuk menghitung simulasi di modal
function calculateModalSimulation() {
    const priceText = document.getElementById('modal-car-price').value;
    const dpText = document.getElementById('modal-dp').value;
    const tenor = parseInt(document.getElementById('modal-tenor').value);
    const interest = parseFloat(document.getElementById('modal-interest').value);
    
    if (!dpText) {
        alert('Mohon masukkan DP');
        return;
    }
    
    const price = parseRupiah(priceText.replace('Rp ', ''));
    const dp = parseRupiah(dpText);
    
    if (dp >= price) {
        alert('DP harus lebih kecil dari harga mobil');
        return;
    }
    
    const result = calculateInstallment(price, dp, tenor, interest);
    
    // Tampilkan hasil
    document.getElementById('modal-total-dp').textContent = `Rp ${formatRupiah(Math.round(result.totalDp))}`;
    document.getElementById('modal-monthly').textContent = `Rp ${formatRupiah(Math.round(result.monthly))}`;
    document.getElementById('modal-total').textContent = `Rp ${formatRupiah(Math.round(result.total))}`;
    
    document.getElementById('modal-result').style.display = 'block';
}

// Setup form kontak
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // TODO: Integrasi WhatsApp API atau Backend
        const whatsappMessage = `Halo, saya ${name} (${email}, ${phone}). ${message}`;
        const whatsappURL = `https://wa.me/628123456789?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Buka WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Reset form
        contactForm.reset();
        
        // Tampilkan notifikasi
        alert('Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.');
    });
}

// Setup input Rupiah
function setupRupiahInput() {
    document.querySelectorAll('.rupiah-input').forEach(input => {
        input.addEventListener('keyup', function() {
            let angka = this.value.replace(/[^,\d]/g, '');
            angka = angka.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            this.value = angka;
        });
    });
}
