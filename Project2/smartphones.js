function openPhoneDetails(phoneId) {
    const phoneData = {
        phone1: {
            image: './pictures/phone1.jpg',
            title: 'Iphone 15 pro max',
            description: 'The iPhone 15 Pro Max comes with 6.7-inch OLED display with 120Hz refresh rate and Apple s improved A17 Pro processor. On the back there is a Triple camera setup with 48MP main camera.',
            price: '$1400',
            buyLink: 'checkout.html'
        },
        phone2: {
            image: './pictures/phone2.jpg',
            title: 'Iphone 14 pro max',
            description: 'The iPhone 14 Pro Max comes with 6.7-inch OLED display with 120Hz refresh rate and Apple s improve Bionic A16 processor. On the back there is a Triple camera setup with 48MP main camera.',
            price: '$1100',
            buyLink: 'checkout.html'
        },
        phone3: {
            image: './pictures/phone3.jpg',
            title: 'Iphone 13 ',
            description: 'The iPhone 13, launched in September 2021, features a 6.1-inch Super Retina XDR display, the powerful A15 Bionic chip, and a dual-camera system with advanced photo capabilities. It supports 5G, offers longer battery life, and runs on iOS 15. The design includes flat edges, a Ceramic Shield front cover, and comes in various colors.',
            price: '$600',
            buyLink: 'checkout.html'
        },
        phone4: {
            image: './pictures/phone4.jpg',
            title: 'Samsung Galaxy S20',
            description: 'The Samsung Galaxy S20, released in March 2020, has a 6.2-inch Dynamic AMOLED 2X display with a 120Hz refresh rate. It features a triple-camera system (12MP wide, 12MP ultra-wide, 64MP telephoto), supports 5G, and runs on Android 10.',
            price: '$450',
            buyLink: 'checkout.html'
        },
        phone5: {
            image: './pictures/phone5.jpg',
            title: 'Samsung Galaxy S24 Ultra',
            description: 'The Samsung Galaxy S24 Ultra, released in 2024, features a 6.8-inch Dynamic AMOLED 2X display with a 120Hz refresh rate. It boasts a powerful Exynos 2400 or Snapdragon 8 Gen 3 processor, a quad-camera system with a 200MP main sensor, and advanced zoom capabilities. The phone supports 5G, has a large battery, and runs on Android 14.',
            price: '$1700',
            buyLink: 'checkout.html'
        },
        phone6: {
            image: './pictures/phone6.jpg',
            title: 'Samsung Galaxy S24 ',
            description: 'The Samsung Galaxy S24, released in 2024, features a 6.1-inch Dynamic AMOLED display with a 120Hz refresh rate. It is powered by the Exynos 2400 or Snapdragon 8 Gen 3 processor, includes a versatile triple-camera system, and supports 5G connectivity.',
            price: '$870',
            buyLink: 'checkout.html'
        },
        phone7: {
            image: './pictures/phone7.jpg',
            title: 'Samsung Galaxy S22',
            description: 'The Samsung Galaxy S22, released in February 2022, has a 6.1-inch Dynamic AMOLED 2X display with a 120Hz refresh rate. It features a triple-camera system, is powered by the Exynos 2200 or Snapdragon 8 Gen 1, supports 5G, and runs on Android 12.',
            price: '$1000',
            buyLink: 'checkout.html'
        },
        phone8: {
            image: './pictures/phone8.jpg',
            title: 'Samsung Galaxy S23 Ultra',
            description: 'The Samsung Galaxy S23 Ultra, released in February 2023, features a 6.8-inch Dynamic AMOLED 2X display with a 120Hz refresh rate. It is powered by the Snapdragon 8 Gen 2 processor and includes a quad-camera system with a 200MP main sensor.',
            price: '$1500',
            buyLink: 'checkout.html'
        },
        phone9: {
            image: './pictures/phone9.jpg',
            title: 'Google Pixel 6',
            description: 'The Google Pixel 6, released in October 2021, features a 6.4-inch AMOLED display with a 90Hz refresh rate. It is powered by Google s custom Tensor chip and has a dual-camera system with a 50MP main sensor.',
            price: '$300',
            buyLink: 'checkout.html'
        },
        phone10: {
            image: './pictures/phone10.jpg',
            title: 'Google Pixel 7 Pro',
            description: 'The Google Pixel 7 Pro, released in October 2022, features a 6.7-inch OLED display, powered by Google s Tensor chip. It boasts a triple-camera system, 5G support, runs on Android 13, and has a sleek design.',
            price: '$999',
            buyLink: 'checkout.html'
        },
        phone11: {
            image: './pictures/phone11.jpg',
            title: 'Google Pixel 8 Pro',
            description: 'The Google Pixel 8 Pro, released in October 2023, features a 6.7-inch OLED display, powered by Google s Tensor chip. It boasts a triple-camera system, 5G support, runs on Android 13, and has a sleek design.',
            price: '$1100',
            buyLink: 'checkout.html'
        },
        phone12: {
            image: './pictures/phone12.jpg',
            title: 'Xiaomi Redmi Note 11 Pro',
            description: 'The Xiaomi Redmi Note 11 Pro, launched in late 2021, features a 6.67-inch Super AMOLED display with a 120Hz refresh rate. It runs on the MediaTek Helio G96 processor and boasts a quad-camera setup with a 108MP main sensor.',
            price: '$320',
            buyLink: 'checkout.html'
        },
        phone13: {
            image: './pictures/phone13.jpg',
            title: 'Xiaomi Redmi Note 12 Pro',
            description: 'The Redmi Note 12 Pro is a mid-range phone with a 120Hz AMOLED display, a 108MP main camera, and a 5000mAh battery with fast charging.',
            price: '$400',
            buyLink: 'checkout.html'
        },
        phone14: {
            image: './pictures/phone14.jpg',
            title: 'Xiaomi Redmi Note 13 Pro',
            description: 'The Redmi Note 13 Pro is a newer mid-ranger by Xiaomi, boasting a powerful 200MP main camera and up to 12GB of RAM for smooth performance. It has a long-lasting 5000mAh battery with fast charging.',
            price: '$650',
            buyLink: 'checkout.html'
        },

        
    };

    const details = phoneData[phoneId];
    if (details) {
        document.getElementById('details-image').src = details.image;
        document.getElementById('details-title').textContent = details.title;
        document.getElementById('details-description').textContent = details.description;
        document.getElementById('details-price').textContent = details.price;
        document.getElementById('details-buy').href = details.buyLink;

        const detailsSection = document.getElementById('phone-details');
        detailsSection.classList.remove('hidden');
        detailsSection.style.opacity = '1';
        detailsSection.style.visibility = 'visible';
    }
}

function closePhoneDetails() {
    const detailsSection = document.getElementById('phone-details');
    detailsSection.style.opacity = '0';
    detailsSection.style.visibility = 'hidden';
    setTimeout(() => detailsSection.classList.add('hidden'), 300);
}


