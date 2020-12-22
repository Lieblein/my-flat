const buttonMap = new Map([
    ['toLobby', { camera: { position: '190 0 -64', rotation: '0 350 -60' }, roomId: 'hall' }],
    ['toHall', { camera: { position: '550 0 -145', rotation: '0 350 -60' }, roomId: 'hall' }],
    ['toKitchen', { camera: { position: '230 0 -438', rotation: '-5 -266 0' }, roomId: 'kitchen' }],
    ['toSofa', { camera: { position: '375 -42 -515', rotation: '0 0 0' }, roomId: 'kitchen' }],
    ['toBedroom', { camera: { position: '880 0 -417', rotation: '-16 450 0' }, roomId: 'bedroom' }],
    ['toChildroom', { camera: { position: '910 0 -60', rotation: '-10 270 0' }, roomId: 'childroom' }],
    ['toBathroom', { camera: { position: '570 0 -17', rotation: '-27 553 0' }, roomId: 'bathroom', hideFloor: true }],
    ['toWC', { camera: { position: '360 0 -48', rotation: '-39 540 0' }, roomId: 'wc', hideFloor: true }],
]);

function toggleActiveMenuItem(newActiveButtonId) {
    const menuButtons = document.getElementsByClassName('menu__button');
    const activeMenuItemClass = 'menu__button--active';
    Array.prototype.forEach.call(
        menuButtons,
        button => button.classList.remove(activeMenuItemClass),
    );
    document.getElementById(newActiveButtonId).classList.add(activeMenuItemClass);
}

function moveCamera({ position, rotation }) {
    const camera = document.getElementById('camera');
    camera.setAttribute('position', position);
    camera.setAttribute('rotation', rotation);
}

function toggleLight(newRoomId) {
    const lights = document.getElementsByTagName('a-light');
    Array.prototype.forEach.call(lights, light => light.setAttribute('intensity', 0));
    const newRoomLights = document.getElementById(newRoomId).getElementsByTagName('a-light');
    Array.prototype.forEach.call(newRoomLights, (light) => {
        const intensity = light.getAttribute('data-intensity');
        light.setAttribute('intensity', intensity);
    });
}

function chooseMenuItem() {
    const { id } = this;
    toggleActiveMenuItem(id);

    const { camera, roomId, hideFloor } = buttonMap.get(id);
    moveCamera(camera);
    toggleLight(roomId);

    const floor = document.getElementById('floor');
    floor.setAttribute('visible', !hideFloor);

    // TODO работа с адресной строкой
}

document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.getElementsByClassName('menu__button');
    Array.prototype.forEach.call(menuButtons, button => button.addEventListener('click', chooseMenuItem));

    document.getElementById('scene').addEventListener('loaded', () => {
        chooseMenuItem.call({ id: 'toKitchen' });
    });
});

// TODO hide/open menu
