const { extendDeep } = AFRAME.utils;
const meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('a-kitchen-lamp', extendDeep({}, meshMixin, {
    defaultComponents: { 'kitchen-lamp': {} },
    mappings: {
        height: 'kitchen-lamp.height',
    },
}));

AFRAME.registerComponent('kitchen-lamp', {
    schema: {
        height: { type: 'number' },
    },

    init() {
        const { el, data: { height } } = this;
        const color = 'white';

        const topCylinder = document.createElement('a-cylinder');
        const topCylinderHeight = 5;
        topCylinder.setAttribute('height', topCylinderHeight);
        topCylinder.setAttribute('radius', '6');
        topCylinder.setAttribute('material', `color: ${color}`);
        topCylinder.setAttribute('position', `0 ${(height - topCylinderHeight) / 2} 0`);
        el.appendChild(topCylinder);

        const glass = document.createElement('a-cylinder');
        const glassHeight = 10;
        glass.setAttribute('height', glassHeight);
        glass.setAttribute('radius', '5');
        glass.setAttribute('material', 'color: white; opacity: 0.3');
        glass.setAttribute('position', `0 ${(height - glassHeight) / -2} 0`);
        el.appendChild(glass);

        const base = document.createElement('a-cylinder');
        const baseHeight = 5;
        base.setAttribute('height', baseHeight);
        base.setAttribute('radius', '5');
        base.setAttribute('material', `color: ${color}`);
        base.setAttribute('position', `0 ${(height - baseHeight) / -2 + glassHeight} 0`);
        el.appendChild(base);

        const wire = document.createElement('a-cylinder');
        const wireHeight = height - topCylinderHeight - glassHeight - baseHeight;
        wire.setAttribute('height', wireHeight);
        wire.setAttribute('radius', 0.5);
        wire.setAttribute('material', `color: ${color}`);
        wire.setAttribute('position', `0 ${(height - wireHeight) / -2 + glassHeight + baseHeight} 0`);
        el.appendChild(wire);

        const light = document.createElement('a-light');
        light.setAttribute('type', 'point');
        light.setAttribute('intensity', '0.2');
        light.setAttribute('position', `0 ${(height - glassHeight) / -2} 0`);
        el.appendChild(light);
    },
});
