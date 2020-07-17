AFRAME.registerComponent('rails', {
    schema: {
        width: { type: 'number' },
        itemWidth: { type: 'number' },
    },

    init() {
        const { el, data: { width, itemWidth } } = this;
        const railCount = Math.ceil(width / (2 * itemWidth));
        const startItemPosition = width / -2;
        for (let i = 0; i < railCount; i++) {
            const rail = document.createElement('a-entity');
            rail.setAttribute('geometry', `primitive: box; width: 3; depth: ${itemWidth}; height: 270`);
            rail.setAttribute('material', 'color: #cf9a63');
            const itemPosition = startItemPosition + 2 * i * itemWidth;
            rail.setAttribute('position', `${itemPosition} 0 ${itemWidth / -2}`);
            el.appendChild(rail);
        }
    },
});
