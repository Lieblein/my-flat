AFRAME.registerComponent('with-plinth', {
    schema: {
        color: { type: 'color', default: 'white' },
    },

    init() {
        const {
            el,
            data: {
                color,
            },
        } = this;

        const plinthGeometry = this.getGeometry();

        const plinth = document.createElement('a-entity');
        plinth.setAttribute('geometry', plinthGeometry);
        plinth.setAttribute('material', `color: ${color}`);
        plinth.setAttribute('position', '0 -131 0');
        el.appendChild(plinth);
    },

    getGeometry() {
        const { el } = this;
        const geometry = el.getAttribute('geometry');
        const { width, depth } = geometry;

        const isWall = depth === 1;
        const plinthWidth = isWall ? width : width + 4;
        const plinthGeometry = `primitive: box; width: ${plinthWidth}; depth: ${depth + 4}; height: 8`;
        return plinthGeometry;
    },
});
