const map = L.map("map").setView([59.936, 30.302], 13);

const lightMap = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
        attribution: "© OpenStreetMap © CARTO",
    }
);

const darkMap = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
        attribution: "© OpenStreetMap © CARTO",
    }
);

lightMap.addTo(map);

const placeIcon = L.divIcon({
    className: "",
    html: `<div class="place-marker">✦</div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -20],
});

function createPopup(place) {
    return `
        <div class="popup-card">
            <img src="${place.image}" alt="${place.title}">
            <h3>${place.title}</h3>
            <p>${place.short}</p>
            <a class="read-more" href="#${place.id}">
                Подробнее →
            </a>
        </div>
    `;
}

const markers = [];

places.forEach((place) => {
    const marker = L.marker(place.coords, {
        icon: placeIcon,
    })
        .addTo(map)
        .bindPopup(createPopup(place));

    markers.push({ marker, place });
});
