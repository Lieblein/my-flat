AFRAME.registerComponent('facade-with-integrated-handle', {
    schema: {
        width: { type: 'number' },
        height: { type: 'number' },
    },

    init() {
        this.addContent();
    },
    update() {
        this.el.innerHTML = '';
        this.addContent();
    },
    remove() {
        this.el.innerHTML = '';
    },

    addContent() {
        const { el, data: { width, height } } = this;

        const topPart = document.createElement('a-entity');
        const topPartHeight = 3;
        topPart.setAttribute('geometry', `primitive: box; width: ${width}; depth: 2; height: ${topPartHeight}`);
        topPart.setAttribute('material', 'color: #d6d6d6');
        topPart.setAttribute('position', `0 ${height / 2 - topPartHeight / 2} -1`);
        el.appendChild(topPart);

        const bottomPart = document.createElement('a-entity');
        const bottomPartHeight = height - topPartHeight;
        bottomPart.setAttribute('geometry', `primitive: box; width: ${width}; depth: 2; height: ${bottomPartHeight}`);
        bottomPart.setAttribute('material', 'color: white');
        bottomPart.setAttribute('position', `0 ${-height / 2 + bottomPartHeight / 2} 1`);
        el.appendChild(bottomPart);
    },
});
