AFRAME.registerComponent('rails', {
    schema: {
        width: { type: 'number' },
        itemWidth: { type: 'number' },
        itemDepth: { type: 'number' },
    },

    init() {
        this.addRails();
    },
    update() {
        this.el.innerHTML = '';
        this.addRails();
    },
    remove() {
        this.el.innerHTML = '';
    },

    addRails() {
        const { el, data: { width, itemWidth = 3, itemDepth = 3 } } = this;
        const railCount = Math.ceil(width / (2 * itemWidth));
        const startItemPosition = width / -2;
        for (let i = 0; i < railCount; i++) {
            const rail = document.createElement('a-entity');
            rail.setAttribute('geometry', `primitive: box; width: ${itemWidth}; depth: ${itemDepth}; height: 270`);
            rail.setAttribute('material', 'color: #cf9a63');
            const itemPosition = startItemPosition + 2 * i * itemWidth;
            rail.setAttribute('position', `${itemPosition} 0 ${itemDepth / -2}`);
            el.appendChild(rail);
        }

        /* const { el, data: { width, itemDepth = 3 } } = this;
        const a = 4;
        const b = 3;
        const n = 31;
        const startItemPosition = width / -2;
        for (let i = 0; i < n; i++) {
            const rail = document.createElement('a-entity');
            rail.setAttribute('geometry', `primitive: box; width: ${a}; depth: ${itemDepth}; height: 270`);
            rail.setAttribute('material', 'color: #cf9a63');
            const itemPosition = startItemPosition + i * a + i * b;
            rail.setAttribute('position', `${itemPosition} 0 ${itemDepth / -2}`);
            el.appendChild(rail);
        } */
    },
});
