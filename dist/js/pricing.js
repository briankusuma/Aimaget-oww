    const data = {
        tabs: [
        {
            title: "tab 1",
            cards: [
            {
                name: "Card 1",
                creditsOptions: [
                {
                    credits: 501,
                    price: 10000,
                    features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"," No daily download limits"," Cancel anytime"],
                },
                {
                    credits: 302,
                    price: 20000,
                    features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"," No daily download limits"],
                },
                {
                    credits: 203,
                    price: 30000,
                    features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"],
                },
                {
                    credits: 104,
                    price: 40000,
                    features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset"],
                },                {
                    credits: 55,
                    price: 50000,
                    features: ["X Standard or X Extended assets a month",],
                },
                ],
            },
            {
                name: "Card 2",
                creditsOptions: [
                {
                    credits: 506,
                    price: 75000,
                    features: ["X Standard or X Extended assets a month"],
                },
                {
                    credits: 307,
                    price: 135000,
                    features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset"],
                },
                {
                    credits: 208,
                    price: 75000,
                    features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"],
                },
                {
                    credits: 109,
                    price: 135000,
                    features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"],
                },
                {
                    credits: 50,
                    price: 75000,
                    features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"," No daily download limits"," Cancel anytime"],
                }
                ],
            },
            ],
        },
        {
            title: "tab 2",
            cards: [
            {
                name: "Card 3",
                creditsOptions: [
                    {
                        credits: 511,
                        price: 75000,
                        features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"," No daily download limits"," Cancel anytime"],
                    },
                    {
                        credits: 312,
                        price: 135000,
                        features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"],
                    },
                    {
                        credits: 213,
                        price: 75000,
                        features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"," No daily download limits"],
                    },
                    {
                        credits: 114,
                        price: 135000,
                        features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits",""],
                    },
                    {
                        credits: 65,
                        price: 75000,
                        features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"],
                    }
                    ],
            },
            {
                name: "Card 4",
                creditsOptions: [
                    {
                        credits: 516,
                        price: 75000,
                        features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"," No daily download limits"],
                    },
                    {
                        credits: 317,
                        price: 135000,
                        features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"],
                    },
                    {
                        credits: 218,
                        price: 75000,
                        features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"," No daily download limits"],
                    },
                    {
                        credits: 119,
                        price: 135000,
                        features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"],
                    },
                    {
                        credits: 70,
                        price: 75000,
                        features: ["X Standard or X Extended assets a month", " $X.XX per Standard $X.XX per Extended asset", " Mix and match Standard and Extended images"," Unlimited rollover of unused credits"," No daily download limits"," Cancel anytime"],
                    }
                    ],
            },
            ],
        },
        ],
    };

    // Fungsi untuk menampilkan kartu pada tab tertentu
    function displayCards(tabIndex, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = ""; // Bersihkan kontainer sebelum menambah elemen baru

        // Mendapatkan data untuk tab tertentu
        const cardsData = data.tabs[tabIndex].cards;

        // Menampilkan dua kartu mulai dari startIndex untuk tab tertentu
        cardsData.forEach((card, cardIndex) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        cardHeader.innerText = `${card.name}`;
        cardElement.appendChild(cardHeader);

        const detailsContainer = document.createElement("div");
        detailsContainer.classList.add("details");

        const priceElement = document.createElement("div");
        priceElement.classList.add("price");
        detailsContainer.appendChild(priceElement);

        const featuresList = document.createElement("ul");
        featuresList.classList.add("features");
        detailsContainer.appendChild(featuresList);

        cardElement.appendChild(detailsContainer);

        // Menampilkan pilihan kredit
        const creditOptions = document.createElement("div");
        creditOptions.classList.add("credit-options");

        card.creditsOptions.forEach((option, optionIndex) => {
            const button = document.createElement("button");
            button.classList.add("credit-option-button");
            button.innerText = `${option.credits}`;
            
                // Jika ini adalah opsi pertama (default), beri kelas 'active' pada button pertama
                if (optionIndex === 0) {
                button.classList.add("activeC");
                }
            
                // Menambahkan event listener untuk tombol
                button.addEventListener("click", () => {
                // Hapus kelas 'active' dari semua tombol dalam container
                const allButtons = container.querySelectorAll(".credit-option-button");
                allButtons.forEach((btn) => {
                    btn.classList.remove("activeC");
                });
            
                // Tambahkan kelas 'active' pada tombol yang diklik
                button.classList.add("activeC");
            
                // Memperbarui detail kartu dengan opsi kredit yang dipilih
                updateCardDetails(tabIndex, cardIndex, optionIndex, containerId);
                });
            
                // Menambahkan tombol ke dalam container
                creditOptions.appendChild(button);
            });
            

        cardElement.appendChild(creditOptions);

        const subscribeButton = document.createElement("button");
        subscribeButton.classList.add("card-subscribe");
        subscribeButton.innerText = "Subscribe";
        subscribeButton.addEventListener("click", () =>
            alert(`Subscribe ${card.name}`)
        );
        cardElement.appendChild(subscribeButton);

        container.appendChild(cardElement);

        updateCardDetails(tabIndex, cardIndex, 0, containerId); // Memperbarui detail kartu untuk pilihan kredit pertama
        });
    }

    // Fungsi untuk memperbarui detail kartu berdasarkan pilihan kredit
    function updateCardDetails(tabIndex, cardIndex, optionIndex, containerId) {
        const card = data.tabs[tabIndex].cards[cardIndex];
        const option = card.creditsOptions[optionIndex];
        const cardElement = document
        .getElementById(containerId)
        .getElementsByClassName("card")[cardIndex];

        const cardHeader = cardElement.querySelector(".card-header");
        cardHeader.innerText = `${option.credits} Credits`;

        const priceElement = cardElement.querySelector(".price");
        priceElement.innerText = `$${option.price.toLocaleString("en-US")} /mo`;

        const featuresList = cardElement.querySelector(".features");
        featuresList.innerHTML = "";
        option.features.forEach((feature) => {
        const featureItem = document.createElement("li");
        featureItem.innerHTML = `<img src="assets/icon-pricing-card.svg"/> ${feature}`;
        featuresList.appendChild(featureItem);
        });
    }

    // Fungsi untuk pindah tab
    function switchTab(tabIndex) {
        // Menyembunyikan semua tab
        document.querySelectorAll(".tab").forEach((tab, index) => {
        tab.classList.toggle("active", index === tabIndex);
        });

        document.querySelectorAll(".card-container").forEach((container, index) => {
        container.classList.toggle("active", index === tabIndex);
        });

        // Tampilkan kartu yang sesuai berdasarkan tab yang dipilih
        displayCards(tabIndex, `cards-tab-${tabIndex}`);
    }

    // Menampilkan kartu pada tab pertama secara default saat halaman dimuat
    document.addEventListener("DOMContentLoaded", () => {
        // Tampilkan tab pertama dan kedua saat halaman dimuat
        displayCards(0, "cards-tab-0");
        displayCards(1, "cards-tab-1");
    });