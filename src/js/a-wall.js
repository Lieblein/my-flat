const { extendDeep } = AFRAME.utils;
const meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('a-wall', extendDeep({}, meshMixin, {
    defaultComponents: {
        wall: {},
    },
    mappings: {
        width: 'wall.width',
        front: 'wall.front',
        color: 'wall.color',
    },
}));

AFRAME.registerComponent('wall', {
    schema: {
        width: { type: 'number', default: 1 },
        // стены могут быть только фронтальными или профильными
        front: { type: 'boolean', default: false },
        color: { type: 'color', default: 'white' },
    },

    init() {
        const { el, data: { width, front, color } } = this;

        el.setAttribute('geometry', `primitive: box; width: ${width}; depth: 1; height: 270`);
        el.setAttribute('material', `color: ${color}`);
        if (!front) {
            el.setAttribute('rotation', '0 90 0');
        }
    },
});
