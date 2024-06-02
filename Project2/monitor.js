document.addEventListener('DOMContentLoaded', function() {
    // Update price range values
    const priceRange = document.getElementById('price');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');

    priceRange.addEventListener('input', function() {
        maxPrice.textContent = `${priceRange.value} $`;
        filterProducts();
    });

    // Gather all filter checkboxes
    const filterCheckboxes = document.querySelectorAll('.filter');

    filterCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            filterProducts();
        });
    });

    // Function to get selected filter values
    function getSelectedFilters() {
        const selectedFilters = {
            price: priceRange.value,
            size: [],
            resolution: [],
            refreshRate: []
        };

        filterCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedFilters[checkbox.dataset.filterType].push(checkbox.value);
            }
        });

        return selectedFilters;
    }

    // Function to filter products based on selected filters
    function filterProducts() {
        const filters = getSelectedFilters();
        const products = document.querySelectorAll('.product');

        products.forEach(function(product) {
            const productPrice = parseInt(product.dataset.price, 10);
            const productSize = product.dataset.size;
            const productResolution = product.dataset.resolution;
            const productRefreshRate = product.dataset.refreshRate;

            const matchesPrice = productPrice <= filters.price;
            const matchesSize = filters.size.length === 0 || filters.size.includes(productSize);
            const matchesResolution = filters.resolution.length === 0 || filters.resolution.includes(productResolution);
            const matchesRefreshRate = filters.refreshRate.length === 0 || filters.refreshRate.includes(productRefreshRate);

            if (matchesPrice && matchesSize && matchesResolution && matchesRefreshRate) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Initialize product display
    filterProducts();

    // Add event listeners to filter category labels to toggle visibility
    const filterLabels = document.querySelectorAll('.filter-group > label');

    filterLabels.forEach(function(label) {
        label.addEventListener('click', function() {
            const filterGroup = label.nextElementSibling;
            if (filterGroup.style.display === 'none' || filterGroup.style.display === '') {
                filterGroup.style.display = 'block';
            } else {
                filterGroup.style.display = 'none';
            }
        });
    });

    // Function to open image in a modal (placeholder function)
    function openModal(imgElement) {
        // Implement modal opening logic here
        console.log('Open modal for', imgElement.src);
    }
});
