AFRAME.registerComponent('light-cylinder', {
    schema: {
    },

    init() {
        const { el } = this;

        el.setAttribute('geometry', 'primitive: cylinder; radius: 3; height: 2');
        el.setAttribute('material', 'color: white');
    },
});
