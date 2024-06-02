document.addEventListener('DOMContentLoaded', function() {
    const priceRange = document.getElementById('price');
    const minPriceDisplay = document.getElementById('min-price');
    const maxPriceDisplay = document.getElementById('max-price');
    const filters = document.querySelectorAll('.filter');
    const products = document.querySelectorAll('.product');

    priceRange.addEventListener('input', function() {
        maxPriceDisplay.textContent = `${priceRange.value} $`;
        filterProducts();
    });

    filters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });

    function filterProducts() {
        const maxPrice = parseInt(priceRange.value);
        const activeFilters = Array.from(filters)
            .filter(filter => filter.checked)
            .reduce((acc, filter) => {
                const type = filter.getAttribute('data-filter-type');
                if (!acc[type]) {
                    acc[type] = [];
                }
                acc[type].push(filter.value);
                return acc;
            }, {});

        products.forEach(product => {
            const productPrice = parseInt(product.getAttribute('data-price'));
            const productProcessor = product.getAttribute('data-processor');
            const productRam = product.getAttribute('data-ram');
            const productGraphics = product.getAttribute('data-graphics');
            const productDisk = product.getAttribute('data-disk');

            const matchesPrice = productPrice <= maxPrice;
            const matchesProcessor = !activeFilters.processor || activeFilters.processor.includes(productProcessor);
            const matchesRam = !activeFilters.ram || activeFilters.ram.includes(productRam);
            const matchesGraphics = !activeFilters.graphics || activeFilters.graphics.includes(productGraphics);
            const matchesDisk = !activeFilters.disk || activeFilters.disk.includes(productDisk);

            if (matchesPrice && matchesProcessor && matchesRam && matchesGraphics && matchesDisk) {
                product.style.display = 'flex';
            } else {
                product.style.display = 'none';
            }
        });
    }
});
